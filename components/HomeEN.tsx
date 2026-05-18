import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import {
  Phone,
  ArrowUpRight,
  Home as HomeIcon,
  MapPin,
  Ruler,
  CheckCircle2,
  Sparkles,
  Camera,
  Globe2,
  Award,
  TrendingUp,
} from 'lucide-react';
import { COMMUNES, IMAGES } from '../constants';
import { SEO } from './SEO';

const BASE = 'https://mickael-lima.immo';

const ALTERNATES = [
  { hreflang: 'fr', href: `${BASE}/` },
  { hreflang: 'en', href: `${BASE}/en/` },
  { hreflang: 'x-default', href: `${BASE}/` },
];

const SCHEMA = [
  {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    name: 'Mickaël Lima — L’agence Immo',
    url: `${BASE}/en/`,
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
    description:
      'English-speaking real estate agent in Pays de Gex, French-Swiss border. Selling, buying and valuation services for international clients, CERN, UN and WHO professionals.',
    knowsLanguage: ['fr', 'en'],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Pays de Gex' },
      { '@type': 'City', name: 'Divonne-les-Bains' },
      { '@type': 'City', name: 'Ferney-Voltaire' },
      { '@type': 'City', name: 'Saint-Genis-Pouilly' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '25',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      'https://www.linkedin.com/in/mickael-lima-dos-santos-97137419b/',
      'https://www.google.com/maps/place/Micka%C3%ABl+Lima+-+L%27agence+Immo/@46.3568,6.1432,17z',
    ],
  },
];

export const HomeEN: React.FC = () => {
  const [propertyType, setPropertyType] = useState<'House' | 'Apartment' | 'Land'>('House');
  const [commune, setCommune] = useState('');
  const [surface, setSurface] = useState('');
  const [contact, setContact] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', '38f90cdc-9f17-48ef-bae6-f94e9b44e41f');
    formData.append('subject', 'Quick valuation request (EN) — mickael-lima.immo');
    formData.append('from_name', 'mickael-lima.immo');
    formData.append('botcheck', '');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: json,
      });
      const data = await response.json();
      if (data.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <SEO
        title="Real Estate Pays de Gex — English-Speaking Agent | Mickaël Lima"
        description="Sell or buy property in Pays de Gex with a bilingual real estate agent. Premium strategy, professional presentation, personal guidance from valuation to signature."
        canonical="/en/"
        schema={SCHEMA}
        alternates={ALTERNATES}
      />

      {/* HERO + QUICK FORM */}
      <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden pt-24 md:pt-28 lg:pt-32">
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/images/hero-mickael.avif" type="image/avif" />
            <source srcSet="/images/hero-mickael.webp" type="image/webp" />
            <img
              src="/images/hero-mickael.jpg"
              alt="Mickaël Lima — English-speaking real estate agent Pays de Gex"
              width="1200"
              height="630"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/55 to-primary/65 z-10" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
          <div className="w-full lg:max-w-xl xl:max-w-2xl pt-12 lg:pt-0 lg:-mt-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-white tracking-tight drop-shadow-xl mb-6">
              Sell or Buy Property<br />
              in Pays de Gex
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 font-medium drop-shadow-md mb-8 leading-relaxed">
              Premium strategy, professional presentation and personal guidance — from valuation to signature.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start w-full">
              <Link
                to="/en/estimation/"
                className="bg-white text-textMain py-2 px-2 pr-6 rounded-full font-bold hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1 flex items-center gap-4 group"
              >
                <div className="bg-textMain text-white rounded-full p-3 group-hover:rotate-45 transition-transform duration-300 shrink-0">
                  <ArrowUpRight size={18} />
                </div>
                <span className="text-sm tracking-wide whitespace-nowrap">Get a Free Valuation</span>
              </Link>
              <Link
                to="/en/contact/"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 py-2 px-2 pr-6 rounded-full font-bold hover:bg-white/20 transition-all shadow-xl hover:-translate-y-1 flex items-center gap-4 group"
              >
                <div className="bg-white text-textMain rounded-full p-3 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Phone size={18} />
                </div>
                <span className="text-sm tracking-wide whitespace-nowrap">Request a Callback</span>
              </Link>
            </div>
          </div>

          {/* Liquid glass quick-valuation form */}
          <div className="w-full lg:w-[420px] lg:shrink-0">
            <div
              className="relative rounded-[2rem] p-7 md:p-8 border border-white/25 shadow-[0_25px_80px_rgba(0,12,40,0.45)] overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 100%)',
                backdropFilter: 'blur(24px) saturate(160%)',
                WebkitBackdropFilter: 'blur(24px) saturate(160%)',
              }}
            >
              <div className="absolute inset-0 rounded-[2rem] pointer-events-none" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)' }} />
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />

              {status !== 'success' ? (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                  <input type="hidden" name="access_key" value="38f90cdc-9f17-48ef-bae6-f94e9b44e41f" />
                  <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                  <input type="hidden" name="language" value="EN" />

                  <div className="flex items-center gap-2 text-white/80 text-[0.65rem] font-bold uppercase tracking-widest">
                    <Sparkles size={14} /> Free valuation · 48 h
                  </div>
                  <h2 className="text-2xl font-semibold text-white leading-tight">
                    What is your property<br />worth?
                  </h2>

                  <input type="hidden" name="property_type" value={propertyType} />
                  <div>
                    <label className="block text-[0.65rem] font-bold text-white/60 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <HomeIcon size={12} /> Property type
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['House', 'Apartment', 'Land'] as const).map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setPropertyType(type)}
                          className={`py-2.5 rounded-xl border text-xs font-bold transition-all ${
                            propertyType === type
                              ? 'bg-white text-textMain border-white shadow-lg'
                              : 'bg-white/5 text-white/80 border-white/20 hover:bg-white/15'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.65rem] font-bold text-white/60 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <MapPin size={12} /> Area
                    </label>
                    <select
                      required
                      name="area"
                      value={commune}
                      onChange={(e) => setCommune(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all appearance-none cursor-pointer"
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="" disabled className="bg-primary text-white">Select an area…</option>
                      {COMMUNES.map((c) => (
                        <option key={c.slug} value={c.name} className="bg-primary text-white">{c.name}</option>
                      ))}
                      <option value="Other" className="bg-primary text-white">Other Pays de Gex</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-5 gap-3">
                    <div className="col-span-2">
                      <label className="block text-[0.65rem] font-bold text-white/60 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                        <Ruler size={12} /> Size
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          required
                          min="1"
                          name="size_m2"
                          value={surface}
                          onChange={(e) => setSurface(e.target.value)}
                          placeholder="120"
                          className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 pr-9 text-sm font-medium focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 text-xs font-medium pointer-events-none">m²</span>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <label className="block text-[0.65rem] font-bold text-white/60 uppercase tracking-widest mb-2">
                        Contact
                      </label>
                      <input
                        type="text"
                        required
                        name="phone_or_email"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Phone or email"
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-white text-textMain font-bold rounded-full py-3.5 flex items-center justify-center gap-2 hover:bg-gray-50 hover:-translate-y-0.5 transition-all shadow-xl group disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    <span>{status === 'loading' ? 'Sending…' : 'Get my free valuation'}</span>
                    {status !== 'loading' && (
                      <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                    )}
                  </button>

                  {status === 'error' && (
                    <p className="text-red-300 text-xs font-medium text-center">
                      Something went wrong. Call <a href="tel:+33769313502" className="underline">+33 7 69 31 35 02</a> directly.
                    </p>
                  )}

                  <p className="text-[0.65rem] text-white/50 text-center font-light">
                    Confidential · no commitment · response within 48h
                  </p>
                </form>
              ) : (
                <div className="relative z-10 text-center py-6 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white/20 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white leading-tight">✅ Message sent!</h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Our team will get back to you within <strong className="font-bold text-white">24 h</strong> to schedule the visit and finalize the valuation of your {propertyType.toLowerCase()} {commune && `in ${commune}`}.
                  </p>
                  <button
                    type="button"
                    onClick={() => { setStatus('idle'); setCommune(''); setSurface(''); setContact(''); }}
                    className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white underline-offset-4 hover:underline transition-colors"
                  >
                    New request
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Why work with me
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-textMain tracking-tight leading-[1.1] mb-12">
            A bilingual agent who knows<br />
            <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">
              every street of Pays de Gex.
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: HomeIcon, title: 'Free property valuation', desc: 'In person or remote. Detailed analysis with comparable sales within 500 m radius — within 48 hours.' },
              { icon: Camera, title: 'Premium presentation', desc: 'Professional photography + 4K drone video included on every mandate — no extra cost.' },
              { icon: Globe2, title: 'Distribution on 40+ portals', desc: 'SeLoger, Leboncoin, Bien’ici, Figaro Immo, Properstar (Swiss), LuxuryEstate and more.' },
              { icon: TrendingUp, title: 'Cross-border expertise', desc: 'Working daily with frontaliers, CERN, UN, WHO contracts and CHF/EUR financing dynamics.' },
              { icon: Award, title: 'Independent agent', desc: '10 years experience, 240 sales in the last 5 years, commission-only — interests aligned with yours.' },
              { icon: CheckCircle2, title: 'Bilingual throughout', desc: 'Every conversation, visit and contract review conducted in fluent French and English.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-surface rounded-2xl p-7 border border-gray-100">
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

      {/* KEY STATS */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { v: '10 yrs', l: 'of experience' },
              { v: '240', l: 'sales in 5 years' },
              { v: '5/5', l: '25 Google reviews' },
              { v: '20', l: 'communes covered' },
            ].map((s) => (
              <div key={s.l} className="bg-white/5 border border-white/15 rounded-2xl p-6 text-center backdrop-blur-md">
                <p className="text-4xl md:text-5xl font-bold mb-1">{s.v}</p>
                <p className="text-xs md:text-sm text-white/70 font-light uppercase tracking-widest">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNATIONAL CLIENTS LANDING LINK */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-surface rounded-[2.5rem] p-10 md:p-14 border border-gray-100 flex flex-col md:flex-row items-center gap-10">
            <img
              src={IMAGES.heroAgent}
              alt="Mickaël Lima"
              width="160"
              height="160"
              loading="lazy"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-xl border-4 border-white shrink-0"
            />
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                For international clients
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-textMain mb-3 leading-tight">
                CERN, UN, WHO professional?
              </h3>
              <p className="text-gray-500 font-light leading-relaxed mb-6">
                Detailed guide for cross-border buyers and sellers: market data, area guide, financing, FAQ on French notary process and frontalier specifics.
              </p>
              <Link
                to="/en/real-estate-pays-de-gex/"
                className="inline-flex items-center gap-3 bg-primary text-white font-bold px-6 py-3 rounded-full hover:bg-primary/90 transition-all shadow-md group"
              >
                <span>Open the expat guide</span>
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24 lg:py-28 bg-surface border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-medium text-textMain tracking-tight leading-[1.1] mb-6">
            Ready to start<br />
            <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">
              your project?
            </span>
          </h2>
          <p className="text-gray-500 text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Get a free, confidential property valuation or schedule a no-obligation conversation in English.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/en/estimation/"
              className="inline-flex items-center gap-3 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl group"
            >
              <span>Get a Free Valuation</span>
              <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
            </Link>
            <Link
              to="/en/contact/"
              className="inline-flex items-center gap-3 bg-white text-textMain border-2 border-gray-200 font-bold px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-all"
            >
              Contact Mickaël
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
