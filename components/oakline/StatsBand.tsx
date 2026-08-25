import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { Ruler, BedDouble, Bath, Car } from 'lucide-react';
import { IMAGES, STATS } from '../../constants';
import { SectionLabel, SplitWords } from './primitives';

/**
 * Bande sombre « en chiffres » : fond image + overlay bleu profond,
 * compteurs animés 0 → valeur au scroll (tabular-nums), titre SplitWords.
 * Données : STATS (constants.ts). Interprétation : le profil type des
 * biens premium confiés par les clients (m², chambres, SDB, garage).
 */

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  size: Ruler,
  bed: BedDouble,
  bath: Bath,
  car: Car,
};

/** Compteur animé : parse le préfixe numérique de la valeur STATS. */
const Counter: React.FC<{ value: string }> = ({ value }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduce = useReducedMotion();

  const match = value.match(/\d+/);
  const target = match ? parseInt(match[0], 10) : null;
  const prefix = match ? value.slice(0, value.indexOf(match[0])) : value;
  const suffix = match ? value.slice(value.indexOf(match[0]) + match[0].length) : '';

  const [display, setDisplay] = useState<string>(
    reduce || target == null ? value : '0'
  );

  useEffect(() => {
    if (!inView || target == null || reduce) return;
    let raf = 0;
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setDisplay(String(Math.round(eased * target)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

export const StatsBand: React.FC = () => {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#011d41] py-20 text-white md:py-28">
      {/* Fond image + overlays */}
      {/* Fond FIXE au scroll (desktop) — le contenu défile par-dessus */}
      <div
        aria-hidden="true"
        className="parallax-fixed absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url('${IMAGES.heroBg}')` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#011d41]/95 via-[#011d41]/85 to-[#011d41]/70"
      />

      <div className="container relative mx-auto px-6">
        <div className="max-w-2xl">
          <SectionLabel tone="light">Notre portefeuille</SectionLabel>
          <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-tight md:text-5xl">
            <SplitWords text="Le standard de nos biens" />
          </h2>
          {!reduce && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Les caractéristiques moyennes des propriétés que nous confient
              nos clients — un segment premium, du Jura à la frontière genevoise.
            </p>
          )}
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:mt-16 lg:grid-cols-4">
          {STATS.map((stat, i) => {
            const Icon = ICONS[stat.icon] ?? Ruler;
            return (
              <div key={stat.label + i} className="flex flex-col text-center lg:text-left">
                <dt className="order-2 mt-3 block text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                  {stat.label}
                </dt>
                <dd className="order-1 flex items-center justify-center gap-4 font-serif text-5xl tracking-tight md:text-6xl lg:justify-start">
                  <span
                    aria-hidden="true"
                    className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 sm:flex"
                  >
                    <Icon size={20} />
                  </span>
                  <Counter value={stat.value} />
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
};
