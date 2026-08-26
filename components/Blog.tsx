import React from 'react';
import { BLOG_POSTS, IMAGES } from '../constants';
import { SEO } from './SEO';
import { Calendar, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PillButton, Reveal, SectionLabel } from './oakline/primitives';

const BLOG_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog immobilier Pays de Gex — Mickaël Lima',
    url: 'https://mickael-lima.immo/blog/',
    description:
        'Conseils immobiliers, prix du marché et actualités du Pays de Gex par Mickaël Lima, agent immobilier.',
    author: {
        '@type': 'Person',
        name: 'Mickaël Lima',
    },
    publisher: {
        '@type': 'Person',
        name: 'Mickaël Lima',
        url: 'https://mickael-lima.immo',
    },
};

export const Blog: React.FC = () => {
    return (
        <>
        <SEO
            title="Blog Immobilier | Marché & Conseils Pays de Gex — Mickaël Lima"
            description="Analyses du marché immobilier, conseils d'investissement et actualités réglementaires pour le Pays de Gex et la zone frontalière genevoise."
            canonical="/blog"
            schema={BLOG_SCHEMA}
        />
        <section className="relative min-h-screen overflow-hidden bg-[#fafafa] py-32">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 pt-10">
                <div className="mb-20 text-center">
                    <Reveal y={6}>
                        <SectionLabel icon={<Eye size={14} />}>Actualités &amp; Insights</SectionLabel>
                    </Reveal>
                    <Reveal delay={0.08}>
                    <h1 className="mb-8 mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-[#011d41] md:text-5xl lg:text-7xl">
                        L'Observatoire du <br />
                        <span className="italic">marché Gessien</span>
                    </h1>
                    </Reveal>
                    <Reveal delay={0.16}>
                    <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-500 md:text-xl">
                        Analyses, opportunités et conseils d’expert pour comprendre votre marché et valoriser votre patrimoine.
                    </p>
                    </Reveal>
                    <Reveal delay={0.24}>
                        <PillButton to="/estimation" variant="solid" arrow>Solliciter une analyse</PillButton>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {BLOG_POSTS.map((post, index) => (
                        <Reveal key={post.id} delay={index * 0.08}>
                            <Link to={`/blog/${post.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#ebebeb] bg-white shadow-[0_2px_20px_-5px_rgba(1,29,65,0.12)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgba(1,29,65,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#011d41]">
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <SectionLabel className="bg-white/95">{post.category}</SectionLabel>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col p-8">
                                    <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                                        <Calendar size={14} className="text-primary" />
                                        {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </div>
                                    <h2 className="mb-4 font-serif text-2xl leading-tight text-[#011d41] transition-colors duration-300 group-hover:text-[#123a66]">
                                        {post.title}
                                    </h2>
                                    <p className="mb-8 flex-1 text-base leading-relaxed text-gray-500">
                                        {post.excerpt}
                                    </p>
                                    <div className="relative flex items-center justify-between border-t border-[#ebebeb] pt-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-surface border-2 border-primary/10 overflow-hidden shadow-sm">
                                                <img src={IMAGES.heroAgent} alt="Mickaël Lima" className="w-full h-full object-cover" />
                                            </div>
                                            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">Mickaël Lima</span>
                                        </div>
                                        <span className="text-sm font-semibold text-[#011d41]">Lire l'article →</span>
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
};
