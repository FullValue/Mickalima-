import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LazyMotion, domAnimation, AnimatePresence, m } from 'framer-motion';
import { SEO } from './components/SEO';

// domAnimation importé en sync : le loader async cassait le SSG
// (LazyMotion suspendait le rendu, fallback HomePage sur toutes les routes).
// Trade-off : +~25KB dans le bundle initial vs SSG fonctionnel.
import { Navbar } from './components/Navbar';
import { MandatSignature, MandatExclusif } from './components/Mandats';
import { About } from './components/About';
import { NosBiens } from './components/NosBiens';
import { NosBiensDetail } from './components/NosBiensDetail';
import { Partners } from './components/Partners';
import { Blog } from './components/Blog';
import { BlogPostPage } from './components/BlogPostPage';
import { ContactPage } from './components/ContactPage';
import { Estimation } from './components/Contact';
import { CommuneEstimationPage } from './components/CommuneEstimationPage';
import { PrixImmobilierPage } from './components/PrixImmobilierPage';
import { PrixImmobilierPaysDeGex } from './components/PrixImmobilierPaysDeGex';
import { FrontalierCommunePage } from './components/FrontalierCommunePage';
import { MentionsLegales } from './components/MentionsLegales';
import { PolitiqueConfidentialite } from './components/PolitiqueConfidentialite';
import { RevalisFooter } from './components/nosBiensShared';
import { Preloader } from './components/Preloader';
// Refonte accueil « Oakline » — voir ref/oakline-reconstruction.md
import { HeroShowcase } from './components/oakline/HeroShowcase';
import { StatsBand } from './components/oakline/StatsBand';
import { AboutTeaser } from './components/oakline/AboutTeaser';
import { TestimonialsShowcase } from './components/oakline/TestimonialsShowcase';
import { NeighborhoodsGrid } from './components/oakline/NeighborhoodsGrid';
import { PortalsParallax } from './components/oakline/PortalsParallax';
import { InsightsTeaser } from './components/oakline/InsightsTeaser';
import { CtaContact } from './components/oakline/CtaContact';
import { FaqAccordion } from './components/oakline/FaqAccordion';
import { SiteFooter } from './components/oakline/SiteFooter';
import { WhatsAppButton } from './components/oakline/WhatsAppButton';

const HOMEPAGE_SCHEMA = [
  {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    name: 'Mickaël Lima — L’agence Immo',
    description:
      'Agent immobilier prestige spécialisé dans le Pays de Gex et la clientèle frontalière genevoise. Expertise en vente de biens résidentiels haut de gamme, estimation gratuite, diffusion sur +40 portails.',
    url: 'https://mickael-lima.immo',
    telephone: '+33769313502',
    email: 'contact@mickael-lima.immo',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '328 Rue des Fontanettes',
      addressLocality: 'Divonne-les-Bains',
      postalCode: '01220',
      addressRegion: 'Ain',
      addressCountry: 'FR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 46.3578, longitude: 6.1425 },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Pays de Gex' },
      { '@type': 'AdministrativeArea', name: 'Ain' },
      { '@type': 'City', name: 'Divonne-les-Bains' },
      { '@type': 'City', name: 'Ferney-Voltaire' },
      { '@type': 'City', name: 'Saint-Genis-Pouilly' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services Immobiliers',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vente Immobilière' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Estimation Gratuite' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mandat Exclusif' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mandat Signature' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gestion Locative' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Staging' } },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '25',
      bestRating: '5',
      worstRating: '1',
    },
    employee: {
      '@type': 'Person',
      name: 'Mickaël Lima Dos Santos',
      jobTitle: 'Agent Commercial Immobilier',
      description: "8 ans d'expérience en promotion immobilière et prospection foncière dans le Pays de Gex (240 ventes sur les 5 dernières années)",
      telephone: '+33769313502',
      email: 'contact@mickael-lima.immo',
      worksFor: { '@type': 'Organization', name: 'L’agence Immo' },
    },
    priceRange: '€€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Virement bancaire, Chèque',
    sameAs: [
      'https://www.linkedin.com/in/mickael-lima-dos-santos-97137419b/',
      'https://share.google/fvsAyaT6pI2059MZF',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mickaël Lima',
    jobTitle: 'Agent commercial immobilier',
    worksFor: {
      '@type': 'Organization',
      name: 'L’agence Immo',
      url: 'https://www.lagenceimmo01.fr',
    },
    knowsAbout: [
      'Immobilier Pays de Gex',
      'Marché frontalier franco-suisse',
      'Estimation immobilière',
      'Immobilier CERN expatriés',
      'Immobilier de prestige',
    ],
    sameAs: ['https://www.linkedin.com/in/mickael-lima-dos-santos-97137419b/'],
  },
];

const HomePage: React.FC = () => (
  <>
    <SEO
      title="Mickaël Lima — Agent Immobilier Prestige | Pays de Gex"
      description="Agent immobilier prestige dans le Pays de Gex. Estimation gratuite, diffusion sur +40 portails immobiliers, clientèle frontalière genevoise et internationale. Vendez au meilleur prix."
      canonical="/"
      schema={HOMEPAGE_SCHEMA}
    />
    {/* Ordre Oakline — cf. ref/oakline-reconstruction.md §4 */}
    <HeroShowcase />
    <StatsBand />
    <AboutTeaser />
    <TestimonialsShowcase />
    <NeighborhoodsGrid />
    <PortalsParallax />
    <InsightsTeaser />
    <CtaContact />
    <FaqAccordion />
  </>
);

export const AppContent: React.FC = () => {
  const location = useLocation();
  // Route réellement affichée (l'ancienne page reste montée pendant sa sortie)
  const [displayedPath, setDisplayedPath] = useState(location.pathname);
  // Pas d'animation d'entrée du wrapper au tout premier rendu (SSG visible immédiatement),
  // mais on n'utilise PAS initial={false} sur AnimatePresence : cela neutraliserait les
  // animations initial/whileInView de toutes les pages au premier chargement.
  const isFirstRoute = useRef(true);
  useEffect(() => { isFirstRoute.current = false; }, []);

  // /nos-biens et ses pages détail embarquent le footer DA Revalis (non modifié) —
  // dès qu'une des deux routes (affichée ou cible) est concernée, on rend uniquement
  // RevalisFooter pour éviter le double footer pendant la transition.
  // Toutes les autres routes utilisent le nouveau SiteFooter (refonte Oakline).
  const hasOwnFooter =
    location.pathname.startsWith('/nos-biens') || displayedPath.startsWith('/nos-biens');
  return (
  <LazyMotion features={domAnimation}>
    <Preloader />
    <WhatsAppButton />
    <div className="font-sans text-textMain antialiased flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Transition douce entre les routes : sortie en fondu pur (pas de translation,
            les surfaces backdrop-blur ré-échantillonneraient à chaque frame), entrée
            fondu + léger glissement. Scroll remis en haut quand l'ancienne page est partie. */}
        <AnimatePresence
          mode="wait"
          onExitComplete={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
            setDisplayedPath(location.pathname);
          }}
        >
        <m.div
          key={location.pathname}
          initial={isFirstRoute.current ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/mandat-signature" element={<MandatSignature />} />
          <Route path="/mandat-exclusif" element={<MandatExclusif />} />
          <Route path="/nos-biens" element={<NosBiens />} />
          <Route path="/nos-biens/:slug" element={<NosBiensDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/partenaires" element={<Partners />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/estimation" element={<Estimation />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/:commune/estimation-immobiliere" element={<CommuneEstimationPage />} />
          <Route path="/prix-immobilier/pays-de-gex" element={<PrixImmobilierPaysDeGex />} />
          <Route path="/prix-immobilier/:commune" element={<PrixImmobilierPage />} />
          <Route path="/frontalier/:commune" element={<FrontalierCommunePage />} />
        </Routes>
        </m.div>
        </AnimatePresence>
      </main>
      {hasOwnFooter ? <RevalisFooter /> : <SiteFooter />}
    </div>
  </LazyMotion>
  );
};
