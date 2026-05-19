import React, { useState, useEffect } from 'react';
import { IMAGES } from '../constants';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileMandatsOpen, setIsMobileMandatsOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsMobileMandatsOpen(false);
    }, [location]);

    // Lock body scroll when mobile menu is open (évite double-scroll fantôme)
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    // Header class logic
    const headerClass = isHome
        ? (isScrolled ? 'bg-primary/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6')
        : 'bg-primary shadow-md py-4';

    // Helper for link classes to match the requested pill container design
    // Added flex items-center for vertical alignment and improved transition/scale for animation
    const getNavLinkClass = (isActive: boolean) => `
    relative px-5 py-2.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-1.5 leading-none
    ${isActive
            ? 'bg-white text-textMain shadow-md scale-105'
            : 'text-white/80 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95'}
  `;

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerClass}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="z-50 relative group flex items-center gap-2">
                    <img
                        src={IMAGES.logoWhite}
                        alt="Mickaël Lima"
                        className="h-8 md:h-10 transition-opacity"
                    />
                </Link>

                {/* Desktop Menu - Centered & Styled as a Unified Pill Bar */}
                <div className="hidden lg:flex flex-1 justify-center">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1.5 shadow-lg transition-transform duration-300 hover:scale-[1.01]">
                        <ul className="flex items-center gap-1">
                            <li>
                                <Link to="/" className={getNavLinkClass(location.pathname === '/')}>
                                    Accueil
                                </Link>
                            </li>

                            {/* Dropdown for Services & Mandats */}
                            <li className="relative group">
                                <button className={getNavLinkClass(location.pathname.includes('mandat'))}>
                                    Services & Mandats <ChevronDown size={14} className={`transition-transform duration-300 ${location.pathname.includes('mandat') ? 'rotate-180' : 'group-hover:rotate-180'}`} />
                                </button>
                                {/* Dropdown Content */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-64 bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 overflow-hidden p-2 text-left ring-1 ring-black/5">
                                    <Link to="/mandat-signature" className="block px-4 py-3 rounded-xl text-textMain hover:bg-surface hover:text-primary transition-colors group/item">
                                        <span className="block font-bold group-hover/item:translate-x-1 transition-transform">Mandat Signature</span>
                                        <span className="text-xs text-gray-500">Le plus performant</span>
                                    </Link>
                                    <Link to="/mandat-exclusif" className="block px-4 py-3 rounded-xl text-textMain hover:bg-surface hover:text-primary transition-colors group/item">
                                        <span className="block font-bold group-hover/item:translate-x-1 transition-transform">Mandat Exclusif</span>
                                        <span className="text-xs text-gray-500">Pour les biens d'exception</span>
                                    </Link>
                                </div>
                            </li>

                            <li>
                                <Link to="/about" className={getNavLinkClass(location.pathname === '/about')}>
                                    À Propos
                                </Link>
                            </li>
                            <li>
                                <Link to="/partenaires" className={getNavLinkClass(location.pathname === '/partenaires')}>
                                    Partenaires
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className={getNavLinkClass(location.pathname === '/blog')}>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className={getNavLinkClass(location.pathname === '/contact')}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Side - CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Link
                        to="/estimation"
                        className="hidden lg:flex bg-white text-textMain pl-6 pr-2 py-2 rounded-full font-bold hover:bg-gray-100 transition-all text-sm shadow-lg items-center gap-3 group hover:-translate-y-0.5"
                    >
                        <span>Estimation Offerte</span>
                        <div className="w-8 h-8 bg-textMain text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                            <ArrowUpRight size={16} />
                        </div>
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        className={`lg:hidden z-50 transition-colors ${isMobileMenuOpen ? 'text-white' : 'text-white'}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay — scroll-friendly + pas de jump sur accordion */}
                <div className={`fixed inset-0 bg-primary/95 backdrop-blur-xl z-40 flex flex-col items-center justify-start gap-6 pt-28 pb-12 px-6 overflow-y-auto transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                    <ul className="flex flex-col items-center gap-7 text-xl md:text-2xl w-full">
                        <li className={`transition-all duration-500 delay-100 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <Link to="/" className="font-bold text-white tracking-widest uppercase hover:text-white/70 transition-colors">Accueil</Link>
                        </li>

                        {/* Mobile Accordion — transition propre (max-h + py au lieu de mt qui sautait) */}
                        <li className={`flex flex-col items-center w-full transition-all duration-500 delay-200 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <button
                                onClick={() => setIsMobileMandatsOpen(!isMobileMandatsOpen)}
                                className="flex items-center gap-2 font-bold text-white tracking-widest uppercase hover:text-white/70 transition-colors"
                                aria-expanded={isMobileMandatsOpen}
                            >
                                Services & Mandats <ChevronDown size={20} className={`transition-transform duration-300 ${isMobileMandatsOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out w-full ${isMobileMandatsOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="flex flex-col items-center gap-4 pt-5">
                                        <Link to="/mandat-signature" className="text-lg text-white/80 hover:text-white font-medium">Mandat Signature</Link>
                                        <Link to="/mandat-exclusif" className="text-lg text-white/80 hover:text-white font-medium">Mandat Exclusif</Link>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className={`transition-all duration-500 delay-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <Link to="/about" className="font-bold text-white tracking-widest uppercase hover:text-white/70 transition-colors">À Propos</Link>
                        </li>
                        <li className={`transition-all duration-500 delay-400 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <Link to="/partenaires" className="font-bold text-white tracking-widest uppercase hover:text-white/70 transition-colors">Partenaires</Link>
                        </li>
                        <li className={`transition-all duration-500 delay-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <Link to="/blog" className="font-bold text-white tracking-widest uppercase hover:text-white/70 transition-colors">Blog</Link>
                        </li>
                        <li className={`transition-all duration-500 delay-600 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <Link to="/contact" className="font-bold text-white tracking-widest uppercase hover:text-white/70 transition-colors">Contact</Link>
                        </li>
                    </ul>

                    <Link
                        to="/estimation"
                        className={`bg-white text-textMain pl-8 pr-2 py-2 rounded-full font-bold hover:bg-gray-100 transition-all duration-500 delay-700 text-sm shadow-2xl flex items-center gap-4 mt-8 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                        <span>ESTIMATION OFFERTE</span>
                        <div className="w-10 h-10 bg-textMain text-white rounded-full flex items-center justify-center">
                            <ArrowUpRight size={20} />
                        </div>
                    </Link>
                </div>

            </div>
        </nav>
    );
};