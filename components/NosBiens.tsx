import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import {
  ArrowUpRight,
  BedDouble,
  Bath,
  Maximize,
  MapPin,
  Lock,
  Phone,
  SlidersHorizontal,
  Search,
} from 'lucide-react';
import { SEO } from './SEO';
import { PROPERTIES } from '../constants';
import type { Property, PropertyType } from '../types';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const NOS_BIENS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Nos biens à vendre — Pays de Gex',
  description:
    'Sélection de biens immobiliers à la vente dans le Pays de Gex : maisons, villas, appartements et terrains proposés par Mickaël Lima.',
  url: 'https://mickael-lima.immo/nos-biens/',
  isPartOf: { '@type': 'WebSite', name: 'Mickaël Lima Immobilier', url: 'https://mickael-lima.immo' },
  about: { '@type': 'RealEstateAgent', name: 'Mickaël Lima — L’agence Immo' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://mickael-lima.immo/' },
      { '@type': 'ListItem', position: 2, name: 'Nos biens', item: 'https://mickael-lima.immo/nos-biens/' },
    ],
  },
};

const TYPE_FILTERS: Array<PropertyType | 'Tous'> = ['Tous', 'Maison', 'Villa', 'Appartement', 'Terrain'];

const formatPrice = (value: number) =>
  new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value);

const statusStyles: Record<Property['status'], string> = {
  'À vendre': 'bg-white text-primary',
  'Sous compromis': 'bg-amber-400 text-[#3a2600]',
  Vendu: 'bg-primary text-white',
};

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => (
  <m.article
    variants={fadeInUp}
    className="group bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={property.image}
        alt={`${property.title} — ${property.commune}`}
        width="800"
        height="600"
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-70" />
      <span
        className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-md ${statusStyles[property.status]}`}
      >
        {property.status}
      </span>
      <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 text-white text-sm font-medium drop-shadow">
        <MapPin size={15} aria-hidden="true" /> {property.commune}
      </span>
    </div>

    <div className="p-7 flex flex-col flex-grow">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h2 className="text-xl font-medium leading-snug text-textMain">{property.title}</h2>
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap pt-1">
          {property.type}
        </span>
      </div>

      <p className="text-gray-500 leading-relaxed text-sm mb-6 flex-grow">{property.description}</p>

      <ul className="flex flex-wrap gap-2 mb-6">
        {property.highlights.map((highlight) => (
          <li
            key={highlight}
            className="text-[11px] font-semibold uppercase tracking-wider text-primary bg-surface border border-border rounded-full px-3 py-1.5"
          >
            {highlight}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5 text-sm text-gray-500 border-t border-border pt-5">
        <span className="inline-flex items-center gap-1.5">
          <Maximize size={16} aria-hidden="true" /> {property.surface} m²
        </span>
        {property.bedrooms > 0 && (
          <span className="inline-flex items-center gap-1.5">
            <BedDouble size={16} aria-hidden="true" /> {property.bedrooms} ch.
          </span>
        )}
        {property.bathrooms > 0 && (
          <span className="inline-flex items-center gap-1.5">
            <Bath size={16} aria-hidden="true" /> {property.bathrooms} sdb
          </span>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 mt-6">
        <p className="text-2xl font-medium text-primary">{formatPrice(property.price)}</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-primary text-white pl-5 pr-2 py-2 rounded-full text-sm font-bold shadow-md hover:-translate-y-0.5 transition-transform group/cta"
          aria-label={`Demander une visite — ${property.title} à ${property.commune}`}
        >
          <span>Visiter</span>
          <span className="w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center group-hover/cta:rotate-45 transition-transform duration-300">
            <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </Link>
      </div>
    </div>
  </m.article>
);

export const NosBiens: React.FC = () => {
  const [type, setType] = useState<PropertyType | 'Tous'>('Tous');
  const [commune, setCommune] = useState('Toutes');
  const [sort, setSort] = useState<'recent' | 'asc' | 'desc'>('recent');

  const communes = useMemo(
    () => ['Toutes', ...Array.from(new Set(PROPERTIES.map((p) => p.commune))).sort()],
    []
  );

  const filtered = useMemo(() => {
    const list = PROPERTIES.filter(
      (p) => (type === 'Tous' || p.type === type) && (commune === 'Toutes' || p.commune === commune)
    );
    if (sort === 'asc') return [...list].sort((a, b) => a.price - b.price);
    if (sort === 'desc') return [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [type, commune, sort]);

  const available = PROPERTIES.filter((p) => p.status === 'À vendre').length;

  return (
    <>
      <SEO
        title="Nos Biens à Vendre — Maisons, Villas & Appartements Pays de Gex"
        description="Découvrez les biens immobiliers à la vente dans le Pays de Gex : maisons, villas, appartements et terrains sélectionnés par Mickaël Lima, agent immobilier prestige à la frontière genevoise."
        canonical="/nos-biens"
        schema={NOS_BIENS_SCHEMA}
      />

      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Hero */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-primary pt-20">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-pays-de-gex.jpg"
              width="1920"
              height="1080"
              loading="eager"
              decoding="async"
              alt="Biens immobiliers dans le Pays de Gex"
              className="w-full h-full object-cover mix-blend-overlay opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-background z-10" />
          </div>

          <m.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="container mx-auto px-6 relative z-20 text-center text-white"
          >
            <m.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white/90 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
            >
              <Search size={16} aria-hidden="true" /> Sélection Pays de Gex
            </m.span>

            <m.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-8xl font-medium mb-6 leading-[1.05] tracking-tight drop-shadow-2xl break-words hyphens-auto"
            >
              Nos biens <br />
              <span className="font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                à la vente.
              </span>
            </m.h1>

            <m.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              Maisons, villas, appartements et terrains à quelques minutes de la frontière genevoise.
              Chaque bien est visité, vérifié et présenté avec la même exigence : photos professionnelles,
              diagnostic complet et accompagnement de la visite à la signature.
            </m.p>

            <m.dl
              variants={fadeInUp}
              className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {[
                { value: String(available), label: 'Biens disponibles' },
                { value: '9', label: 'Communes couvertes' },
                { value: '+40', label: 'Portails de diffusion' },
                { value: '240', label: 'Ventes en 5 ans' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-5 px-3"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-3xl md:text-4xl font-medium">{stat.value}</span>
                    <span className="block text-[11px] uppercase tracking-widest text-white/70 mt-2">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </m.dl>
          </m.div>
        </section>

        {/* Filtres + grille */}
        <section className="py-24 md:py-32 bg-surface">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/60 mb-4">
                <SlidersHorizontal size={14} aria-hidden="true" /> Portefeuille
              </span>
              <h2 className="text-3xl md:text-5xl font-medium text-textMain leading-tight">
                Trouvez le bien qui vous ressemble.
              </h2>
            </div>

            {/* Barre de filtres */}
            <div className="bg-white border border-border rounded-3xl shadow-sm p-5 md:p-6 mb-12 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par type de bien">
                {TYPE_FILTERS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setType(t)}
                    aria-pressed={type === t}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                      type === t
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-surface text-primary/70 hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 lg:ml-auto w-full lg:w-auto">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="filtre-commune"
                    className="text-[11px] font-bold uppercase tracking-widest text-gray-500"
                  >
                    Commune
                  </label>
                  <select
                    id="filtre-commune"
                    value={commune}
                    onChange={(e) => setCommune(e.target.value)}
                    className="border border-border rounded-full px-5 py-2.5 text-sm text-textMain bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 min-w-[190px]"
                  >
                    {communes.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="filtre-tri"
                    className="text-[11px] font-bold uppercase tracking-widest text-gray-500"
                  >
                    Trier par
                  </label>
                  <select
                    id="filtre-tri"
                    value={sort}
                    onChange={(e) => setSort(e.target.value as 'recent' | 'asc' | 'desc')}
                    className="border border-border rounded-full px-5 py-2.5 text-sm text-textMain bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 min-w-[190px]"
                  >
                    <option value="recent">Les plus récents</option>
                    <option value="asc">Prix croissant</option>
                    <option value="desc">Prix décroissant</option>
                  </select>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-8" aria-live="polite">
              {filtered.length} bien{filtered.length > 1 ? 's' : ''} affiché
              {filtered.length > 1 ? 's' : ''}
            </p>

            {filtered.length > 0 ? (
              <m.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                {filtered.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </m.div>
            ) : (
              <div className="bg-white border border-border rounded-3xl p-12 md:p-20 text-center">
                <h3 className="text-2xl font-medium text-textMain mb-4">
                  Aucun bien ne correspond à votre recherche
                </h3>
                <p className="text-gray-500 max-w-xl mx-auto mb-8 leading-relaxed">
                  Le marché du Pays de Gex bouge vite et une partie des biens ne sont jamais publiés.
                  Décrivez-moi votre projet : je vous préviens dès qu’un bien correspondant entre au
                  portefeuille.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-primary text-white pl-7 pr-2 py-2 rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-transform group"
                >
                  <span>Créer mon alerte</span>
                  <span className="w-9 h-9 bg-white text-primary rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </span>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Off-market */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
            <m.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/60 mb-4">
                <Lock size={14} aria-hidden="true" /> Confidentiel
              </span>
              <h2 className="text-3xl md:text-5xl font-medium text-textMain leading-tight mb-6">
                Les plus beaux biens ne sont{' '}
                <span className="font-newsletter italic font-normal">jamais annoncés.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Une part importante des transactions haut de gamme du Pays de Gex se conclut hors
                portails, entre acquéreurs qualifiés et propriétaires qui souhaitent rester discrets.
                Ces biens circulent uniquement dans mon fichier acquéreurs et auprès du réseau
                inter-agences.
              </p>
              <ul className="space-y-3 mb-10 text-gray-600">
                {[
                  'Accès aux biens off-market avant leur mise en ligne',
                  'Pré-visites organisées selon vos critères réels',
                  'Analyse de prix et négociation menées pour vous',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-primary text-white pl-7 pr-2 py-2 rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-transform group"
              >
                <span>Recevoir les biens off-market</span>
                <span className="w-9 h-9 bg-white text-primary rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={18} aria-hidden="true" />
                </span>
              </Link>
            </m.div>

            <m.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <img
                src="/images/villa-fontaine-cour-lueur-du-soir_1167636-26973.jpg"
                alt="Propriété de prestige dans le Pays de Gex"
                width="1200"
                height="900"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-4 md:-left-8 bg-white rounded-3xl shadow-xl border border-border p-6 max-w-xs">
                <p className="text-4xl font-medium text-primary mb-1">48 h</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Délai moyen entre l’entrée d’un bien au portefeuille et la première visite qualifiée.
                </p>
              </div>
            </m.div>
          </div>
        </section>

        {/* CTA final */}
        <section className="relative py-28 md:py-36 bg-primary overflow-hidden">
          <img
            src="/images/pool-cta-final.jpg"
            alt=""
            aria-hidden="true"
            width="1920"
            height="1080"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
          />
          <div className="container mx-auto px-6 relative z-10 text-center text-white">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
              Vous souhaitez vendre <br />
              <span className="font-newsletter italic font-normal">votre bien ?</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
              Estimation offerte, sans engagement, basée sur les transactions réelles de votre commune.
              Vous saurez en 48 h ce que vaut votre bien sur le marché frontalier.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/estimation"
                className="inline-flex items-center gap-3 bg-white text-textMain pl-7 pr-2 py-2 rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-transform group"
              >
                <span>Estimation offerte</span>
                <span className="w-9 h-9 bg-textMain text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={18} aria-hidden="true" />
                </span>
              </Link>
              <a
                href="tel:+33769313502"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md font-bold hover:bg-white/20 transition-colors"
              >
                <Phone size={18} aria-hidden="true" /> 07 69 31 35 02
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
