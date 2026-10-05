import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Reveal } from './primitives';

export const FaqQuestions: React.FC<{ items: { question: string; answer: string }[]; id: string }> = ({ items, id }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-4 md:space-y-5">
      {items.map((faq, index) => {
        const open = openIndex === index;
        return (
          <Reveal key={faq.question} delay={index * 0.06} y={6}>
            <div className="overflow-hidden rounded-[10px] border border-[#ebebeb] bg-[#fafafa] transition-colors duration-300 hover:border-[#011d41]/25">
              <h3>
                <button
                  type="button"
                  id={`${id}-button-${index}`}
                  aria-expanded={open}
                  aria-controls={`${id}-panel-${index}`}
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
                id={`${id}-panel-${index}`}
                role="region"
                aria-labelledby={`${id}-button-${index}`}
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
  );
};
