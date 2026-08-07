import React from 'react';
import {
  BedDouble,
  Bath,
  Ruler,
  MapPin,
  Bookmark,
  Sparkles,
  Image as ImageIcon,
  PlaySquare,
  ArrowUpRight,
  Phone,
  Mail,
} from 'lucide-react';
import { SEO } from './SEO';

/**
 * Réplique fidèle de la page "listing" du template Framer Revalis
 * (https://revalis.framer.media/listings/...), demandée telle quelle
 * en vue du rebranding.
 * Différences voulues par rapport à l'original :
 * - navbar du site conservée, badges Framer retirés
 * - bloc "Location" (carte Google Maps) retiré
 * - "More listings" défile en autoplay (marquee) au lieu d'une grille statique
 * Contenu démo du template (EN) conservé à l'identique pour l'instant.
 */

const T = {
  bg: '#f7f7f7',
  dark: '#111111',
  navy: '#011d41',
  muted: '#666666',
  border: '#ebebeb',
  chipBg: '#f1f1f1',
  heading: '"Marcellus", serif',
  body: '"Inter", sans-serif',
};

const GALLERY_HERO = {
  main: 'https://framerusercontent.com/images/qUn8PXGMNl5owKUxOJ3cx4UlZs8.webp',
  topRight: 'https://framerusercontent.com/images/D2Rosu46lk7tmVyYhuODw5KE6Qs.webp',
  bottomLeft: 'https://framerusercontent.com/images/NcXkdQactuuaPNAXEpZ1fJkqCR0.webp',
  bottomRight: 'https://framerusercontent.com/images/QBv22NfP5VaAp4I4HjNNP9r7sq0.webp',
};

const GALLERY_GRID = [
  'https://framerusercontent.com/images/YdrWklpMEJgsr54XpFUlPWExvxw.webp',
  'https://framerusercontent.com/images/phjPBLFz2C2keKmrYPkV1hNS92Y.webp',
  'https://framerusercontent.com/images/P0IKKWT3PjsidbfZPLGFRba6stU.webp',
  'https://framerusercontent.com/images/HaFup9m6JSG2y6Q8CzHvhig3bS0.jpg',
];

const AVATARS = [
  'https://framerusercontent.com/images/IIXgToVdi2ToB016K5Fg5sG9Bc.webp',
  'https://framerusercontent.com/images/PtrhtDHRTIeUkMdMVmo1Jfqric.webp',
  'https://framerusercontent.com/images/waWK4WYu7GsknywLmZLBba4.webp',
];

const DETAILS: Array<[string, string]> = [
  ['Property Id:', 'R0586'],
  ['Price:', '$429,000'],
  ['Property Size:', '1,900 ft²'],
  ['Property Lot Size:', '2,200 ft²'],
  ['Ownership:', 'Condominium'],
  ['Year Built:', '2013'],
  ['Unit Type:', 'Penthouse'],
  ['Property Name:', 'Cobble Hill Penthouse'],
];

const FEATURES = [
  'Private rooftop terrace',
  'Smart home integration',
  'Concierge service',
  'Underground parking',
  'Wine storage',
];

const MORE_LISTINGS = [
  {
    image: 'https://framerusercontent.com/images/6PCCVyEFStSyJ2Gl753CW8tkea4.webp',
    beds: 3, baths: 2, size: '2,050 ft²',
    name: 'Center Square Villa', price: '$749,000', location: 'Center Square, Albany, NY',
  },
  {
    image: 'https://framerusercontent.com/images/uz3zjgmRfQwnzLMkE0yDitfDNM.webp',
    beds: 1, baths: 1, size: '950 ft²',
    name: 'Sobha Apartment', price: '$99,000', location: 'Center Square, Albany, NY',
  },
  {
    image: 'https://framerusercontent.com/images/v86nEI684w4zPg0EhgNucbSOktA.webp',
    beds: 4, baths: 2, size: '2,100 ft²',
    name: 'Riverside Modern Villa', price: '$712,000', location: 'Riverside, Rochester, NY',
  },
  {
    image: 'https://framerusercontent.com/images/KcOhAhSgpyc3sxmVmxEiyvnqguw.webp',
    beds: 3, baths: 2, size: '1,650 ft²',
    name: 'Park Avenue Penthouse', price: '$1.15 M', location: 'Park Avenue, Rochester, NY',
  },
  {
    image: 'https://framerusercontent.com/images/7qddMcFEDswacgycG4I3MRkL56o.webp',
    beds: 4, baths: 2, size: '1,800 ft²',
    name: 'Delaware Park Villa', price: '$859,000', location: 'Delaware District, Buffalo, NY',
  },
  {
    image: 'https://framerusercontent.com/images/NCe5u2vNkJTDq99aE4z9j4nnomw.webp',
    beds: 3, baths: 3, size: '2,100 ft²',
    name: 'Lark Street Villa', price: '$720,000', location: 'Lark Street District, Albany, NY',
  },
];

/* En-tête de section avec petite icône, comme sur le template */
const SectionHeading: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
    <span aria-hidden="true" style={{ display: 'inline-flex', color: T.dark }}>{icon}</span>
    <h2 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 28, lineHeight: '1.2em', color: T.dark }}>
      {title}
    </h2>
  </div>
);

const inputStyle: React.CSSProperties = {
  fontFamily: T.body, fontSize: 15, color: T.dark, background: T.bg,
  border: 'none', borderRadius: 8, padding: '14px 16px', outline: 'none', width: '100%',
};

const labelStyle: React.CSSProperties = {
  fontFamily: T.body, fontSize: 15, color: T.dark, display: 'block', marginBottom: 8,
};

const ContactCard: React.FC = () => (
  <div style={{ background: '#ffffff', borderRadius: 10, padding: 28, textAlign: 'center' }}>
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
      {AVATARS.map((a, i) => (
        <img
          key={a}
          src={a}
          alt="Agent"
          width="52"
          height="52"
          loading="lazy"
          decoding="async"
          style={{
            width: 52, height: 52, borderRadius: '50%', objectFit: 'cover',
            border: '2px solid #fff', marginLeft: i > 0 ? -12 : 0,
          }}
        />
      ))}
    </div>
    <h3 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 26, lineHeight: '1.2em', color: T.dark }}>
      Talk with Our Agents!
    </h3>
    <p style={{ fontFamily: T.body, fontSize: 15, color: T.muted, margin: '8px 0 24px' }}>
      Contact our Support Team for this project
    </p>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const subject = encodeURIComponent('Demande — Center Square Villa');
        const bodyTxt = encodeURIComponent(
          `Nom : ${data.get('name')}\nEmail : ${data.get('email')}\nTéléphone : ${data.get('phone')}\n\n${data.get('message')}`
        );
        window.location.href = `mailto:contact@mickael-lima.immo?subject=${subject}&body=${bodyTxt}`;
      }}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, textAlign: 'left' }}
    >
      <div>
        <label htmlFor="nb-name" style={labelStyle}>Name</label>
        <input id="nb-name" name="name" type="text" required placeholder="Jane Smith" style={inputStyle} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div>
          <label htmlFor="nb-email" style={labelStyle}>Email</label>
          <input id="nb-email" name="email" type="email" required placeholder="jane@framer.com" style={inputStyle} />
        </div>
        <div>
          <label htmlFor="nb-phone" style={labelStyle}>Phone</label>
          <input id="nb-phone" name="phone" type="tel" placeholder="+44 500 08 145" style={inputStyle} />
        </div>
      </div>
      <div>
        <label htmlFor="nb-message" style={labelStyle}>Your message</label>
        <textarea
          id="nb-message"
          name="message"
          placeholder="I am interested in this Project..."
          rows={5}
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </div>
      <button
        type="submit"
        style={{
          fontFamily: T.body, fontSize: 16, fontWeight: 500, color: '#ffffff', background: T.dark,
          border: 'none', borderRadius: 8, padding: '16px 24px', cursor: 'pointer', width: '100%',
        }}
      >
        Submit
      </button>
    </form>
  </div>
);

const ListingCard: React.FC<{ listing: (typeof MORE_LISTINGS)[number]; ariaHidden?: boolean }> = ({ listing: l, ariaHidden }) => (
  <article
    aria-hidden={ariaHidden || undefined}
    style={{
      background: '#fff', borderRadius: 10, overflow: 'hidden', padding: 14,
      width: 380, flexShrink: 0,
    }}
  >
    <div style={{ position: 'relative', borderRadius: 8, overflow: 'hidden' }}>
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
          fontSize: 14, fontWeight: 500, borderRadius: 8, padding: '8px 14px',
        }}
      >
        For sale
      </span>
      {/* Dots du carrousel, comme sur le template */}
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
    </div>
    <div style={{ padding: '18px 8px 8px' }}>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 16 }}>
        {[
          { icon: BedDouble, txt: `${l.beds} Beds` },
          { icon: Bath, txt: `${l.baths} Baths` },
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
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        tabIndex={ariaHidden ? -1 : undefined}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          fontSize: 15, fontWeight: 500, color: T.dark, background: T.chipBg,
          borderRadius: 8, padding: '12px 12px 12px 20px', textDecoration: 'none',
        }}
      >
        Learn More
        <span
          style={{
            width: 34, height: 34, background: '#fff', borderRadius: 6,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <ArrowUpRight size={16} aria-hidden="true" />
        </span>
      </a>
    </div>
  </article>
);

export const NosBiens: React.FC = () => {
  return (
    <>
      <SEO
        title="Center Square Villa — Nos Biens"
        description="Center Square Villa : intérieurs spacieux, finitions raffinées et terrasse privée. Découvrez ce bien et contactez nos agents."
        canonical="/nos-biens"
      />

      <div style={{ background: T.bg, fontFamily: T.body, color: T.dark, paddingTop: 96 }}>
        {/* ===== Galerie hero : grande image + colonne (1 large, 2 petites) ===== */}
        <section style={{ maxWidth: 1300, margin: '0 auto', padding: '24px 30px 0' }}>
          <div className="nb-gallery-hero" style={{ display: 'grid', gap: 12, gridTemplateColumns: '1.2fr 1fr' }}>
            <img
              src={GALLERY_HERO.main}
              alt="Center Square Villa — vue principale"
              width="1200"
              height="900"
              loading="eager"
              decoding="async"
              style={{ width: '100%', height: '100%', minHeight: 320, objectFit: 'cover', display: 'block', borderRadius: 10 }}
            />
            <div style={{ display: 'grid', gap: 12, gridTemplateRows: '1.6fr 1fr' }}>
              <img
                src={GALLERY_HERO.topRight}
                alt="Center Square Villa — séjour"
                width="800"
                height="500"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 10 }}
              />
              <div style={{ display: 'grid', gap: 12, gridTemplateColumns: '1fr 1.1fr' }}>
                <img
                  src={GALLERY_HERO.bottomLeft}
                  alt="Center Square Villa — salon"
                  width="500"
                  height="380"
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 10 }}
                />
                <a
                  href={GALLERY_HERO.main}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ position: 'relative', display: 'block', borderRadius: 10, overflow: 'hidden', textDecoration: 'none' }}
                >
                  <img
                    src={GALLERY_HERO.bottomRight}
                    alt=""
                    width="500"
                    height="380"
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <span
                    style={{
                      position: 'absolute', inset: 0, background: 'rgba(17,17,17,0.45)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', fontSize: 17, fontWeight: 500,
                    }}
                  >
                    View Full Gallery
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 2 colonnes : gauche sticky (titre + infos + contact), droite carte blanche ===== */}
        <section style={{ maxWidth: 1300, margin: '0 auto', padding: '40px 30px 0' }}>
          <div className="nb-columns" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 8fr)', gap: 44, alignItems: 'start' }}>
            {/* --- Colonne gauche (sticky) --- */}
            <div className="nb-left" style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', gap: 0 }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 16, color: T.dark, marginBottom: 14 }}>
                <MapPin size={17} aria-hidden="true" /> Center Square, Albany, NY
              </p>
              <h1 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 'clamp(36px, 3.6vw, 52px)', lineHeight: '1.08em', color: T.dark }}>
                Center Square Villa
              </h1>
              <p style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 'clamp(28px, 2.6vw, 38px)', margin: '10px 0 0' }}>
                $749,000
              </p>

              <hr style={{ border: 'none', borderTop: `1px solid #e3e3e3`, margin: '26px 0' }} />

              <div style={{ display: 'flex', gap: 44, flexWrap: 'wrap', marginBottom: 30 }}>
                {[
                  { icon: BedDouble, txt: '4 Bedrooms' },
                  { icon: Bath, txt: '3 Bathrooms' },
                  { icon: Ruler, txt: '1,900 ft²' },
                ].map(({ icon: Icon, txt }) => (
                  <span key={txt} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <Icon size={24} aria-hidden="true" />
                    <span style={{ fontSize: 17 }}>{txt}</span>
                  </span>
                ))}
              </div>

              <ContactCard />
            </div>

            {/* --- Colonne droite : grande carte blanche avec les sections --- */}
            <div style={{ background: '#fff', borderRadius: 10, padding: 'clamp(24px, 3.2vw, 44px)', display: 'flex', flexDirection: 'column', gap: 56 }}>
              {/* Details */}
              <div>
                <SectionHeading icon={<Bookmark size={22} />} title="Details" />
                <p style={{ fontSize: 16, lineHeight: '1.65em', color: T.muted, marginBottom: 28 }}>
                  This luxury penthouse offers expansive interiors, refined design details, and a private rooftop
                  terrace with skyline views. The open-concept living area and premium finishes create an elevated
                  urban retreat in a highly sought-after Brooklyn neighborhood.
                </p>
                <div className="nb-details-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 48, rowGap: 18 }}>
                  {DETAILS.map(([label, value]) => (
                    <p key={label} style={{ fontSize: 16, margin: 0 }}>
                      <span style={{ color: T.dark }}>{label}</span>{' '}
                      <span style={{ color: T.muted }}>{value}</span>
                    </p>
                  ))}
                </div>
              </div>

              {/* Location & Surrounding */}
              <div>
                <SectionHeading icon={<MapPin size={22} />} title="Location & Surrounding" />
                <p style={{ fontSize: 16, lineHeight: '1.65em', color: T.muted }}>
                  Positioned in Cobble Hill, residents enjoy boutique shopping, renowned restaurants, tree-lined
                  streets, and quick subway access to Lower Manhattan.
                </p>
              </div>

              {/* Features & Amenities */}
              <div>
                <SectionHeading icon={<Sparkles size={22} />} title="Features & Amenities" />
                <ul style={{ margin: 0, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 16, color: T.dark }}>
                  {FEATURES.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              {/* Gallery */}
              <div>
                <SectionHeading icon={<ImageIcon size={22} />} title="Gallery" />
                <div className="nb-gallery-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  {GALLERY_GRID.map((img, i) => (
                    <img
                      key={img}
                      src={img}
                      alt={`Center Square Villa — galerie ${i + 1}`}
                      width="600"
                      height="450"
                      loading="lazy"
                      decoding="async"
                      style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: 8, display: 'block' }}
                    />
                  ))}
                </div>
              </div>

              {/* Video */}
              <div>
                <SectionHeading icon={<PlaySquare size={22} />} title="Video" />
                <div style={{ position: 'relative', aspectRatio: '16 / 9', borderRadius: 8, overflow: 'hidden' }}>
                  <iframe
                    src="https://www.youtube.com/embed/mJVuZiK9a6I?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1"
                    title="Center Square Villa — vidéo"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== More listings : marquee autoplay ===== */}
        <section style={{ padding: '110px 0 100px', overflow: 'hidden' }}>
          <h2
            style={{
              fontFamily: T.heading, fontWeight: 400, fontSize: 'clamp(44px, 6vw, 84px)',
              lineHeight: '1.05em', color: T.dark, textAlign: 'center', marginBottom: 56,
            }}
          >
            More listings
          </h2>
          <div className="nb-marquee">
            <div className="nb-marquee-track">
              {MORE_LISTINGS.map((l) => (
                <ListingCard key={l.name} listing={l} />
              ))}
              {/* Copie pour la boucle infinie du marquee */}
              {MORE_LISTINGS.map((l) => (
                <ListingCard key={`dup-${l.name}`} listing={l} ariaHidden />
              ))}
            </div>
          </div>
        </section>

        {/* ===== Newsletter + Footer Revalis ===== */}
        <footer style={{ background: T.navy, color: '#fff' }}>
          <div style={{ maxWidth: 1300, margin: '0 auto', padding: '72px 30px 40px' }}>
            <div
              style={{
                display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center',
                gap: 24, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              <h2 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 'clamp(26px, 3vw, 34px)' }}>
                Subscribe Our Newsletter
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
                  Submit
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
                  Revalis is a New York–based real estate agency specializing in sales and investment properties
                  across New York.
                </p>
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(255,255,255,0.5)', marginBottom: 18 }}>Menu</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15 }}>
                  {['Home', 'Listings', 'Services', 'Listing type', 'Listing city'].map((i) => (
                    <li key={i} style={{ color: 'rgba(255,255,255,0.85)' }}>{i}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(255,255,255,0.5)', marginBottom: 18 }}>Company</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15 }}>
                  {['About', 'Agents', 'Blog', 'Contact'].map((i) => (
                    <li key={i} style={{ color: 'rgba(255,255,255,0.85)' }}>{i}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(255,255,255,0.5)', marginBottom: 18 }}>Contact us</p>
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
              © 2026 Revalis. All rights reserved.
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        /* Marquee autoplay des listings */
        .nb-marquee { overflow: hidden; width: 100%; }
        .nb-marquee-track {
          display: flex;
          gap: 24px;
          width: max-content;
          padding: 0 24px;
          animation: nb-scroll 45s linear infinite;
        }
        .nb-marquee:hover .nb-marquee-track { animation-play-state: paused; }
        @keyframes nb-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 12px)); }
        }
        @media (prefers-reduced-motion: reduce) {
          .nb-marquee-track { animation: none; }
          .nb-marquee { overflow-x: auto; }
        }

        /* Responsive */
        @media (max-width: 1023px) {
          .nb-columns { grid-template-columns: 1fr !important; }
          .nb-left { position: static !important; }
        }
        @media (max-width: 767px) {
          .nb-gallery-hero { grid-template-columns: 1fr !important; }
          .nb-details-grid { grid-template-columns: 1fr !important; }
          .nb-gallery-grid { grid-template-columns: 1fr !important; }
          .nb-footer-cols { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 479px) {
          .nb-footer-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
};
