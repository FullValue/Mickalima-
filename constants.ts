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
    slug: "tendances-immobilieres-2025",
    title: "Les tendances immobilières de 2025",
    excerpt: "Analyse des nouvelles attentes des acheteurs et évolution des prix dans le secteur résidentiel de prestige.",
    date: "12 Octobre 2025",
    category: "Marché",
    image: IMAGES.misc1,
    content: `
      <p>Le marché immobilier est en perpétuelle évolution, et l'année 2025 s'annonce comme un tournant majeur pour le secteur résidentiel, en particulier dans les zones frontalières comme le Pays de Gex.</p>
      
      <h3>1. La stabilisation des prix</h3>
      <p>Après plusieurs années de hausse continue, nous observons une stabilisation des prix au mètre carré. Cette tendance est saine pour le marché, permettant aux acquéreurs de prendre des décisions plus réfléchies et aux vendeurs de trouver des acheteurs solvables plus rapidement.</p>
      
      <h3>2. L'exigence de la performance énergétique</h3>
      <p>Ce n'est plus une surprise, le DPE (Diagnostic de Performance Énergétique) est devenu le critère numéro un. Les biens classés A, B ou C se vendent avec une prime significative, tandis que les passoires thermiques nécessitent une stratégie de prix ajustée.</p>
      
      <h3>3. Le retour des acquéreurs internationaux</h3>
      <p>Avec la stabilisation de la situation économique mondiale, nous voyons un retour marqué de la clientèle internationale, particulièrement suisse et anglo-saxonne, à la recherche de biens de caractère avec des prestations haut de gamme.</p>

      <p>En conclusion, 2025 offre de belles opportunités pour ceux qui sont bien accompagnés. L'expertise locale est plus que jamais indispensable pour naviguer ces nouvelles réalités.</p>
    `
  },
  {
    id: 2,
    slug: "reussir-investissement-locatif",
    title: "Comment réussir son investissement locatif ?",
    excerpt: "Les clés pour choisir le bon emplacement, optimiser sa fiscalité et garantir une rentabilité durable.",
    date: "28 Septembre 2025",
    category: "Conseil",
    image: IMAGES.misc5,
    content: `
      <p>L'investissement locatif reste l'un des placements les plus sûrs pour se constituer un patrimoine. Cependant, la rentabilité n'est pas automatique. Voici les piliers d'un investissement réussi.</p>
      
      <h3>L'Emplacement, toujours l'emplacement</h3>
      <p>Dans le Pays de Gex, privilégiez les communes avec un accès rapide aux transports vers Genève. Divonne-les-Bains, Ferney-Voltaire et Saint-Genis-Pouilly restent des valeurs sûres avec une demande locative constante.</p>
      
      <h3>La Fiscalité : LMNP vs Foncier classique</h3>
      <p>Le statut de Loueur Meublé Non Professionnel (LMNP) offre souvent une fiscalité plus douce grâce à l'amortissement du bien. Il est crucial de faire une simulation avec un expert comptable avant de se lancer.</p>
      
      <h3>La qualité du bien</h3>
      <p>Les locataires d'aujourd'hui sont exigeants. Un bien rénové, lumineux et bien équipé se louera plus cher et attirera des profils plus stables. Ne négligez pas le "coup de cœur" même pour du locatif.</p>

      <blockquote>"Investir dans la pierre, c'est investir dans l'avenir, à condition de ne pas se tromper de présent."</blockquote>
    `
  },
  {
    id: 3,
    slug: "importance-dpe-vente",
    title: "L'importance du DPE dans la vente",
    excerpt: "Pourquoi le diagnostic de performance énergétique est devenu le critère numéro un pour les acheteurs.",
    date: "15 Septembre 2025",
    category: "Réglementation",
    image: IMAGES.misc3,
    content: `
      <p>Depuis la loi Climat et Résilience, le Diagnostic de Performance Énergétique (DPE) a changé de statut. Il n'est plus simplement informatif, il est opposable et détermine la valeur verte de votre bien.</p>
      
      <h3>Un impact direct sur le prix</h3>
      <p>Les études notariales montrent un écart de prix grandissant entre les biens performants et les biens énergivores. Dans certaines régions, la décote pour un bien classé F ou G peut atteindre 15%.</p>
      
      <h3>Les obligations de rénovation</h3>
      <p>Pour les bailleurs, l'interdiction progressive de louer les passoires thermiques impose des travaux. Pour les vendeurs, un audit énergétique est désormais obligatoire pour les maisons individuelles classées F ou G.</p>
      
      <h3>Comment améliorer son DPE avant la vente ?</h3>
      <p>Parfois, quelques travaux ciblés (isolation des combles, changement de système de chauffage) suffisent pour gagner une ou deux lettres et valoriser considérablement votre bien. Une estimation précise doit prendre en compte ce potentiel.</p>
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