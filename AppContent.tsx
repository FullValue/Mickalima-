import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LazyMotion, domAnimation } from 'framer-motion';
import { SEO } from './components/SEO';

// domAnimation importé en sync : le loader async cassait le SSG
// (LazyMotion suspendait le rendu, fallback HomePage sur toutes les routes).
// Trade-off : +~25KB dans le bundle initial vs SSG fonctionnel.
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Method } from './components/Facilities';
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
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import {
  Positioning,
  Problematic,
  Visibility,
  Testimonials,
  FAQSection,
  FinalCTA,
  HomeBlog,
  ZonesDIntervention,
} from './components/HomeSections';

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
    <Hero />
    <Positioning />
    <Problematic />
    <Method />
    <Visibility />
    <Testimonials />
    <FAQSection />
    <HomeBlog />
    <ZonesDIntervention />
    <FinalCTA />
  </>
);

export const AppContent: React.FC = () => {
  // /nos-biens et ses pages détail embarquent leur propre footer (réplique Revalis)
  const hasOwnFooter = useLocation().pathname.startsWith('/nos-biens');
  return (
  <LazyMotion features={domAnimation}>
    <ScrollToTop />
    <div className="font-sans text-textMain antialiased flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
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
      </main>
      {!hasOwnFooter && <Footer />}
    </div>
  </LazyMotion>
  );
};
