import React from 'react';
import { Link } from 'react-router-dom';
import { BedDouble, Bath, Ruler, MapPin, ArrowUpRight, Phone, Mail } from 'lucide-react';

/**
 * Éléments partagés des pages « Nos Biens » : tokens de la DA (issue du
 * template Revalis, en attendant le rebranding), type NBProperty, carte bien
 * et footer. Les données réelles vivent dans biensData.ts.
 */

export const T = {
  bg: '#f7f7f7',
  dark: '#111111',
  navy: '#011d41',
  muted: '#666666',
  border: '#ebebeb',
  chipBg: '#f1f1f1',
  heading: '"Playfair Display", serif',
  body: '"Montserrat", sans-serif',
};

export const AGENT_PHOTO = '/images/micka-photo.jpg';

export interface NBProperty {
  ref: string;
  slug: string;
  title: string;
  type: 'Maison' | 'Appartement' | 'Terrain';
  typeLabel: string;
  status: 'À vendre' | 'Sous compromis' | 'Vendu';
  city: string;
  cp: string;
  price: number | null;
  surface: number | null;
  land: number | null;
  rooms: number | null;
  bedrooms: number | null;
  baths: number | null;
  dpe: string | null;
  ges: string | null;
  coupDeCoeur: boolean;
  highlights: string[];
  description: string;
  features: Array<[string, string]>;
  photos: string[];
}

export const formatPrice = (p: number | null) =>
  p == null ? 'Prix sur demande' : new Intl.NumberFormat('fr-FR').format(p) + ' €';

export const formatSurface = (v: number | null) =>
  v == null ? null : `${new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(v)} m²`;

/* Carte bien — utilisée dans la grille de /nos-biens et le marquee des pages détail */
export const ListingCard: React.FC<{ property: NBProperty; fluid?: boolean; ariaHidden?: boolean }> = ({
  property: l,
  fluid,
  ariaHidden,
}) => (
  <article
    aria-hidden={ariaHidden || undefined}
    style={{
      background: '#fff', borderRadius: 10, overflow: 'hidden', padding: 14,
      width: fluid ? '100%' : 380, flexShrink: 0,
    }}
  >
    <Link
      to={`/nos-biens/${l.slug}`}
      tabIndex={ariaHidden ? -1 : undefined}
      style={{ display: 'block', position: 'relative', borderRadius: 8, overflow: 'hidden' }}
    >
      <img
        src={l.photos[0]}
        alt={ariaHidden ? '' : `${l.typeLabel} à ${l.city}`}
        width="600"
        height="450"
        loading="lazy"
        decoding="async"
        style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', display: 'block' }}
      />
      <span
        style={{
          position: 'absolute', top: 14, left: 14,
          background: l.status === 'Vendu' ? T.navy : '#fff',
          color: l.status === 'Vendu' ? '#fff' : T.dark,
          fontSize: 14, fontWeight: 500, borderRadius: 8, padding: '8px 14px', fontFamily: T.body,
        }}
      >
        {l.status}
      </span>
      {l.coupDeCoeur && (
        <span
          style={{
            position: 'absolute', top: 14, right: 14, background: T.navy, color: '#fff',
            fontSize: 13, fontWeight: 500, borderRadius: 8, padding: '8px 14px', fontFamily: T.body,
          }}
        >
          Coup de cœur
        </span>
      )}
    </Link>
    <div style={{ padding: '18px 8px 8px', fontFamily: T.body }}>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 16 }}>
        {[
          l.bedrooms ? { icon: BedDouble, txt: `${l.bedrooms} ch.` } : null,
          l.baths ? { icon: Bath, txt: `${l.baths} sdb` } : null,
          l.surface ? { icon: Ruler, txt: formatSurface(l.surface) as string } : null,
          !l.surface && l.land ? { icon: Ruler, txt: `${formatSurface(l.land)} terrain` } : null,
        ]
          .filter(Boolean)
          .map((c) => {
            const { icon: Icon, txt } = c as { icon: typeof BedDouble; txt: string };
            return (
              <span
                key={txt}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 14, color: T.dark,
                  border: `1px solid ${T.border}`, borderRadius: 8, padding: '7px 12px', background: '#fff',
                }}
              >
                <Icon size={15} aria-hidden="true" /> {txt}
              </span>
            );
          })}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
        <h3 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 24, lineHeight: '1.2em', color: T.dark }}>
          {l.typeLabel} — {l.city}
        </h3>
        {l.status !== 'Vendu' && (
          <span style={{ fontFamily: T.heading, fontSize: 21, whiteSpace: 'nowrap', color: T.dark }}>
            {formatPrice(l.price)}
          </span>
        )}
      </div>
      <p style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 15, color: T.muted, margin: '10px 0 18px' }}>
        <MapPin size={15} aria-hidden="true" /> {l.city} ({l.cp})
      </p>
      <Link
        to={`/nos-biens/${l.slug}`}
        tabIndex={ariaHidden ? -1 : undefined}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          fontSize: 15, fontWeight: 500, color: T.dark, background: T.chipBg,
          borderRadius: 8, padding: '12px 12px 12px 20px', textDecoration: 'none',
        }}
      >
        En savoir plus
        <span
          style={{
            width: 34, height: 34, background: '#fff', borderRadius: 6,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <ArrowUpRight size={16} aria-hidden="true" />
        </span>
      </Link>
    </div>
  </article>
);

/* Footer (design Revalis, contenu réel) — commun à l'index et aux pages détail */
export const RevalisFooter: React.FC = () => (
  <footer style={{ background: T.navy, color: '#fff', fontFamily: T.body }}>
    <div style={{ maxWidth: 1300, margin: '0 auto', padding: '72px 30px 40px' }}>
      <div
        style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center',
          gap: 24, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.15)',
        }}
      >
        <h2 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 'clamp(26px, 3vw, 34px)' }}>
          Recevez les nouveaux biens en avant-première
        </h2>
        <Link
          to="/contact"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 14, background: '#fff', color: T.navy,
            fontSize: 15, fontWeight: 500, textDecoration: 'none', borderRadius: 50, padding: '10px 12px 10px 26px',
          }}
        >
          Créer mon alerte
          <span
            style={{
              width: 38, height: 38, borderRadius: '50%', background: T.navy, color: '#fff',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        </Link>
      </div>

      <div
        className="nb-footer-cols"
        style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr', gap: 40, padding: '48px 0' }}
      >
        <div>
          <p style={{ fontFamily: T.heading, fontSize: 26, marginBottom: 16 }}>Mickaël Lima</p>
          <p style={{ fontSize: 15, lineHeight: '1.6em', color: 'rgba(255,255,255,0.65)', maxWidth: 300 }}>
            Agent immobilier dans le Pays de Gex et le bassin genevois. Vente, estimation et
            accompagnement des vendeurs comme des acquéreurs frontaliers.
          </p>
        </div>
        <div>
          <p style={{ fontSize: 14, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(255,255,255,0.5)', marginBottom: 18 }}>Menu</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15 }}>
            {[
              { label: 'Accueil', to: '/' },
              { label: 'Nos biens', to: '/nos-biens' },
              { label: 'Mandat Signature', to: '/mandat-signature' },
              { label: 'Mandat Exclusif', to: '/mandat-exclusif' },
              { label: 'Estimation offerte', to: '/estimation' },
            ].map((i) => (
              <li key={i.to}>
                <Link to={i.to} style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>{i.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p style={{ fontSize: 14, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(255,255,255,0.5)', marginBottom: 18 }}>À propos</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15 }}>
            {[
              { label: 'Mon parcours', to: '/about' },
              { label: 'Partenaires', to: '/partenaires' },
              { label: 'Blog', to: '/blog' },
              { label: 'Contact', to: '/contact' },
            ].map((i) => (
              <li key={i.to}>
                <Link to={i.to} style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>{i.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p style={{ fontSize: 14, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(255,255,255,0.5)', marginBottom: 18 }}>Contactez-moi</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15, color: 'rgba(255,255,255,0.85)' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Mail size={15} aria-hidden="true" />
              <a href="mailto:contact@mickael-lima.immo" style={{ color: 'inherit', textDecoration: 'none' }}>
                contact@mickael-lima.immo
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Phone size={15} aria-hidden="true" />
              <a href="tel:+33769313502" style={{ color: 'inherit', textDecoration: 'none' }}>07 69 31 35 02</a>
            </li>
            <li>328 Rue des Fontanettes, 01220 Divonne-les-Bains</li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 24, fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
        © 2026 Mickaël Lima — L'agence Immo. Tous droits réservés.
      </div>
    </div>

    <style>{`
      @media (max-width: 767px) {
        .nb-footer-cols { grid-template-columns: 1fr 1fr !important; }
      }
      @media (max-width: 479px) {
        .nb-footer-cols { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </footer>
);
