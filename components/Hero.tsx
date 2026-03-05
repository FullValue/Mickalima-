import React, { useState, useEffect } from 'react';
import { IMAGES, HERO_SLIDES } from '../constants';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ArrowUpRight, Award, Home, Users } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section id="home" className="relative w-full h-screen min-h-[500px] lg:min-h-[700px] flex flex-col justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0">
                    <img
                        src={HERO_SLIDES[0]}
                        alt="Hero Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Blue/Dark Gradient Overlay for better text readability and Fixoria look */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-black/30 z-10"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full flex flex-col justify-center">

                <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-12">

                    {/* Left Section: Heading & Copy */}
                    <div className="max-w-3xl pt-20 lg:pt-0">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white tracking-tight drop-shadow-xl mb-6">
                            Vendez votre bien <br />
                            au meilleur prix <br />
                            dans le Pays de Gex
                        </h1>
                        <p className="text-lg sm:text-xl text-white/90 font-medium max-w-2xl drop-shadow-md mb-8 leading-relaxed">
                            Une stratégie de vente premium, une mise en valeur professionnelle et un accompagnement personnalisé pour vendre efficacement, sans stress et sans brader votre bien.
                        </p>

                        {/* Buttons styled like the reference search bar/pill */}
                        <div className="flex flex-col sm:flex-row gap-4 items-start w-full">
                            <Link to="/estimation" className="bg-white text-textMain py-2 px-2 pr-6 rounded-full font-bold hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1 flex items-center gap-4 group max-w-full">
                                <div className="bg-textMain text-white rounded-full p-4 group-hover:rotate-45 transition-transform duration-300 shrink-0">
                                    <ArrowUpRight size={20} />
                                </div>
                                <span className="text-base tracking-wide whitespace-normal sm:whitespace-nowrap text-left">Estimer mon bien gratuitement</span>
                            </Link>
                            <Link to="/contact" className="bg-white/10 backdrop-blur-md text-white border border-white/20 py-2 px-2 pr-6 rounded-full font-bold hover:bg-white/20 transition-all shadow-xl hover:-translate-y-1 flex items-center gap-4 group max-w-full">
                                <div className="bg-white text-textMain rounded-full p-4 group-hover:scale-110 transition-transform duration-300 shrink-0">
                                    <Phone size={20} />
                                </div>
                                <span className="text-base tracking-wide whitespace-normal sm:whitespace-nowrap text-left">Être rappelé</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};