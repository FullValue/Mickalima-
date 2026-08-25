import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Star, ArrowRight, MessageSquare, Clock, Globe, ShieldCheck, ChevronDown } from 'lucide-react';
import { SEO } from './SEO';
import { IMAGES } from '../constants';
import { buildWhatsappUrl, WHATSAPP_PATH } from './oakline/whatsapp';
import { track } from './oakline/tracking';
import { m } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const CONTACT_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact — Mickaël Lima Agent Immobilier Pays de Gex',
    url: 'https://mickael-lima.immo/contact/',
    mainEntity: {
        '@type': 'RealEstateAgent',
        name: 'Mickaël Lima — L’agence Immo',
        telephone: '+33769313502',
        email: 'contact@mickael-lima.immo',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '328 Rue des Fontanettes',
            addressLocality: 'Divonne-les-Bains',
            postalCode: '01220',
            addressCountry: 'FR',
        },
    },
};

export const ContactPage: React.FC = () => {
    const [activeFaq, setActiveFaq] = React.useState<number | null>(null);
    const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        formData.append('access_key', '38f90cdc-9f17-48ef-bae6-f94e9b44e41f');
        formData.append('subject', 'Contact — mickael-lima.immo');
        formData.append('from_name', 'mickael-lima.immo');
        formData.append('botcheck', '');

        const object = Object.fromEntries(formData);
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
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                console.error('Web3Forms error:', data);
                setStatus('error');
            }
        } catch (err) {
            console.error('Fetch error:', err);
            setStatus('error');
        }
    };

    const faqs = [
        {
            question: "Combien de temps prend une estimation complète ?",
            answer: "Une estimation sérieuse nécessite généralement 48h. Nous nous déplaçons d'abord sur site pour analyser votre bien, puis nous étudions les données marché avant de vous remettre un dossier complet et confidentiel."
        },
        {
            question: "Proposez-vous des mandats simples ou uniquement exclusifs ?",
            answer: "Si nous privilégions le Mandat Exclusif pour un investissement marketing maximal (vidéo, reportage photo premium, diffusion prioritaire), nous proposons également un Mandat Signature offrant une flexibilité totale."
        },
        {
            question: "Comment garantissez-vous la confidentialité de la vente ?",
            answer: "Nous pouvons opter pour une commercialisation 'Off-Market'. Dans ce cadre, aucune annonce publique n'est diffusée. Nous sollicitons uniquement notre réseau d'acquéreurs préalablement qualifiés et financièrement solides."
        },
        {
            question: "Couvrez-vous le bassin Genevois ?",
            answer: "Absolument. Notre expertise historique se situe dans le Pays de Gex et l'agglomération frontalière, ce qui nous permet d'attirer une clientèle locale et internationale à fort pouvoir d'achat."
        }
    ];

    return (
        <>
        <SEO
            title="Contact | Estimation Gratuite — Mickaël Lima Pays de Gex"
            description="Contactez Mickaël Lima pour une estimation gratuite et confidentielle de votre bien dans le Pays de Gex. Réponse sous 48h, déplacement sur site inclus."
            canonical="/contact"
            schema={CONTACT_SCHEMA}
        />
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[620px] flex items-center overflow-hidden bg-primary">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/contact-hero.jpg"
                        width="1920"
                        height="1080"
                        loading="eager"
                        decoding="async"
                        alt="Contact"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#011d41]/95 via-[#011d41]/60 to-[#011d41]/10 z-10"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-left text-white mt-16">
                    <div className="flex items-center gap-7 text-white/90 text-sm font-bold uppercase tracking-[0.2em] mb-8 animate-fade-in-up">
                        <span className="inline-flex items-center gap-2 whitespace-nowrap"><MessageSquare size={16} /> Contact & Échanges</span>
                        <span aria-hidden="true" className="flex-1 h-px bg-white/25"></span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-medium mb-6 leading-[1.05] tracking-tight animate-fade-in-up delay-100 break-words hyphens-auto">
                        Votre projet commence <br />
                        <span className="font-newsletter italic font-normal">ici.</span>
                    </h1>
                </div>
            </section>

            <section className="py-20 relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute top-0 right-0 w-1/3 h-[800px] bg-primary/5 skew-x-12 translate-x-1/2 opacity-50 pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10 pt-10">

                    {/* Main Container - Rounded Split Layout */}
                    <m.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col lg:flex-row bg-white/80 backdrop-blur-2xl rounded-[10px] overflow-hidden min-h-[750px] border border-white/50"
                    >

                        {/* Left Side (Dark / Glassmorphism) */}
                        <div className="lg:w-5/12 p-12 md:p-16 text-white flex flex-col justify-between relative overflow-hidden bg-primary">
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0 z-0">
                                <img src={IMAGES.cardImage} alt="Contact bg" className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale" />
                                <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/95 to-primary z-10"></div>
                            </div>

                            {/* Background Decor */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none z-10"></div>

                            <m.div
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                                className="relative z-20"
                            >
                                {/* Pill Badge */}
                                <m.div variants={fadeInUp} className="inline-flex items-center gap-3 border border-white/20 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-12 shadow-sm">
                                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                                    Contact
                                </m.div>

                                <m.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.05] mb-8 break-words hyphens-auto">
                                    Parlons de <br />
                                    <span className="font-newsletter italic font-normal text-white">votre projet.</span>
                                </m.h2>
                                <m.p variants={fadeInUp} className="text-xl text-white/70 leading-relaxed max-w-sm mb-16 font-light">
                                    Une question, une estimation, un projet de vente ? Je suis à votre écoute pour un échange confidentiel et sans engagement.
                                </m.p>

                                {/* Quick Contact Info embedded — 2 modes : appel direct + formulaire */}
                                <m.div variants={staggerContainer} className="space-y-6 mb-16">
                                    <m.a variants={fadeInUp} href="tel:+33769313502" className="flex items-center gap-5 group w-fit">
                                        <div className="w-12 h-12 rounded-[10px] bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-300">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <span className="font-bold text-xl tracking-wide group-hover:text-white/80 transition-colors block">07 69 31 35 02</span>
                                            <span className="text-xs font-bold text-accent uppercase tracking-widest">Appel direct</span>
                                        </div>
                                    </m.a>
                                    <m.a variants={fadeInUp} href="mailto:contact@mickael-lima.immo" className="flex items-center gap-5 group w-fit">
                                        <div className="w-12 h-12 rounded-[10px] bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-300">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <span className="font-bold text-xl tracking-wide group-hover:text-white/80 transition-colors block">contact@mickael-lima.immo</span>
                                            <span className="text-xs font-bold text-accent uppercase tracking-widest">Réponse sous 24h</span>
                                        </div>
                                    </m.a>
                                </m.div>
                            </m.div>

                            {/* Bottom Reviews */}
                            <m.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8, duration: 1 }}
                                className="flex items-center gap-6 mt-auto relative z-20 pt-10 border-t border-white/10"
                            >
                                <div className="flex -space-x-4">
                                    {[1, 2, 3].map((i) => (
                                        <img
                                            key={i}
                                            src={`https://i.pravatar.cc/100?img=${i + 30}`}
                                            alt="Client"
                                            className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                                        />
                                    ))}
                                </div>
                                <div>
                                    <div className="flex items-center gap-1 text-accent mb-1">
                                        <Star size={16} fill="currentColor" />
                                        <span className="font-bold text-white text-lg ml-2">5/5</span>
                                    </div>
                                    <p className="text-sm text-white/50 font-bold uppercase tracking-widest">25 Avis Clients</p>
                                </div>
                            </m.div>
                        </div>

                        {/* Right Side (White Form) */}
                        <div className="lg:w-7/12 bg-white p-12 md:p-16 flex flex-col justify-center relative">
                            <m.form
                                onSubmit={handleSubmit}
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                                className="space-y-8 max-w-xl mx-auto w-full relative z-10"
                            >
                                {/* Web3Forms hidden inputs */}
                                <input type="hidden" name="access_key" value="38f90cdc-9f17-48ef-bae6-f94e9b44e41f" />
                                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                                <m.div variants={fadeInUp} className="space-y-3">
                                    <label className="text-textMain font-bold text-sm uppercase tracking-widest ml-1 text-gray-500">Nom complet</label>
                                    <input
                                        type="text"
                                        name="nom"
                                        required
                                        placeholder="ex: Jean Dupont"
                                        className="w-full bg-surface border-2 border-transparent focus:border-primary/20 hover:border-gray-200 rounded-[10px] p-5 text-lg font-medium outline-none transition-all placeholder:text-gray-400 shadow-sm"
                                    />
                                </m.div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <m.div variants={fadeInUp} className="space-y-3">
                                        <label className="text-textMain font-bold text-sm uppercase tracking-widest ml-1 text-gray-500">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="jean@exemple.com"
                                            className="w-full bg-surface border-2 border-transparent focus:border-primary/20 hover:border-gray-200 rounded-[10px] p-5 text-lg font-medium outline-none transition-all placeholder:text-gray-400 shadow-sm"
                                        />
                                    </m.div>
                                    <m.div variants={fadeInUp} className="space-y-3">
                                        <label className="text-textMain font-bold text-sm uppercase tracking-widest ml-1 text-gray-500">Téléphone</label>
                                        <input
                                            type="tel"
                                            name="telephone"
                                            required
                                            placeholder="06 12 34 56 78"
                                            className="w-full bg-surface border-2 border-transparent focus:border-primary/20 hover:border-gray-200 rounded-[10px] p-5 text-lg font-medium outline-none transition-all placeholder:text-gray-400 shadow-sm"
                                        />
                                    </m.div>
                                </div>

                                <m.div variants={fadeInUp} className="space-y-3">
                                    <label className="text-textMain font-bold text-sm uppercase tracking-widest ml-1 text-gray-500">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        placeholder="Parlez-nous de votre projet..."
                                        className="w-full h-40 bg-surface border-2 border-transparent focus:border-primary/20 hover:border-gray-200 rounded-[10px] p-5 text-lg font-medium outline-none transition-all resize-none placeholder:text-gray-400 shadow-sm"
                                    ></textarea>
                                </m.div>

                                <m.button type="submit" disabled={status === 'loading'} variants={fadeInUp} className="group w-full bg-white text-textMain border border-gray-200 rounded-full p-2 pr-8 font-bold text-xl flex items-center gap-4 hover:bg-gray-50 transition-all duration-500 shadow-sm transform hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                                    <div className="w-14 h-14 bg-textMain text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500 shrink-0">
                                        <ArrowUpRight size={24} />
                                    </div>
                                    <span className="tracking-wide">{status === 'loading' ? 'Envoi en cours…' : 'Envoyer la demande'}</span>
                                </m.button>

                                {status === 'success' && (
                                    <div className="mt-2 text-center">
                                        <p className="font-medium text-green-600">
                                            ✅ Message envoyé ! Notre équipe vous recontacte sous 24h.
                                        </p>
                                        <a
                                            href={buildWhatsappUrl("Bonjour, je viens de vous transmettre une demande d'estimation depuis votre site.")}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => track('whatsapp_click_post_estimation', { page: '/contact' })}
                                            className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                                        >
                                            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4"><path d={WHATSAPP_PATH} /></svg>
                                            Continuer sur WhatsApp
                                        </a>
                                    </div>
                                )}
                                {status === 'error' && (
                                    <p className="text-red-500 font-medium mt-2 text-center">
                                        Une erreur est survenue. Appelez directement le <a href="tel:+33769313502" className="underline">07 69 31 35 02</a>.
                                    </p>
                                )}
                                {status === 'loading' && (
                                    <p className="text-gray-400 font-medium mt-2 text-center">
                                        Envoi en cours...
                                    </p>
                                )}

                            </m.form>
                        </div>

                    </m.div>
                </div>
            </section>

            {/* --- NOUVELLES SECTIONS --- */}

            {/* Section Engagements */}
            <section className="py-24 bg-white relative border-t border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">Notre charte</span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain tracking-tight leading-[1.05] break-words hyphens-auto">
                            Notre charte <br />
                            <span className="font-newsletter italic font-normal">d'engagement.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-surface p-10 rounded-[10px] border border-gray-100 transition-shadow duration-300">
                            <div className="w-14 h-14 bg-white rounded-[10px] shadow-sm flex items-center justify-center mb-6 text-primary">
                                <Clock size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-textMain mb-4">Réactivité absolue</h3>
                            <p className="text-gray-600 leading-relaxed font-light text-lg">Un interlocuteur unique. Réponse garantie sous 24h sur chaque demande, retour systématique après chaque visite.</p>
                        </div>
                        <div className="bg-surface p-10 rounded-[10px] border border-gray-100 transition-shadow duration-300">
                            <div className="w-14 h-14 bg-white rounded-[10px] shadow-sm flex items-center justify-center mb-6 text-primary">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-textMain mb-4">Sélection rigoureuse</h3>
                            <p className="text-gray-600 leading-relaxed font-light text-lg">Finis les visites curieuses. Chaque profil acquéreur est analysé et son financement pré-validé avant d'entrer chez vous.</p>
                        </div>
                        <div className="bg-surface p-10 rounded-[10px] border border-gray-100 transition-shadow duration-300">
                            <div className="w-14 h-14 bg-white rounded-[10px] shadow-sm flex items-center justify-center mb-6 text-primary">
                                <Globe size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-textMain mb-4">Portée internationale</h3>
                            <p className="text-gray-600 leading-relaxed font-light text-lg">Des connexions solides avec une clientèle frontalière, expatriée et des partenaires de relocalisation reconnus.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section FAQ & Bureaux */}
            <section className="py-24 bg-surface relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-50 z-0"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain tracking-tight leading-[1.05] break-words hyphens-auto">Questions <span className="font-newsletter italic font-normal">fréquentes</span></h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 items-stretch">

                        {/* Left: FAQ */}
                        <div className="lg:w-7/12 flex flex-col justify-center">
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className={`bg-white rounded-[10px] border ${activeFaq === index ? 'border-primary ' : 'border-gray-100'} overflow-hidden transition-all duration-300`}
                                    >
                                        <button
                                            onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                            className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
                                        >
                                            <span className={`font-bold text-lg ${activeFaq === index ? 'text-primary' : 'text-textMain'}`}>{faq.question}</span>
                                            <ChevronDown className={`shrink-0 transition-transform duration-300 ${activeFaq === index ? 'rotate-180 text-primary' : 'text-gray-400'}`} />
                                        </button>
                                        <div
                                            className={`px-6 grid transition-[grid-template-rows,opacity] duration-300 ease-out ${activeFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                        >
                                            <div className="overflow-hidden min-h-0"><p className="text-gray-600 leading-relaxed font-light pb-6">{faq.answer}</p></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Info Complementaire (Bureau, etc) */}
                        <div className="lg:w-5/12">
                            <div className="bg-primary text-white rounded-[10px] p-10 md:p-12 relative overflow-hidden group h-full flex flex-col justify-center">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-white/10 transition-colors duration-700"></div>

                                <h3 className="text-2xl font-bold mb-8">Zone d'intervention</h3>

                                <div className="flex gap-6 mb-8 group/item">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover/item:border-accent transition-colors">
                                        <MapPin size={20} className="text-accent" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg mb-1">Pays de Gex (01)</p>
                                        <p className="text-white/70 font-medium leading-relaxed">
                                            Intervention sur tout le secteur
                                            <span className="text-xs font-light italic mt-1 block">Réponse sous 24h</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-md border border-white/15 rounded-[10px] p-6 mb-8">
                                    <p className="text-[0.65rem] font-bold uppercase tracking-widest text-accent mb-3">Communes couvertes</p>
                                    <p className="text-white/85 text-sm font-medium leading-relaxed">
                                        Intervention sur tout le Pays de Gex — <strong className="font-semibold text-white">Ferney-Voltaire</strong>, <strong className="font-semibold text-white">Divonne-les-Bains</strong>, <strong className="font-semibold text-white">Saint-Genis-Pouilly</strong>, <strong className="font-semibold text-white">Gex</strong>, <strong className="font-semibold text-white">Prévessin-Moëns</strong> et communes voisines.
                                    </p>
                                </div>

                                <div className="flex gap-6 pt-8 border-t border-white/10 group/item">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover/item:border-accent transition-colors">
                                        <MessageSquare size={20} className="text-accent" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg mb-1">WhatsApp Privé</p>
                                        <p className="text-white/70 font-medium leading-relaxed mb-4">
                                            Une messagerie directe pour un échange immédiat et confidentiel.
                                        </p>
                                        <a href="https://wa.me/33769313502" className="inline-flex items-center gap-2 text-accent font-bold hover:text-white transition-colors">
                                            Démarrer le chat <ArrowRight size={16} />
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