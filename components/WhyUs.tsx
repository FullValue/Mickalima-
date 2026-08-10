import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/**
 * Section « Pourquoi nous ? » — bento grid animée :
 * - carte photo avec ticker défilant, carte avis (avatars + étoiles)
 * - reel central façon story (barres de progression, autoplay)
 * - compteurs animés au scroll, anneau d'avatars en rotation
 * Adapté du snippet fourni : DA du site (Playfair/Montserrat), photos réelles
 * des biens, chiffres réels (240 ventes, 5/5 sur 25 avis Google).
 */

const REEL_IMAGES = [
  '/images/biens/VM976/02.jpg',
  '/images/biens/VM1043/03.jpg',
  '/images/biens/VM990/02.jpg',
];

const TICKER_BG = '/images/biens/VM990/01.jpg';

const AVATARS = [
  'https://framerusercontent.com/images/0Ulaed92GKfjaGsvZjI6pqoUk.png',
  'https://framerusercontent.com/images/zFmyPJNgTex10kVY4kDANar2h9M.png',
  'https://framerusercontent.com/images/pR2FyFSdy42ZxjsKOjtaZ7lss.png',
  'https://framerusercontent.com/images/su0qX9nYR8hIQMFMuh8H4z5FU.png',
];

const RING_IMAGES = [
  '/images/biens/VM976/01.jpg',
  '/images/biens/VM990/03.jpg',
  '/images/biens/VM1043/02.jpg',
  '/images/biens/VM560/01.jpg',
  '/images/biens/VM920/01.jpg',
  '/images/biens/VM615/01.jpg',
  '/images/biens/VM1126/01.jpg',
  '/images/biens/VM1093/01.jpg',
];

const Star: React.FC<{ className?: string; fill?: string }> = ({ className, fill = '#fff' }) => (
  <svg className={className} viewBox="0 0 21.473 21.474" fill={fill} aria-hidden="true">
    <path d="M8.86 1.306c.645-1.741 3.107-1.741 3.752 0l1.721 4.652c.202.547.634.979 1.182 1.182l4.652 1.721c1.741.645 1.741 3.107 0 3.752l-4.652 1.721c-.548.202-.98.634-1.182 1.182l-1.721 4.652c-.645 1.741-3.107 1.741-3.752 0l-1.721-4.652a1.999 1.999 0 0 0-1.182-1.182l-4.651-1.721c-1.741-.645-1.741-3.107 0-3.752L5.958 7.14c.547-.203.979-.635 1.182-1.182Z" />
  </svg>
);

const RatingStar: React.FC = () => (
  <svg viewBox="0 0 16.666 16.667" fill="#011d41" style={{ width: 17, height: 17 }} aria-hidden="true">
    <path d="m9.773 1.204 1.466 2.957c.2.412.733.807 1.183.882l2.658.446c1.7.285 2.1 1.529.875 2.755l-2.066 2.084c-.35.353-.542 1.033-.433 1.52l.591 2.58c.467 2.041-.608 2.83-2.4 1.764l-2.49-1.487c-.45-.269-1.192-.269-1.65 0l-2.492 1.487c-1.783 1.067-2.866.269-2.4-1.764l.592-2.58c.108-.487-.083-1.167-.433-1.52L.707 8.244C-.509 7.018-.118 5.774 1.582 5.489l2.658-.446c.442-.075.975-.47 1.175-.882l1.466-2.957c.8-1.605 2.1-1.605 2.892 0Z" />
  </svg>
);

const TickerItem: React.FC<{ ariaHidden?: boolean }> = ({ ariaHidden }) => (
  <div className="whyus-ticker__item" aria-hidden={ariaHidden || undefined}>
    <span>Biens de qualité</span>
    <Star className="whyus-ticker__star" />
    <span>Sélection rigoureuse</span>
    <Star className="whyus-ticker__star" />
  </div>
);

export const WhyUs: React.FC = () => {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cleanups: Array<() => void> = [];

    /* ----- Compteurs animés au scroll ----- */
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const counters = root.querySelectorAll<HTMLElement>('[data-whyus-count]');
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          counterObserver.unobserve(el);
          const target = parseFloat(el.dataset.whyusCount || '0');
          const decimals = parseInt(el.dataset.decimals || '0', 10);
          const suffix = el.dataset.suffix || '';
          const duration = 1800;
          let start: number | null = null;
          const step = (ts: number) => {
            if (start === null) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            el.textContent = (target * easeOut(p)).toFixed(decimals) + suffix;
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((el) => counterObserver.observe(el));
    cleanups.push(() => counterObserver.disconnect());

    /* ----- Reel autoplay + barres de progression ----- */
    const reel = root.querySelector<HTMLElement>('[data-whyus-reel]');
    if (reel) {
      const slides = reel.querySelectorAll<HTMLElement>('.whyus-reel__slide');
      const fills = reel.querySelectorAll<HTMLElement>('.whyus-reel__bar > i');
      const duration = 4000;
      let index = 0;
      let startTime: number | null = null;
      let rafId = 0;
      let running = false;

      const paint = (progress: number) => {
        fills.forEach((f, i) => {
          f.style.width = i < index ? '100%' : i === index ? `${progress * 100}%` : '0%';
        });
      };

      const tick = (ts: number) => {
        if (startTime === null) startTime = ts;
        const p = Math.min((ts - startTime) / duration, 1);
        paint(p);
        if (p >= 1) {
          slides[index].classList.remove('is-active');
          index = (index + 1) % slides.length;
          slides[index].classList.add('is-active');
          if (index === 0) fills.forEach((f) => { f.style.width = '0%'; });
          startTime = ts;
        }
        rafId = requestAnimationFrame(tick);
      };

      const reelObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !running) {
              running = true;
              startTime = null;
              rafId = requestAnimationFrame(tick);
            } else if (!entry.isIntersecting && running) {
              running = false;
              cancelAnimationFrame(rafId);
            }
          });
        },
        { threshold: 0.2 }
      );
      reelObserver.observe(reel);
      cleanups.push(() => { reelObserver.disconnect(); cancelAnimationFrame(rafId); });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section className="whyus" ref={rootRef}>
      <div className="whyus__container">
        <div className="whyus__head">
          <div>
            <p className="whyus__label">/ Pourquoi nous ?</p>
            <h2 className="whyus__title">Votre partenaire immobilier de confiance</h2>
          </div>
          <Link className="whyus__cta" to="/nos-biens">
            Voir nos biens
            <span className="whyus__cta-icon">
              <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M11.998.844 12 .846l-.079.079c-2.74 2.814-2.627 6.666-.78 8.512l-.845.845c-1.52-1.52-2.048-3.92-1.449-6.284L.844 12 0 11.156 8.006 3.15C5.64 3.752 3.236 3.225 1.716 1.704L2.56.86c1.855 1.854 5.735 1.96 8.554-.818L11.154 0Z" fill="#f7f7f7" />
              </svg>
            </span>
          </Link>
        </div>

        <div className="whyus__grid">
          {/* Colonne gauche */}
          <div className="whyus__col">
            <div className="whyus__card whyus-ticker-card">
              <img className="whyus-bg" src={TICKER_BG} alt="" loading="lazy" decoding="async" />
              <div className="whyus-ticker-card__overlay"></div>
              <div className="whyus-ticker">
                <div className="whyus-ticker__track">
                  <TickerItem />
                  <TickerItem ariaHidden />
                </div>
              </div>
            </div>

            <div className="whyus__card whyus-reviews">
              <div className="whyus-reviews__top">
                <div className="whyus-avatars">
                  {AVATARS.map((a) => (
                    <img key={a} src={a} alt="" loading="lazy" decoding="async" />
                  ))}
                </div>
                <p>240 ventes en 5 ans</p>
              </div>
              <div className="whyus-reviews__bottom">
                <span>5/5</span>
                <div className="whyus-stars">
                  {[...Array(5)].map((_, i) => <RatingStar key={i} />)}
                </div>
              </div>
            </div>
          </div>

          {/* Colonne centrale : reel */}
          <div className="whyus__col">
            <div className="whyus__card whyus-reel" data-whyus-reel>
              {REEL_IMAGES.map((src, i) => (
                <div key={src} className={`whyus-reel__slide${i === 0 ? ' is-active' : ''}`}>
                  <img src={src} alt="" loading="lazy" decoding="async" />
                </div>
              ))}
              <div className="whyus-reel__bars">
                {REEL_IMAGES.map((src) => (
                  <div key={src} className="whyus-reel__bar"><i /></div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite */}
          <div className="whyus__col">
            <div className="whyus__card whyus-stat">
              <p>Ventes réalisées en 5 ans</p>
              <div className="whyus-stat__value" data-whyus-count="240">0</div>
            </div>

            <div className="whyus__card whyus-satisfaction">
              <div>
                <div className="whyus-satisfaction__value" data-whyus-count="100" data-suffix="%">0%</div>
                <h3>Clients satisfaits</h3>
                <p>Nous privilégions la valeur à long terme et votre sérénité.</p>
              </div>
              <div className="whyus-ring-wrap">
                <div className="whyus-ring">
                  <div className="whyus-ring__circle"></div>
                  {RING_IMAGES.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      style={{ transform: `rotate(${i * 45}deg) translateY(-125px)` }}
                    />
                  ))}
                </div>
                <div className="whyus-ring-wrap__fade"></div>
                <div className="whyus-ring-wrap__label">Clients heureux</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .whyus {
          --whyus-bg: #f7f7f7;
          --whyus-card: #ffffff;
          --whyus-title: #011d41;
          --whyus-sub: #666666;
          --whyus-muted: #b2b2ac;
          --whyus-radius: 10px;
          font-family: 'Montserrat', system-ui, sans-serif;
          background: var(--whyus-bg);
          padding: 70px 0 140px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 80px;
        }

        .whyus__container {
          width: 100%;
          max-width: 1300px;
          padding: 0 30px;
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        /* ---------- Titre ---------- */
        .whyus__head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 32px;
          flex-wrap: wrap;
        }
        .whyus__label {
          font-size: 16px;
          color: var(--whyus-sub);
          margin: 0 0 20px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
        }
        .whyus__title {
          font-family: 'Playfair Display', serif;
          font-size: 44px;
          font-weight: 400;
          line-height: 1.15;
          color: var(--whyus-title);
          margin: 0;
          max-width: 620px;
        }
        .whyus__cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 6px 6px 6px 20px;
          height: 46px;
          border-radius: 50px;
          background: var(--whyus-card);
          color: var(--whyus-title);
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          flex-shrink: 0;
        }
        .whyus__cta-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--whyus-title);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .whyus__cta-icon svg { width: 12px; height: 12px; transition: transform .35s cubic-bezier(.2,.8,.2,1); }
        .whyus__cta:hover .whyus__cta-icon svg { transform: translate(14px, -14px); }

        /* ---------- Grille ---------- */
        .whyus__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          height: 550px;
        }
        .whyus__col { display: flex; flex-direction: column; gap: 20px; height: 100%; }
        .whyus__card {
          background: var(--whyus-card);
          border-radius: var(--whyus-radius);
          position: relative;
          overflow: hidden;
        }

        /* ---------- Carte ticker ---------- */
        .whyus-ticker-card { height: 380px; flex: none; }
        .whyus-ticker-card img.whyus-bg {
          position: absolute; inset: 0;
          width: 100%; height: 100%; object-fit: cover;
        }
        .whyus-ticker-card__overlay {
          position: absolute; left: 0; right: 0; bottom: 0; height: 60%;
          background: linear-gradient(180deg, rgba(1,29,65,0) 0%, rgba(1,29,65,.75) 100%);
        }
        .whyus-ticker {
          position: absolute; left: 0; right: 0; bottom: 20px;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
        }
        .whyus-ticker__track {
          display: flex; align-items: center; gap: 32px; width: max-content;
          animation: whyus-scroll 18s linear infinite;
        }
        .whyus-ticker__item {
          display: flex; align-items: center; gap: 32px;
          color: #fff; font-size: 28px; font-weight: 500; white-space: nowrap;
          font-family: 'Playfair Display', serif;
        }
        .whyus-ticker__star { width: 22px; height: 22px; flex: none; }
        @keyframes whyus-scroll { to { transform: translateX(-50%); } }

        /* ---------- Carte avis ---------- */
        .whyus-reviews {
          flex: 1;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 150px;
        }
        .whyus-avatars { position: relative; width: 116px; height: 44px; flex: none; }
        .whyus-avatars img {
          position: absolute; top: 0;
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid #fff;
          object-fit: cover;
        }
        .whyus-avatars img:nth-child(1) { left: 0; }
        .whyus-avatars img:nth-child(2) { left: 24px; }
        .whyus-avatars img:nth-child(3) { left: 48px; }
        .whyus-avatars img:nth-child(4) { left: 72px; }
        .whyus-reviews__top { display: flex; align-items: center; gap: 12px; }
        .whyus-reviews__top p { margin: 0; color: var(--whyus-sub); font-size: 15px; }
        .whyus-reviews__bottom { display: flex; align-items: center; gap: 12px; }
        .whyus-reviews__bottom span { color: var(--whyus-sub); font-size: 18px; }
        .whyus-stars { display: flex; gap: 4px; }

        /* ---------- Reel central ---------- */
        .whyus-reel { height: 100%; }
        .whyus-reel__slide {
          position: absolute; inset: 0;
          opacity: 0; transition: opacity .6s ease;
        }
        .whyus-reel__slide.is-active { opacity: 1; }
        .whyus-reel__slide img { width: 100%; height: 100%; object-fit: cover; }
        .whyus-reel__bars {
          position: absolute; top: 16px; left: 16px; right: 16px;
          display: flex; gap: 4px; z-index: 2;
        }
        .whyus-reel__bar {
          flex: 1; height: 6px; border-radius: 6px;
          background: rgba(255,255,255,.3);
          overflow: hidden;
        }
        .whyus-reel__bar > i { display: block; height: 100%; width: 0; background: #fff; border-radius: 6px; }

        /* ---------- Carte compteur ---------- */
        .whyus-stat {
          flex: none;
          padding: 20px;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 8px;
          min-height: 147px;
        }
        .whyus-stat p { margin: 0; color: var(--whyus-sub); font-size: 15px; text-align: center; }
        .whyus-stat__value {
          font-family: 'Playfair Display', serif;
          font-size: 74px; font-weight: 500; line-height: 1;
          color: var(--whyus-title);
        }

        /* ---------- Carte satisfaction + anneau ---------- */
        .whyus-satisfaction {
          flex: 1;
          padding: 24px 24px 0;
          display: flex; flex-direction: column;
          gap: 24px;
        }
        .whyus-satisfaction__value {
          font-family: 'Playfair Display', serif;
          font-size: 60px; font-weight: 500; line-height: 1; color: var(--whyus-title);
        }
        .whyus-satisfaction h3 { margin: 10px 0 8px; font-size: 24px; font-weight: 400; color: var(--whyus-title); }
        .whyus-satisfaction p { margin: 0; font-size: 15px; color: var(--whyus-sub); max-width: 90%; }
        .whyus-ring-wrap { position: relative; flex: 1; min-height: 60px; }
        .whyus-ring {
          position: absolute; top: 0; left: 50%;
          width: 301px; height: 301px;
          transform: translateX(-50%);
          animation: whyus-spin 30s linear infinite;
        }
        .whyus-ring__circle {
          position: absolute; top: 50%; left: 50%;
          width: 250px; height: 250px; margin: -125px 0 0 -125px;
          border: 1px solid var(--whyus-muted);
          border-radius: 50%;
        }
        .whyus-ring img {
          position: absolute; top: 50%; left: 50%;
          width: 52px; height: 52px; margin: -26px 0 0 -26px;
          border-radius: 50%;
          border: 1px solid var(--whyus-card);
          object-fit: cover;
        }
        @keyframes whyus-spin { to { transform: translateX(-50%) rotate(360deg); } }
        .whyus-ring-wrap__label {
          position: absolute; bottom: 28px; left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          font-size: 19px; font-weight: 500; color: var(--whyus-title);
          white-space: nowrap;
        }
        .whyus-ring-wrap__fade {
          position: absolute; left: 0; right: 0; bottom: 0; height: 56px; z-index: 1;
          background: linear-gradient(180deg, rgba(255,255,255,0) 0%, var(--whyus-card) 100%);
        }

        @media (prefers-reduced-motion: reduce) {
          .whyus-ticker__track, .whyus-ring { animation: none; }
        }

        @media (max-width: 1199px) {
          .whyus__grid { grid-template-columns: repeat(3, minmax(0, 1fr)); height: auto; }
          .whyus__title { font-size: 32px; }
          .whyus-ticker-card { height: 280px; }
          .whyus-ticker__item { font-size: 24px; }
          .whyus-reel { min-height: 442px; }
        }
        @media (max-width: 809px) {
          .whyus { padding: 40px 0 80px; gap: 40px; }
          .whyus__container { padding: 0 20px; gap: 32px; }
          .whyus__grid { grid-template-columns: 1fr; height: auto; }
          .whyus__title { font-size: 28px; }
          .whyus-reel { min-height: 420px; }
          .whyus-satisfaction p { max-width: 100%; }
        }
      `}</style>
    </section>
  );
};
