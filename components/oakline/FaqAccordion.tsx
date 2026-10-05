import React, { useState } from 'react';
import { Plus } from 'lucide-react';
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

        <div className="home-faq-questions space-y-4 md:space-y-5">
          {FAQS.map((faq, index) => {
            const open = openIndex === index;
            return (
              <Reveal key={faq.question} delay={index * 0.06} y={6}>
                <div className="overflow-hidden rounded-[10px] border border-[#ebebeb] bg-[#fafafa] transition-colors duration-300 hover:border-[#011d41]/25">
                  <h3>
                    <button
                      type="button"
                      id={`faq-button-${index}`}
                      aria-expanded={open}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() => setOpenIndex(open ? null : index)}
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#011d41] md:px-6 md:py-6"
                    >
                      <span className="font-serif text-lg font-normal leading-snug tracking-tight text-[#011d41] md:text-[22px]">
                        {faq.question.replace(/ \?$/, '\u00a0?')}
                      </span>
                      <Plus
                        aria-hidden="true"
                        size={22}
                        strokeWidth={1.5}
                        className={`shrink-0 text-[#011d41] transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    aria-hidden={!open}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="px-5 pb-6 text-base leading-relaxed text-gray-600 md:px-6 md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
