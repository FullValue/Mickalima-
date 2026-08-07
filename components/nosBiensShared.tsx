import React from 'react';
import { Link } from 'react-router-dom';
import { BedDouble, Bath, Ruler, MapPin, ArrowUpRight, Phone, Mail } from 'lucide-react';

/**
 * Éléments partagés des pages « Nos Biens » (réplique du template Framer Revalis
 * en attendant le rebranding) : tokens, données démo, carte bien, footer Revalis.
 * Pattern acté : la photo de Mickaël remplace tout visuel d'agent du template.
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
  slug: string;
  name: string;
  price: string;
  priceValue: number;
  location: string;
  city: string;
  type: string;
  beds: number;
  baths: number;
  size: string;
  image: string;
  ref: string;
  lotSize: string;
  year: string;
  ownership: string;
  description: string;
  surroundings: string;
}

// Données démo du template Revalis — à remplacer par les vrais biens.
export const NB_PROPERTIES: NBProperty[] = [
  {
    slug: 'center-square-villa',
    name: 'Center Square Villa',
    price: '749 000 $', priceValue: 749000,
    location: 'Center Square, Albany, NY', city: 'Albany', type: 'Villa',
    beds: 4, baths: 3, size: '176 m²',
    image: 'https://framerusercontent.com/images/6PCCVyEFStSyJ2Gl753CW8tkea4.webp',
    ref: 'R0586', lotSize: '204 m²', year: '2013', ownership: 'Copropriété',
    description:
      "Cette villa familiale offre de vastes intérieurs, des finitions raffinées et un jardin arboré. L'espace de vie ouvert et les prestations haut de gamme en font un refuge d'exception dans un quartier très recherché.",
    surroundings:
      "Situé à Center Square, le quartier offre boutiques de créateurs, restaurants renommés, rues bordées d'arbres et un accès rapide au centre-ville d'Albany.",
  },
  {
    slug: 'cobble-hill-penthouse',
    name: 'Cobble Hill Penthouse',
    price: '429 000 $', priceValue: 429000,
    location: 'Cobble Hill, Brooklyn, NY', city: 'New York', type: 'Penthouse',
    beds: 4, baths: 3, size: '176 m²',
    image: 'https://framerusercontent.com/images/KcOhAhSgpyc3sxmVmxEiyvnqguw.webp',
    ref: 'R0587', lotSize: '204 m²', year: '2013', ownership: 'Copropriété',
    description:
      "Ce penthouse de luxe offre de vastes intérieurs, des finitions raffinées et une terrasse privée sur le toit avec vue sur la skyline. Un refuge urbain d'exception dans un quartier très recherché de Brooklyn.",
    surroundings:
      "Situé à Cobble Hill, le quartier offre boutiques de créateurs, restaurants renommés, rues bordées d'arbres et un accès rapide en métro vers Lower Manhattan.",
  },
  {
    slug: 'sobha-apartment',
    name: 'Sobha Apartment',
    price: '99 000 $', priceValue: 99000,
    location: 'Center Square, Albany, NY', city: 'Albany', type: 'Appartement',
    beds: 1, baths: 1, size: '88 m²',
    image: 'https://framerusercontent.com/images/qczYR3J1pTxtpJWYdeFIZUL4o.webp',
    ref: 'R0588', lotSize: '95 m²', year: '2016', ownership: 'Copropriété',
    description:
      "Cet appartement lumineux offre un plan optimisé, des finitions modernes et de belles ouvertures sur l'extérieur. Un premier achat ou investissement idéal au cœur d'un quartier vivant.",
    surroundings:
      "Situé à Center Square, le quartier offre commerces de proximité, cafés et un accès rapide aux transports en commun.",
  },
  {
    slug: 'riverside-modern-villa',
    name: 'Riverside Modern Villa',
    price: '712 000 $', priceValue: 712000,
    location: 'Riverside, Rochester, NY', city: 'Rochester', type: 'Villa',
    beds: 4, baths: 2, size: '195 m²',
    image: 'https://framerusercontent.com/images/E79CfN6JX4ZumwQ0y8fXYYTTJQ.webp',
    ref: 'R0589', lotSize: '260 m²', year: '2015', ownership: 'Pleine propriété',
    description:
      "Cette villa contemporaine allie volumes généreux, matériaux nobles et jardin paysager avec terrasse. Les baies vitrées toute hauteur baignent l'espace de vie de lumière naturelle.",
    surroundings:
      "Situé à Riverside, le quartier offre berges aménagées, parcs et écoles réputées, à quelques minutes du centre de Rochester.",
  },
  {
    slug: 'park-avenue-penthouse',
    name: 'Park Avenue Penthouse',
    price: '1,15 M$', priceValue: 1150000,
    location: 'Park Avenue, Rochester, NY', city: 'Rochester', type: 'Penthouse',
    beds: 3, baths: 2, size: '153 m²',
    image: 'https://framerusercontent.com/images/qUn8PXGMNl5owKUxOJ3cx4UlZs8.webp',
    ref: 'R0582', lotSize: '190 m²', year: '2010', ownership: 'Copropriété',
    description:
      "Ce penthouse raffiné offre des vues élevées sur la ville, des finitions premium et de vastes intérieurs. Le plan ouvert maximise la lumière naturelle et l'espace extérieur privé invite à recevoir.",
    surroundings:
      "Situé dans le quartier de Park Avenue à Rochester, à deux pas des cafés, boutiques, lieux culturels et transports en commun.",
  },
  {
    slug: 'delaware-park-villa',
    name: 'Delaware Park Villa',
    price: '859 000 $', priceValue: 859000,
    location: 'Delaware District, Buffalo, NY', city: 'Buffalo', type: 'Villa',
    beds: 4, baths: 2, size: '167 m²',
    image: 'https://framerusercontent.com/images/4i0fVABNmQKsRxrejJXT5DhYlk0.webp',
    ref: 'R0590', lotSize: '230 m²', year: '2014', ownership: 'Pleine propriété',
    description:
      "Cette villa d'architecte marie pierre naturelle et bois dans un écrin de verdure. Prestations soignées, suite parentale et pièce de vie traversante ouverte sur la terrasse.",
    surroundings:
      "Situé dans le Delaware District, à proximité immédiate du parc, des galeries et des meilleures tables de Buffalo.",
  },
  {
    slug: 'lark-street-villa',
    name: 'Lark Street Villa',
    price: '720 000 $', priceValue: 720000,
    location: 'Lark Street District, Albany, NY', city: 'Albany', type: 'Villa',
    beds: 3, baths: 3, size: '195 m²',
    image: 'https://framerusercontent.com/images/0uNitXTJq1oSjHev9mJw6Q9LwA.webp',
    ref: 'R0591', lotSize: '240 m²', year: '2012', ownership: 'Pleine propriété',
    description:
      "Cette villa de plain-pied cultive la discrétion : lignes épurées, patio intérieur et larges baies ouvertes sur le jardin clos. Une réalisation contemporaine rare dans le quartier.",
    surroundings:
      "Situé dans le Lark Street District, quartier bohème d'Albany réputé pour ses cafés, galeries et sa vie de quartier animée.",
  },
  {
    slug: 'hudson-view-condo',
    name: 'Hudson View Condo',
    price: '1,25 M$', priceValue: 1250000,
    location: 'Midtown, New York City, NY', city: 'New York', type: 'Condo',
    beds: 3, baths: 2, size: '135 m²',
    image: 'https://framerusercontent.com/images/tmhpllg4ojGt6jGr62njvEeBYg8.webp',
    ref: 'R0592', lotSize: '135 m²', year: '2018', ownership: 'Copropriété',
    description:
      "Ce condo d'exception domine la skyline de Manhattan : terrasse avec brasero, baies panoramiques et prestations hôtelières. Un pied-à-terre spectaculaire au cœur de Midtown.",
    surroundings:
      "Situé à Midtown, à quelques blocs de l'Hudson, des théâtres de Broadway et des plus belles adresses de Manhattan.",
  },
];

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
        src={l.image}
        alt={ariaHidden ? '' : l.name}
        width="600"
        height="450"
        loading="lazy"
        decoding="async"
        style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', display: 'block' }}
      />
      <span
        style={{
          position: 'absolute', top: 14, left: 14, background: '#fff', color: T.dark,
          fontSize: 14, fontWeight: 500, borderRadius: 8, padding: '8px 14px', fontFamily: T.body,
        }}
      >
        À vendre
      </span>
      <span
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: 6, background: 'rgba(120,120,120,0.45)', borderRadius: 50, padding: '5px 8px',
        }}
      >
        {[1, 0.6, 0.6].map((o, i) => (
          <span key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: `rgba(255,255,255,${o})` }} />
        ))}
      </span>
    </Link>
    <div style={{ padding: '18px 8px 8px', fontFamily: T.body }}>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 16 }}>
        {[
          { icon: BedDouble, txt: `${l.beds} ch.` },
          { icon: Bath, txt: `${l.baths} sdb` },
          { icon: Ruler, txt: l.size },
        ].map(({ icon: Icon, txt }) => (
          <span
            key={txt}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 14, color: T.dark,
              border: `1px solid ${T.border}`, borderRadius: 8, padding: '7px 12px', background: '#fff',
            }}
          >
            <Icon size={15} aria-hidden="true" /> {txt}
          </span>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
        <h3 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 24, lineHeight: '1.2em', color: T.dark }}>{l.name}</h3>
        <span style={{ fontFamily: T.heading, fontSize: 22, whiteSpace: 'nowrap', color: T.dark }}>{l.price}</span>
      </div>
      <p style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 15, color: T.muted, margin: '10px 0 18px' }}>
        <MapPin size={15} aria-hidden="true" /> {l.location}
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

/* Footer Revalis (newsletter + colonnes) — commun à l'index et aux pages détail */
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
          Abonnez-vous à notre newsletter
        </h2>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <input
            type="email"
            required
            placeholder="Email"
            aria-label="Email"
            style={{
              fontFamily: T.body, fontSize: 15, color: '#fff', background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.2)', borderRadius: 50, padding: '13px 20px',
              outline: 'none', minWidth: 240,
            }}
          />
          <button
            type="submit"
            style={{
              fontFamily: T.body, fontSize: 15, fontWeight: 500, color: T.navy, background: '#fff',
              border: 'none', borderRadius: 50, padding: '13px 26px', cursor: 'pointer',
            }}
          >
            S'abonner
          </button>
        </form>
      </div>

      <div
        className="nb-footer-cols"
        style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr', gap: 40, padding: '48px 0' }}
      >
        <div>
          <p style={{ fontFamily: T.heading, fontSize: 26, marginBottom: 16 }}>Revalis</p>
          <p style={{ fontSize: 15, lineHeight: '1.6em', color: 'rgba(255,255,255,0.65)', maxWidth: 300 }}>
            Revalis est une agence immobilière new-yorkaise spécialisée dans la vente et l'investissement
            immobilier dans tout l'État de New York.
          </p>
        </div>
        <div>
          <p style={{ fontSize: 14, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(255,255,255,0.5)', marginBottom: 18 }}>Menu</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15 }}>
            {['Accueil', 'Nos biens', 'Services', 'Types de biens', 'Villes'].map((i) => (
              <li key={i} style={{ color: 'rgba(255,255,255,0.85)' }}>{i}</li>
            ))}
          </ul>
        </div>
        <div>
          <p style={{ fontSize: 14, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(255,255,255,0.5)', marginBottom: 18 }}>Société</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15 }}>
            {['À propos', 'Agents', 'Blog', 'Contact'].map((i) => (
              <li key={i} style={{ color: 'rgba(255,255,255,0.85)' }}>{i}</li>
            ))}
          </ul>
        </div>
        <div>
          <p style={{ fontSize: 14, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(255,255,255,0.5)', marginBottom: 18 }}>Contactez-nous</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15, color: 'rgba(255,255,255,0.85)' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Mail size={15} aria-hidden="true" /> support@revalis.com
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Phone size={15} aria-hidden="true" /> +1 (200) 321-7890
            </li>
            <li>25 Charles Street, Suite 234, NY, 2002</li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 24, fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
        © 2026 Revalis. Tous droits réservés.
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
