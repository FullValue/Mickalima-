import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, COMMUNES, COMMUNE_CARD_IMAGES } from '../constants';
import { SEO } from './SEO';
import { SourceField } from './SourceField';
import { trackLead, leadContext } from './oakline/tracking';
import { Phone, CheckCircle, MapPin, Home, Ruler, FileText, ArrowUpRight, Sparkles } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';
import { PillButton } from './oakline/primitives';
import { FORM_FIELD_CLASS } from './formStyles';
import { TESTIMONIALS, GOOGLE_REVIEWS_URL } from './oakline/TestimonialsShowcase';
import { BIENS } from './biensData';
import { buildWhatsappUrl } from './oakline/whatsapp';
import { GOOGLE_REVIEWS_COUNT } from '../constants';

const ESTIMATION_FAQ = [
    {
        q: 'L’estimation est-elle vraiment gratuite ?',
        a: 'Oui. L’estimation est gratuite, confidentielle et sans engagement : vous n’êtes pas tenu de confier ensuite la vente de votre bien.',
    },
    {
        q: 'Comment se déroule l’estimation de ma maison ?',
        a: 'Mickaël vous rappelle sous 24 h, visite votre bien, puis vous remet un avis de valeur argumenté qui s’appuie sur les ventes comparables de votre commune (données DVF) et sur les caractéristiques réelles du bien.',
    },
    {
        q: 'Une estimation en ligne suffit-elle dans le Pays de Gex ?',
        a: 'Un simulateur donne un ordre de grandeur. Il ne voit ni l’état du bien, ni la vue, ni les nuisances, qui font varier fortement les prix près de la frontière suisse. Une visite reste nécessaire pour fixer un prix de vente.',
    },
    {
        q: 'Quelles communes couvrez-vous ?',
        a: 'Tout le Pays de Gex : Divonne-les-Bains, Gex, Ferney-Voltaire, Saint-Genis-Pouilly, Prévessin-Moëns, Cessy, Ornex, Thoiry, Crozet et les communes voisines.',
    },
];

const ESTIMATION_SCHEMA = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Estimation immobilière gratuite dans le Pays de Gex',
        serviceType: 'Estimation immobilière',
        provider: {
            '@type': 'RealEstateAgent',
            name: 'Mickaël Lima',
            url: 'https://mickael-lima.immo',
            telephone: '+33769313502',
        },
        areaServed: { '@type': 'AdministrativeArea', name: 'Pays de Gex' },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR', description: 'Estimation gratuite et sans engagement' },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: ESTIMATION_FAQ.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
    },
];

const ESTIMATION_REVIEWS = TESTIMONIALS.filter((t) =>
    ['Dylan Areias', 'Veronique', 'Laurent Fine'].includes(t.name),
);

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export const Estimation: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    // States for form fields
    const [propertyType, setPropertyType] = useState('Maison');
    const [dpe, setDpe] = useState('C');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        formData.append('access_key', '38f90cdc-9f17-48ef-bae6-f94e9b44e41f');
        formData.append('subject', 'Estimation complète: Pays de Gex');
        formData.append('from_name', 'mickael-lima.immo');
        formData.append('botcheck', '');

        const object = { ...Object.fromEntries(formData), ...leadContext() };
        const json = JSON.stringify(object);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: json,
            });
            const data = await response.json();
            if (data.success) {
                trackLead('estimation_page');
                setStatus('success');
                (e.target as HTMLFormElement).reset();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                console.error('Web3Forms error:', data);
                setStatus('error');
            }
        } catch (err) {
            console.error('Fetch error:', err);
            setStatus('error');
        }
    };

    return (
        <>
        <SEO
            title="Estimation maison gratuite Pays de Gex | Mickaël Lima"
            description="Estimation immobilière gratuite dans le Pays de Gex : rappel sous 24 h, visite du bien et avis de valeur fondé sur les ventes comparables. Sans engagement."
            canonical="/estimation"
            schema={ESTIMATION_SCHEMA}
        />
        <section id="estimation" className="bg-[#f7f7f7] pb-24 pt-32 md:pt-36">
            <div className="container mx-auto px-6">
                <div className="mb-14 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
                  <div>
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#011d41]"
                    >
                        <Sparkles size={16} /> Estimation immobilière · Pays de Gex
                    </m.div>
                    <m.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-[clamp(2rem,10vw,3rem)] font-normal leading-[1.08] tracking-tight text-[#011d41] md:text-6xl lg:text-[4.5rem]"
                    >
                        Estimation gratuite{' '}<br />
                        <span className="whitespace-nowrap">de <span className="italic">votre bien.</span></span>
                    </m.h1>
                    <p className="mt-7 max-w-xl text-lg leading-relaxed text-gray-500">
                      Agent immobilier indépendant à Divonne-les-Bains, Mickaël Lima vous rappelle sous 24 h, visite votre maison ou votre appartement et vous remet un avis de valeur argumenté, fondé sur les ventes comparables de votre commune. Gratuit et sans engagement.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <a href="#formulaire-estimation" className="rounded-full bg-[#011d41] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-textMain">Remplir le formulaire</a>
                      <a href="tel:+33769313502" className="inline-flex items-center gap-2 rounded-full border border-[#011d41]/20 px-6 py-3 text-sm font-bold text-[#011d41] transition-colors hover:bg-white"><Phone size={16} /> 07 69 31 35 02</a>
                      <a href={buildWhatsappUrl('Bonjour Mickaël, je souhaite une estimation gratuite de mon bien.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#011d41]/20 px-6 py-3 text-sm font-bold text-[#011d41] transition-colors hover:bg-white">WhatsApp</a>
                    </div>
                    <p className="mt-5 text-sm text-gray-500">5,0 sur Google · {GOOGLE_REVIEWS_COUNT} avis</p>
                  </div>
                  <figure className="m-0">
                    <img src="/images/services/conseil-immobilier.webp" alt="Échange autour d’un projet immobilier" loading="eager" decoding="async" className="aspect-[4/3] w-full rounded-2xl object-cover" />
                  </figure>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Form Side */}
                    <m.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-7 scroll-mt-28"
                        id="formulaire-estimation"
                    >
                        <div className="relative overflow-hidden rounded-2xl border border-[#ebebeb] bg-white p-8 md:p-12">

                            <AnimatePresence mode="wait" initial={false}>
                            {status !== 'success' ? (
                                <m.form
                                    key="form"
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    onSubmit={handleSubmit}
                                    className="space-y-8 relative z-10"
                                >
                                    {/* Web3Forms hidden inputs */}
                                    <input type="hidden" name="access_key" value="38f90cdc-9f17-48ef-bae6-f94e9b44e41f" />
                                    <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                                    <input type="hidden" name="type_de_bien" value={propertyType} />
                                    <input type="hidden" name="dpe" value={dpe} />

                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-bold text-textMain tracking-tight">Détails du bien</h2>
                                        <p className="text-gray-500 font-light text-sm">Précisez les caractéristiques pour une analyse fine.</p>
                                    </div>

                                    {/* Type de bien */}
                                    <div className="space-y-4">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2"><Home size={14} /> Type de propriété</label>
                                        <div className="flex gap-4">
                                            {['Maison', 'Appartement', 'Terrain'].map((type) => (
                                                <button
                                                    type="button"
                                                    key={type}
                                                    onClick={() => setPropertyType(type)}
                                                    className={`flex-1 py-4 rounded-[10px] border font-bold text-sm transition-all duration-300 ${propertyType === type ? 'bg-textMain text-white border-textMain  shadow-textMain/20' : 'bg-surface text-gray-500 border-transparent hover:border-gray-200 hover:bg-gray-50'}`}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Details Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">Surface (m²)</label>
                                            <div className="relative group">
                                                <Ruler className="absolute left-4 top-[1.1rem] text-gray-400 group-hover:text-primary transition-colors" size={18} />
                                                <input type="number" name="surface_m2" placeholder="ex: 120 (facultatif)" className={`${FORM_FIELD_CLASS} pl-12`} />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">Nombre de pièces</label>
                                            <input type="number" name="nombre_pieces" placeholder="ex: 4 (facultatif)" className={FORM_FIELD_CLASS} />
                                        </div>
                                    </div>

                                    {/* Localisation */}
                                    <div className="space-y-3">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2"><MapPin size={14} /> Localisation</label>
                                        <input type="text" name="adresse" placeholder="Commune ou adresse du bien" className={FORM_FIELD_CLASS} required />
                                    </div>

                                    {/* DPE */}
                                    <div className="space-y-4">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2"><FileText size={14} /> Classe Énergétique</label>
                                        <div className="flex flex-wrap gap-3">
                                            {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((letter) => (
                                                <button
                                                    type="button"
                                                    key={letter}
                                                    onClick={() => setDpe(letter)}
                                                    className={`w-12 h-12 rounded-lg font-bold text-lg transition-all duration-300 border ${dpe === letter ? 'bg-textMain text-white border-textMain ' : 'bg-surface text-gray-500 border-transparent hover:border-gray-200'}`}
                                                >
                                                    {letter}
                                                </button>
                                            ))}
                                            <button type="button" onClick={() => setDpe('Inconnu')} className={`px-6 h-12 rounded-lg font-bold text-sm transition-all duration-300 border ${dpe === 'Inconnu' ? 'bg-textMain text-white border-textMain ' : 'bg-surface text-gray-500 border-transparent hover:border-gray-200'}`}>
                                                Je n'en ai pas
                                            </button>
                                        </div>
                                    </div>

                                    <hr className="border-gray-100 my-8" />

                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-textMain tracking-tight">Vos Coordonnées</h3>
                                        <p className="text-gray-500 font-light text-sm">Mickaël vous rappelle sous 24 h pour convenir de la visite.</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <input type="text" name="nom" placeholder="Nom complet" className={FORM_FIELD_CLASS} required />
                                        <input type="email" name="email" placeholder="Email (facultatif)" className={FORM_FIELD_CLASS} />
                                    </div>
                                    <SourceField id="estimation-source" labelClassName="sr-only" selectClassName={`${FORM_FIELD_CLASS} text-gray-500`} />
                                    <div className="pb-4">
                                        <input type="tel" name="telephone" placeholder="Téléphone" className={FORM_FIELD_CLASS} required />
                                    </div>

                                    <PillButton type="submit" disabled={status === 'loading'} className="mt-6">
                                        {status === 'loading' ? 'Envoi en cours…' : "Recevoir mon estimation gratuite"}
                                    </PillButton>

                                    {status === 'loading' && (
                                        <p className="text-gray-400 font-medium mt-2 text-center">Envoi en cours...</p>
                                    )}
                                    {status === 'error' && (
                                        <p className="text-red-500 font-medium mt-2 text-center">Une erreur est survenue. Appelez directement le <a href="tel:+33769313502" className="underline">07 69 31 35 02</a>.</p>
                                    )}
                                </m.form>
                            ) : (
                                    <m.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                        className="bg-surface p-10 rounded-[10px] text-center py-24 relative z-10 border border-primary/10"
                                    >
                                        <div className="inline-flex bg-white p-5 rounded-full mb-8 text-primary">
                                            <CheckCircle size={56} strokeWidth={1.5} />
                                        </div>
                                        <h4 className="text-3xl font-bold text-textMain mb-4 tracking-tight">✅ Message envoyé !</h4>
                                        <p className="text-gray-500 text-lg font-light leading-relaxed max-w-sm mx-auto">
                                            Mickaël vous recontactera pour préciser votre projet et préparer votre estimation en toute confidentialité.
                                        </p>
                                    </m.div>
                            )}
                            </AnimatePresence>
                        </div>
                    </m.div>

                    {/* Agent / Info Side */}
                    <m.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-32"
                    >
                        {/* Why Us Card */}
                        <div className="relative overflow-hidden rounded-2xl bg-[#011d41] p-9 text-white md:p-11">

                            <div className="relative z-10">
                                <h3 className="mb-8 font-serif text-3xl font-normal leading-[1.2] tracking-tight">Une estimation qui s’explique.</h3>
                                <ul className="space-y-6 mb-8">
                                    <li className="flex items-start gap-4">
                                        <div className="mt-1 bg-white/10 p-1.5 rounded-full"><CheckCircle size={16} className="text-accent" /></div>
                                        <span className="text-white/80 font-light leading-relaxed">Connaissance experte de Gex et des fluctuations transfrontalières.</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="mt-1 bg-white/10 p-1.5 rounded-full"><CheckCircle size={16} className="text-accent" /></div>
                                        <span className="text-white/80 font-light leading-relaxed">Accès à un portefeuille de clients privilégiés en recherche active.</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="mt-1 bg-white/10 p-1.5 rounded-full"><CheckCircle size={16} className="text-accent" /></div>
                                        <span className="text-white/80 font-light leading-relaxed">Un échange discret pour définir la suite qui vous convient.</span>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        {/* Agent Profile */}
                        <div className="group flex flex-col items-center gap-8 rounded-2xl border border-[#ebebeb] bg-white p-8 md:flex-row md:p-10">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
                                <img
                                    src={IMAGES.heroAgent}
                                    alt="Mickaël Lima"
                                    className="w-32 h-32 rounded-full object-cover border-4 border-white relative z-10"
                                />
                            </div>
                            <div className="text-center md:text-left text-textMain">
                                <h4 className="text-2xl font-bold tracking-tight mb-1">Mickaël Lima</h4>
                                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Agent immobilier indépendant</p>
                                <div className="flex items-center justify-center md:justify-start gap-3 bg-surface border border-gray-100 px-5 py-3 rounded-[10px] w-fit mx-auto md:mx-0 shadow-inner group-hover:bg-primary/5 transition-colors">
                                    <Phone size={18} className="text-primary" />
                                    <span className="font-bold tracking-wide">+33 7 69 31 35 02</span>
                                </div>
                            </div>
                        </div>

                    </m.div>
                </div>
            </div>
        </section>

        {/* ── Méthode ── */}
        <section aria-labelledby="estimation-methode-title" className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 id="estimation-methode-title" className="text-3xl md:text-4xl font-medium text-textMain tracking-tight mb-10">
                    Comment se passe l’estimation
                </h2>
                <ol className="grid gap-6 md:grid-cols-3">
                    {[
                        ['1. Rappel sous 24 h', 'Mickaël vous appelle pour comprendre votre projet et vos délais, puis fixe la visite avec vous.'],
                        ['2. Visite du bien', 'État, surfaces, exposition, vue, travaux, environnement : ce qu’aucun simulateur en ligne ne voit.'],
                        ['3. Avis de valeur argumenté', 'Une fourchette de prix expliquée, appuyée sur les ventes comparables (DVF) de votre commune et sur le marché frontalier.'],
                    ].map(([titre, texte]) => (
                        <li key={titre} className="rounded-2xl border border-[#ebebeb] bg-surface p-7">
                            <p className="text-lg font-bold text-textMain">{titre}</p>
                            <p className="mt-2 font-light leading-relaxed text-gray-600">{texte}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>

        {/* ── Avis ── */}
        <section aria-labelledby="estimation-avis-title" className="py-20 bg-surface border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 id="estimation-avis-title" className="text-3xl md:text-4xl font-medium text-textMain tracking-tight">
                    Ils lui ont confié leur bien
                </h2>
                <p className="mt-3 text-gray-500 font-light">
                    Avis publiés sur Google · 5,0 sur {GOOGLE_REVIEWS_COUNT} avis ·{' '}
                    <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="underline">voir tous les avis</a>
                </p>
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {ESTIMATION_REVIEWS.map((t) => (
                        <figure key={t.name} className="m-0 rounded-2xl border border-[#ebebeb] bg-white p-7">
                            <blockquote className="m-0 font-light leading-relaxed text-gray-600">« {t.quote} »</blockquote>
                            <figcaption className="mt-5 text-sm">
                                <span className="font-bold text-textMain">{t.name}</span>
                                <span className="text-gray-500"> · {t.context}</span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>

        {/* ── Ventes réalisées ── */}
        <section aria-labelledby="estimation-ventes-title" className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 id="estimation-ventes-title" className="text-3xl md:text-4xl font-medium text-textMain tracking-tight mb-10">
                    Ventes réalisées dans le Pays de Gex
                </h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {BIENS.filter((b) => b.status === 'Vendu').map((b) => (
                        <Link key={b.slug} to={`/nos-biens/${b.slug}/`} className="group block overflow-hidden rounded-2xl border border-[#ebebeb] bg-surface">
                            {b.photos[0] && (
                                <img src={b.photos[0].replace(/\.webp$/, "-800.webp")} alt={`Bien vendu à ${b.city} : ${b.typeLabel}`} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            )}
                            <div className="p-4">
                                <p className="text-xs font-bold uppercase tracking-widest text-primary/60">Vendu</p>
                                <p className="mt-1 font-bold text-textMain">{b.typeLabel}</p>
                                <p className="text-sm text-gray-500">{b.city} · {Math.round(b.surface)} m²</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>

        {/* ── FAQ ── */}
        <section aria-labelledby="estimation-faq-title" className="py-20 bg-surface border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 id="estimation-faq-title" className="text-3xl md:text-4xl font-medium text-textMain tracking-tight mb-10">
                    Questions fréquentes sur l’estimation
                </h2>
                <div className="space-y-4">
                    {ESTIMATION_FAQ.map((f) => (
                        <div key={f.q} className="rounded-2xl border border-[#ebebeb] bg-white p-6">
                            <h3 className="text-lg font-bold text-textMain">{f.q}</h3>
                            <p className="mt-2 font-light leading-relaxed text-gray-600">{f.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* ── Estimation par commune ── */}
        <section aria-labelledby="estimation-communes-title" className="py-20 bg-surface border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                        Pays de Gex
                    </span>
                    <h2 id="estimation-communes-title" className="text-3xl md:text-4xl font-medium text-textMain tracking-tight">
                        Estimation par commune
                    </h2>
                    <p className="text-gray-500 font-light mt-3 max-w-lg mx-auto">
                        Chaque commune du Pays de Gex a son propre marché. Consultez les prix et demandez une estimation précise pour votre secteur.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 max-w-5xl mx-auto">
                    {COMMUNES.map((c) => {
                        const image = COMMUNE_CARD_IMAGES[c.slug];
                        return (
                        <Link
                            key={c.slug}
                            to={`/${c.slug}/estimation-immobiliere/`}
                            aria-label={`Estimer un bien à ${c.name}`}
                            className="group relative block h-36 overflow-hidden rounded-[20px] bg-[#011d41] shadow-sm sm:h-44 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#011d41]"
                        >
                            <picture>
                                {image.mobileSrc && <source media="(max-width: 767px)" srcSet={image.mobileSrc} />}
                                <img
                                    src={image.src}
                                    srcSet={image.variants?.length && image.width ? [...image.variants.map((w) => `${image.src.replace(/\.webp$/, `-${w}.webp`)} ${w}w`), `${image.src} ${image.width}w`].join(', ') : undefined}
                                    sizes="(min-width: 1024px) 330px, (min-width: 640px) 33vw, 50vw"
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none"
                                    style={{ objectPosition: image.objectPosition }}
                                />
                            </picture>
                            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#011d41]/90 via-[#011d41]/25 to-black/10" />
                            <span aria-hidden="true" className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#011d41] transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none sm:right-4 sm:top-4">
                                <ArrowUpRight size={16} />
                            </span>
                            <span className="absolute inset-x-0 bottom-0 p-4 font-serif text-lg leading-tight tracking-tight text-white sm:p-5 sm:text-2xl">
                                {c.name}
                            </span>
                        </Link>
                        );
                    })}
                </div>
            </div>
        </section>
        </>
    );
};
