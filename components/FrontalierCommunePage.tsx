import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { m } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  Phone,
  Car,
  GraduationCap,
  Trees,
  Wifi,
  Globe,
  Microscope,
  Building2,
  TrendingDown,
} from 'lucide-react';
import { GOOGLE_REVIEWS_COUNT, COMMUNES, COMMUNE_DVF_PERIOD, COMMUNE_DVF_SOURCE, getCommuneHeroImage } from '../constants';
import { SEO } from './SEO';

const CRITERIA_BASE = [
  {
    icon: Car,
    title: (distanceGeneve: string) => `${distanceGeneve} de Genève à vol d'oiseau`,
    description: () =>
      "La durée du trajet domicile-travail dépend de l'adresse, du poste-frontière et des conditions de circulation.",
  },
  {
    icon: GraduationCap,
    title: () => 'Établissements scolaires',
    description: () =>
      "Vérifiez les établissements, les secteurs scolaires et les conditions d'admission pour chaque adresse. Ces points comptent dans un projet de relocalisation familiale.",
  },
  {
    icon: Trees,
    title: () => 'Espaces extérieurs',
    description: () =>
      "Surface, jardin et terrasse peuvent modifier le budget et le confort de vie. Comparez des biens de même type en tenant compte des frais et de la devise.",
  },
  {
    icon: Wifi,
    title: () => 'Télétravail & connexion',
    description: () =>
      "Vérifiez l'éligibilité internet à l'adresse du bien et les règles de télétravail de votre employeur avant de fixer votre lieu de résidence.",
  },
];

export const FrontalierCommunePage: React.FC = () => {
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

  const year = new Date().getFullYear();
  const isSaintGenis = commune.slug === 'saint-genis-pouilly';
  const isFerney = commune.slug === 'ferney-voltaire';

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
          name: `Immobilier frontalier ${commune.name}`,
          item: `https://mickael-lima.immo/frontalier/${commune.slug}/`,
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
        reviewCount: GOOGLE_REVIEWS_COUNT,
        bestRating: '5',
        worstRating: '1',
      },
      description: `Immobilier à ${commune.name} pour les frontaliers travaillant à Genève. Expertise marché local, clientèle CERN, ONU et organisations internationales.`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: `Est-il avantageux d'acheter à ${commune.name} quand on travaille à Genève ?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `${commune.name} se situe à ${commune.distanceGeneve} à vol d'oiseau du centre de Genève. ${commune.frontalierContext} L'intérêt d'un achat dépend du lieu de travail, du trajet, du financement, de la fiscalité personnelle et du bien recherché.`,
          },
        },
        {
          '@type': 'Question',
          name: `Quels sont les prix immobiliers observés à ${commune.name} ?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Sur les transactions DVF de ${COMMUNE_DVF_PERIOD} à ${commune.name} (${commune.cp}), le prix médian est de ${commune.prixApptMin.toLocaleString('fr-FR')} €/m² pour les appartements et de ${commune.prixMaisonMin.toLocaleString('fr-FR')} €/m² pour les maisons. Ces médianes ne sont pas des prix de vente garantis. ${commune.evolutionPrix}`,
          },
        },
        {
          '@type': 'Question',
          name: `Mickaël Lima propose-t-il des estimations gratuites à ${commune.name} ?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Oui. L'estimation est gratuite, confidentielle et sans engagement. Elle s'appuie sur une visite du bien et sur des transactions comparables adaptées à sa localisation et à ses caractéristiques. Mickaël Lima intervient sur l'ensemble du Pays de Gex.`,
          },
        },
      ],
    },
  ];

  return (
    <>
      <SEO
        title={`Immobilier ${commune.name} pour les frontaliers genevois: Guide ${year} | Mickaël Lima`}
        description={`Acheter à ${commune.name} (${commune.cp}) en travaillant à Genève : trajets, prix DVF et points à vérifier. Guide local par Mickaël Lima, expert immobilier.`}
        canonical={`/frontalier/${commune.slug}`}
        schema={schema}
      />

      <div className="bg-white min-h-screen">

        {/* ── Hero ── */}
        <section className="relative min-h-[70vh] flex items-end pb-20 bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={getCommuneHeroImage(commune.slug)}
              alt={`Immobilier frontalier ${commune.name}`}
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
                  Guide frontalier {year}
                </span>
                <span className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest">
                  <MapPin size={12} /> {commune.distanceGeneve} de Genève à vol d'oiseau
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.05] mb-6 break-words hyphens-auto">
                Immobilier {commune.name}
                <br />
                <span className="font-newsletter italic font-normal">
                  pour les frontaliers genevois
                </span>
              </h1>

              <p className="text-white/70 text-xl font-light max-w-2xl leading-relaxed">
                {commune.descriptionMarche}
              </p>
            </m.div>
          </div>
        </section>

        {/* ── Pourquoi [Commune] attire les frontaliers ── */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              <m.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                  Pourquoi {commune.name}
                </span>
                <h2 className="text-4xl md:text-5xl font-medium text-textMain tracking-tight leading-[1.1] mb-8 break-words hyphens-auto">
                  Ce qui attire les
                  <br />
                  <span className="font-newsletter italic font-normal">
                    frontaliers ici
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
                className="space-y-5"
              >
                <div className="bg-surface rounded-[10px] p-8 border border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-3">Distance Genève</p>
                  <p className="text-4xl font-medium text-textMain">{commune.distanceGeneve}</p>
                  <p className="text-gray-500 font-light text-sm mt-2">à vol d'oiseau du centre de Genève</p>
                </div>
                <div className="bg-surface rounded-[10px] p-8 border border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-3">Pays de Gex · emploi frontalier</p>
                  <p className="text-4xl font-medium text-textMain">62 %</p>
                  <p className="text-gray-500 font-light text-sm mt-2">des actifs occupés travaillaient en Suisse en 2018 · <a href="https://www.insee.fr/fr/statistiques/6444379" target="_blank" rel="noopener noreferrer" className="underline">Insee</a></p>
                </div>
                <div className="bg-surface rounded-[10px] p-8 border border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-3">Prix appartements</p>
                  <p className="text-3xl font-medium text-textMain">
                    {commune.prixApptMin.toLocaleString('fr-FR')} €/m²
                  </p>
                  <p className="text-gray-500 font-light text-sm mt-2">médiane DVF {COMMUNE_DVF_PERIOD}</p>
                </div>
              </m.div>

            </div>
          </div>
        </section>

        {/* ── Ce que les frontaliers recherchent ── */}
        <section className="py-20 bg-surface border-b border-gray-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                Critères d'achat
              </span>
              <h2 className="text-4xl md:text-5xl font-medium text-textMain tracking-tight mb-12 break-words hyphens-auto">
                Ce que les frontaliers
                <br />
                <span className="font-newsletter italic font-normal">
                  recherchent à {commune.name}
                </span>
              </h2>

              <figure className="mb-10">
                <img
                  src="/images/editorial/vie-frontaliere.webp"
                  alt="Espace de télétravail lumineux ouvert sur un paysage boisé"
                  width="1440"
                  height="960"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/9] w-full rounded-[10px] object-cover"
                />
              </figure>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CRITERIA_BASE.map((c, i) => (
                  <m.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white rounded-[10px] p-8 border border-gray-100 shadow-sm flex items-start gap-6"
                  >
                    <div className="w-12 h-12 rounded-[10px] bg-primary/5 flex items-center justify-center shrink-0">
                      <c.icon size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-textMain text-lg mb-2">{c.title(commune.distanceGeneve)}</p>
                      <p className="text-gray-500 font-light leading-relaxed">{c.description()}</p>
                    </div>
                  </m.div>
                ))}

                {/* Critère spécifique commune */}
                {isSaintGenis && (
                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-primary rounded-[10px] p-8 border border-primary shadow-sm flex items-start gap-6 md:col-span-2"
                  >
                    <div className="w-12 h-12 rounded-[10px] bg-white/10 flex items-center justify-center shrink-0">
                      <Microscope size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg mb-2">Accès direct au CERN</p>
                      <p className="text-white/70 font-light leading-relaxed">
                        Saint-Genis-Pouilly est proche des sites du CERN à Meyrin et à Prévessin. La proximité du lieu de travail peut compter dans le choix d'un logement, mais le trajet réel et la demande varient selon le secteur et le type de bien.
                      </p>
                    </div>
                  </m.div>
                )}

                {isFerney && (
                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-primary rounded-[10px] p-8 border border-primary shadow-sm flex items-start gap-6 md:col-span-2"
                  >
                    <div className="w-12 h-12 rounded-[10px] bg-white/10 flex items-center justify-center shrink-0">
                      <Globe size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg mb-2">ONU & organisations internationales</p>
                      <p className="text-white/70 font-light leading-relaxed">
                        Ferney-Voltaire offre un accès aux organisations internationales genevoises. Pour les personnes qui s'y installent, la proximité du lieu de travail, les transports et les établissements scolaires sont des critères à examiner selon leur situation.
                      </p>
                    </div>
                  </m.div>
                )}
              </div>
            </m.div>
          </div>
        </section>

        {/* ── Pouvoir d'achat CHF vs EUR ── */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                Pouvoir d'achat
              </span>
              <h2 className="text-4xl md:text-5xl font-medium text-textMain tracking-tight mb-6 break-words hyphens-auto">
                CHF vs EUR :
                <br />
                <span className="font-newsletter italic font-normal">
                  l'équation qui change tout
                </span>
              </h2>
              <p className="text-gray-600 font-light text-lg leading-relaxed max-w-3xl mb-12">
                À {commune.name}, la médiane des appartements vendus sur la période {COMMUNE_DVF_PERIOD} est de {commune.prixApptMin.toLocaleString('fr-FR')} €/m² selon les données DVF. Dans le canton de Genève, la médiane des appartements en propriété par étages du marché libre était de 10 559 CHF/m² en 2024 selon l'OCSTAT. Ces indicateurs portent sur des territoires, des périodes, des biens et des devises différents : ils éclairent le marché, sans permettre de calculer une économie individuelle fiable.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-surface rounded-[10px] p-8 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingDown size={20} className="text-primary" />
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/60">Appartements · {commune.name}</p>
                  </div>
                  <p className="text-3xl font-medium text-textMain">
                    {commune.prixApptMin.toLocaleString('fr-FR')}
                    <span className="text-xl text-gray-400 ml-1">€/m²</span>
                  </p>
                </div>

                <div className="bg-surface rounded-[10px] p-8 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingDown size={20} className="text-primary" />
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/60">Maisons · {commune.name}</p>
                  </div>
                  <p className="text-3xl font-medium text-textMain">
                    {commune.prixMaisonMin.toLocaleString('fr-FR')}
                    <span className="text-xl text-gray-400 ml-1">€/m²</span>
                  </p>
                </div>

                <div className="bg-primary rounded-[10px] p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 size={20} className="text-white/60" />
                    <p className="text-xs font-bold uppercase tracking-widest text-white/60">Canton de Genève · PPE marché libre 2024</p>
                  </div>
                  <p className="text-3xl font-medium text-white">
                    10 559
                    <span className="text-xl text-white/60 ml-1">CHF/m²</span>
                  </p>
                </div>
              </div>

              <div className="bg-surface rounded-[10px] p-8 border border-gray-100">
                <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-4">
                  Comparer un projet immobilier
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="font-bold text-textMain text-lg mb-2">À {commune.name}</p>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Le prix de chaque maison ou appartement dépend de son état, de sa surface, de son emplacement et des transactions réellement comparables. Une médiane communale sert de repère initial pour affiner une estimation.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-textMain text-lg mb-2">Côté suisse</p>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Pour comparer deux biens, il faut tenir compte du taux de change, des frais d'acquisition, des règles de financement et de la fiscalité de chaque ménage, en plus de la localisation et de la qualité du logement.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Sources : <a href={COMMUNE_DVF_SOURCE} target="_blank" rel="noopener noreferrer" className="underline">statistiques DVF</a> et <a href="https://statistique.ge.ch/statistique/infographies/05/05_05/Info_Transactions_prix_immo.pdf" target="_blank" rel="noopener noreferrer" className="underline">OCSTAT, transactions immobilières 2024</a>.
              </p>
            </m.div>
          </div>
        </section>

        {/* ── Bloc CERN (Saint-Genis-Pouilly uniquement) ── */}
        {isSaintGenis && (
          <section className="py-20 bg-surface border-b border-gray-100">
            <div className="container mx-auto px-6 max-w-5xl">
              <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                  Focus CERN
                </span>
                <h2 className="text-4xl md:text-5xl font-medium text-textMain tracking-tight mb-8 break-words hyphens-auto">
                  Acheter à Saint-Genis
                  <br />
                  <span className="font-newsletter italic font-normal">
                    quand on travaille au CERN
                  </span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className="space-y-5 text-gray-600 font-light text-lg leading-relaxed">
                    <p>
                      Le CERN réunit du personnel, des scientifiques utilisateurs et des visiteurs internationaux autour de ses sites de Meyrin et de Prévessin. Saint-Genis-Pouilly peut convenir aux personnes qui souhaitent habiter près de ces sites ; le temps de trajet dépend de l'adresse et des conditions de circulation.
                    </p>
                    <p>
                      Le statut professionnel, le lieu de travail, la durée du contrat et les conditions de financement diffèrent d'un acquéreur à l'autre. La proximité du CERN est un critère possible, à mettre en balance avec le budget et les caractéristiques du logement.
                    </p>
                    <p>
                      Une estimation fondée sur les ventes comparables permet d'apprécier le prix d'un bien précis avant d'engager un projet d'achat ou de vente. <a href="https://home.cern/about/who-we-are/our-people/" target="_blank" rel="noopener noreferrer" className="underline">Source : CERN, présentation de ses équipes</a>.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: 'Sites proches', value: 'Meyrin / Prévessin' },
                      { label: 'Communauté scientifique', value: 'internationale' },
                      { label: 'Temps de trajet', value: 'selon l’adresse' },
                      { label: 'Projet immobilier', value: 'à étudier' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between bg-white p-6 rounded-[10px] border border-gray-100 shadow-sm">
                        <p className="font-medium text-textMain">{item.label}</p>
                        <p className="font-bold text-primary text-lg shrink-0 ml-4">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </m.div>
            </div>
          </section>
        )}

        {/* ── Bloc ONU / Organisations internationales (Ferney-Voltaire uniquement) ── */}
        {isFerney && (
          <section className="py-20 bg-surface border-b border-gray-100">
            <div className="container mx-auto px-6 max-w-5xl">
              <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-block py-1 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                  Focus ONU & organisations
                </span>
                <h2 className="text-4xl md:text-5xl font-medium text-textMain tracking-tight mb-8 break-words hyphens-auto">
                  Acheter à Ferney-Voltaire
                  <br />
                  <span className="font-newsletter italic font-normal">
                    quand on travaille à l'ONU
                  </span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className="space-y-5 text-gray-600 font-light text-lg leading-relaxed">
                    <p>
                      Genève accueille 42 organisations internationales selon la République et canton de Genève. Ferney-Voltaire est une option résidentielle pour certaines personnes qui travaillent dans ces organisations ; le choix dépend notamment du lieu de travail, du trajet et du type de logement recherché.
                    </p>
                    <p>
                      Les contrats et situations fiscales des salariés d'organisations internationales sont variés. Un projet d'achat doit donc être étudié selon la durée d'installation envisagée, le financement disponible et les règles qui s'appliquent au ménage.
                    </p>
                    <p>
                      Les établissements scolaires et les liaisons vers Genève peuvent compter dans la recherche d'un logement familial. <a href="https://www.geneve-int.ch/facts-figures" target="_blank" rel="noopener noreferrer" className="underline">Source : République et canton de Genève, chiffres de la Genève internationale</a>.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: 'Organisations internationales à Genève', value: '42' },
                      { label: 'Source', value: 'Canton de Genève' },
                      { label: 'Temps de trajet', value: 'selon l’adresse' },
                      { label: 'Projet immobilier', value: 'à étudier' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between bg-white p-6 rounded-[10px] border border-gray-100 shadow-sm">
                        <p className="font-medium text-textMain">{item.label}</p>
                        <p className="font-bold text-primary text-lg shrink-0 ml-4">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </m.div>
            </div>
          </section>
        )}

        {/* ── CTA ── */}
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

              <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-[1.05] mb-6 break-words hyphens-auto">
                Vous travaillez en Suisse
                <br />
                <span className="font-newsletter italic font-normal">
                  et cherchez à acheter à {commune.name} ?
                </span>
              </h2>

              <p className="text-white/70 text-xl font-light max-w-xl mx-auto mb-12">
                Parlons de votre recherche, du trajet quotidien et du budget. Je vous aide à comparer les biens et les communes à partir de données datées.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-white text-primary font-bold p-3 pr-8 rounded-full flex items-center gap-4 text-base hover:bg-surface transition-all shadow-black/20"
                >
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform shrink-0">
                    <ArrowUpRight size={18} />
                  </div>
                  Prendre contact
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

        {/* ── Link vers estimation ── */}
        <section className="py-16 bg-surface border-t border-gray-100">
          <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-2">
                Estimation gratuite
              </p>
              <h3 className="text-2xl font-bold text-textMain">
                Valeur de votre bien à {commune.name}
              </h3>
              <p className="text-gray-500 font-light mt-2">
                Visite sur site et analyse des ventes comparables pour estimer votre bien.
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
