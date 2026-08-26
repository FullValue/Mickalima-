import React from 'react';
import { IMAGES, COMMUNES } from '../constants';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { m } from 'framer-motion';

export const Footer: React.FC = () => {
    const location = useLocation();
    const isBlueFooterPage = location.pathname === '/mandat-exclusif' || location.pathname === '/mandat-signature';

    return (
        <footer className="flex flex-col">

            {/* Scrolling Logo Section - Mickaël Lima (Blue on White) */}
            {!isBlueFooterPage && (
                <div className="w-full py-6 border-t overflow-hidden relative flex items-center bg-white border-gray-100">
                    <div className="absolute left-0 w-24 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 w-24 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    <m.div
                        className="flex gap-16 md:gap-32 items-center flex-nowrap min-w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                    >
                        {[...Array(10)].map((_, idx) => (
                            <div
                                key={idx}
                                className="w-56 h-12 md:w-64 md:h-14 opacity-80 bg-primary"
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
                    </m.div>
                </div>
            )}

            {/* Top Image Section - "Looking for your perfect pad?" Style */}
            <div className={`relative w-full h-[500px] md:h-[600px] overflow-hidden group ${isBlueFooterPage ? 'bg-primary' : ''}`}>
                {/* Background Image - Changed to ctaBg for synthetic look */}
                <img
                    src={IMAGES.ctaBg}
                    alt="Mickaël Lima Immobilier"
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${isBlueFooterPage ? 'mix-blend-overlay opacity-40' : ''}`}
                />

                {isBlueFooterPage ? (
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-background z-10"></div>
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20 z-10"></div>
                )}

                {/* Content */}
                <div className="absolute inset-0 container mx-auto px-6 flex flex-col justify-center z-20">
                    <h2 className={`text-4xl md:text-6xl font-medium mb-6 max-w-2xl leading-tight tracking-tight ${isBlueFooterPage ? 'text-white' : 'text-textMain'}`}>
                        À la recherche du<br />
                        <span className={`font-newsletter italic font-normal text-transparent bg-clip-text ${isBlueFooterPage ? 'bg-gradient-to-r from-blue-300 to-white' : 'bg-gradient-to-r from-blue-500 to-primary'}`}>bien parfait ?</span>
                    </h2>
                    <p className={`text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-medium ${isBlueFooterPage ? 'text-white/70' : 'text-gray-600'}`}>
                        Discutons ensemble de votre projet immobilier. Je vous accompagne personnellement pour trouver le logement qui correspond à votre style de vie.
                    </p>

                    {/* Button matching Context */}
                    <Link to="/contact" className={`group inline-flex items-center gap-4 font-bold p-2 pr-8 rounded-full transition-all shadow-md transform hover:-translate-y-1 duration-500 w-fit ${isBlueFooterPage ? 'bg-white text-textMain hover:bg-gray-100' : 'bg-white text-textMain border border-gray-200 hover:bg-gray-50'}`}>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500 shrink-0 ${isBlueFooterPage ? 'bg-textMain text-white' : 'bg-textMain text-white'}`}>
                            <ArrowUpRight size={20} />
                        </div>
                        <span className="tracking-wide">Contactez-moi</span>
                    </Link>
                </div>
            </div>

            {/* Bottom Footer Section - Color matched to Header (bg-primary) */}
            <div className="bg-primary text-white py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row justify-between gap-20">

                        {/* Left Column: Newsletter & Branding */}
                        <div className="lg:w-5/12 flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                                    Recevez nos exclusivités<br />
                                    & Actualités Off-Market
                                </h2>

                                {/* Newsletter Input */}
                                <div className="relative max-w-md mb-16 group/input">
                                    <input
                                        type="email"
                                        placeholder="Votre adresse email"
                                        className="w-full h-16 pl-8 pr-16 rounded-full bg-white text-black font-medium focus:outline-none focus:ring-4 focus:ring-white/20 transition-all placeholder:text-gray-500"
                                    />
                                    <button
                                        type="submit"
                                        aria-label="S'inscrire à la newsletter"
                                        className="absolute right-2 top-2 h-12 w-12 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white hover:bg-primary transition-all duration-300 group-hover/input:rotate-45"
                                    >
                                        <ArrowUpRight size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Branding - Matched with Header Logo but Bigger */}
                            <div className="flex items-center gap-4 mt-4 lg:mt-0">
                                <img
                                    src={IMAGES.logoWhite}
                                    alt="Mickaël Lima"
                                    className="h-24 opacity-90"
                                />
                            </div>
                        </div>

                        {/* Right Column: Links Grid */}
                        <div className="lg:w-7/12 grid grid-cols-2 md:grid-cols-3 gap-10 lg:pl-12">

                            {/* Navigation */}
                            <div>
                                <p className="text-lg font-bold mb-8 text-white">Navigation</p>
                                <ul className="space-y-4 text-gray-300 font-medium">
                                    <li><Link to="/" className="hover:text-white transition-colors">Accueil</Link></li>
                                    <li><Link to="/mandat-signature" className="hover:text-white transition-colors">Nos Mandats</Link></li>
                                    <li><Link to="/nos-biens" className="hover:text-white transition-colors">Nos Biens</Link></li>
                                    <li><Link to="/about" className="hover:text-white transition-colors">À Propos</Link></li>
                                    <li><Link to="/partenaires" className="hover:text-white transition-colors">Partenaires</Link></li>
                                </ul>
                            </div>

                            {/* Projet */}
                            <div>
                                <p className="text-lg font-bold mb-8 text-white">Projet</p>
                                <ul className="space-y-4 text-gray-300 font-medium">
                                    <li><Link to="/estimation" className="hover:text-white transition-colors">Estimer mon bien</Link></li>
                                    <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                                    <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                                </ul>
                            </div>

                            {/* Légal */}
                            <div>
                                <p className="text-lg font-bold mb-8 text-white">Légal</p>
                                <ul className="space-y-4 text-gray-300 font-medium">
                                    <li><Link to="/politique-confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link></li>
                                    <li><Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link></li>
                                </ul>
                            </div>

                            {/* Nos secteurs: 3 colonnes */}
                            <div className="md:col-span-3 pt-8 border-t border-white/10">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

                                    {/* Estimation par commune */}
                                    <div>
                                        <p className="text-sm font-bold mb-4 text-white uppercase tracking-widest">Estimation par commune</p>
                                        <div className="flex flex-wrap gap-2">
                                            {COMMUNES.map((c) => (
                                                <Link
                                                    key={c.slug}
                                                    to={`/${c.slug}/estimation-immobiliere`}
                                                    aria-label={`Estimation immobilière ${c.name}`}
                                                    className="px-3 py-1.5 rounded-full border border-white/15 text-gray-300 text-xs font-medium hover:border-white/40 hover:text-white transition-all"
                                                >
                                                    {c.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Prix immobilier */}
                                    <div>
                                        <p className="text-sm font-bold mb-4 text-white uppercase tracking-widest">Prix immobilier</p>
                                        <div className="flex flex-wrap gap-2">
                                            {COMMUNES.map((c) => (
                                                <Link
                                                    key={c.slug}
                                                    to={`/prix-immobilier/${c.slug}`}
                                                    aria-label={`Prix immobilier ${c.name}`}
                                                    className="px-3 py-1.5 rounded-full border border-white/15 text-gray-300 text-xs font-medium hover:border-white/40 hover:text-white transition-all"
                                                >
                                                    {c.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Marché frontalier */}
                                    <div>
                                        <p className="text-sm font-bold mb-4 text-white uppercase tracking-widest">Marché frontalier</p>
                                        <div className="flex flex-wrap gap-2">
                                            {COMMUNES.map((c) => (
                                                <Link
                                                    key={c.slug}
                                                    to={`/frontalier/${c.slug}`}
                                                    aria-label={`Immobilier frontalier ${c.name}`}
                                                    className="px-3 py-1.5 rounded-full border border-white/15 text-gray-300 text-xs font-medium hover:border-white/40 hover:text-white transition-all"
                                                >
                                                    {c.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Avis Google: Lien direct GBP pour booster signaux Local SEO */}
                    <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                        <a
                            href="https://share.google/fvsAyaT6pI2059MZF"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-accent transition-colors group"
                            aria-label="Voir les 25 avis Google 5 étoiles"
                        >
                            <span className="text-accent">⭐ 5/5</span>
                            <span>Voir les 25 avis Google</span>
                            <ArrowUpRight size={14} className="opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all" />
                        </a>
                        <span className="text-white/20 hidden sm:inline">·</span>
                        <a
                            href="https://share.google/fvsAyaT6pI2059MZF"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors group"
                            aria-label="Laisser un avis Google"
                        >
                            <span>Laisser un avis Google</span>
                            <ArrowUpRight size={14} className="opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all" />
                        </a>
                    </div>

                    {/* NAP: Name Address Phone (contrastes WCAG AA conformes) */}
                    <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-white/85">
                        <span className="font-semibold text-white">Mickaël Lima: L’agence Immo</span>
                        <span>Pays de Gex (01): Intervention sur tout le secteur</span>
                        <a href="tel:+33769313502" className="text-white hover:text-accent transition-colors font-medium">07 69 31 35 02</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};