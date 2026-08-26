import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bath, BedDouble, ChevronLeft, ChevronRight, Ruler } from 'lucide-react';
import { BIENS } from '../biensData';
import { formatPrice, formatSurface } from '../nosBiensShared';
import { PillButton, Reveal, SectionHeader } from './primitives';

const FEATURED = BIENS.filter((bien) => bien.status === 'À vendre').slice(0, 6);

export const FeaturedProperties: React.FC = () => {
  const railRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const move = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;

    const firstCard = rail.firstElementChild as HTMLElement | null;
    const gap = Number.parseFloat(getComputedStyle(rail).columnGap) || 24;
    const step = (firstCard?.offsetWidth ?? rail.clientWidth) + gap;
    const atEnd = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 8;
    const atStart = rail.scrollLeft <= 8;

    rail.scrollTo({
      left: direction === 1 && atEnd ? 0 : direction === -1 && atStart ? rail.scrollWidth : rail.scrollLeft + step * direction,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => move(1), 4500);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section id="selection" className="overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1350px] px-5">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            label="Notre sélection"
            title="Des lieux rares, pensés pour votre quotidien"
            subtitle="Découvrez une sélection de propriétés choisies pour leur emplacement, leur caractère et la qualité de leurs prestations."
          />

          <div className="flex shrink-0 gap-3" aria-label="Navigation du carrousel">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Voir les biens précédents"
              className="grid h-12 w-12 place-items-center rounded-full border border-[#011d41]/20 bg-white text-[#011d41] transition hover:bg-[#011d41] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#011d41]"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Voir les biens suivants"
              className="grid h-12 w-12 place-items-center rounded-full border border-[#011d41]/20 bg-white text-[#011d41] transition hover:bg-[#011d41] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#011d41]"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={railRef}
          role="region"
          aria-label="Biens immobiliers à la vente"
          tabIndex={0}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
          }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowRight') move(1);
            if (event.key === 'ArrowLeft') move(-1);
          }}
          className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#011d41] md:mx-0 md:mt-16 md:gap-6 md:px-0"
        >
          {FEATURED.map((bien) => (
            <article
              key={bien.slug}
              className="w-[calc(100vw-40px)] max-w-none shrink-0 snap-start rounded-[15px] bg-[#f7f7f7] p-2.5 sm:w-[65vw] md:w-[calc((100%_-_24px)_/_2)] lg:w-[calc((100%_-_48px)_/_3)]"
            >
              <Link
                to={`/nos-biens/${bien.slug}`}
                aria-label={`Voir ${bien.typeLabel} à ${bien.city}, ${formatPrice(bien.price)}`}
                className="group block rounded-[10px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#011d41]"
              >
                <div className="relative aspect-square overflow-hidden rounded-[10px] bg-[#e9e8e2]">
                  <img
                    src={bien.photos[0]}
                    alt={`${bien.typeLabel} à ${bien.city}`}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="h-full w-full object-cover transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.06] group-hover:brightness-75 group-hover:blur-[4px] group-focus-visible:scale-[1.06] group-focus-visible:brightness-75 group-focus-visible:blur-[4px] motion-reduce:transition-none"
                  />
                  <span className="pointer-events-none absolute left-1/2 top-1/2 inline-flex h-10 -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-[10px] bg-white/30 px-5 text-sm font-medium text-white opacity-0 backdrop-blur-[5px] transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
                    <ChevronRight size={18} aria-hidden="true" />
                    Voir le bien
                  </span>
                </div>

                <div className="p-2.5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="min-w-0 font-sans text-[22px] font-medium leading-[1.3] text-[#1a1a1a]">
                      {bien.typeLabel} à {bien.city}
                    </h3>
                    <p className="shrink-0 font-sans text-[22px] font-medium leading-[1.3] text-[#1a1a1a]">{formatPrice(bien.price)}</p>
                  </div>

                  <p className="mt-2 line-clamp-2 min-h-[44.8px] text-base leading-[1.4] text-gray-500">
                    {bien.highlights[0] || `Une propriété de caractère à découvrir à ${bien.city}.`}
                  </p>

                  <div className="mt-2 h-[3px] border-t border-[#e5e5e5]" aria-hidden="true" />

                  <div className="flex min-h-[31px] items-center justify-between gap-2 text-sm font-medium text-[#1a1a1a]">
                    {bien.bedrooms != null && (
                      <span className="inline-flex min-w-0 items-center gap-1.5">
                        <BedDouble size={18} strokeWidth={1.5} aria-hidden="true" />
                        <span>{bien.bedrooms} chambres</span>
                      </span>
                    )}
                    {bien.baths != null && (
                      <span className="inline-flex min-w-0 items-center gap-1.5">
                        <Bath size={18} strokeWidth={1.5} aria-hidden="true" />
                        <span>{bien.baths} salles d’eau</span>
                      </span>
                    )}
                    {formatSurface(bien.surface) && (
                      <span className="inline-flex min-w-0 items-center gap-1.5">
                        <Ruler size={18} strokeWidth={1.5} aria-hidden="true" />
                        <span>{formatSurface(bien.surface)}</span>
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-6 text-center">
          <PillButton to="/nos-biens" variant="solid" arrow>
            Voir tous les biens
          </PillButton>
        </Reveal>
      </div>
    </section>
  );
};
