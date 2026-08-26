import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Reveal, SectionHeader } from './primitives';

/**
 * FAQ accordéon « pilule » : fermé = pilule (radius 90px), ouvert =
 * carte radius 24px avec réponse. aria-expanded + icône + qui pivote 90°.
 * Questions/réponses reprises à l'identique de HomeSections.tsx (FAQSection).
 */

const FAQS = [
  {
    question: 'Combien de temps prend une estimation complète ?',
    answer:
      "Une estimation sérieuse nécessite généralement 48h. Nous nous déplaçons d'abord sur site pour analyser votre bien, puis nous étudions les données marché avant de vous remettre un dossier complet et confidentiel.",
  },
  {
    question: 'Proposez-vous des mandats simples ou uniquement exclusifs ?',
    answer:
      'Si nous privilégions le Mandat Exclusif pour un investissement marketing maximal (vidéo, reportage photo premium, diffusion prioritaire), nous proposons également un Mandat Signature offrant une flexibilité totale.',
  },
  {
    question: 'Comment garantissez-vous la confidentialité de la vente ?',
    answer:
      "Nous pouvons opter pour une commercialisation 'Off-Market'. Dans ce cadre, aucune annonce publique n'est diffusée. Nous sollicitons uniquement notre réseau d'acquéreurs préalablement qualifiés et financièrement solides.",
  },
  {
    question: 'Couvrez-vous le bassin Genevois ?',
    answer:
      "Absolument. Notre expertise historique se situe dans le Pays de Gex et l'agglomération frontalière, ce qui nous permet d'attirer une clientèle locale et internationale à fort pouvoir d'achat.",
  },
];

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f5f5f5] py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          label="Questions fréquentes"
          title="Tout ce que vous vous demandez"
          subtitle="Mandats, estimation, confidentialité, zone d'intervention : les réponses aux questions les plus posées par mes clients."
        />

        <div className="mx-auto mt-14 max-w-3xl space-y-4 md:mt-16">
          {FAQS.map((faq, index) => {
            const open = openIndex === index;
            return (
              <Reveal key={faq.question} delay={index * 0.06} y={6}>
                <div
                  className={`overflow-hidden border transition-all duration-500 ${
                    open
                      ? 'rounded-[24px] border-[#011d41]/20 bg-white shadow-[0_15px_40px_-20px_rgba(1,29,65,0.25)]'
                      : 'rounded-[90px] border-[#ebebeb] bg-white hover:border-[#011d41]/30'
                  }`}
                >
                  <button
                    type="button"
                    id={`faq-button-${index}`}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-7 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#011d41] md:px-8"
                  >
                    <span className="text-[15px] font-semibold text-[#011d41] md:text-base">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                        open
                          ? 'border-[#011d41] bg-[#011d41] text-white'
                          : 'border-[#ebebeb] bg-[#fafafa] text-[#011d41]'
                      }`}
                    >
                      {/* Icône + pivote de 90° à l'ouverture */}
                      <Plus
                        size={16}
                        className={`transition-transform duration-500 ${open ? 'rotate-90' : ''}`}
                      />
                    </span>
                  </button>

                  {/* Réponse: animation grid-rows (pattern existant du site) */}
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                      open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="px-7 pb-6 text-[15px] leading-relaxed text-gray-600 md:px-8 md:pb-7">
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
