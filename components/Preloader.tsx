import React, { useEffect, useState } from 'react';
import { IMAGES } from '../constants';

/**
 * Preloader plein écran — première visite de la session uniquement.
 * Rideau navy : le logo se révèle (fondu + netteté), un filet lumineux
 * balaie la ligne sous le logo, puis le rideau se lève en deux temps.
 * 100 % CSS (transform/opacity uniquement), JS minimal : démontage +
 * sessionStorage. prefers-reduced-motion → simple fondu court.
 * Rendu dans le HTML prérendu (SSG) pour couvrir le chargement initial,
 * masqué instantanément à l'hydratation si la session l'a déjà vu.
 */

const SESSION_KEY = 'ml-preloader-seen';
const TOTAL_MS = 2450; // durée totale avant démontage

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
      // rideau déjà levé — rien à verrouiller
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
      {/* Rideau secondaire (suit le premier pour la profondeur) */}
      <div className="ml-preloader__veil" />
      <div className="ml-preloader__curtain">
        <div className="ml-preloader__center">
          <img
            src={IMAGES.logoWhite}
            alt=""
            width="220"
            height="52"
            decoding="async"
            className="ml-preloader__logo"
          />
          <span className="ml-preloader__line">
            <i />
          </span>
          <span className="ml-preloader__tag">Immobilier — Pays de Gex</span>
        </div>
      </div>

      <style>{`
        .ml-preloading { overflow: hidden; }

        .ml-preloader {
          position: fixed; inset: 0; z-index: 200;
          pointer-events: none;
        }
        .ml-preloader__curtain,
        .ml-preloader__veil {
          position: absolute; inset: 0;
          will-change: transform;
        }
        .ml-preloader__curtain {
          background: #011d41;
          display: flex; align-items: center; justify-content: center;
          animation: ml-lift 0.9s cubic-bezier(0.76, 0, 0.24, 1) 1.55s forwards;
        }
        .ml-preloader__veil {
          background: #0a2b57;
          animation: ml-lift 0.9s cubic-bezier(0.76, 0, 0.24, 1) 1.68s forwards;
        }
        @keyframes ml-lift {
          to { transform: translateY(-101%); }
        }

        .ml-preloader__center {
          display: flex; flex-direction: column; align-items: center; gap: 22px;
          /* le contenu remonte légèrement avec le rideau pour l'effet parallaxe */
          animation: ml-content-rise 0.9s cubic-bezier(0.76, 0, 0.24, 1) 1.55s forwards;
        }
        @keyframes ml-content-rise {
          to { transform: translateY(-40px); opacity: 0; }
        }

        .ml-preloader__logo {
          width: clamp(160px, 24vw, 220px); height: auto;
          opacity: 0;
          filter: blur(6px);
          transform: scale(1.04);
          animation: ml-logo 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.12s forwards;
        }
        @keyframes ml-logo {
          to { opacity: 1; filter: blur(0); transform: scale(1); }
        }

        .ml-preloader__line {
          position: relative;
          width: clamp(150px, 22vw, 210px); height: 1px;
          background: rgba(255,255,255,0.18);
          overflow: hidden;
          opacity: 0;
          animation: ml-fade 0.4s ease 0.35s forwards;
        }
        .ml-preloader__line i {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, #fff 40%, #fff 60%, transparent);
          transform: translateX(-100%);
          animation: ml-sweep 1.15s cubic-bezier(0.65, 0, 0.35, 1) 0.45s forwards;
        }
        @keyframes ml-sweep {
          to { transform: translateX(100%); }
        }

        .ml-preloader__tag {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.35em; text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          opacity: 0;
          transform: translateY(6px);
          animation: ml-tag 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.75s forwards;
        }
        @keyframes ml-tag {
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes ml-fade { to { opacity: 1; } }

        @media (prefers-reduced-motion: reduce) {
          .ml-preloader__curtain { animation: ml-quick-fade 0.4s ease 0.7s forwards; }
          .ml-preloader__veil { display: none; }
          .ml-preloader__logo { animation-duration: 0.3s; filter: none; transform: none; }
          .ml-preloader__line i { animation: none; }
          .ml-preloader__center { animation: none; }
          @keyframes ml-quick-fade { to { opacity: 0; } }
        }
      `}</style>
    </div>
  );
};
