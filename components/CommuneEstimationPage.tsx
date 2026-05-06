import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  TrendingUp,
  Clock,
  CheckCircle,
  ChevronDown,
  Phone,
} from 'lucide-react';
import { COMMUNES } from '../constants';
import { SEO } from './SEO';

export const CommuneEstimationPage: React.FC = () => {
  const { commune: communeSlug } = useParams<{ commune: string }>();
  const commune = COMMUNES.find((c) => c.slug === communeSlug);
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);

  if (!commune) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-surface px-6 gap-8">
        <h2 className="text-4xl font-medium text-textMain">Commune introuvable</h2>
        <Link
          to="/"
          className="flex items-center gap-2 bg-white text-textMain font-bold px-8 py-4 rounded-full shadow-lg hover:bg-surface transition-colors"
        >
          <ArrowLeft size={20} /> Retour à l'accueil
        </Link>
      </div>
    );
  }

  const year = new Date().getFullYear();

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: 'https://mickael-lima.immo',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: commune.name,
          item: `https://mickael-lima.immo/${commune.slug}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Estimation immobilière',
          item: `https://mickael-lima.immo/${commune.slug}/estimation-immobiliere`,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      name: 'Mickaël Lima — Agent Immobilier',
      url: 'https://mickael-lima.immo',
      telephone: '+33769313502',
      areaServed: {
        '@type': 'City',
        name: commune.name,
        postalCode: commune.cp,
        addressRegion: 'Ain',
        addressCountry: 'FR',
      },
      description: `Estimation immobilière gratuite à ${commune.name} (${commune.cp}). Expert du marché frontalier du Pays de Gex.`,
    },
  ];

  const faqs = [
    {
      question: `Combien vaut mon bien à ${commune.name} en ${year} ?`,
      answer: `Les prix au m² à ${commune.name} varient entre ${commune.prixApptMin.toLocaleString('fr-FR')} et ${commune.prixApptMax.toLocaleString('fr-FR')} €/m² pour les appartements, et entre ${commune.prixMaisonMin.toLocaleString('fr-FR')} et ${commune.prixMaisonMax.toLocaleString('fr-FR')} €/m² pour les maisons. La valeur précise dépend de l'état, de l'exposition, du DPE et des transactions récentes dans votre rue. Une estimation de terrain reste la seule méthode fiable.`,
    },
    {
      question: `Combien de temps faut-il pour vendre à ${commune.name} ?`,
      answer: `Un bien correctement estimé à ${commune.name} se vend en moyenne en ${commune.delaiMoyen} jours. Un bien surestimé de 10 % ou plus voit ce délai multiplié par 3 à 4, avec une décote finale quasi-systématique. La justesse de l'estimation initiale est le facteur le plus déterminant sur le prix final obtenu.`,
    },
    {
      question: `L'estimation est-elle vraiment gratuite et sans engagement ?`,
      answer: `Oui. L'estimation est gratuite, confidentielle, et ne vous engage en rien. Elle comprend une visite sur site, l'analyse des transactions comparables récentes dans un rayon de 500 mètres, et un dossier remis sous 48h.`,
    },
  ];

  return (
    <>
      <SEO
        title={`Estimation Immobilière ${commune.name} — Prix m² ${year} | Mickaël Lima`}
        description={`Estimation gratuite de votre bien à ${commune.name} (${commune.cp}). Prix au m² : ${commune.prixApptMin.toLocaleString('fr-FR')}–${commune.prixApptMax.toLocaleString('fr-FR')} €/m² (appt), ${commune.prixMaisonMin.toLocaleString('fr-FR')}–${commune.prixMaisonMax.toLocaleString('fr-FR')} €/m² (maison). Délai moyen : ${commune.delaiMoyen} jours. Réponse sous 48h.`}
        canonical={`/${commune.slug}/estimation-immobiliere`}
        schema={schema}
      />

      <div className="bg-white min-h-screen">

        {/* ── Hero ── */}
        <section className="relative min-h-[70vh] flex items-end pb-20 bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero-pays-de-gex.jpg"
              alt={`Estimation immobilière ${commune.name}`}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest mb-8 transition-colors"
              >
                <ArrowLeft size={14} /> Accueil
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                  Estimation gratuite
                </span>
                <span className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest">
                  <MapPin size={12} /> {commune.distanceGeneve} de Genève
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.05] mb-6 break-words hyphens-auto">
                Estimation immobilière
                <br />
                <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                  {commune.name}
                </span>
              </h1>

              <p className="text-white/70 text-xl font-light max-w-xl leading-relaxed">
                {commune.descriptionMarche}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Prix m² ── */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                Marché actuel · {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
              </span>

              <h2 className="text-4xl md:text-5xl font-medium text-textMain tracking-tight mb-12">
                Prix au m² à {commune.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-surface rounded-[2rem] p-10 border border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-4">
                    Appartements
                  </p>
                  <p className="text-4xl md:text-5xl font-medium text-textMain">
                    {commune.prixApptMin.toLocaleString('fr-FR')} – {commune.prixApptMax.toLocaleString('fr-FR')}
                    <span className="text-2xl text-gray-400 ml-2">€/m²</span>
                  </p>
                  <p className="text-gray-500 font-light text-sm mt-4">
                    Fourchette sur les 12 derniers mois, hors biens atypiques
                  </p>
                </div>

                <div className="bg-surface rounded-[2rem] p-10 border border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-4">
                    Maisons
                  </p>
                  <p className="text-4xl md:text-5xl font-medium text-textMain">
                    {commune.prixMaisonMin.toLocaleString('fr-FR')} – {commune.prixMaisonMax.toLocaleString('fr-FR')}
                    <span className="text-2xl text-gray-400 ml-2">€/m²</span>
                  </p>
                  <p className="text-gray-500 font-light text-sm mt-4">
                    Fourchette sur les 12 derniers mois, hors biens atypiques
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="flex items-start gap-4 bg-surface p-6 rounded-2xl border border-gray-100">
                  <Clock size={22} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-textMain text-lg">{commune.delaiMoyen} jours</p>
                    <p className="text-gray-500 text-sm font-light">Délai moyen de vente (bien estimé)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-surface p-6 rounded-2xl border border-gray-100">
                  <MapPin size={22} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-textMain text-lg">{commune.distanceGeneve}</p>
                    <p className="text-gray-500 text-sm font-light">de Genève centre</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-surface p-6 rounded-2xl border border-gray-100">
                  <TrendingUp size={22} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-textMain text-lg">Marché sous tension</p>
                    <p className="text-gray-500 text-sm font-light">Demande frontalière soutenue</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Points forts ── */}
        <section className="py-20 bg-surface border-b border-gray-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                  Atouts de la commune
                </span>
                <h2 className="text-4xl md:text-5xl font-medium text-textMain tracking-tight leading-[1.1] mb-8 break-words hyphens-auto">
                  Pourquoi {commune.name}
                  <br />
                  <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">
                    attire les acheteurs
                  </span>
                </h2>
                <p className="text-gray-600 font-light text-lg leading-relaxed">
                  {commune.frontalierContext}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-4"
              >
                {commune.pointsForts.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
                  >
                    <CheckCircle size={22} className="text-primary shrink-0" />
                    <p className="font-medium text-textMain">{point}</p>
                  </div>
                ))}
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── CTA Estimation ── */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-8">
                Gratuit · Sans engagement · Sous 48h
              </span>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.05] mb-6 break-words hyphens-auto">
                Quelle est la valeur réelle
                <br />
                <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                  de votre bien ?
                </span>
              </h2>

              <p className="text-white/70 text-xl font-light max-w-xl mx-auto mb-12">
                Les prix médians donnent une orientation. L'estimation de terrain donne la valeur précise. Sur un bien à 600 000 €, l'écart peut atteindre 60 000 à 120 000 €.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-white text-primary font-bold p-3 pr-8 rounded-full flex items-center gap-4 text-base hover:bg-surface transition-all shadow-xl shadow-black/20"
                >
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform shrink-0">
                    <ArrowUpRight size={18} />
                  </div>
                  Demander une estimation gratuite
                </Link>

                <a
                  href="tel:+33769313502"
                  className="group border border-white/20 bg-white/10 text-white font-bold p-3 pr-8 rounded-full flex items-center gap-4 text-base hover:bg-white/20 transition-all backdrop-blur-md"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  07 69 31 35 02
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-5xl font-medium text-textMain tracking-tight mb-12 break-words hyphens-auto">
                Questions sur l'estimation
                <br />
                <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">
                  à {commune.name}
                </span>
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                      activeFaq === i ? 'border-primary shadow-md' : 'border-gray-100'
                    }`}
                  >
                    <button
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
                    >
                      <span className={`font-bold text-lg ${activeFaq === i ? 'text-primary' : 'text-textMain'}`}>
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`shrink-0 transition-transform duration-300 ${
                          activeFaq === i ? 'rotate-180 text-primary' : 'text-gray-400'
                        }`}
                      />
                    </button>
                    <div
                      className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                        activeFaq === i ? 'max-h-64 pb-6 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-gray-600 font-light leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Lien blog ── */}
        <section className="py-16 bg-surface border-t border-gray-100">
          <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-2">
                Marché immobilier
              </p>
              <h3 className="text-2xl font-bold text-textMain">
                Analyse complète du Pays de Gex
              </h3>
              <p className="text-gray-500 font-light mt-2">
                Prix par commune, délais, dynamiques frontalières — tout est dans l'observatoire.
              </p>
            </div>
            <Link
              to="/blog"
              className="group bg-primary text-white font-bold p-3 pr-8 rounded-full flex items-center gap-4 text-base hover:bg-textMain transition-all shadow-xl shadow-primary/20 shrink-0"
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform shrink-0">
                <ArrowUpRight size={18} />
              </div>
              Lire l'observatoire
            </Link>
          </div>
        </section>

      </div>
    </>
  );
};
