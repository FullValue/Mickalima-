import React from 'react';
import { Reveal, SectionLabel, SplitWords } from './primitives';

/**
 * Section « portails » façon Oakline : l'image de fond reste FIXE pendant
 * que le contenu défile par-dessus (background-attachment: fixed sur
 * desktop ; fallback scroll natif sur iOS qui ne supporte pas fixed).
 * Logos des portails réels de diffusion — liens repris de HomeSections.tsx.
 */

const PORTALS = [
  {
    src: '/images/seloger.png',
    alt: 'SeLoger',
    href: 'https://www.seloger.com/professionnels-immobilier/2bccyjgnD7SN5UJ1TfrRMy',
    title: 'Mickaël Lima sur SeLoger',
  },
  {
    src: '/images/leboncoin.png',
    alt: 'Leboncoin',
    href: 'https://www.leboncoin.fr/boutique/7395512/',
    title: 'Mickaël Lima sur Leboncoin',
  },
  {
    src: '/images/bienici-logo.svg',
    alt: 'BienIci',
    href: 'https://www.bienici.com/',
    title: 'Mickaël Lima sur BienIci',
  },
  {
    src: '/images/logo_logicimmo.png',
    alt: 'LogicImmo',
    href: 'https://www.logic-immo.com/agences-immobilieres/2bccyjgnD7SN5UJ1TfrRMy',
    title: 'Mickaël Lima sur Logic-Immo',
  },
  {
    src: '/images/lefigaroimmo.png',
    alt: 'Figaro Immobilier',
    href: 'https://immobilier.lefigaro.fr/',
    title: 'Mickaël Lima sur Figaro Immobilier',
  },
];

export const PortalsParallax: React.FC = () => (
  <section aria-label="Portails immobiliers de diffusion" className="relative overflow-hidden">
    {/* Fond fixe : le cadre (contenu) défile, l'image reste en place */}
    <div
      aria-hidden="true"
      className="parallax-fixed absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/pool-cta-final.jpg')" }}
    />
    <div aria-hidden="true" className="absolute inset-0 bg-[#011d41]/85" />

    <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-center text-white md:py-36">
      <Reveal>
        <SectionLabel tone="light">Diffusion maximale</SectionLabel>
      </Reveal>

      <h2 className="mx-auto mt-7 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
        <SplitWords text="Une visibilité maximale" />
        <br />
        <span className="italic">
          <SplitWords text="pour votre bien" delay={0.25} />
        </span>
      </h2>

      <Reveal delay={0.35}>
        <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-white/85 md:text-lg">
          Photos professionnelles, reportage vidéo et mise en ligne sur plus de
          40 portails : votre bien est vu immédiatement par des acquéreurs
          qualifiés — frontaliers et internationaux.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {PORTALS.map((portal, i) => (
          <Reveal key={portal.alt} delay={i * 0.07}>
            <a
              href={portal.href}
              target="_blank"
              rel="noopener noreferrer"
              title={portal.title}
              className="flex h-20 items-center justify-center rounded-2xl bg-white p-4 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <img
                src={portal.src}
                alt={portal.alt}
                loading="lazy"
                decoding="async"
                className="max-h-9 w-auto object-contain"
              />
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
          + réseaux sociaux, fichier acquéreurs qualifié et partage inter-agences
        </p>
      </Reveal>
    </div>
  </section>
);
