import React from 'react';
import { Star } from 'lucide-react';
import { IMAGES } from '../../constants';
import { PillButton, Reveal, SectionHeader } from './primitives';

/**
 * Avis clients : photo pleine largeur avec note agrégée Google (5,0/5,
 * 25 avis vérifiés) puis slider autoplay des cartes d'avis: défilement
 * lent droite→gauche, pause au survol, fondu doux sur les bords.
 * (Données réelles Google ; citations individuelles à valider.)
 */

const GOOGLE_REVIEWS_URL = 'https://share.google/fvsAyaT6pI2059MZF';

interface Testimonial {
  quote: string;
  name: string;
  context: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Un accompagnement remarquable du premier appel à la signature. Estimation juste, photos sublimes, acheteur sérieux en trois semaines.',
    name: 'Sophie D.',
    context: 'Vendeuse: Divonne-les-Bains',
  },
  {
    quote:
      'Frontalier, je cherchais depuis des mois. Mickaël a compris exactement notre projet et déniché la maison qu’il nous fallait, côté français.',
    name: 'Laurent & Céline M.',
    context: 'Acquéreurs: Saint-Genis-Pouilly',
  },
  {
    quote:
      'Rigueur, disponibilité, discrétion. Tout a été géré avec un professionnalisme rare, y compris la partie administrative avec la Suisse.',
    name: 'Catherine R.',
    context: 'Vendeuse: Ferney-Voltaire',
  },
  {
    quote:
      'Estimation réaliste dès le départ, aucune promesse en l’air. Résultat : vendu au prix demandé, dans les délais annoncés.',
    name: 'Jean-Marc P.',
    context: 'Vendeur: Gex',
  },
];

const Stars: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div aria-label="Note de 5 sur 5" className={`flex gap-1 ${className}`}>
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
    ))}
  </div>
);

export const TestimonialsShowcase: React.FC = () => (
  <section className="bg-white py-24 md:py-32">
    <div className="container mx-auto px-6">
      <SectionHeader
        label="Avis clients"
        title="Ils m'ont confié leur projet"
        subtitle="Vendeurs et acquéreurs du Pays de Gex partagent leur expérience: la confiance se construit transaction après transaction."
      />

      {/* Photo pleine largeur + note agrégée Google */}
      <Reveal className="mt-14 md:mt-16">
        <article className="relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-[28px] md:min-h-[500px]">
          <img
            src={IMAGES.gallery[0]}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#011d41]/95 via-[#011d41]/45 to-[#011d41]/10"
          />
          <div className="relative max-w-xl p-8 text-white md:p-12">
            <Stars className="text-white/90" />
            <p className="mt-5 font-serif text-5xl tracking-tight md:text-6xl">
              5,0<span className="text-3xl text-white/70">/5</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
              Sur <span className="font-semibold text-white">25 avis Google
              vérifiés</span>: clientèle du Pays de Gex et du bassin genevois.
            </p>
            <PillButton
              href={GOOGLE_REVIEWS_URL}
              external
              variant="light"
              className="mt-7"
            >
              Lire les avis sur Google
            </PillButton>
          </div>
        </article>
      </Reveal>
    </div>

    {/* Slider autoplay des cartes d'avis (fondu sur les bords) */}
    <div
      aria-label="Témoignages clients défilant automatiquement"
      className="marquee marquee-mask mt-12 overflow-x-auto md:mt-16 [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      <div
        className="marquee-track px-6"
        style={{ '--marquee-duration': '38s' } as React.CSSProperties}
      >
        {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
          <article
            key={`${t.name}-${i}`}
            aria-hidden={i >= TESTIMONIALS.length || undefined}
            className="mr-5 flex w-[300px] shrink-0 flex-col rounded-[24px] border border-[#ebebeb] bg-[#fafafa] p-7 sm:w-[340px]"
          >
            <Stars className="text-[#011d41]" />
            <blockquote className="mt-4 flex-1">
              <p className="text-[15px] leading-relaxed text-gray-600">« {t.quote} »</p>
            </blockquote>
            <div className="mt-6 border-t border-[#ebebeb] pt-4">
              <p className="font-serif text-base text-[#011d41]">{t.name}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                {t.context}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
