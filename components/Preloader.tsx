import React, { useEffect, useState } from 'react';
import { IMAGES } from '../constants';

/**
 * Preloader plein écran: première visite de la session uniquement.
 * Écran d'introduction éditorial : monogramme, signature et filet doré,
 * puis ouverture verticale en deux panneaux.
 * 100 % CSS (transform/opacity uniquement), JS minimal : démontage +
 * sessionStorage. prefers-reduced-motion → simple fondu court.
 * Rendu dans le HTML prérendu (SSG) pour couvrir le chargement initial,
 * masqué instantanément à l'hydratation si la session l'a déjà vu.
 */

const SESSION_KEY = 'ml-preloader-seen';
const TOTAL_MS = 2200; // durée totale avant démontage

export const Preloader: React.FC = () => {
  // null = indéterminé (rendu SSG) → on affiche ; l'hydratation tranche.
  const [state, setState] = useState<'shown' | 'skipped'>('shown');
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem(SESSION_KEY) === '1'; } catch { /* privé */ }
    if (seen) {
      setState('skipped');
      return;
    }
    try { sessionStorage.setItem(SESSION_KEY, '1'); } catch { /* privé */ }
    // Les animations CSS démarrent au premier paint (HTML prérendu), pas à
    // l'hydratation : on cale le démontage sur le temps réellement écoulé.
    const t0 = (window as unknown as { __mlT0?: number }).__mlT0 ?? Date.now();
    const remaining = Math.max(0, TOTAL_MS - (Date.now() - t0));
    if (remaining < 80) {
      // rideau déjà levé: rien à verrouiller
      setGone(true);
      return;
    }
    document.documentElement.classList.add('ml-preloading');
    const t = setTimeout(() => {
      setGone(true);
      document.documentElement.classList.remove('ml-preloading');
    }, remaining);
    return () => {
      clearTimeout(t);
      document.documentElement.classList.remove('ml-preloading');
    };
  }, []);

  if (state === 'skipped' || gone) return null;

  return (
    <div className="ml-preloader" aria-hidden="true">
      <div className="ml-preloader__panel ml-preloader__panel--top" />
      <div className="ml-preloader__panel ml-preloader__panel--bottom" />
      <div className="ml-preloader__grain" />
      <div className="ml-preloader__center">
        <span className="ml-preloader__edition">L'agence Immo · Pays de Gex</span>
        <span className="ml-preloader__monogram">ML</span>
        <span className="ml-preloader__rule"><i /></span>
        <img
          src={IMAGES.logoWhite}
          alt=""
          width="220"
          height="52"
          decoding="async"
          className="ml-preloader__logo"
        />
        <span className="ml-preloader__tag">Une vision singulière de l'immobilier</span>
      </div>

      <style>{`
        .ml-preloading { overflow: hidden; }

        .ml-preloader { position: fixed; inset: 0; z-index: 200; pointer-events: none; overflow: hidden; background: #031b37; }
        .ml-preloader__panel { position: absolute; left: 0; width: 100%; height: 50.5%; background: #031b37; will-change: transform; }
        .ml-preloader__panel--top { top: 0; animation: ml-open-top .82s cubic-bezier(.76,0,.24,1) 1.38s forwards; }
        .ml-preloader__panel--bottom { bottom: 0; animation: ml-open-bottom .82s cubic-bezier(.76,0,.24,1) 1.38s forwards; }
        .ml-preloader__grain { position: absolute; inset: 0; opacity: .22; background-image: radial-gradient(rgba(255,255,255,.11) .55px, transparent .55px); background-size: 5px 5px; mix-blend-mode: soft-light; }
        @keyframes ml-open-top { to { transform: translateY(-101%); } }
        @keyframes ml-open-bottom { to { transform: translateY(101%); } }

        .ml-preloader__center {
          position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 15px; padding: 24px;
          animation: ml-content-rise .62s cubic-bezier(.22,1,.36,1) 1.22s forwards;
        }
        @keyframes ml-content-rise { to { transform: scale(.985); opacity: 0; } }

        .ml-preloader__edition { font-family: 'Inter', sans-serif; font-size: 9px; font-weight: 600; letter-spacing: .32em; text-transform: uppercase; color: rgba(255,255,255,.52); opacity: 0; animation: ml-tag .55s ease .08s forwards; }
        .ml-preloader__monogram { font-family: Georgia, 'Times New Roman', serif; font-size: clamp(58px, 9vw, 96px); font-weight: 400; line-height: 1; letter-spacing: -.08em; padding-right: .08em; color: #f4efe5; opacity: 0; transform: translateY(10px); animation: ml-mark .78s cubic-bezier(.22,1,.36,1) .18s forwards; }
        @keyframes ml-mark { to { opacity: 1; transform: translateY(0); } }

        .ml-preloader__logo {
          width: clamp(145px, 20vw, 195px); height: auto; opacity: 0;
          animation: ml-logo .7s cubic-bezier(.22,1,.36,1) .58s forwards;
        }
        @keyframes ml-logo { to { opacity: .92; } }

        .ml-preloader__rule { width: clamp(112px, 16vw, 166px); height: 1px; overflow: hidden; background: rgba(205,174,111,.2); }
        .ml-preloader__rule i { display: block; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, #cdae6f 18%, #ead8ac 50%, #cdae6f 82%, transparent); transform: scaleX(0); animation: ml-rule .78s cubic-bezier(.22,1,.36,1) .4s forwards; }
        @keyframes ml-rule { to { transform: scaleX(1); } }

        .ml-preloader__tag {
          font-family: 'Inter', 'Inter Placeholder', sans-serif;
          font-size: 9px; font-weight: 500;
          letter-spacing: 0.28em; text-transform: uppercase;
          color: rgba(255,255,255,0.48); text-align: center;
          opacity: 0;
          transform: translateY(6px);
          animation: ml-tag .6s cubic-bezier(.22,1,.36,1) .78s forwards;
        }
        @keyframes ml-tag {
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .ml-preloader { animation: ml-quick-fade .25s ease .55s forwards; }
          .ml-preloader__panel, .ml-preloader__center, .ml-preloader__edition, .ml-preloader__monogram, .ml-preloader__logo, .ml-preloader__tag, .ml-preloader__rule i { animation: none; opacity: 1; transform: none; }
          @keyframes ml-quick-fade { to { opacity: 0; } }
        }
      `}</style>
    </div>
  );
};
