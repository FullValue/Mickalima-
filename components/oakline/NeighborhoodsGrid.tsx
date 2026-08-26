import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { COMMUNES, getCommuneHeroImage } from '../../constants';
import { PillButton, Reveal, SectionHeader } from './primitives';

/**
 * Zones d'intervention : slider autoplay des communes (cartes image,
 * zoom au survol, lien vers le guide de prix). Défilement lent avec
 * fondu doux sur les bords: évite le long scroll sur mobile.
 */

const formatEUR = (v: number) => new Intl.NumberFormat('fr-FR').format(v);
const COMMUNES_SLIDER = COMMUNES.slice(0, 6);

export const NeighborhoodsGrid: React.FC = () => (
  <section className="bg-[#f5f5f5] py-24 md:py-32">
    <div className="container mx-auto px-6">
      <SectionHeader
        label="Zones d'intervention"
        title="Le Pays de Gex, commune par commune"
        subtitle="Connaissance fine de chaque marché local : prix pratiqués, délais de vente, profils d'acheteurs: de Ferney-Voltaire à Cessy."
      />
    </div>

    <div
      aria-label="Communes du Pays de Gex"
      className="marquee marquee-mask mt-14 overflow-x-auto md:mt-16 [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      <div
        className="marquee-track px-6"
        style={{ '--marquee-duration': '48s' } as React.CSSProperties}
      >
        {[...COMMUNES_SLIDER, ...COMMUNES_SLIDER].map((commune, i) => (
          <Link
            key={`${commune.slug}-${i}`}
            to={`/prix-immobilier/${commune.slug}`}
            aria-hidden={i >= COMMUNES_SLIDER.length || undefined}
            tabIndex={i >= COMMUNES_SLIDER.length ? -1 : undefined}
            aria-label={`Découvrir le marché immobilier à ${commune.name}`}
            className="group relative mr-5 block aspect-[4/5] w-[270px] shrink-0 overflow-hidden rounded-[24px] bg-[#011d41] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#011d41] sm:w-[310px]"
          >
            <img
              src={getCommuneHeroImage(commune.slug)}
              alt={`Vue de ${commune.name}`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#011d41]/90 via-[#011d41]/25 to-transparent transition-opacity duration-500 group-hover:from-[#011d41]/95"
            />
            <span
              aria-hidden="true"
              className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white text-[#011d41] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
            >
              <ArrowUpRight size={18} />
            </span>
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65">
                {commune.distanceGeneve} de Genève
              </p>
              <h3 className="mt-2 font-serif text-2xl tracking-tight">{commune.name}</h3>
              <p className="mt-2 text-sm text-white/75">
                Appartements {formatEUR(commune.prixApptMin)}-
                {formatEUR(commune.prixApptMax)} €/m²
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>

    <div className="container mx-auto px-6">
      <Reveal delay={0.15} className="mt-12 text-center">
        <PillButton to="/prix-immobilier/pays-de-gex" variant="ghost" arrow>
          Voir tous les guides des prix
        </PillButton>
      </Reveal>
    </div>
  </section>
);
