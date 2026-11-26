import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getConsent, setConsent } from './oakline/tracking';

/**
 * Bandeau de consentement à la mesure d'audience (Google Analytics).
 * Affiché tant que le visiteur n'a pas choisi ; « Refuser » est aussi
 * visible et simple qu'« Accepter », comme le demande la CNIL.
 */
export const CookieConsent: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (getConsent() === null) setOpen(true);
  }, []);

  if (!open) return null;

  const choose = (choice: 'granted' | 'denied') => {
    setConsent(choice);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Mesure d'audience"
      className="fixed inset-x-3 bottom-3 z-[150] mx-auto max-w-xl rounded-2xl border border-[#ebebeb] bg-white p-5 text-sm text-[#011d41] shadow-[0_20px_50px_-20px_rgba(1,29,65,0.45)] md:bottom-5"
    >
      <p className="leading-relaxed">
        Avec votre accord, ce site utilise Google Analytics pour mesurer sa fréquentation et
        savoir quelles pages vous aident. Aucune publicité.{' '}
        <Link to="/politique-confidentialite/" className="underline">En savoir plus</Link>
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => choose('denied')}
          className="flex-1 rounded-full border border-[#011d41]/25 px-4 py-2.5 font-semibold transition-colors hover:bg-[#f7f7f7]"
        >
          Refuser
        </button>
        <button
          type="button"
          onClick={() => choose('granted')}
          className="flex-1 rounded-full bg-[#011d41] px-4 py-2.5 font-semibold text-white transition-colors hover:bg-[#0b2c57]"
        >
          Accepter
        </button>
      </div>
    </div>
  );
};
