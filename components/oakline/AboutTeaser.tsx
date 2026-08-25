import React from 'react';
import { AGENT_PHOTO } from '../nosBiensShared';
import { PillButton, Reveal, SectionLabel } from './primitives';

/**
 * Teaser « À propos » : citation grande serif + photo de l'agent
 * (AGENT_PHOTO, nosBiensShared) + 2 boutons pilule vers /about et /contact.
 * Les chiffres du paragraphe reprennent les données publiées du schema
 * homepage (8 ans d'expérience, 240 ventes sur 5 ans).
 */

export const AboutTeaser: React.FC = () => (
  <section className="bg-[#f5f5f5] py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Photo */}
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <img
              src={AGENT_PHOTO}
              alt="Mickaël Lima, agent immobilier prestige dans le Pays de Gex"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-[24px] object-cover shadow-[0_30px_60px_-25px_rgba(1,29,65,0.4)]"
            />
            <div className="absolute -bottom-6 left-6 right-10 rounded-2xl bg-white p-5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.3)] sm:left-8 sm:right-16">
              <p className="font-serif text-lg text-[#011d41]">Mickaël Lima</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Agent immobilier prestige
              </p>
            </div>
          </div>
        </Reveal>

        {/* Citation + CTA */}
        <div className="lg:col-span-7 lg:pl-6">
          <Reveal y={6}>
            <SectionLabel>À propos</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <blockquote className="mt-7">
              <p className="font-serif text-3xl leading-[1.25] tracking-tight text-[#011d41] md:text-4xl lg:text-[2.75rem]">
                « Chaque bien a une histoire. Mon métier, c'est de la raconter
                aux bonnes personnes — avec exigence, transparence et
                discrétion. »
              </p>
            </blockquote>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-gray-500 md:text-lg">
              Depuis 8 ans, j'accompagne vendeurs et acquéreurs dans le Pays de
              Gex et le bassin genevois — près de 240 ventes sur les cinq
              dernières années, au service d'une clientèle locale, frontalière
              et internationale.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <PillButton to="/about" variant="solid" arrow>
                Découvrir mon parcours
              </PillButton>
              <PillButton to="/contact" variant="ghost">
                Me contacter
              </PillButton>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
