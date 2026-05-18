import React from 'react';
import { FACILITIES, IMAGES } from '../constants';
import { ArrowUpRight, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';

const portalLogos = [
  { src: '/images/seloger.png', alt: 'SeLoger', href: 'https://www.seloger.com/professionnels-immobilier/2bccyjgnD7SN5UJ1TfrRMy', title: 'Mickaël Lima sur SeLoger' },
  { src: '/images/leboncoin.png', alt: 'Leboncoin', href: 'https://www.leboncoin.fr/boutique/7395512/', title: 'Mickaël Lima sur Leboncoin' },
  { src: '/images/bienici-logo.svg', alt: 'BienIci', href: 'https://www.bienici.com/', title: 'Mickaël Lima sur BienIci' },
  { src: '/images/logo_logicimmo.png', alt: 'LogicImmo', href: 'https://www.logic-immo.com/agences-immobilieres/2bccyjgnD7SN5UJ1TfrRMy', title: 'Mickaël Lima sur Logic-Immo' },
  { src: '/images/lefigaroimmo.png', alt: 'Figaro Immobilier', href: 'https://immobilier.lefigaro.fr/', title: 'Mickaël Lima sur Figaro Immobilier' },
  { src: '/images/logoluxuryestate.png', alt: 'Luxury Estate', href: 'https://www.luxuryestate.com/', title: 'Mickaël Lima sur Luxury Estate' },
];

export const Method: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <section id="section-method" className="bg-surface pt-16 md:pt-24 lg:pt-32">
      <div className="container mx-auto px-6 mb-16 md:mb-24">

        {/* Header Section */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row justify-between items-center mb-12 md:mb-20 gap-10"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200/60 bg-white/60 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
              <Star size={16} /> Méthode Éprouvée
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain tracking-tight mb-6 leading-[1.05]">
              Une méthode en <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary whitespace-nowrap">3 temps</span>.
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-8">
            <Link to="/mandat-signature" className="bg-white text-textMain font-bold p-2 pr-8 rounded-full border border-gray-200 hover:bg-gray-50 transition-all shadow-sm flex items-center gap-4 group w-fit">
              <div className="bg-textMain text-white rounded-full p-4 group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={20} />
              </div>
              <span className="text-sm tracking-wide uppercase">Découvrir les mandats proposés</span>
            </Link>
          </div>
        </m.div>

        {/* Accordion Cards Grid */}
        <div className="flex flex-col lg:flex-row gap-6 w-full lg:h-[600px]">
          {[
            {
              id: 1,
              badge: "Pilier 1",
              title: "Mise en valeur",
              desc: "Chaque bien est présenté comme un produit premium grâce à des outils professionnels (photo, vidéo, visite immersive, home staging).",
              img: IMAGES.misc1
            },
            {
              id: 2,
              badge: "Pilier 2",
              title: "Visibilité maximale",
              desc: "Votre bien bénéficie d’une diffusion large et ciblée : réseaux sociaux, portails immobiliers, fichier acquéreurs et partage inter-agences.",
              img: IMAGES.misc2
            },
            {
              id: 3,
              badge: "Pilier 3",
              title: "Accompagnement personnalisé",
              desc: "Un suivi clair et transparent à chaque étape, avec des échanges réguliers et des comptes rendus détaillés.",
              img: IMAGES.misc3
            }
          ].map((pilier, index) => {
            const isActive = activeIndex === index;
            return (
              <m.div
                key={pilier.id}
                onHoverStart={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative rounded-[2.5rem] overflow-hidden group bg-black/5 cursor-pointer transition-all duration-700 ease-out flex flex-col justify-end ${isActive ? 'lg:flex-[2] h-[280px] sm:h-[360px] lg:h-full' : 'lg:flex-[1] h-[200px] sm:h-[260px] lg:h-full'
                  }`}
              >
                <img
                  src={pilier.img}
                  alt={pilier.title}
                  className={`absolute inset-0 w-full h-full object-cover origin-center transition-all duration-1000 ${isActive ? 'scale-105 opacity-100' : 'scale-100 opacity-50 grayscale-[30%] group-hover:opacity-80 group-hover:grayscale-0'}`}
                />
                <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-gradient-to-t from-black/90 via-black/40 to-transparent' : 'bg-black/60 group-hover:bg-black/40'}`}></div>

                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-10 pointer-events-none">
                  <div className="max-w-xl transition-transform duration-700">
                    <span className={`inline-block px-4 py-1 rounded-full border backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 shadow-sm transition-colors duration-500 ${isActive ? 'border-white/20 bg-black/40 text-white/90' : 'border-white/10 bg-white/5 text-white/50 group-hover:text-white/80'}`}>
                      {pilier.badge}
                    </span>
                    <h3 className={`font-medium mb-2 md:mb-4 leading-tight tracking-tight drop-shadow-md transition-all duration-700 ${isActive ? 'text-4xl md:text-5xl text-white' : 'text-2xl md:text-3xl text-white/70 group-hover:text-white'}`}>
                      {pilier.title}
                    </h3>
                    <div className={`grid transition-all duration-700 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-2 md:mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                      <p className="text-white/90 font-light leading-relaxed text-base md:text-lg lg:text-xl drop-shadow-sm overflow-hidden min-h-0">
                        {pilier.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>

      {/* Video Tour Section - Full Width (Kept as requested) */}
      <div className="w-full h-[500px] md:h-[800px] relative group cursor-pointer bg-gray-900 overflow-hidden">
        <img
          src={IMAGES.videoBg}
          alt="Video Tour Background"
          className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <a
            href="https://www.youtube.com/watch?v=JMyl8K2voHU"
            target="_blank"
            rel="noreferrer"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-md flex items-center justify-center hover:scale-110 hover:bg-primary hover:border-primary transition-all duration-500 shadow-2xl group-hover:shadow-primary/50"
          >
            <div className="w-0 h-0 border-t-[12px] md:border-t-[16px] border-t-transparent border-l-[20px] md:border-l-[28px] border-l-white border-b-[12px] md:border-b-[16px] border-b-transparent ml-2"></div>
          </a>
        </div>

        <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[20vw] font-bold text-white opacity-10 leading-[0.75] tracking-tighter translate-y-[10%]">
            IMMERSION
          </span>
        </div>
      </div>

      {/* Scrolling Logos Under Video */}
      <div className="w-full border-t border-gray-100 py-8 overflow-hidden relative flex items-center bg-white">
        <div className="absolute left-0 w-24 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 w-24 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <m.div
          className="flex flex-nowrap gap-16 md:gap-24 items-center min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {[...portalLogos, ...portalLogos, ...portalLogos].map((logo, idx) => (
            <a key={idx} href={logo.href} target="_blank" rel="noopener noreferrer" title={logo.title} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 px-4 shrink-0 w-32 md:w-48">
              <img src={logo.src} alt={logo.alt} width="200" height="60" loading="lazy" decoding="async" className="max-h-10 md:max-h-14 w-auto object-contain" />
            </a>
          ))}
        </m.div>
      </div>

    </section>
  );
};