import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Volume2, VolumeX, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const glassControl = 'border border-white/25 bg-[#011d41]/45 text-white shadow-lg backdrop-blur-2xl transition-all hover:bg-[#011d41]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#011d41]';

export const FloatingVideo: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [muted, setMuted] = useState(true);
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
      player.muted = muted;
      if (playing && !document.hidden) void player.play().catch(() => {});
      else player.pause();
    };
    sync();
    document.addEventListener('visibilitychange', sync);
    return () => document.removeEventListener('visibilitychange', sync);
  }, [playing, muted]);

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
            className={`absolute -right-3 -top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full hover:scale-110 ${glassControl}`}
          >
            <X size={16} aria-hidden="true" />
          </button>
          <div className="relative overflow-hidden rounded-2xl border border-white/50 bg-[#011d41] shadow-xl">
            <video
              ref={video}
              src="/video/villa-grilly-hero.mp4"
              aria-label="Présentation vidéo d’une villa à Grilly"
              className="aspect-[9/16] w-full object-cover"
              autoPlay
              muted={muted}
              loop
              playsInline
              preload="metadata"
              disablePictureInPicture
            />
            <button
              type="button"
              aria-label={muted ? 'Activer le son de la vidéo' : 'Couper le son de la vidéo'}
              aria-pressed={!muted}
              onClick={() => {
                const nextMuted = !muted;
                if (video.current) video.current.muted = nextMuted;
                setMuted(nextMuted);
              }}
              className={`absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full ${glassControl}`}
            >
              {muted ? <VolumeX size={15} aria-hidden="true" /> : <Volume2 size={15} aria-hidden="true" />}
            </button>
          </div>
          <Link to="/mandat-exclusif" className={`group mt-2 flex w-full items-center justify-between gap-1 rounded-full py-1.5 pl-3 pr-1.5 text-[11px] font-semibold hover:-translate-y-0.5 ${glassControl}`}>
            <span>En savoir plus</span>
            <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl transition-transform group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </m.aside>
      )}
    </AnimatePresence>
  );
};
