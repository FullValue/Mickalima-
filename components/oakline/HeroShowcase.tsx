import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { m, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { HERO_SLIDES } from '../../constants';
import { BIENS } from '../biensData';
import { formatPrice } from '../nosBiensShared';
import { EASE, PillButton, SplitWords } from './primitives';

/**
 * Hero plein écran façon Oakline : slideshow fondu croisé + Ken Burns
 * (scale 1.3→1 à l'apparition), overlays dégradés sombres bas/haut,
 * titre géant centré Playfair, cartes biens flottantes en bas (BIENS[0..2])
 * et indicateurs miniatures cliquables. Auto-rotation ~6s.
 * Radius bas 32px + ombre portée.
 */

const AUTOPLAY_MS = 6000;
const SLIDES = HERO_SLIDES;
const FEATURED = BIENS.slice(0, 3);

export const HeroShowcase: React.FC = () => {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  // Auto-rotation — désactivée si prefers-reduced-motion.
  // `index` en dépendance : le compteur repart à zéro après chaque changement
  // (automatique ou manuel), période constante entre les slides.
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      AUTOPLAY_MS
    );
    return () => clearInterval(t);
  }, [index, reduce]);

  return (
    <section
      aria-label="Mickaël Lima Immobilier Prestige — Pays de Gex"
      className="relative h-screen overflow-hidden rounded-b-[32px] shadow-[0_30px_80px_-30px_rgba(1,29,65,0.45)]"
      style={{ height: '100svh' }}
    >
      {/* Slides — pile absolue, fondu croisé par opacité */}
      {SLIDES.map((src, i) => {
        const active = i === index;
        return (
          <m.div
            key={src}
            className="absolute inset-0"
            initial={{ opacity: i === 0 ? 1 : 0 }}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 1.1, ease: 'linear' }}
          >
            <m.img
              src={src}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
              initial={reduce ? false : { scale: 1.3, y: -10 }}
              animate={
                reduce
                  ? { scale: 1, y: 0 }
                  : active
                    ? { scale: 1, y: 0 }
                    : { scale: 1.3, y: -10 }
              }
              transition={
                active && !reduce
                  ? { duration: 0.8, ease: EASE }
                  : { duration: 0 }
              }
            />
          </m.div>
        );
      })}

      {/* Overlays dégradés sombres + teinte bleue de la marque */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/55 via-black/20 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 via-black/30 to-transparent"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#011d41]/25" />

      {/* Contenu */}
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-6 pt-24 text-center text-white">
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
            <SplitWords text="L'excellence immobilière" delay={0.25} />
            <br />
            <span className="italic">
              <SplitWords text="au cœur du Pays de Gex" delay={0.45} />
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

          <m.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
          >
            <PillButton to="/estimation" variant="light" arrow>
              Estimer mon bien gratuitement
            </PillButton>
            <PillButton to="/nos-biens" variant="ghost">
              Découvrir mes biens
            </PillButton>
          </m.div>

          <m.a
            href="#selection"
            aria-label="Faire défiler vers la sélection de biens"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-10 hidden h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:bg-white/10 hover:text-white md:inline-flex"
          >
            <ArrowDown size={18} aria-hidden="true" />
          </m.a>
        </div>

        {/* Bandeau bas : cartes biens flottantes + indicateurs miniatures */}
        <div className="relative z-10 px-4 pb-6 sm:px-6 md:pb-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-5">
            {/* Indicateurs miniatures cliquables */}
            <div className="flex items-center justify-center gap-3">
              {SLIDES.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Afficher la photo ${i + 1} sur ${SLIDES.length}`}
                  aria-current={i === index ? 'true' : undefined}
                  className={`group relative h-12 w-[72px] overflow-hidden rounded-xl ring-offset-2 ring-offset-black/20 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${
                    i === index
                      ? 'ring-2 ring-white'
                      : 'opacity-60 ring-1 ring-white/40 hover:opacity-100'
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Cartes biens (desktop/tablette) — une par slide */}
            <div className="hidden justify-center gap-4 sm:grid sm:grid-cols-3">
              {FEATURED.map((bien, i) => (
                <Link
                  key={bien.slug}
                  to={`/nos-biens/${bien.slug}`}
                  aria-label={`${bien.typeLabel} à ${bien.city} — ${formatPrice(bien.price)}`}
                  className={`flex items-center gap-3.5 rounded-2xl bg-white/95 p-3 pr-5 shadow-lg backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    i === index ? 'ring-2 ring-white/90' : ''
                  }`}
                >
                  <img
                    src={bien.photos[0]}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="h-14 w-16 shrink-0 rounded-xl object-cover"
                  />
                  <span className="min-w-0">
                    <span className="block truncate text-[13px] font-semibold text-[#011d41]">
                      {bien.typeLabel} — {bien.city}
                    </span>
                    <span className="mt-0.5 block font-serif text-[15px] text-[#011d41]">
                      {formatPrice(bien.price)}
                    </span>
                  </span>
                </Link>
              ))}
            </div>

            {/* Mobile : carte du bien actif uniquement */}
            <div className="sm:hidden">
              <Link
                to={`/nos-biens/${FEATURED[index]?.slug ?? FEATURED[0].slug}`}
                className="flex items-center gap-3.5 rounded-2xl bg-white/95 p-3 pr-5 shadow-lg backdrop-blur"
              >
                <img
                  src={FEATURED[index]?.photos[0] ?? FEATURED[0].photos[0]}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="h-14 w-16 shrink-0 rounded-xl object-cover"
                />
                <span className="min-w-0">
                  <span className="block truncate text-[13px] font-semibold text-[#011d41]">
                    {(FEATURED[index] ?? FEATURED[0]).typeLabel} —{' '}
                    {(FEATURED[index] ?? FEATURED[0]).city}
                  </span>
                  <span className="mt-0.5 block font-serif text-[15px] text-[#011d41]">
                    {formatPrice((FEATURED[index] ?? FEATURED[0]).price)}
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
