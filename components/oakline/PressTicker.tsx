import React from 'react';

/**
 * Marquee infini des logos de diffusion (portails immobiliers).
 * Réutilise les assets logos existants du site (public/images, mêmes
 * fichiers que le bandeau « Visibilité » de HomeSections).
 * Pause au survol ; prefers-reduced-motion géré par le CSS global
 * (animation-duration réduite → bandeau figé).
 */

interface Logo {
  src: string;
  alt: string;
  href: string;
  title: string;
}

const LOGOS: Logo[] = [
  { src: '/images/seloger.png', alt: 'SeLoger', href: 'https://www.seloger.com/professionnels-immobilier/2bccyjgnD7SN5UJ1TfrRMy', title: 'Mickaël Lima sur SeLoger' },
  { src: '/images/leboncoin.png', alt: 'Leboncoin', href: 'https://www.leboncoin.fr/boutique/7395512/', title: 'Mickaël Lima sur Leboncoin' },
  { src: '/images/bienici-logo.svg', alt: 'BienIci', href: 'https://www.bienici.com/', title: 'Mickaël Lima sur BienIci' },
  { src: '/images/logo_logicimmo.png', alt: 'LogicImmo', href: 'https://www.logic-immo.com/agences-immobilieres/2bccyjgnD7SN5UJ1TfrRMy', title: 'Mickaël Lima sur Logic-Immo' },
  { src: '/images/lefigaroimmo.png', alt: 'Figaro Immobilier', href: 'https://immobilier.lefigaro.fr/', title: 'Mickaël Lima sur Figaro Immobilier' },
  { src: '/images/logoluxuryestate.png', alt: 'Luxury Estate', href: 'https://www.luxuryestate.com/', title: 'Mickaël Lima sur Luxury Estate' },
];

export const PressTicker: React.FC = () => (
  <section
    aria-label="Portails de diffusion des biens"
    className="overflow-hidden border-y border-[#ebebeb] bg-white py-14"
  >
    <p className="mb-9 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-400">
      Mes biens diffusés sur plus de 40 portails
    </p>

    <div className="group relative">
      {/* Fondu latéral */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent md:w-48"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent md:w-48"
      />

      {/* Piste défilante : liste dupliquée exactement 2× + translateX(-50%) */}
      <div className="oak-marquee flex w-max items-center gap-16 px-8 group-hover:[animation-play-state:paused] md:gap-24">
        {[...LOGOS, ...LOGOS].map((logo, idx) => (
          <a
            key={`${logo.alt}-${idx}`}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            title={logo.title}
            aria-hidden={idx >= LOGOS.length ? 'true' : undefined}
            tabIndex={idx >= LOGOS.length ? -1 : undefined}
            className="flex w-32 shrink-0 items-center justify-center opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:w-44"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              width="200"
              height="60"
              loading="lazy"
              decoding="async"
              className="max-h-10 w-auto object-contain md:max-h-12"
            />
          </a>
        ))}
      </div>
    </div>

    <style>{`
      @keyframes oak-marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      .oak-marquee {
        animation: oak-marquee 32s linear infinite;
      }
    `}</style>
  </section>
);
