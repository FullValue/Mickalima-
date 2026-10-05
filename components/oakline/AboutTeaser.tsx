import React from 'react';
import { Star } from 'lucide-react';
import { GOOGLE_REVIEWS_COUNT } from '../../constants';
import { AGENT_PHOTO } from '../nosBiensShared';
import { PillButton, Reveal, SectionLabel } from './primitives';

/** Une présentation personnelle, dans les codes de la page À propos. */
export const AboutTeaser: React.FC = () => (
  <section id="mickael-lima" aria-labelledby="home-about-title" className="scroll-mt-28 bg-white py-20 md:py-28">
    <div className="container mx-auto px-6">
      <div className="grid overflow-hidden rounded-[32px] bg-[#f3f4f1] text-[#011d41] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <figure className="relative min-w-0 bg-[#e7e9e5]">
          <img
            src={AGENT_PHOTO}
            alt="Mickaël Lima Dos Santos, expert immobilier indépendant dans le Pays de Gex"
            width="800"
            height="1000"
            loading="lazy"
            decoding="async"
            className="block aspect-[4/5] w-full object-cover sm:max-h-[620px] lg:absolute lg:inset-0 lg:h-full lg:max-h-none"
          />
          <a href="https://share.google/fvsAyaT6pI2059MZF" target="_blank" rel="noopener noreferrer" className="absolute right-5 top-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/50 bg-white/85 px-4 text-xs font-medium shadow-sm backdrop-blur-md transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#011d41] md:right-6 md:top-6">
            <Star size={13} fill="currentColor" aria-hidden="true" />
            <span>5,0 · {GOOGLE_REVIEWS_COUNT} avis Google</span>
          </a>
          <figcaption className="absolute inset-x-5 bottom-5 rounded-[20px] border border-white/25 bg-[#011d41]/45 p-5 text-white backdrop-blur-xl md:inset-x-6 md:bottom-6 md:p-6">
            <p className="font-serif text-2xl tracking-tight md:text-[28px]">Mickaël Lima Dos Santos</p>
            <p className="mt-2 text-xs leading-relaxed text-white/80">Expert immobilier indépendant<br />Divonne-les-Bains · Pays de Gex</p>
          </figcaption>
        </figure>

        <div className="min-w-0 p-6 sm:p-10 lg:p-12 xl:p-14">
          <Reveal y={6}>
            <SectionLabel>Faisons connaissance</SectionLabel>
            <h2 id="home-about-title" className="mt-7 font-serif text-[clamp(32px,9.75vw,38px)] font-normal leading-[1.08] tracking-tight sm:text-5xl xl:text-[58px]">
              Un regard local.<br /><span className="font-accent italic">À vos côtés.</span>
            </h2>
          </Reveal>

          <Reveal y={6} delay={0.08}>
            <p className="mt-7 text-lg leading-relaxed md:text-xl">Bonjour, je suis Mickaël Lima.<br />Votre interlocuteur, du premier échange à la signature.</p>
            <p className="mt-5 text-sm leading-relaxed text-[#637080] md:text-base">Basé à Divonne-les-Bains, j’accompagne depuis plus de 8 ans les projets immobiliers du Pays de Gex. Mon rôle : estimer avec justesse, révéler les qualités de votre bien et défendre vos intérêts à chaque étape.</p>
            <p className="mt-4 text-sm leading-relaxed text-[#637080] md:text-base">Bilingue français-anglais, je travaille avec une clientèle locale et internationale. Une connaissance du marché frontalier, et un suivi personnel pour avancer sereinement.</p>
          </Reveal>

          <Reveal y={6} delay={0.12}>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-[#011d41]/15 pt-7">
              <div className="flex flex-col">
                <dt className="order-2 mt-3 text-xs leading-relaxed text-[#637080]">d’expérience sur le marché local</dt>
                <dd className="order-1 font-accent text-[42px] leading-none md:text-5xl"><span className="mb-2 block font-sans text-xs font-medium text-[#637080]">Plus de</span>8 ans</dd>
              </div>
              <div className="flex flex-col border-l border-[#011d41]/15 pl-6">
                <dt className="order-2 mt-3 text-xs leading-relaxed text-[#637080]">ventes réalisées en cinq ans</dt>
                <dd className="order-1 font-accent text-[42px] leading-none md:text-5xl">240+</dd>
              </div>
            </dl>
            <div className="mt-9 flex flex-wrap gap-3">
              <PillButton to="/about" className="w-full justify-between sm:w-auto sm:justify-center">Découvrir mon parcours</PillButton>
              <PillButton to="/contact" className="w-full justify-between sm:w-auto sm:justify-center">Me contacter</PillButton>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
