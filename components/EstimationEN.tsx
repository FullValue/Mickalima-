import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, COMMUNES } from '../constants';
import { SEO } from './SEO';
import { Phone, CheckCircle, MapPin, Home, Ruler, FileText, ArrowUpRight, Sparkles } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';

const BASE = 'https://mickael-lima.immo';

const ALTERNATES = [
  { hreflang: 'fr', href: `${BASE}/estimation/` },
  { hreflang: 'en', href: `${BASE}/en/estimation/` },
  { hreflang: 'x-default', href: `${BASE}/estimation/` },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export const EstimationEN: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [propertyType, setPropertyType] = useState('House');
  const [dpe, setDpe] = useState('C');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', '38f90cdc-9f17-48ef-bae6-f94e9b44e41f');
    formData.append('subject', 'Valuation request (EN) — mickael-lima.immo');
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
        title="Free Property Valuation — Pays de Gex | Mickaël Lima"
        description="Get a free, confidential property valuation in Pays de Gex. On-site visit, market analysis, complete report within 48 hours — English-speaking agent."
        canonical="/en/estimation/"
        alternates={ALTERNATES}
      />
      <section className="py-32 bg-background relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-surface to-transparent -z-10" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="container mx-auto px-6 relative z-10 pt-10">
          <div className="text-center mb-16">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200/60 bg-white/60 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
            >
              <Sparkles size={16} /> Confidential Valuation
            </m.div>
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain tracking-tight leading-[1.1]"
            >
              Get a Free Property<br />
              <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">Valuation.</span>
            </m.h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <m.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                {status !== 'success' ? (
                  <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                    <input type="hidden" name="access_key" value="38f90cdc-9f17-48ef-bae6-f94e9b44e41f" />
                    <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                    <input type="hidden" name="property_type" value={propertyType} />
                    <input type="hidden" name="dpe" value={dpe} />
                    <input type="hidden" name="language" value="EN" />

                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-textMain tracking-tight">Property details</h2>
                      <p className="text-gray-500 font-light text-sm">Tell us about your property for a precise analysis.</p>
                    </div>

                    <div className="space-y-4">
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2"><Home size={14} /> Property type</label>
                      <div className="flex gap-4">
                        {['House', 'Apartment', 'Land'].map((type) => (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setPropertyType(type)}
                            className={`flex-1 py-4 rounded-2xl border font-bold text-sm transition-all duration-300 ${propertyType === type ? 'bg-textMain text-white border-textMain shadow-lg shadow-textMain/20' : 'bg-surface text-gray-500 border-transparent hover:border-gray-200 hover:bg-gray-50'}`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">Size (m²)</label>
                        <div className="relative group">
                          <Ruler className="absolute left-4 top-[1.1rem] text-gray-400 group-hover:text-primary transition-colors" size={18} />
                          <input type="number" name="size_m2" placeholder="e.g. 120" className="w-full bg-surface border-2 border-transparent pl-12 p-4 rounded-2xl text-lg font-medium outline-none focus:bg-white focus:border-primary/20 hover:border-gray-200 transition-all placeholder:text-gray-400" required />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">Number of rooms</label>
                        <input type="number" name="rooms" placeholder="e.g. 4" className="w-full bg-surface border-2 border-transparent p-4 rounded-2xl text-lg font-medium outline-none focus:bg-white focus:border-primary/20 hover:border-gray-200 transition-all placeholder:text-gray-400" required />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2"><MapPin size={14} /> Location</label>
                      <input type="text" name="address" placeholder="Full address" className="w-full bg-surface border-2 border-transparent p-4 rounded-2xl text-lg font-medium outline-none focus:bg-white focus:border-primary/20 hover:border-gray-200 transition-all placeholder:text-gray-400" required />
                    </div>

                    <div className="space-y-4">
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2"><FileText size={14} /> Energy rating (DPE)</label>
                      <div className="flex flex-wrap gap-3">
                        {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((letter) => (
                          <button
                            type="button"
                            key={letter}
                            onClick={() => setDpe(letter)}
                            className={`w-12 h-12 rounded-xl font-bold text-lg transition-all duration-300 border ${dpe === letter ? 'bg-textMain text-white border-textMain shadow-md' : 'bg-surface text-gray-500 border-transparent hover:border-gray-200'}`}
                          >
                            {letter}
                          </button>
                        ))}
                        <button type="button" onClick={() => setDpe('Unknown')} className={`px-6 h-12 rounded-xl font-bold text-sm transition-all duration-300 border ${dpe === 'Unknown' ? 'bg-textMain text-white border-textMain shadow-md' : 'bg-surface text-gray-500 border-transparent hover:border-gray-200'}`}>
                          I don't have one
                        </button>
                      </div>
                    </div>

                    <hr className="border-gray-100 my-8" />

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-textMain tracking-tight">Your contact details</h3>
                      <p className="text-gray-500 font-light text-sm">So we can send you the detailed valuation.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="text" name="name" placeholder="Full name" className="w-full bg-surface border-2 border-transparent p-4 rounded-2xl text-lg font-medium outline-none focus:bg-white focus:border-primary/20 hover:border-gray-200 transition-all placeholder:text-gray-400" required />
                      <input type="email" name="email" placeholder="Email" className="w-full bg-surface border-2 border-transparent p-4 rounded-2xl text-lg font-medium outline-none focus:bg-white focus:border-primary/20 hover:border-gray-200 transition-all placeholder:text-gray-400" required />
                    </div>
                    <div className="pb-4">
                      <input type="tel" name="phone" placeholder="Phone" className="w-full bg-surface border-2 border-transparent p-4 rounded-2xl text-lg font-medium outline-none focus:bg-white focus:border-primary/20 hover:border-gray-200 transition-all placeholder:text-gray-400" required />
                    </div>

                    <button type="submit" disabled={status === 'loading'} className="group w-full bg-white text-textMain border border-gray-200 rounded-full p-2 pr-8 font-bold text-xl flex items-center gap-4 hover:bg-gray-50 transition-all duration-500 shadow-sm transform hover:-translate-y-1 mt-6 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                      <div className="w-14 h-14 bg-textMain text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500 shrink-0">
                        <ArrowUpRight size={24} />
                      </div>
                      <span className="tracking-wide">{status === 'loading' ? 'Sending…' : 'Request my valuation'}</span>
                    </button>

                    {status === 'error' && (
                      <p className="text-red-500 font-medium mt-2 text-center">
                        Something went wrong. Call <a href="tel:+33769313502" className="underline">+33 7 69 31 35 02</a> directly.
                      </p>
                    )}
                  </form>
                ) : (
                  <AnimatePresence>
                    <m.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-surface p-10 rounded-3xl text-center py-24 relative z-10 border border-primary/10"
                    >
                      <div className="inline-flex bg-white p-5 rounded-full mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-primary">
                        <CheckCircle size={56} strokeWidth={1.5} />
                      </div>
                      <h4 className="text-3xl font-bold text-textMain mb-4 tracking-tight">✅ Message sent!</h4>
                      <p className="text-gray-500 text-lg font-light leading-relaxed max-w-sm mx-auto">
                        Our team will get back to you within 24 hours to finalize your valuation in full confidentiality.
                      </p>
                    </m.div>
                  </AnimatePresence>
                )}
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-32"
            >
              <div className="bg-primary text-white p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-8 leading-[1.2] tracking-tight">Accuracy is our signature.</h3>
                  <ul className="space-y-6 mb-8">
                    <li className="flex items-start gap-4">
                      <div className="mt-1 bg-white/10 p-1.5 rounded-full"><CheckCircle size={16} className="text-accent" /></div>
                      <span className="text-white/80 font-light leading-relaxed">Expert knowledge of Pays de Gex and cross-border price dynamics.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1 bg-white/10 p-1.5 rounded-full"><CheckCircle size={16} className="text-accent" /></div>
                      <span className="text-white/80 font-light leading-relaxed">Access to a network of qualified buyers, including international clients.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1 bg-white/10 p-1.5 rounded-full"><CheckCircle size={16} className="text-accent" /></div>
                      <span className="text-white/80 font-light leading-relaxed">Absolute confidentiality from first contact through to the final sale.</span>
                    </li>
                  </ul>
                </div>
                <div className="absolute -bottom-24 -right-24 w-64 h-64 border border-white/10 rounded-full" />
                <div className="absolute -bottom-12 -right-12 w-32 h-32 border border-white/10 rounded-full" />
              </div>

              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-8 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-20 group-hover:scale-110 transition-transform duration-500" />
                  <img
                    src={IMAGES.heroAgent}
                    alt="Mickaël Lima"
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl relative z-10"
                  />
                </div>
                <div className="text-center md:text-left text-textMain">
                  <h4 className="text-2xl font-bold tracking-tight mb-1">Mickaël Lima</h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">English-speaking expert</p>
                  <div className="flex items-center justify-center md:justify-start gap-3 bg-surface border border-gray-100 px-5 py-3 rounded-2xl w-fit mx-auto md:mx-0 shadow-inner group-hover:bg-primary/5 transition-colors">
                    <Phone size={18} className="text-primary" />
                    <span className="font-bold tracking-wide">+33 7 69 31 35 02</span>
                  </div>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              Pays de Gex
            </span>
            <h2 className="text-3xl md:text-4xl font-medium text-textMain tracking-tight">
              Valuation by area
            </h2>
            <p className="text-gray-500 font-light mt-3 max-w-lg mx-auto">
              Every commune in Pays de Gex has its own market. See local prices and request a precise valuation for your area.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {COMMUNES.map((c) => (
              <Link
                key={c.slug}
                to={`/${c.slug}/estimation-immobiliere`}
                className="group flex flex-col items-center gap-2 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-primary/20 hover:shadow-md transition-all text-center"
              >
                <span className="font-bold text-textMain text-sm group-hover:text-primary transition-colors leading-tight">
                  {c.name}
                </span>
                <span className="text-xs text-gray-400 font-light">{c.distanceGeneve}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
