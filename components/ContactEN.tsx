import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Star, ArrowRight, MessageSquare, Clock, Globe, ShieldCheck, ChevronDown } from 'lucide-react';
import { SEO } from './SEO';
import { IMAGES } from '../constants';
import { m } from 'framer-motion';

const BASE = 'https://mickael-lima.immo';

const ALTERNATES = [
  { hreflang: 'fr', href: `${BASE}/contact/` },
  { hreflang: 'en', href: `${BASE}/en/contact/` },
  { hreflang: 'x-default', href: `${BASE}/contact/` },
];

const CONTACT_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact — English-Speaking Real Estate Agent Pays de Gex',
  url: `${BASE}/en/contact/`,
  inLanguage: 'en',
  mainEntity: {
    '@type': 'RealEstateAgent',
    name: 'Mickaël Lima — L’agence Immo',
    telephone: '+33769313502',
    email: 'contact@mickael-lima.immo',
    knowsLanguage: ['fr', 'en'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '328 Rue des Fontanettes',
      addressLocality: 'Divonne-les-Bains',
      postalCode: '01220',
      addressCountry: 'FR',
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export const ContactEN: React.FC = () => {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', '38f90cdc-9f17-48ef-bae6-f94e9b44e41f');
    formData.append('subject', 'Contact EN — mickael-lima.immo');
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

  const faqs = [
    {
      question: 'How long does a full property valuation take?',
      answer: "A serious valuation typically takes 48 hours. I first visit the property on site to analyze it, then review market data before delivering a complete, confidential report.",
    },
    {
      question: 'Do you only work with exclusive mandates?',
      answer: "I recommend an exclusive mandate to maximize marketing investment (premium photos, drone video, priority distribution), but I also offer a Signature mandate giving you full flexibility.",
    },
    {
      question: 'Can the sale be kept confidential?',
      answer: "Yes — off-market sales are an option. In that case, no public listing is published. I only approach my network of pre-qualified, financially solid buyers.",
    },
    {
      question: 'Do you cover the Greater Geneva area?',
      answer: "My core expertise is in Pays de Gex and the French-Swiss border, which allows me to attract a local and international clientele with strong purchasing power.",
    },
  ];

  return (
    <>
      <SEO
        title="Contact — English-Speaking Real Estate Agent | Mickaël Lima"
        description="Get in touch with Mickaël Lima for a free, confidential property valuation in Pays de Gex. English-speaking agent, response within 24h, on-site visit included."
        canonical="/en/contact/"
        schema={CONTACT_SCHEMA}
        alternates={ALTERNATES}
      />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
          <div className="absolute inset-0 z-0 text-center flex justify-center">
            <img
              src="/images/contact-hero.jpg"
              width="1920"
              height="1080"
              loading="eager"
              decoding="async"
              alt="Contact"
              className="w-full h-full object-cover mix-blend-overlay opacity-40 mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-background z-10" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center text-white mt-16">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white/90 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
              <MessageSquare size={16} /> Contact & Inquiries
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-medium mb-6 leading-[1.05] tracking-tight drop-shadow-2xl break-words hyphens-auto">
              Get in <br />
              <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">touch.</span>
            </h1>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-[800px] bg-primary/5 skew-x-12 translate-x-1/2 opacity-50 pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10 pt-10">
            <m.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col lg:flex-row bg-white/80 backdrop-blur-2xl rounded-[3rem] overflow-hidden shadow-2xl min-h-[750px] border border-white/50"
            >
              {/* Left */}
              <div className="lg:w-5/12 p-12 md:p-16 text-white flex flex-col justify-between relative overflow-hidden bg-primary">
                <div className="absolute inset-0 z-0">
                  <img src={IMAGES.cardImage} alt="Contact bg" className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale" />
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/95 to-primary z-10" />
                </div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none z-10" />

                <m.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-20">
                  <m.div variants={fadeInUp} className="inline-flex items-center gap-3 border border-white/20 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-12 shadow-sm">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    Contact
                  </m.div>
                  <m.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.05] drop-shadow-xl mb-8 break-words hyphens-auto">
                    Let's talk about<br />
                    <span className="font-newsletter italic font-normal text-white">your project.</span>
                  </m.h2>
                  <m.p variants={fadeInUp} className="text-xl text-white/70 leading-relaxed max-w-sm mb-16 font-light">
                    A question, a valuation, a property to sell? I'm available for a confidential, no-obligation conversation — in English or French.
                  </m.p>

                  <m.div variants={staggerContainer} className="space-y-6 mb-16">
                    <m.a variants={fadeInUp} href="tel:+33769313502" className="flex items-center gap-5 group w-fit">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-300 shadow-lg">
                        <Phone size={20} />
                      </div>
                      <div>
                        <span className="font-bold text-xl tracking-wide group-hover:text-white/80 transition-colors block">+33 7 69 31 35 02</span>
                        <span className="text-xs font-bold text-accent uppercase tracking-widest">Direct call</span>
                      </div>
                    </m.a>
                    <m.a variants={fadeInUp} href="mailto:contact@mickael-lima.immo" className="flex items-center gap-5 group w-fit">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-300 shadow-lg">
                        <Mail size={20} />
                      </div>
                      <div>
                        <span className="font-bold text-xl tracking-wide group-hover:text-white/80 transition-colors block">contact@mickael-lima.immo</span>
                        <span className="text-xs font-bold text-accent uppercase tracking-widest">Reply within 24h</span>
                      </div>
                    </m.a>
                  </m.div>
                </m.div>

                <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }} className="flex items-center gap-6 mt-auto relative z-20 pt-10 border-t border-white/10">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/100?img=${i + 30}`}
                        alt="Client"
                        className="w-12 h-12 rounded-full border-2 border-primary object-cover shadow-lg"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-accent mb-1">
                      <Star size={16} fill="currentColor" />
                      <span className="font-bold text-white text-lg ml-2">5/5</span>
                    </div>
                    <p className="text-sm text-white/50 font-bold uppercase tracking-widest">25 Google reviews</p>
                  </div>
                </m.div>
              </div>

              {/* Right form */}
              <div className="lg:w-7/12 bg-white p-12 md:p-16 flex flex-col justify-center relative">
                <m.form
                  onSubmit={handleSubmit}
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8 max-w-xl mx-auto w-full relative z-10"
                >
                  <input type="hidden" name="access_key" value="38f90cdc-9f17-48ef-bae6-f94e9b44e41f" />
                  <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                  <input type="hidden" name="language" value="EN" />

                  <m.div variants={fadeInUp} className="space-y-3">
                    <label className="text-textMain font-bold text-sm uppercase tracking-widest ml-1 text-gray-500">Full name</label>
                    <input type="text" name="name" required placeholder="e.g. John Smith" className="w-full bg-surface border-2 border-transparent focus:border-primary/20 hover:border-gray-200 rounded-2xl p-5 text-lg font-medium outline-none transition-all placeholder:text-gray-400 shadow-sm" />
                  </m.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <m.div variants={fadeInUp} className="space-y-3">
                      <label className="text-textMain font-bold text-sm uppercase tracking-widest ml-1 text-gray-500">Email</label>
                      <input type="email" name="email" required placeholder="john@example.com" className="w-full bg-surface border-2 border-transparent focus:border-primary/20 hover:border-gray-200 rounded-2xl p-5 text-lg font-medium outline-none transition-all placeholder:text-gray-400 shadow-sm" />
                    </m.div>
                    <m.div variants={fadeInUp} className="space-y-3">
                      <label className="text-textMain font-bold text-sm uppercase tracking-widest ml-1 text-gray-500">Phone</label>
                      <input type="tel" name="phone" required placeholder="+41 / +33…" className="w-full bg-surface border-2 border-transparent focus:border-primary/20 hover:border-gray-200 rounded-2xl p-5 text-lg font-medium outline-none transition-all placeholder:text-gray-400 shadow-sm" />
                    </m.div>
                  </div>

                  <m.div variants={fadeInUp} className="space-y-3">
                    <label className="text-textMain font-bold text-sm uppercase tracking-widest ml-1 text-gray-500">Message</label>
                    <textarea name="message" required placeholder="Tell us about your project…" className="w-full h-40 bg-surface border-2 border-transparent focus:border-primary/20 hover:border-gray-200 rounded-2xl p-5 text-lg font-medium outline-none transition-all resize-none placeholder:text-gray-400 shadow-sm" />
                  </m.div>

                  <m.button type="submit" disabled={status === 'loading'} variants={fadeInUp} className="group w-full bg-white text-textMain border border-gray-200 rounded-full p-2 pr-8 font-bold text-xl flex items-center gap-4 hover:bg-gray-50 transition-all duration-500 shadow-sm transform hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                    <div className="w-14 h-14 bg-textMain text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500 shrink-0">
                      <ArrowUpRight size={24} />
                    </div>
                    <span className="tracking-wide">{status === 'loading' ? 'Sending…' : 'Send my message'}</span>
                  </m.button>

                  {status === 'success' && (
                    <p className="text-green-600 font-medium mt-2 text-center">
                      ✅ Message sent! Our team will reply within 24 hours.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-500 font-medium mt-2 text-center">
                      Something went wrong. Call <a href="tel:+33769313502" className="underline">+33 7 69 31 35 02</a> directly.
                    </p>
                  )}
                </m.form>
              </div>
            </m.div>
          </div>
        </section>

        {/* Commitments */}
        <section className="py-24 bg-white relative border-t border-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">Our commitment</span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain tracking-tight leading-[1.05] break-words hyphens-auto">
                Our service<br />
                <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">charter.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-primary">
                  <Clock size={24} />
                </div>
                <h3 className="text-2xl font-bold text-textMain mb-4">Fast response</h3>
                <p className="text-gray-600 leading-relaxed font-light text-lg">A single point of contact. Guaranteed response within 24h on every inquiry, systematic feedback after each visit.</p>
              </div>
              <div className="bg-surface p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-primary">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold text-textMain mb-4">Qualified buyers only</h3>
                <p className="text-gray-600 leading-relaxed font-light text-lg">No curious visits. Each buyer profile is screened and financing pre-validated before they ever step into your home.</p>
              </div>
              <div className="bg-surface p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-primary">
                  <Globe size={24} />
                </div>
                <h3 className="text-2xl font-bold text-textMain mb-4">International reach</h3>
                <p className="text-gray-600 leading-relaxed font-light text-lg">Strong connections with cross-border, expat and relocation clientele across the Geneva region.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ + Area */}
        <section className="py-24 bg-surface relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-50 z-0" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain tracking-tight leading-[1.05] break-words hyphens-auto">
                Frequently asked <span className="font-newsletter italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary font-normal">questions</span>
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 items-stretch">
              <div className="lg:w-7/12 flex flex-col justify-center">
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className={`bg-white rounded-2xl border ${activeFaq === index ? 'border-primary shadow-md' : 'border-gray-100'} overflow-hidden transition-all duration-300`}
                    >
                      <button
                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                        className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
                      >
                        <span className={`font-bold text-lg ${activeFaq === index ? 'text-primary' : 'text-textMain'}`}>{faq.question}</span>
                        <ChevronDown className={`shrink-0 transition-transform duration-300 ${activeFaq === index ? 'rotate-180 text-primary' : 'text-gray-400'}`} />
                      </button>
                      <div className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-5/12">
                <div className="bg-primary text-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl relative overflow-hidden group h-full flex flex-col justify-center">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-white/10 transition-colors duration-700" />

                  <h3 className="text-2xl font-bold mb-8">Service area</h3>

                  <div className="flex gap-6 mb-8 group/item">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover/item:border-accent transition-colors">
                      <MapPin size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">Pays de Gex (Ain, 01)</p>
                      <p className="text-white/70 font-medium leading-relaxed">
                        Coverage across the entire French-Swiss border region
                        <span className="text-xs font-light italic mt-1 block">Reply within 24h</span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-6 mb-8">
                    <p className="text-[0.65rem] font-bold uppercase tracking-widest text-accent mb-3">Communes covered</p>
                    <p className="text-white/85 text-sm font-medium leading-relaxed">
                      The entire Pays de Gex — <strong className="font-semibold text-white">Ferney-Voltaire</strong>, <strong className="font-semibold text-white">Divonne-les-Bains</strong>, <strong className="font-semibold text-white">Saint-Genis-Pouilly</strong>, <strong className="font-semibold text-white">Gex</strong>, <strong className="font-semibold text-white">Prévessin-Moëns</strong> and surrounding communes.
                    </p>
                  </div>

                  <div className="flex gap-6 pt-8 border-t border-white/10 group/item">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover/item:border-accent transition-colors">
                      <MessageSquare size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">Private WhatsApp</p>
                      <p className="text-white/70 font-medium leading-relaxed mb-4">
                        Direct messaging for immediate, confidential conversation.
                      </p>
                      <a href="https://wa.me/33769313502" className="inline-flex items-center gap-2 text-accent font-bold hover:text-white transition-colors">
                        Start the chat <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
