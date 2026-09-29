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
} from 'lucide-react';
import { m } from 'framer-motion';
import { SEO } from './SEO';
import { T } from './nosBiensShared';
import { wrap, ServiceHero, StickyIntro, WhiteCard, TwoCol, RecapBand, ServiceStyles } from './serviceUI';

/**
 * Pages service (mandats): nouvelle DA reprise de /nos-biens :
 * fond clair, hero image sombre pleine largeur, cartes blanches sobres,
 * titres Playfair Display, colonnes sticky, bandeau récapitulatif navy.
 * Les prestations sont présentées avec la même DA que l'accueil et le catalogue.
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
    'Mandat de vente avec présentation visuelle, diffusion adaptée au bien, visites préparées et suivi du projet.',
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
    'Mandat exclusif pour biens d’exception : présentation soignée, stratégie de diffusion adaptée et accompagnement personnalisé.',
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
  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
    <span aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, flexShrink: 0, borderRadius: 10, background: T.bg, color: T.navy }}>{icon}</span>
    <h3 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 27, lineHeight: '1.2em', color: T.navy }}>
      {children}
    </h3>
  </div>
);

/* Visuel éditorial pour illustrer la présentation d'un bien. */
const VideoBlock: React.FC<{
  image: string;
  videoSrc?: string;
  label: string;
  badgeIcon: React.ReactNode;
  badge: string;
  title: string;
}> = ({ image, videoSrc, label, badgeIcon, badge, title }) => (
  <div className="sv-media" style={{ position: 'relative', aspectRatio: '16 / 9', borderRadius: 16, overflow: 'hidden', background: T.navy }}>
    {videoSrc ? (
      <video
        src={videoSrc}
        poster={image}
        controls
        playsInline
        preload="metadata"
        aria-label={label}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
    ) : (
      <img
        src={image}
        alt={`${title}, visuel d’illustration`}
        loading="lazy"
        decoding="async"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
    )}
    {!videoSrc && (
      <>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(1,29,65,0.85), transparent 70%)' }} />
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
      <span style={{ display: 'block', marginTop: 8, fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>Visuel d’illustration</span>
        </div>
      </>
    )}
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
    style={{ background: '#fff', border: `1px solid ${T.border}`, borderRadius: 14, padding: 'clamp(24px, 2.5vw, 32px)' }}>
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

/* Titre de section centré (sections 02 et 04) */
const CenteredHeading: React.FC<{
  icon: React.ReactNode;
  kicker: string;
  title: React.ReactNode;
  desc: string;
}> = ({ icon, kicker, title, desc }) => (
  <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto 48px' }}>
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, color: T.dark, marginBottom: 22,
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
      description="Le Mandat Signature : une présentation soignée, une diffusion adaptée et des visites préparées pour vendre votre bien dans le Pays de Gex."
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
                image="/images/services/villa-prestige.jpg"
                label="Présentation visuelle d'un bien"
                badgeIcon={<Camera size={13} aria-hidden="true" />}
                badge="Film & immersion"
                title="Une histoire à raconter"
              />

              <div>
                <BlockTitle icon={<Camera size={22} />}>Une présentation qui donne envie</BlockTitle>
                <figure style={{ margin: 0 }}>
                  <img
                    src="/images/services/visite-maison.jpg"
                    alt="Intérieur lumineux ouvert sur le paysage, visuel d’illustration"
                    loading="lazy"
                    decoding="async"
                    style={{ display: 'block', width: '100%', aspectRatio: '16 / 9', objectFit: 'cover', borderRadius: 12 }}
                  />
                  <figcaption style={{ marginTop: 10, fontSize: 12, color: T.muted }}>Visuel d’illustration</figcaption>
                </figure>
                <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.65, color: T.muted }}>
                  Photographies, film et formats courts racontent les atouts du lieu avec la même exigence de cadrage.
                  La visite virtuelle et le home staging sont proposés selon le bien.
                </p>
              </div>
            </WhiteCard>
          }
        />
      </section>

      {/* SECTION 2 : Visibilité Multi-Canal */}
      <section style={{ ...wrap, padding: '100px 30px 0' }}>
        <CenteredHeading
          icon={<Target size={15} aria-hidden="true" />}
          kicker="02. Diffusion"
          title={
            <>
              Une visibilité <em style={{ fontStyle: 'italic' }}>choisie</em>
            </>
          }
          desc="Une diffusion choisie pour faire rencontrer votre bien et les acquéreurs qui lui correspondent."
        />

        <div className="sv-bento" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          <div style={{ gridColumn: 'span 2' }} className="sv-bento-wide">
            <Panel
              icon={<Share2 size={26} />}
              title="Portails immobiliers"
              desc="Diffusion sur les plateformes pertinentes pour votre bien et votre marché."
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
            desc="Instagram, Facebook, LinkedIn, TikTok."
          />

          <div style={{ gridColumn: 'span 3' }} className="sv-bento-wide">
            <Panel
              icon={<Target size={26} />}
              title="Campagnes Sponsorisées (Ads)"
              desc="Des campagnes ciblées peuvent prolonger la visibilité du bien selon le projet et son marché."
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 : Acquéreurs & Suivi */}
      <section style={{ ...wrap, padding: '100px 30px 0' }}>
        <TwoCol
          left={
            <figure className="sv-sticky" style={{ position: 'sticky', top: 100, margin: 0 }}>
              <img
                src="/images/services/conseil-immobilier.jpg"
                alt="Échange autour d’un projet immobilier dans un salon lumineux, visuel d’illustration"
                loading="lazy"
                decoding="async"
                style={{ display: 'block', width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', borderRadius: 16 }}
              />
              <figcaption style={{ marginTop: 12, fontSize: 12, color: T.muted }}>Visuel d’illustration</figcaption>
            </figure>
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
                <Layout size={15} aria-hidden="true" /> 03. Suivi
              </span>
              <h2
                style={{
                  fontFamily: T.heading, fontWeight: 400, fontSize: 'clamp(34px, 3.6vw, 52px)',
                  lineHeight: '1.08em', color: T.dark, marginBottom: 20,
                }}
              >
                Un suivi <em style={{ fontStyle: 'italic' }}>clair.</em>
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
          kicker="04. Visites"
          title={
            <>
              Des visites <em style={{ fontStyle: 'italic' }}>qualifiées</em>
            </>
          }
          desc="Chaque visite se prépare en amont pour préserver votre temps et présenter le bien dans les meilleures conditions."
        />

        <div className="sv-visits" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 24, alignItems: 'stretch' }}>
          <figure style={{ margin: 0, position: 'relative', overflow: 'hidden', borderRadius: 16 }}>
            <img src="/images/services/visite-maison.jpg" alt="Intérieur ouvert sur le paysage, visuel d’illustration" loading="lazy" decoding="async" style={{ display: 'block', width: '100%', height: '100%', minHeight: 420, objectFit: 'cover', borderRadius: 16 }} />
            <figcaption style={{ position: 'absolute', bottom: 14, left: 16, color: '#fff', fontSize: 11, textShadow: '0 1px 5px rgba(0,0,0,.75)' }}>Visuel d’illustration</figcaption>
          </figure>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Panel icon={<ShieldCheck size={26} />} title="Premier échange" desc="Nous échangeons sur le projet de l'acquéreur avant d'organiser la visite." />
            <Panel icon={<Check size={26} />} title="Budget abordé" desc="Le financement est discuté en amont pour vérifier l'adéquation avec le prix du bien." />
            <Panel icon={<Target size={26} />} title="Visite préparée" desc="Les points forts du logement et les questions pratiques sont présentés avec soin." />
          </div>
        </div>
      </section>

      {/* RÉCAP */}
      <RecapBand
        badgeIcon={<Star size={13} aria-hidden="true" />}
        kicker="Notre méthode"
        title={
          <>
            Pourquoi choisir le <em style={{ fontStyle: 'italic' }}>Mandat Signature ?</em>
          </>
        }
        description="Une présentation juste, une diffusion adaptée et un dialogue continu à chaque étape de la vente."
        cards={[
          { icon: <Camera size={24} />, title: 'Valorisation Visuelle', items: ['Photos Pro & Drone', 'Visite Virtuelle', 'Vidéos IA'] },
          { icon: <Share2 size={24} />, title: 'Diffusion ciblée', items: ['Portails immobiliers', 'Réseaux sociaux', 'Canaux adaptés'] },
          { icon: <Users size={24} />, title: 'Acquéreurs & Suivi', items: ['Fichier Qualifié', 'Partage Inter-agence', 'WhatsApp dédié'] },
          { icon: <Layout size={24} />, title: 'Visites Qualifiées', items: ['Premier échange', 'Budget abordé', 'Visite préparée'] },
        ]}
        ctaLabel="Parlons de votre projet"
        ctaTo="/estimation"
        image="/images/services/conseil-immobilier.jpg"
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
      description="Le Mandat Exclusif : une présentation sur mesure et une stratégie de vente pensée pour les biens d’exception du Pays de Gex."
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
        subtitle="Une présentation sensible et une stratégie de vente pensée pour chaque propriété."
        image="/images/mandat-exclusif-hero.jpg"
        ctaLabel="Parlons de votre bien"
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
              <VideoBlock
                image="/images/services/villa-prestige.jpg"
                label="Présentation d’un bien d’exception"
                badgeIcon={<Star size={13} aria-hidden="true" />}
                badge="Présentation sur mesure"
                title="L’art de vivre"
              />
              <div style={{ borderTop: `1px solid ${T.border}`, paddingTop: 30 }}>
                <BlockTitle icon={<Camera size={22} />}>Une mise en scène singulière</BlockTitle>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: T.muted, marginBottom: 20 }}>
                  Le film, les photographies et les formats courts sont pensés ensemble pour révéler
                  l’architecture, les volumes et l’atmosphère du lieu.
                </p>
                <div className="sv-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
                  {['Direction artistique', 'Film dédié', 'Diffusion ciblée'].map((item, index) => (
                    <div key={item} style={{ borderTop: `1px solid ${T.border}`, paddingTop: 12 }}>
                      <span style={{ display: 'block', fontFamily: T.heading, fontSize: 22, color: T.dark, marginBottom: 5 }}>0{index + 1}</span>
                      <span style={{ fontSize: 13, lineHeight: 1.5, color: T.muted }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </WhiteCard>
          }
        />
      </section>

      {/* RÉCAP */}
      <RecapBand
        badgeIcon={<Star size={13} aria-hidden="true" />}
        kicker="Un accompagnement sur mesure"
        title={
          <>
            Révéler ce qui rend votre bien <em style={{ fontStyle: 'italic' }}>unique.</em>
          </>
        }
        description="Une présentation soignée, un accompagnement direct et une diffusion adaptée au caractère de votre propriété."
        cards={[
          { icon: <Video size={24} />, title: 'Film Cinématographique', items: ['Équipe de Tournage', 'Storytelling', 'Étalonnage 4K'] },
          { icon: <Gem size={24} />, title: 'Diffusion Prestige', items: ['Portails Luxe', 'Ciblage International', 'Off-Market'] },
          { icon: <Star size={24} />, title: 'Événementiel', items: ['Soirée Privée (sur dmd)', 'Relations Publiques', 'Dossier Relié'] },
          { icon: <ShieldCheck size={24} />, title: 'Accompagnement', items: ['Interlocuteur dédié', 'Confidentialité', 'Suivi personnalisé'] },
        ]}
        ctaLabel="Échanger sur votre projet"
        ctaTo="/contact"
        note="Le niveau de confidentialité est défini avec vous dès le premier échange."
        image="/images/services/conseil-immobilier.jpg"
      />
    </div>

    <ServiceStyles />
  </>
);
