import React, { useState, useEffect } from 'react';
import { IMAGES } from '../constants';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Navbar refonte « Oakline » :
 * - transparente sur le hero de l'accueil (texte blanc) ;
 * - fond blanc flouté + texte bleu après ~120px de scroll (et sur les
 *   autres pages, dont les tops clairs rendraient un texte blanc illisible) ;
 * - liens avec souligné animé ;
 * - burger dans une pilule ouvrant un panneau mobile plein écran bleu.
 * Les cibles de liens restent celles du menu actuel (NAV_ITEMS : l'entrée
 * « Services & Mandats » pointe vers les deux pages mandats, comme avant).
 */

const SCROLL_THRESHOLD = 120;

const DESKTOP_LINKS = [
  { label: 'Nos Biens', to: '/nos-biens' },
  { label: 'À Propos', to: '/about' },
  { label: 'Partenaires', to: '/partenaires' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileMandatsOpen, setIsMobileMandatsOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';
    // Transparent uniquement au sommet de l'accueil (hero photo sombre).
    const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
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

    // Fermeture au clavier (Échap)
    useEffect(() => {
        if (!isMobileMenuOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMobileMenuOpen(false);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isMobileMenuOpen]);

    // Lien desktop avec souligné animé (scale-x origin-left)
    const NavLinkUnderline: React.FC<{ active: boolean; children: React.ReactNode }> = ({
        active,
        children,
    }) => (
        <span className="relative">
            {children}
            <span
                aria-hidden="true"
                className={`absolute -bottom-1 left-0 right-0 h-[1.5px] origin-left bg-current transition-transform duration-300 ease-out ${
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
            />
        </span>
    );

    const getDesktopLinkClass = (active: boolean) => `
        group relative px-4 py-2 text-[13px] font-semibold tracking-wide transition-colors duration-300
        ${isTransparent
            ? `${active ? 'text-white' : 'text-white/85 hover:text-white'}`
            : `${active ? 'text-white' : 'text-white/80 hover:text-white'}`}
    `;

    const isActivePath = (to: string) =>
        location.pathname === to || location.pathname.startsWith(`${to}/`);

    const isMandatActive = location.pathname.includes('mandat');

    return (
        <nav
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            isTransparent
              ? 'bg-transparent py-5'
              : 'bg-[#011d41]/95 py-3 shadow-[0_10px_30px_-12px_rgba(1,29,65,0.5)] backdrop-blur-md'
          }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="z-50 relative flex items-center gap-2" aria-label="Mickaël Lima — Accueil">
                    <img
                        src={IMAGES.logoWhite}
                        alt=""
                        aria-hidden="true"
                        className="h-8 md:h-9 w-auto transition-all duration-500 [filter:brightness(0)_invert(1)]"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex flex-1 justify-center">
                    <ul className="flex items-center gap-1" aria-label="Navigation principale">
                        <li>
                            <Link
                              to="/"
                              className={getDesktopLinkClass(location.pathname === '/')}
                              aria-current={location.pathname === '/' ? 'page' : undefined}
                            >
                                <NavLinkUnderline active={location.pathname === '/'}>Accueil</NavLinkUnderline>
                            </Link>
                        </li>

                        {/* Dropdown Services & Mandats */}
                        <li className="relative group">
                            <button
                              className={`${getDesktopLinkClass(isMandatActive)} flex items-center gap-1.5`}
                              aria-haspopup="true"
                            >
                                <NavLinkUnderline active={isMandatActive}>Services &amp; Mandats</NavLinkUnderline>
                                <ChevronDown size={14} className={`transition-transform duration-300 ${isMandatActive ? 'rotate-180' : 'group-hover:rotate-180'}`} aria-hidden="true" />
                            </button>
                            {/* Dropdown Content */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-64 bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 p-2 text-left ring-1 ring-black/5 before:content-[''] before:absolute before:-top-6 before:left-0 before:right-0 before:h-6">
                                <Link to="/mandat-signature" className="block px-4 py-3 rounded-xl text-[#011d41] hover:bg-[#f5f5f5] transition-colors group/item">
                                    <span className="block font-bold group-hover/item:translate-x-1 transition-transform">Mandat Signature</span>
                                    <span className="text-xs text-gray-500">Le plus performant</span>
                                </Link>
                                <Link to="/mandat-exclusif" className="block px-4 py-3 rounded-xl text-[#011d41] hover:bg-[#f5f5f5] transition-colors group/item">
                                    <span className="block font-bold group-hover/item:translate-x-1 transition-transform">Mandat Exclusif</span>
                                    <span className="text-xs text-gray-500">Pour les biens d'exception</span>
                                </Link>
                            </div>
                        </li>

                        {DESKTOP_LINKS.map((link) => {
                            const active = isActivePath(link.to);
                            return (
                                <li key={link.to}>
                                    <Link
                                      to={link.to}
                                      className={getDesktopLinkClass(active)}
                                      aria-current={active ? 'page' : undefined}
                                    >
                                        <NavLinkUnderline active={active}>{link.label}</NavLinkUnderline>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Right Side - CTA & Mobile Toggle */}
                <div className="flex items-center gap-3">
                    <Link
                        to="/estimation"
                        className={`hidden lg:inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold shadow-lg transition-all duration-500 hover:-translate-y-0.5 group ${
                            isTransparent
                              ? 'bg-white text-[#011d41] hover:bg-white/90'
                              : 'bg-white text-[#011d41] hover:bg-white/90'
                        }`}
                    >
                        <span>Estimation offerte</span>
                        <span className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${
                            isTransparent ? 'bg-[#011d41] text-white' : 'bg-[#011d41] text-white'
                        }`}>
                            <ArrowUpRight size={16} />
                        </span>
                    </Link>

                    {/* Mobile Toggle — pilule */}
                    <button
                        className={`lg:hidden z-50 flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                            isMobileMenuOpen || isTransparent
                              ? 'border-white/40 bg-white/10 text-white backdrop-blur focus-visible:outline-white'
                              : 'border-white/40 bg-white/10 text-white backdrop-blur focus-visible:outline-white'
                        }`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                        aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                    >
                        {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Panneau mobile plein écran */}
                <div
                  id="mobile-menu"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Menu de navigation"
                  className={`fixed inset-0 bg-[#011d41] z-40 flex flex-col items-center justify-start gap-6 pt-28 pb-12 px-6 overflow-y-auto transition-all duration-500 ${
                    isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                  }`}
                >
                    <ul className="flex w-full max-w-md flex-col items-stretch text-center">
                        <li className={`transition-all duration-500 delay-100 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <Link to="/" className="block border-b border-white/10 py-4 font-serif text-2xl tracking-tight text-white md:text-3xl">
                                Accueil
                            </Link>
                        </li>

                        {/* Accordéon Services & Mandats */}
                        <li className={`transition-all duration-500 delay-200 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <button
                                onClick={() => setIsMobileMandatsOpen(!isMobileMandatsOpen)}
                                className="flex w-full items-center justify-center gap-2 border-b border-white/10 py-4 font-serif text-2xl tracking-tight text-white md:text-3xl"
                                aria-expanded={isMobileMandatsOpen}
                                aria-controls="mobile-mandats-panel"
                            >
                                Services &amp; Mandats
                                <ChevronDown size={20} className={`transition-transform duration-300 ${isMobileMandatsOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                            </button>

                            <div
                              id="mobile-mandats-panel"
                              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out w-full ${isMobileMandatsOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <div className="flex flex-col items-center gap-4 pt-5 pb-2">
                                        <Link to="/mandat-signature" className="text-lg text-white/80 hover:text-white font-medium">Mandat Signature</Link>
                                        <Link to="/mandat-exclusif" className="text-lg text-white/80 hover:text-white font-medium">Mandat Exclusif</Link>
                                    </div>
                                </div>
                            </div>
                        </li>

                        {[
                            { label: 'Nos Biens', to: '/nos-biens', delay: 'delay-300' },
                            { label: 'À Propos', to: '/about', delay: 'delay-300' },
                            { label: 'Partenaires', to: '/partenaires', delay: 'delay-400' },
                            { label: 'Blog', to: '/blog', delay: 'delay-500' },
                            { label: 'Contact', to: '/contact', delay: 'delay-600' },
                        ].map((link) => (
                            <li key={link.to} className={`transition-all duration-500 ${link.delay} ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <Link to={link.to} className="block border-b border-white/10 py-4 font-serif text-2xl tracking-tight text-white md:text-3xl">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link
                        to="/estimation"
                        className={`bg-white text-[#011d41] pl-8 pr-2 py-2 rounded-full font-bold hover:bg-white/90 transition-all duration-500 delay-700 text-sm shadow-2xl flex items-center gap-4 mt-8 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                        <span>ESTIMATION OFFERTE</span>
                        <span className="w-10 h-10 bg-[#011d41] text-white rounded-full flex items-center justify-center">
                            <ArrowUpRight size={20} />
                        </span>
                    </Link>
                </div>

            </div>
        </nav>
    );
};
