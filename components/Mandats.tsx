import React from 'react';
import {
  Check,
  Camera,
  Share2,
  Users,
  Layout,
  Star,
  Gem,
  Video,
  ShieldCheck,
  MessageSquare,
  Target,
  Wand2,
  Play,
} from 'lucide-react';
import { m } from 'framer-motion';
import { SEO } from './SEO';
import { IMAGES } from '../constants';
import { T } from './nosBiensShared';
import { wrap, ServiceHero, StickyIntro, WhiteCard, TwoCol, RecapBand, ServiceStyles } from './serviceUI';

/**
 * Pages service (mandats) — nouvelle DA reprise de /nos-biens :
 * fond clair, hero image sombre pleine largeur, cartes blanches radius 10,
 * titres Playfair Display, colonnes sticky, bandeau récapitulatif navy.
 * ⚠️ Le copywriting et l'ordre des blocs sont ceux de la version précédente,
 * à l'identique — seule la présentation change.
 */

const MANDAT_PROVIDER = {
  '@type': 'RealEstateAgent',
  name: 'Mickaël Lima — L’agence Immo',
  url: 'https://mickael-lima.immo',
  telephone: '+33769313502',
  email: 'contact@mickael-lima.immo',
  sameAs: [
    'https://www.linkedin.com/in/mickael-lima-dos-santos-97137419b/',
    'https://share.google/fvsAyaT6pI2059MZF',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '328 Rue des Fontanettes',
    addressLocality: 'Divonne-les-Bains',
    postalCode: '01220',
    addressRegion: 'Ain',
    addressCountry: 'FR',
  },
};

const MANDAT_AREA = {
  '@type': 'AdministrativeArea',
  name: 'Pays de Gex',
};

const MANDAT_SIGNATURE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mandat Signature — Vente immobilière Pays de Gex',
  serviceType: 'Real estate sale mandate',
  provider: MANDAT_PROVIDER,
  areaServed: MANDAT_AREA,
  description:
    'Mandat de vente performant : photos HD, vidéo drone 4K, diffusion sur 40+ portails immobiliers, visites qualifiées, reporting hebdomadaire. Inclus sans frais supplémentaires pour le vendeur.',
  url: 'https://mickael-lima.immo/mandat-signature/',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'EUR',
      description: 'Commission sur vente effective uniquement, conformément au mandat signé.',
    },
  },
};

const MANDAT_EXCLUSIF_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mandat Exclusif — Vente prestige Pays de Gex',
  serviceType: 'Premium real estate exclusive mandate',
  provider: MANDAT_PROVIDER,
  areaServed: MANDAT_AREA,
  description:
    'Mandat exclusif pour biens d’exception : production cinématographique, home staging, événements privés, diffusion internationale (Properstar, LuxuryEstate). Stratégie premium pour propriétés résidentielles haut de gamme.',
  url: 'https://mickael-lima.immo/mandat-exclusif/',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'EUR',
      description: 'Commission sur vente effective uniquement, conformément au mandat signé.',
    },
  },
};

const PORTAIL_LOGOS = [
  { src: '/images/seloger.png', alt: 'SeLoger', href: 'https://www.seloger.com/professionnels-immobilier/2bccyjgnD7SN5UJ1TfrRMy', title: 'Mickaël Lima sur SeLoger' },
  { src: '/images/leboncoin.png', alt: 'Leboncoin', href: 'https://www.leboncoin.fr/boutique/7395512/', title: 'Mickaël Lima sur Leboncoin' },
  { src: '/images/bienici-logo.svg', alt: 'BienIci', href: 'https://www.bienici.com/', title: 'Mickaël Lima sur BienIci' },
  { src: '/images/logo_logicimmo.png', alt: 'LogicImmo', href: 'https://www.logic-immo.com/agences-immobilieres/2bccyjgnD7SN5UJ1TfrRMy', title: 'Mickaël Lima sur Logic-Immo' },
  { src: '/images/lefigaroimmo.png', alt: 'Figaro', href: 'https://immobilier.lefigaro.fr/', title: 'Mickaël Lima sur Figaro Immobilier' },
  { src: '/images/logoluxuryestate.png', alt: 'LuxuryEstate', href: 'https://www.luxuryestate.com/', title: 'Mickaël Lima sur Luxury Estate' },
];

/* ---------- briques locales ---------- */

const BlockTitle: React.FC<{ icon: React.ReactNode; children: React.ReactNode }> = ({ icon, children }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
    <span aria-hidden="true" style={{ display: 'inline-flex', color: T.dark }}>{icon}</span>
    <h3 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 26, lineHeight: '1.2em', color: T.dark }}>
      {children}
    </h3>
  </div>
);

/* Vidéo : image + bouton play, badge et titre en bas comme avant */
const VideoBlock: React.FC<{
  image: string;
  label: string;
  badgeIcon: React.ReactNode;
  badge: string;
  title: string;
}> = ({ image, label, badgeIcon, badge, title }) => (
  <div style={{ position: 'relative', aspectRatio: '16 / 9', borderRadius: 8, overflow: 'hidden', background: T.navy }}>
    <img
      src={image}
      alt="Video Background"
      loading="lazy"
      decoding="async"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.72 }}
    />
    <div
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(1,29,65,0.85), rgba(1,29,65,0.15))' }}
    />
    <div
      style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 18, color: '#fff',
      }}
    >
      <span
        style={{
          width: 68, height: 68, borderRadius: '50%', background: 'rgba(255,255,255,0.92)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <Play size={26} color={T.dark} fill={T.dark} />
      </span>
      <span style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 3, color: 'rgba(255,255,255,0.85)' }}>
        {label}
      </span>
    </div>
    <div style={{ position: 'absolute', bottom: 24, left: 24, color: '#fff' }}>
      <span
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.14)',
          border: '1px solid rgba(255,255,255,0.25)', borderRadius: 50, padding: '6px 14px',
          fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 12,
        }}
      >
        {badgeIcon} {badge}
      </span>
      <h3 style={{ fontFamily: T.heading, fontWeight: 400, fontStyle: 'italic', fontSize: 32, lineHeight: '1.15em' }}>
        {title}
      </h3>
    </div>
  </div>
);

/* Galerie : grande photo avec libellé + 3 vignettes */
const GalleryBlock: React.FC<{ main: string; overlay: string; thumbs: string[]; thumbAlts: string[] }> = ({
  main,
  overlay,
  thumbs,
  thumbAlts,
}) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
    <div style={{ position: 'relative', aspectRatio: '21 / 9', borderRadius: 8, overflow: 'hidden' }}>
      <img
        src={main}
        alt="Main View"
        loading="lazy"
        decoding="async"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <span
        style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(17,17,17,0.35)',
        }}
      >
        <span
          style={{
            background: '#fff', color: T.dark, fontSize: 14, fontWeight: 500,
            borderRadius: 50, padding: '11px 24px',
          }}
        >
          {overlay}
        </span>
      </span>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }} className="sv-grid-3">
      {thumbs.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={thumbAlts[idx]}
          loading="lazy"
          decoding="async"
          style={{ width: '100%', aspectRatio: '16 / 9', objectFit: 'cover', borderRadius: 8, display: 'block' }}
        />
      ))}
    </div>
  </div>
);

/* Tuiles verticales 9:16 (Reels / Teasers) */
const VerticalTiles: React.FC<{ label: string }> = ({ label }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }} className="sv-grid-3">
    {[1, 2, 3].map((i) => (
      <div key={i} style={{ position: 'relative', aspectRatio: '9 / 16', borderRadius: 8, overflow: 'hidden' }}>
        <img
          src={IMAGES.misc1}
          alt={`${label} ${i}`}
          loading="lazy"
          decoding="async"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(1,29,65,0.8), transparent 55%)' }}
        />
        <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, color: '#fff' }}>
          <span
            style={{
              width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.2)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12,
            }}
          >
            <Play size={16} fill="#fff" color="#fff" />
          </span>
          <span style={{ display: 'block', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5 }}>
            {label} {i}
          </span>
        </div>
      </div>
    ))}
  </div>
);

/* Carte simple (portails, réseaux, piliers…) */
const Panel: React.FC<{
  icon?: React.ReactNode;
  title: string;
  desc: string;
  tag?: string;
  stat?: { value: string; label: string };
  children?: React.ReactNode;
}> = ({ icon, title, desc, tag, stat, children }) => (
  <div style={{ background: '#fff', borderRadius: 10, padding: 32 }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
      {icon && <span aria-hidden="true" style={{ display: 'inline-flex', color: T.dark }}>{icon}</span>}
      {tag && (
        <span
          style={{
            fontSize: 12, fontWeight: 500, color: T.dark, background: T.bg,
            borderRadius: 50, padding: '6px 14px',
          }}
        >
          {tag}
        </span>
      )}
    </div>
    <h3 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 24, lineHeight: '1.25em', color: T.dark, marginBottom: 12 }}>
      {title}
    </h3>
    <p style={{ fontSize: 16, lineHeight: '1.65em', color: T.muted }}>{desc}</p>
    {stat && (
      <div style={{ marginTop: 24, paddingTop: 20, borderTop: `1px solid ${T.border}` }}>
        <p style={{ fontFamily: T.heading, fontSize: 34, color: T.dark, lineHeight: 1.1 }}>{stat.value}</p>
        <p style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: 1.5, color: T.muted, marginTop: 6 }}>
          {stat.label}
        </p>
      </div>
    )}
    {children}
  </div>
);

/* Bandeau de logos défilant (identique à l'ancienne version) */
const LogoMarquee: React.FC = () => (
  <div style={{ background: T.navy, padding: '26px 0', overflow: 'hidden', position: 'relative' }}>
    <m.div
      style={{ display: 'flex', gap: 96, alignItems: 'center', flexWrap: 'nowrap', minWidth: 'max-content' }}
      animate={{ x: ['0%', '-50%'] }}
      transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
    >
      {[...Array(10)].map((_, idx) => (
        <div
          key={idx}
          style={{
            width: 220, height: 48, opacity: 0.8, background: '#fff',
            WebkitMaskImage: `url(${IMAGES.logo})`,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskImage: `url(${IMAGES.logo})`,
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
          }}
        />
      ))}
    </m.div>
  </div>
);

/* Titre de section centré (sections 02 et 04) */
const CenteredHeading: React.FC<{
  icon: React.ReactNode;
  kicker: string;
  title: React.ReactNode;
  desc: string;
}> = ({ icon, kicker, title, desc }) => (
  <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto 56px' }}>
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff',
        border: `1px solid ${T.border}`, borderRadius: 50, padding: '9px 18px',
        fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.8, color: T.dark, marginBottom: 24,
      }}
    >
      {icon} {kicker}
    </span>
    <h2
      style={{
        fontFamily: T.heading, fontWeight: 400, fontSize: 'clamp(36px, 4.6vw, 62px)',
        lineHeight: '1.06em', color: T.dark, marginBottom: 20,
      }}
    >
      {title}
    </h2>
    <p style={{ fontSize: 17, lineHeight: '1.7em', color: T.muted }}>{desc}</p>
  </div>
);

/* ============================ MANDAT SIGNATURE ============================ */

export const MandatSignature: React.FC = () => (
  <>
    <SEO
      title="Mandat Signature | Vendez Mieux — Mickaël Lima Pays de Gex"
      description="Le Mandat Signature : photos HD, vidéo drone 4K, diffusion sur +40 portails immobiliers, visites qualifiées et zéro visite inutile. Vendez votre bien dans le Pays de Gex au meilleur prix."
      canonical="/mandat-signature"
      schema={MANDAT_SIGNATURE_SCHEMA}
    />

    <div style={{ background: T.bg, fontFamily: T.body, color: T.dark }}>
      {/* HERO */}
      <ServiceHero
        badge="Performance & Sérénité"
        title={
          <>
            Mandat <em style={{ fontStyle: 'italic' }}>Signature</em>
          </>
        }
        subtitle="L'alliance parfaite entre technologie de pointe et expertise humaine pour une vente au meilleur prix."
        image="/images/hero-main.jpg"
        ctaLabel="Demander une estimation"
        ctaTo="/estimation"
      />

      {/* SECTION 1 : Valorisation Visuelle & Média */}
      <section style={{ ...wrap, padding: '90px 30px 0' }}>
        <TwoCol
          left={
            <StickyIntro
              icon={<Camera size={26} />}
              title={
                <>
                  Valorisation <em style={{ fontStyle: 'italic' }}>Visuelle</em>
                </>
              }
              description="Une stratégie visuelle complète pour capter l'attention partout. Nous créons une véritable identité pour votre bien immobilier."
              items={[
                'Photos Pro Haute Définition',
                'Vidéo Drone 4K & Présentation',
                'Visite Virtuelle Immersive',
                'Vidéos IA (Intelligence Artificielle)',
                'Home Staging Virtuel',
                'Réseaux Sociaux & Média',
              ]}
              ctaLabel="Demander une estimation"
              ctaTo="/estimation"
            />
          }
          right={
            <WhiteCard>
              {/* Vidéo */}
              <VideoBlock
                image={IMAGES.misc2}
                label="Film de présentation"
                badgeIcon={<Camera size={13} aria-hidden="true" />}
                badge="Drone & Immersion"
                title="Vidéo 4K"
              />

              {/* Photos Pro */}
              <div>
                <BlockTitle icon={<Camera size={22} />}>Photos Pro Haute Définition</BlockTitle>
                <GalleryBlock
                  main={IMAGES.heroBg}
                  overlay="Agrandir la galerie"
                  thumbs={[IMAGES.misc1, IMAGES.misc2, IMAGES.misc3]}
                  thumbAlts={['Detail 0', 'Detail 1', 'Detail 2']}
                />
              </div>

              {/* Reels */}
              <div>
                <BlockTitle icon={<Share2 size={22} />}>Format TikTok &amp; Reels</BlockTitle>
                <VerticalTiles label="Reel" />
              </div>

              {/* Home Staging */}
              <div>
                <BlockTitle icon={<Wand2 size={22} />}>Home Staging Virtuel</BlockTitle>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="sv-grid-2">
                  {[
                    { label: 'Avant', img: IMAGES.misc1 },
                    { label: 'Après (IA)', img: IMAGES.misc5 },
                  ].map(({ label, img }) => (
                    <div key={label} style={{ position: 'relative', borderRadius: 8, overflow: 'hidden' }}>
                      <img
                        src={img}
                        alt={label}
                        loading="lazy"
                        decoding="async"
                        style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', display: 'block' }}
                      />
                      <span
                        style={{
                          position: 'absolute', top: 12, left: 12, background: '#fff', color: T.dark,
                          fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5,
                          borderRadius: 8, padding: '7px 13px',
                        }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </WhiteCard>
          }
        />
      </section>

      {/* SECTION 2 : Visibilité Multi-Canal */}
      <section style={{ ...wrap, padding: '100px 30px 0' }}>
        <CenteredHeading
          icon={<Target size={15} aria-hidden="true" />}
          kicker="02. Diffusion Massive"
          title={
            <>
              Omniprésence <em style={{ fontStyle: 'italic' }}>Digitale</em>
            </>
          }
          desc="Votre bien ne doit pas être cherché, il doit être trouvé. Nous inondons le marché pour toucher 100% des acquéreurs actifs."
        />

        <div className="sv-bento" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          <div style={{ gridColumn: 'span 2' }} className="sv-bento-wide">
            <Panel
              icon={<Share2 size={26} />}
              title="+40 Portails Immobiliers"
              desc="Diffusion simultanée sur SeLoger, Leboncoin, BienIci, LogicImmo, Figaro, Belles Demeures, et bien plus encore."
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 26 }}>
                {PORTAIL_LOGOS.map((logo) => (
                  <a
                    key={logo.alt}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={logo.title}
                    style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      background: T.bg, borderRadius: 8, padding: '14px 18px', height: 52,
                    }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      decoding="async"
                      style={{ maxHeight: 22, maxWidth: 90, objectFit: 'contain' }}
                    />
                  </a>
                ))}
                <span
                  style={{
                    display: 'inline-flex', alignItems: 'center', background: T.dark, color: '#fff',
                    borderRadius: 8, padding: '14px 20px', height: 52, fontSize: 14, fontWeight: 500,
                  }}
                >
                  +35 autres
                </span>
              </div>
            </Panel>
          </div>

          <Panel
            icon={<Share2 size={26} />}
            title="Réseaux Sociaux"
            desc="Instagram, Facebook, LinkedIn, TikTok."
            stat={{ value: '30k+', label: 'Audience Cumulée' }}
          />

          <div style={{ gridColumn: 'span 3' }} className="sv-bento-wide">
            <Panel
              icon={<Target size={26} />}
              title="Campagnes Sponsorisées (Ads)"
              desc="Retargeting Google & Meta pour ne perdre aucun prospect."
              tag="Active 24/7"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 : Acquéreurs & Suivi */}
      <section style={{ ...wrap, padding: '100px 30px 0' }}>
        <TwoCol
          left={
            <div className="sv-sticky" style={{ position: 'sticky', top: 100 }}>
              {/* Espace Propriétaire (dashboard) */}
              <div style={{ background: '#fff', borderRadius: 10, padding: 32 }}>
                <div
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    gap: 16, paddingBottom: 24, borderBottom: `1px solid ${T.border}`, marginBottom: 24,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <img
                      src={IMAGES.heroAgent}
                      alt="Agent"
                      loading="lazy"
                      decoding="async"
                      style={{ width: 52, height: 52, borderRadius: 8, objectFit: 'cover' }}
                    />
                    <div>
                      <p style={{ fontSize: 17, fontWeight: 500, color: T.dark }}>Espace Propriétaire</p>
                      <p style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, color: '#16a34a', marginTop: 5 }}>
                        <span aria-hidden="true" style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e' }} /> En ligne
                      </p>
                    </div>
                  </div>
                  <MessageSquare size={22} color={T.muted} aria-hidden="true" />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{ display: 'flex', gap: 14 }}>
                    <span
                      style={{
                        flexShrink: 0, width: 44, height: 44, borderRadius: '50%', background: T.navy, color: '#fff',
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600,
                      }}
                    >
                      14:00
                    </span>
                    <div style={{ background: T.bg, borderRadius: 8, padding: 18, flex: 1 }}>
                      <p style={{ fontSize: 16, fontWeight: 500, color: T.dark, marginBottom: 8 }}>
                        Visite effectuée - M. &amp; Mme Dupont
                      </p>
                      <p style={{ fontSize: 15, lineHeight: '1.6em', color: T.muted }}>
                        "Coup de cœur pour le salon, mais hésitation sur la cuisine. Souhaitent une contre-visite."
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: 14 }}>
                    <span
                      style={{
                        flexShrink: 0, width: 44, height: 44, borderRadius: '50%', background: '#22c55e', color: '#fff',
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600,
                      }}
                    >
                      Hier
                    </span>
                    <div style={{ background: T.bg, borderRadius: 8, padding: 18, flex: 1, borderLeft: '3px solid #22c55e' }}>
                      <p style={{ fontSize: 16, fontWeight: 500, color: T.dark, marginBottom: 8 }}>Offre d'achat reçue !</p>
                      <p style={{ fontSize: 15, lineHeight: '1.6em', color: T.muted }}>
                        Offre au prix. Dossier de financement validé par courtier.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14, marginTop: 24, paddingTop: 20,
                    borderTop: `1px solid ${T.border}`,
                  }}
                >
                  <span
                    style={{
                      width: 44, height: 44, borderRadius: 8, background: '#f0fdf4',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    <Check size={20} color="#16a34a" aria-hidden="true" />
                  </span>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, color: T.muted, marginBottom: 4 }}>
                      Réactivité
                    </p>
                    <p style={{ fontSize: 17, fontWeight: 500, color: T.dark }}>Réponse &lt; 1h</p>
                  </div>
                </div>
              </div>
            </div>
          }
          right={
            <div>
              <span
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff',
                  border: `1px solid ${T.border}`, borderRadius: 50, padding: '9px 18px',
                  fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.8, color: T.dark, marginBottom: 24,
                }}
              >
                <Layout size={15} aria-hidden="true" /> 03. Transparence Totale
              </span>
              <h2
                style={{
                  fontFamily: T.heading, fontWeight: 400, fontSize: 'clamp(34px, 3.6vw, 52px)',
                  lineHeight: '1.08em', color: T.dark, marginBottom: 20,
                }}
              >
                Vous savez tout, <em style={{ fontStyle: 'italic' }}>tout le temps.</em>
              </h2>
              <p style={{ fontSize: 17, lineHeight: '1.7em', color: T.muted, marginBottom: 36 }}>
                Fini le silence radio. Nous avons mis en place des processus de suivi rigoureux pour que vous soyez
                acteur de votre vente, sans le stress.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <Panel
                  icon={<Users size={26} />}
                  title="Fichier Acquéreurs Qualifié"
                  desc="Avant même la diffusion, nous proposons votre bien à notre base de clients actifs et finançables."
                />
                <Panel
                  icon={<MessageSquare size={26} />}
                  title="Groupe WhatsApp Dédié"
                  desc="Un fil de discussion direct avec votre agent pour une communication fluide et instantanée."
                />
              </div>
            </div>
          }
        />
      </section>

      {/* SECTION 4 : Visites Qualifiées */}
      <section style={{ ...wrap, padding: '100px 30px 100px' }}>
        <CenteredHeading
          icon={<ShieldCheck size={15} aria-hidden="true" />}
          kicker="04. Sécurité"
          title={
            <>
              Zéro <em style={{ fontStyle: 'italic' }}>Tourisme Immobilier</em>
            </>
          }
          desc="Nous protégeons votre intimité et votre temps. Seuls les acheteurs sérieux franchissent votre porte."
        />

        <div className="sv-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          <Panel
            icon={<ShieldCheck size={26} />}
            title="Identité Vérifiée"
            desc="Nous collectons la pièce d'identité de chaque visiteur avant la visite pour une sécurité totale."
          />
          <Panel
            icon={<Check size={26} />}
            title="Financement Validé"
            desc="Étude de solvabilité obligatoire. Pas de visite sans plan de financement clair et validé."
            tag="Essentiel"
          />
          <Panel
            icon={<Target size={26} />}
            title="Projet Mûr"
            desc="Nous qualifions la motivation et l'adéquation du projet pour éviter les visites de curiosité."
          />
        </div>
      </section>

      <LogoMarquee />

      {/* RÉCAP */}
      <RecapBand
        badgeIcon={<Star size={13} aria-hidden="true" />}
        kicker="L'Excellence Immobilière"
        title={
          <>
            Pourquoi choisir le <em style={{ fontStyle: 'italic' }}>Mandat Signature ?</em>
          </>
        }
        description="Une approche globale qui fusionne technologie, marketing et expertise humaine pour des résultats exceptionnels."
        cards={[
          { icon: <Camera size={24} />, title: 'Valorisation Visuelle', items: ['Photos Pro & Drone', 'Visite Virtuelle', 'Vidéos IA'] },
          { icon: <Share2 size={24} />, title: 'Visibilité Multi-Canal', items: ['+40 Portails', 'Réseaux Sociaux', 'Diffusion TV'] },
          { icon: <Users size={24} />, title: 'Acquéreurs & Suivi', items: ['Fichier Qualifié', 'Partage Inter-agence', 'WhatsApp dédié'] },
          { icon: <Layout size={24} />, title: 'Visites Qualifiées', items: ['Préqualification', 'Validation Budget', '0 Visite Inutile'] },
        ]}
        ctaLabel="Je choisis l'excellence"
        ctaTo="/estimation"
        note="Engagement social : Chaque vente soutient une association locale du Pays de Gex."
      />
    </div>

    <ServiceStyles />
  </>
);

/* ============================ MANDAT EXCLUSIF ============================ */

export const MandatExclusif: React.FC = () => (
  <>
    <SEO
      title="Mandat Exclusif | L'Excellence Immobilière — Mickaël Lima"
      description="Le Mandat Exclusif : production cinématographique, home staging, événements privés, diffusion internationale. Pour les biens d'exception dans le Pays de Gex qui méritent le meilleur."
      canonical="/mandat-exclusif"
      schema={MANDAT_EXCLUSIF_SCHEMA}
    />

    <div style={{ background: T.bg, fontFamily: T.body, color: T.dark }}>
      {/* HERO */}
      <ServiceHero
        badge="Prestige & Exception"
        title={
          <>
            Le Mandat <em style={{ fontStyle: 'italic' }}>Exclusif.</em>
          </>
        }
        subtitle="L'art de sublimer l'exceptionnel. Une production cinématographique pour une désirabilité sans égale."
        image="/images/mandat-exclusif-hero.jpg"
        ctaLabel="Candidater pour ce mandat"
        ctaTo="/contact"
      />

      {/* SECTION : Valorisation & Prestations */}
      <section style={{ ...wrap, padding: '90px 30px 100px' }}>
        <TwoCol
          left={
            <StickyIntro
              icon={<Gem size={26} />}
              title={
                <>
                  Au-delà des <em style={{ fontStyle: 'italic' }}>standards</em>
                </>
              }
              description={
                <>
                  Ce mandat inclut <strong style={{ color: T.dark, fontWeight: 600 }}>toutes les prestations du Mandat Signature</strong>,
                  enrichies par l'intervention d'un vidéaste professionnel dédié pour une narration émotionnelle.
                </>
              }
              detailedItems={[
                { title: 'Production Cinématographique', sub: 'Équipe de tournage dédiée' },
                { title: "Captation de l'essence", sub: 'Mise en lumière des détails' },
                { title: 'Storytelling Visuel', sub: 'Scénarisation sur-mesure' },
                { title: 'Diffusion Internationale', sub: 'Ciblage acquéreurs prestige' },
              ]}
              ctaLabel="Demander ce mandat"
              ctaTo="/contact"
            />
          }
          right={
            <WhiteCard>
              {/* Vidéo cinématographique */}
              <VideoBlock
                image={IMAGES.cardImage}
                label="Film Cinématographique (4K)"
                badgeIcon={<Star size={13} aria-hidden="true" />}
                badge="Production Exclusive"
                title="L'Art de Vivre"
              />

              {/* Teasers */}
              <div>
                <BlockTitle icon={<Share2 size={22} />}>Teasers Réseaux Sociaux</BlockTitle>
                <VerticalTiles label="Teaser" />
              </div>

              {/* Galerie Prestige */}
              <div>
                <BlockTitle icon={<Camera size={22} />}>Galerie Prestige</BlockTitle>
                <GalleryBlock
                  main={IMAGES.heroBg}
                  overlay="Vue Panoramique"
                  thumbs={[IMAGES.misc2, IMAGES.misc3, IMAGES.cardImage]}
                  thumbAlts={['Detail', 'Exterior', 'Night']}
                />
              </div>
            </WhiteCard>
          }
        />
      </section>

      <LogoMarquee />

      {/* RÉCAP */}
      <RecapBand
        badgeIcon={<Star size={13} aria-hidden="true" />}
        kicker="Le Sommet de l'Immobilier"
        title={
          <>
            L'Ultime <em style={{ fontStyle: 'italic' }}>Privilège</em>
          </>
        }
        description="Le Mandat Exclusif est notre promesse d'excellence absolue. Une mise en scène digne des plus grandes productions pour des biens qui ne méritent rien de moins."
        cards={[
          { icon: <Video size={24} />, title: 'Film Cinématographique', items: ['Équipe de Tournage', 'Storytelling', 'Étalonnage 4K'] },
          { icon: <Gem size={24} />, title: 'Diffusion Prestige', items: ['Portails Luxe', 'Ciblage International', 'Off-Market'] },
          { icon: <Star size={24} />, title: 'Événementiel', items: ['Soirée Privée (sur dmd)', 'Relations Publiques', 'Dossier Relié'] },
          { icon: <ShieldCheck size={24} />, title: 'Service Conciergerie', items: ['Accompagnement VIP', 'Confidentialité', 'Disponibilité 24/7'] },
        ]}
        ctaLabel="Candidature Confidentielle"
        ctaTo="/contact"
        note="Confidentialité absolue garantie sur l'ensemble de la démarche."
      />
    </div>

    <ServiceStyles />
  </>
);
