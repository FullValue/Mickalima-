/**
 * Tracking léger et sans dépendance : pousse les événements dans
 * window.dataLayer (compatible GTM / GA4) et window.gtag si présent.
 * La solution d'analytique du site pourra consommer ces événements tels quels.
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
