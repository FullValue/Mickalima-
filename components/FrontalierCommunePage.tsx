import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { m } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  Clock,
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
import { COMMUNES, getCommuneHeroImage } from '../constants';
import { SEO } from './SEO';

const CRITERIA_BASE = [
  {
    icon: Car,
    title: (distanceGeneve: string) => `${distanceGeneve} de Genève`,
    description: () =>
      "Un trajet domicile-travail à l'échelle du quotidien. Les axes frontaliers permettent de rejoindre les postes-frontières en quelques minutes, hors heure de pointe.",
  },
  {
    icon: GraduationCap,
    title: () => 'Établissements scolaires',
    description: () =>
      "Écoles francophones, sections bilingues et lycées internationaux accessibles. Pour les familles en relocalisation, la continuité scolaire est souvent le premier critère de sélection de la commune.",
  },
  {
    icon: Trees,
    title: () => 'Espaces extérieurs',
    description: () =>
      "Jardins, terrasses et surfaces habitables impossibles à obtenir au même budget côté suisse. La comparaison avec un logement équivalent à Genève ou Nyon joue systématiquement en faveur du Pays de Gex.",
  },
  {
    icon: Wifi,
    title: () => 'Télétravail & fibre',
    description: () =>
      "Fibre optique déployée, connectivité optimale pour les jours de travail à distance. Indispensable depuis la généralisation du télétravail hybride dans les organisations internationales.",
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
          className="flex items-center gap-2 bg-white text-textMain font-bold px-8 py-4 rounded-full shadow-lg hover:bg-surface transition-colors"
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
          item: 'https://mickael-lima.immo',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: `Immobilier frontalier ${commune.name}`,
          item: `https://mickael-lima.immo/frontalier/${commune.slug}`,
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
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '25',
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
            text: `Oui. ${commune.name} se situe à ${commune.distanceGeneve} de Genève, ce qui en fait l'une des communes du Pays de Gex les plus prisées par les frontaliers. ${commune.frontalierContext} Le différentiel de pouvoir d'achat (salaire en CHF + fiscalité française) reste le moteur principal de la demande, et permet aux frontaliers d'accéder à des biens 40 à 60 % moins chers qu'à qualité équivalente côté suisse.`,
          },
        },
        {
          '@type': 'Question',
          name: `Quels sont les prix immobiliers à ${commune.name} en ${year} ?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `À ${commune.name} (${commune.cp}) en ${year}, les prix au m² s'établissent entre ${commune.prixApptMin.toLocaleString('fr-FR')} et ${commune.prixApptMax.toLocaleString('fr-FR')} €/m² pour les appartements, et entre ${commune.prixMaisonMin.toLocaleString('fr-FR')} et ${commune.prixMaisonMax.toLocaleString('fr-FR')} €/m² pour les maisons. Le délai moyen de vente sur les biens correctement estimés est de ${commune.delaiMoyen} jours. ${commune.evolutionPrix}`,
          },
        },
        {
          '@type': 'Question',
          name: `Mickaël Lima propose-t-il des estimations gratuites à ${commune.name} ?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Oui. L'estimation est gratuite, confidentielle et sans engagement. Elle inclut une visite sur site à ${commune.name}, l'analyse des transactions comparables récentes dans un rayon de 500 m, et un dossier complet remis sous 48h. Mickaël Lima intervient sur l'ensemble du Pays de Gex avec une expertise particulière sur la clientèle frontalière franco-suisse.`,
          },
        },
      ],
    },
  ];

  return (
    <>
      <SEO
        title={`Immobilier ${commune.name} pour les frontaliers genevois — Guide ${year} | Mickaël Lima`}
        description={`Acheter à ${commune.name} (${commune.cp}) en travaillant à Genève : trajet, prix, pouvoir d'achat CHF vs EUR, écoles, critères frontaliers. Expert marché local. Estimation gratuite.`}
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
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />
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
                  <MapPin size={12} /> {commune.distanceGeneve} de Genève
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.05] mb-6 break-words hyphens-auto">
                Immobilier {commune.name}
                <br />
                <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
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
                  <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">
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
                <div className="bg-surface rounded-[2rem] p-8 border border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-3">Distance Genève</p>
                  <p className="text-4xl font-medium text-textMain">{commune.distanceGeneve}</p>
                  <p className="text-gray-500 font-light text-sm mt-2">depuis le centre de Genève</p>
                </div>
                <div className="bg-surface rounded-[2rem] p-8 border border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-3">Délai de vente moyen</p>
                  <p className="text-4xl font-medium text-textMain">{commune.delaiMoyen} jours</p>
                  <p className="text-gray-500 font-light text-sm mt-2">sur les biens correctement estimés</p>
                </div>
                <div className="bg-surface rounded-[2rem] p-8 border border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-3">Prix appartements</p>
                  <p className="text-3xl font-medium text-textMain">
                    {commune.prixApptMin.toLocaleString('fr-FR')} – {commune.prixApptMax.toLocaleString('fr-FR')} €/m²
                  </p>
                  <p className="text-gray-500 font-light text-sm mt-2">fourchette actuelle du marché</p>
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
                <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">
                  recherchent à {commune.name}
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CRITERIA_BASE.map((c, i) => (
                  <m.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white rounded-[1.5rem] p-8 border border-gray-100 shadow-sm flex items-start gap-6"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0">
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
                    className="bg-primary rounded-[1.5rem] p-8 border border-primary shadow-sm flex items-start gap-6 md:col-span-2"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                      <Microscope size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg mb-2">Accès direct au CERN</p>
                      <p className="text-white/70 font-light leading-relaxed">
                        Saint-Genis-Pouilly jouxte directement le site principal du CERN et la zone technique de Prévessin. Les employés — physiciens, ingénieurs, techniciens, staff administratif — viennent de 100+ pays et représentent une demande locative et d'achat structurellement stable, indépendante des cycles immobiliers classiques.
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
                    className="bg-primary rounded-[1.5rem] p-8 border border-primary shadow-sm flex items-start gap-6 md:col-span-2"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                      <Globe size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg mb-2">ONU & organisations internationales</p>
                      <p className="text-white/70 font-light leading-relaxed">
                        Ferney-Voltaire est à 8 km du Palais des Nations, du siège de l'OMS, du WTO et du WIPO. Les fonctionnaires internationaux représentent une part significative des acheteurs — bénéficiant d'une immunité fiscale partielle et d'un pouvoir d'achat USD/CHF élevé. La communauté anglophone est la plus dense du Pays de Gex, avec des écoles internationales à proximité directe.
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
                <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">
                  l'équation qui change tout
                </span>
              </h2>
              <p className="text-gray-600 font-light text-lg leading-relaxed max-w-3xl mb-12">
                Un salarié genevois dispose en moyenne d'un pouvoir d'achat immobilier 40 à 60 % supérieur à un résident français de même profil. Un appartement de 90 m² comparable dans les communes résidentielles genevoises (Carouge, Lancy, Meyrin) se négocie entre 1,2 et 1,8 million CHF. À {commune.name}, la fourchette est de {commune.prixApptMin.toLocaleString('fr-FR')} à {commune.prixApptMax.toLocaleString('fr-FR')} €/m². Sur une surface équivalente, l'économie représente souvent 800 000 à 1 200 000 € — sans compromis sur la qualité de vie.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-surface rounded-[2rem] p-8 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingDown size={20} className="text-primary" />
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/60">Appartements · {commune.name}</p>
                  </div>
                  <p className="text-3xl font-medium text-textMain">
                    {commune.prixApptMin.toLocaleString('fr-FR')} – {commune.prixApptMax.toLocaleString('fr-FR')}
                    <span className="text-xl text-gray-400 ml-1">€/m²</span>
                  </p>
                </div>

                <div className="bg-surface rounded-[2rem] p-8 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingDown size={20} className="text-primary" />
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/60">Maisons · {commune.name}</p>
                  </div>
                  <p className="text-3xl font-medium text-textMain">
                    {commune.prixMaisonMin.toLocaleString('fr-FR')} – {commune.prixMaisonMax.toLocaleString('fr-FR')}
                    <span className="text-xl text-gray-400 ml-1">€/m²</span>
                  </p>
                </div>

                <div className="bg-primary rounded-[2rem] p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 size={20} className="text-white/60" />
                    <p className="text-xs font-bold uppercase tracking-widest text-white/60">Équivalent Genève-ville</p>
                  </div>
                  <p className="text-3xl font-medium text-white">
                    13 000 – 20 000
                    <span className="text-xl text-white/60 ml-1">CHF/m²</span>
                  </p>
                </div>
              </div>

              <div className="bg-surface rounded-[2rem] p-8 border border-gray-100">
                <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-4">
                  Exemple concret · Budget 800 000 €
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="font-bold text-textMain text-lg mb-2">À {commune.name}</p>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Une maison de 4 à 5 pièces avec jardin, garage double, finitions récentes — surface de 140 à 180 m² selon l'état et la localisation exacte dans la commune.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-textMain text-lg mb-2">Côté suisse (budget équivalent en CHF)</p>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Un appartement de 3 pièces en périphérie genevoise, sans extérieur, dans un immeuble des années 1980. Le franc suisse amplifie l'écart : à parité de pouvoir d'achat, l'avantage français est structurel.
                    </p>
                  </div>
                </div>
              </div>
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
                  <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">
                    quand on travaille au CERN
                  </span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className="space-y-5 text-gray-600 font-light text-lg leading-relaxed">
                    <p>
                      Le CERN emploie directement 17 000 personnes issues de plus de 100 nationalités. À ces effectifs s'ajoutent des milliers de prestataires, doctorants et visiteurs en séjour long. Pour les membres du personnel en contrat permanent ou de longue durée, l'achat à Saint-Genis-Pouilly est la solution logique : à 3 minutes du site principal de Meyrin et à portée du secteur de Prévessin-Moëns.
                    </p>
                    <p>
                      Le profil CERN présente des caractéristiques spécifiques : salaires nets en CHF avec exonérations fiscales partielles, fort pouvoir d'achat, critères de sélection précis (taille, qualité, proximité du CERN). La demande est structurellement découplée des cycles économiques — elle suit le calendrier des recrutements et des rotations de contrats, pas les variations de taux.
                    </p>
                    <p>
                      Plusieurs familles du CERN ont acheté à Saint-Genis-Pouilly avec un accompagnement spécialisé — connaître les délais d'obtention de visa, les particularités des statuts diplomatiques et la gestion des virements internationaux fait partie du service.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: 'Employés CERN (direct + associés)', value: '17 000+' },
                      { label: 'Nationalités représentées', value: '100+' },
                      { label: 'Distance CERN Meyrin → Saint-Genis', value: '3 min' },
                      { label: 'Demande locative (rotation annuelle)', value: 'très forte' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
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
                  <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">
                    quand on travaille à l'ONU
                  </span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className="space-y-5 text-gray-600 font-light text-lg leading-relaxed">
                    <p>
                      Genève accueille plus de 40 organisations internationales — ONU, OMS, OMC, OMPI, OIT, HCR — représentant plus de 35 000 fonctionnaires internationaux. Ferney-Voltaire, à 8 km du Palais des Nations, est le premier marché résidentiel de cette clientèle : une communauté stable, solvable, et très exigeante sur la qualité des biens.
                    </p>
                    <p>
                      Les fonctionnaires internationaux bénéficient d'une immunité fiscale sur leurs émoluments — leur capacité d'emprunt est calculée sur un revenu net effectif élevé. La durée des mandats (3 à 5 ans, souvent renouvelés) crée une demande mixte : certains louent d'abord, puis achètent en cas de renouvellement. D'autres achètent dès la première affectation pour rentabiliser le bien à la relocalisation suivante.
                    </p>
                    <p>
                      La communauté anglophone, franco-britannique et nord-américaine est dense à Ferney-Voltaire — avec des écoles internationales, des cercles sociaux actifs et une vie de quartier cosmopolite. C'est un critère de premier ordre pour les familles en relocalisation.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: 'Organisations internationales à Genève', value: '40+' },
                      { label: 'Fonctionnaires internationaux', value: '35 000+' },
                      { label: 'Distance Palais des Nations → Ferney', value: '8 km' },
                      { label: 'Profil acheteur dominant', value: 'cadre supérieur' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
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
                Gratuit · Sans engagement · Sous 48h
              </span>

              <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-[1.05] mb-6 break-words hyphens-auto">
                Vous travaillez en Suisse
                <br />
                <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                  et cherchez à acheter à {commune.name} ?
                </span>
              </h2>

              <p className="text-white/70 text-xl font-light max-w-xl mx-auto mb-12">
                Connaissance du marché local, maîtrise des profils frontaliers, réseau d'acquéreurs actif. Une estimation gratuite pour démarrer, sans engagement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-white text-primary font-bold p-3 pr-8 rounded-full flex items-center gap-4 text-base hover:bg-surface transition-all shadow-xl shadow-black/20"
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
                Visite sur site, analyse des comparables, dossier remis sous 48h.
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
