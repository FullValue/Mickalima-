import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  TrendingUp,
  Clock,
  Phone,
  BarChart2,
} from 'lucide-react';
import { COMMUNES } from '../constants';
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
          className="flex items-center gap-2 bg-white text-textMain font-bold px-8 py-4 rounded-full shadow-lg hover:bg-surface transition-colors"
        >
          <ArrowLeft size={20} /> Retour à l'accueil
        </Link>
      </div>
    );
  }

  const year = new Date().getFullYear();

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
          item: 'https://mickael-lima.immo',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: `Prix immobilier ${commune.name}`,
          item: `https://mickael-lima.immo/prix-immobilier/${commune.slug}`,
        },
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
      areaServed: {
        '@type': 'City',
        name: commune.name,
        postalCode: commune.cp,
        addressRegion: 'Ain',
        addressCountry: 'FR',
      },
      description: `Prix immobilier ${commune.name} en ${year} — fourchettes par type de bien, évolution du marché et contexte frontalier.`,
    },
  ];

  return (
    <>
      <SEO
        title={`Prix immobilier ${commune.name} en ${year} — Appartements & Maisons | Mickaël Lima`}
        description={`Prix au m² à ${commune.name} (${commune.cp}) en ${year} : ${commune.prixApptMin.toLocaleString('fr-FR')}–${commune.prixApptMax.toLocaleString('fr-FR')} €/m² (appt), ${commune.prixMaisonMin.toLocaleString('fr-FR')}–${commune.prixMaisonMax.toLocaleString('fr-FR')} €/m² (maison). Évolution, marché frontalier et comparatif communes voisines.`}
        canonical={`/prix-immobilier/${commune.slug}`}
        schema={schema}
      />

      <div className="bg-white min-h-screen">

        {/* ── Hero ── */}
        <section className="relative min-h-[60vh] flex items-end pb-20 bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero-pays-de-gex.jpg"
              alt={`Prix immobilier ${commune.name}`}
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
                  Observatoire prix {year}
                </span>
                <span className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest">
                  <MapPin size={12} /> {commune.distanceGeneve} de Genève
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.05] mb-6 break-words hyphens-auto">
                Prix immobilier
                <br />
                <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                  {commune.name} en {year}
                </span>
              </h1>

              <p className="text-white/70 text-xl font-light max-w-xl leading-relaxed">
                {commune.descriptionMarche}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Tableau de prix ── */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                Fourchettes · {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
              </span>

              <h2 className="text-4xl md:text-5xl font-medium text-textMain tracking-tight mb-12">
                Prix au m² à {commune.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-surface rounded-[2rem] p-10 border border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-4">Appartements</p>
                  <p className="text-4xl md:text-5xl font-medium text-textMain">
                    {commune.prixApptMin.toLocaleString('fr-FR')} – {commune.prixApptMax.toLocaleString('fr-FR')}
                    <span className="text-2xl text-gray-400 ml-2">€/m²</span>
                  </p>
                  <p className="text-gray-500 font-light text-sm mt-4">
                    Fourchette sur les 12 derniers mois, hors biens atypiques
                  </p>
                </div>

                <div className="bg-surface rounded-[2rem] p-10 border border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-4">Maisons</p>
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
                    <p className="text-gray-500 text-sm font-light">Délai moyen de vente</p>
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

        {/* ── Analyse marché ── */}
        <section className="py-20 bg-surface border-b border-gray-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                Analyse de marché
              </span>
              <h2 className="text-4xl md:text-5xl font-medium text-textMain tracking-tight mb-10 break-words hyphens-auto">
                Le marché immobilier
                <br />
                <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">
                  de {commune.name}
                </span>
              </h2>

              <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
                <p>{commune.descriptionMarche}</p>
                <p>{commune.frontalierContext}</p>
                <p>{commune.evolutionPrix}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Comparatif communes voisines ── */}
        {voisines.length > 0 && (
          <section className="py-20 bg-white border-b border-gray-100">
            <div className="container mx-auto px-6 max-w-5xl">
              <motion.div
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
                        <th className="py-4 pr-6 text-xs font-bold uppercase tracking-widest text-primary/60">Appt (€/m²)</th>
                        <th className="py-4 pr-6 text-xs font-bold uppercase tracking-widest text-primary/60">Maison (€/m²)</th>
                        <th className="py-4 pr-6 text-xs font-bold uppercase tracking-widest text-primary/60">Délai moyen</th>
                        <th className="py-4 text-xs font-bold uppercase tracking-widest text-primary/60">Genève</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Current commune row */}
                      <tr className="border-b border-primary/10 bg-primary/5">
                        <td className="py-5 pr-6 font-bold text-primary">{commune.name}</td>
                        <td className="py-5 pr-6 font-medium text-textMain">
                          {commune.prixApptMin.toLocaleString('fr-FR')} – {commune.prixApptMax.toLocaleString('fr-FR')}
                        </td>
                        <td className="py-5 pr-6 font-medium text-textMain">
                          {commune.prixMaisonMin.toLocaleString('fr-FR')} – {commune.prixMaisonMax.toLocaleString('fr-FR')}
                        </td>
                        <td className="py-5 pr-6 font-medium text-textMain">{commune.delaiMoyen} j</td>
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
                            {v.prixApptMin.toLocaleString('fr-FR')} – {v.prixApptMax.toLocaleString('fr-FR')}
                          </td>
                          <td className="py-5 pr-6 text-gray-600">
                            {v.prixMaisonMin.toLocaleString('fr-FR')} – {v.prixMaisonMax.toLocaleString('fr-FR')}
                          </td>
                          <td className="py-5 pr-6 text-gray-600">{v.delaiMoyen} j</td>
                          <td className="py-5 text-gray-600">{v.distanceGeneve}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* ── CTA Estimation ── */}
        <section id="estimation" className="py-24 bg-primary relative overflow-hidden">
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

              <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-[1.05] mb-6 break-words hyphens-auto">
                Connaître la valeur réelle
                <br />
                <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                  de votre bien à {commune.name}
                </span>
              </h2>

              <p className="text-white/70 text-xl font-light max-w-xl mx-auto mb-12">
                Les fourchettes ci-dessus donnent une orientation. Seule une estimation de terrain intègre l'état, l'exposition, le DPE et les transactions comparables récentes dans votre rue.
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
                Visite sur site, analyse des comparables, dossier sous 48h.
              </p>
            </div>
            <Link
              to={`/${commune.slug}/estimation-immobiliere`}
              className="group bg-primary text-white font-bold p-3 pr-8 rounded-full flex items-center gap-4 text-base hover:bg-textMain transition-all shadow-xl shadow-primary/20 shrink-0"
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
