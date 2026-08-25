import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { buildWhatsappUrl, contextualMessage, WHATSAPP_PATH } from './whatsapp';
import { track } from './tracking';

/**
 * Bouton d'action WhatsApp flottant (toutes les pages) :
 * - le message prérempli s'adapte à la page courante (accueil, biens,
 *   détail d'un bien avec son titre, estimation, contact…) ;
 * - halo pulsé désactivé si prefers-reduced-motion ;
 * - z-30 : passe sous la navbar et son menu mobile.
 */
export const WhatsAppButton: React.FC = () => {
  const location = useLocation();
  const href = useMemo(
    () => buildWhatsappUrl(contextualMessage(location.pathname)),
    [location.pathname]
  );

  return (
    <div className="group fixed bottom-5 right-5 z-30 md:bottom-6 md:right-6">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-full bg-[#011d41] px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
      >
        Discutons sur WhatsApp
      </span>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Mickaël Lima sur WhatsApp"
        onClick={() => track('whatsapp_click', { page: location.pathname })}
        className="animate-wa-pulse flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.55)] transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-7 w-7">
          <path d={WHATSAPP_PATH} />
        </svg>
      </a>
    </div>
  );
};
