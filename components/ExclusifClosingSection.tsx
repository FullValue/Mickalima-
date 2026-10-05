import React from 'react';
import { Gem, ShieldCheck, Star, Video } from 'lucide-react';
import { PillButton, Reveal, SectionLabel } from './oakline/primitives';

const BENEFITS = [
  {
    icon: Video,
    title: 'Film de présentation',
    description: 'Un scénario adapté à votre bien, des prises de vue soignées et un montage dédié.',
  },
  {
    icon: Gem,
    title: 'Diffusion prestige',
    description: 'Des portails sélectionnés, des acquéreurs ciblés et une communication discrète si vous le souhaitez.',
  },
  {
    icon: Star,
    title: 'Présentation sur mesure',
    description: 'Une galerie photo, des formats courts et des supports pensés pour révéler les qualités de votre bien.',
  },
  {
    icon: ShieldCheck,
    title: 'Suivi personnalisé',
    description: 'Un interlocuteur dédié, des retours réguliers et la confidentialité de votre projet.',
  },
];

/** Une conclusion illustrée, dans les codes des nouvelles sections du site. */
export const ExclusifClosingSection: React.FC = () => (
  <section id="sommet-immobilier" aria-labelledby="exclusif-closing-title" className="scroll-mt-28 bg-[#f7f7f7] py-20 md:py-28">
    <div className="mx-auto max-w-[1300px] px-6 md:px-[30px]">
      <div className="grid overflow-hidden rounded-[32px] bg-[#011d41] text-white lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <figure className="relative min-h-[340px] min-w-0 sm:min-h-[440px] lg:min-h-0">
          <img
            src="/images/services/villa-prestige.jpg"
            alt="Villa en pierre et piscine à la tombée du jour, face aux montagnes"
            width="1536"
            height="1024"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#011d41]/70 via-transparent to-[#011d41]/10" />
          <div className="absolute left-5 top-5 md:left-7 md:top-7">
            <SectionLabel tone="light">Mandat Exclusif</SectionLabel>
          </div>
          <figcaption className="absolute inset-x-5 bottom-5 rounded-[20px] border border-white/25 bg-[#011d41]/35 p-5 backdrop-blur-xl md:inset-x-7 md:bottom-7 md:p-7">
            <p className="font-serif text-xl leading-snug tracking-tight md:text-2xl">
              Une attention particulière.<br />
              <span className="font-accent text-[36px] italic leading-[1.15] md:text-[42px]">À chaque détail.</span>
            </p>
          </figcaption>
        </figure>

        <div className="min-w-0 p-6 sm:p-10 lg:p-12">
          <Reveal y={6}>
            <SectionLabel tone="light" className="max-w-full leading-relaxed">Le sommet de l’immobilier</SectionLabel>
            <h2 id="exclusif-closing-title" className="mt-6 font-serif text-[38px] font-normal leading-[1.05] tracking-tight sm:text-5xl xl:text-[58px]">
              L’ultime<br /><span className="font-accent italic">privilège.</span>
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/75 md:text-base">
              Une présentation à la hauteur de votre bien. Un accompagnement personnel, du premier échange à la signature.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-x-7 gap-y-7 sm:grid-cols-2">
            {BENEFITS.map(({ icon: Icon, title, description }, index) => (
              <Reveal key={title} y={6} delay={index * 0.04}>
                <article className="h-full border-t border-white/20 pt-5">
                  <div className="flex items-center gap-3">
                    <span aria-hidden="true" className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                      <Icon size={16} strokeWidth={1.5} />
                    </span>
                    <h3 className="font-serif text-xl font-normal leading-snug tracking-tight">{title}</h3>
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/65">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal y={6} delay={0.08}>
            <PillButton to="/contact" variant="light" className="mt-9 w-full justify-between sm:w-auto sm:justify-center">
              Candidature confidentielle
            </PillButton>
            <p className="mt-4 max-w-md text-xs leading-relaxed text-white/55">
              Les modalités de diffusion et de confidentialité sont définies avec vous.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
