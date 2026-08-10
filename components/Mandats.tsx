import React from 'react';
import {
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
  Megaphone,
  Globe,
  BadgeCheck,
  Wallet,
  Image as ImageIcon,
  Sparkles,
} from 'lucide-react';
import { SEO } from './SEO';
import { IMAGES } from '../constants';
import { T } from './nosBiensShared';
import {
  wrap,
  ServiceHero,
  IconHeading,
  StickyIntro,
  WhiteCard,
  TwoCol,
  RecapBand,
  ServiceStyles,
} from './serviceUI';

/**
 * Pages service (mandats) — nouvelle DA reprise de /nos-biens :
 * fond clair, hero image sombre pleine largeur, cartes blanches radius 10,
 * titres Playfair Display, colonnes sticky, bandeau récapitulatif navy.
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

const PORTAILS = [
  { name: 'SeLoger', logo: '/images/seloger.png' },
  { name: 'Leboncoin', logo: '/images/leboncoin.png' },
  { name: 'Bien’ici', logo: '/images/bienici-logo.svg' },
  { name: 'Logic-Immo', logo: '/images/logo_logicimmo.png' },
  { name: 'Figaro Immo', logo: '/images/lefigaroimmo.png' },
  { name: 'LuxuryEstate', logo: '/images/logoluxuryestate.png' },
];

/* Petite carte statistique / feature dans la carte blanche */
const MiniCard: React.FC<{ icon: React.ReactNode; title: string; desc: string; tag?: string }> = ({
  icon,
  title,
  desc,
  tag,
}) => (
  <div style={{ background: T.bg, borderRadius: 8, padding: 24 }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
      <span aria-hidden="true" style={{ display: 'inline-flex', color: T.dark }}>{icon}</span>
      {tag && (
        <span
          style={{
            fontSize: 12, fontWeight: 500, color: T.dark, background: '#fff',
            border: `1px solid ${T.border}`, borderRadius: 50, padding: '5px 12px',
          }}
        >
          {tag}
        </span>
      )}
    </div>
    <h4 style={{ fontFamily: T.heading, fontWeight: 400, fontSize: 20, lineHeight: '1.25em', color: T.dark, marginBottom: 10 }}>
      {title}
    </h4>
    <p style={{ fontSize: 15, lineHeight: '1.6em', color: T.muted }}>{desc}</p>
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
      <ServiceHero
        badge="Performance & sérénité"
        title={<>Le Mandat Signature</>}
        subtitle="L'alliance de la technologie et de l'expertise humaine, pour une vente au meilleur prix et sans mauvaise surprise."
        image="/images/hero-main.jpg"
        ctaLabel="Demander une estimation"
        ctaTo="/estimation"
      />

      {/* 01 — Valorisation visuelle */}
      <section style={{ ...wrap, padding: '90px 30px 0' }}>
        <TwoCol
          left={
            <StickyIntro
              kicker="01 — Valorisation"
              title="Votre bien, mis en scène."
              description="Une stratégie visuelle complète pour capter l'attention partout. Nous créons une véritable identité pour votre bien, comme un produit premium."
              items={[
                'Photos professionnelles haute définition',
                'Vidéo drone 4K & film de présentation',
                'Visite virtuelle immersive',
                'Vidéos générées par IA',
                'Home staging virtuel',
                'Formats réseaux sociaux dédiés',
              ]}
              ctaLabel="Demander une estimation"
              ctaTo="/estimation"
            />
          }
          right={
            <WhiteCard>
              <div>
                <IconHeading icon={<Video size={22} />} title="Film de présentation 4K" />
                <div style={{ position: 'relative', aspectRatio: '16 / 9', borderRadius: 8, overflow: 'hidden', background: T.navy }}>
                  <img
                    src={IMAGES.videoBg}
                    alt="Film de présentation du bien en 4K"
                    loading="lazy"
                    decoding="async"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.75 }}
                  />
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
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
                  </span>
                </div>
              </div>

              <div>
                <IconHeading icon={<ImageIcon size={22} />} title="Photos professionnelles" />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="sv-grid-2">
                  {IMAGES.gallery.slice(0, 4).map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Exemple de photo professionnelle ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: 8, display: 'block' }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <IconHeading icon={<Wand2 size={22} />} title="Home staging virtuel" />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="sv-grid-2">
                  {[
                    { src: IMAGES.misc1, label: 'Avant' },
                    { src: IMAGES.misc5, label: 'Après (IA)' },
                  ].map(({ src, label }) => (
                    <div key={label} style={{ position: 'relative', borderRadius: 8, overflow: 'hidden' }}>
                      <img
                        src={src}
                        alt={`Home staging virtuel — ${label}`}
                        loading="lazy"
                        decoding="async"
                        style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', display: 'block' }}
                      />
                      <span
                        style={{
                          position: 'absolute', top: 12, left: 12, background: '#fff', color: T.dark,
                          fontSize: 13, fontWeight: 500, borderRadius: 8, padding: '6px 12px',
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

      {/* 02 — Diffusion massive */}
      <section style={{ ...wrap, padding: '90px 30px 0' }}>
        <TwoCol
          left={
            <StickyIntro
              kicker="02 — Diffusion"
              title="Omniprésence digitale."
              description="Votre bien ne doit pas être cherché, il doit être trouvé. Nous couvrons le marché pour toucher 100 % des acquéreurs actifs, en France comme en Suisse."
              ctaLabel="Demander une estimation"
              ctaTo="/estimation"
            />
          }
          right={
            <WhiteCard>
              <div>
                <IconHeading icon={<Globe size={22} />} title="+40 portails immobiliers" />
                <p style={{ fontSize: 16, lineHeight: '1.65em', color: T.muted, marginBottom: 24 }}>
                  Diffusion simultanée sur SeLoger, Leboncoin, Bien'ici, Logic-Immo, Figaro Immobilier,
                  Belles Demeures, LuxuryEstate et bien d'autres.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  {PORTAILS.map((p) => (
                    <span
                      key={p.name}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 10, background: T.bg,
                        borderRadius: 8, padding: '12px 16px', fontSize: 14, color: T.dark,
                      }}
                    >
                      <img
                        src={p.logo}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        decoding="async"
                        style={{ height: 18, width: 'auto', objectFit: 'contain' }}
                      />
                      {p.name}
                    </span>
                  ))}
                  <span
                    style={{
                      display: 'inline-flex', alignItems: 'center', background: T.dark, color: '#fff',
                      borderRadius: 8, padding: '12px 16px', fontSize: 14, fontWeight: 500,
                    }}
                  >
                    +35 autres
                  </span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="sv-grid-2">
                <MiniCard
                  icon={<Share2 size={22} />}
                  title="Réseaux sociaux"
                  desc="Instagram, Facebook, LinkedIn et TikTok, avec des formats pensés pour chaque plateforme."
                  tag="30k+ audience"
                />
                <MiniCard
                  icon={<Megaphone size={22} />}
                  title="Campagnes sponsorisées"
                  desc="Retargeting Google & Meta pour ne perdre aucun prospect ayant vu votre annonce."
                  tag="Active 24/7"
                />
              </div>
            </WhiteCard>
          }
        />
      </section>

      {/* 03 — Transparence */}
      <section style={{ ...wrap, padding: '90px 30px 0' }}>
        <TwoCol
          left={
            <StickyIntro
              kicker="03 — Transparence"
              title="Vous savez tout, tout le temps."
              description="Fini le silence radio. Des processus de suivi rigoureux font de vous un acteur de votre vente, sans le stress."
              items={[
                'Espace propriétaire en ligne',
                'Compte rendu après chaque visite',
                'Reporting hebdomadaire détaillé',
                'Groupe WhatsApp dédié',
              ]}
              ctaLabel="Demander une estimation"
              ctaTo="/estimation"
            />
          }
          right={
            <WhiteCard>
              <div>
                <IconHeading icon={<MessageSquare size={22} />} title="Espace propriétaire" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    {
                      when: "Aujourd'hui, 14:00",
                      title: 'Visite effectuée — M. & Mme Dupont',
                      body: "« Coup de cœur pour le salon, mais hésitation sur la cuisine. Souhaitent une contre-visite. »",
                    },
                    {
                      when: 'Hier',
                      title: "Offre d'achat reçue",
                      body: 'Offre au prix. Dossier de financement validé par le courtier.',
                    },
                  ].map((row) => (
                    <div key={row.title} style={{ background: T.bg, borderRadius: 8, padding: 20 }}>
                      <p style={{ fontSize: 13, color: T.muted, marginBottom: 8 }}>{row.when}</p>
                      <p style={{ fontSize: 16, fontWeight: 500, color: T.dark, marginBottom: 8 }}>{row.title}</p>
                      <p style={{ fontSize: 15, lineHeight: '1.6em', color: T.muted }}>{row.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="sv-grid-2">
                <MiniCard
                  icon={<Users size={22} />}
                  title="Fichier acquéreurs qualifié"
                  desc="Avant même la diffusion, votre bien est proposé à notre base de clients actifs et finançables."
                />
                <MiniCard
                  icon={<MessageSquare size={22} />}
                  title="Groupe WhatsApp dédié"
                  desc="Un fil de discussion direct avec votre agent, pour une communication fluide et instantanée."
                  tag="Réponse < 1h"
                />
              </div>
            </WhiteCard>
          }
        />
      </section>

      {/* 04 — Visites qualifiées */}
      <section style={{ ...wrap, padding: '90px 30px 100px' }}>
        <TwoCol
          left={
            <StickyIntro
              kicker="04 — Sécurité"
              title="Zéro tourisme immobilier."
              description="Nous protégeons votre intimité et votre temps. Seuls les acheteurs sérieux franchissent votre porte."
              ctaLabel="Demander une estimation"
              ctaTo="/estimation"
            />
          }
          right={
            <WhiteCard gap={14}>
              <MiniCard
                icon={<BadgeCheck size={22} />}
                title="Identité vérifiée"
                desc="Nous collectons la pièce d'identité de chaque visiteur avant la visite, pour une sécurité totale."
                tag="Essentiel"
              />
              <MiniCard
                icon={<Wallet size={22} />}
                title="Financement validé"
                desc="Étude de solvabilité obligatoire : pas de visite sans plan de financement clair et validé."
              />
              <MiniCard
                icon={<Target size={22} />}
                title="Projet mûr"
                desc="Nous qualifions la motivation et l'adéquation du projet pour éviter les visites de curiosité."
              />
            </WhiteCard>
          }
        />
      </section>

      <RecapBand
        kicker="L'excellence immobilière"
        title="Pourquoi choisir le Mandat Signature ?"
        description="Une approche globale qui fusionne technologie, marketing et expertise humaine pour des résultats exceptionnels."
        cards={[
          { icon: <Camera size={24} />, title: 'Valorisation visuelle', items: ['Photos pro & drone', 'Visite virtuelle', 'Vidéos IA'] },
          { icon: <Share2 size={24} />, title: 'Visibilité multi-canal', items: ['+40 portails', 'Réseaux sociaux', 'Campagnes Ads'] },
          { icon: <Users size={24} />, title: 'Acquéreurs & suivi', items: ['Fichier qualifié', 'Partage inter-agences', 'WhatsApp dédié'] },
          { icon: <Layout size={24} />, title: 'Visites qualifiées', items: ['Préqualification', 'Validation budget', '0 visite inutile'] },
        ]}
        ctaLabel="Je choisis l'excellence"
        ctaTo="/estimation"
        note="Engagement social : chaque vente soutient une association locale du Pays de Gex."
      />
    </div>

    <ServiceStyles />
  </>
);

/* ============================ MANDAT EXCLUSIF ============================ */

export const MandatExclusif: React.FC = () => (
  <>
    <SEO
      title="Mandat Exclusif | Biens d'Exception — Mickaël Lima Pays de Gex"
      description="Le Mandat Exclusif : production cinématographique, storytelling visuel, diffusion internationale et conciergerie dédiée pour les biens d'exception du Pays de Gex."
      canonical="/mandat-exclusif"
      schema={MANDAT_EXCLUSIF_SCHEMA}
    />

    <div style={{ background: T.bg, fontFamily: T.body, color: T.dark }}>
      <ServiceHero
        badge="Prestige & exception"
        title={<>Le Mandat Exclusif</>}
        subtitle="L'art de sublimer l'exceptionnel : une production cinématographique au service d'une désirabilité sans égale."
        image="/images/mandat-exclusif-hero.jpg"
        ctaLabel="Candidater pour ce mandat"
        ctaTo="/contact"
      />

      {/* 01 — Au-delà des standards */}
      <section style={{ ...wrap, padding: '90px 30px 0' }}>
        <TwoCol
          left={
            <StickyIntro
              kicker="01 — Prestations"
              title="Au-delà des standards."
              description={
                <>
                  Ce mandat inclut <strong style={{ color: T.dark, fontWeight: 600 }}>toutes les prestations du Mandat Signature</strong>,
                  enrichies par l'intervention d'un vidéaste professionnel dédié pour une narration émotionnelle.
                </>
              }
              items={[
                'Équipe de tournage dédiée',
                'Captation de l\'essence du lieu',
                'Mise en lumière des détails',
                'Scénarisation sur-mesure',
                'Diffusion internationale',
                'Ciblage acquéreurs prestige',
              ]}
              ctaLabel="Demander ce mandat"
              ctaTo="/contact"
            />
          }
          right={
            <WhiteCard>
              <div>
                <IconHeading icon={<Video size={22} />} title="Film cinématographique (4K)" />
                <div style={{ position: 'relative', aspectRatio: '16 / 9', borderRadius: 8, overflow: 'hidden', background: T.navy }}>
                  <img
                    src="/images/villa-fontaine-cour-lueur-du-soir_1167636-26973.jpg"
                    alt="Film cinématographique du bien en 4K"
                    loading="lazy"
                    decoding="async"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                  />
                  <span
                    aria-hidden="true"
                    style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <span
                      style={{
                        width: 68, height: 68, borderRadius: '50%', background: 'rgba(255,255,255,0.92)',
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      <Play size={26} color={T.dark} fill={T.dark} />
                    </span>
                  </span>
                  <span
                    style={{
                      position: 'absolute', top: 16, left: 16, background: '#fff', color: T.dark,
                      fontSize: 13, fontWeight: 500, borderRadius: 8, padding: '7px 14px',
                    }}
                  >
                    Production exclusive
                  </span>
                </div>
              </div>

              <div>
                <IconHeading icon={<Sparkles size={22} />} title="Teasers réseaux sociaux" />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }} className="sv-grid-3">
                  {IMAGES.gallery.slice(0, 3).map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Teaser vertical ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      style={{ width: '100%', aspectRatio: '9 / 16', objectFit: 'cover', borderRadius: 8, display: 'block' }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <IconHeading icon={<ImageIcon size={22} />} title="Galerie prestige" />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="sv-grid-2">
                  {[IMAGES.misc2, IMAGES.misc3, IMAGES.misc4, IMAGES.cardImage].map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Photo de prestige ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: 8, display: 'block' }}
                    />
                  ))}
                </div>
              </div>
            </WhiteCard>
          }
        />
      </section>

      {/* 02 — Diffusion & accompagnement */}
      <section style={{ ...wrap, padding: '90px 30px 100px' }}>
        <TwoCol
          left={
            <StickyIntro
              kicker="02 — Rayonnement"
              title="Une audience internationale."
              description="Votre bien s'adresse à une clientèle rare : dirigeants, expatriés, investisseurs. Nous allons la chercher là où elle se trouve, avec la discrétion qu'elle exige."
              ctaLabel="Candidater pour ce mandat"
              ctaTo="/contact"
            />
          }
          right={
            <WhiteCard gap={14}>
              <MiniCard
                icon={<Gem size={24} />}
                title="Portails de luxe & off-market"
                desc="Properstar, LuxuryEstate et réseau off-market : votre bien est présenté aux acquéreurs prestige, y compris sans publication ouverte."
              />
              <MiniCard
                icon={<Star size={24} />}
                title="Événementiel privé"
                desc="Soirée de présentation sur demande, relations publiques et dossier de vente relié, imprimé en édition limitée."
              />
              <MiniCard
                icon={<ShieldCheck size={24} />}
                title="Conciergerie & confidentialité"
                desc="Accompagnement VIP, disponibilité permanente et confidentialité absolue sur l'ensemble de la démarche."
                tag="24/7"
              />
            </WhiteCard>
          }
        />
      </section>

      <RecapBand
        kicker="Le sommet de l'immobilier"
        title="L'ultime privilège."
        description="Le Mandat Exclusif est notre promesse d'excellence absolue : une mise en scène digne des plus grandes productions, pour des biens qui ne méritent rien de moins."
        cards={[
          { icon: <Video size={24} />, title: 'Film cinématographique', items: ['Équipe de tournage', 'Storytelling', 'Étalonnage 4K'] },
          { icon: <Gem size={24} />, title: 'Diffusion prestige', items: ['Portails luxe', 'Ciblage international', 'Off-market'] },
          { icon: <Star size={24} />, title: 'Événementiel', items: ['Soirée privée (sur dmd)', 'Relations publiques', 'Dossier relié'] },
          { icon: <ShieldCheck size={24} />, title: 'Service conciergerie', items: ['Accompagnement VIP', 'Confidentialité', 'Disponibilité 24/7'] },
        ]}
        ctaLabel="Candidature confidentielle"
        ctaTo="/contact"
        note="Confidentialité absolue garantie sur l'ensemble de la démarche."
      />
    </div>

    <ServiceStyles />
  </>
);
