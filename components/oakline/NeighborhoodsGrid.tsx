import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { COMMUNES, getCommuneHeroImage } from '../../constants';
import { PillButton, Reveal, SectionHeader } from './primitives';

/**
 * Grille « quartiers » : 6 cartes image (COMMUNES, images
 * getCommuneHeroImage), zoom 110% au survol avec débordement masqué,
 * lien vers le guide de prix /prix-immobilier/:slug.
 */

const formatEUR = (v: number) => new Intl.NumberFormat('fr-FR').format(v);

export const NeighborhoodsGrid: React.FC = () => (
  <section className="bg-[#f5f5f5] py-24 md:py-32">
    <div className="container mx-auto px-6">
      <SectionHeader
        label="Zones d'intervention"
        title="Le Pays de Gex, commune par commune"
        subtitle="Connaissance fine de chaque marché local : prix pratiqués, délais de vente, profils d'acheteurs — de Ferney-Voltaire à Cessy."
      />

      <div className="mt-14 grid gap-5 md:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {COMMUNES.slice(0, 6).map((commune, i) => (
          <Reveal key={commune.slug} delay={(i % 3) * 0.08}>
            <Link
              to={`/prix-immobilier/${commune.slug}`}
              aria-label={`Découvrir le marché immobilier à ${commune.name}`}
              className="group relative block aspect-[4/5] overflow-hidden rounded-[24px] bg-[#011d41] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#011d41]"
            >
              <img
                src={getCommuneHeroImage(commune.slug)}
                alt={`Vue de ${commune.name}`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Overlay lisibilité */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#011d41]/90 via-[#011d41]/25 to-transparent transition-opacity duration-500 group-hover:from-[#011d41]/95"
              />

              {/* Flèche au survol */}
              <span
                aria-hidden="true"
                className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white text-[#011d41] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
              >
                <ArrowUpRight size={18} />
              </span>

              {/* Contenu */}
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65">
                  {commune.distanceGeneve} de Genève
                </p>
                <h3 className="mt-2 font-serif text-2xl tracking-tight md:text-[1.7rem]">
                  {commune.name}
                </h3>
                <p className="mt-2 text-sm text-white/75">
                  Appartements {formatEUR(commune.prixApptMin)}–
                  {formatEUR(commune.prixApptMax)} €/m²
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-12 text-center">
        <PillButton to="/prix-immobilier/pays-de-gex" variant="ghost" arrow>
          Voir tous les guides des prix
        </PillButton>
      </Reveal>
    </div>
  </section>
);
