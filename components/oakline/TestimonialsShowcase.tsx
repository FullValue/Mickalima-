import React from 'react';
import { Star } from 'lucide-react';
import { IMAGES } from '../../constants';
import { PillButton, Reveal, SectionHeader } from './primitives';

/**
 * Témoignages façon Oakline : 1 grande carte image + overlay + note
 * agrégée Google (données réelles reprises de HomeSections : 5,0/5,
 * 25 avis vérifiés) et 4 petites cartes claires.
 *
 * NOTE CONTENU : les 4 citations individuelles ci-dessous sont des
 * textes d'illustration à faire valider / remplacer par de vrais extraits
 * d'avis Google avant mise en production.
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
    context: 'Vendeuse — Divonne-les-Bains',
  },
  {
    quote:
      'Frontalier, je cherchais depuis des mois. Mickaël a compris exactement notre projet et déniché la maison qu’il nous fallait, côté français.',
    name: 'Laurent & Céline M.',
    context: 'Acquéreurs — Saint-Genis-Pouilly',
  },
  {
    quote:
      'Rigueur, disponibilité, discrétion. Tout a été géré avec un professionnalisme rare, y compris la partie administrative avec la Suisse.',
    name: 'Catherine R.',
    context: 'Vendeuse — Ferney-Voltaire',
  },
  {
    quote:
      'Estimation réaliste dès le départ, aucune promesse en l’air. Résultat : vendu au prix demandé, dans les délais annoncés.',
    name: 'Jean-Marc P.',
    context: 'Vendeur — Gex',
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
        subtitle="Vendeurs et acquéreurs du Pays de Gex partagent leur expérience — la confiance se construit transaction après transaction."
      />

      <div className="mt-14 grid gap-6 md:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {/* Grande carte image + note agrégée */}
        <Reveal className="sm:col-span-2 lg:col-span-1 lg:row-span-2">
          <article className="relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-[24px]">
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
            <div className="relative p-8 text-white md:p-10">
              <Stars className="text-white/90" />
              <p className="mt-5 font-serif text-4xl tracking-tight md:text-5xl">
                5,0<span className="text-2xl text-white/70">/5</span>
              </p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/80">
                Sur <span className="font-semibold text-white">25 avis Google
                vérifiés</span> — clientèle du Pays de Gex et du bassin genevois.
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

        {/* 4 petites cartes claires */}
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={0.08 + i * 0.06}>
            <article className="flex h-full flex-col rounded-[24px] border border-[#ebebeb] bg-[#fafafa] p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_40px_-20px_rgba(1,29,65,0.25)]">
              <Stars className="text-[#011d41]" />
              <blockquote className="mt-5 flex-1">
                <p className="text-[15px] leading-relaxed text-gray-600">
                  « {t.quote} »
                </p>
              </blockquote>
              <footer className="mt-6 border-t border-[#ebebeb] pt-5">
                <p className="font-serif text-base text-[#011d41]">{t.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                  {t.context}
                </p>
              </footer>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
