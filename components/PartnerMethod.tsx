import React, { useEffect, useRef, useState } from 'react';
import { m, useMotionValueEvent, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { Handshake, KeyRound, SearchCheck } from 'lucide-react';
import { PillButton, SectionLabel } from './oakline/primitives';
import './partner-method.css';

const STEPS = [
  { icon: SearchCheck, number: '01', title: 'Diagnostic de votre projet', text: "Lors de l'estimation ou du premier échange, j'identifie vos besoins réels : financement à consolider, travaux à anticiper, délais à tenir." },
  { icon: Handshake, number: '02', title: 'Mise en relation ciblée', text: 'Je vous présente le bon interlocuteur : pas une liste anonyme. Un contact direct, avec le contexte de votre dossier déjà transmis.' },
  { icon: KeyRound, number: '03', title: 'Suivi coordonné', text: "Courtier, artisan, notaire : je reste votre point d'entrée unique jusqu'à la signature, pour que chaque intervenant avance dans le même sens." },
];

const MethodStep: React.FC<{ index: number; progress: MotionValue<number>; active: boolean; reduced: boolean }> = ({ index, progress, active, reduced }) => {
  const step = STEPS[index];
  const threshold = index / (STEPS.length - 1);
  const fill = useTransform(progress, (value: number) => Math.max(0, Math.min(1, (value - threshold + 0.08) / 0.08)));
  const iconColor = useTransform(fill, [0, 1], ['#607087', '#ffffff']);

  return (
    <li className="partner-method-step" data-active={active}>
      <div className="partner-method-marker" aria-hidden="true">
        <m.span className="partner-method-marker-fill" style={{ opacity: reduced ? 1 : fill }} />
        <m.span className="partner-method-icon" style={{ color: reduced ? '#ffffff' : iconColor }}><step.icon size={24} strokeWidth={1.6} /></m.span>
      </div>
      <div className="partner-method-step-heading">
        <h3>{step.title}</h3>
        <span className="partner-method-number">{step.number}</span>
      </div>
      <p>{step.text}</p>
    </li>
  );
};

/** Le défilement de la page remplit la liaison de gauche à droite. */
export const PartnerMethod: React.FC = () => {
  const section = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const [pinned, setPinned] = useState(true);
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px) and (min-height: 691px)');
    const update = () => setPinned(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  const { scrollYProgress } = useScroll({ target: section, offset: pinned ? ['start start', 'end end'] : ['start 0.75', 'end 0.3'] });
  const progress = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  useMotionValueEvent(progress, 'change', value => {
    setActiveStep(Math.min(STEPS.length - 1, Math.floor(value * (STEPS.length - 1) + 0.001)));
  });

  return (
    <section ref={section} className="partner-method" data-reduced={Boolean(reduced)} aria-labelledby="partner-method-title">
      <div className="partner-method-sticky container mx-auto px-6">
        <div className="partner-method-intro">
          <div>
            <SectionLabel>La méthode</SectionLabel>
            <h2 id="partner-method-title">Les bons contacts,<br /><span className="font-accent italic">au bon moment.</span></h2>
          </div>
          <div className="partner-method-description">
            <p>Un réseau ne vaut que par la manière dont on l’active. Voici comment je mobilise mes partenaires à chaque étape de votre projet.</p>
            <PillButton to="/contact">Parlons de votre projet</PillButton>
          </div>
        </div>

        <div className="partner-method-scroll" tabIndex={0} role="region" aria-label="Les trois étapes de notre méthode">
          <div className="partner-method-timeline">
            <div className="partner-method-line" aria-hidden="true"><m.div className="partner-method-line-fill" style={{ scaleX: reduced ? 1 : progress }} /></div>
            <ol className="partner-method-steps">
              {STEPS.map((step, index) => <MethodStep key={step.number} index={index} progress={progress} active={Boolean(reduced) || index <= activeStep} reduced={Boolean(reduced)} />)}
            </ol>
          </div>
        </div>
        <p className="partner-method-mobile-hint">Glissez pour parcourir les trois étapes.</p>
      </div>
    </section>
  );
};
