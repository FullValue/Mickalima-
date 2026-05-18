import React, { useState } from 'react';
import { COMMUNES } from '../constants';
import { Link } from 'react-router-dom';
import { Phone, ArrowUpRight, Home as HomeIcon, MapPin, Ruler, CheckCircle2, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
    const [propertyType, setPropertyType] = useState<'Maison' | 'Appartement' | 'Terrain'>('Maison');
    const [commune, setCommune] = useState('');
    const [surface, setSurface] = useState('');
    const [contact, setContact] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        formData.append('access_key', '38f90cdc-9f17-48ef-bae6-f94e9b44e41f');
        formData.append('subject', 'Estimation rapide — Pays de Gex');
        formData.append('from_name', 'mickael-lima.immo');
        formData.append('botcheck', '');

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: json,
            });
            const data = await response.json();
            if (data.success) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                console.error('Web3Forms error:', data);
                setStatus('error');
            }
        } catch (err) {
            console.error('Fetch error:', err);
            setStatus('error');
        }
    };

    return (
        <section id="home" className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden pt-24 md:pt-28 lg:pt-32">
            {/* Background Image — AVIF + WebP + JPG fallback */}
            <div className="absolute inset-0 z-0">
                <picture>
                    <source srcSet="/images/hero-mickael.avif" type="image/avif" />
                    <source srcSet="/images/hero-mickael.webp" type="image/webp" />
                    <img
                        src="/images/hero-mickael.jpg"
                        alt="Mickaël Lima agent immobilier Pays de Gex"
                        width="1200"
                        height="630"
                        fetchPriority="high"
                        loading="eager"
                        decoding="async"
                        className="w-full h-full object-cover"
                    />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/55 to-primary/65 z-10"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">

                {/* Left Section: Heading & Copy */}
                <div className="w-full lg:max-w-xl xl:max-w-2xl pt-12 lg:pt-0 lg:-mt-20">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-white tracking-tight drop-shadow-xl mb-6">
                        Vendez votre bien <br />
                        au meilleur prix <br />
                        dans le Pays de Gex
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-white/90 font-medium drop-shadow-md mb-8 leading-relaxed">
                        Une stratégie premium, une mise en valeur professionnelle et un accompagnement personnalisé pour vendre sans stress et sans brader.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start w-full">
                        <Link to="/estimation" className="bg-white text-textMain py-2 px-2 pr-6 rounded-full font-bold hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1 flex items-center gap-4 group">
                            <div className="bg-textMain text-white rounded-full p-3 group-hover:rotate-45 transition-transform duration-300 shrink-0">
                                <ArrowUpRight size={18} />
                            </div>
                            <span className="text-sm tracking-wide whitespace-nowrap">Estimer mon bien</span>
                        </Link>
                        <Link to="/contact" className="bg-white/10 backdrop-blur-md text-white border border-white/20 py-2 px-2 pr-6 rounded-full font-bold hover:bg-white/20 transition-all shadow-xl hover:-translate-y-1 flex items-center gap-4 group">
                            <div className="bg-white text-textMain rounded-full p-3 group-hover:scale-110 transition-transform duration-300 shrink-0">
                                <Phone size={18} />
                            </div>
                            <span className="text-sm tracking-wide whitespace-nowrap">Être rappelé</span>
                        </Link>
                    </div>
                </div>

                {/* Right Section: Liquid Glass Estimation Form */}
                <div className="w-full lg:w-[420px] lg:shrink-0">
                    <div
                        className="relative rounded-[2rem] p-7 md:p-8 border border-white/25 shadow-[0_25px_80px_rgba(0,12,40,0.45)] overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 100%)',
                            backdropFilter: 'blur(24px) saturate(160%)',
                            WebkitBackdropFilter: 'blur(24px) saturate(160%)',
                        }}
                    >
                        {/* Inner highlight ring */}
                        <div className="absolute inset-0 rounded-[2rem] pointer-events-none" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)' }} />
                        {/* Soft glow blob */}
                        <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />

                        {status !== 'success' ? (
                            <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                                {/* Web3Forms hidden inputs */}
                                <input type="hidden" name="access_key" value="38f90cdc-9f17-48ef-bae6-f94e9b44e41f" />
                                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                                <div className="flex items-center gap-2 text-white/80 text-[0.65rem] font-bold uppercase tracking-widest">
                                    <Sparkles size={14} /> Estimation gratuite · 48h
                                </div>
                                <h2 className="text-2xl font-semibold text-white leading-tight">
                                    Quelle est la valeur<br />de votre bien&nbsp;?
                                </h2>

                                {/* Type de bien — pills + hidden input pour FormData */}
                                <input type="hidden" name="type_de_bien" value={propertyType} />
                                <div>
                                    <label className="block text-[0.65rem] font-bold text-white/60 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                                        <HomeIcon size={12} /> Type de bien
                                    </label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {(['Maison', 'Appartement', 'Terrain'] as const).map((type) => (
                                            <button
                                                type="button"
                                                key={type}
                                                onClick={() => setPropertyType(type)}
                                                className={`py-2.5 rounded-xl border text-xs font-bold transition-all ${propertyType === type
                                                    ? 'bg-white text-textMain border-white shadow-lg'
                                                    : 'bg-white/5 text-white/80 border-white/20 hover:bg-white/15'}`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Commune */}
                                <div>
                                    <label className="block text-[0.65rem] font-bold text-white/60 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                                        <MapPin size={12} /> Commune
                                    </label>
                                    <select
                                        required
                                        name="commune"
                                        value={commune}
                                        onChange={(e) => setCommune(e.target.value)}
                                        className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all appearance-none cursor-pointer"
                                        style={{ colorScheme: 'dark' }}
                                    >
                                        <option value="" disabled className="bg-primary text-white">Choisir une commune…</option>
                                        {COMMUNES.map((c) => (
                                            <option key={c.slug} value={c.name} className="bg-primary text-white">{c.name}</option>
                                        ))}
                                        <option value="Autre" className="bg-primary text-white">Autre Pays de Gex</option>
                                    </select>
                                </div>

                                {/* Surface + Contact côte-à-côte */}
                                <div className="grid grid-cols-5 gap-3">
                                    <div className="col-span-2">
                                        <label className="block text-[0.65rem] font-bold text-white/60 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                                            <Ruler size={12} /> Surface
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                required
                                                min="1"
                                                name="surface_m2"
                                                value={surface}
                                                onChange={(e) => setSurface(e.target.value)}
                                                placeholder="120"
                                                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 pr-9 text-sm font-medium focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 text-xs font-medium pointer-events-none">m²</span>
                                        </div>
                                    </div>
                                    <div className="col-span-3">
                                        <label className="block text-[0.65rem] font-bold text-white/60 uppercase tracking-widest mb-2">
                                            Contact
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            name="contact_tel_ou_email"
                                            value={contact}
                                            onChange={(e) => setContact(e.target.value)}
                                            placeholder="Tél. ou email"
                                            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-white text-textMain font-bold rounded-full py-3.5 flex items-center justify-center gap-2 hover:bg-gray-50 hover:-translate-y-0.5 transition-all shadow-xl group disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                >
                                    <span>{status === 'loading' ? 'Envoi…' : 'Recevoir mon estimation'}</span>
                                    {status !== 'loading' && (
                                        <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                                    )}
                                </button>

                                {status === 'loading' && (
                                    <p className="text-white/70 text-xs font-medium text-center">Envoi en cours…</p>
                                )}
                                {status === 'error' && (
                                    <p className="text-red-300 text-xs font-medium text-center">Une erreur est survenue. Appelez directement le <a href="tel:+33769313502" className="underline">07 69 31 35 02</a>.</p>
                                )}

                                <p className="text-[0.65rem] text-white/50 text-center font-light">
                                    Confidentiel · sans engagement · réponse sous 48h
                                </p>
                            </form>
                        ) : (
                            <div className="relative z-10 text-center py-6 space-y-4">
                                <div className="w-16 h-16 mx-auto rounded-full bg-white/20 flex items-center justify-center">
                                    <CheckCircle2 size={32} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-semibold text-white leading-tight">✅ Message envoyé&nbsp;!</h3>
                                <p className="text-sm text-white/80 leading-relaxed">
                                    Mickaël vous recontacte sous <strong className="font-bold text-white">24 h</strong> pour planifier la visite et finaliser l'estimation de votre {propertyType.toLowerCase()} {commune && `à ${commune}`}.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => { setStatus('idle'); setCommune(''); setSurface(''); setContact(''); }}
                                    className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white underline-offset-4 hover:underline transition-colors"
                                >
                                    Nouvelle demande
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};