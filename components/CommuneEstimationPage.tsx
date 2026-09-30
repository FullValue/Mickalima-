import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { m } from 'framer-motion';
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
import { COMMUNES, COMMUNE_DVF_PERIOD, COMMUNE_DVF_SOURCE, getCommuneHeroImage } from '../constants';
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
          className="flex items-center gap-2 bg-white text-textMain font-bold px-8 py-4 rounded-full hover:bg-surface transition-colors"
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
          item: 'https://mickael-lima.immo/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Estimation immobilière',
          item: 'https://mickael-lima.immo/estimation/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: commune.name,
          item: `https://mickael-lima.immo/${commune.slug}/estimation-immobiliere/`,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      name: 'Mickaël Lima',
      url: 'https://mickael-lima.immo',
      telephone: '+33769313502',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '328 Rue des Fontanettes',
        addressLocality: 'Divonne-les-Bains',
        postalCode: '01220',
        addressCountry: 'FR',
      },
      areaServed: {
        '@type': 'City',
        name: commune.name,
        postalCode: commune.cp,
        addressRegion: 'Ain',
        addressCountry: 'FR',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '25',
        bestRating: '5',
        worstRating: '1',
      },
      description: `Estimation immobilière gratuite à ${commune.name} (${commune.cp}). Expert du marché frontalier du Pays de Gex.`,
    },
  ];

  const faqs = [
    {
      question: `Comment estimer mon bien à ${commune.name} en ${year} ?`,
      answer: `Sur les ventes DVF exploitables de ${COMMUNE_DVF_PERIOD}, le prix médian à ${commune.name} est de ${commune.prixApptMin.toLocaleString('fr-FR')} €/m² pour les appartements et de ${commune.prixMaisonMin.toLocaleString('fr-FR')} €/m² pour les maisons. Ces médianes ne sont pas une estimation de votre bien : son état, son adresse et ses caractéristiques doivent être étudiés séparément.`,
    },
    {
      question: `Combien de temps faut-il pour vendre à ${commune.name} ?`,
      answer: `Il n'existe pas ici de délai moyen de vente publié et comparable pour ${commune.name}. La durée dépend du bien, du prix demandé, de la demande au moment de la mise en vente et de la stratégie de commercialisation.`,
    },
    {
      question: `L'estimation est-elle vraiment gratuite et sans engagement ?`,
      answer: `Oui. L'estimation est gratuite, confidentielle et sans engagement. Elle comprend une visite sur site et l'analyse de transactions comparables récentes, choisies selon le type de bien et le secteur pertinent.`,
    },
  ];

  return (
    <>
      <SEO
        title={`Estimation Immobilière ${commune.name} : repères DVF ${COMMUNE_DVF_PERIOD} | Mickaël Lima`}
        description={`Estimation gratuite à ${commune.name} (${commune.cp}). Repères DVF ${COMMUNE_DVF_PERIOD} : médiane des appartements ${commune.prixApptMin.toLocaleString('fr-FR')} €/m² et des maisons ${commune.prixMaisonMin.toLocaleString('fr-FR')} €/m². Analyse adaptée au bien.`}
        canonical={`/${commune.slug}/estimation-immobiliere`}
        schema={schema}
      />

      <div className="bg-white min-h-screen">

        {/* ── Hero ── */}
        <section className="relative min-h-[70vh] flex items-end pb-20 bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={getCommuneHeroImage(commune.slug)}
              alt={`Estimation immobilière ${commune.name}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#011d41]/95 via-[#011d41]/70 to-[#011d41]/25" />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-5xl">
            <m.div
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
                  <MapPin size={12} /> {commune.distanceGeneve} de Genève à vol d'oiseau
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.05] mb-6 break-words hyphens-auto">
                Estimation immobilière
                <br />
                <span className="font-newsletter italic font-normal">
                  {commune.name}
                </span>
              </h1>

              <p className="text-white/70 text-xl font-light max-w-xl leading-relaxed">
                {commune.descriptionMarche}
              </p>
            </m.div>
          </div>
        </section>

        {/* ── Prix m² ── */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                Ventes DVF · {COMMUNE_DVF_PERIOD}
              </span>

              <h2 className="text-4xl md:text-5xl font-medium text-textMain tracking-tight mb-12">
                Prix au m² à {commune.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-surface rounded-[10px] p-10 border border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-4">
                    Appartements
                  </p>
                  <p className="text-4xl md:text-5xl font-medium text-textMain">
                    {commune.prixApptMin.toLocaleString('fr-FR')}
                    <span className="text-2xl text-gray-400 ml-2">€/m²</span>
                  </p>
                  <p className="text-gray-500 font-light text-sm mt-4">
                    Prix médian au m² des ventes exploitables de {COMMUNE_DVF_PERIOD}
                  </p>
                </div>

                <div className="bg-surface rounded-[10px] p-10 border border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-4">
                    Maisons
                  </p>
                  <p className="text-4xl md:text-5xl font-medium text-textMain">
                    {commune.prixMaisonMin.toLocaleString('fr-FR')}
                    <span className="text-2xl text-gray-400 ml-2">€/m²</span>
                  </p>
                  <p className="text-gray-500 font-light text-sm mt-4">
                    Prix médian au m² des ventes exploitables de {COMMUNE_DVF_PERIOD}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="flex items-start gap-4 bg-surface p-6 rounded-[10px] border border-gray-100">
                  <Clock size={22} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-textMain text-lg">Selon le bien</p>
                    <p className="text-gray-500 text-sm font-light">Délai de vente, sans moyenne locale publiée</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-surface p-6 rounded-[10px] border border-gray-100">
                  <MapPin size={22} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-textMain text-lg">{commune.distanceGeneve}</p>
                    <p className="text-gray-500 text-sm font-light">à vol d'oiseau du centre de Genève</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-surface p-6 rounded-[10px] border border-gray-100">
                  <TrendingUp size={22} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-textMain text-lg">Repère historique</p>
                    <p className="text-gray-500 text-sm font-light">La médiane ne prédit pas le prix d'un bien</p>
                  </div>
                </div>
              </div>
            </m.div>
          </div>
        </section>

        {/* ── Points forts ── */}
        <section className="py-20 bg-surface border-b border-gray-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              <m.div
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
                  <span className="font-newsletter italic font-normal">
                    attire les acheteurs
                  </span>
                </h2>
                <p className="text-gray-600 font-light text-lg leading-relaxed">
                  {commune.frontalierContext}
                </p>
              </m.div>

              <m.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-4"
              >
                {commune.pointsForts.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white p-6 rounded-[10px] border border-gray-100 shadow-sm"
                  >
                    <CheckCircle size={22} className="text-primary shrink-0" />
                    <p className="font-medium text-textMain">{point}</p>
                  </div>
                ))}
              </m.div>

            </div>
          </div>
        </section>

        {/* ── CTA Estimation ── */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-8">
                Gratuit · Sans engagement
              </span>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.05] mb-6 break-words hyphens-auto">
                Quelle est la valeur réelle
                <br />
                <span className="font-newsletter italic font-normal">
                  de votre bien ?
                </span>
              </h2>

              <p className="text-white/70 text-xl font-light max-w-xl mx-auto mb-12">
                Les médianes de commune donnent un repère. Pour estimer un bien, il faut examiner son état, son adresse, ses caractéristiques et des ventes comparables. <a href={COMMUNE_DVF_SOURCE} className="underline">Source des médianes : statistiques DVF publiques</a>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-white text-primary font-bold p-3 pr-8 rounded-full flex items-center gap-4 text-base hover:bg-surface transition-all shadow-black/20"
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
            </m.div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-5xl font-medium text-textMain tracking-tight mb-12 break-words hyphens-auto">
                Questions sur l'estimation
                <br />
                <span className="font-newsletter italic font-normal">
                  à {commune.name}
                </span>
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className={`rounded-[10px] border overflow-hidden transition-all duration-300 ${
                      activeFaq === i ? 'border-primary ' : 'border-gray-100'
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
            </m.div>
          </div>
        </section>

        {/* ── Communes voisines ── */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-6">
              Communes voisines
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {commune.voisines.map((slug) => {
                const voisine = COMMUNES.find((c) => c.slug === slug);
                if (!voisine) return null;
                return (
                  <Link
                    key={slug}
                    to={`/${slug}/estimation-immobiliere`}
                    className="group flex items-center justify-between bg-surface rounded-[10px] p-6 border border-gray-100 hover:border-primary/20 transition-all"
                  >
                    <div>
                      <p className="font-bold text-textMain text-lg group-hover:text-primary transition-colors">{voisine.name}</p>
                      <p className="text-gray-400 text-sm font-light mt-0.5">
                        {voisine.distanceGeneve} · appartement médian {voisine.prixApptMin.toLocaleString('fr-FR')} €/m² (DVF {COMMUNE_DVF_PERIOD})
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all shrink-0">
                      <ArrowUpRight size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </Link>
                );
              })}
              <Link
                to="/estimation"
                className="group flex items-center justify-between bg-primary rounded-[10px] p-6 hover:bg-textMain transition-all"
              >
                <div>
                  <p className="font-bold text-white text-lg">Toutes les communes</p>
                  <p className="text-white/60 text-sm font-light mt-0.5">Estimation gratuite · 9 secteurs</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all shrink-0">
                  <ArrowUpRight size={16} className="text-white" />
                </div>
              </Link>
            </div>
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
                Prix par commune et dynamiques frontalières : consultez les guides et données locales.
              </p>
            </div>
            <Link
              to="/blog"
              className="group bg-primary text-white font-bold p-3 pr-8 rounded-full flex items-center gap-4 text-base hover:bg-textMain transition-all shadow-primary/20 shrink-0"
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform shrink-0">
                <ArrowUpRight size={18} />
              </div>
              Lire les guides
            </Link>
          </div>
        </section>

      </div>
    </>
  );
};
