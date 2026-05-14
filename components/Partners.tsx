import React from 'react';
import { Hammer, PaintBucket, Building, Calculator, Users, Star } from 'lucide-react';
import { SEO } from './SEO';
import { motion } from 'framer-motion';

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
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20">
                <div className="absolute inset-0 z-0 text-center flex justify-center">
                    <img
                        src="/images/partners-hero.jpg"
                        alt="Partenaires Immobiliers"
                        className="w-full h-full object-cover mix-blend-overlay opacity-40 mx-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-background z-10"></div>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="container mx-auto px-6 relative z-20 text-center text-white"
                >
                    <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white/90 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                        <Building size={16} /> Écosystème
                    </motion.span>
                    <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-8xl font-medium mb-6 leading-[1.05] tracking-tight drop-shadow-2xl break-words hyphens-auto">
                        Le cercle <br />
                        <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">de confiance.</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Vendre ou acheter un bien implique souvent d’autres projets : financement, rénovation, aménagement. Pour répondre à l’ensemble de vos besoins, je mets à votre disposition un réseau de partenaires sélectionnés pour leur sérieux et leur professionnalisme.
                    </motion.p>
                </motion.div>
            </section>

            {/* Partners List Section */}
            <section className="py-32 bg-surface">
                <div className="container mx-auto px-6">
                    <motion.div
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
                            Nos <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">Partenaires</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 max-w-5xl mx-auto">
                        {[
                            { icon: Calculator, title: "Courtiers en banque" },
                            { icon: Hammer, title: "Artisans qualifiés" },
                            { icon: PaintBucket, title: "Architectes d’intérieur" },
                            { icon: Building, title: "Entreprises de rénovation" }
                        ].map((partner, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.7, delay: idx * 0.15 }}
                                className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] p-10 flex items-center gap-8 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 group cursor-default"
                            >
                                <div className="w-24 h-24 rounded-[1.5rem] bg-surface flex flex-shrink-0 items-center justify-center border border-gray-100 group-hover:bg-primary group-hover:text-white transition-colors duration-500 text-primary shadow-inner">
                                    <partner.icon size={36} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-textMain leading-tight group-hover:text-primary transition-colors duration-300">
                                        {partner.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Promise Section */}
                    <motion.div
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
                            "Un seul mot d'ordre : <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">L'Excellence.</span>"
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
        </>
    );
};