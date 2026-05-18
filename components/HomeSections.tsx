import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle, Users, Globe, Eye, MessageSquare, Heart, Target, Layers, TrendingUp, Star, Award, ShieldCheck, ArrowRight, Play, ArrowUpRight, Phone, Calendar, Home, ChevronRight, CheckCircle2, ChevronDown, Search, Building, MapPin } from 'lucide-react';
import { IMAGES, BLOG_POSTS, COMMUNES } from '../constants';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};

/* DESIGN 1: SERVICES GRID (Positioning) */
export const Positioning: React.FC = () => {
    return (
        <section className="pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-24 lg:pb-32 bg-white relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-12 md:mb-20 gap-8 md:gap-10">
                    <div className="lg:w-7/12 w-full">
                        <m.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200/60 bg-white/60 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
                        >
                            <Target size={16} /> Expertise Locale
                        </m.div>
                        <m.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain tracking-tight leading-[1.05] hyphens-auto break-words"
                        >
                            Une approche pour les <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary font-newsletter italic font-normal">vendeurs exigeants.</span>
                        </m.h2>
                    </div>
                    <div className="lg:w-5/12 pt-2">
                        <m.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg text-gray-500 leading-relaxed font-light"
                        >
                            Le marché immobilier du Pays de Gex est dynamique, mais très concurrentiel. Aujourd'hui, un bien ne se vend plus uniquement grâce à une simple annonce en ligne. Il requiert une stratégie globale, des outils performants et un accompagnement sur mesure pour sécuriser votre vente.
                        </m.p>
                    </div>
                </div>

                <div className="flex md:grid md:grid-cols-2 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none no-scrollbar -mx-6 md:mx-0 px-6 md:px-0 gap-4 md:gap-6 pb-4 md:pb-0">
                    {[
                        { icon: Home, title: "Estimation Juste", text: "Évaluation précise de votre bien immobilier au juste prix du marché local, sans complaisance pour garantir une vente fluide." },
                        { icon: Star, title: "Présentation Premium", text: "Mise en valeur exceptionnelle (photos professionnelles, vidéos 4K, immersion 3D) pour déclencher le coup de cœur immédiat." },
                        { icon: Target, title: "Visibilité Ciblée", text: "Diffusion puissante sur plus de 40 portails de premier plan et mise en avant auprès de notre communauté qualifiée sur les réseaux sociaux." },
                        { icon: ShieldCheck, title: "Vente Sécurisée", text: "Validation systématique et rigoureuse du financement de chaque acquéreur et encadrement juridique strict de bout en bout." }
                    ].map((item, idx) => (
                        <m.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-5%" }}
                            transition={{ duration: 0.7, delay: idx * 0.15 }}
                            className="snap-start shrink-0 md:shrink w-[85%] md:w-auto bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] p-7 md:p-10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 group"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.25rem] bg-surface flex items-center justify-center mb-6 md:mb-8 border border-gray-100 group-hover:bg-primary group-hover:text-white transition-colors duration-500 text-primary shadow-inner">
                                <item.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-textMain mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed font-light text-base md:text-lg">
                                {item.text}
                            </p>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* UNCHANGED PROBLEMATIC */
export const Problematic: React.FC = () => (
    <section className="py-16 md:py-24 lg:py-32 bg-surface relative overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-6 relative z-10">
            <m.div
                className="text-center max-w-5xl mx-auto mb-16 lg:mb-20 px-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200/60 bg-white/60 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                    <Layers size={16} /> 01. Nouvelle approche
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain mb-6 leading-[1.1] tracking-tight drop-shadow-sm">
                    Pourquoi certains biens se vendent mieux <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">que d'autres</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
                    Deux biens similaires peuvent obtenir des résultats très différents. <br className="hidden md:block" />
                    La différence ne se fait pas sur la chance, mais sur :
                </p>
            </m.div>

            <div className="max-w-6xl mx-auto relative mb-12">
                <m.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl relative"
                >
                    <img src="/images/villa-fontaine-cour-lueur-du-soir_1167636-26973.jpg" alt="Notre approche" width="1200" height="800" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-primary/10"></div>
                </m.div>

                <div className="relative z-20 mt-8 md:-mt-20 lg:-mt-28 md:px-8">
                    <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none no-scrollbar -mx-6 md:mx-0 px-6 md:px-0 gap-4 md:gap-6 pb-4 md:pb-0">
                        {[
                            "La qualité de la mise en valeur",
                            "La perception du bien par les acheteurs",
                            "La stratégie de diffusion"
                        ].map((point, idx) => (
                            <m.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.8, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                                className="snap-start shrink-0 md:shrink w-[80%] md:w-auto bg-white rounded-[2rem] p-7 md:p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col items-center justify-center min-h-[180px] md:min-h-[160px] lg:min-h-[240px] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] hover:border-primary/20 transition-all duration-500 group relative overflow-hidden"
                            >
                                {/* Subtle decorative glow */}
                                <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/5 rounded-full blur-[20px] group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none"></div>

                                {/* Numbers indicator */}
                                <span className="text-xs font-bold tracking-widest text-gray-400 group-hover:text-primary transition-colors duration-500 uppercase mb-4">
                                    Principe 0{idx + 1}
                                </span>

                                <h3 className="text-xl md:text-2xl font-bold text-textMain leading-[1.3] tracking-tight text-center relative z-10 group-hover:text-primary transition-colors duration-300">
                                    {point.charAt(0).toUpperCase() + point.slice(1)}
                                </h3>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-gradient-to-r from-blue-500 to-primary group-hover:w-1/2 transition-all duration-500 rounded-t-full"></div>
                            </m.div>
                        ))}
                    </div>
                </div>
            </div>

            <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-center mt-12 md:mt-20"
            >
                <p className="text-2xl md:text-3xl text-textMain font-bold leading-relaxed max-w-4xl mx-auto">
                    Un bien valorisé intelligemment crée de l’intérêt, de la rareté et limite naturellement les négociations.
                </p>
            </m.div>
        </div>
    </section>
);

/* DESIGN 4: FEATURED LISTING / STATS (Visibility) */
const portalLogos = [
    { src: '/images/seloger.png', alt: 'SeLoger', href: 'https://www.seloger.com/professionnels-immobilier/2bccyjgnD7SN5UJ1TfrRMy', title: 'Mickaël Lima sur SeLoger' },
    { src: '/images/leboncoin.png', alt: 'Leboncoin', href: 'https://www.leboncoin.fr/boutique/7395512/', title: 'Mickaël Lima sur Leboncoin' },
    { src: '/images/bienici-logo.svg', alt: 'BienIci', href: 'https://www.bienici.com/', title: 'Mickaël Lima sur BienIci' },
    { src: '/images/logo_logicimmo.png', alt: 'LogicImmo', href: 'https://www.logic-immo.com/agences-immobilieres/2bccyjgnD7SN5UJ1TfrRMy', title: 'Mickaël Lima sur Logic-Immo' },
    { src: '/images/lefigaroimmo.png', alt: 'Figaro Immobilier', href: 'https://immobilier.lefigaro.fr/', title: 'Mickaël Lima sur Figaro Immobilier' },
    { src: '/images/logoluxuryestate.png', alt: 'Luxury Estate', href: 'https://www.luxuryestate.com/', title: 'Mickaël Lima sur Luxury Estate' },
];

export const Visibility: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Tentative de play après mount — ignore les erreurs de policy mobile
        const v = videoRef.current;
        if (!v) return;
        const tryPlay = () => v.play().catch(() => {});
        tryPlay();
        // Retry quand metadata loadée (sécurité)
        v.addEventListener('loadedmetadata', tryPlay);
        return () => v.removeEventListener('loadedmetadata', tryPlay);
    }, []);

    return (
        <section className="pt-16 md:pt-24 lg:pt-32 pb-0 md:pb-8 bg-white relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
                    {/* Video Left — plus petit, hauteur s'aligne sur le bloc droit */}
                    <m.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 w-full relative aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[640px] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-gray-100 bg-primary/10 cursor-pointer"
                        onClick={() => videoRef.current?.play().catch(() => {})}
                    >
                        <video
                            ref={videoRef}
                            muted
                            loop
                            playsInline
                            autoPlay
                            preload="none"
                            aria-label="Visibilité Maximale — Vidéo de présentation Villa Grilly"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        >
                            <source src="/video/villa-grilly-hero.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/85 to-transparent pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 p-8 lg:p-10 w-full text-white pointer-events-none">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-2 tracking-tight">Visibilité Maximale</h3>
                            <p className="text-white/80 text-base lg:text-lg font-light">
                                Diffusion large et ciblée sur les portails majeurs et réseaux sociaux.
                            </p>
                        </div>
                    </m.div>

                    {/* Text Right — col-span-6 (balanced avec la vidéo) */}
                    <div className="lg:col-span-6 flex flex-col justify-center">
                        <m.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200/60 bg-white/60 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                                <Globe size={16} /> 02. Diffusion Massive
                            </div>
                            <h3 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] text-textMain tracking-tight mb-6 font-serif italic drop-shadow-sm">
                                "Une exposition qui <br className="hidden md:block" />fait <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">la différence.</span>"
                            </h3>
                            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-10 max-w-lg">
                                Plus de contacts, des visites ciblées et efficaces pour votre transaction.
                            </p>

                            <div className="flex items-center gap-4 mb-12">
                                <img src={IMAGES.heroAgent} alt="Agent" className="w-14 h-14 rounded-full object-cover shadow-md border-2 border-white" />
                                <div>
                                    <h4 className="font-bold text-textMain text-lg">Notre Agence</h4>
                                    <p className="text-sm text-gray-500 font-medium tracking-wide uppercase mt-0.5">Expertise Locale</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-12 lg:gap-20 border-t border-gray-100 pt-10">
                                <div>
                                    <div className="text-5xl md:text-6xl font-bold text-textMain tracking-tighter mb-2 leading-none">40+</div>
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-3 whitespace-nowrap">Portails Immobiliers</div>
                                </div>
                                <div>
                                    <div className="text-5xl md:text-6xl font-bold text-textMain tracking-tighter mb-2 leading-none">30k+</div>
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-3 whitespace-nowrap">Audience Mensuelle</div>
                                </div>
                            </div>
                        </m.div>
                    </div>
                </div>
            </div>

            {/* Scrolling Logos */}
            <div className="w-full mt-24 border-t border-gray-100 pt-16 pb-8 overflow-hidden relative flex items-center">
                <div className="absolute left-0 w-24 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 w-24 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <m.div
                    className="flex flex-nowrap gap-16 md:gap-24 items-center min-w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                >
                    {[...portalLogos, ...portalLogos, ...portalLogos].map((logo, idx) => (
                        <a key={idx} href={logo.href} target="_blank" rel="noopener noreferrer" title={logo.title} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 px-4 shrink-0 w-32 md:w-48">
                            <img src={logo.src} alt={logo.alt} width="200" height="60" loading="lazy" decoding="async" className="max-h-10 md:max-h-14 w-auto object-contain" />
                        </a>
                    ))}
                </m.div>
            </div>
        </section>
    );
};

/* DESIGN 3: TRUST CARD — Google Reviews link (real reviews only) */
export const Testimonials: React.FC = () => {
    return (
        <section className="pt-12 md:pt-16 pb-16 md:pb-24 lg:pb-32 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-10 md:mb-14">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200/60 bg-white/60 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                        <Star size={16} /> 03. Avis clients
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain tracking-tight leading-[1.05] drop-shadow-sm hyphens-auto break-words">
                        Ce que <span className="font-newsletter italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary font-normal">nos clients</span> disent
                    </h2>
                </div>

                <m.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-3xl mx-auto bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] p-8 md:p-14 text-center shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
                >
                    <div className="flex justify-center gap-1.5 mb-5 text-accent">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={28} fill="currentColor" />
                        ))}
                    </div>
                    <div className="text-5xl md:text-7xl font-medium text-textMain leading-none mb-3">
                        5,0<span className="text-gray-300 text-3xl md:text-4xl">/5</span>
                    </div>
                    <p className="text-gray-500 text-base md:text-lg font-light mt-4 mb-8">
                        Sur <span className="font-bold text-textMain">25 avis Google vérifiés</span> — Pays de Gex
                    </p>
                    <a
                        href="https://share.google/fvsAyaT6pI2059MZF"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-primary text-white font-bold px-7 md:px-8 py-4 rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl group"
                    >
                        <span>Lire les avis sur Google</span>
                        <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
                    </a>
                </m.div>
            </div>
        </section>
    );
};

/* DESIGN 2: FAQ (Replaces Engagement) */
export const FAQSection: React.FC = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

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
        <section className="py-24 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200/60 bg-white/60 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                        <MessageSquare size={16} /> 04. Questions fréquentes
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain tracking-tight leading-[1.05] break-words hyphens-auto">Questions <span className="font-newsletter italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary font-normal">fréquentes</span></h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 items-stretch">

                    {/* Left: FAQ */}
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
                                    <div
                                        className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Info Complementaire (Bureau, etc) */}
                    <div className="lg:w-5/12">
                        <div className="bg-primary text-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl relative overflow-hidden group h-full flex flex-col justify-center">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-white/10 transition-colors duration-700"></div>

                            <h3 className="text-2xl font-bold mb-8">Où nous trouver ?</h3>

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

                            <div className="flex gap-6 pt-8 border-t border-white/10 group/item">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover/item:border-accent transition-colors">
                                    <MessageSquare size={20} className="text-accent" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg mb-1">WhatsApp Privé</p>
                                    <p className="text-white/70 font-medium leading-relaxed mb-4">
                                        Une messagerie directe pour un échange immédiat et confidentiel.
                                    </p>
                                    <a href="https://wa.me/33769313502" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-bold hover:text-white transition-colors">
                                        Démarrer le chat <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

/* UNCHANGED HOMEBLOG */
export const HomeBlog: React.FC = () => (
    <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8"
            >
                <div>
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200/60 bg-white/60 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                        <Users size={16} /> 05. Expertise
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain tracking-tight leading-[1.05] drop-shadow-lg hyphens-auto break-words">Actualités & <br className="hidden md:block" /><span className="font-newsletter italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary font-normal">Conseils</span></h2>
                </div>
                <Link to="/blog" className="group flex items-center gap-4 text-textMain font-bold hover:text-primary transition-colors text-lg">
                    Voir tous les articles
                    <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </Link>
            </m.div>

            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none no-scrollbar -mx-6 md:mx-0 px-6 md:px-0 gap-4 md:gap-8 pb-4 md:pb-0">
                {BLOG_POSTS.slice(0, 3).map((post, i) => (
                    <m.div
                        key={post.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.2 }}
                        className="group relative snap-start shrink-0 md:shrink w-[85%] md:w-auto"
                    >
                        {/* Glass background from Blog.tsx */}
                        <div className="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-white/50 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 -z-10"></div>

                        <Link to={`/blog/${post.slug}`} className="flex flex-col h-full bg-transparent p-4">
                            <div className="h-64 rounded-3xl overflow-hidden relative shadow-inner">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="bg-white/90 backdrop-blur text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 pt-8 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-gray-400 text-xs font-bold tracking-widest uppercase mb-4">
                                        <Calendar size={14} className="text-primary" />
                                        {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </div>
                                    <h3 className="text-2xl font-bold text-textMain mb-4 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 font-light leading-relaxed mb-8 line-clamp-2">
                                        {post.excerpt || "Découvrez notre analyse complète et nos conseils d'experts sur ce sujet."}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full border-2 border-primary/10 overflow-hidden shadow-sm">
                                            <img src={IMAGES.heroAgent} alt="Mickaël Lima" className="w-full h-full object-cover" />
                                        </div>
                                        <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Mickaël Lima</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-surface border border-gray-100 flex items-center justify-center text-textMain group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-300 shadow-sm">
                                            <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </m.div>
                ))}
            </div>

            <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-12 text-center md:hidden"
            >
                <Link to="/blog" className="inline-flex items-center justify-center w-full py-4 rounded-full border-2 border-primary text-primary font-bold">
                    Voir tous les articles
                </Link>
            </m.div>
        </div>
    </section>
);

/* UNCHANGED FINALCTA */
const COMMUNE_IMAGES: Record<string, string> = {
    'ferney-voltaire':     'https://i.imgur.com/mSqbCxf.jpeg',
    'saint-genis-pouilly': 'https://i.imgur.com/HdAJY7C.jpeg',
    'divonne-les-bains':   'https://i.imgur.com/Yxq7idV.jpeg',
    'gex':                 'https://madebydesignesia.com/themes/homely/images/misc/s2.webp',
    'prevessin-moens':     'https://madebydesignesia.com/themes/homely/images/misc/s3.webp',
    'cessy':               'https://madebydesignesia.com/themes/homely/images/misc/s4.webp',
    'ornex':               'https://madebydesignesia.com/themes/homely/images/misc/s5.webp',
    'thoiry':              'https://madebydesignesia.com/themes/homely/images/gallery/3.webp',
    'crozet':              'https://madebydesignesia.com/themes/homely/images/gallery/4.webp',
};

export const ZonesDIntervention: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
    const n = COMMUNES.length;
    const prev = () => setCurrent(i => (i - 1 + n) % n);
    const next = () => setCurrent(i => (i + 1) % n);

    React.useEffect(() => {
        const onResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    React.useEffect(() => {
        if (paused) return;
        const t = setInterval(() => setCurrent(i => (i + 1) % n), 4000);
        return () => clearInterval(t);
    }, [paused, n]);

    const isMobile = windowWidth < 768;
    const cardWidth = isMobile ? Math.min(windowWidth - 80, 320) : 380;
    const cardHeight = isMobile ? cardWidth * 1.1 : 420;
    const peekShift = isMobile ? cardWidth * 0.65 : cardWidth * 0.78;

    return (
        <section className="py-16 md:py-24 lg:py-32 bg-surface overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 md:mb-14 gap-6">
                    <div>
                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200/60 bg-white/60 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
                        >
                            <MapPin size={14} /> Zones d'intervention
                        </m.div>
                        <m.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-medium text-textMain tracking-tight leading-[1.1]"
                        >
                            9 communes du<br />
                            <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">
                                Pays de Gex
                            </span>
                        </m.h2>
                    </div>
                    <p className="text-gray-500 font-light max-w-sm text-base md:text-lg leading-relaxed lg:text-right">
                        Connaissance fine de chaque marché local — estimation gratuite sur site en 48h.
                    </p>
                </div>

                {/* Cover Flow Slider */}
                <div
                    className="relative"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <m.div
                        className="relative flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
                        style={{ height: cardHeight + 40 }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.18}
                        onDragStart={() => setPaused(true)}
                        onDragEnd={(_, info) => {
                            if (info.offset.x < -50) next();
                            else if (info.offset.x > 50) prev();
                            setTimeout(() => setPaused(false), 800);
                        }}
                    >
                        {[-1, 0, 1].map(offset => {
                            const idx = (current + offset + n) % n;
                            const c = COMMUNES[idx];
                            const isCenter = offset === 0;
                            return (
                                <m.div
                                    key={`${c.slug}-${offset}`}
                                    animate={{
                                        x: offset * peekShift,
                                        scale: isCenter ? 1 : 0.82,
                                        opacity: isCenter ? 1 : 0.42,
                                        zIndex: isCenter ? 3 : 1,
                                        filter: isCenter ? 'blur(0px)' : 'blur(2px)',
                                    }}
                                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute"
                                    style={{ width: cardWidth, height: cardHeight }}
                                >
                                    <Link
                                        to={`/${c.slug}/estimation-immobiliere`}
                                        className="group block rounded-3xl overflow-hidden w-full h-full relative"
                                        style={{ background: '#1a2340' }}
                                        draggable={false}
                                        onClick={(e) => { if (!isCenter) e.preventDefault(); }}
                                    >
                                        <img
                                            src={COMMUNE_IMAGES[c.slug]}
                                            alt={c.name}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            style={{ filter: 'brightness(0.85) saturate(1.3)' }}
                                            draggable={false}
                                        />
                                        <div
                                            className="absolute inset-0 z-10 pointer-events-none"
                                            style={{
                                                backdropFilter: 'blur(14px) saturate(1.4) brightness(0.82)',
                                                background: 'linear-gradient(to bottom, rgba(0,18,60,0) 0%, rgba(0,18,60,0.4) 100%)',
                                                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.08) 40%, rgba(0,0,0,0.45) 55%, black 75%)',
                                                maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.08) 40%, rgba(0,0,0,0.45) 55%, black 75%)',
                                            }}
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                                            <p className="text-[0.65rem] font-bold uppercase tracking-widest opacity-50 mb-1">
                                                {c.distanceGeneve} de Genève
                                            </p>
                                            <p className="text-xl md:text-2xl font-semibold leading-tight mb-2">{c.name}</p>
                                            <div className="flex items-center justify-between gap-2">
                                                <p className="text-sm opacity-70 truncate">{c.pointsForts[0]}</p>
                                                <span className="shrink-0 transition-transform duration-300 group-hover:scale-125">
                                                    <ChevronRight size={18} className="opacity-70" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </m.div>
                            );
                        })}
                    </m.div>

                    {/* Dots centrés */}
                    <div className="flex items-center justify-center gap-2 mt-8">
                        {COMMUNES.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                aria-label={`Voir commune ${i + 1}`}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-primary' : 'w-1.5 bg-gray-300 hover:bg-gray-400'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export const FinalCTA: React.FC = () => (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
            <m.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="bg-primary rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl border border-white/10"
            >
                {/* Decorative Background Image & Gradients */}
                <div className="absolute inset-0">
                    <img src={IMAGES.ctaBg} alt="Background" width="1920" height="1080" loading="lazy" decoding="async" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/90"></div>
                </div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                    <img
                        src={IMAGES.logoWhite}
                        alt="Mickaël Lima"
                        className="h-16 md:h-20 lg:h-24 object-contain mb-10 drop-shadow-lg opacity-90"
                        style={{ filter: 'brightness(0) invert(1)' }}
                    />

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium mb-8 leading-[1.05] tracking-tight drop-shadow-2xl hyphens-auto break-words">Vous avez un projet <br className="hidden md:block" /><span className="font-newsletter italic text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white font-normal">de vente ?</span></h2>
                    <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl font-light leading-relaxed text-center">
                        Faites estimer votre bien et bénéficiez d’un accompagnement professionnel, adapté à votre projet et à votre bien.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-lg">
                        <Link to="/estimation" className="bg-white text-textMain py-2 px-2 pr-6 rounded-full font-bold hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-4 group flex-1">
                            <div className="bg-textMain text-white rounded-full p-4 group-hover:rotate-45 transition-transform duration-300">
                                <ArrowUpRight size={20} />
                            </div>
                            <span className="text-base tracking-wide whitespace-nowrap">Estimer mon bien gratuitement</span>
                        </Link>
                        <Link to="/contact" className="bg-white/10 backdrop-blur-md text-white border border-white/20 py-2 px-2 pr-6 rounded-full font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-4 group flex-1">
                            <div className="bg-white text-textMain rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                                <Phone size={20} />
                            </div>
                            <span className="text-base tracking-wide whitespace-nowrap">Être rappelé</span>
                        </Link>
                    </div>
                </div>
            </m.div>
        </div>
    </section>
);