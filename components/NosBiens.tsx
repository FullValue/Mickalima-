import React from 'react';
import { BedDouble, Bath, Maximize, Check, Phone, Mail } from 'lucide-react';
import { SEO } from './SEO';

/**
 * Réplique fidèle de la page "listing" du template Framer Revalis
 * (https://revalis.framer.media/listings/park-avenue-penthouse),
 * demandée telle quelle en vue du rebranding à venir.
 * Différences voulues : navbar du site conservée, badges Framer retirés.
 * Contenu démo du template (EN) conservé à l'identique pour l'instant.
 */

// Design tokens du template Revalis
const T = {
  bg: '#f7f7f7',
  dark: '#111111',
  navy: '#011d41',
  muted: '#666666',
  border: '#ebebeb',
  heading: '"Marcellus", serif',
  body: '"Inter", sans-serif',
};

const GALLERY_HERO = [
  'https://framerusercontent.com/images/qUn8PXGMNl5owKUxOJ3cx4UlZs8.webp',
  'https://framerusercontent.com/images/D2Rosu46lk7tmVyYhuODw5KE6Qs.webp',
  'https://framerusercontent.com/images/NcXkdQactuuaPNAXEpZ1fJkqCR0.webp',
];

const GALLERY_GRID = [
  'https://framerusercontent.com/images/YdrWklpMEJgsr54XpFUlPWExvxw.webp',
  'https://framerusercontent.com/images/phjPBLFz2C2keKmrYPkV1hNS92Y.webp',
  'https://framerusercontent.com/images/P0IKKWT3PjsidbfZPLGFRba6stU.webp',
  'https://framerusercontent.com/images/QBv22NfP5VaAp4I4HjNNP9r7sq0.webp',
  'https://framerusercontent.com/images/HaFup9m6JSG2y6Q8CzHvhig3bS0.jpg',
  'https://framerusercontent.com/images/qUn8PXGMNl5owKUxOJ3cx4UlZs8.webp',
];

const AVATARS = [
  'https://framerusercontent.com/images/IIXgToVdi2ToB016K5Fg5sG9Bc.webp',
  'https://framerusercontent.com/images/PtrhtDHRTIeUkMdMVmo1Jfqric.webp',
];

const DETAILS: Array<[string, string]> = [
  ['Property Id:', 'R0582'],
  ['Price:', '$1.15 M'],
  ['Property Size:', '1,650 ft²'],
  ['Property Lot Size:', '2,050 ft²'],
  ['Ownership:', 'Condominium'],
  ['Year Built:', '2010'],
  ['Unit Type:', 'Penthouse'],
  ['Property Name:', 'Park Avenue Penthouse'],
];

const FEATURES = [
  'Private terrace',
  'Smart home features',
  'Secure parking',
  'Hardwood flooring',
  'Elevator access',
];

const MORE_LISTINGS = [
  {
    image: 'https://framerusercontent.com/images/6PCCVyEFStSyJ2Gl753CW8tkea4.webp',
    beds: 3, baths: 2, size: '2,050 ft²',
    name: 'Center Square Villa', price: '$749,000', location: 'Center Square, Albany, NY',
  },
  {
    image: 'https://framerusercontent.com/images/KcOhAhSgpyc3sxmVmxEiyvnqguw.webp',
    beds: 4, baths: 3, size: '1,900 ft²',
    name: 'Cobble Hill Penthouse', price: '$429,000', location: 'Cobble Hill, Brooklyn, NY',
  },
  {
    image: 'https://framerusercontent.com/images/uz3zjgmRfQwnzLMkE0yDitfDNM.webp',
    beds: 1, baths: 1, size: '950 ft²',
    name: 'Sobha Apartment', price: '$99,000', location: 'Center Square, Albany, NY',
  },
];

const SectionHeading: React.FC<{ title: string; desc?: string }> = ({ title, desc }) => (
  <div style={{ marginBottom: 24 }}>
    <h2 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 'clamp(28px, 3.2vw, 36px)', lineHeight: '1.2em', color: T.dark }}>
      {title}
    </h2>
    {desc && (
      <p style={{ fontFamily: T.body, fontSize: 16, lineHeight: '1.6em', color: T.muted, marginTop: 14, maxWidth: 640 }}>
        {desc}
      </p>
    )}
  </div>
);

const ContactCard: React.FC = () => (
  <div style={{ background: '#ffffff', borderRadius: 10, padding: 28, border: `1px solid ${T.border}` }}>
    <div style={{ display: 'flex', marginBottom: 16 }}>
      {AVATARS.map((a, i) => (
        <img
          key={a}
          src={a}
          alt="Agent"
          width="48"
          height="48"
          loading="lazy"
          decoding="async"
          style={{
            width: 48, height: 48, borderRadius: '50%', objectFit: 'cover',
            border: '2px solid #fff', marginLeft: i > 0 ? -12 : 0,
          }}
        />
      ))}
    </div>
    <h3 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 24, lineHeight: '1.2em', color: T.dark }}>
      Talk with Our Agents!
    </h3>
    <p style={{ fontFamily: T.body, fontSize: 15, color: T.muted, margin: '8px 0 20px' }}>
      Contact our Support Team for this project
    </p>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const subject = encodeURIComponent('Demande — Park Avenue Penthouse');
        const bodyTxt = encodeURIComponent(
          `Nom : ${data.get('name')}\nEmail : ${data.get('email')}\nTéléphone : ${data.get('phone')}\n\n${data.get('message')}`
        );
        window.location.href = `mailto:contact@mickael-lima.immo?subject=${subject}&body=${bodyTxt}`;
      }}
      style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
    >
      {(
        [
          ['name', 'Name', 'text'],
          ['email', 'Email', 'email'],
          ['phone', 'Phone', 'tel'],
        ] as const
      ).map(([name, label, type]) => (
        <input
          key={name}
          name={name}
          type={type}
          required={name !== 'phone'}
          placeholder={label}
          aria-label={label}
          style={{
            fontFamily: T.body, fontSize: 15, color: T.dark, background: T.bg,
            border: `1px solid ${T.border}`, borderRadius: 8, padding: '13px 16px', outline: 'none', width: '100%',
          }}
        />
      ))}
      <textarea
        name="message"
        placeholder="Your message"
        aria-label="Your message"
        rows={4}
        style={{
          fontFamily: T.body, fontSize: 15, color: T.dark, background: T.bg,
          border: `1px solid ${T.border}`, borderRadius: 8, padding: '13px 16px', outline: 'none',
          resize: 'vertical', width: '100%',
        }}
      />
      <button
        type="submit"
        style={{
          fontFamily: T.body, fontSize: 15, fontWeight: 500, color: '#ffffff', background: T.dark,
          border: 'none', borderRadius: 50, padding: '14px 24px', cursor: 'pointer', marginTop: 4,
        }}
      >
        Submit
      </button>
    </form>
  </div>
);

export const NosBiens: React.FC = () => {
  return (
    <>
      <SEO
        title="Park Avenue Penthouse — Nos Biens"
        description="Park Avenue Penthouse : penthouse raffiné avec vues élevées sur la ville, finitions premium et vastes intérieurs. Découvrez ce bien et contactez nos agents."
        canonical="/nos-biens"
      />

      <div style={{ background: T.bg, fontFamily: T.body, color: T.dark, paddingTop: 96 }}>
        {/* ===== Image Gallery hero ===== */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 30px 0' }}>
          <div
            style={{
              display: 'grid', gap: 10, gridTemplateColumns: '2fr 1fr',
              borderRadius: 10, overflow: 'hidden',
            }}
            className="nb-gallery-hero"
          >
            <div style={{ position: 'relative' }}>
              <img
                src={GALLERY_HERO[0]}
                alt="Park Avenue Penthouse — vue principale"
                width="1200"
                height="800"
                loading="eager"
                decoding="async"
                style={{ width: '100%', height: '100%', minHeight: 320, objectFit: 'cover', display: 'block' }}
              />
              <span
                style={{
                  position: 'absolute', top: 20, left: 20, background: T.dark, color: '#fff',
                  fontSize: 13, fontWeight: 500, borderRadius: 50, padding: '8px 16px',
                }}
              >
                For sale
              </span>
              <a
                href={GALLERY_HERO[0]}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute', bottom: 20, left: 20, background: '#fff', color: T.dark,
                  fontSize: 14, fontWeight: 500, borderRadius: 50, padding: '12px 22px', textDecoration: 'none',
                }}
              >
                View Full Gallery
              </a>
            </div>
            <div style={{ display: 'grid', gap: 10, gridTemplateRows: '1fr 1fr' }}>
              {GALLERY_HERO.slice(1).map((img, i) => (
                <img
                  key={img}
                  src={img}
                  alt={`Park Avenue Penthouse — photo ${i + 2}`}
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ===== Heading + infos + contenu ===== */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 30px 0' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 24, alignItems: 'flex-end' }}>
            <div>
              <p style={{ fontSize: 15, color: T.muted, marginBottom: 10 }}>Park Avenue, Rochester, NY</p>
              <h1 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 'clamp(32px, 4.5vw, 44px)', lineHeight: '1.1em' }}>
                Park Avenue Penthouse
              </h1>
            </div>
            <p style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 'clamp(26px, 3.5vw, 38px)' }}>$1,150,000</p>
          </div>

          <div
            style={{
              display: 'flex', flexWrap: 'wrap', gap: 32, borderTop: `1px solid ${T.border}`,
              borderBottom: `1px solid ${T.border}`, padding: '22px 0', margin: '28px 0 0',
            }}
          >
            {[
              { icon: BedDouble, value: '3', label: 'Bedrooms' },
              { icon: Bath, value: '2', label: 'Bathrooms' },
              { icon: Maximize, value: '1,650 ft²', label: 'Living area' },
            ].map(({ icon: Icon, value, label }) => (
              <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                <Icon size={20} color={T.muted} aria-hidden="true" />
                <span style={{ fontSize: 16, fontWeight: 500 }}>{value}</span>
                <span style={{ fontSize: 15, color: T.muted }}>{label}</span>
              </span>
            ))}
          </div>

          <div className="nb-columns" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 48, marginTop: 48 }}>
            {/* --- Colonne gauche --- */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 64, minWidth: 0 }}>
              {/* Details */}
              <div>
                <SectionHeading
                  title="Details"
                  desc="This refined penthouse offers elevated city views, premium finishes, and spacious interiors ideal for modern living. The open layout maximizes natural light while private outdoor space enhances comfort and entertaining possibilities."
                />
                <div className="nb-details-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 40 }}>
                  {DETAILS.map(([label, value]) => (
                    <div
                      key={label}
                      style={{
                        display: 'flex', justifyContent: 'space-between', gap: 16,
                        padding: '14px 0', borderBottom: `1px solid ${T.border}`,
                      }}
                    >
                      <span style={{ fontSize: 15, color: T.muted }}>{label}</span>
                      <span style={{ fontSize: 15, fontWeight: 500 }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location & Surrounding */}
              <SectionHeading
                title="Location & Surrounding"
                desc="Positioned in Rochester’s Park Avenue district, the home enjoys access to cafes, boutiques, cultural venues, and convenient public transportation."
              />

              {/* Features & Amenities */}
              <div>
                <SectionHeading title="Features & Amenities" />
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
                  {FEATURES.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15 }}>
                      <span
                        style={{
                          width: 26, height: 26, borderRadius: '50%', background: '#fff',
                          border: `1px solid ${T.border}`, display: 'inline-flex', alignItems: 'center',
                          justifyContent: 'center', flexShrink: 0,
                        }}
                      >
                        <Check size={14} aria-hidden="true" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gallery */}
              <div>
                <SectionHeading title="Gallery" />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10 }}>
                  {GALLERY_GRID.map((img, i) => (
                    <img
                      key={`${img}-${i}`}
                      src={img}
                      alt={`Park Avenue Penthouse — galerie ${i + 1}`}
                      width="600"
                      height="450"
                      loading="lazy"
                      decoding="async"
                      style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: 10, display: 'block' }}
                    />
                  ))}
                </div>
              </div>

              {/* Video */}
              <div>
                <SectionHeading title="Video" />
                <div style={{ position: 'relative', aspectRatio: '16 / 9', borderRadius: 10, overflow: 'hidden' }}>
                  <iframe
                    src="https://www.youtube.com/embed/mJVuZiK9a6I?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1"
                    title="Park Avenue Penthouse — vidéo"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                  />
                </div>
              </div>

              {/* Location map */}
              <div>
                <SectionHeading title="Location" />
                <div style={{ position: 'relative', aspectRatio: '16 / 9', borderRadius: 10, overflow: 'hidden' }}>
                  <iframe
                    src="https://maps.google.com/maps?q=43.14950%2C%20-77.57310&z=15&output=embed"
                    title="Park Avenue Penthouse — carte"
                    loading="lazy"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                  />
                </div>
              </div>
            </div>

            {/* --- Colonne droite : contact sticky --- */}
            <aside className="nb-aside">
              <div style={{ position: 'sticky', top: 110 }}>
                <ContactCard />
              </div>
            </aside>
          </div>
        </section>

        {/* ===== More listings ===== */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 30px' }}>
          <SectionHeading title="More listings" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {MORE_LISTINGS.map((l) => (
              <article key={l.name} style={{ background: '#fff', borderRadius: 10, overflow: 'hidden', border: `1px solid ${T.border}` }}>
                <div style={{ position: 'relative' }}>
                  <img
                    src={l.image}
                    alt={l.name}
                    width="600"
                    height="450"
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', display: 'block' }}
                  />
                  <span
                    style={{
                      position: 'absolute', top: 16, left: 16, background: T.dark, color: '#fff',
                      fontSize: 12, fontWeight: 500, borderRadius: 50, padding: '7px 14px',
                    }}
                  >
                    For sale
                  </span>
                  <div
                    style={{
                      position: 'absolute', bottom: 16, left: 16, right: 16, display: 'flex', gap: 14,
                      background: 'rgba(17,17,17,0.72)', backdropFilter: 'blur(6px)', color: '#fff',
                      borderRadius: 8, padding: '10px 14px', fontSize: 13,
                    }}
                  >
                    <span>{l.beds} Beds</span>
                    <span>{l.baths} Baths</span>
                    <span>{l.size}</span>
                  </div>
                </div>
                <div style={{ padding: 22 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
                    <h3 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 22, lineHeight: '1.2em' }}>{l.name}</h3>
                    <span style={{ fontFamily: T.heading, fontSize: 20, whiteSpace: 'nowrap' }}>{l.price}</span>
                  </div>
                  <p style={{ fontSize: 15, color: T.muted, margin: '8px 0 18px' }}>{l.location}</p>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    style={{
                      display: 'inline-block', fontSize: 14, fontWeight: 500, color: T.dark,
                      border: `1px solid ${T.dark}`, borderRadius: 50, padding: '10px 22px', textDecoration: 'none',
                    }}
                  >
                    Learn More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ===== Newsletter + Footer Revalis ===== */}
        <footer style={{ background: T.navy, color: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 30px 40px' }}>
            <div
              className="nb-newsletter"
              style={{
                display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center',
                gap: 24, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              <h2 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 'clamp(26px, 3vw, 34px)' }}>
                Subscribe Our Newsletter
              </h2>
              <form
                onSubmit={(e) => e.preventDefault()}
                style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}
              >
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
              style={{
                display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr', gap: 40, padding: '48px 0',
              }}
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

      {/* Responsive : colonnes → pile sur mobile/tablette */}
      <style>{`
        @media (max-width: 1023px) {
          .nb-columns { grid-template-columns: 1fr !important; }
          .nb-aside { order: -1; }
          .nb-aside > div { position: static !important; }
        }
        @media (max-width: 767px) {
          .nb-gallery-hero { grid-template-columns: 1fr !important; }
          .nb-details-grid { grid-template-columns: 1fr !important; }
          .nb-footer-cols { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 479px) {
          .nb-footer-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
};
