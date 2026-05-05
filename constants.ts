import { NavItem, Stat, Facility, LocationItem, RoomSize, Service, BlogPost } from './types';
import { Home, Key, TrendingUp, Search, PenTool, Building } from 'lucide-react';

export const COLORS = {
  primary: '#003064',
  text: '#003064',
  bg: '#FFFFFF'
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Services & Mandats', path: '/mandats' },
  { label: 'À Propos', path: '/about' },
  { label: 'Partenaires', path: '/partenaires' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const IMAGES = {
  logo: "https://i.imgur.com/lwDyyfu.png",
  logoWhite: "https://i.imgur.com/lwDyyfu.png",
  // Updated agent image - using direct link format for postimg
  heroAgent: "https://i.postimg.cc/m147y1wt/image.png",
  heroBg: "https://madebydesignesia.com/themes/homely/images/demo/homepage-1.webp",
  cardImage: "https://madebydesignesia.com/themes/homely/images/demo/homepage-2.webp",
  misc1: "https://madebydesignesia.com/themes/homely/images/misc/s1.webp",
  misc2: "https://madebydesignesia.com/themes/homely/images/misc/s2.webp",
  misc3: "https://madebydesignesia.com/themes/homely/images/misc/s3.webp",
  misc4: "https://madebydesignesia.com/themes/homely/images/misc/s4.webp",
  misc5: "https://madebydesignesia.com/themes/homely/images/misc/s5.webp",
  videoBg: "https://madebydesignesia.com/themes/homely/images/background/1.webp",
  ctaBg: "/images/pool-cta-final.jpg",
  floorplan: "https://madebydesignesia.com/themes/homely/images/misc/floorplan.webp",
  gallery: [
    "https://madebydesignesia.com/themes/homely/images/gallery/3.webp",
    "https://madebydesignesia.com/themes/homely/images/gallery/4.webp",
    "https://madebydesignesia.com/themes/homely/images/gallery/5.webp",
    "https://madebydesignesia.com/themes/homely/images/gallery/1.webp",
    "https://madebydesignesia.com/themes/homely/images/gallery/2.webp"
  ]
};

export const HERO_SLIDES = [
  "https://i.imgur.com/mSqbCxf.jpeg",
  "https://i.imgur.com/HdAJY7C.jpeg",
  "https://i.imgur.com/Yxq7idV.jpeg"
];

export const STATS: Stat[] = [
  { label: 'm²', value: '155', icon: 'size' },
  { label: 'Chambres', value: '4', icon: 'bed' },
  { label: 'SDB', value: '3', icon: 'bath' },
  { label: 'Garage', value: '2', icon: 'car' },
];

export const FACILITIES: Facility[] = [
  { title: 'Mise en valeur', description: 'Chaque bien est présenté comme un produit premium grâce à des outils professionnels (photo, vidéo, visite immersive, home staging).', image: IMAGES.misc2 },
  { title: 'Visibilité maximale', description: 'Votre bien bénéficie d’une diffusion large et ciblée : réseaux sociaux, portails immobiliers, fichier acquéreurs et partage inter-agences.', image: IMAGES.misc3 },
  { title: 'Accompagnement personnalisé', description: 'Un suivi clair et transparent à chaque étape, avec des échanges réguliers et des comptes rendus détaillés.', image: IMAGES.misc4 },
];

export const SERVICES: Service[] = [
  { title: "Vente Immobilière", description: "Mise en valeur de votre bien, photos professionnelles et stratégie marketing ciblée pour une vente rapide au meilleur prix.", icon: Home },
  { title: "Recherche de Biens", description: "Chasseur immobilier à votre service pour trouver la perle rare qui correspond à tous vos critères et votre budget.", icon: Search },
  { title: "Estimation Précise", description: "Analyse approfondie du marché pour fournir une estimation fiable et réaliste de la valeur de votre patrimoine.", icon: TrendingUp },
  { title: "Gestion Locative", description: "Tranquillité d'esprit garantie : nous gérons les locataires, les contrats et l'entretien de vos investissements.", icon: Key },
  { title: "Conseil en Investissement", description: "Accompagnement stratégique pour optimiser votre portefeuille immobilier et maximiser votre rentabilité.", icon: Building },
  { title: "Home Staging", description: "Revalorisation de vos espaces intérieurs pour déclencher le coup de cœur chez les futurs acquéreurs.", icon: PenTool },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "prix-m2-pays-de-gex-2026",
    title: "Prix au m² dans le Pays de Gex en 2026 : commune par commune",
    excerpt: "Le Pays de Gex affiche des prix immobiliers parmi les plus élevés de France, portés par la proximité de Genève et la demande des frontaliers. Voici les valeurs réelles par commune.",
    date: "5 Mai 2026",
    category: "Marché",
    image: "/images/hero-pays-de-gex.jpg",
    content: `
    <p>Le marché immobilier du Pays de Gex reste sous tension en 2026. La demande excède l'offre sur la quasi-totalité des communes, avec des acheteurs issus principalement du bassin genevois : frontaliers, employés d'organisations internationales, cadres expatriés. Le résultat : des prix qui résistent à la correction observée dans d'autres marchés français.</p>

    <h3>Prix médians par commune (mai 2026)</h3>
    <p>Les données ci-dessous sont issues des transactions enregistrées sur les 12 derniers mois dans le secteur :</p>
    <ul>
      <li><strong>Ferney-Voltaire</strong> — 5 200 à 6 800 €/m² (appartements), 6 500 à 9 000 €/m² (maisons)</li>
      <li><strong>Divonne-les-Bains</strong> — 4 800 à 6 200 €/m² (appartements), 5 800 à 8 500 €/m² (maisons)</li>
      <li><strong>Saint-Genis-Pouilly</strong> — 4 500 à 5 800 €/m² (appartements), 5 200 à 7 500 €/m² (maisons)</li>
      <li><strong>Gex</strong> — 3 800 à 5 200 €/m² (appartements), 4 500 à 6 800 €/m² (maisons)</li>
      <li><strong>Prévessin-Moëns</strong> — 4 200 à 5 600 €/m² (appartements), 5 000 à 7 200 €/m² (maisons)</li>
      <li><strong>Cessy / Ornex</strong> — 4 000 à 5 400 €/m² (appartements), 4 800 à 7 000 €/m² (maisons)</li>
      <li><strong>Thoiry / Crozet</strong> — 3 500 à 4 800 €/m² (appartements), 4 200 à 6 200 €/m² (maisons)</li>
    </ul>

    <h3>Ce qui explique ces niveaux de prix</h3>
    <p>Trois facteurs structurels maintiennent les prix élevés dans le Pays de Gex. D'abord, le différentiel de revenus entre frontaliers et résidents français classiques : un salarié travaillant à Genève dispose d'un pouvoir d'achat immobilier 40 à 60 % supérieur à la moyenne nationale. Ensuite, la rareté du foncier constructible dans un secteur contraint par les zones agricoles et naturelles. Enfin, la demande locative soutenue, portée par le renouvellement permanent des contrats de détachement.</p>

    <blockquote>Le Pays de Gex est l'un des seuls marchés français où la demande en francs suisses coexiste avec la demande en euros. Ce double marché crée des dynamiques de prix qu'un agent non spécialisé ne peut pas anticiper correctement.</blockquote>

    <h3>Quelle est la valeur réelle de votre bien ?</h3>
    <p>Les prix médians donnent une orientation, pas une valeur précise. L'estimation d'un bien dans le Pays de Gex doit intégrer sa commune exacte, sa distance aux axes frontaliers, son état énergétique (DPE), sa vue, et les transactions comparables récentes dans un rayon de 500 mètres. C'est ce travail d'analyse fine qu'une estimation de terrain permet de réaliser.</p>
    <p>Une estimation réalisée à distance, sur la base de données agrégées, peut s'écarter de 10 à 20 % de la valeur réelle dans ce secteur. Sur un bien à 600 000 €, cela représente entre 60 000 et 120 000 € d'écart — dans un sens ou dans l'autre.</p>

    <h3>Délais de vente moyens en 2026</h3>
    <ul>
      <li><strong>Appartements bien estimés</strong> : 28 à 45 jours en moyenne</li>
      <li><strong>Maisons bien estimées</strong> : 45 à 75 jours</li>
      <li><strong>Biens surestimés de 10 %+</strong> : délai multiplié par 3 à 4, avec décote finale systématique</li>
    </ul>
    <p>La précision de l'estimation initiale reste le facteur le plus déterminant sur le délai et le prix final obtenu.</p>
  `
  },
  {
    id: 2,
    slug: "immobilier-frontalier-pays-de-gex",
    title: "Immobilier dans le Pays de Gex : ce que les frontaliers doivent savoir",
    excerpt: "Vivre en France, travailler en Suisse : le Pays de Gex attire chaque année des milliers de nouveaux frontaliers. Voici ce qu'il faut comprendre sur ce marché immobilier atypique avant d'acheter ou de vendre.",
    date: "5 Mai 2026",
    category: "Frontalier",
    image: "/images/hero-pays-de-gex.jpg",
    content: `
    <p>Le Pays de Gex compte environ 100 000 habitants, dont près de 35 % travaillent en Suisse. Cette proportion de frontaliers — parmi les plus élevées d'Europe — structure intégralement le marché immobilier local : niveaux de prix, profils d'acheteurs, critères de choix, délais de transaction. Acheter ou vendre dans ce secteur sans maîtriser ces spécificités, c'est travailler avec une carte incomplète.</p>

    <h3>Pourquoi les frontaliers choisissent le Pays de Gex</h3>
    <p>La réponse tient en quelques chiffres. Un appartement de 90 m² à Ferney-Voltaire se négocie autour de 500 000 €. Le même logement côté suisse, à Genève ou dans le canton de Vaud, dépasse 1,2 million de francs suisses. Pour un frontalier payé en CHF, résider en France représente une économie substantielle à qualité de vie équivalente — accès aux axes autoroutiers, temps de trajet maîtrisé, fiscalité française.</p>

    <blockquote>Le Pays de Gex n'est pas un marché immobilier français classique. C'est un marché de frontière, avec ses propres règles, ses propres acheteurs et ses propres dynamiques. Les méthodes d'estimation et de commercialisation doivent en tenir compte.</blockquote>

    <h3>Ce qui différencie un acheteur frontalier</h3>
    <p>Les frontaliers achètent avec des critères précis, souvent non négociables :</p>
    <ul>
      <li><strong>Proximité des axes frontaliers</strong> : D984, A40, douane de Bardonnex — chaque minute gagnée sur le trajet compte</li>
      <li><strong>Qualité des établissements scolaires</strong> : les familles expatriées cherchent des communes avec lycées internationaux ou accès au réseau scolaire genevois</li>
      <li><strong>Fibre et connectivité</strong> : le télétravail partiel est désormais la norme dans les organisations internationales</li>
      <li><strong>Espaces extérieurs</strong> : jardins, terrasses — la comparaison avec les logements suisses joue systématiquement</li>
    </ul>

    <h3>Vendre à un acheteur frontalier ou expatrié</h3>
    <p>Un propriétaire qui commercialise son bien uniquement sur les portails français laisse passer une partie significative de la demande. Les frontaliers actifs sur le marché consultent Properstar, les portails suisses, et les réseaux d'agents spécialisés en zone frontalière. La mise en valeur du bien — photos professionnelles, vidéo drone, description en français et en anglais — est un prérequis, pas un plus.</p>
    <p>Sur les 240 ventes réalisées en 5 ans dans le Pays de Gex, une proportion significative impliquait des acheteurs travaillant à Genève, au CERN ou dans des organisations internationales. Cette clientèle spécifique a des attentes précises et des processus d'achat différents des acquéreurs français classiques.</p>

    <h3>Les communes les mieux positionnées pour les frontaliers</h3>
    <ul>
      <li><strong>Ferney-Voltaire</strong> : 8 km de Genève, forte communauté internationale, toutes commodités</li>
      <li><strong>Saint-Genis-Pouilly</strong> : CERN à proximité immédiate, demande locative très soutenue</li>
      <li><strong>Prévessin-Moëns</strong> : calme, résidentiel, accès rapide à la douane</li>
      <li><strong>Ornex / Cessy</strong> : pavillonnaire, familles, rapport qualité-prix favorable</li>
      <li><strong>Divonne-les-Bains</strong> : prestige, lac, golf — profil cadre supérieur et expatrié senior</li>
    </ul>
  `
  },
  {
    id: 3,
    slug: "mandat-exclusif-vs-mandat-simple",
    title: "Mandat exclusif ou mandat simple : lequel choisir pour vendre dans le Pays de Gex ?",
    excerpt: "Le choix du type de mandat conditionne la stratégie de vente, le délai et souvent le prix final obtenu. Voici une comparaison objective des deux options dans le contexte du marché frontalier.",
    date: "5 Mai 2026",
    category: "Conseil",
    image: "/images/hero-pays-de-gex.jpg",
    content: `
    <p>La question revient dans presque chaque premier rendez-vous : faut-il signer un mandat exclusif ou confier son bien à plusieurs agences ? La réponse dépend moins d'une préférence générale que de la réalité du marché local et des objectifs du vendeur. Dans le Pays de Gex, les deux formules produisent des résultats très différents selon la situation.</p>

    <h3>Ce que dit la loi Hoguet</h3>
    <p>Un mandat exclusif interdit au propriétaire de confier son bien à une autre agence pendant la durée du contrat, généralement 3 mois renouvelables. Un mandat simple autorise la multi-diffusion et la vente en direct par le propriétaire. Les deux formes sont encadrées par la loi Hoguet du 2 janvier 1970 et ses décrets d'application.</p>

    <h3>Les avantages concrets du mandat exclusif</h3>
    <ul>
      <li><strong>Engagement renforcé de l'agent</strong> : un mandat exclusif justifie un investissement en communication — shooting photo professionnel, vidéo drone 4K, campagne de diffusion sur 40+ portails, relance active du fichier acheteurs</li>
      <li><strong>Prix affiché cohérent</strong> : un bien sur plusieurs agences apparaît souvent à des prix différents, ce qui génère de la méfiance chez les acheteurs et affaiblit la négociation</li>
      <li><strong>Suivi personnalisé</strong> : un seul interlocuteur coordonne les visites, les retours, et l'ajustement éventuel de stratégie</li>
      <li><strong>Délai généralement plus court</strong> : les statistiques internes montrent un délai moyen inférieur de 30 à 40 % sur les mandats exclusifs correctement travaillés</li>
    </ul>

    <h3>Quand le mandat simple peut avoir du sens</h3>
    <p>Le mandat simple reste pertinent dans certains cas précis : bien atypique avec une cible très restreinte, propriétaire ayant un réseau personnel solide, ou situation nécessitant une mise sur le marché immédiate sans délai de préparation. Dans ces cas, la multiplication des canaux compense l'absence de stratégie coordonnée.</p>

    <blockquote>Dans le Pays de Gex, la demande est suffisamment soutenue pour qu'un bien correctement estimé et bien présenté se vende avec un mandat exclusif dans des délais raisonnables. La question n'est pas tant le type de mandat que la qualité de l'accompagnement derrière.</blockquote>

    <h3>Ce qui change vraiment la donne</h3>
    <p>Le type de mandat influence moins le résultat final que deux autres facteurs : la justesse de l'estimation initiale et la qualité de la présentation du bien. Un bien surestimé de 8 % avec mandat exclusif se vendra moins bien qu'un bien correctement estimé avec mandat simple. Et un bien photographié avec un smartphone restera invisible face aux concurrents mis en valeur avec des photos professionnelles et une vidéo drone.</p>
    <p>Ces deux éléments — estimation précise et mise en valeur premium — sont inclus systématiquement dans chaque mandat, quel que soit le type choisi.</p>

    <h3>Les questions à poser avant de signer</h3>
    <ul>
      <li>Sur combien de portails le bien sera-t-il diffusé ?</li>
      <li>Qui réalise les photos et la vidéo, et à quel coût pour le vendeur ?</li>
      <li>Quel est le délai moyen de vente constaté sur les mandats récents ?</li>
      <li>Comment l'agent gère-t-il les retours négatifs de visiteurs ?</li>
      <li>Quelles sont les conditions de résiliation anticipée ?</li>
    </ul>
  `
  }
];

export const ROOM_SIZES: RoomSize[] = [
  { name: 'Salon', size: '20 m²' },
  { name: 'Salle à Manger', size: '15 m²' },
  { name: 'Cuisine', size: '15 m²' },
  { name: 'Suite Parentale', size: '16 m²' },
  { name: 'Chambre Enfant 1', size: '12 m²' },
  { name: 'Chambre Enfant 2', size: '12 m²' },
  { name: 'Salle de Bain', size: '6 m²' },
  { name: 'Garage', size: '40 m²' },
  { name: 'Buanderie', size: '4 m²' },
];

export const LOCATIONS: LocationItem[] = [
  { name: 'Épicerie Fine', time: '6 min à pied', description: 'Produits locaux et sélection gourmande.', category: 'Courses' },
  { name: 'Marché Bio', time: '10 min à pied', description: 'Produits frais et biologiques de la région.', category: 'Courses' },
  { name: 'Centre Commercial', time: '8–10 min à pied', description: 'Boutiques de mode et services divers.', category: 'Shopping' },
  { name: 'Café de la Place', time: '7 min à pied', description: 'Café artisanal et pâtisseries maison.', category: 'Restauration' },
  { name: 'Station de Métro', time: '5 min à pied', description: 'Accès direct au centre-ville.', category: 'Transport' },
  { name: 'École Internationale', time: '7 min à pied', description: 'Excellence académique pour vos enfants.', category: 'Éducation' },
];

export const FEATURES_LIST = [
  "Résidence Urbaine Élégante",
  "Vue Jardin Paisible",
  "Espaces de Vie Modernes",
  "Finitions Premium",
  "Pièces Lumineuses",
  "Aménagements Exclusifs",
  "Confort & Luxe",
  "Design Familial Spacieux",
  "Intérieur Stylé",
  "Emplacement Privilégié"
];