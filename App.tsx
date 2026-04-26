import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SEO } from './components/SEO';
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
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

// Homepage Sections
import { Positioning, Problematic, Visibility, Testimonials, FAQSection, FinalCTA, HomeBlog } from './components/HomeSections';

const HomePage: React.FC = () => (
  <>
    <SEO
      title="Mickael Lima — Agent Immobilier Prestige | Pays de Gex"
      description="Agent immobilier prestige dans le Pays de Gex. Estimation gratuite, diffusion sur +40 portails immobiliers, clientèle frontalière genevoise et internationale. Vendez au meilleur prix."
      canonical="/"
    />
    <Hero />
    <Positioning />
    <Problematic />
    <Method />
    <Visibility />
    <Testimonials />
    <FAQSection />
    <HomeBlog />
    <FinalCTA />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
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
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/estimation" element={<Estimation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;