import React, { useEffect, useState } from 'react';

/**
 * Preloader plein écran, sobre : nom en serif, ligne de lieu, filet fin
 * qui se remplit, puis fondu.
 * Affiché à chaque chargement complet, quelle que soit la page d'arrivée,
 * tant que la page n'est pas prête (événement load). La navigation interne
 * ne le remonte pas : les transitions de route prennent le relais.
 * Première visite de la session : courte intro (1,5 s minimum).
 * Visites suivantes : simple fondu dès que la page est prête.
 * Rendu dans le HTML prérendu (SSG) pour couvrir le premier paint.
 * Filet de sécurité CSS : disparaît seul après 4,5 s si le JS échoue.
 */

const SESSION_KEY = 'ml-preloader-seen';
const FIRST_VISIT_MIN_MS = 1500;
const MAX_WAIT_MS = 3200;
const FADE_MS = 700;

export const Preloader: React.FC = () => {
  const [phase, setPhase] = useState<'visible' | 'leaving' | 'gone'>('visible');

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem(SESSION_KEY) === '1'; } catch { /* privé */ }
    try { sessionStorage.setItem(SESSION_KEY, '1'); } catch { /* privé */ }

    // Les animations démarrent au premier paint (HTML prérendu) : on mesure
    // depuis ce moment-là, pas depuis l'hydratation.
    const t0 = (window as unknown as { __mlT0?: number }).__mlT0 ?? Date.now();
    const elapsed = () => Date.now() - t0;
    const minMs = seen ? 0 : FIRST_VISIT_MIN_MS;

    const root = document.documentElement;
    root.classList.add('ml-preloading');

    const timers: number[] = [];
    let done = false;
    const leave = () => {
      if (done) return;
      done = true;
      timers.push(window.setTimeout(() => {
        setPhase('leaving');
        root.classList.remove('ml-preloading');
        timers.push(window.setTimeout(() => setPhase('gone'), FADE_MS));
      }, Math.max(0, minMs - elapsed())));
    };

    if (document.readyState === 'complete') leave();
    else window.addEventListener('load', leave, { once: true });
    timers.push(window.setTimeout(leave, Math.max(0, MAX_WAIT_MS - elapsed())));

    return () => {
      window.removeEventListener('load', leave);
      timers.forEach(clearTimeout);
      root.classList.remove('ml-preloading');
    };
  }, []);

  if (phase === 'gone') return null;

  return (
    <div className={`ml-preloader${phase === 'leaving' ? ' is-leaving' : ''}`} aria-hidden="true">
      <div className="ml-preloader__inner">
        <span className="ml-preloader__name">Mickaël Lima</span>
        <span className="ml-preloader__sub">Immobilier · Pays de Gex</span>
        <span className="ml-preloader__line"><i /></span>
      </div>

      <style>{`
        .ml-preloading { overflow: hidden; }

        .ml-preloader {
          position: fixed; inset: 0; z-index: 200;
          display: flex; align-items: center; justify-content: center;
          background: #011d41; pointer-events: none;
          transition: opacity ${FADE_MS}ms cubic-bezier(.4,0,.2,1);
          animation: ml-failsafe .6s ease 4.5s forwards;
        }
        .ml-preloader.is-leaving { opacity: 0; }
        @keyframes ml-failsafe { to { opacity: 0; visibility: hidden; } }

        .ml-preloader__inner {
          display: flex; flex-direction: column; align-items: center; gap: 14px; padding: 24px;
          opacity: 0; transform: translateY(6px);
          animation: ml-in .9s cubic-bezier(.22,1,.36,1) .1s forwards;
        }
        @keyframes ml-in { to { opacity: 1; transform: none; } }

        .ml-preloader__name {
          font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
          font-size: clamp(26px, 3.2vw, 36px); font-weight: 400; line-height: 1;
          letter-spacing: .01em; color: #f4efe5;
        }
        .ml-preloader__sub {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 10px; font-weight: 500; letter-spacing: .34em; padding-left: .34em;
          text-transform: uppercase; color: rgba(244,239,229,.5);
        }
        .ml-preloader__line {
          display: block; width: 96px; height: 1px; margin-top: 10px; overflow: hidden;
          background: rgba(244,239,229,.14);
        }
        .ml-preloader__line i {
          display: block; width: 100%; height: 100%; background: rgba(244,239,229,.85);
          transform: scaleX(0); transform-origin: left;
          animation: ml-line 1.3s cubic-bezier(.65,0,.35,1) .2s forwards;
        }
        @keyframes ml-line { to { transform: scaleX(1); } }

        /* Visites suivantes : pas d'intro, juste le temps du chargement. */
        .ml-preloader-seen .ml-preloader__inner { animation-duration: .35s; animation-delay: 0s; }
        .ml-preloader-seen .ml-preloader__line i { animation-duration: .9s; animation-delay: 0s; }

        @media (prefers-reduced-motion: reduce) {
          .ml-preloader { transition-duration: .25s; }
          .ml-preloader__inner, .ml-preloader__line i { animation: none; opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
};
