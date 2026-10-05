import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Gem, ShieldCheck, Star, Video, type LucideIcon } from 'lucide-react';
import { m, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { PillButton, SectionLabel } from './oakline/primitives';

const BENEFITS = [
  {
    id: 'exclusif-film',
    icon: Video,
    title: 'Film de présentation',
    description: 'Un récit pensé pour votre bien, pour faire ressentir ses volumes, sa lumière et son caractère.',
    details: ['Scénario adapté', 'Prises de vue soignées', 'Montage dédié'],
  },
  {
    id: 'exclusif-diffusion',
    icon: Gem,
    title: 'Diffusion prestige',
    description: 'La bonne visibilité, auprès des bons acquéreurs. Une communication discrète si vous le souhaitez.',
    details: ['Portails sélectionnés', 'Acquéreurs ciblés', 'Diffusion sur mesure'],
  },
  {
    id: 'exclusif-presentation',
    icon: Star,
    title: 'Présentation sur mesure',
    description: 'Des images et des formats cohérents pour révéler les qualités de votre bien et soigner la première impression.',
    details: ['Galerie photo', 'Formats courts', 'Supports de présentation'],
  },
  {
    id: 'exclusif-suivi',
    icon: ShieldCheck,
    title: 'Suivi personnalisé',
    description: 'Un interlocuteur jusqu’à la signature, avec des retours réguliers et la confidentialité de votre projet.',
    details: ['Interlocuteur dédié', 'Confidentialité', 'Retours réguliers'],
  },
] satisfies Array<{ id: string; icon: LucideIcon; title: string; description: string; details: string[] }>;

type Benefit = (typeof BENEFITS)[number];

const ExclusifBenefit: React.FC<{ benefit: Benefit; index: number; active: boolean }> = ({ benefit, index, active }) => {
  const article = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: article, offset: ['start 0.85', 'start 0.4'] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [12, 0]);
  const Icon = benefit.icon;

  return (
    <article ref={article} className="relative py-8 md:py-10">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px overflow-hidden bg-[#011d41]/15">
        <m.div className="h-full origin-left bg-[#011d41]" style={{ scaleX: reduced ? 1 : scrollYProgress }} />
      </div>
      <m.div className="grid grid-cols-[44px_minmax(0,1fr)] gap-4 md:grid-cols-[72px_minmax(0,1fr)] md:gap-7" style={{ y: reduced ? 0 : y }}>
        <m.span aria-hidden="true" style={{ opacity: reduced ? 1 : opacity }} className={`font-accent text-[44px] italic leading-none transition-colors duration-300 motion-reduce:transition-none md:text-[64px] ${active ? 'text-[#011d41]' : 'text-[#8c97a3]'}`}>
          {String(index + 1).padStart(2, '0')}
        </m.span>
        <div className="contents min-w-0 md:block">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-serif text-[25px] font-normal leading-[1.15] tracking-tight text-[#011d41] md:text-[32px]">{benefit.title}</h3>
            <Icon size={20} strokeWidth={1.5} aria-hidden="true" className="mt-1 hidden shrink-0 text-[#011d41]/55 sm:block" />
          </div>
          <p className="col-span-2 max-w-xl text-sm leading-relaxed text-[#637080] md:mt-4 md:text-base">{benefit.description}</p>
          <ul className="col-span-2 flex flex-wrap gap-2 md:mt-5" aria-label="Prestations incluses">
            {benefit.details.map(detail => (
              <li key={detail} className="rounded-full border border-[#011d41]/10 bg-[#f3f4f1] px-3 py-1.5 text-[11px] leading-relaxed text-[#011d41]/75">{detail}</li>
            ))}
          </ul>
        </div>
      </m.div>
    </article>
  );
};

/** Le titre accompagne quatre prestations, soulignées progressivement au scroll. */
export const ExclusifClosingSection: React.FC = () => {
  const list = useRef<HTMLOListElement>(null);
  const items = useRef<Array<HTMLLIElement | null>>([]);
  const [activeStep, setActiveStep] = useState(0);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: list, offset: ['start 0.65', 'end 0.4'] });
  const updateActiveStep = useCallback(() => {
    const readingLine = window.innerHeight * 0.45;
    let next = 0;
    items.current.forEach((item, index) => {
      if (item && item.getBoundingClientRect().top <= readingLine) next = index;
    });
    setActiveStep(next);
  }, []);
  useMotionValueEvent(scrollYProgress, 'change', updateActiveStep);
  useEffect(() => {
    updateActiveStep();
    window.addEventListener('resize', updateActiveStep);
    return () => window.removeEventListener('resize', updateActiveStep);
  }, [updateActiveStep]);

  return (
    <section id="sommet-immobilier" aria-labelledby="exclusif-closing-title" className="scroll-mt-28 bg-white py-20 text-[#011d41] md:py-28">
      <div className="mx-auto grid max-w-[1300px] items-start gap-12 px-6 md:px-[30px] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div className="min-w-0 lg:top-28 [@media(min-width:1024px)_and_(min-height:700px)]:sticky">
          <SectionLabel className="max-w-full leading-relaxed">Le sommet de l’immobilier</SectionLabel>
          <h2 id="exclusif-closing-title" className="mt-7 font-serif text-[42px] font-normal leading-[1.05] tracking-tight sm:text-5xl xl:text-[60px]">
            L’exigence,<br /><span className="font-accent italic">dans chaque détail.</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#637080] md:text-base">
            Quatre attentions qui font la différence. Une présentation à la hauteur de votre bien et un accompagnement personnel jusqu’à la signature.
          </p>

          <nav aria-label="Les prestations du mandat exclusif" className="mt-8 max-w-[280px]">
            <ol className="flex justify-between gap-3">
              {BENEFITS.map((benefit, index) => (
                <li key={benefit.id}>
                  <a
                    href={`#${benefit.id}`}
                    aria-label={`${String(index + 1).padStart(2, '0')} — ${benefit.title}`}
                    aria-current={activeStep === index ? 'step' : undefined}
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-full border font-accent text-2xl transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#011d41] motion-reduce:transition-none ${activeStep === index ? 'border-[#011d41] bg-[#011d41] text-white' : 'border-[#011d41]/15 bg-white text-[#637080] hover:border-[#011d41]/40 hover:bg-[#f3f4f1]'}`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </a>
                </li>
              ))}
            </ol>
            <div aria-hidden="true" className="mt-5 h-px overflow-hidden bg-[#011d41]/15">
              <m.div className="h-full origin-left bg-[#011d41]" style={{ scaleX: reduced ? 1 : scrollYProgress }} />
            </div>
          </nav>

          <PillButton to="/contact" className="mt-8">Candidature confidentielle</PillButton>
          <p className="mt-4 max-w-sm text-xs leading-relaxed text-[#637080]">
            Les modalités de diffusion et de confidentialité sont définies avec vous.
          </p>
        </div>

        <ol ref={list} className="min-w-0">
          {BENEFITS.map((benefit, index) => (
            <li key={benefit.id} id={benefit.id} ref={element => { items.current[index] = element; }} className="scroll-mt-36">
              <ExclusifBenefit benefit={benefit} index={index} active={index === activeStep} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
