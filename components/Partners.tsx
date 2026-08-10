import React from 'react';
import { Hammer, PaintBucket, Building, Calculator, Users, Star } from 'lucide-react';
import { SEO } from './SEO';
import { m } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export const Partners: React.FC = () => {
    return (
        <>
        <SEO
            title="Partenaires | Réseau d'Experts — Mickaël Lima Pays de Gex"
            description="Courtiers, artisans qualifiés, architectes d'intérieur et entreprises de rénovation : le réseau de partenaires sélectionnés de Mickaël Lima pour votre projet immobilier."
            canonical="/partenaires"
        />
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Hero Section */}
            <section className="relative min-h-[620px] flex items-center overflow-hidden bg-primary pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/partners-hero.jpg"
                        width="1920"
                        height="1080"
                        loading="eager"
                        decoding="async"
                        alt="Partenaires Immobiliers"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#011d41]/95 via-[#011d41]/60 to-[#011d41]/10 z-10"></div>
                </div>

                <m.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="container mx-auto px-6 relative z-20 text-left text-white"
                >
                    <m.div variants={fadeInUp} className="flex items-center gap-7 text-white/90 text-sm font-bold uppercase tracking-[0.2em] mb-8">
                        <span className="inline-flex items-center gap-2 whitespace-nowrap"><Building size={16} /> Écosystème</span>
                        <span aria-hidden="true" className="flex-1 h-px bg-white/25"></span>
                    </m.div>
                    <m.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-8xl font-medium mb-6 leading-[1.05] tracking-tight break-words hyphens-auto">
                        Le cercle <br />
                        <span className="font-newsletter italic font-normal">de confiance.</span>
                    </m.h1>
                    <m.p variants={fadeInUp} className="text-lg text-white/90 max-w-2xl leading-relaxed">
                        Vendre ou acheter un bien implique souvent d’autres projets : financement, rénovation, aménagement. Pour répondre à l’ensemble de vos besoins, je mets à votre disposition un réseau de partenaires sélectionnés pour leur sérieux et leur professionnalisme.
                    </m.p>
                </m.div>
            </section>

            {/* Partners List Section */}
            <section className="py-32 bg-surface">
                <div className="container mx-auto px-6">
                    <m.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto mb-20"
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200/60 bg-white/60 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                            <Users size={16} /> Notre réseau
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain tracking-tight leading-[1.05] break-words hyphens-auto">
                            Nos <span className="font-newsletter italic font-normal">Partenaires</span>
                        </h2>
                    </m.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 max-w-5xl mx-auto">
                        {[
                            { icon: Calculator, title: "Courtiers en banque" },
                            { icon: Hammer, title: "Artisans qualifiés" },
                            { icon: PaintBucket, title: "Architectes d’intérieur" },
                            { icon: Building, title: "Entreprises de rénovation" }
                        ].map((partner, idx) => (
                            <m.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.7, delay: idx * 0.15 }}
                                className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[10px] p-10 flex items-center gap-8 hover: hover:-translate-y-2 transition-all duration-500 group cursor-default"
                            >
                                <div className="w-24 h-24 rounded-[10px] bg-surface flex flex-shrink-0 items-center justify-center border border-gray-100 group-hover:bg-primary group-hover:text-white transition-colors duration-500 text-primary shadow-inner">
                                    <partner.icon size={36} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-textMain leading-tight group-hover:text-primary transition-colors duration-300">
                                        {partner.title}
                                    </h3>
                                </div>
                            </m.div>
                        ))}
                    </div>

                    {/* Promise Section */}
                    <m.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center border-t border-gray-200 pt-20"
                    >
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200/60 bg-white/60 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                            <Star size={16} /> Notre Promesse
                        </span>
                        <p className="text-4xl md:text-5xl lg:text-7xl leading-[1.15] text-textMain tracking-tight italic font-serif break-words hyphens-auto">
                            "Un seul mot d'ordre : <span className="font-newsletter italic font-normal">L'Excellence.</span>"
                        </p>
                    </m.div>
                </div>
            </section>
        </div>
        </>
    );
};