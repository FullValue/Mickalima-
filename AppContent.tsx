import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LazyMotion } from 'framer-motion';
import { SEO } from './components/SEO';

// Charge les features d'animation Framer Motion en chunk séparé asynchrone
// (réduit le JS initial parsé/exécuté → améliore INP)
const loadMotionFeatures = () => import('framer-motion').then(res => res.domAnimation);
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Method } from './components/Facilities';
import { MandatSignature, MandatExclusif } from './components/Mandats';
import { About } from './components/About';
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
      description: "7 ans d'expérience en promotion immobilière et prospection foncière dans le Pays de Gex",
      telephone: '+33769313502',
      email: 'contact@mickael-lima.immo',
      worksFor: { '@type': 'Organization', name: 'L’agence Immo' },
    },
    priceRange: '€€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Virement bancaire, Chèque',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    sameAs: [
      'https://www.linkedin.com/in/mickael-lima-dos-santos-97137419b/',
      'https://share.google/JTKp7Il2o4HfRymBD',
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

export const AppContent: React.FC = () => (
  <LazyMotion features={loadMotionFeatures}>
    <ScrollToTop />
    <div className="font-sans text-textMain antialiased flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mandat-signature" element={<MandatSignature />} />
          <Route path="/mandat-exclusif" element={<MandatExclusif />} />
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
      <Footer />
    </div>
  </LazyMotion>
);
