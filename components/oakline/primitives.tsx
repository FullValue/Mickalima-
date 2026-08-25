import React from 'react';
import { Link } from 'react-router-dom';
import { m, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

/**
 * Primitives partagées de la refonte « Oakline » (page d'accueil).
 * Pattern animations : LazyMotion domAnimation (déjà en place dans AppContent)
 * + composants `m.` uniquement. Ease signature [0.44, 0, 0.3, 0.99],
 * reveal au scroll une seule fois avec marge -80px.
 */

export const EASE: [number, number, number, number] = [0.44, 0, 0.3, 0.99];

export const VIEWPORT_ONCE = { once: true, margin: '-80px' } as const;

/* ------------------------------------------------------------------ */
/* Reveal — apparition au scroll : opacity .001→1, blur(10px)→0, y→0   */
/* ------------------------------------------------------------------ */
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delay = 0,
  duration = 0.8,
  y = 10,
}) => {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <m.div
      className={className}
      initial={{ opacity: 0.001, y, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </m.div>
  );
};

/* ------------------------------------------------------------------ */
/* SplitWords — titre animé mot par mot (stagger)                      */
/* Le texte complet est fourni aux lecteurs d'écran via sr-only ;      */
/* les mots animés sont aria-hidden.                                   */
/* ------------------------------------------------------------------ */
interface SplitWordsProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export const SplitWords: React.FC<SplitWordsProps> = ({
  text,
  className,
  delay = 0,
  stagger = 0.06,
}) => {
  const reduce = useReducedMotion();
  const words = text.split(' ');

  if (reduce) return <span className={className}>{text}</span>;

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <m.span
        aria-hidden="true"
        className="inline"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
        }}
      >
        {words.map((word, i) => (
          <m.span
            key={`${word}-${i}`}
            className="inline-block will-change-transform"
            variants={{
              hidden: { opacity: 0.001, y: '0.6em', filter: 'blur(8px)' },
              visible: {
                opacity: 1,
                y: '0em',
                filter: 'blur(0px)',
                transition: { duration: 0.7, ease: EASE },
              },
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </m.span>
        ))}
      </m.span>
    </span>
  );
};

/* ------------------------------------------------------------------ */
/* SectionLabel — micro-label pilule au-dessus des titres              */
/* ------------------------------------------------------------------ */
interface SectionLabelProps {
  children: React.ReactNode;
  tone?: 'dark' | 'light';
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  children,
  tone = 'dark',
  className = '',
}) => (
  <span
    className={`inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] ${
      tone === 'light'
        ? 'border border-white/25 bg-white/10 text-white/85 backdrop-blur-sm'
        : 'border border-[#ebebeb] bg-white/70 text-[#011d41]'
    } ${className}`}
  >
    <span
      aria-hidden="true"
      className={`h-1.5 w-1.5 rounded-full ${tone === 'light' ? 'bg-white/70' : 'bg-[#011d41]'}`}
    />
    {children}
  </span>
);

/* ------------------------------------------------------------------ */
/* PillButton — bouton pilule (solid bleu / ghost clair / light blanc) */
/* Rend un Link (to), un <a> (href) ou un <button>.                    */
/* ------------------------------------------------------------------ */
type PillVariant = 'solid' | 'ghost' | 'light';

interface PillButtonProps {
  children: React.ReactNode;
  variant?: PillVariant;
  to?: string;
  href?: string;
  external?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: 'button' | 'submit';
  disabled?: boolean;
  arrow?: boolean;
  className?: string;
  ariaLabel?: string;
}

const VARIANT_CLASSES: Record<PillVariant, string> = {
  solid:
    'bg-[#011d41] text-white hover:bg-[#123a66] focus-visible:outline-[#011d41]',
  ghost:
    'bg-[#f5f5f5] text-[#011d41] hover:bg-[#ebebeb] focus-visible:outline-[#011d41]',
  light:
    'bg-white text-[#011d41] hover:bg-white/90 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)] focus-visible:outline-[#011d41]',
};

export const PillButton: React.FC<PillButtonProps> = ({
  children,
  variant = 'solid',
  to,
  href,
  external,
  onClick,
  type = 'button',
  disabled,
  arrow = false,
  className = '',
  ariaLabel,
}) => {
  const base = `group/pill inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${VARIANT_CLASSES[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span
          aria-hidden="true"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black/5 transition-transform duration-300 group-hover/pill:rotate-45"
        >
          <ArrowUpRight size={15} strokeWidth={2} />
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={base} onClick={onClick} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        className={base}
        onClick={onClick}
        aria-label={ariaLabel}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <button
      type={type}
      className={base}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

/* ------------------------------------------------------------------ */
/* SectionHeader — label + titre + sous-titre sur 2 colonnes           */
/* ------------------------------------------------------------------ */
interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  tone?: 'dark' | 'light';
  id?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  tone = 'dark',
  id,
  className = '',
}) => (
  <div className={`grid gap-8 lg:grid-cols-12 lg:items-end ${className}`}>
    <div className="lg:col-span-7">
      <Reveal y={6}>
        <SectionLabel tone={tone}>{label}</SectionLabel>
      </Reveal>
      <Reveal delay={0.08} className="mt-6">
        <h2
          id={id}
          className={`font-serif text-4xl leading-[1.08] tracking-tight md:text-5xl lg:text-6xl ${
            tone === 'light' ? 'text-white' : 'text-[#011d41]'
          }`}
        >
          {typeof title === 'string' ? <SplitWords text={title} /> : title}
        </h2>
      </Reveal>
    </div>
    {subtitle && (
      <div className="lg:col-span-5">
        <Reveal delay={0.16} y={6}>
          <p
            className={`max-w-md text-base leading-relaxed md:text-lg lg:ml-auto ${
              tone === 'light' ? 'text-white/75' : 'text-gray-500'
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      </div>
    )}
  </div>
);
