import React, { useState } from 'react';
import { CheckCircle, Users, Globe, Eye, MessageSquare, Heart, Target, Layers, TrendingUp, Star, Award, ShieldCheck, ArrowRight, Play, ArrowUpRight, Phone, Calendar, Home, ChevronRight, CheckCircle2, ChevronDown, Search, Building, MapPin } from 'lucide-react';
import { IMAGES, BLOG_POSTS, COMMUNES } from '../constants';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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
        <section className="py-32 bg-white relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10">
                    <div className="lg:w-7/12 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200/60 bg-white/60 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
                        >
                            <Target size={16} /> Expertise Locale
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain tracking-tight leading-[1.05] hyphens-auto break-words"
                        >
                            Une approche pour les <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary font-newsletter italic font-normal">vendeurs exigeants.</span>
                        </motion.h2>
                    </div>
                    <div className="lg:w-5/12 pt-2">
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg text-gray-500 leading-relaxed font-light"
                        >
                            Le marché immobilier du Pays de Gex est dynamique, mais très concurrentiel. Aujourd'hui, un bien ne se vend plus uniquement grâce à une simple annonce en ligne. Il requiert une stratégie globale, des outils performants et un accompagnement sur mesure pour sécuriser votre vente.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { icon: Home, title: "Estimation Juste", text: "Évaluation précise de votre bien immobilier au juste prix du marché local, sans complaisance pour garantir une vente fluide." },
                        { icon: Star, title: "Présentation Premium", text: "Mise en valeur exceptionnelle (photos professionnelles, vidéos 4K, immersion 3D) pour déclencher le coup de cœur immédiat." },
                        { icon: Target, title: "Visibilité Ciblée", text: "Diffusion puissante sur plus de 40 portails de premier plan et mise en avant auprès de notre communauté qualifiée sur les réseaux sociaux." },
                        { icon: ShieldCheck, title: "Vente Sécurisée", text: "Validation systématique et rigoureuse du financement de chaque acquéreur et encadrement juridique strict de bout en bout." }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-5%" }}
                            transition={{ duration: 0.7, delay: idx * 0.15 }}
                            className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] p-10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 group"
                        >
                            <div className="w-20 h-20 rounded-[1.25rem] bg-surface flex items-center justify-center mb-8 border border-gray-100 group-hover:bg-primary group-hover:text-white transition-colors duration-500 text-primary shadow-inner">
                                <item.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-textMain mb-4 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed font-light text-lg">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* UNCHANGED PROBLEMATIC */
export const Problematic: React.FC = () => (
    <section className="py-24 md:py-32 bg-surface relative overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-6 relative z-10">
            <motion.div
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
            </motion.div>

            <div className="max-w-6xl mx-auto relative mb-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl relative"
                >
                    <img src="/images/villa-fontaine-cour-lueur-du-soir_1167636-26973.jpg" alt="Notre approche" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-primary/10"></div>
                </motion.div>

                <div className="relative z-20 -mt-20 lg:-mt-28 px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            "La qualité de la mise en valeur",
                            "La perception du bien par les acheteurs",
                            "La stratégie de diffusion"
                        ].map((point, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.8, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                                className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col items-center justify-center min-h-[160px] lg:min-h-[240px] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] hover:border-primary/20 transition-all duration-500 group relative overflow-hidden"
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
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-center mt-12 md:mt-20"
            >
                <p className="text-2xl md:text-3xl text-textMain font-bold leading-relaxed max-w-4xl mx-auto">
                    Un bien valorisé intelligemment crée de l’intérêt, de la rareté et limite naturellement les négociations.
                </p>
            </motion.div>
        </div>
    </section>
);

/* DESIGN 4: FEATURED LISTING / STATS (Visibility) */
const portalLogos = [
    { src: '/images/seloger.png', alt: 'SeLoger' },
    { src: '/images/leboncoin.png', alt: 'Leboncoin' },
    { src: '/images/bienici-logo.svg', alt: 'BienIci' },
    { src: '/images/logo_logicimmo.png', alt: 'LogicImmo' },
    { src: '/images/lefigaroimmo.png', alt: 'Figaro Immobilier' },
    { src: '/images/logoluxuryestate.png', alt: 'Luxury Estate' },
];

export const Visibility: React.FC = () => {
    return (
        <section className="pt-32 pb-0 md:pb-8 bg-white relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    {/* Image Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-[55%] w-full relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-gray-100"
                    >
                        <img src="/images/villa-fontaine-cour-lueur-du-soir_1167636-26973.jpg" alt="Visibilité Maximale" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-10 w-full text-white">
                            <h3 className="text-3xl font-bold mb-2 tracking-tight">Visibilité Maximale</h3>
                            <p className="text-white/80 text-lg font-light">
                                Diffusion large et ciblée sur les portails majeurs et réseaux sociaux.
                            </p>
                        </div>
                    </motion.div>

                    {/* Text Right */}
                    <div className="lg:w-[45%] flex flex-col justify-center">
                        <motion.div
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
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scrolling Logos */}
            <div className="w-full mt-24 border-t border-gray-100 pt-16 pb-8 overflow-hidden relative flex items-center">
                <div className="absolute left-0 w-24 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 w-24 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    className="flex flex-nowrap gap-16 md:gap-24 items-center min-w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                >
                    {[...portalLogos, ...portalLogos, ...portalLogos].map((logo, idx) => (
                        <div key={idx} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 px-4 shrink-0 w-32 md:w-48">
                            <img src={logo.src} alt={logo.alt} className="max-h-10 md:max-h-14 w-auto object-contain" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

/* DESIGN 3: TESTIMONIAL SLIDER (Testimonials) */
export const Testimonials: React.FC = () => {
    return (
        <section className="pt-16 pb-32 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200/60 bg-white/60 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                        <Star size={16} /> 03. Avis clients
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain tracking-tight leading-[1.05] drop-shadow-sm hyphens-auto break-words">
                        Ce que <span className="font-newsletter italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary font-normal">nos clients</span> disent
                    </h2>
                    <p className="text-gray-500 mt-6 text-lg font-light">De vraies histoires, de vrais clients, soutenus par de vrais résultats.</p>
                </div>

                {/* Slider Container with gradient masks */}
                <div className="w-full relative py-10 flex items-center overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>

                    <motion.div
                        className="flex flex-nowrap gap-8 min-w-max items-stretch py-4"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                    >
                        {[
                            {
                                name: "M. & Mme Dupont",
                                role: "Vendeurs au Pays de Gex",
                                quote: "Un accompagnement sérieux, une stratégie très claire et un bien vendu au meilleur prix et rapidement sans tracas. La différence est flagrante !",
                                img: IMAGES.misc3
                            },
                            {
                                name: "Sophie T.",
                                role: "Venderesse Frontalière",
                                quote: "La mise en valeur de notre maison avec la vidéo au drone a créé le coup de cœur. Une vente au prix, rapide et en toute sérénité. Merci l'équipe !",
                                img: IMAGES.misc1
                            },
                            {
                                name: "Marc L.",
                                role: "Acquéreur & Investisseur",
                                quote: "Une transparence rare sur le marché. De la première visite jusqu'à la signature chez le notaire, le suivi a été exemplaire. Je recommande les yeux fermés !",
                                img: IMAGES.misc2
                            },
                            {
                                name: "M. & Mme Dupont",
                                role: "Vendeurs au Pays de Gex",
                                quote: "Un accompagnement sérieux, une stratégie très claire et un bien vendu au meilleur prix et rapidement sans tracas. La différence est flagrante !",
                                img: IMAGES.misc3
                            },
                            {
                                name: "Sophie T.",
                                role: "Venderesse Frontalière",
                                quote: "La mise en valeur de notre maison avec la vidéo au drone a créé le coup de cœur. Une vente au prix, rapide et en toute sérénité. Merci l'équipe !",
                                img: IMAGES.misc1
                            },
                            {
                                name: "Marc L.",
                                role: "Acquéreur & Investisseur",
                                quote: "Une transparence rare sur le marché. De la première visite jusqu'à la signature chez le notaire, le suivi a été exemplaire. Je recommande les yeux fermés !",
                                img: IMAGES.misc2
                            }
                        ].map((testimonial, idx) => (
                            <div
                                key={idx}
                                className="w-[350px] md:w-[450px] bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-8 lg:p-10 flex flex-col items-center text-center border border-white/50 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300 relative shrink-0"
                            >
                                <div className="absolute top-6 left-8 text-gray-200">
                                    <span className="text-[6rem] font-serif leading-none opacity-50">"</span>
                                </div>
                                <div className="w-24 h-24 mb-6 shrink-0 relative z-10">
                                    <img src={testimonial.img} alt={testimonial.name} className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white" />
                                </div>
                                <p className="text-lg text-textMain font-medium leading-[1.6] mb-8 relative z-10 italic flex-1">
                                    "{testimonial.quote}"
                                </p>
                                <div className="mt-auto relative z-10">
                                    <div className="flex justify-center gap-1 mb-3 text-accent">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                    </div>
                                    <h4 className="text-xl font-bold text-textMain mb-1">{testimonial.name}</h4>
                                    <span className="text-sm text-gray-500 font-light">{testimonial.role}</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
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
                                    <p className="font-bold text-lg mb-1">Bureau d'accueil</p>
                                    <p className="text-white/70 font-medium leading-relaxed">
                                        328 Rue des Fontanettes,<br />
                                        01220 Divonne-les-Bains<br />
                                        <span className="text-xs font-light italic mt-1 block">Uniquement sur rendez-vous</span>
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
                                    <a href="#" className="inline-flex items-center gap-2 text-accent font-bold hover:text-white transition-colors">
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
    <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
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
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_POSTS.slice(0, 3).map((post, i) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.2 }}
                        className="group relative"
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
                                        {post.date}
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
                                            <img src={IMAGES.heroAgent} alt="Mickael Lima" className="w-full h-full object-cover" />
                                        </div>
                                        <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Mickael Lima</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-surface border border-gray-100 flex items-center justify-center text-textMain group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-300 shadow-sm">
                                            <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-12 text-center md:hidden"
            >
                <Link to="/blog" className="inline-flex items-center justify-center w-full py-4 rounded-full border-2 border-primary text-primary font-bold">
                    Voir tous les articles
                </Link>
            </motion.div>
        </div>
    </section>
);

/* UNCHANGED FINALCTA */
export const ZonesDIntervention: React.FC = () => (
    <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-14 gap-6">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200/60 bg-white/60 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
                    >
                        <MapPin size={14} /> Zones d'intervention
                    </motion.div>
                    <motion.h2
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
                    </motion.h2>
                </div>
                <p className="text-gray-500 font-light max-w-sm text-lg leading-relaxed lg:text-right">
                    Connaissance fine de chaque marché local — estimation gratuite sur site en 48h.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {COMMUNES.map((c, i) => (
                    <motion.div
                        key={c.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 }}
                    >
                        <Link
                            to={`/${c.slug}/estimation-immobiliere`}
                            className="group flex items-center justify-between bg-white rounded-[1.5rem] p-6 border border-gray-100 shadow-sm hover:border-primary/20 hover:shadow-md transition-all"
                        >
                            <div>
                                <p className="font-bold text-textMain text-lg group-hover:text-primary transition-colors">{c.name}</p>
                                <p className="text-gray-400 text-sm font-light mt-0.5">{c.distanceGeneve} · {c.prixApptMin.toLocaleString('fr-FR')}–{c.prixApptMax.toLocaleString('fr-FR')} €/m²</p>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all shrink-0">
                                <ArrowRight size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export const FinalCTA: React.FC = () => (
    <section className="py-32 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="bg-primary rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl border border-white/10"
            >
                {/* Decorative Background Image & Gradients */}
                <div className="absolute inset-0">
                    <img src={IMAGES.ctaBg} alt="Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/90"></div>
                </div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                    <img
                        src={IMAGES.logoWhite}
                        alt="Mickael Lima"
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
            </motion.div>
        </div>
    </section>
);