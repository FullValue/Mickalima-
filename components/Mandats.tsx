import React from 'react';
import {
  Check,
  Camera,
  Share2,
  Users,
  Layout,
  Star,
  Gem,
  ShieldCheck,
  MessageSquare,
  Target,
} from 'lucide-react';
import { m, useReducedMotion } from 'framer-motion';
import { SEO } from './SEO';
import { SignatureMediaBento } from './SignatureMediaBento';
import { SignatureClientGallery } from './SignatureClientGallery';
import { ExclusifClosingSection } from './ExclusifClosingSection';
import { IMAGES } from '../constants';
import { T } from './nosBiensShared';
import { wrap, ServiceHero, StickyIntro, WhiteCard, TwoCol, RecapBand, ServiceStyles } from './serviceUI';

/**
 * Pages service (mandats): nouvelle DA reprise de /nos-biens :
 * fond clair, hero image sombre pleine largeur, cartes blanches sobres,
 * titres Instrument Sans, colonnes sticky, bandeau récapitulatif navy.
 * Les sections médias, diffusion, suivi et visites restent détaillées.
 */

const MANDAT_PROVIDER = {
  '@type': 'RealEstateAgent',
  name: 'Mickaël Lima',
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
  name: 'Mandat Signature: Vente immobilière Pays de Gex',
  serviceType: 'Real estate sale mandate',
  provider: MANDAT_PROVIDER,
  areaServed: MANDAT_AREA,
  description:
    'Mandat de vente avec photos, film de présentation, formats courts, diffusion adaptée au bien, visites préparées et suivi du projet.',
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
  name: 'Mandat Exclusif: Vente prestige Pays de Gex',
  serviceType: 'Premium real estate exclusive mandate',
  provider: MANDAT_PROVIDER,
  areaServed: MANDAT_AREA,
  description:
    'Mandat exclusif pour biens d’exception : film de présentation, galerie photo, formats courts et stratégie de diffusion sur mesure.',
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
  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 22 }}>
    <span aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 46, height: 46, flexShrink: 0, borderRadius: '50%', background: '#f5f5f5', color: T.navy }}>{icon}</span>
    <h3 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 28, lineHeight: '1.2em', color: T.navy }}>
      {children}
    </h3>
  </div>
);

/* Le lecteur est affiché uniquement lorsqu'un vrai fichier vidéo existe. */
const VideoBlock: React.FC<{
  image: string;
  videoSrc?: string;
  label: string;
  badgeIcon: React.ReactNode;
  badge: string;
  title: string;
}> = ({ image, videoSrc, label, badgeIcon, badge, title }) => (
  <div>
  <div className="sv-media" style={{ position: 'relative', aspectRatio: videoSrc ? '9 / 16' : '16 / 9', maxWidth: videoSrc ? 350 : undefined, margin: '0 auto', borderRadius: 24, overflow: 'hidden', background: T.navy }}>
    {videoSrc ? (
      <video
        src={videoSrc}
        controls
        playsInline
        preload="metadata"
        aria-label={label}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }}
      />
    ) : (
      <img src={image} alt={title} loading="lazy" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
    )}
    {!videoSrc && (
      <>
    <div
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(1,29,65,0.85), rgba(1,29,65,0.15))' }}
    />
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
      </>
    )}
  </div>
  {videoSrc && <p style={{ marginTop: 12, fontSize: 13, textAlign: 'center', color: T.muted }}>{label} · format vertical</p>}
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
    <div className="sv-media" style={{ position: 'relative', aspectRatio: '21 / 9', borderRadius: 24, overflow: 'hidden' }}>
      <img
        src={main}
        alt="Exemple de photographie immobilière"
        loading="lazy"
        decoding="async"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div
        style={{
          position: 'absolute', bottom: 16, left: 16, background: 'rgba(1,29,65,0.78)',
          color: '#fff', fontSize: 13, borderRadius: 50, padding: '8px 16px',
        }}
      >
        {overlay}
      </div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }} className="sv-grid-3">
      {thumbs.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={thumbAlts[idx]}
          loading="lazy"
          decoding="async"
          style={{ width: '100%', aspectRatio: '16 / 9', objectFit: 'cover', borderRadius: 16, display: 'block' }}
        />
      ))}
    </div>
  </div>
);

/* Aperçus des formats courts, sans fausse commande de lecture. */
const VerticalTiles: React.FC<{ label: string }> = ({ label }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }} className="sv-grid-3">
    {[IMAGES.misc1, IMAGES.misc2, IMAGES.misc3].map((image, i) => (
      <div key={i} className="sv-media" style={{ position: 'relative', aspectRatio: '9 / 16', borderRadius: 8, overflow: 'hidden' }}>
        <img
          src={image}
          alt={`${label} ${i + 1}, exemple de cadrage vertical`}
          loading="lazy"
          decoding="async"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(1,29,65,0.8), transparent 55%)' }}
        />
        <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, color: '#fff' }}>
          <span style={{ display: 'block', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5 }}>
            {label} {i + 1} · exemple de format
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
  <m.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    style={{ background: '#fff', borderRadius: 10, padding: 32 }}>
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
  </m.div>
);

/* Bandeau de logos défilant (identique à l'ancienne version) */
const LogoMarquee: React.FC = () => {
  const reduced = useReducedMotion();
  return (
  <div style={{ background: T.navy, padding: '26px 0', overflow: 'hidden', position: 'relative' }}>
    <m.div
      style={{ display: 'flex', gap: 96, alignItems: 'center', flexWrap: 'nowrap', minWidth: 'max-content' }}
      animate={reduced ? undefined : { x: ['0%', '-50%'] }}
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
};

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
      title="Mandat Signature | Vendez Mieux: Mickaël Lima Pays de Gex"
      description="Le Mandat Signature réunit photos, film de présentation, formats courts, diffusion adaptée au bien et suivi des visites dans le Pays de Gex."
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
        subtitle="Des images soignées, une diffusion adaptée et un accompagnement attentif pour présenter votre bien."
        image="/images/hero-main.jpg"
        ctaLabel="Demander une estimation"
        ctaTo="/estimation"
      />

      <SignatureMediaBento />

      {/* SECTION 2 : Visibilité Multi-Canal */}
      <section style={{ ...wrap, padding: '100px 30px 0' }}>
        <CenteredHeading
          icon={<Target size={15} aria-hidden="true" />}
          kicker="02. Diffusion ciblée"
          title={
            <>
              Omniprésence <em style={{ fontStyle: 'italic' }}>Digitale</em>
            </>
          }
          desc="Chaque bien bénéficie d’une sélection de canaux de diffusion selon son positionnement et les acquéreurs recherchés."
        />

        <div className="sv-bento" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          <div style={{ gridColumn: 'span 2' }} className="sv-bento-wide">
            <Panel
              icon={<Share2 size={26} />}
              title="Portails immobiliers"
              desc="Présence sur les principales plateformes immobilières, avec une sélection adaptée au bien et au mandat."
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 26 }}>
                {PORTAIL_LOGOS.map((logo) => (
                  <a
                    key={logo.alt}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={logo.title}
                    className="sv-portail"
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
              </div>
            </Panel>
          </div>

          <Panel
            icon={<Share2 size={26} />}
            title="Réseaux Sociaux"
            desc="Des formats courts pour présenter les points forts du bien sur les réseaux sociaux retenus pour sa diffusion."
          />

          <div style={{ gridColumn: 'span 3' }} className="sv-bento-wide">
            <Panel
              icon={<Target size={26} />}
              title="Campagnes Sponsorisées (Ads)"
              desc="Des campagnes ciblées peuvent compléter la diffusion, selon la stratégie convenue pour le bien."
              tag="Selon le projet"
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
                      alt="Mickaël Lima"
                      loading="lazy"
                      decoding="async"
                      style={{ width: 52, height: 52, borderRadius: 8, objectFit: 'cover' }}
                    />
                    <div>
                      <p style={{ fontSize: 17, fontWeight: 500, color: T.dark }}>Suivi propriétaire</p>
                      <p style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, color: T.muted, marginTop: 5 }}>Exemple de compte rendu</p>
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
                      01
                    </span>
                    <div style={{ background: T.bg, borderRadius: 8, padding: 18, flex: 1 }}>
                      <p style={{ fontSize: 16, fontWeight: 500, color: T.dark, marginBottom: 8 }}>
                        Retour après une visite
                      </p>
                      <p style={{ fontSize: 15, lineHeight: '1.6em', color: T.muted }}>
                        Points appréciés, questions soulevées et prochaines étapes sont partagés avec vous.
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
                      02
                    </span>
                    <div style={{ background: T.bg, borderRadius: 8, padding: 18, flex: 1, borderLeft: '3px solid #22c55e' }}>
                      <p style={{ fontSize: 16, fontWeight: 500, color: T.dark, marginBottom: 8 }}>Point sur la diffusion</p>
                      <p style={{ fontSize: 15, lineHeight: '1.6em', color: T.muted }}>
                        Un bilan régulier aide à ajuster la présentation et les canaux de communication.
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
                      Votre interlocuteur
                    </p>
                    <p style={{ fontSize: 17, fontWeight: 500, color: T.dark }}>Un suivi direct</p>
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
                Vous suivez chaque <em style={{ fontStyle: 'italic' }}>étape.</em>
              </h2>
              <p style={{ fontSize: 17, lineHeight: '1.7em', color: T.muted, marginBottom: 36 }}>
                Comptes rendus, retours de visites et prochaines actions sont partagés au fil de la vente.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <Panel
                  icon={<Users size={26} />}
                  title="Fichier Acquéreurs Qualifié"
                  desc="Nous pouvons présenter votre bien à des acquéreurs dont le projet correspond à ses caractéristiques."
                />
                <Panel
                  icon={<MessageSquare size={26} />}
                  title="Groupe WhatsApp Dédié"
                  desc="Un échange direct avec votre agent pour suivre les questions et les étapes du projet."
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
              Des visites <em style={{ fontStyle: 'italic' }}>préparées</em>
            </>
          }
          desc="Les échanges en amont permettent de mieux comprendre le projet des acquéreurs et d’organiser les visites avec soin."
        />

        <div className="sv-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          <Panel
            icon={<ShieldCheck size={26} />}
            title="Prise de contact"
            desc="Nous échangeons avec les candidats avant une visite pour comprendre leur recherche et répondre aux premières questions."
          />
          <Panel
            icon={<Check size={26} />}
            title="Budget abordé"
            desc="Le budget et les modalités de financement sont discutés au moment opportun, avec respect de la confidentialité."
            tag="Essentiel"
          />
          <Panel
            icon={<Target size={26} />}
            title="Projet Mûr"
            desc="Nous vérifions que les attentes exprimées correspondent au bien avant de proposer une visite."
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
        description="Une présentation soignée, une diffusion pensée pour le bien et un suivi régulier de votre vente."
        cards={[
          { icon: <Camera size={24} />, title: 'Valorisation Visuelle', items: ['Photos Pro & Drone', 'Visite Virtuelle', 'Vidéos IA'] },
          { icon: <Share2 size={24} />, title: 'Visibilité Multi-Canal', items: ['Portails immobiliers', 'Réseaux sociaux', 'Campagnes selon le projet'] },
          { icon: <Users size={24} />, title: 'Acquéreurs & Suivi', items: ['Fichier Qualifié', 'Partage Inter-agence', 'WhatsApp dédié'] },
          { icon: <Layout size={24} />, title: 'Visites Préparées', items: ['Échanges préalables', 'Projet et budget abordés', 'Retours de visite'] },
        ]}
        ctaLabel="Je choisis l'excellence"
        ctaTo="/estimation"
        note="Les prestations précises sont détaillées dans le mandat et adaptées au bien."
        media={<SignatureClientGallery />}
      />
    </div>

    <ServiceStyles />
  </>
);

/* ============================ MANDAT EXCLUSIF ============================ */

export const MandatExclusif: React.FC = () => (
  <>
    <SEO
      title="Mandat Exclusif | L'Excellence Immobilière: Mickaël Lima"
      description="Le Mandat Exclusif propose une présentation visuelle soignée, des formats vidéo et une stratégie de diffusion sur mesure pour les biens d'exception dans le Pays de Gex."
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
        subtitle="Une mise en valeur soignée et une stratégie dédiée aux biens d’exception."
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
                  avec une production visuelle et une diffusion adaptées aux biens d’exception.
                </>
              }
              detailedItems={[
                { title: 'Film de présentation', sub: 'Un récit visuel pensé pour le bien' },
                { title: "Captation de l'essence", sub: 'Mise en lumière des détails' },
                { title: 'Storytelling Visuel', sub: 'Scénarisation sur-mesure' },
                { title: 'Diffusion sur mesure', sub: 'Ciblage adapté aux acquéreurs recherchés' },
              ]}
              ctaLabel="Demander ce mandat"
              ctaTo="/contact"
            />
          }
          right={
            <WhiteCard>
              {/* Vidéo cinématographique */}
              <VideoBlock
                image={IMAGES.misc2}
                videoSrc="/video/villa-grilly-hero.mp4"
                label="Exemple de film immobilier : villa à Grilly"
                badgeIcon={<Star size={13} aria-hidden="true" />}
                badge="Exemple de réalisation"
                title="Film de présentation"
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
                  overlay="Sélection de photographies"
                  thumbs={[IMAGES.misc2, IMAGES.misc3, IMAGES.cardImage]}
                  thumbAlts={['Exemple de photographie immobilière', 'Exemple de vue extérieure', 'Exemple de bien de prestige']}
                />
              </div>
            </WhiteCard>
          }
        />
      </section>

      <LogoMarquee />

      {/* RÉCAP */}
      <ExclusifClosingSection />
    </div>

    <ServiceStyles />
  </>
);
