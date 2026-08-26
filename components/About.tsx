import React from 'react';
import { IMAGES } from '../constants';
import { SEO } from './SEO';
import { Ruler, ArrowUpRight, Trophy, Shield, Target, Award, MessageSquare } from 'lucide-react';
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

const ABOUT_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mickaël Lima',
  jobTitle: 'Agent commercial immobilier',
  worksFor: {
    '@type': 'RealEstateAgent',
    name: 'L’agence Immo',
    url: 'https://www.lagenceimmo01.fr',
  },
  url: 'https://mickael-lima.immo/about/',
  telephone: '+33769313502',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '328 Rue des Fontanettes',
    addressLocality: 'Divonne-les-Bains',
    postalCode: '01220',
    addressCountry: 'FR',
  },
  areaServed: 'Pays de Gex',
  description:
    'Agent immobilier indépendant spécialisé dans le marché franco-suisse du Pays de Gex. 8 ans d’expérience, 240 ventes en 5 ans.',
  knowsAbout: [
    'Immobilier Pays de Gex',
    'Marché frontalier franco-suisse',
    'Estimation immobilière',
  ],
  sameAs: [
    'https://www.linkedin.com/in/mickael-lima-dos-santos-97137419b/',
    'https://share.google/fvsAyaT6pI2059MZF',
  ],
};

const KEY_STATS = [
  { value: '8 ans', label: "d'expérience" },
  { value: '240', label: 'ventes en 5 ans' },
  { value: '25', label: 'avis 5 étoiles Google' },
  { value: '40+', label: 'portails de diffusion' },
  { value: '20', label: 'communes couvertes' },
  { value: '< 24h', label: 'délai de réponse garanti' },
];

export const About: React.FC = () => {
  return (
    <>
      <SEO
        title="À Propos: Mickaël Lima | Agent Immobilier Pays de Gex"
        description="Découvrez Mickaël Lima Dos Santos, agent commercial immobilier avec 8 ans d'expérience dans le Pays de Gex (240 ventes en 5 ans). Expertise locale, stratégie de vente et accompagnement personnalisé."
        canonical="/about"
        schema={ABOUT_SCHEMA}
      />
      <div className="bg-background min-h-screen flex flex-col">

      {/* HERO SECTION */}
      <section className="relative min-h-[620px] flex items-center overflow-hidden bg-primary pt-20">
        <div className="absolute inset-0 z-0">
          {/* L'image est moins assombrie */}
          <img
            src="/images/about-hero.jpg"
            width="1920"
            height="1080"
            loading="eager"
            decoding="async"
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* L'overlay bleu est très allégé */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#011d41]/95 via-[#011d41]/60 to-[#011d41]/10 z-10"></div>
        </div>

        <m.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 relative z-20 text-left"
        >
          <m.div variants={fadeInUp} className="flex items-center gap-7 text-white/90 text-sm font-bold uppercase tracking-[0.2em] mb-8">
            <span className="inline-flex items-center gap-2 whitespace-nowrap"><Award size={16} /> Notre Histoire</span>
            <span aria-hidden="true" className="flex-1 h-px bg-white/25"></span>
          </m.div>
          {/* Typographie alignée sur MandatSignature */}
          <m.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-8xl font-medium text-white mb-6 tracking-tight leading-[1.05] break-words hyphens-auto">
            Une stratégie adaptée <br />
            <span className="font-newsletter italic font-normal">à chaque bien.</span>
          </m.h1>
          <m.p variants={fadeInUp} className="text-lg text-white/90 max-w-xl leading-relaxed font-light">
            Estimer juste, présenter efficacement et négocier dans votre intérêt pour vendre dans les meilleures conditions.
          </m.p>
        </m.div>
      </section>

      {/* MAIN CONTENT SECTION - BIO */}
      <section className="py-32 bg-white text-textMain relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">

            {/* PORTRAIT */}
            <m.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-5/12 relative"
            >
              <div className="relative z-10 rounded-[10px] overflow-hidden border border-gray-100 group">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-black/20 to-transparent z-10 pointer-events-none"></div>
                <img
                  src={IMAGES.heroAgent}
                  alt="Mickaël Lima"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute bottom-10 left-10 right-10 z-20 pointer-events-none">
                  <p className="font-bold text-3xl text-white tracking-tight mb-2">Mickaël Lima</p>
                  <p className="text-sm text-white/80 uppercase tracking-widest font-bold">Expert Immobilier Pays de Gex</p>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white p-6 rounded-[10px] border border-gray-100 z-30 hidden lg:block hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-surface rounded-[10px] flex items-center justify-center border border-gray-100">
                    <Trophy size={28} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold tracking-tighter text-textMain">100%</div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Satisfaction Client</div>
                  </div>
                </div>
              </div>
            </m.div>

            {/* TEXT CONTENT */}
            <m.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="lg:w-7/12"
            >
              <m.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200/60 bg-white/60 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                <MessageSquare size={16} /> Faisons connaissance !
              </m.div>

              <m.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain mb-10 leading-[1.05] tracking-tight drop-shadow-sm break-words hyphens-auto">
                Une méthode claire pour <br />
                <span className="font-newsletter italic font-normal">vendre au meilleur prix.</span>
              </m.h2>

              <m.div variants={fadeInUp} className="prose prose-lg text-gray-500 max-w-none font-light leading-relaxed mb-12">
                <p className="mb-6 text-xl text-gray-600 font-medium">
                  Bonjour, <br />
                  Je suis Mickaël Lima Dos Santos, agent commercial immobilier indépendant à L'agence Immo, basé à Divonne-les-Bains au cœur du Pays de Gex.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-textMain mt-10 mb-4">Qui je suis</h3>
                <p className="mb-6">
                  8 ans dans l'immobilier, dont 5 au sein de L'agence Immo à Divonne-les-Bains. 240 ventes réalisées dans le Pays de Gex: appartements, maisons, biens de prestige, locaux commerciaux. Agent indépendant, rémunéré uniquement à la commission : mes intérêts sont alignés avec ceux de mes clients. Bilingue français-anglais, je travaille au quotidien avec une clientèle française, suisse et internationale, en particulier les frontaliers, expatriés et collaborateurs du CERN, de l'ONU et de l'OMS. Mon ancrage local à Divonne me permet de connaître les micro-marchés commune par commune et d'estimer chaque bien au juste prix dès le premier rendez-vous.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-textMain mt-10 mb-4">Mon approche</h3>
                <p className="mb-6">
                  Le Pays de Gex n'est pas un marché immobilier classique. Les prix sont structurés par la demande genevoise, les acheteurs sont souvent frontaliers ou expatriés, et les délais de vente dépendent directement de la justesse de l'estimation initiale. J'ai construit ma pratique autour de trois principes : <strong>estimation au prix du marché réel</strong>, <strong>mise en valeur professionnelle</strong> avec des supports adaptés au bien, et <strong>accompagnement de bout en bout</strong> jusqu'à la signature chez le notaire. L'objectif est de défendre votre prix sans surévaluer le bien ni ralentir inutilement la vente.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-textMain mt-10 mb-4">Ce que j'inclus dans chaque mandat</h3>
                <ul className="list-disc ml-6 space-y-2 mb-6">
                  <li>Estimation gratuite et argumentée (données DVF + comparables récents)</li>
                  <li>Shooting photo professionnel (pas de smartphone, pas de frais)</li>
                  <li>Vidéo 4K drone pour les biens avec extérieur ou vue</li>
                  <li>Diffusion sur 40+ portails : SeLoger, Leboncoin, Bien'ici, Figaro Immo, Properstar (Suisse), LuxuryEstate, et 35+ autres</li>
                  <li>Reporting régulier : nombre de vues, retours visiteurs, ajustements de stratégie si nécessaire</li>
                  <li>Un seul interlocuteur, de l'estimation à la remise des clés</li>
                </ul>

                <h3 className="text-2xl md:text-3xl font-bold text-textMain mt-10 mb-4">Le marché que je couvre</h3>
                <p className="mb-6">
                  20 communes du Pays de Gex dans le département de l'Ain (01) : Ferney-Voltaire, Divonne-les-Bains, Saint-Genis-Pouilly, Gex, Prévessin-Moëns, Cessy, Ornex, Ségny, Thoiry, Crozet, Sauverny, Grilly, Versonnex, Collonges, Péron, Challex, Vesancy, Farges, Échenevex, Saint-Jean-de-Gonville. Marché frontalier franco-suisse: proximité Genève, CERN, ONU, OMS. Clientèle française et internationale.
                </p>
              </m.div>

              {/* Actions */}
              <m.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5">
                <Link to="/estimation" className="bg-white text-textMain font-bold p-2 pr-8 rounded-full hover:bg-gray-50 border border-gray-200 transition-all shadow-sm flex items-center gap-4 group w-fit">
                  <div className="bg-textMain text-white rounded-full p-4 group-hover:rotate-45 transition-transform duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                  <span className="tracking-wide uppercase text-sm">Estimer mon bien</span>
                </Link>
                <Link to="/contact" className="bg-white text-textMain border border-gray-200 font-bold p-2 pr-8 rounded-full hover:bg-gray-50 shadow-sm transition-all flex items-center gap-4 group w-fit">
                  <div className="bg-surface text-textMain rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare size={18} />
                  </div>
                  <span className="tracking-wide uppercase text-sm">Échanger sur mon projet</span>
                </Link>
              </m.div>

            </m.div>
          </div>
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="py-20 md:py-28 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white/90 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
              <Trophy size={16} /> Chiffres Clés
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight">
              8 ans, 240 ventes,<br />
              <span className="font-newsletter italic font-normal">une seule région.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {KEY_STATS.map((stat, idx) => (
              <m.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[10px] p-6 md:p-8 text-center hover:bg-white/15 transition-colors"
              >
                <div className="text-3xl md:text-5xl font-bold tracking-tighter mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm text-white/70 font-medium uppercase tracking-widest">{stat.label}</div>
              </m.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link to="/estimation" className="bg-white text-textMain font-bold p-2 pr-8 rounded-full hover:bg-gray-100 transition-all flex items-center gap-4 group">
              <div className="bg-textMain text-white rounded-full p-4 group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={18} />
              </div>
              <span className="tracking-wide uppercase text-sm">Demander une estimation gratuite</span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - GRID */}
      <section className="py-32 bg-surface relative overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200/60 bg-white/60 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
              <Shield size={16} /> Nos Valeurs
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain mb-6 leading-[1.05] tracking-tight drop-shadow-sm break-words hyphens-auto">
              Nos <span className="font-newsletter italic font-normal">Valeurs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Target, title: "Transparence", text: "Une communication claire à chaque étape de la transaction. Pas de promesses irréalisables, des faits concrets et un suivi régulier." },
              { icon: Award, title: "Mise en valeur", text: "Des photos professionnelles, des supports adaptés et une présentation qui aide les acquéreurs à comprendre la valeur de votre bien." },
              { icon: Shield, title: "Ancrage Local", text: "Une parfaite maîtrise des micro-marchés du Pays de Gex, des infrastructures locales et des attentes de la clientèle frontalière." }
            ].map((item, idx) => (
              <m.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[10px] p-10 transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-[10px] bg-surface flex items-center justify-center mb-8 border border-gray-100 group-hover:bg-primary group-hover:text-white transition-colors duration-500 text-primary">
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-textMain mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light text-lg">
                  {item.text}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION CITATION SUPPRIMÉE */}
    </div>
    </>
  );
};
