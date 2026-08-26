import React, { useCallback, useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {
  BedDouble,
  Bath,
  Ruler,
  MapPin,
  Bookmark,
  Sparkles,
  LandPlot,
  Image as ImageIcon,
  Zap,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';
import { SEO } from './SEO';
import { T, AGENT_PHOTO, ListingCard, NBProperty, formatPrice, formatSurface } from './nosBiensShared';
import { BIENS } from './biensData';

/**
 * Page détail d'un bien: DA du template Framer Revalis (page listing) :
 * galerie hero 1+3 avec lightbox slider, colonne gauche sticky (titre, prix,
 * infos, formulaire avec pastille Mickaël), carte blanche (Détails,
 * Points forts, Caractéristiques, DPE, Galerie), marquee « Plus de biens ».
 * Données réelles : portefeuille de Mickaël (biensData.ts).
 */

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

const ContactCard: React.FC<{ property: NBProperty }> = ({ property }) => (
  <div style={{ background: '#ffffff', borderRadius: 10, padding: 28, textAlign: 'center' }}>
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
      <img
        src={AGENT_PHOTO}
        alt="Mickaël Lima"
        width="56"
        height="56"
        loading="lazy"
        decoding="async"
        style={{
          width: 56, height: 56, borderRadius: '50%', objectFit: 'cover',
          border: '2px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        }}
      />
    </div>
    <h3 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 26, lineHeight: '1.2em', color: T.dark }}>
      Parlez avec votre agent !
    </h3>
    <p style={{ fontFamily: T.body, fontSize: 15, color: T.muted, margin: '8px 0 24px' }}>
      Mickaël Lima: réponse en moins d'une heure
    </p>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const subject = encodeURIComponent(`Demande: ${property.typeLabel} ${property.city} (réf. ${property.ref})`);
        const bodyTxt = encodeURIComponent(
          `Nom : ${data.get('name')}\nEmail : ${data.get('email')}\nTéléphone : ${data.get('phone')}\n\n${data.get('message')}`
        );
        window.location.href = `mailto:contact@mickael-lima.immo?subject=${subject}&body=${bodyTxt}`;
      }}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, textAlign: 'left', fontFamily: T.body }}
    >
      <div>
        <label htmlFor="nb-name" style={labelStyle}>Nom</label>
        <input id="nb-name" name="name" type="text" required placeholder="Jeanne Martin" style={inputStyle} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div>
          <label htmlFor="nb-email" style={labelStyle}>Email</label>
          <input id="nb-email" name="email" type="email" required placeholder="jeanne@exemple.fr" style={inputStyle} />
        </div>
        <div>
          <label htmlFor="nb-phone" style={labelStyle}>Téléphone</label>
          <input id="nb-phone" name="phone" type="tel" placeholder="+33 6 12 34 56 78" style={inputStyle} />
        </div>
      </div>
      <div>
        <label htmlFor="nb-message" style={labelStyle}>Votre message</label>
        <textarea
          id="nb-message"
          name="message"
          placeholder="Je suis intéressé(e) par ce bien..."
          rows={5}
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </div>
      <button
        type="submit"
        style={{
          fontFamily: T.body, fontSize: 16, fontWeight: 500, color: '#ffffff', background: T.dark,
          border: 'none', borderRadius: 8, padding: '16px 24px', cursor: 'pointer', width: '100%',
          transition: 'opacity .2s ease, transform .15s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; }}
        onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
      >
        Envoyer
      </button>
    </form>
  </div>
);

/* Lightbox plein écran avec slider (flèches, clavier, compteur) */
const Lightbox: React.FC<{ photos: string[]; index: number; onClose: () => void; onNav: (i: number) => void }> = ({
  photos,
  index,
  onClose,
  onNav,
}) => {
  const prev = useCallback(() => onNav((index - 1 + photos.length) % photos.length), [index, onNav, photos.length]);
  const next = useCallback(() => onNav((index + 1) % photos.length), [index, onNav, photos.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  const navBtn: React.CSSProperties = {
    background: 'rgba(255,255,255,0.12)', color: '#fff', border: 'none', borderRadius: '50%',
    width: 52, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', flexShrink: 0,
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Galerie photos"
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(10,10,10,0.92)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(12px, 3vw, 40px)',
        animation: 'nbFadeIn .25s ease',
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer la galerie"
        style={{ ...navBtn, position: 'absolute', top: 20, right: 20 }}
      >
        <X size={24} aria-hidden="true" />
      </button>

      <span
        style={{
          position: 'absolute', top: 32, left: '50%', transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.75)', fontSize: 15, fontFamily: T.body,
        }}
      >
        {index + 1} / {photos.length}
      </span>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{ display: 'flex', alignItems: 'center', gap: 'clamp(10px, 2vw, 28px)', width: '100%', maxWidth: 1200 }}
      >
        <button type="button" onClick={prev} aria-label="Photo précédente" style={navBtn}>
          <ChevronLeft size={26} aria-hidden="true" />
        </button>
        <img
          key={index}
          src={photos[index]}
          alt={`Photo ${index + 1} sur ${photos.length}`}
          style={{
            flex: 1, minWidth: 0, maxHeight: '78vh', objectFit: 'contain',
            borderRadius: 10, display: 'block',
            animation: 'nbFadeIn .3s ease',
          }}
        />
        <button type="button" onClick={next} aria-label="Photo suivante" style={navBtn}>
          <ChevronRight size={26} aria-hidden="true" />
        </button>
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, maxWidth: '90vw', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {photos.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onNav(i)}
            aria-label={`Aller à la photo ${i + 1}`}
            style={{
              width: 9, height: 9, borderRadius: '50%', border: 'none', cursor: 'pointer', padding: 0,
              background: i === index ? '#fff' : 'rgba(255,255,255,0.35)',
              transform: i === index ? 'scale(1.25)' : 'scale(1)',
              transition: 'background .2s ease, transform .2s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
};

/* Étiquette DPE / GES */
const DPE_COLORS: Record<string, string> = {
  A: '#00934f', B: '#4fb84e', C: '#bfd634', D: '#fced4f', E: '#f5b23c', F: '#ec6d2c', G: '#d7221f',
};
const EnergyBadge: React.FC<{ kind: 'DPE' | 'GES'; grade: string }> = ({ kind, grade }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
    <span
      style={{
        width: 46, height: 46, borderRadius: 8, background: DPE_COLORS[grade] || T.chipBg,
        color: ['D', 'E'].includes(grade) ? T.dark : '#fff',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: T.body, fontSize: 22, fontWeight: 600,
      }}
    >
      {grade}
    </span>
    <span style={{ fontSize: 15, color: T.muted }}>
      {kind === 'DPE' ? 'Classe énergie' : 'Classe climat'}
    </span>
  </div>
);

export const NosBiensDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const property = BIENS.find((p) => p.slug === slug);
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Fermer la lightbox quand on change de bien
  useEffect(() => setLightbox(null), [slug]);

  if (!property) return <Navigate to="/nos-biens" replace />;

  const photos = property.photos;
  const others = BIENS.filter((p) => p.slug !== property.slug).slice(0, 8);
  const heroSide = [photos[1] || photos[0], photos[2] || photos[0], photos[3] || photos[0]];
  const galleryRest = photos.slice(4);

  return (
    <>
      <SEO
        title={`${property.typeLabel} ${property.city}: ${property.status === 'Vendu' ? 'Vendu' : formatPrice(property.price)} | Nos Biens`}
        description={`${property.title}: ${[
          property.surface ? `${formatSurface(property.surface)}` : null,
          property.bedrooms ? `${property.bedrooms} chambres` : null,
          property.land ? `terrain ${formatSurface(property.land)}` : null,
        ].filter(Boolean).join(', ')}. ${property.status === 'Vendu' ? 'Bien vendu' : formatPrice(property.price)}. Réf. ${property.ref}.`}
        canonical={`/nos-biens/${property.slug}`}
      />

      <div style={{ background: T.bg, fontFamily: T.body, color: T.dark, paddingTop: 96 }}>
        {/* ===== Galerie hero : hauteur contrainte (~2.4:1) ===== */}
        <section style={{ maxWidth: 1300, margin: '0 auto', padding: '24px 30px 0' }}>
          <div className="nb-gallery-hero" style={{ display: 'grid', gap: 12, gridTemplateColumns: '1.2fr 1fr' }}>
            <button
              type="button"
              onClick={() => setLightbox(0)}
              aria-label="Agrandir la photo principale"
              style={{ padding: 0, border: 'none', background: 'none', cursor: 'pointer', display: 'block', minWidth: 0, position: 'relative' }}
            >
              <img
                src={photos[0]}
                alt={`${property.typeLabel} à ${property.city}: vue principale`}
                width="1200"
                height="900"
                loading="eager"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 10 }}
              />
              <span
                style={{
                  position: 'absolute', top: 16, left: 16, background: '#fff', color: T.dark,
                  fontSize: 14, fontWeight: 500, borderRadius: 8, padding: '8px 14px',
                }}
              >
                {property.status}
              </span>
            </button>
            <div className="nb-hero-right" style={{ display: 'grid', gap: 12, gridTemplateRows: '1.65fr 1fr', minWidth: 0 }}>
              <button
                type="button"
                onClick={() => setLightbox(1 % photos.length)}
                aria-label="Agrandir la photo 2"
                style={{ padding: 0, border: 'none', background: 'none', cursor: 'pointer', display: 'block', minHeight: 0 }}
              >
                <img
                  src={heroSide[0]}
                  alt={`${property.typeLabel} à ${property.city}: photo 2`}
                  width="800"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 10 }}
                />
              </button>
              <div style={{ display: 'grid', gap: 12, gridTemplateColumns: '1fr 1.1fr', minHeight: 0 }}>
                <button
                  type="button"
                  onClick={() => setLightbox(2 % photos.length)}
                  aria-label="Agrandir la photo 3"
                  style={{ padding: 0, border: 'none', background: 'none', cursor: 'pointer', display: 'block', minHeight: 0 }}
                >
                  <img
                    src={heroSide[1]}
                    alt={`${property.typeLabel} à ${property.city}: photo 3`}
                    width="500"
                    height="380"
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 10 }}
                  />
                </button>
                <button
                  type="button"
                  onClick={() => setLightbox(3 % photos.length)}
                  aria-label="Voir toutes les photos"
                  style={{
                    position: 'relative', padding: 0, border: 'none', background: 'none',
                    cursor: 'pointer', display: 'block', borderRadius: 10, overflow: 'hidden', minHeight: 0,
                  }}
                >
                  <img
                    src={heroSide[2]}
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
                    Voir toute la galerie ({photos.length})
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 2 colonnes : gauche sticky, droite carte blanche ===== */}
        <section style={{ maxWidth: 1300, margin: '0 auto', padding: '40px 30px 0' }}>
          <div className="nb-columns" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 8fr)', gap: 44, alignItems: 'start' }}>
            {/* --- Colonne gauche (sticky) --- */}
            <div className="nb-left" style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 16, color: T.dark, marginBottom: 14 }}>
                <MapPin size={17} aria-hidden="true" /> {property.city} ({property.cp})
              </p>
              <h1 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 'clamp(32px, 3vw, 44px)', lineHeight: '1.12em', color: T.dark }}>
                {property.typeLabel}: {property.city}
              </h1>
              {property.status !== 'Vendu' && (
                <p style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 'clamp(28px, 2.6vw, 38px)', margin: '10px 0 0' }}>
                  {formatPrice(property.price)}
                </p>
              )}

              <hr style={{ border: 'none', borderTop: '1px solid #e3e3e3', margin: '26px 0' }} />

              <div style={{ display: 'flex', gap: 38, flexWrap: 'wrap', marginBottom: 30 }}>
                {[
                  property.bedrooms ? { icon: BedDouble, txt: `${property.bedrooms} chambres` } : null,
                  property.baths ? { icon: Bath, txt: `${property.baths} salle${property.baths > 1 ? 's' : ''} d'eau` } : null,
                  property.surface ? { icon: Ruler, txt: formatSurface(property.surface) as string } : null,
                  property.land ? { icon: LandPlot, txt: `${formatSurface(property.land)} terrain` } : null,
                ]
                  .filter(Boolean)
                  .map((c) => {
                    const { icon: Icon, txt } = c as { icon: typeof BedDouble; txt: string };
                    return (
                      <span key={txt} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        <Icon size={24} aria-hidden="true" />
                        <span style={{ fontSize: 17 }}>{txt}</span>
                      </span>
                    );
                  })}
              </div>

              <ContactCard property={property} />
            </div>

            {/* --- Colonne droite : carte blanche avec les sections --- */}
            <div style={{ background: '#fff', borderRadius: 10, padding: 'clamp(24px, 3.2vw, 44px)', display: 'flex', flexDirection: 'column', gap: 56 }}>
              <div>
                <SectionHeading icon={<Bookmark size={22} />} title="Détails" />
                <p style={{ fontFamily: T.body, fontSize: 15, color: T.muted, marginBottom: 18 }}>
                  Référence {property.ref}
                </p>
                <div style={{ fontSize: 16, lineHeight: '1.7em', color: T.muted, whiteSpace: 'pre-line' }}>
                  {property.description}
                </div>
              </div>

              {property.highlights.length > 0 && (
                <div>
                  <SectionHeading icon={<Sparkles size={22} />} title="Les points forts" />
                  <ul style={{ margin: 0, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 16, color: T.dark }}>
                    {property.highlights.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <SectionHeading icon={<Ruler size={22} />} title="Caractéristiques techniques" />
                <div className="nb-details-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 48, rowGap: 18 }}>
                  {property.features.map(([label, value]) => (
                    <p key={label} style={{ fontSize: 16, margin: 0, display: 'flex', justifyContent: 'space-between', gap: 16, borderBottom: `1px solid ${T.border}`, paddingBottom: 10 }}>
                      <span style={{ color: T.muted }}>{label}</span>
                      <span style={{ color: T.dark, textAlign: 'right' }}>{value}</span>
                    </p>
                  ))}
                </div>
              </div>

              {(property.dpe || property.ges) && (
                <div>
                  <SectionHeading icon={<Zap size={22} />} title="Performance énergétique" />
                  <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
                    {property.dpe && <EnergyBadge kind="DPE" grade={property.dpe} />}
                    {property.ges && <EnergyBadge kind="GES" grade={property.ges} />}
                  </div>
                </div>
              )}

              {galleryRest.length > 0 && (
                <div>
                  <SectionHeading icon={<ImageIcon size={22} />} title="Galerie" />
                  <div className="nb-gallery-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    {galleryRest.map((img, i) => (
                      <button
                        key={img}
                        type="button"
                        onClick={() => setLightbox(4 + i)}
                        aria-label={`Agrandir la photo ${5 + i}`}
                        style={{ padding: 0, border: 'none', background: 'none', cursor: 'pointer', display: 'block' }}
                      >
                        <img
                          src={img}
                          alt={`${property.typeLabel} à ${property.city}: photo ${5 + i}`}
                          width="600"
                          height="450"
                          loading="lazy"
                          decoding="async"
                          style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: 8, display: 'block' }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ===== Plus de biens : marquee autoplay ===== */}
        <section style={{ padding: '110px 0 100px', overflow: 'hidden' }}>
          <h2
            style={{
              fontFamily: T.heading, fontWeight: 400, fontSize: 'clamp(44px, 6vw, 84px)',
              lineHeight: '1.05em', color: T.dark, textAlign: 'center', marginBottom: 56,
            }}
          >
            Plus de biens
          </h2>
          <div className="nb-marquee">
            <div className="nb-marquee-track">
              {others.map((p) => (
                <ListingCard key={p.ref} property={p} />
              ))}
              {/* Copie pour la boucle infinie du marquee */}
              {others.map((p) => (
                <ListingCard key={`dup-${p.ref}`} property={p} ariaHidden />
              ))}
            </div>
          </div>
        </section>

      </div>

      {lightbox !== null && (
        <Lightbox photos={photos} index={lightbox} onClose={() => setLightbox(null)} onNav={setLightbox} />
      )}

      <style>{`
        /* Zoom doux des photos de galerie */
        .nb-gallery-hero button img, .nb-gallery-grid button img {
          transition: transform .45s cubic-bezier(.25,.1,.25,1);
        }
        .nb-gallery-hero button:hover img, .nb-gallery-grid button:hover img {
          transform: scale(1.04);
        }

        /* Galerie hero : hauteur contrainte comme le template (≈ 2.4:1) */
        @media (min-width: 768px) {
          .nb-gallery-hero { aspect-ratio: 2.42 / 1; }
          .nb-gallery-hero > button { height: 100%; min-height: 0; overflow: hidden; }
          .nb-hero-right { min-height: 0; }
          .nb-hero-right button { overflow: hidden; }
        }
        @media (max-width: 767px) {
          .nb-gallery-hero { grid-template-columns: 1fr !important; }
          .nb-gallery-hero > button img { aspect-ratio: 4 / 3; }
          .nb-hero-right { grid-template-rows: auto auto !important; }
          .nb-details-grid { grid-template-columns: 1fr !important; }
          .nb-gallery-grid { grid-template-columns: 1fr !important; }
        }

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

        /* Colonnes → pile sur tablette/mobile */
        @media (max-width: 1023px) {
          .nb-columns { grid-template-columns: 1fr !important; }
          .nb-left { position: static !important; }
        }
      `}</style>
    </>
  );
};
