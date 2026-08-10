import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, MapPin, TrendingUp } from 'lucide-react';
import { COMMUNES } from '../constants';
import { SEO } from './SEO';

export const PrixImmobilierPaysDeGex: React.FC = () => {
  const year = new Date().getFullYear();

  // Stats agrégées sur les 9 communes
  const allApptMin = Math.min(...COMMUNES.map(c => c.prixApptMin));
  const allApptMax = Math.max(...COMMUNES.map(c => c.prixApptMax));
  const allMaisonMin = Math.min(...COMMUNES.map(c => c.prixMaisonMin));
  const allMaisonMax = Math.max(...COMMUNES.map(c => c.prixMaisonMax));
  const avgDelai = Math.round(COMMUNES.reduce((sum, c) => sum + c.delaiMoyen, 0) / COMMUNES.length);

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://mickael-lima.immo/' },
        { '@type': 'ListItem', position: 2, name: 'Prix immobilier Pays de Gex', item: 'https://mickael-lima.immo/prix-immobilier/pays-de-gex/' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      name: 'Mickaël Lima — L’agence Immo',
      url: 'https://mickael-lima.immo',
      telephone: '+33769313502',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '328 Rue des Fontanettes',
        addressLocality: 'Divonne-les-Bains',
        postalCode: '01220',
        addressCountry: 'FR',
      },
      areaServed: COMMUNES.map(c => ({
        '@type': 'City',
        name: c.name,
        postalCode: c.cp,
        addressRegion: 'Ain',
        addressCountry: 'FR',
      })),
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '25',
        bestRating: '5',
        worstRating: '1',
      },
      description: `Observatoire des prix immobiliers dans le Pays de Gex en ${year} — fourchettes par commune, marché frontalier franco-suisse.`,
    },
  ];

  return (
    <>
      <SEO
        title={`Prix immobilier Pays de Gex en ${year} — Comparatif 9 communes | Mickaël Lima`}
        description={`Prix au m² par commune dans le Pays de Gex en ${year} : Ferney-Voltaire, Divonne, Saint-Genis, Gex, Prévessin… Fourchettes ${allApptMin.toLocaleString('fr-FR')}–${allApptMax.toLocaleString('fr-FR')} €/m² appartements, ${allMaisonMin.toLocaleString('fr-FR')}–${allMaisonMax.toLocaleString('fr-FR')} €/m² maisons.`}
        canonical="/prix-immobilier/pays-de-gex"
        schema={schema}
      />

      <div className="bg-white min-h-screen">
        {/* ── Hero ── */}
        <section className="relative min-h-[55vh] flex items-end pb-16 md:pb-20 bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero-pays-de-gex.jpg"
              alt="Pays de Gex"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/40" />
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
                  Observatoire prix {year}
                </span>
                <span className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest">
                  <MapPin size={12} /> 9 communes · Pays de Gex
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.05] mb-6 break-words hyphens-auto">
                Prix immobilier dans le<br />
                <span className="font-newsletter italic font-normal">
                  Pays de Gex en {year}
                </span>
              </h1>

              <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                Comparatif des prix au m² commune par commune. Données issues des transactions des 12 derniers mois sur le secteur frontalier franco-suisse.
              </p>
            </m.div>
          </div>
        </section>

        {/* ── Intro marché ── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6 text-lg text-textMain leading-relaxed font-light"
            >
              <p>
                Le marché immobilier du Pays de Gex reste sous tension en {year}. La demande excède l'offre sur la quasi-totalité des 9 communes, portée par les frontaliers genevois, les employés du CERN et des organisations internationales, ainsi que par une clientèle expatriée à fort pouvoir d'achat. Le résultat : des prix qui résistent à la correction observée dans d'autres marchés français.
              </p>
              <p>
                Trois facteurs structurels expliquent ce différentiel : le pouvoir d'achat en francs suisses (40 à 60 % supérieur à la moyenne française), la rareté du foncier constructible dans un secteur contraint par les zones agricoles, et une demande locative permanente liée au renouvellement des contrats de détachement. Sur l'ensemble du Pays de Gex, les fourchettes vont de <strong className="font-semibold">{allApptMin.toLocaleString('fr-FR')} à {allApptMax.toLocaleString('fr-FR')} €/m²</strong> pour les appartements et de <strong className="font-semibold">{allMaisonMin.toLocaleString('fr-FR')} à {allMaisonMax.toLocaleString('fr-FR')} €/m²</strong> pour les maisons, avec un délai moyen de vente de <strong className="font-semibold">{avgDelai} jours</strong> sur les biens correctement estimés.
              </p>
            </m.div>
          </div>
        </section>

        {/* ── Tableau comparatif ── */}
        <section className="py-16 md:py-24 bg-surface border-y border-gray-100">
          <div className="container mx-auto px-6 max-w-6xl">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                Comparatif {year}
              </span>
              <h2 className="text-3xl md:text-5xl font-medium text-textMain tracking-tight mb-10">
                Prix au m² par commune
              </h2>

              <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 no-scrollbar">
                <table className="w-full min-w-[640px] bg-white rounded-[10px] overflow-hidden shadow-sm border border-gray-100">
                  <thead>
                    <tr className="bg-primary text-white text-xs font-bold uppercase tracking-widest">
                      <th className="text-left px-5 py-4">Commune</th>
                      <th className="text-left px-5 py-4">Distance Genève</th>
                      <th className="text-left px-5 py-4">Appartements €/m²</th>
                      <th className="text-left px-5 py-4">Maisons €/m²</th>
                      <th className="text-left px-5 py-4">Délai moyen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMMUNES.map((c, i) => (
                      <tr key={c.slug} className={`border-t border-gray-100 hover:bg-surface/60 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                        <td className="px-5 py-4 font-semibold text-textMain">
                          <Link to={`/prix-immobilier/${c.slug}`} className="hover:text-primary transition-colors">
                            {c.name}
                          </Link>
                        </td>
                        <td className="px-5 py-4 text-gray-600 font-light">{c.distanceGeneve}</td>
                        <td className="px-5 py-4 text-textMain font-medium">
                          {c.prixApptMin.toLocaleString('fr-FR')} – {c.prixApptMax.toLocaleString('fr-FR')}
                        </td>
                        <td className="px-5 py-4 text-textMain font-medium">
                          {c.prixMaisonMin.toLocaleString('fr-FR')} – {c.prixMaisonMax.toLocaleString('fr-FR')}
                        </td>
                        <td className="px-5 py-4 text-gray-600 font-light">{c.delaiMoyen} jours</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-gray-400 mt-4 italic">
                Fourchettes basées sur les transactions des 12 derniers mois — hors biens atypiques. Estimation précise au cas par cas.
              </p>
            </m.div>
          </div>
        </section>

        {/* ── Grille communes ── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-medium text-textMain tracking-tight mb-3">
              Explorer commune par commune
            </h2>
            <p className="text-gray-500 font-light text-lg mb-12">
              Analyse détaillée du marché local, contexte frontalier et évolution des prix.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {COMMUNES.map((c, i) => (
                <m.div
                  key={c.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                >
                  <Link
                    to={`/prix-immobilier/${c.slug}`}
                    className="group block bg-white rounded-[10px] p-6 border border-gray-100 shadow-sm hover:border-primary/20 hover: transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                          {c.distanceGeneve} de Genève
                        </p>
                        <p className="text-xl font-bold text-textMain group-hover:text-primary transition-colors">{c.name}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all shrink-0">
                        <ArrowUpRight size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div className="border-t border-gray-100 pt-4 space-y-1.5 text-sm">
                      <p className="text-gray-500 font-light">
                        <span className="text-gray-400">Appt&nbsp;:</span> <span className="text-textMain font-medium">{c.prixApptMin.toLocaleString('fr-FR')}–{c.prixApptMax.toLocaleString('fr-FR')} €/m²</span>
                      </p>
                      <p className="text-gray-500 font-light">
                        <span className="text-gray-400">Maison&nbsp;:</span> <span className="text-textMain font-medium">{c.prixMaisonMin.toLocaleString('fr-FR')}–{c.prixMaisonMax.toLocaleString('fr-FR')} €/m²</span>
                      </p>
                    </div>
                  </Link>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Estimation ── */}
        <section className="py-16 md:py-24 bg-surface">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <TrendingUp size={12} className="inline mr-1" /> Estimation gratuite
            </span>
            <h2 className="text-3xl md:text-5xl font-medium text-textMain tracking-tight leading-[1.1] mb-6">
              Connaître la valeur exacte<br />
              <span className="font-newsletter italic font-normal">
                de votre bien
              </span>
            </h2>
            <p className="text-gray-500 font-light text-lg mb-10 max-w-xl mx-auto">
              Une estimation à distance peut s'écarter de 10 à 20 % de la valeur réelle. Demandez une estimation de terrain, gratuite et confidentielle, livrée sous 48h.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover: group"
            >
              <span>Demander mon estimation</span>
              <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
