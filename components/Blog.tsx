import React from 'react';
import { BLOG_POSTS, IMAGES } from '../constants';
import { SEO } from './SEO';
import { Calendar, User, ArrowRight, ArrowUpRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export const Blog: React.FC = () => {
    return (
        <>
        <SEO
            title="Blog Immobilier | Marché & Conseils Pays de Gex — Mickaël Lima"
            description="Analyses du marché immobilier, conseils d'investissement et actualités réglementaires pour le Pays de Gex et la zone frontalière genevoise."
            canonical="/blog"
        />
        <section className="py-32 bg-background min-h-screen relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 pt-10">
                <m.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="text-center mb-20"
                >
                    <m.span variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200/60 bg-white/60 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest shadow-sm mb-6">
                        <Eye size={16} /> Actualités & Insights
                    </m.span>
                    <m.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain tracking-tight leading-[1.05] mb-8 break-words hyphens-auto">
                        L'Observatoire du <br />
                        <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">marché Gessien</span>
                    </m.h2>
                    <m.p variants={fadeInUp} className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        Analyses, opportunités et conseils d’expert pour comprendre votre marché et valoriser votre patrimoine.
                    </m.p>
                    <Link to="/estimation" className="group inline-flex items-center gap-4 bg-white text-textMain border border-gray-200 font-bold p-2 pr-8 rounded-full hover:bg-gray-50 transition-all shadow-sm transform hover:-translate-y-1 duration-500">
                        <div className="w-12 h-12 bg-textMain text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500 shrink-0">
                            <ArrowUpRight size={20} />
                        </div>
                        <span className="tracking-wide">Solliciter une analyse</span>
                    </Link>
                </m.div>

                <m.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {BLOG_POSTS.map((post) => (
                        <m.div variants={fadeInUp} key={post.id} className="group relative">
                            {/* Glass background */}
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
                                <div className="p-6 pt-8 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 text-gray-400 text-xs font-bold tracking-widest uppercase mb-4">
                                        <Calendar size={14} className="text-primary" />
                                        {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </div>
                                    <h3 className="text-2xl font-bold text-textMain mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 font-light text-base mb-8 flex-1 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="border-t border-gray-100 pt-6 flex justify-between items-center relative">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-surface border-2 border-primary/10 overflow-hidden shadow-sm">
                                                <img src={IMAGES.heroAgent} alt="Mickaël Lima" className="w-full h-full object-cover" />
                                            </div>
                                            <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Mickaël Lima</span>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <ArrowUpRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </m.div>
                    ))}
                </m.div>
            </div>
        </section>
        </>
    );
};