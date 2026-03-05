import React, { useRef } from 'react';
import { Check, Camera, Share2, Users, Layout, Star, Gem, Video, ArrowRight, ArrowUpRight, Heart, ShieldCheck, MessageSquare, Target, Wand2, Play } from 'lucide-react';
import { IMAGES } from '../constants';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export const MandatSignature: React.FC = () => {
    return (
        <div className="bg-background min-h-screen flex flex-col">
            {/* PROFESSIONAL HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 text-center flex justify-center origin-center">
                    <img
                        src={IMAGES.misc3}
                        alt="Mandat Signature"
                        className="w-full h-full object-cover mix-blend-overlay opacity-40 mx-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-background z-10"></div>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="container mx-auto px-6 relative z-20 text-center pt-20"
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white/90 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                        <Star size={16} className="text-accent fill-accent" /> Performance & Sérénité
                    </motion.div>
                    <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-medium text-white mb-8 tracking-tight leading-[1.05] drop-shadow-2xl">
                        Mandat <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Signature</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
                        L'alliance parfaite entre technologie de pointe et expertise humaine <br className="hidden md:block" />pour une vente au meilleur prix.
                    </motion.p>
                    <motion.div variants={fadeInUp} className="mt-12 flex justify-center">
                        <Link to="/estimation" className="group relative inline-flex items-center gap-4 p-2 pr-8 bg-white text-textMain font-bold rounded-full overflow-hidden transition-all duration-500 shadow-2xl hover:-translate-y-1 mb-10 w-fit">
                            <div className="bg-textMain text-white rounded-full p-4 group-hover:rotate-45 transition-transform duration-500">
                                <ArrowUpRight size={20} />
                            </div>
                            <span className="text-sm tracking-widest uppercase">Demander une estimation</span>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* SECTION 1: Valorisation Visuelle & Média */}
            <section className="py-32 bg-white text-textMain relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-surface skew-x-12 translate-x-1/4 opacity-50"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row gap-20 items-start">
                        {/* Left Column - Sticky */}
                        <div className="md:w-5/12 sticky top-32 h-fit">
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-10%" }}
                                className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl relative overflow-hidden group"
                            >
                                {/* Premium Gradient Border Effect */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 via-primary to-blue-300"></div>

                                <motion.div variants={fadeInUp} className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center mb-10 border border-primary/10 group-hover:scale-105 transition-transform duration-500">
                                    <Camera className="text-primary" size={36} strokeWidth={1.5} />
                                </motion.div>
                                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain tracking-tight leading-[1.05] mb-8 break-words hyphens-auto">
                                    Valorisation <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">Visuelle</span>
                                </motion.h2>
                                <motion.p variants={fadeInUp} className="text-gray-500 mb-10 leading-relaxed text-lg font-light">
                                    Une stratégie visuelle complète pour capter l'attention partout. Nous créons une véritable identité pour votre bien immobilier.
                                </motion.p>
                                <motion.ul variants={staggerContainer} className="space-y-6">
                                    {[
                                        "Photos Pro Haute Définition",
                                        "Vidéo Drone 4K & Présentation",
                                        "Visite Virtuelle Immersive",
                                        "Vidéos IA (Intelligence Artificielle)",
                                        "Home Staging Virtuel",
                                        "Réseaux Sociaux & Média"
                                    ].map((item, i) => (
                                        <motion.li variants={fadeInUp} key={i} className="flex items-start gap-4 text-gray-700 font-medium group/item">
                                            <div className="bg-primary/5 p-2 rounded-full mt-0.5 group-hover/item:bg-primary/10 transition-colors border border-primary/10"><Check size={16} className="text-primary" /></div>
                                            <span className="block text-textMain font-bold">{item}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                <motion.div variants={fadeInUp} className="mt-12 pt-10 border-t border-gray-100">
                                    <Link to="/estimation" className="w-full bg-white text-textMain font-bold p-2 pr-8 rounded-full border border-gray-200 hover:bg-gray-50 transition-all shadow-sm flex items-center gap-4 group/btn">
                                        <div className="bg-textMain text-white rounded-full p-4 group-hover/btn:rotate-45 transition-transform duration-300">
                                            <ArrowUpRight size={20} />
                                        </div>
                                        <span className="text-base tracking-wide uppercase">Demander une estimation</span>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Right Column - Scrollable Content */}
                        <div className="md:w-7/12 space-y-32 pb-32">
                            {/* Cinematic Video Placeholder */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="bg-surface rounded-[3rem] overflow-hidden aspect-video relative group border border-gray-800 shadow-2xl"
                            >
                                <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-400 group-hover:text-white transition-colors z-20 duration-500">
                                    <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_40px_rgba(255,255,255,0.2)] cursor-pointer">
                                        <Play size={40} className="text-white fill-white ml-2" strokeWidth={1.5} />
                                    </div>
                                    <span className="font-bold uppercase tracking-[0.3em] text-xs text-white/80">Film de présentation</span>
                                </div>
                                <img src={IMAGES.misc2} alt="Video Background" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-1000 scale-105 group-hover:scale-100" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-black/60 pointer-events-none z-10 transition-opacity duration-1000 group-hover:opacity-80"></div>
                                <div className="absolute bottom-10 left-10 text-white z-20">
                                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-6 text-accent">
                                        <Camera size={14} className="text-accent" /> Drone & Immersion
                                    </div>
                                    <h3 className="text-4xl font-serif italic font-light drop-shadow-lg">Vidéo 4K</h3>
                                </div>
                            </motion.div>

                            {/* Photos Pro Gallery */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="w-full"
                            >
                                <h3 className="text-2xl font-bold text-textMain mb-8 flex items-center gap-4">
                                    <div className="p-3 bg-primary/5 rounded-xl border border-primary/10"><Camera size={24} className="text-primary" strokeWidth={1.5} /></div>
                                    Photos Pro Haute Définition
                                </h3>
                                <div className="flex flex-col gap-6">
                                    {/* Main Large Photo */}
                                    <div className="bg-surface rounded-[2.5rem] aspect-[21/9] w-full relative border border-gray-100 shadow-2xl flex items-center justify-center group overflow-hidden cursor-pointer hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-shadow duration-700">
                                        <img src={IMAGES.heroBg} alt="Main View" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                                        <span className="text-white font-bold tracking-widest uppercase text-sm relative z-10 border border-white/30 px-8 py-3 rounded-full backdrop-blur-xl bg-black/20 group-hover:bg-white group-hover:text-primary transition-all duration-500">Agrandir la galerie</span>
                                    </div>
                                    {/* Thumbnails Row */}
                                    <div className="grid grid-cols-3 gap-6 w-full">
                                        {[IMAGES.misc1, IMAGES.misc2, IMAGES.misc3].map((img, idx) => (
                                            <div key={idx} className="bg-surface rounded-3xl aspect-video border border-gray-100 shadow-lg flex items-center justify-center text-gray-400 hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden group relative hover:-translate-y-1">
                                                <img src={img} alt={`Detail ${idx}`} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110" />
                                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Carousel Placeholder */}
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-textMain mb-8 flex items-center gap-4">
                                    <div className="p-3 bg-primary/5 rounded-xl border border-primary/10"><Share2 size={24} className="text-primary" strokeWidth={1.5} /></div>
                                    Format TikTok & Reels
                                </motion.h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    {[1, 2, 3].map((i) => (
                                        <motion.div variants={fadeInUp} key={i} className="bg-surface rounded-3xl aspect-[9/16] relative border border-gray-100 shadow-xl flex items-center justify-center group cursor-pointer overflow-hidden hover:-translate-y-2 transition-transform duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/80 opacity-60 z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
                                            <img src={IMAGES.misc1} alt={`Reel ${i}`} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000" />

                                            <div className="absolute bottom-6 left-6 right-6 z-20">
                                                <div className="w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-primary transition-colors text-white duration-500">
                                                    <Play size={20} className="fill-current ml-1" />
                                                </div>
                                                <span className="text-white font-bold tracking-widest uppercase text-xs block">Reel {i}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Home Staging */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="w-full"
                            >
                                <h3 className="text-2xl font-bold text-textMain mb-8 flex items-center gap-4">
                                    <div className="p-3 bg-primary/5 rounded-xl border border-primary/10"><Wand2 size={24} className="text-primary" strokeWidth={1.5} /></div>
                                    Home Staging Virtuel
                                </h3>
                                <div className="bg-surface rounded-[2.5rem] overflow-hidden relative border border-gray-100 shadow-xl group w-full aspect-video">
                                    <div className="absolute inset-0 flex">
                                        <div className="w-1/2 bg-gray-200 flex items-center justify-center border-r border-white/50">
                                            <span className="text-gray-500 text-sm font-bold uppercase tracking-widest">Avant</span>
                                        </div>
                                        <div className="w-1/2 bg-surface flex items-center justify-center">
                                            <span className="text-primary text-sm font-bold uppercase tracking-widest">Après (IA)</span>
                                        </div>
                                    </div>
                                    <div className="absolute inset-y-0 left-1/2 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-2xl z-10">
                                        <div className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-100">
                                            <ArrowRight size={16} className="text-primary rotate-45" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Visibilité Multi-Canal (Bento Grid) */}
            <section className="py-32 bg-surface">
                <div className="container mx-auto px-6">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }}
                        className="text-center max-w-4xl mx-auto mb-20"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200/60 bg-white/60 backdrop-blur-md text-primary text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                            <Target size={16} /> 02. Diffusion Massive
                        </motion.div>
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain tracking-tight leading-[1.05] mb-8 break-words hyphens-auto">
                            Omniprésence <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">Digitale</span>
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-gray-500 text-xl font-light leading-relaxed">
                            Votre bien ne doit pas être cherché, il doit être trouvé. Nous inondons le marché pour toucher 100% des acquéreurs actifs.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="md:col-span-2 bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-700"
                        >
                            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-1000 ease-in-out"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-primary/5 border border-primary/10 rounded-2xl flex items-center justify-center mb-8">
                                    <Share2 className="text-primary" size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-textMain mb-6 tracking-tight">+40 Portails Immobiliers</h3>
                                <p className="text-gray-500 mb-10 max-w-lg leading-relaxed text-lg font-light">
                                    Diffusion simultanée sur SeLoger, Leboncoin, BienIci, LogicImmo, Figaro, Belles Demeures, et bien plus encore.
                                </p>
                                <div className="flex flex-wrap gap-3 items-center">
                                    {[
                                        { src: '/images/seloger.png', alt: 'SeLoger' },
                                        { src: '/images/leboncoin.png', alt: 'Leboncoin' },
                                        { src: '/images/bienici-logo.svg', alt: 'BienIci' },
                                        { src: '/images/logo_logicimmo.png', alt: 'LogicImmo' },
                                        { src: '/images/lefigaroimmo.png', alt: 'Figaro' },
                                        { src: '/images/logoluxuryestate.png', alt: 'LuxuryEstate' }
                                    ].map((logo) => (
                                        <div key={logo.alt} className="px-4 py-2 bg-surface rounded-xl border border-gray-100 flex items-center justify-center h-[3.25rem] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all duration-300 group cursor-default">
                                            <img src={logo.src} alt={logo.alt} className="max-h-6 max-w-[90px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                                        </div>
                                    ))}
                                    <span className="px-5 h-[3.25rem] flex items-center justify-center bg-textMain text-white rounded-xl text-sm font-bold shadow-lg shadow-textMain/20 hover:-translate-y-0.5 transition-transform duration-300 cursor-default">
                                        +35 autres
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-primary text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-700"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20">
                                    <Users className="text-white" size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 tracking-tight">Réseaux Sociaux</h3>
                                <p className="text-white/60 text-base mb-8 font-light leading-relaxed">Instagram, Facebook, LinkedIn, TikTok.</p>
                            </div>
                            <div className="relative z-10 mt-auto">
                                <div className="text-6xl font-bold mb-3 tracking-tighter">30k+</div>
                                <div className="text-xs font-bold opacity-70 uppercase tracking-[0.2em]">Audience Cumulée</div>
                            </div>
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 border border-white/10 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="md:col-span-3 bg-white p-10 md:p-12 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-10 hover:shadow-xl transition-all duration-700"
                        >
                            <div className="flex items-center gap-8">
                                <div className="w-20 h-20 bg-green-50 rounded-[2rem] flex items-center justify-center shrink-0 border border-green-100">
                                    <Target className="text-green-600" size={36} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-textMain mb-2 tracking-tight">Campagnes Sponsorisées (Ads)</h3>
                                    <p className="text-gray-500 text-lg font-light">Retargeting Google & Meta pour ne perdre aucun prospect.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 px-8 py-4 bg-surface rounded-2xl border border-gray-100">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                <span className="text-sm font-bold text-textMain uppercase tracking-widest">Active 24/7</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Acquéreurs & Suivi (Dashboard Look) */}
            <section className="py-32 bg-white flex items-center min-h-[80vh]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 order-2 lg:order-1 relative"
                        >
                            <div className="relative z-10">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-[3rem] transform -rotate-3 blur-sm"></div>
                                <div className="bg-surface border border-gray-100 rounded-[3rem] p-10 shadow-2xl relative z-10 transition-transform duration-700 hover:rotate-2">
                                    <div className="flex items-center justify-between mb-10 border-b border-gray-200 pb-8">
                                        <div className="flex items-center gap-5">
                                            <div className="w-16 h-16 bg-gray-200 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                                                <img src={IMAGES.heroAgent} alt="Agent" className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-textMain text-lg tracking-tight">Espace Propriétaire</div>
                                                <div className="text-xs text-green-600 font-bold flex items-center gap-2 mt-1 uppercase tracking-widest">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> En ligne
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                                            <MessageSquare size={24} className="text-gray-400" />
                                        </div>
                                    </div>
                                    <div className="space-y-8">
                                        <div className="flex gap-6">
                                            <div className="flex flex-col items-center">
                                                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold z-10 shadow-md">14:00</div>
                                                <div className="w-0.5 h-full bg-gray-200 -my-4"></div>
                                            </div>
                                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex-1 transform hover:-translate-y-1 transition-transform">
                                                <div className="font-bold text-textMain text-base mb-2">Visite effectuée - M. & Mme Dupont</div>
                                                <p className="text-sm text-gray-500 leading-relaxed font-light">"Coup de cœur pour le salon, mais hésitation sur la cuisine. Souhaitent une contre-visite."</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6">
                                            <div className="flex flex-col items-center">
                                                <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold z-10 shadow-md shadow-green-500/20">Hier</div>
                                                <div className="w-0.5 h-full bg-gradient-to-b from-gray-200 to-transparent -my-4"></div>
                                            </div>
                                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex-1 transform hover:-translate-y-1 transition-transform border-l-4 border-l-green-500">
                                                <div className="font-bold text-textMain text-base mb-2">Offre d'achat reçue !</div>
                                                <p className="text-sm text-gray-500 leading-relaxed font-light">Offre au prix. Dossier de financement validé par courtier.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-white p-6 rounded-[2rem] shadow-2xl border border-gray-100 z-20 animate-bounce duration-[4000ms]">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-green-50 border border-green-100 p-3 rounded-2xl">
                                            <Check size={24} className="text-green-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Réactivité</div>
                                            <div className="font-bold text-textMain text-lg">Réponse &lt; 1h</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-10%" }}
                            className="lg:w-1/2 order-1 lg:order-2"
                        >
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200/60 bg-white/60 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                                <Layout size={16} /> 03. Transparence Totale
                            </motion.div>
                            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain tracking-tight leading-[1.05] mb-8 break-words hyphens-auto">
                                Vous savez tout, <br />
                                <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">tout le temps.</span>
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-gray-500 text-xl font-light leading-relaxed mb-12">
                                Fini le silence radio. Nous avons mis en place des processus de suivi rigoureux pour que vous soyez acteur de votre vente, sans le stress.
                            </motion.p>

                            <div className="space-y-10">
                                <motion.div variants={fadeInUp} className="flex gap-6 group">
                                    <div className="w-16 h-16 rounded-[2rem] bg-surface flex items-center justify-center shrink-0 border border-gray-100 group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-500">
                                        <Users className="text-primary" size={28} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-2xl text-textMain mb-3 tracking-tight">Fichier Acquéreurs Qualifié</h4>
                                        <p className="text-gray-500 leading-relaxed font-light text-lg">
                                            Avant même la diffusion, nous proposons votre bien à notre base de clients actifs et finançables.
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div variants={fadeInUp} className="flex gap-6 group">
                                    <div className="w-16 h-16 rounded-[2rem] bg-surface flex items-center justify-center shrink-0 border border-gray-100 group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-500">
                                        <MessageSquare className="text-primary" size={28} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-2xl text-textMain mb-3 tracking-tight">Groupe WhatsApp Dédié</h4>
                                        <p className="text-gray-500 leading-relaxed font-light text-lg">
                                            Un fil de discussion direct avec votre agent pour une communication fluide et instantanée.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Visites Qualifiées (Minimalist Pillars) */}
            <section className="py-32 bg-surface relative overflow-hidden flex items-center min-h-[80vh]">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }}
                        className="text-center mb-24"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200/60 bg-white/60 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                            <ShieldCheck size={16} /> 04. Sécurité
                        </motion.div>
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain tracking-tight leading-[1.05] mb-8 break-words hyphens-auto">
                            Zéro <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">Tourisme Immobilier</span>
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-gray-500 text-xl font-light max-w-2xl mx-auto leading-relaxed">
                            Nous protégeons votre intimité et votre temps. Seuls les acheteurs sérieux franchissent votre porte.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                    >
                        {/* Pillar 1 */}
                        <motion.div variants={fadeInUp} className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 text-center group hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl">
                            <div className="w-24 h-24 mx-auto bg-surface rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-colors duration-500 border border-gray-100">
                                <ShieldCheck size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-textMain mb-6 tracking-tight">Identité Vérifiée</h3>
                            <p className="text-gray-500 leading-relaxed font-light text-lg">
                                Nous collectons la pièce d'identité de chaque visiteur avant la visite pour une sécurité totale.
                            </p>
                        </motion.div>

                        {/* Pillar 2 */}
                        <motion.div variants={fadeInUp} className="bg-white p-12 rounded-[3rem] shadow-2xl border border-primary/20 text-center group hover:-translate-y-2 transition-all duration-500 relative z-10 md:scale-105">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                                Essentiel
                            </div>
                            <div className="w-24 h-24 mx-auto bg-primary/5 text-primary rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-colors duration-500 border border-primary/10">
                                <Gem size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-textMain mb-6 tracking-tight">Financement Validé</h3>
                            <p className="text-gray-500 leading-relaxed font-light text-lg">
                                Étude de solvabilité obligatoire. Pas de visite sans plan de financement clair et validé.
                            </p>
                        </motion.div>

                        {/* Pillar 3 */}
                        <motion.div variants={fadeInUp} className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 text-center group hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl">
                            <div className="w-24 h-24 mx-auto bg-surface rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-colors duration-500 border border-gray-100">
                                <Target size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-textMain mb-6 tracking-tight">Projet Mûr</h3>
                            <p className="text-gray-500 leading-relaxed font-light text-lg">
                                Nous qualifions la motivation et l'adéquation du projet pour éviter les visites de curiosité.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>


            {/* Scrolling Logo Section - Mickael Lima (Signature Page) */}
            <div className="w-full py-6 border-t overflow-hidden relative flex items-center bg-primary border-primary/10">
                <div className="absolute left-0 w-24 md:w-48 h-full bg-gradient-to-r z-10 pointer-events-none from-primary to-transparent"></div>
                <div className="absolute right-0 w-24 md:w-48 h-full bg-gradient-to-l z-10 pointer-events-none from-primary to-transparent"></div>

                <motion.div
                    className="flex gap-16 md:gap-32 items-center flex-nowrap min-w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                >
                    {[...Array(10)].map((_, idx) => (
                        <div
                            key={idx}
                            className="w-56 h-12 md:w-64 md:h-14 opacity-80 bg-white"
                            style={{
                                WebkitMaskImage: `url(${IMAGES.logo})`,
                                WebkitMaskSize: 'contain',
                                WebkitMaskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'center',
                                maskImage: `url(${IMAGES.logo})`,
                                maskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                maskPosition: 'center',
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            {/* REDESIGNED RECAP SECTION (Hero Style) - STICKY TO FOOTER */}
            <section className="relative py-32 bg-primary overflow-hidden mt-auto">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-primary/95 z-10"></div>
                    <img src={IMAGES.misc3} alt="Background" className="w-full h-full object-cover opacity-20" />
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-6 relative z-20">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }}
                        className="text-center max-w-4xl mx-auto mb-20"
                    >
                        <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                            <Star size={14} className="text-accent fill-accent" /> L'Excellence Immobilière
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.05] mb-8 break-words hyphens-auto">
                            Pourquoi choisir le <br />
                            <span className="font-newsletter italic text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white font-normal">Mandat Signature ?</span>
                        </h2>
                        <motion.p variants={fadeInUp} className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto font-light">
                            Une approche globale qui fusionne technologie, marketing et expertise humaine pour des résultats exceptionnels.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                    >
                        {[
                            { icon: Camera, title: "Valorisation Visuelle", items: ["Photos Pro & Drone", "Visite Virtuelle", "Vidéos IA"] },
                            { icon: Share2, title: "Visibilité Multi-Canal", items: ["+40 Portails", "Réseaux Sociaux", "Diffusion TV"] },
                            { icon: Users, title: "Acquéreurs & Suivi", items: ["Fichier Qualifié", "Partage Inter-agence", "WhatsApp dédié"] },
                            { icon: Layout, title: "Visites Qualifiées", items: ["Préqualification", "Validation Budget", "0 Visite Inutile"] }
                        ].map((card, idx) => (
                            <motion.div key={idx} variants={fadeInUp} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all duration-500 group shadow-2xl">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                                    <card.icon className="text-white relative z-10" size={28} />
                                </div>
                                <h3 className="font-bold text-2xl text-white mb-6 tracking-tight">{card.title}</h3>
                                <ul className="text-base text-white/60 space-y-4">
                                    {card.items.map((item, i) => (
                                        <li key={i} className="flex gap-4 items-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <Link to="/estimation" className="bg-white text-textMain font-bold p-2 pr-8 rounded-full hover:bg-gray-50 transition-all shadow-2xl inline-flex items-center gap-4 group hover:-translate-y-1 w-fit">
                            <div className="bg-textMain text-white rounded-full p-4 group-hover:rotate-45 transition-transform duration-300">
                                <ArrowUpRight size={20} />
                            </div>
                            <span className="text-base tracking-wide uppercase">Je choisis l'excellence</span>
                        </Link>
                    </motion.div>
                </div>

                {/* Footer Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-primary/80 backdrop-blur-xl p-5 text-center border-t border-white/10">
                    <p className="font-medium text-sm md:text-base text-white/60 flex items-center justify-center gap-3 font-light tracking-wide">
                        <Heart size={16} className="text-white/40 fill-white/20" /> Engagement social : Chaque vente soutient une association locale du Pays de Gex.
                    </p>
                </div>
            </section>
        </div>
    );
};

export const MandatExclusif: React.FC = () => {
    return (
        <div className="bg-background min-h-screen flex flex-col">
            {/* PROFESSIONAL HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 text-center flex justify-center origin-center">
                    <img
                        src="/images/mandat-exclusif-hero.jpg"
                        alt="Mandat Signature Exclusif"
                        className="w-full h-full object-cover mix-blend-overlay opacity-40 mx-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-background z-10"></div>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="container mx-auto px-6 relative z-20 text-center pt-20"
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white/90 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                        <Gem size={16} className="text-accent fill-accent" /> Prestige & Exception
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-medium text-white mb-8 tracking-tight leading-[1.05] drop-shadow-2xl break-words hyphens-auto">
                        Le Mandat <br className="hidden md:block" />
                        <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Exclusif.</span>
                    </h1>
                    <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
                        L'art de sublimer l'exceptionnel. <br className="hidden md:block" />Une production cinématographique pour une désirabilité sans égale.
                    </motion.p>
                    <motion.div variants={fadeInUp} className="mt-14 flex justify-center">
                        <Link to="/contact" className="group relative inline-flex items-center gap-4 p-2 pr-8 bg-white text-textMain font-bold rounded-full overflow-hidden transition-all duration-500 shadow-2xl hover:-translate-y-1 mb-10 w-fit">
                            <div className="bg-textMain text-white rounded-full p-4 group-hover:rotate-45 transition-transform duration-500">
                                <ArrowUpRight size={20} />
                            </div>
                            <span className="text-sm tracking-widest uppercase">Candidater pour ce mandat</span>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* SECTION: Valorisation & Prestations */}
            <section className="py-32 bg-white text-textMain relative flex items-center min-h-[80vh]">
                {/* Background Pattern */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-surface skew-x-12 translate-x-1/4 opacity-50"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row gap-20 items-start">
                        {/* Left Column - Sticky */}
                        <div className="md:w-5/12 sticky top-32 h-fit">
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-10%" }}
                                className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl relative overflow-hidden group"
                            >
                                {/* Premium Gradient Border Effect */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 via-primary to-blue-300"></div>

                                <motion.div variants={fadeInUp} className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center mb-10 border border-primary/10 group-hover:scale-105 transition-transform duration-500">
                                    <Gem className="text-primary" size={36} strokeWidth={1.5} />
                                </motion.div>
                                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain tracking-tight leading-[1.05] mb-8 break-words hyphens-auto">
                                    Au-delà des <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">standards</span>
                                </motion.h2>
                                <motion.p variants={fadeInUp} className="text-gray-500 mb-10 leading-relaxed text-lg font-light">
                                    Ce mandat inclut <strong>toutes les prestations du Mandat Signature</strong>, enrichies par l'intervention d'un vidéaste professionnel dédié pour une narration émotionnelle.
                                </motion.p>
                                <motion.ul variants={staggerContainer} className="space-y-6">
                                    <motion.li variants={fadeInUp} className="flex items-start gap-4 text-gray-700 font-medium group/item">
                                        <div className="bg-primary/5 p-2 rounded-full mt-0.5 group-hover/item:bg-primary/10 transition-colors border border-primary/10"><Check size={16} className="text-primary" /></div>
                                        <div>
                                            <span className="block text-textMain font-bold">Production Cinématographique</span>
                                            <span className="text-sm text-gray-500 font-light">Équipe de tournage dédiée</span>
                                        </div>
                                    </motion.li>
                                    <motion.li variants={fadeInUp} className="flex items-start gap-4 text-gray-700 font-medium group/item">
                                        <div className="bg-primary/5 p-2 rounded-full mt-0.5 group-hover/item:bg-primary/10 transition-colors border border-primary/10"><Check size={16} className="text-primary" /></div>
                                        <div>
                                            <span className="block text-textMain font-bold">Captation de l'essence</span>
                                            <span className="text-sm text-gray-500 font-light">Mise en lumière des détails</span>
                                        </div>
                                    </motion.li>
                                    <motion.li variants={fadeInUp} className="flex items-start gap-4 text-gray-700 font-medium group/item">
                                        <div className="bg-primary/5 p-2 rounded-full mt-0.5 group-hover/item:bg-primary/10 transition-colors border border-primary/10"><Check size={16} className="text-primary" /></div>
                                        <div>
                                            <span className="block text-textMain font-bold">Storytelling Visuel</span>
                                            <span className="text-sm text-gray-500 font-light">Scénarisation sur-mesure</span>
                                        </div>
                                    </motion.li>
                                    <motion.li variants={fadeInUp} className="flex items-start gap-4 text-gray-700 font-medium group/item">
                                        <div className="bg-primary/5 p-2 rounded-full mt-0.5 group-hover/item:bg-primary/10 transition-colors border border-primary/10"><Check size={16} className="text-primary" /></div>
                                        <div>
                                            <span className="block text-textMain font-bold">Diffusion Internationale</span>
                                            <span className="text-sm text-gray-500 font-light">Ciblage acquéreurs prestige</span>
                                        </div>
                                    </motion.li>
                                </motion.ul>

                                <motion.div variants={fadeInUp} className="mt-12 pt-10 border-t border-gray-100">
                                    <Link to="/contact" className="w-full bg-white text-textMain font-bold p-2 pr-8 rounded-full border border-gray-200 hover:bg-gray-50 transition-all shadow-sm flex items-center gap-4 group/btn">
                                        <div className="bg-textMain text-white rounded-full p-4 group-hover/btn:rotate-45 transition-transform duration-300">
                                            <ArrowUpRight size={20} />
                                        </div>
                                        <span className="text-base tracking-wide uppercase">Demander ce mandat</span>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Right Column - Scrollable Content */}
                        <div className="md:w-7/12 space-y-32 pb-32">
                            {/* Cinematic Video Placeholder */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="bg-surface rounded-[3rem] overflow-hidden aspect-video relative group border border-gray-800 shadow-2xl"
                            >
                                <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-400 group-hover:text-white transition-colors z-20 duration-500">
                                    <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_40px_rgba(255,255,255,0.2)] cursor-pointer">
                                        <Play size={40} className="text-white fill-white ml-2" strokeWidth={1.5} />
                                    </div>
                                    <span className="font-bold uppercase tracking-[0.3em] text-xs text-white/80">Film Cinématographique (4K)</span>
                                </div>
                                {/* Background Image Placeholder */}
                                <img src={IMAGES.cardImage} alt="Video Background" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-1000 scale-105 group-hover:scale-100" />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-black/60 pointer-events-none z-10 transition-opacity duration-1000 group-hover:opacity-80"></div>

                                <div className="absolute bottom-10 left-10 text-white z-20">
                                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-6 text-accent">
                                        <Star size={14} className="fill-accent" /> Production Exclusive
                                    </div>
                                    <h3 className="text-4xl font-serif italic font-light drop-shadow-lg">L'Art de Vivre</h3>
                                </div>
                            </motion.div>

                            {/* Social Media Teasers */}
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-textMain mb-8 flex items-center gap-4">
                                    <div className="p-3 bg-primary/5 rounded-xl border border-primary/10"><Share2 size={24} className="text-primary" strokeWidth={1.5} /></div>
                                    Teasers Réseaux Sociaux
                                </motion.h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    {[1, 2, 3].map((i) => (
                                        <motion.div variants={fadeInUp} key={i} className="bg-surface rounded-3xl aspect-[9/16] relative border border-gray-100 shadow-xl flex items-center justify-center group cursor-pointer overflow-hidden hover:-translate-y-2 transition-transform duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/80 opacity-60 z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
                                            <img src={IMAGES.misc1} alt={`Teaser ${i}`} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000" />

                                            <div className="absolute bottom-6 left-6 right-6 z-20">
                                                <div className="w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-primary transition-colors text-white duration-500">
                                                    <Play size={20} className="fill-current ml-1" />
                                                </div>
                                                <span className="text-white font-bold tracking-widest uppercase text-xs block">Teaser {i}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Luxury Photo Gallery */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="w-full"
                            >
                                <h3 className="text-2xl font-bold text-textMain mb-8 flex items-center gap-4">
                                    <div className="p-3 bg-primary/5 rounded-xl border border-primary/10"><Camera size={24} className="text-primary" strokeWidth={1.5} /></div>
                                    Galerie Prestige
                                </h3>
                                <div className="flex flex-col gap-6">
                                    {/* Main Large Photo */}
                                    <div className="bg-surface rounded-[2.5rem] aspect-[21/9] w-full relative border border-gray-100 shadow-2xl flex items-center justify-center group overflow-hidden cursor-pointer hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-shadow duration-700">
                                        <img src={IMAGES.heroBg} alt="Main View" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                                        <span className="text-white font-bold tracking-widest uppercase text-sm relative z-10 border border-white/30 px-8 py-3 rounded-full backdrop-blur-xl bg-black/20 group-hover:bg-white group-hover:text-primary transition-all duration-500">Vue Panoramique</span>
                                    </div>
                                    {/* Thumbnails Row */}
                                    <div className="grid grid-cols-3 gap-6 w-full">
                                        <div className="bg-surface rounded-3xl aspect-video border border-gray-100 shadow-lg flex items-center justify-center text-gray-400 hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden group relative hover:-translate-y-1">
                                            <img src={IMAGES.misc2} alt="Detail" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                        </div>
                                        <div className="bg-surface rounded-3xl aspect-video border border-gray-100 shadow-lg flex items-center justify-center text-gray-400 hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden group relative hover:-translate-y-1">
                                            <img src={IMAGES.misc3} alt="Exterior" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                        </div>
                                        <div className="bg-surface rounded-3xl aspect-video border border-gray-100 shadow-lg flex items-center justify-center text-gray-400 hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden group relative hover:-translate-y-1">
                                            <img src={IMAGES.cardImage} alt="Night" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scrolling Logo Section - Mickael Lima (Exclusif Page) */}
            <div className="w-full py-6 border-t overflow-hidden relative flex items-center bg-primary border-primary/10">
                <div className="absolute left-0 w-24 md:w-48 h-full bg-gradient-to-r z-10 pointer-events-none from-primary to-transparent"></div>
                <div className="absolute right-0 w-24 md:w-48 h-full bg-gradient-to-l z-10 pointer-events-none from-primary to-transparent"></div>

                <motion.div
                    className="flex gap-16 md:gap-32 items-center flex-nowrap min-w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                >
                    {[...Array(10)].map((_, idx) => (
                        <div
                            key={idx}
                            className="w-56 h-12 md:w-64 md:h-14 opacity-80 bg-white"
                            style={{
                                WebkitMaskImage: `url(${IMAGES.logo})`,
                                WebkitMaskSize: 'contain',
                                WebkitMaskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'center',
                                maskImage: `url(${IMAGES.logo})`,
                                maskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                maskPosition: 'center',
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            {/* REDESIGNED RECAP SECTION (Hero Style) - STICKY TO FOOTER */}
            <section className="relative py-32 bg-primary overflow-hidden mt-auto">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-primary/95 z-10"></div>
                    <img src={IMAGES.misc3} alt="Background" className="w-full h-full object-cover opacity-20" />
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-6 relative z-20">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }}
                        className="text-center max-w-4xl mx-auto mb-20"
                    >
                        <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                            <Star size={16} className="text-accent fill-accent" /> Le Sommet de l'Immobilier
                        </motion.span>
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.05] mb-8 whitespace-nowrap">
                            L'Ultime <span className="font-newsletter italic text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white font-normal">Privilège</span>
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto font-light">
                            Le Mandat Exclusif est notre promesse d'excellence absolue. Une mise en scène digne des plus grandes productions pour des biens qui ne méritent rien de moins.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                    >
                        {[
                            { icon: Video, title: "Film Cinématographique", items: ["Équipe de Tournage", "Storytelling", "Étalonnage 4K"] },
                            { icon: Gem, title: "Diffusion Prestige", items: ["Portails Luxe", "Ciblage International", "Off-Market"] },
                            { icon: Star, title: "Événementiel", items: ["Soirée Privée (sur dmd)", "Relations Publiques", "Dossier Relié"] },
                            { icon: ShieldCheck, title: "Service Conciergerie", items: ["Accompagnement VIP", "Confidentialité", "Disponibilité 24/7"] }
                        ].map((card, idx) => (
                            <motion.div key={idx} variants={fadeInUp} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all duration-500 group shadow-2xl">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                                    <card.icon className="text-white relative z-10" size={28} />
                                </div>
                                <h3 className="font-bold text-2xl text-white mb-6 tracking-tight">{card.title}</h3>
                                <ul className="text-base text-white/60 space-y-4">
                                    {card.items.map((item, i) => (
                                        <li key={i} className="flex gap-4 items-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <Link to="/contact" className="bg-white text-textMain font-bold p-2 pr-8 rounded-full hover:bg-gray-50 transition-all shadow-2xl inline-flex items-center gap-4 group hover:-translate-y-1 w-fit">
                            <div className="bg-textMain text-white rounded-full p-4 group-hover:rotate-45 transition-transform duration-300">
                                <ArrowUpRight size={20} />
                            </div>
                            <span className="text-base tracking-wide uppercase">Candidature Confidentielle</span>
                        </Link>
                    </motion.div>
                </div>

                {/* Footer Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-primary/80 backdrop-blur-xl p-5 text-center border-t border-white/10">
                    <p className="font-medium text-sm md:text-base text-white/60 flex items-center justify-center gap-3 font-light tracking-wide">
                        <ShieldCheck size={16} className="text-white/40" /> Confidentialité absolue garantie sur l'ensemble de la démarche.
                    </p>
                </div>
            </section>
        </div>
    );
};