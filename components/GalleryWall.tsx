import React from 'react';

/**
 * Mur d'images animé (style Pinterest) : 4 colonnes qui défilent verticalement
 * en boucle, sens alterné, pause au survol. Contenu dupliqué dans chaque
 * colonne pour une boucle sans raccord (translateY -50 %).
 * Images : sélection des biens (démo Revalis) — à remplacer au rebranding.
 */

interface GWColumn {
  speed: string;
  direction: 'up' | 'down';
  images: Array<{ src: string; ratio: string }>;
}

const COLUMNS: GWColumn[] = [
  {
    speed: '64s',
    direction: 'up',
    images: [
      { src: 'https://framerusercontent.com/images/6PCCVyEFStSyJ2Gl753CW8tkea4.webp', ratio: '600 / 760' },
      { src: 'https://framerusercontent.com/images/v86nEI684w4zPg0EhgNucbSOktA.webp', ratio: '600 / 900' },
      { src: 'https://framerusercontent.com/images/qUn8PXGMNl5owKUxOJ3cx4UlZs8.webp', ratio: '600 / 640' },
      { src: 'https://framerusercontent.com/images/lqwCPSh3RoZtdRP6tJd1GRldOo.webp', ratio: '600 / 820' },
    ],
  },
  {
    speed: '78s',
    direction: 'down',
    images: [
      { src: 'https://framerusercontent.com/images/KcOhAhSgpyc3sxmVmxEiyvnqguw.webp', ratio: '600 / 840' },
      { src: 'https://framerusercontent.com/images/NCe5u2vNkJTDq99aE4z9j4nnomw.webp', ratio: '600 / 700' },
      { src: 'https://framerusercontent.com/images/tjq1hGCpC77QxYNxsU0m3yqtRI.webp', ratio: '600 / 920' },
      { src: 'https://framerusercontent.com/images/D2Rosu46lk7tmVyYhuODw5KE6Qs.webp', ratio: '600 / 660' },
    ],
  },
  {
    speed: '58s',
    direction: 'up',
    images: [
      { src: 'https://framerusercontent.com/images/qczYR3J1pTxtpJWYdeFIZUL4o.webp', ratio: '600 / 880' },
      { src: 'https://framerusercontent.com/images/7qddMcFEDswacgycG4I3MRkL56o.webp', ratio: '600 / 720' },
      { src: 'https://framerusercontent.com/images/0uNitXTJq1oSjHev9mJw6Q9LwA.webp', ratio: '600 / 960' },
      { src: 'https://framerusercontent.com/images/vS2CA5Cg9J9whGTYIJAYs6DfPs.webp', ratio: '600 / 620' },
    ],
  },
  {
    speed: '86s',
    direction: 'down',
    images: [
      { src: 'https://framerusercontent.com/images/tmhpllg4ojGt6jGr62njvEeBYg8.webp', ratio: '600 / 620' },
      { src: 'https://framerusercontent.com/images/4i0fVABNmQKsRxrejJXT5DhYlk0.webp', ratio: '600 / 940' },
      { src: 'https://framerusercontent.com/images/E79CfN6JX4ZumwQ0y8fXYYTTJQ.webp', ratio: '600 / 780' },
      { src: 'https://framerusercontent.com/images/w5FoqrGf2ajYCpdOTgI4Rm4s1s.webp', ratio: '600 / 700' },
    ],
  },
];

export const GalleryWall: React.FC = () => (
  <section className="gallery-wall" aria-label="Galerie">
    <div className="gallery-wall__grid">
      {COLUMNS.map((col, ci) => (
        <div key={ci} className="gallery-wall__col">
          <div
            className={`gallery-wall__track gallery-wall__track--${col.direction}`}
            style={{ ['--gw-speed' as string]: col.speed }}
          >
            {/* Contenu dupliqué : indispensable pour la boucle sans raccord */}
            {[0, 1].map((pass) =>
              col.images.map(({ src, ratio }, ii) => (
                <div
                  key={`${pass}-${ii}`}
                  className="gallery-wall__item"
                  aria-hidden={pass === 1 || undefined}
                  style={{ aspectRatio: ratio }}
                >
                  <img src={src} alt="" loading="lazy" decoding="async" />
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </div>

    <style>{`
      .gallery-wall {
        --gw-bg: #efefed;
        --gw-gap: 20px;
        --gw-radius: 18px;
        --gw-height: 100vh;
        position: relative;
        width: 100%;
        height: var(--gw-height);
        overflow: hidden;
        background: var(--gw-bg);
        padding: 0 var(--gw-gap);
        box-sizing: border-box;
      }

      .gallery-wall__grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: var(--gw-gap);
        height: 100%;
      }

      .gallery-wall__col {
        position: relative;
        overflow: hidden;
      }

      .gallery-wall__track {
        display: flex;
        flex-direction: column;
        gap: var(--gw-gap);
        will-change: transform;
      }

      .gallery-wall__track--up   { animation: gw-up   var(--gw-speed, 60s) linear infinite; }
      .gallery-wall__track--down { animation: gw-down var(--gw-speed, 60s) linear infinite; }

      @keyframes gw-up   { from { transform: translateY(0); }    to { transform: translateY(-50%); } }
      @keyframes gw-down { from { transform: translateY(-50%); } to { transform: translateY(0); } }

      .gallery-wall__item {
        width: 100%;
        border-radius: var(--gw-radius);
        overflow: hidden;
        background: #e4e4e0;
        flex: none;
      }
      .gallery-wall__item img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      /* Pause au survol */
      .gallery-wall:hover .gallery-wall__track { animation-play-state: paused; }

      @media (max-width: 1024px) {
        .gallery-wall__grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .gallery-wall__col:nth-child(4) { display: none; }
      }
      @media (max-width: 640px) {
        .gallery-wall { --gw-gap: 12px; --gw-radius: 14px; }
        .gallery-wall__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .gallery-wall__col:nth-child(3) { display: none; }
      }

      @media (prefers-reduced-motion: reduce) {
        .gallery-wall__track { animation: none !important; }
      }
    `}</style>
  </section>
);
