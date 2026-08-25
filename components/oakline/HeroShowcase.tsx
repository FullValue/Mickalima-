import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { m, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  AlertCircle,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Home,
  KeyRound,
  Loader2,
} from 'lucide-react';
import { COMMUNES, HERO_SLIDES } from '../../constants';
import { BIENS } from '../biensData';
import { EASE, PillButton } from './primitives';
import { track } from './tracking';
import { buildWhatsappUrl, WHATSAPP_PATH } from './whatsapp';

/**
 * Hero plein écran — module d'intention interactif (liquid glass) :
 * 1. « Quel est votre projet immobilier ? » → 2 cartes (estimer / rechercher).
 * 2a. Estimation : formulaire progressif en 4 étapes avec barre de
 *     progression, retour sans perte de saisie, envoi Web3Forms existant,
 *     puis écran de succès avec CTA secondaire « Continuer sur WhatsApp ».
 * 2b. Recherche : étape légère (type + secteur optionnel) puis redirection
 *     vers /nos-biens avec critères appliqués via paramètres d'URL.
 */

const WEB3FORMS_KEY = '38f90cdc-9f17-48ef-bae6-f94e9b44e41f';
const HERO_IMAGE = HERO_SLIDES[0];

const STEP_LABELS = ['Le bien', 'Caractéristiques', 'Votre projet', 'Coordonnées'];
const TYPES_BIEN = ['Appartement', 'Maison', 'Autre'];
const PROJETS = ['Vendre ce bien', 'Explorer sa valeur'];
const DELAIS = ['Moins de 3 mois', '3 à 6 mois', '6 à 12 mois', 'Plus tard'];
const SEARCH_TYPES = ['Tous les biens', 'Appartement', 'Maison'];
const COMMUNE_NAMES = COMMUNES.map((c) => c.name);
const SEARCH_CITIES = Array.from(new Set(BIENS.map((b) => b.city))).sort((a, b) =>
  a.localeCompare(b, 'fr')
);

type Mode = 'intent' | 'estimation' | 'search' | 'done';

interface EstData {
  ville: string;
  typeBien: string;
  surface: string;
  pieces: string;
  projet: string;
  delai: string;
  nom: string;
  telephone: string;
  email: string;
}

const EMPTY_EST: EstData = {
  ville: '',
  typeBien: '',
  surface: '',
  pieces: '',
  projet: '',
  delai: '',
  nom: '',
  telephone: '',
  email: '',
};

const inputClass =
  'w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/45 transition-colors focus:border-white/60 focus:bg-white/15 focus:outline-none';
const labelClass =
  'mb-1.5 block text-left text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70';

/* Chip sélectionnable (types, projets, recherche) */
const Chip: React.FC<{
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={active}
    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
      active
        ? 'bg-white text-[#011d41]'
        : 'border border-white/30 bg-white/10 text-white/85 hover:bg-white/20'
    }`}
  >
    {children}
  </button>
);

export const HeroShowcase: React.FC = () => {
  const reduce = useReducedMotion();
  const navigate = useNavigate();

  const [mode, setMode] = useState<Mode>('intent');
  const [step, setStep] = useState(0);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [est, setEst] = useState<EstData>(EMPTY_EST);
  const [searchType, setSearchType] = useState<string>(SEARCH_TYPES[0]);
  const [searchVille, setSearchVille] = useState('');

  const setField =
    (key: keyof EstData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setEst((d) => ({ ...d, [key]: e.target.value }));

  /* --- Navigation du module --- */
  const openEstimation = () => {
    track('hero_intent', { intent: 'estimation' });
    track('estimation_form_start');
    setSendError(false);
    setMode('estimation');
    setStep(0);
  };
  const openSearch = () => {
    track('hero_intent', { intent: 'recherche' });
    setMode('search');
  };
  const back = () => {
    if (mode === 'estimation' && step > 0) setStep((s) => s - 1);
    else setMode('intent');
  };

  /* --- Envoi estimation (Web3Forms, même backend qu'avant) --- */
  const submitEstimation = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setSendError(false);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Estimation express — ${est.ville || 'Pays de Gex'}`,
          from_name: 'mickael-lima.immo',
          botcheck: '',
          demande: 'Estimation gratuite',
          ville: est.ville,
          type_bien: est.typeBien,
          surface_m2: est.surface,
          pieces: est.pieces,
          projet: est.projet,
          delai: est.delai,
          nom: est.nom,
          telephone: est.telephone,
          email: est.email,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error('web3forms');
      track('estimation_form_complete');
      setMode('done');
    } catch (err) {
      console.error('Web3Forms error:', err);
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  /* --- Redirection recherche vers /nos-biens (critères en URL) --- */
  const goSearch = () => {
    track('cta_vers_biens', { type: searchType, ville: searchVille || 'toutes' });
    const params = new URLSearchParams();
    if (searchType === 'Appartement' || searchType === 'Maison') params.set('type', searchType);
    if (searchVille) params.set('ville', searchVille);
    const qs = params.toString();
    navigate(qs ? `/nos-biens?${qs}` : '/nos-biens');
  };

  /* URL WhatsApp post-estimation : ville/type uniquement (pas de coordonnées) */
  const waPostEstimation = buildWhatsappUrl(
    `Bonjour, je viens de vous transmettre une demande d'estimation pour mon ${
      est.typeBien ? est.typeBien.toLowerCase() : 'bien'
    }${est.ville ? ` situé à ${est.ville}` : ''}.`
  );

  const anim = {
    initial: reduce ? false : { opacity: 0, x: 24 },
    animate: { opacity: 1, x: 0 },
    exit: reduce ? undefined : { opacity: 0, x: -24 },
    transition: { duration: 0.3, ease: EASE },
  };

  return (
    <section
      aria-label="Mickaël Lima Immobilier Prestige — Pays de Gex"
      className="relative flex min-h-[100svh] flex-col overflow-hidden rounded-b-[32px] shadow-[0_30px_80px_-30px_rgba(1,29,65,0.45)]"
    >
      {/* Image de fond unique — Ken Burns lent */}
      <m.img
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        initial={reduce ? false : { scale: 1.18 }}
        animate={{ scale: 1 }}
        transition={{ duration: 9, ease: EASE }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/55 via-black/20 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 via-black/30 to-transparent"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#011d41]/25" />

      {/* Titre */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-8 pt-32 text-center text-white">
        <m.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] backdrop-blur-sm"
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-white/70" />
          Agent immobilier prestige — Pays de Gex
        </m.p>

        <h1 className="max-w-5xl font-serif text-[2.6rem] leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
          <SplitWordsSafe text="L'excellence immobilière" delay={0.25} />
          <br />
          <span className="italic">
            <SplitWordsSafe text="au cœur du Pays de Gex" delay={0.45} />
          </span>
        </h1>

        <m.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
          className="mt-7 max-w-xl text-base font-light leading-relaxed text-white/85 md:text-lg"
        >
          Vente, estimation et accompagnement sur mesure pour une clientèle
          exigeante, frontalière et internationale.
        </m.p>
      </div>

      {/* Module interactif — bas du hero */}
      <div className="relative z-10 px-4 pb-8 sm:px-6 md:pb-10">
        <m.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
          className="mx-auto w-full max-w-3xl rounded-[28px] border border-white/25 bg-white/10 p-6 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.65)] backdrop-blur-2xl md:p-8"
        >
          <AnimatePresence mode="wait" initial={false}>
            {/* ---------- INTENTION ---------- */}
            {mode === 'intent' && (
              <m.div key="intent" {...anim}>
                <h2 className="text-center font-serif text-2xl tracking-tight text-white md:text-[1.75rem]">
                  Quel est votre projet immobilier ?
                </h2>
                <p className="mt-1.5 text-center text-sm text-white/65">
                  Choisissez, je vous oriente instantanément.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={openEstimation}
                    className="group relative rounded-2xl border border-white/40 bg-white/15 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                  >
                    <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#011d41]">
                      <Home size={20} aria-hidden="true" />
                    </span>
                    <span className="block font-semibold text-white">Faire estimer mon bien</span>
                    <span className="mt-1 block text-xs text-white/60">
                      Gratuit · réponse sous 24 h · déplacement inclus
                    </span>
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="absolute right-4 top-4 text-white/50 transition-all duration-300 group-hover:rotate-45 group-hover:text-white"
                    />
                  </button>

                  <button
                    type="button"
                    onClick={openSearch}
                    className="group relative rounded-2xl border border-white/20 bg-white/5 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/35 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                  >
                    <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white">
                      <KeyRound size={20} aria-hidden="true" />
                    </span>
                    <span className="block font-semibold text-white">Rechercher un bien</span>
                    <span className="mt-1 block text-xs text-white/60">
                      Appartements &amp; maisons disponibles
                    </span>
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="absolute right-4 top-4 text-white/40 transition-all duration-300 group-hover:rotate-45 group-hover:text-white"
                    />
                  </button>
                </div>
              </m.div>
            )}

            {/* ---------- ESTIMATION (wizard 4 étapes) ---------- */}
            {mode === 'estimation' && (
              <m.div key={`est-${step}`} {...anim}>
                {/* Retour + progression */}
                <div className="mb-5 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={back}
                    aria-label="Retour à l'étape précédente"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 text-white/85 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                  >
                    <ArrowLeft size={16} aria-hidden="true" />
                  </button>
                  <div className="flex-1">
                    <div
                      role="progressbar"
                      aria-valuemin={1}
                      aria-valuemax={4}
                      aria-valuenow={step + 1}
                      aria-label={`Étape ${step + 1} sur 4`}
                      className="h-1 w-full overflow-hidden rounded-full bg-white/15"
                    >
                      <div
                        className="h-full rounded-full bg-white transition-all duration-500 ease-out"
                        style={{ width: `${((step + 1) / 4) * 100}%` }}
                      />
                    </div>
                    <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                      Étape {step + 1}/4 · {STEP_LABELS[step]}
                    </p>
                  </div>
                </div>

                {step === 0 && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setStep(1);
                    }}
                  >
                    <label htmlFor="est-ville" className={labelClass}>
                      Où se situe votre bien ?
                    </label>
                    <input
                      id="est-ville"
                      name="ville"
                      list="communes-list"
                      value={est.ville}
                      onChange={setField('ville')}
                      required
                      placeholder="Ex : Ferney-Voltaire, Gex, Divonne-les-Bains…"
                      className={inputClass}
                    />
                    <datalist id="communes-list">
                      {COMMUNE_NAMES.map((n) => (
                        <option key={n} value={n} />
                      ))}
                    </datalist>
                    <div className="mt-5 flex justify-end">
                      <PillButton type="submit" variant="light" arrow>
                        Continuer
                      </PillButton>
                    </div>
                  </form>
                )}

                {step === 1 && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!est.typeBien) return;
                      setStep(2);
                    }}
                  >
                    <span className={labelClass}>Type de bien</span>
                    <div className="flex flex-wrap gap-2">
                      {TYPES_BIEN.map((t) => (
                        <Chip key={t} active={est.typeBien === t} onClick={() => setEst((d) => ({ ...d, typeBien: t }))}>
                          {t}
                        </Chip>
                      ))}
                    </div>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="est-surface" className={labelClass}>
                          Surface (m²)
                        </label>
                        <input
                          id="est-surface"
                          type="number"
                          min={9}
                          inputMode="numeric"
                          required
                          value={est.surface}
                          onChange={setField('surface')}
                          placeholder="Ex : 85"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="est-pieces" className={labelClass}>
                          Nombre de pièces
                        </label>
                        <select id="est-pieces" required value={est.pieces} onChange={setField('pieces')} className={inputClass}>
                          <option value="" disabled>
                            Sélectionnez…
                          </option>
                          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                            <option key={n} value={String(n)}>
                              {n} pièce{n > 1 ? 's' : ''}
                            </option>
                          ))}
                          <option value="8+">8 pièces et plus</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-5 flex justify-end">
                      <PillButton type="submit" variant="light" arrow disabled={!est.typeBien}>
                        Continuer
                      </PillButton>
                    </div>
                  </form>
                )}

                {step === 2 && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!est.projet || !est.delai) return;
                      setStep(3);
                    }}
                  >
                    <span className={labelClass}>Votre projet</span>
                    <div className="flex flex-wrap gap-2">
                      {PROJETS.map((p) => (
                        <Chip key={p} active={est.projet === p} onClick={() => setEst((d) => ({ ...d, projet: p }))}>
                          {p}
                        </Chip>
                      ))}
                    </div>

                    <div className="mt-4">
                      <label htmlFor="est-delai" className={labelClass}>
                        Délai envisagé
                      </label>
                      <select id="est-delai" required value={est.delai} onChange={setField('delai')} className={inputClass}>
                        <option value="" disabled>
                          Sélectionnez…
                        </option>
                        {DELAIS.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mt-5 flex justify-end">
                      <PillButton type="submit" variant="light" arrow disabled={!est.projet || !est.delai}>
                        Continuer
                      </PillButton>
                    </div>
                  </form>
                )}

                {step === 3 && (
                  <form onSubmit={submitEstimation}>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="est-nom" className={labelClass}>
                          Nom complet
                        </label>
                        <input
                          id="est-nom"
                          required
                          autoComplete="name"
                          value={est.nom}
                          onChange={setField('nom')}
                          placeholder="Jean Dupont"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="est-tel" className={labelClass}>
                          Téléphone
                        </label>
                        <input
                          id="est-tel"
                          type="tel"
                          required
                          autoComplete="tel"
                          value={est.telephone}
                          onChange={setField('telephone')}
                          placeholder="06 12 34 56 78"
                          className={inputClass}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="est-email" className={labelClass}>
                          Email
                        </label>
                        <input
                          id="est-email"
                          type="email"
                          required
                          autoComplete="email"
                          value={est.email}
                          onChange={setField('email')}
                          placeholder="jean@exemple.fr"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {sendError && (
                      <p className="mt-4 flex items-center gap-2 rounded-xl border border-red-300/30 bg-red-400/15 px-4 py-3 text-sm font-medium text-red-100 backdrop-blur-sm">
                        <AlertCircle size={18} aria-hidden="true" />
                        Une erreur est survenue. Réessayez ou appelez le 07 69 31 35 02.
                      </p>
                    )}

                    <div className="mt-5 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                      <p className="text-xs leading-relaxed text-white/55">
                        Vos données restent confidentielles et ne sont jamais partagées.
                      </p>
                      <PillButton type="submit" variant="light" arrow disabled={sending} className="w-full sm:w-auto">
                        {sending ? (
                          <>
                            Envoi en cours
                            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                          </>
                        ) : (
                          'Recevoir mon estimation'
                        )}
                      </PillButton>
                    </div>
                  </form>
                )}
              </m.div>
            )}

            {/* ---------- RECHERCHE ---------- */}
            {mode === 'search' && (
              <m.div key="search" {...anim}>
                <div className="mb-5">
                  <button
                    type="button"
                    onClick={back}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                  >
                    <ArrowLeft size={14} aria-hidden="true" /> Retour
                  </button>
                </div>

                <h2 className="font-serif text-2xl tracking-tight text-white">Que recherchez-vous ?</h2>

                <div className="mt-4 flex flex-wrap gap-2">
                  {SEARCH_TYPES.map((t) => (
                    <Chip key={t} active={searchType === t} onClick={() => setSearchType(t)}>
                      {t}
                    </Chip>
                  ))}
                </div>

                <div className="mt-4">
                  <label htmlFor="search-ville" className={labelClass}>
                    Ville ou secteur <span className="normal-case text-white/40">(optionnel)</span>
                  </label>
                  <select
                    id="search-ville"
                    value={searchVille}
                    onChange={(e) => setSearchVille(e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Tout le Pays de Gex</option>
                    {SEARCH_CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-6">
                  <PillButton variant="light" arrow className="w-full sm:w-auto" onClick={goSearch}>
                    Voir les biens disponibles
                  </PillButton>
                  <p className="mt-3 text-xs text-white/55">
                    {(searchType !== 'Tous les biens' || searchVille) &&
                      'Vos critères seront pré-appliqués sur la page des biens.'}
                  </p>
                </div>
              </m.div>
            )}

            {/* ---------- SUCCÈS ---------- */}
            {mode === 'done' && (
              <m.div key="done" {...anim} className="py-2 text-center">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-green-300/30 bg-green-400/15 text-green-100">
                  <CheckCircle2 size={28} aria-hidden="true" />
                </span>
                <h2 className="font-serif text-2xl tracking-tight text-white md:text-3xl">
                  Merci{est.nom ? ` ${est.nom.split(' ')[0]}` : ''} !
                </h2>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-white/70">
                  Votre demande d'estimation est bien envoyée. Je vous recontacte
                  sous 24 h avec une première analyse.
                </p>
                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={waPostEstimation}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track('whatsapp_click_post_estimation')}
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.55)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                      <path d={WHATSAPP_PATH} />
                    </svg>
                    Continuer sur WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setEst(EMPTY_EST);
                      setMode('intent');
                    }}
                    className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                  >
                    Nouvelle demande
                  </button>
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </m.div>
      </div>
    </section>
  );
};

/**
 * SplitWords local : évite une dépendance circulaire avec primitives
 * tout en gardant l'animation mot à mot du titre.
 */
import { SplitWords as SplitWordsBase } from './primitives';
const SplitWordsSafe: React.FC<{ text: string; delay?: number }> = ({ text, delay }) => (
  <SplitWordsBase text={text} delay={delay ?? 0} />
);
