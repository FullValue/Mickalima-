import React from 'react';
import { Star } from 'lucide-react';
import { AGENT_PHOTO } from '../nosBiensShared';
import { PillButton, Reveal, SectionLabel, SplitWords } from './primitives';

/**
 * Section « À propos » — positionnement premium éditorial (codes Barnes,
 * Knight Frank, Daniel Féau) : grand portrait à cadre décalé, chips de
 * preuve sociale (ventes + note Google), titre serif romain/italique,
 * et trois différenciateurs en liste à filets fins numérotés.
 */

const DIFFERENTIATORS = [
  {
    title: 'Expertise frontalière',
    text: 'Bassin genevois, CERN, organisations internationales : une lecture fine d’un marché à double devise.',
  },
  {
    title: 'Marketing haut de gamme',
    text: 'Photographie professionnelle, film, home staging et diffusion sur plus de 40 portails.',
  },
  {
    title: 'Accompagnement sur mesure',
    text: 'Un interlocuteur unique, du premier échange jusqu’à la signature chez le notaire.',
  },
];

export const AboutTeaser: React.FC = () => (
  <section className="bg-white py-24 md:py-36">
    <div className="container mx-auto px-6">
      <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
        {/* Portrait — cadre décalé + chips de preuve */}
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Cadre décoratif décalé (filet bleu) */}
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 hidden h-full w-full rounded-[24px] border border-[#011d41]/15 sm:block"
            />
            <img
              src={AGENT_PHOTO}
              alt="Mickaël Lima, agent immobilier prestige dans le Pays de Gex"
              loading="lazy"
              decoding="async"
              className="relative aspect-[4/5] w-full rounded-[24px] object-cover shadow-[0_40px_80px_-30px_rgba(1,29,65,0.45)]"
            />

            {/* Chip ventes */}
            <div className="absolute -bottom-8 left-4 rounded-2xl bg-white p-5 shadow-[0_20px_50px_-20px_rgba(1,29,65,0.45)] sm:left-8">
              <p className="font-serif text-3xl leading-none text-[#011d41]">240</p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                Ventes — 5 dernières années
              </p>
            </div>

            {/* Chip Google (verre) */}
            <div className="absolute -top-5 right-4 flex items-center gap-2.5 rounded-full border border-white/40 bg-[#011d41]/85 px-4 py-2.5 text-white shadow-lg backdrop-blur-md sm:right-8">
              <Star size={14} className="fill-current" aria-hidden="true" />
              <span className="text-xs font-semibold">5,0</span>
              <span aria-hidden="true" className="h-3 w-px bg-white/25" />
              <span className="text-[11px] text-white/75">25 avis Google</span>
            </div>
          </div>
        </Reveal>

        {/* Éditorial */}
        <div className="lg:col-span-7 lg:pl-4">
          <Reveal y={6}>
            <SectionLabel>L’agence</SectionLabel>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-7 font-serif text-4xl leading-[1.12] tracking-tight text-[#011d41] md:text-5xl lg:text-[3.4rem]">
              <SplitWords text="Le prestige n’est pas un prix." />
              <br />
              <span className="italic text-[#011d41]/80">
                <SplitWords text="C’est une exigence." delay={0.35} />
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-gray-500 md:text-lg">
              Mickaël Lima accompagne vendeurs et acquéreurs exigeants dans le
              Pays de Gex et le bassin genevois. Chaque mandat est mené comme
              une pièce sur mesure — présentation soignée, stratégie ciblée,
              négociation tenue.
            </p>
          </Reveal>

          {/* Différenciateurs — filets fins numérotés */}
          <div className="mt-10 max-w-xl">
            {DIFFERENTIATORS.map((item, i) => (
              <Reveal key={item.title} delay={0.2 + i * 0.08}>
                <div
                  className={`flex gap-6 py-5 ${
                    i > 0 ? 'border-t border-[#ebebeb]' : ''
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="font-serif text-sm italic text-[#011d41]/40"
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-[#011d41]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
