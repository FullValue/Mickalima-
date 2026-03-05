import React from 'react';
import { IMAGES } from '../constants';
import { Ruler, ArrowUpRight, Trophy, Shield, Target, Award, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export const About: React.FC = () => {
  return (
    <div className="bg-background min-h-screen flex flex-col">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20">
        <div className="absolute inset-0 z-0 text-center flex justify-center">
          {/* L'image est moins assombrie */}
          <img
            src="/images/about-hero.jpg"
            alt="Background"
            className="w-full h-full object-cover mix-blend-overlay opacity-40 mx-auto"
          />
          {/* L'overlay bleu est très allégé */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-background z-10"></div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 relative z-20 text-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white/90 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Award size={16} /> Notre Histoire
          </motion.div>
          {/* Typographie alignée sur MandatSignature */}
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-8xl font-medium text-white mb-6 tracking-tight leading-[1.05] drop-shadow-2xl break-words hyphens-auto">
            Une approche exclusive <br />
            <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">de l'immobilier.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
            Redéfinir les standards de l'immobilier dans le Pays de Gex avec exigence et transparence.
          </motion.p>
        </motion.div>
      </section>

      {/* MAIN CONTENT SECTION - BIO */}
      <section className="py-32 bg-white text-textMain relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">

            {/* PORTRAIT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-5/12 relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 group">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-black/20 to-transparent z-10 pointer-events-none"></div>
                <img
                  src={IMAGES.heroAgent}
                  alt="Mickael Lima"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute bottom-10 left-10 right-10 z-20 pointer-events-none">
                  <p className="font-bold text-3xl text-white tracking-tight mb-2">Mickael Lima</p>
                  <p className="text-sm text-white/80 uppercase tracking-widest font-bold">Expert Immobilier Pays de Gex</p>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white p-6 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 z-30 hidden lg:block hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center border border-gray-100">
                    <Trophy size={28} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold tracking-tighter text-textMain">100%</div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Satisfaction Client</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* TEXT CONTENT */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="lg:w-7/12"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200/60 bg-white/60 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                <MessageSquare size={16} /> Faisons connaissance !
              </motion.div>

              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain mb-10 leading-[1.05] tracking-tight drop-shadow-sm break-words hyphens-auto">
                L'ambition d'un service <br />
                <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">sur-mesure.</span>
              </motion.h2>

              <motion.div variants={fadeInUp} className="prose prose-lg text-gray-500 max-w-none font-light leading-relaxed mb-12">
                <p className="mb-6 text-xl text-gray-600 font-medium">
                  Bonjour, <br />
                  Je suis Mickael LIMA DOS SANTOS, agent commercial immobilier à L'Agence Immo, et c'est avec une passion profonde pour l'immobilier que je me présente à vous aujourd'hui.
                </p>
                <p className="mb-6">
                  Fort de 7 années d'expérience dans la promotion immobilière en tant que prospecteur foncier, j'ai développé une solide expertise dans l'identification des opportunités foncières et la gestion de projets immobiliers, notamment dans le Pays de Gex, une région que je connais parfaitement.
                </p>
                <p>
                  Au fil de ces années, j'ai acquis des compétences variées dans les domaines techniques, juridiques et commerciaux, me permettant d'offrir un accompagnement personnalisé et complet. Mon objectif est de vous guider à chaque étape de votre projet immobilier avec rigueur et professionnalisme.
                </p>
              </motion.div>

              {/* Actions */}
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5">
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
              </motion.div>

            </motion.div>
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
              Nos <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">Valeurs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Target, title: "Transparence", text: "Une communication claire à chaque étape de la transaction. Pas de promesses irréalisables, des faits concrets et un suivi régulier." },
              { icon: Award, title: "Exigence Marketing", text: "Nous traitons chaque bien comme un produit premium. Photos HDR, vidéos 4K cinématiques et storytelling percutant." },
              { icon: Shield, title: "Ancrage Local", text: "Une parfaite maîtrise des micro-marchés du Pays de Gex, des infrastructures locales et des attentes de la clientèle frontalière." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] p-10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center mb-8 border border-gray-100 group-hover:bg-primary group-hover:text-white transition-colors duration-500 text-primary">
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-textMain mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light text-lg">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION CITATION SUPPRIMÉE */}
    </div>
  );
};