import React from 'react';
import { FaqQuestions } from './FaqQuestions';
import { PillButton, Reveal } from './primitives';

/** Le texte accompagne le défilement des questions sur ordinateur. */

const FAQS = [
  {
    question: 'Combien de temps prend une estimation complète ?',
    answer:
      "Après la visite du bien, je vous transmets une estimation argumentée sous 24 h, fondée sur ses caractéristiques et sur les ventes comparables.",
  },
  {
    question: 'Proposez-vous des mandats simples ou uniquement exclusifs ?',
    answer:
      'Le choix du mandat dépend de votre bien, de votre calendrier et du niveau d’accompagnement recherché. Je vous présente les deux options clairement afin de retenir la stratégie la plus adaptée à votre vente.',
  },
  {
    question: 'Comment garantissez-vous la confidentialité de la vente ?',
    answer:
      "Nous pouvons opter pour une commercialisation 'Off-Market'. Dans ce cadre, aucune annonce publique n'est diffusée. Nous sollicitons uniquement notre réseau d'acquéreurs préalablement qualifiés et financièrement solides.",
  },
  {
    question: 'Couvrez-vous le bassin Genevois ?',
    answer:
      "Oui. Mon expertise couvre le Pays de Gex et l'agglomération frontalière. Cette connaissance locale permet de positionner chaque bien avec précision et de toucher les acquéreurs pertinents, en France comme côté genevois.",
  },
];

export const FaqAccordion: React.FC = () => {
  return (
    <section aria-labelledby="home-faq-title" className="bg-white py-20 md:py-24">
      <div className="container mx-auto grid items-start gap-12 px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div className="home-faq-intro lg:sticky lg:top-28">
          <Reveal y={6} className="max-w-lg">
            <span className="inline-flex rounded-full bg-[#011d41] px-4 py-1.5 text-sm text-white">
              FAQ
            </span>
            <h2 id="home-faq-title" className="mt-4 font-serif text-3xl font-normal leading-[1.12] tracking-tight text-[#011d41] md:text-[44px]">
              Tout ce que vous vous demandez
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-xl">
              Mandats, estimation, confidentialité, zone d'intervention : les réponses aux questions les plus posées par mes clients.
            </p>
            <PillButton to="/contact" className="mt-8">Me contacter</PillButton>
          </Reveal>
        </div>

        <div className="home-faq-questions">
          <FaqQuestions items={FAQS} id="home-faq" />
        </div>
      </div>
    </section>
  );
};
