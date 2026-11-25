/**
 * Tracking léger et sans dépendance : pousse les événements dans
 * window.dataLayer (compatible GTM / GA4) et window.gtag si présent.
 *
 * - GA4 se charge seulement si VITE_GA4_ID est défini au build (ex. G-XXXXXXX).
 *   Sans identifiant, rien n'est chargé ni envoyé à un tiers.
 * - Chaque formulaire joint leadContext() à l'e-mail Web3Forms : page d'arrivée,
 *   page d'envoi, référent et paramètres utm. La source d'une demande est donc
 *   lisible dans l'e-mail reçu, même sans outil d'analytique.
 */

type TrackParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export const track = (event: string, params: TrackParams = {}): void => {
  try {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event, ...params });
    if (typeof window.gtag === 'function') window.gtag('event', event, params);
    if (import.meta.env.DEV) console.debug('[track]', event, params);
  } catch {
    /* le tracking ne doit jamais casser l'expérience */
  }
};

/* ---------- Attribution des demandes ---------- */

const ATTR_KEY = 'ml_attribution';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'] as const;

type Attribution = Record<string, string>;

const readAttribution = (): Attribution => {
  try {
    return JSON.parse(sessionStorage.getItem(ATTR_KEY) || '{}') as Attribution;
  } catch {
    return {};
  }
};

/** Mémorise, une fois par session, la page d'arrivée, le référent et les utm. */
const captureAttribution = (): void => {
  try {
    const params = new URLSearchParams(window.location.search);
    const hasCampaign = UTM_KEYS.some((k) => params.has(k));
    // Garde la première arrivée de la session, sauf si une campagne (utm, gclid) la remplace.
    if (sessionStorage.getItem(ATTR_KEY) && !hasCampaign) return;
    const attr: Attribution = { page_arrivee: window.location.pathname };
    let referrer = '';
    try {
      const ref = document.referrer ? new URL(document.referrer) : null;
      if (ref && ref.hostname !== window.location.hostname) referrer = ref.hostname;
    } catch {
      /* référent illisible */
    }
    attr.referent = referrer || 'direct';
    UTM_KEYS.forEach((k) => {
      const v = params.get(k);
      if (v) attr[k] = v.slice(0, 100);
    });
    sessionStorage.setItem(ATTR_KEY, JSON.stringify(attr));
  } catch {
    /* sessionStorage indisponible */
  }
};

/** Champs à joindre à chaque envoi de formulaire. */
export const leadContext = (): Attribution => {
  if (typeof window === 'undefined') return {};
  return { ...readAttribution(), page_envoi: window.location.pathname };
};

/** Conversion principale : une demande envoyée avec succès. */
export const trackLead = (form: string): void => {
  const ctx = leadContext();
  track('generate_lead', {
    form,
    page: ctx.page_envoi,
    source: ctx.utm_source || ctx.referent,
  });
};

/* ---------- Initialisation côté navigateur ---------- */

const loadGa4 = (id: string): void => {
  if (!/^G-[A-Z0-9]+$/.test(id) || document.getElementById('ga4-loader')) return;
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments as unknown as Record<string, unknown>);
  };
  window.gtag('js', new Date());
  window.gtag('config', id, { anonymize_ip: true });
  const s = document.createElement('script');
  s.id = 'ga4-loader';
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);
};

let initialized = false;

/** À appeler une fois au démarrage côté client. */
export const initTracking = (): void => {
  if (initialized || typeof window === 'undefined') return;
  initialized = true;
  captureAttribution();

  const ga4 = import.meta.env.VITE_GA4_ID as string | undefined;
  if (ga4) loadGa4(ga4.trim());

  // Clics sur un numéro de téléphone, où qu'il soit sur le site
  // (les boutons WhatsApp ont déjà leurs propres événements).
  document.addEventListener(
    'click',
    (e) => {
      const a = (e.target as Element | null)?.closest?.('a');
      const href = a?.getAttribute('href') || '';
      if (href.startsWith('tel:')) track('phone_click', { page: window.location.pathname });
    },
    { capture: true },
  );
};
