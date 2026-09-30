import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { m } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  TrendingUp,
  Phone,
  BarChart2,
} from 'lucide-react';
import { COMMUNES, COMMUNE_DVF_PERIOD, COMMUNE_DVF_SOURCE, getCommuneHeroImage } from '../constants';
import { SEO } from './SEO';

export const PrixImmobilierPage: React.FC = () => {
  const { commune: communeSlug } = useParams<{ commune: string }>();
  const commune = COMMUNES.find((c) => c.slug === communeSlug);

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

  const voisines = commune.voisines.map((slug) => COMMUNES.find((c) => c.slug === slug)).filter(Boolean) as typeof COMMUNES;

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
          name: 'Prix immobilier Pays de Gex',
          item: 'https://mickael-lima.immo/prix-immobilier/pays-de-gex/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: `Prix immobilier ${commune.name}`,
          item: `https://mickael-lima.immo/prix-immobilier/${commune.slug}/`,
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
      description: `Prix immobiliers médians à ${commune.name}, calculés sur les ventes DVF de ${COMMUNE_DVF_PERIOD}, par type de bien.`,
    },
  ];

  return (
    <>
      <SEO
        title={`Prix immobilier ${commune.name} : médianes DVF ${COMMUNE_DVF_PERIOD} | Mickaël Lima`}
        description={`Ventes DVF ${COMMUNE_DVF_PERIOD} à ${commune.name} (${commune.cp}) : médiane appartements ${commune.prixApptMin.toLocaleString('fr-FR')} €/m², maisons ${commune.prixMaisonMin.toLocaleString('fr-FR')} €/m². Repères pour comparer les communes voisines.`}
        canonical={`/prix-immobilier/${commune.slug}`}
        schema={schema}
      />

      <div className="bg-white min-h-screen">

        {/* ── Hero ── */}
        <section className="relative min-h-[60vh] flex items-end pb-20 bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={getCommuneHeroImage(commune.slug)}
              alt={`Prix immobilier ${commune.name}`}
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
                  Repères DVF {COMMUNE_DVF_PERIOD}
                </span>
                <span className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest">
                  <MapPin size={12} /> {commune.distanceGeneve} de Genève à vol d'oiseau
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.05] mb-6 break-words hyphens-auto">
                Prix immobilier
                <br />
                <span className="font-newsletter italic font-normal">
                  {commune.name} · {COMMUNE_DVF_PERIOD}
                </span>
              </h1>

              <p className="text-white/70 text-xl font-light max-w-xl leading-relaxed">
                {commune.descriptionMarche}
              </p>
            </m.div>
          </div>
        </section>

        {/* ── Tableau de prix ── */}
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
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-4">Appartements</p>
                  <p className="text-4xl md:text-5xl font-medium text-textMain">
                    {commune.prixApptMin.toLocaleString('fr-FR')}
                    <span className="text-2xl text-gray-400 ml-2">€/m²</span>
                  </p>
                  <p className="text-gray-500 font-light text-sm mt-4">
                    Prix médian au m² des ventes exploitables de {COMMUNE_DVF_PERIOD}
                  </p>
                </div>

                <div className="bg-surface rounded-[10px] p-10 border border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-4">Maisons</p>
                  <p className="text-4xl md:text-5xl font-medium text-textMain">
                    {commune.prixMaisonMin.toLocaleString('fr-FR')}
                    <span className="text-2xl text-gray-400 ml-2">€/m²</span>
                  </p>
                  <p className="text-gray-500 font-light text-sm mt-4">
                    Prix médian au m² des ventes exploitables de {COMMUNE_DVF_PERIOD}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    <p className="font-bold text-textMain text-lg">Ventes {COMMUNE_DVF_PERIOD}</p>
                    <p className="text-gray-500 text-sm font-light">Médianes des transactions DVF exploitables, selon le type de bien</p>
                  </div>
                </div>
              </div>
            </m.div>
          </div>
        </section>

        {/* ── Analyse marché ── */}
        <section className="py-20 bg-surface border-b border-gray-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14"
            >
              <div>
              <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                Analyse de marché
              </span>
              <h2 className="text-4xl md:text-5xl font-medium text-textMain tracking-tight mb-10 break-words hyphens-auto">
                Le marché immobilier
                <br />
                <span className="font-newsletter italic font-normal">
                  de {commune.name}
                </span>
              </h2>

              <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
                <p>{commune.descriptionMarche}</p>
                <p>{commune.frontalierContext}</p>
                <p>{commune.evolutionPrix}</p>
                <p className="text-sm"><a href={COMMUNE_DVF_SOURCE}>Source des médianes : statistiques DVF publiques</a>. Les évolutions notariales citées sont issues du <a href="https://cin-lyon.notaires.fr/wp-content/uploads/2025/07/Barometre-de-limmobilier-Ain-mai-2025.pdf">baromètre de mai 2025</a>.</p>
              </div>
              </div>
              <figure>
                <img
                  src="/images/editorial/marche-pays-de-gex.webp"
                  alt="Quartier résidentiel au pied d'un relief boisé, visuel d'illustration du marché local"
                  width="1440"
                  height="960"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full rounded-[10px] object-cover"
                />
                <figcaption className="mt-3 text-xs text-gray-400">Visuel d’illustration</figcaption>
              </figure>
            </m.div>
          </div>
        </section>

        {/* ── Comparatif communes voisines ── */}
        {voisines.length > 0 && (
          <section className="py-20 bg-white border-b border-gray-100">
            <div className="container mx-auto px-6 max-w-5xl">
              <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                  Comparatif
                </span>
                <h2 className="text-4xl md:text-5xl font-medium text-textMain tracking-tight mb-12 break-words hyphens-auto">
                  <BarChart2 className="inline mr-3 mb-1 text-primary" size={36} />
                  Communes voisines
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-4 pr-6 text-xs font-bold uppercase tracking-widest text-primary/60">Commune</th>
                        <th className="py-4 pr-6 text-xs font-bold uppercase tracking-widest text-primary/60">Appt médian (€/m²)</th>
                        <th className="py-4 pr-6 text-xs font-bold uppercase tracking-widest text-primary/60">Maison médiane (€/m²)</th>
                        <th className="py-4 text-xs font-bold uppercase tracking-widest text-primary/60">Genève</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Current commune row */}
                      <tr className="border-b border-primary/10 bg-primary/5">
                        <td className="py-5 pr-6 font-bold text-primary">{commune.name}</td>
                        <td className="py-5 pr-6 font-medium text-textMain">
                          {commune.prixApptMin.toLocaleString('fr-FR')}
                        </td>
                        <td className="py-5 pr-6 font-medium text-textMain">
                          {commune.prixMaisonMin.toLocaleString('fr-FR')}
                        </td>
                        <td className="py-5 font-medium text-textMain">{commune.distanceGeneve}</td>
                      </tr>
                      {/* Voisines rows */}
                      {voisines.map((v) => (
                        <tr key={v.slug} className="border-b border-gray-100 hover:bg-surface transition-colors">
                          <td className="py-5 pr-6">
                            <Link
                              to={`/prix-immobilier/${v.slug}`}
                              className="font-medium text-textMain hover:text-primary transition-colors"
                            >
                              {v.name}
                            </Link>
                          </td>
                          <td className="py-5 pr-6 text-gray-600">
                            {v.prixApptMin.toLocaleString('fr-FR')}
                          </td>
                          <td className="py-5 pr-6 text-gray-600">
                            {v.prixMaisonMin.toLocaleString('fr-FR')}
                          </td>
                          <td className="py-5 text-gray-600">{v.distanceGeneve}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </m.div>
            </div>
          </section>
        )}

        {/* ── CTA Estimation ── */}
        <section id="estimation" className="py-24 bg-primary relative overflow-hidden">
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

              <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-[1.05] mb-6 break-words hyphens-auto">
                Connaître la valeur réelle
                <br />
                <span className="font-newsletter italic font-normal">
                  de votre bien à {commune.name}
                </span>
              </h2>

              <p className="text-white/70 text-xl font-light max-w-xl mx-auto mb-12">
                Les médianes ci-dessus donnent un repère historique. Une estimation sur place tient compte de l'état, de l'exposition, du DPE et des transactions comparables récentes autour de votre bien.
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

        {/* ── Lien estimation commune ── */}
        <section className="py-16 bg-surface border-t border-gray-100">
          <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-2">
                Estimation gratuite
              </p>
              <h3 className="text-2xl font-bold text-textMain">
                Estimation immobilière à {commune.name}
              </h3>
              <p className="text-gray-500 font-light mt-2">
                Visite sur site et analyse des ventes comparables.
              </p>
            </div>
            <Link
              to={`/${commune.slug}/estimation-immobiliere`}
              className="group bg-primary text-white font-bold p-3 pr-8 rounded-full flex items-center gap-4 text-base hover:bg-textMain transition-all shadow-primary/20 shrink-0"
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform shrink-0">
                <ArrowUpRight size={18} />
              </div>
              Estimer mon bien
            </Link>
          </div>
        </section>

      </div>
    </>
  );
};
