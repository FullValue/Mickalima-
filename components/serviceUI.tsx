import React from 'react';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { T } from './nosBiensShared';

/**
 * Briques de la nouvelle DA (reprise de /nos-biens — template Revalis) :
 * fond clair #f7f7f7, hero image sombre pleine largeur, cartes blanches
 * radius 10, titres Playfair Display, textes Montserrat, colonne sticky.
 * Utilisées par les pages service (mandats).
 */

export const wrap: React.CSSProperties = { maxWidth: 1300, margin: '0 auto', padding: '0 30px' };

/* ---- Hero image sombre pleine largeur ---- */
export const ServiceHero: React.FC<{
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  image: string;
  ctaLabel: string;
  ctaTo: string;
}> = ({ badge, title, subtitle, image, ctaLabel, ctaTo }) => (
  <section
    style={{
      position: 'relative', minHeight: 620, display: 'flex', alignItems: 'center',
      overflow: 'hidden', backgroundColor: T.navy,
    }}
  >
    <img
      src={image}
      alt=""
      aria-hidden="true"
      width="1920"
      height="1080"
      loading="eager"
      decoding="async"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
    />
    <div
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0,
        background:
          'linear-gradient(90deg, rgba(1,29,65,0.94) 0%, rgba(1,29,65,0.62) 42%, rgba(1,29,65,0.2) 78%, rgba(1,29,65,0.08) 100%)',
      }}
    />
    <div style={{ ...wrap, position: 'relative', width: '100%', padding: '160px 30px 80px', color: '#fff' }}>
      <m.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ display: 'flex', alignItems: 'center', gap: 28, marginBottom: 34 }}
      >
        <span style={{ fontSize: 14, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2.5, whiteSpace: 'nowrap' }}>
          {badge}
        </span>
        <span aria-hidden="true" style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.25)' }} />
      </m.div>
      <m.h1
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          fontFamily: T.heading, fontWeight: 400, fontSize: 'clamp(46px, 6.4vw, 92px)',
          lineHeight: '1.04em', marginBottom: 24, maxWidth: 900,
        }}
      >
        {title}
      </m.h1>
      <m.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ fontSize: 18, lineHeight: '1.65em', color: 'rgba(255,255,255,0.9)', maxWidth: 520, marginBottom: 40 }}
      >
        {subtitle}
      </m.p>
      <m.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Link
          to={ctaTo}
          className="sv-cta"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 14, background: '#fff', color: T.dark,
            fontFamily: T.body, fontSize: 15, fontWeight: 500, textDecoration: 'none',
            borderRadius: 50, padding: '10px 12px 10px 26px',
          }}
        >
          {ctaLabel}
          <span
            className="sv-cta-arrow"
            style={{
              width: 38, height: 38, borderRadius: '50%', background: T.dark, color: '#fff',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        </Link>
      </m.div>
    </div>
  </section>
);

/* ---- Titre de section avec icône (comme les pages bien) ---- */
export const IconHeading: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
    <span aria-hidden="true" style={{ display: 'inline-flex', color: T.dark }}>{icon}</span>
    <h3 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 26, lineHeight: '1.2em', color: T.dark }}>
      {title}
    </h3>
  </div>
);

/* ---- Liste à cases cochées (repris des filtres de /nos-biens) ---- */
export const CheckList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
    {items.map((item) => (
      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 16, color: T.dark }}>
        <span
          aria-hidden="true"
          style={{
            width: 20, height: 20, borderRadius: 5, background: T.dark, flexShrink: 0,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <Check size={12} color="#fff" strokeWidth={3} />
        </span>
        {item}
      </li>
    ))}
  </ul>
);

/* ---- Colonne gauche sticky : icône/kicker, titre, description, liste, CTA ---- */
export const StickyIntro: React.FC<{
  icon?: React.ReactNode;
  kicker?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  items?: string[];
  detailedItems?: Array<{ title: string; sub: string }>;
  ctaLabel: string;
  ctaTo: string;
}> = ({ icon, kicker, title, description, items, detailedItems, ctaLabel, ctaTo }) => (
  <div className="sv-sticky" style={{ position: 'sticky', top: 100 }}>
    {icon && (
      <span
        aria-hidden="true"
        style={{
          width: 64, height: 64, borderRadius: 10, background: '#fff', color: T.dark,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 26,
        }}
      >
        {icon}
      </span>
    )}
    {kicker && (
      <p style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, color: T.muted, marginBottom: 16 }}>
        {kicker}
      </p>
    )}
    <h2
      style={{
        fontFamily: T.heading, fontWeight: 400, fontSize: 'clamp(34px, 3.4vw, 52px)',
        lineHeight: '1.08em', color: T.dark, marginBottom: 20,
      }}
    >
      {title}
    </h2>
    <p style={{ fontSize: 17, lineHeight: '1.7em', color: T.muted, marginBottom: items || detailedItems ? 30 : 34 }}>
      {description}
    </p>
    {items && (
      <div style={{ marginBottom: 34 }}>
        <CheckList items={items} />
      </div>
    )}
    {detailedItems && (
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 34px', display: 'flex', flexDirection: 'column', gap: 18 }}>
        {detailedItems.map((it) => (
          <li key={it.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <span
              aria-hidden="true"
              style={{
                width: 20, height: 20, borderRadius: 5, background: T.dark, flexShrink: 0, marginTop: 3,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <Check size={12} color="#fff" strokeWidth={3} />
            </span>
            <span>
              <span style={{ display: 'block', fontSize: 16, fontWeight: 500, color: T.dark }}>{it.title}</span>
              <span style={{ display: 'block', fontSize: 15, color: T.muted, marginTop: 3 }}>{it.sub}</span>
            </span>
          </li>
        ))}
      </ul>
    )}
    <Link
      to={ctaTo}
      className="sv-cta"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 14, background: T.dark, color: '#fff',
        fontFamily: T.body, fontSize: 15, fontWeight: 500, textDecoration: 'none',
        borderRadius: 50, padding: '10px 12px 10px 26px',
      }}
    >
      {ctaLabel}
      <span
        className="sv-cta-arrow"
        style={{
          width: 38, height: 38, borderRadius: '50%', background: '#fff', color: T.dark,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <ArrowUpRight size={18} aria-hidden="true" />
      </span>
    </Link>
  </div>
);

/* ---- Carte blanche conteneur (colonne droite) ---- */
export const WhiteCard: React.FC<{ children: React.ReactNode; gap?: number; pad?: string }> = ({
  children,
  gap = 52,
  pad = 'clamp(24px, 3.2vw, 44px)',
}) => (
  <div style={{ background: '#fff', borderRadius: 10, padding: pad, display: 'flex', flexDirection: 'column', gap }}>
    {children}
  </div>
);

/* ---- Bloc 2 colonnes : sticky à gauche, carte blanche à droite ---- */
export const TwoCol: React.FC<{ left: React.ReactNode; right: React.ReactNode }> = ({ left, right }) => (
  <div className="sv-cols" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 8fr)', gap: 44 }}>
    <div>{left}</div>
    <div>{right}</div>
  </div>
);

/* ---- Bandeau récapitulatif navy avec cartes + CTA ---- */
export const RecapBand: React.FC<{
  badgeIcon?: React.ReactNode;
  kicker: string;
  title: React.ReactNode;
  description: string;
  cards: Array<{ icon: React.ReactNode; title: string; items: string[] }>;
  ctaLabel: string;
  ctaTo: string;
  note?: string;
}> = ({ badgeIcon, kicker, title, description, cards, ctaLabel, ctaTo, note }) => (
  <section style={{ background: T.navy, color: '#fff', padding: '100px 0' }}>
    <div style={wrap}>
      <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 60px' }}>
        <span
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)', borderRadius: 50, padding: '9px 18px',
            fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.8,
            color: 'rgba(255,255,255,0.9)', marginBottom: 22,
          }}
        >
          {badgeIcon} {kicker}
        </span>
        <h2 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 'clamp(36px, 4.6vw, 62px)', lineHeight: '1.06em', marginBottom: 20 }}>
          {title}
        </h2>
        <p style={{ fontSize: 17, lineHeight: '1.65em', color: 'rgba(255,255,255,0.72)' }}>{description}</p>
      </div>

      <div className="sv-recap" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 56 }}>
        {cards.map((c, ci) => (
          <m.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: ci * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 10, padding: 28,
            }}
          >
            <span aria-hidden="true" style={{ display: 'inline-flex', marginBottom: 20, color: '#fff' }}>{c.icon}</span>
            <h3 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 22, lineHeight: '1.25em', marginBottom: 16 }}>
              {c.title}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {c.items.map((i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 15, color: 'rgba(255,255,255,0.8)' }}>
                  <Check size={14} aria-hidden="true" /> {i}
                </li>
              ))}
            </ul>
          </m.div>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link
          to={ctaTo}
          className="sv-cta"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 14, background: '#fff', color: T.dark,
            fontFamily: T.body, fontSize: 15, fontWeight: 500, textDecoration: 'none',
            borderRadius: 50, padding: '10px 12px 10px 26px',
          }}
        >
          {ctaLabel}
          <span
            className="sv-cta-arrow"
            style={{
              width: 38, height: 38, borderRadius: '50%', background: T.dark, color: '#fff',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        </Link>
        {note && (
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginTop: 24 }}>{note}</p>
        )}
      </div>
    </div>
  </section>
);

/* ---- CSS responsive partagé des pages service ---- */
export const ServiceStyles: React.FC = () => (
  <style>{`
    .sv-cta { transition: transform .3s cubic-bezier(0.25, 0.1, 0.25, 1); }
    .sv-cta:hover { transform: translateY(-2px); }
    .sv-cta .sv-cta-arrow { transition: transform .35s cubic-bezier(0.25, 0.1, 0.25, 1); }
    .sv-cta:hover .sv-cta-arrow { transform: rotate(45deg); }
    .sv-portail { transition: transform .25s ease, background-color .25s ease; }
    .sv-portail:hover { transform: translateY(-2px); background-color: #efefef !important; }
    .sv-media img { transition: transform .45s cubic-bezier(.25,.1,.25,1); }
    .sv-media:hover img { transform: scale(1.04); }
    @media (max-width: 1023px) {
      .sv-cols { grid-template-columns: 1fr !important; }
      .sv-sticky { position: static !important; }
      .sv-recap { grid-template-columns: repeat(2, 1fr) !important; }
    }
    @media (max-width: 1023px) {
      .sv-bento { grid-template-columns: 1fr !important; }
      .sv-bento-wide { grid-column: auto !important; }
    }
    @media (max-width: 679px) {
      .sv-recap { grid-template-columns: 1fr !important; }
      .sv-grid-3 { grid-template-columns: 1fr !important; }
      .sv-grid-3 { grid-template-columns: 1fr !important; }
      .sv-grid-2 { grid-template-columns: 1fr !important; }
    }
  `}</style>
);
