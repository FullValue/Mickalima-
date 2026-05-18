import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import {
  ArrowUpRight,
  Phone,
  MapPin,
  Globe2,
  Home,
  TrendingUp,
  ChevronDown,
  CheckCircle2,
  Languages,
  Award,
  Camera,
} from 'lucide-react';
import { IMAGES } from '../constants';
import { SEO } from './SEO';

const BASE_URL = 'https://mickael-lima.immo';
const EN_URL = `${BASE_URL}/en/real-estate-pays-de-gex/`;

const ALTERNATES = [
  { hreflang: 'fr', href: `${BASE_URL}/` },
  { hreflang: 'en', href: EN_URL },
  { hreflang: 'x-default', href: `${BASE_URL}/` },
];

const FAQS = [
  {
    q: 'Can I buy property in France as a non-EU resident?',
    a: 'Yes. There are no restrictions on property ownership in France for non-EU nationals. The purchase process is the same regardless of nationality and is secured by a notaire (public notary).',
  },
  {
    q: 'How long does a property purchase take in France?',
    a: "Typically 3 to 4 months from accepted offer to final deed. This includes the compromis de vente (preliminary contract), a 10-day cooling-off period, and the acte authentique signed at the notaire's office.",
  },
  {
    q: 'What are the buying costs in France?',
    a: 'Budget approximately 7–8% of the purchase price in notaire fees and taxes for existing properties, or 2–3% for new builds. Agent fees are typically included in the listed price.',
  },
  {
    q: 'Is it better to buy or rent in Pays de Gex as a frontalier?',
    a: 'With CERN and international organization contracts often running 2–5 years, buying makes financial sense for stays over 3 years given current price levels and rental yields. Each situation is different — a free valuation helps clarify.',
  },
  {
    q: 'Do you work with English-speaking notaires and mortgage brokers?',
    a: 'Yes. I work with a network of bilingual professionals (notaires, mortgage brokers, diagnostiqueurs) experienced with international clients and cross-border transactions.',
  },
];

const AREAS = [
  { name: 'Ferney-Voltaire', km: '8 km from Geneva', price: '€5,500/m²', desc: 'International community, all amenities, bilingual schools.' },
  { name: 'Saint-Genis-Pouilly', km: 'Adjacent to CERN', price: '€5,000/m²', desc: 'CERN employees’ top choice, strong rental demand.' },
  { name: 'Divonne-les-Bains', km: '20 km from Geneva', price: '€6,600/m²', desc: 'Premium market — lake, golf course, ideal for senior expats.' },
  { name: 'Prévessin-Moëns', km: '6 km from Geneva', price: '€5,300/m²', desc: 'Quiet, residential, fast border access via D984.' },
  { name: 'Gex', km: '25 km from Geneva', price: '€4,400/m²', desc: 'More affordable, great value, capital of Pays de Gex.' },
  { name: 'Ornex / Cessy', km: '10–12 km from Geneva', price: '€4,800/m²', desc: 'Family-friendly, detached houses, green spaces.' },
];

const SCHEMA = [
  {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Mickaël Lima — L’agence Immo',
    url: EN_URL,
    telephone: '+33769313502',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '328 Rue des Fontanettes',
      addressLocality: 'Divonne-les-Bains',
      postalCode: '01220',
      addressCountry: 'FR',
    },
    areaServed: ['Pays de Gex', 'Ferney-Voltaire', 'Saint-Genis-Pouilly', 'Divonne-les-Bains', 'Prévessin-Moëns', 'Gex'],
    description:
      'English-speaking real estate agent in Pays de Gex, specializing in cross-border French-Swiss property transactions. Serving CERN, UN, WHO and international professionals.',
    knowsLanguage: ['fr', 'en'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '25',
      bestRating: '5',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
];

export const ExpatPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Real Estate in Pays de Gex — English-Speaking Agent | Mickaël Lima"
        description="Looking to buy or sell property in Pays de Gex? Mickaël Lima is your English-speaking real estate agent near CERN, Geneva and the French-Swiss border. Free property valuation."
        canonical="/en/real-estate-pays-de-gex"
        schema={SCHEMA}
        alternates={ALTERNATES}
      />

      <div className="bg-white min-h-screen">
        {/* ── HERO ── */}
        <section className="relative min-h-[80vh] flex items-end pb-20 bg-primary overflow-hidden pt-32">
          <div className="absolute inset-0 z-0">
            <picture>
              <source srcSet="/images/hero-mickael.avif" type="image/avif" />
              <source srcSet="/images/hero-mickael.webp" type="image/webp" />
              <img
                src="/images/hero-mickael.jpg"
                alt="Pays de Gex — French-Swiss border real estate"
                width="1200"
                height="630"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover opacity-25"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/40" />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-5xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                <Languages size={12} className="inline mr-1" /> English-speaking
              </span>
              <span className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest">
                <MapPin size={12} /> CERN · UN · WHO · International
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.05] mb-6 break-words hyphens-auto">
              Real Estate in Pays de Gex<br />
              <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Your English-Speaking Agent
              </span>
            </h1>
            <p className="text-white/85 text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-10">
              8 years of expertise on the French-Swiss border. Serving CERN, UN, WHO and international professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-white text-textMain py-2 px-2 pr-6 rounded-full font-bold hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1 flex items-center gap-4 group w-fit"
              >
                <div className="bg-textMain text-white rounded-full p-3 group-hover:rotate-45 transition-transform duration-300 shrink-0">
                  <ArrowUpRight size={18} />
                </div>
                <span className="text-sm tracking-wide whitespace-nowrap">Get a Free Property Valuation</span>
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 py-2 px-2 pr-6 rounded-full font-bold hover:bg-white/20 transition-all shadow-xl hover:-translate-y-1 flex items-center gap-4 group w-fit"
              >
                <div className="bg-white text-textMain rounded-full p-3 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Phone size={18} />
                </div>
                <span className="text-sm tracking-wide whitespace-nowrap">Contact Mickaël</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── SECTION 1 : Why Pays de Gex ── */}
        <section className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              The opportunity
            </span>
            <h2 className="text-3xl md:text-5xl font-medium text-textMain tracking-tight leading-[1.1] mb-8">
              Why International Professionals<br />
              <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">
                Choose Pays de Gex
              </span>
            </h2>
            <p className="text-lg text-textMain font-light leading-relaxed mb-8">
              Live in France, work in Switzerland — the best of both worlds. Pays de Gex has become the natural choice for
              international professionals seeking quality of life and significant property savings compared to Geneva.
              Roughly <strong className="font-semibold">35 % of Pays de Gex residents work in Switzerland</strong>,
              creating a distinctive cross-border real estate market.
            </p>
            <ul className="space-y-4 text-base md:text-lg text-textMain font-light leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                <span>Property prices <strong className="font-semibold">40–60 % lower</strong> than Geneva for equivalent quality.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                <span>Example: a 90 m² apartment in Ferney-Voltaire is around <strong className="font-semibold">€500,000</strong>, vs. CHF 1.2 M+ on the Geneva side.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                <span>Proximity to <strong className="font-semibold">CERN</strong> (Saint-Genis-Pouilly), <strong className="font-semibold">WHO, UN, WTO</strong> in Geneva — 15 to 25 min drive.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                <span>French public schools <em>and</em> international schools nearby (Lycée international Ferney, Geneva network).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                <span>Direct access to <strong className="font-semibold">Geneva airport</strong> in 20 to 35 minutes.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── SECTION 2 : Key Areas ── */}
        <section className="py-16 md:py-24 lg:py-32 bg-surface border-y border-gray-100">
          <div className="container mx-auto px-6 max-w-6xl">
            <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              The map
            </span>
            <h2 className="text-3xl md:text-5xl font-medium text-textMain tracking-tight mb-12">
              Key Areas for International Buyers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {AREAS.map((a) => (
                <div key={a.name} className="bg-white rounded-[1.5rem] p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-2">{a.km}</p>
                  <p className="text-2xl font-bold text-textMain mb-3">{a.name}</p>
                  <p className="text-sm text-gray-500 font-light leading-relaxed mb-4">{a.desc}</p>
                  <p className="text-base font-semibold text-textMain border-t border-gray-100 pt-3">
                    <span className="text-gray-400 text-xs uppercase tracking-widest mr-2">Avg price</span>
                    {a.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3 : Services ── */}
        <section className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              Services
            </span>
            <h2 className="text-3xl md:text-5xl font-medium text-textMain tracking-tight leading-[1.1] mb-10">
              How I Help International<br />
              <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">
                Buyers and Sellers
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Home, title: 'Free property valuation', desc: 'In person or remote. Detailed analysis with comparable sales within 500 m radius.' },
                { icon: Globe2, title: 'Full buyer support', desc: 'Search, visits, negotiation, notary coordination — every step.' },
                { icon: Camera, title: 'Premium seller representation', desc: 'Professional photography + 4K drone video included, 40+ portal distribution.' },
                { icon: Languages, title: 'English throughout', desc: 'Every conversation, contract review, and visit conducted bilingually.' },
                { icon: TrendingUp, title: 'Cross-border expertise', desc: 'Experience with international mortgage brokers, CHF/EUR financing, frontalier specifics.' },
                { icon: Award, title: 'Relocation support', desc: 'Local network: notaires, diagnostiqueurs, artisans, bilingual professionals.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-surface rounded-2xl p-6 border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary mb-4 shadow-sm">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-textMain mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4 : Market Data ── */}
        <section className="py-16 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
              2026 Market overview
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-10">
              Pays de Gex<br />
              <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                in numbers
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-7">
                <p className="text-5xl md:text-6xl font-bold text-white mb-2">+12 %</p>
                <p className="text-sm text-white/70 font-light">Luxury transactions Q1 2025</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-7">
                <p className="text-5xl md:text-6xl font-bold text-white mb-2">28–75 d</p>
                <p className="text-sm text-white/70 font-light">Average selling time (correctly priced apt/house)</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-7">
                <p className="text-5xl md:text-6xl font-bold text-white mb-2">50 %+</p>
                <p className="text-sm text-white/70 font-light">Cross-border buyers on border communes</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-7">
                <p className="text-5xl md:text-6xl font-bold text-white mb-2">3.5–5 %</p>
                <p className="text-sm text-white/70 font-light">Gross rental yields</p>
              </div>
            </div>
            <p className="mt-10 text-white/80 text-base md:text-lg font-light leading-relaxed">
              The market remains under sustained pressure: demand exceeds supply on all border communes, supported by CERN
              contract renewals, international organization rotations, and consistent inflows of French-Swiss frontalier
              households.
            </p>
          </div>
        </section>

        {/* ── SECTION 5 : About ── */}
        <section className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl scale-110" />
                  <img
                    src={IMAGES.heroAgent}
                    alt="Mickaël Lima"
                    width="320"
                    height="320"
                    loading="lazy"
                    className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-full object-cover shadow-2xl border-4 border-white"
                  />
                </div>
              </div>
              <div className="lg:col-span-8">
                <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                  Your local expert
                </span>
                <h2 className="text-3xl md:text-5xl font-medium text-textMain tracking-tight leading-[1.1] mb-6">
                  Mickaël Lima<br />
                  <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">
                    Independent Real Estate Agent
                  </span>
                </h2>
                <ul className="space-y-3 text-base md:text-lg text-textMain font-light leading-relaxed">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                    <span>Independent real estate agent at <strong className="font-semibold">L’agence Immo</strong>, based in Divonne-les-Bains.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                    <span><strong className="font-semibold">Covering 20 communes</strong> across the Pays de Gex region.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                    <span><strong className="font-semibold">8 years experience</strong>, 240 sales over the last 5 years.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                    <span>Professional photography + 4K drone video on every mandate, at no cost to the seller.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                    <span>Listed on 40+ portals including <strong className="font-semibold">Properstar</strong> for cross-border visibility.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                    <span>Fluent bilingual support in <strong className="font-semibold">French and English</strong> throughout the process.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 6 : FAQ ── */}
        <section className="py-16 md:py-24 lg:py-32 bg-surface border-y border-gray-100">
          <div className="container mx-auto px-6 max-w-3xl">
            <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-medium text-textMain tracking-tight mb-10 leading-[1.1]">
              Frequently Asked<br />
              <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">
                Questions
              </span>
            </h2>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-2xl border ${activeFaq === i ? 'border-primary shadow-md' : 'border-gray-100'} overflow-hidden transition-all duration-300`}
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full text-left p-5 flex items-center justify-between focus:outline-none"
                  >
                    <span className={`font-bold text-base md:text-lg ${activeFaq === i ? 'text-primary' : 'text-textMain'}`}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 ml-3 transition-transform duration-300 ${activeFaq === i ? 'rotate-180 text-primary' : 'text-gray-400'}`}
                    />
                  </button>
                  <div
                    className={`px-5 overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === i ? 'max-h-60 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-gray-600 leading-relaxed font-light">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <m.section
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="py-16 md:py-24 lg:py-32 bg-white"
        >
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              Let's talk
            </span>
            <h2 className="text-3xl md:text-5xl font-medium text-textMain tracking-tight leading-[1.1] mb-6">
              Ready to Start Your<br />
              <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">
                Property Search?
              </span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you're buying, selling, or just exploring the market, get in touch for a no-obligation conversation in English.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl group"
              >
                <span>Contact Mickaël</span>
                <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-white text-textMain border-2 border-gray-200 font-bold px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-all"
              >
                Free Property Valuation
              </Link>
            </div>
          </div>
        </m.section>
      </div>
    </>
  );
};
