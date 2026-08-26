import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bath, BedDouble, ChevronLeft, ChevronRight, MapPin, Ruler } from 'lucide-react';
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
    <section id="selection" className="overflow-hidden bg-[#f5f4ef] py-20 md:py-28">
      <div className="container mx-auto px-6">
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
          className="no-scrollbar -mx-6 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#011d41] md:mt-16 md:gap-6"
        >
          {FEATURED.map((bien) => (
            <article
              key={bien.slug}
              className="w-[86vw] max-w-[390px] shrink-0 snap-start rounded-[15px] border border-black/5 bg-white p-3 shadow-[0_16px_50px_-35px_rgba(1,29,65,0.35)] sm:w-[65vw] md:w-[44vw] lg:w-[31vw]"
            >
              <Link
                to={`/nos-biens/${bien.slug}`}
                aria-label={`Voir ${bien.typeLabel} à ${bien.city}, ${formatPrice(bien.price)}`}
                className="group block rounded-[12px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#011d41]"
              >
                <div className="relative aspect-square overflow-hidden rounded-[12px] bg-[#e9e8e2]">
                  <img
                    src={bien.photos[0]}
                    alt={`${bien.typeLabel} à ${bien.city}`}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08] group-focus-visible:scale-[1.08] motion-reduce:transition-none"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#011d41] backdrop-blur">
                    {bien.status}
                  </span>
                </div>

                <div className="px-2 pb-3 pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-[1.35rem] leading-tight text-[#011d41]">
                      {bien.typeLabel} à {bien.city}
                    </h3>
                    <p className="shrink-0 text-sm font-semibold text-[#011d41]">{formatPrice(bien.price)}</p>
                  </div>

                  <p className="mt-3 flex items-center gap-1.5 text-sm text-[#011d41]/55">
                    <MapPin size={14} aria-hidden="true" />
                    {bien.city} ({bien.cp})
                  </p>

                  <p className="mt-4 line-clamp-2 min-h-12 text-sm leading-6 text-[#011d41]/65">
                    {bien.highlights[0] || `Une propriété de caractère à découvrir à ${bien.city}.`}
                  </p>

                  <div className="mt-5 flex min-h-11 items-center gap-5 border-t border-[#011d41]/10 pt-5 text-xs font-medium text-[#011d41]/70">
                    {formatSurface(bien.surface) && (
                      <span className="inline-flex items-center gap-1.5">
                        <Ruler size={15} aria-hidden="true" /> {formatSurface(bien.surface)}
                      </span>
                    )}
                    {bien.bedrooms != null && (
                      <span className="inline-flex items-center gap-1.5">
                        <BedDouble size={15} aria-hidden="true" /> {bien.bedrooms} ch.
                      </span>
                    )}
                    {bien.baths != null && (
                      <span className="inline-flex items-center gap-1.5">
                        <Bath size={15} aria-hidden="true" /> {bien.baths} sdb
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
