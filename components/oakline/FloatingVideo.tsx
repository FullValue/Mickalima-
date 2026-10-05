import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { PillButton } from './primitives';

export const FloatingVideo: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    const update = () => setVisible(desktop.matches && window.scrollY > 80);
    update();
    window.addEventListener('scroll', update, { passive: true });
    desktop.addEventListener('change', update);
    return () => {
      window.removeEventListener('scroll', update);
      desktop.removeEventListener('change', update);
    };
  }, []);

  const playing = visible && !dismissed;
  useEffect(() => {
    const sync = () => {
      const player = video.current;
      if (!player) return;
      player.muted = true;
      if (playing && !document.hidden) void player.play().catch(() => {});
      else player.pause();
    };
    sync();
    document.addEventListener('visibilitychange', sync);
    return () => document.removeEventListener('visibilitychange', sync);
  }, [playing]);

  return (
    <AnimatePresence>
      {playing && (
        <m.aside
          aria-label="Découvrir le mandat exclusif en vidéo"
          className="fixed bottom-6 left-6 z-30 w-36"
          initial={reduce ? false : { opacity: 0, y: 20, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: reduce ? 0 : 20, scale: reduce ? 1 : 0.94 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            aria-label="Fermer la vidéo"
            onClick={() => { video.current?.pause(); setDismissed(true); }}
            className="absolute -right-3 -top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-[#011d41] shadow-md transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#011d41]"
          >
            <X size={16} aria-hidden="true" />
          </button>
          <div className="overflow-hidden rounded-2xl border border-white/50 bg-[#011d41] shadow-xl">
            <video
              ref={video}
              src="/video/villa-grilly-hero.mp4"
              aria-label="Présentation vidéo d’une villa à Grilly"
              className="aspect-[9/16] w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              disablePictureInPicture
            />
          </div>
          <PillButton to="/mandat-exclusif" className="mt-2 w-full !gap-1 !px-2 !text-[11px]">
            En savoir plus
          </PillButton>
        </m.aside>
      )}
    </AnimatePresence>
  );
};
