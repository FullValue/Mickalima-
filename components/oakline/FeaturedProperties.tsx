import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BedDouble, Bath, MapPin, Ruler } from 'lucide-react';
import { BIENS } from '../biensData';
import { formatPrice, formatSurface } from '../nosBiensShared';
import { PillButton, Reveal, SectionHeader } from './primitives';

/**
 * « Notre sélection »: grille de 3 cartes biens (BIENS[0..2]).
 * Hover : swap image 1→2 en fondu + zoom 1.05→1.1, overlay sombre
 * avec bouton pilule « Voir le bien ». Lien vers /nos-biens/:slug.
 * formatPrice / formatSurface importés de nosBiensShared (import uniquement).
 */

const FEATURED = BIENS.slice(0, 3);

export const FeaturedProperties: React.FC = () => (
  <section id="selection" className="bg-white py-24 md:py-32">
    <div className="container mx-auto px-6">
      <SectionHeader
        label="Notre sélection"
        title="Biens d'exception, sélectionnés avec exigence"
        subtitle="Une collection resserrée de propriétés premium du Pays de Gex: chaque bien est visité, photographié et valorisé avant sa mise en vente."
      />

      <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
        {FEATURED.map((bien, i) => {
          const secondPhoto = bien.photos[1] ?? bien.photos[0];
          return (
            <Reveal key={bien.slug} delay={i * 0.1}>
              <Link
                to={`/nos-biens/${bien.slug}`}
                aria-label={`Voir le bien : ${bien.typeLabel} à ${bien.city}, ${formatPrice(bien.price)}`}
                className="group block overflow-hidden rounded-[24px] border border-[#ebebeb] bg-white shadow-[0_2px_20px_-5px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgba(1,29,65,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#011d41]"
              >
                {/* Média: swap d'image au survol */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={bien.photos[0]}
                    alt={`${bien.typeLabel} à ${bien.city}`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full scale-105 object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-0"
                  />
                  <img
                    src={secondPhoto}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                  />

                  {/* Badges */}
                  <span
                    className={`absolute left-5 top-5 rounded-full px-4 py-1.5 text-xs font-semibold ${
                      bien.status === 'Vendu'
                        ? 'bg-[#011d41] text-white'
                        : 'bg-white/90 text-[#011d41] backdrop-blur'
                    }`}
                  >
                    {bien.status}
                  </span>
                  {bien.coupDeCoeur && (
                    <span className="absolute right-5 top-5 rounded-full bg-[#011d41] px-4 py-1.5 text-xs font-semibold text-white">
                      Coup de cœur
                    </span>
                  )}

                  {/* Overlay sombre + bouton pilule */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#011d41]/85 via-[#011d41]/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex translate-y-3 items-end justify-center pb-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <span className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#011d41]">
                      Voir le bien
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-xl leading-snug text-[#011d41]">
                      {bien.typeLabel}: {bien.city}
                    </h3>
                    <p className="whitespace-nowrap font-serif text-lg text-[#011d41]">
                      {formatPrice(bien.price)}
                    </p>
                  </div>

                  <p className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
                    <MapPin size={14} aria-hidden="true" />
                    {bien.city} ({bien.cp})
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-[#ebebeb] pt-5">
                    {formatSurface(bien.surface) && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ebebeb] bg-[#fafafa] px-3.5 py-1.5 text-[13px] text-[#011d41]">
                        <Ruler size={13} aria-hidden="true" />
                        {formatSurface(bien.surface)}
                      </span>
                    )}
                    {bien.bedrooms != null && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ebebeb] bg-[#fafafa] px-3.5 py-1.5 text-[13px] text-[#011d41]">
                        <BedDouble size={13} aria-hidden="true" />
                        {bien.bedrooms} ch.
                      </span>
                    )}
                    {bien.baths != null && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ebebeb] bg-[#fafafa] px-3.5 py-1.5 text-[13px] text-[#011d41]">
                        <Bath size={13} aria-hidden="true" />
                        {bien.baths} sdb
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.15} className="mt-12 text-center">
        <PillButton to="/nos-biens" variant="solid" arrow>
          Voir tous les biens
        </PillButton>
      </Reveal>
    </div>
  </section>
);
