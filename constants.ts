import { NavItem, Stat, Facility, LocationItem, RoomSize, Service, BlogPost, Commune } from './types';
import { Home, Key, TrendingUp, Search, PenTool, Building } from 'lucide-react';

export const COLORS = {
  primary: '#003064',
  text: '#003064',
  bg: '#FFFFFF'
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Services & Mandats', path: '/mandats' },
  { label: 'Nos Biens', path: '/nos-biens' },
  { label: 'À Propos', path: '/about' },
  { label: 'Partenaires', path: '/partenaires' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const IMAGES = {
  logo: "https://i.imgur.com/lwDyyfu.png",
  logoWhite: "https://i.imgur.com/lwDyyfu.png",
  // Photo officielle de Mickaël (crop carré, buste légèrement coupé) — servie en local
  heroAgent: "/images/micka-photo.jpg",
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

// Mapping des images hero par commune pour les pages programmatiques
// (estimation/, prix-immobilier/, frontalier/). Communes non-mappées →
// fallback /images/hero-pays-de-gex.jpg.
// Les images des 3 communes prioritaires sont actuellement des placeholders
// (copies du fallback) — à remplacer par de vraies photos quand disponibles.
const COMMUNE_HERO_IMAGES: Record<string, string> = {
  'ferney-voltaire': '/images/hero-ferney-voltaire.jpg',
  'saint-genis-pouilly': '/images/hero-saint-genis-pouilly.jpg',
  'divonne-les-bains': '/images/hero-divonne-les-bains.jpg',
};

export const getCommuneHeroImage = (slug: string): string =>
  COMMUNE_HERO_IMAGES[slug] ?? '/images/hero-pays-de-gex.jpg';

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
    date: "2026-05-05",
    category: "Marché",
    image: "/images/hero-pays-de-gex.jpg",
    content: `
    <p>Le marché immobilier du Pays de Gex reste sous tension en 2026. La demande excède l'offre sur la quasi-totalité des communes, avec des acheteurs issus principalement du bassin genevois : frontaliers, employés d'organisations internationales, cadres expatriés. Avec plus de 5 000 nouveaux arrivants par an dans le secteur et plus de 50 % des transactions sur les communes frontalières réalisées par des ménages percevant leurs revenus en Suisse, le résultat est sans appel : des prix qui résistent à la correction observée dans d'autres marchés français, même en contexte de remontée des taux.</p>

    <h2>Prix médians par commune (mai 2026)</h2>
    <p>Les données ci-dessous croisent plusieurs sources publiques — Figaro Immobilier, SeLoger, MeilleursAgents — et les transactions enregistrées sur les 12 derniers mois dans le secteur. Les médianes masquent toujours une dispersion : sur Divonne, par exemple, la fourchette appartements va de 3 716 à 9 260 €/m² selon l'emplacement, l'état et la vue.</p>
    <ul>
      <li><strong>Ferney-Voltaire</strong> — appartements : médian ~5 566 €/m² (Figaro Immo mai 2026), fourchette 4 983–6 452 €/m². Maisons : 4 800–5 000 €/m² (médian). Évolution : −3 % sur 1 an mais +17 % sur 5 ans.</li>
      <li><strong>Divonne-les-Bains</strong> — appartements : médian ~6 608 €/m² (SeLoger déc 2025), fourchette 3 716–9 260 €/m². Maisons : ~7 767 €/m². MeilleursAgents donne 7 077 €/m² tous biens confondus (janvier 2026).</li>
      <li><strong>Saint-Genis-Pouilly</strong> — appartements : ~4 940 €/m², fourchette 3 113–7 047 €/m² (MeilleursAgents mai 2026). Maisons : 5 200 à 7 500 €/m². La proximité immédiate du CERN soutient la demande locative et amortit toute correction.</li>
      <li><strong>Gex</strong> — médian global 4 442 €/m² (Figaro Immo avril 2026), −3 % sur 1 an, +13 % sur 5 ans. Maisons : 4 292 €/m², en progression de +8 % sur 1 an.</li>
      <li><strong>Prévessin-Moëns</strong> — médian appartements 5 366 €/m² (Figaro Immo avril 2026), stable sur 1 an, +8 % sur 5 ans. Maisons : 5 000 à 7 200 €/m².</li>
      <li><strong>Cessy / Ornex</strong> — 4 000 à 5 400 €/m² (appartements), 4 800 à 7 000 €/m² (maisons). Tickets d'entrée maison la plus accessible du secteur frontalier proche.</li>
      <li><strong>Thoiry / Crozet</strong> — 3 500 à 4 800 €/m² (appartements), 4 200 à 6 200 €/m² (maisons). Décote liée à l'éloignement de la douane.</li>
    </ul>

    <h2>Sources et méthodologie</h2>
    <p>Les chiffres ci-dessus sont des consolidations de portails grand public (Figaro Immo, SeLoger, MeilleursAgents) recoupées avec les bases de données notariales DVF (Demandes de Valeurs Foncières) accessibles via data.gouv.fr. Aucune source isolée ne fait autorité absolue sur ce marché atypique : les écarts inter-sources peuvent atteindre 15 à 20 % sur un même mois pour une même commune, notamment sur les biens d'exception (vue lac, accès golf, programmes neufs).</p>

    <h2>Ce qui explique ces niveaux de prix</h2>
    <p>Trois facteurs structurels maintiennent les prix élevés dans le Pays de Gex. D'abord, le différentiel de revenus entre frontaliers et résidents français classiques : un salarié travaillant à Genève dispose d'un pouvoir d'achat immobilier 40 à 60 % supérieur à la moyenne nationale. Ensuite, la rareté du foncier constructible dans un secteur contraint par les zones agricoles et naturelles — la pression urbanistique se reporte sur les biens existants. Enfin, la demande locative soutenue, portée par le renouvellement permanent des contrats de détachement des organisations internationales.</p>

    <blockquote>Le Pays de Gex est l'un des seuls marchés français où la demande en francs suisses coexiste avec la demande en euros. Ce double marché crée des dynamiques de prix qu'un agent non spécialisé ne peut pas anticiper correctement.</blockquote>

    <h2>Évolution des prix sur 5 ans : où va le marché ?</h2>
    <p>L'analyse glissante 2021–2026 fait apparaître trois dynamiques distinctes selon les communes. Les communes frontalières premium — Ferney-Voltaire et Prévessin-Moëns — affichent une progression de 17 % et 8 % respectivement sur 5 ans, malgré un léger tassement (−3 % à stable) sur les 12 derniers mois lié à la remontée des taux. Cette stabilisation marque une normalisation, pas un retournement.</p>
    <p>Gex et les communes du second cercle (Cessy, Ornex) ont mieux résisté en flux : +13 % sur 5 ans pour Gex, avec une accélération nette sur les maisons (+8 % sur 1 an). Le report de demande depuis les communes immédiatement frontalières — devenues inabordables pour une partie des primo-accédants frontaliers — alimente cette dynamique. Divonne-les-Bains reste à part : marché premium peu corrélé aux cycles classiques, soutenu par une clientèle internationale dont le pouvoir d'achat est peu sensible aux variations de taux.</p>
    <p>Les biens d'exception (villas avec vue lac à Divonne, programmes neufs à Ferney) ont enregistré des hausses dépassant 20 % sur 5 ans, et certaines transactions confidentielles franchissent les 12 000 €/m². Ce segment échappe largement aux statistiques publiées.</p>

    <h2>Marché locatif et rendement</h2>
    <p>Le marché locatif gessien reste le plus tendu de la région Auvergne-Rhône-Alpes. La demande locative excède structurellement l'offre sur l'ensemble des communes frontalières, alimentée par les contrats de détachement courts (3 à 5 ans, souvent renouvelés) des employés d'organisations internationales. Les loyers médians à Divonne-les-Bains s'établissent entre 29 et 30 €/m² selon le Figaro Immobilier (avril 2026), avec des pics au-delà sur les biens premium meublés.</p>
    <p>Pour un investisseur, les rendements bruts s'établissent à deux niveaux selon le positionnement. Les biens premium en centre-ville de Divonne ou cœur de Ferney plafonnent à 3–4 % brut, compensés par une plus-value patrimoniale historiquement forte et une vacance locative quasi nulle. Les produits plus standards (appartements 2/3 pièces dans le neuf récent à Saint-Genis-Pouilly, Cessy, Ornex) atteignent 4–5 % brut, avec une demande locative qui reste structurelle.</p>
    <p>Le profil-type du locataire frontalier — solvable, mobile, attendu pour 2 à 6 ans — réduit drastiquement les risques de défaut et de vacance. C'est l'un des rares marchés français où louer en meublé non professionnel reste fiscalement et opérationnellement intéressant sur le long terme.</p>

    <h2>Délais de vente moyens en 2026</h2>
    <ul>
      <li><strong>Appartements bien estimés</strong> : 28 à 45 jours en moyenne</li>
      <li><strong>Maisons bien estimées</strong> : 45 à 75 jours</li>
      <li><strong>Biens surestimés de 10 %+</strong> : délai multiplié par 3 à 4, avec décote finale systématique</li>
    </ul>
    <p>La précision de l'estimation initiale reste le facteur le plus déterminant sur le délai et le prix final obtenu. Un bien correctement positionné attire 3 à 5 visites qualifiées dans les 15 premiers jours ; un bien surestimé reçoit des visites curieuses, fait baisser son propre indicateur de fraîcheur sur les portails, et finit décoté de 8 à 12 % par rapport à l'estimation juste initiale.</p>

    <h2>Ce que ces prix signifient pour un vendeur</h2>
    <p>Connaître les fourchettes du marché ne suffit pas. Une estimation réalisée à distance, sur la base de données agrégées, peut s'écarter de 10 à 20 % de la valeur réelle dans ce secteur. <strong>Sur un bien à 600 000 €, cela représente entre 60 000 et 120 000 € d'écart</strong> — dans un sens ou dans l'autre. Sous-estimer son bien, c'est laisser de l'argent à l'acheteur. Surestimer, c'est immobiliser son capital pendant des mois avant de finir par décoter.</p>
    <p>L'estimation d'un bien dans le Pays de Gex doit intégrer sa commune exacte, sa distance aux axes frontaliers, son état énergétique (DPE), sa vue, son exposition, et les transactions comparables récentes dans un rayon de 500 mètres — pas dans un rayon départemental. C'est ce travail d'analyse fine qu'une estimation de terrain permet de réaliser, en moins de 48 heures, et sans engagement.</p>

    <h2>Prix au m² par commune — tableau comparatif 2026</h2>
    <p>Vue synthétique des prix médians observés sur les 12 derniers mois dans les principales communes du Pays de Gex, croisée avec les données des principaux observatoires immobiliers. Ce format complète les fourchettes détaillées listées plus haut.</p>
    <table>
      <thead>
        <tr>
          <th>Commune</th>
          <th>Appartement (médian)</th>
          <th>Maison (médian)</th>
          <th>Évolution 1 an</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Divonne-les-Bains</td><td>6 608 €/m²</td><td>7 767 €/m²</td><td>stable</td></tr>
        <tr><td>Ferney-Voltaire</td><td>5 566 €/m²</td><td>4 800 €/m²</td><td>−3 %</td></tr>
        <tr><td>Prévessin-Moëns</td><td>5 366 €/m²</td><td>5 300 €/m²</td><td>stable</td></tr>
        <tr><td>Saint-Genis-Pouilly</td><td>4 940 €/m²</td><td>5 000 €/m²</td><td>+2 %</td></tr>
        <tr><td>Gex</td><td>4 442 €/m²</td><td>4 292 €/m²</td><td>−3 %</td></tr>
        <tr><td>Cessy / Ornex</td><td>4 200 €/m²</td><td>4 900 €/m²</td><td>stable</td></tr>
        <tr><td>Thoiry / Crozet</td><td>3 800 €/m²</td><td>4 200 €/m²</td><td>stable</td></tr>
      </tbody>
    </table>
    <p>Ces chiffres constituent des ordres de grandeur. Le prix réel d'un bien dépend de son état, son exposition, son DPE, sa vue et les transactions comparables dans un rayon de 500 mètres. Sur un bien à 600 000 €, un écart d'estimation de 10 % représente 60 000 € — dans un sens ou dans l'autre.</p>
    <p><strong>Sources :</strong> Figaro Immobilier (mai 2026), SeLoger (décembre 2025), Meilleurs Agents (janvier 2026), PAP (juillet 2025).</p>
    <p><strong>Comment lire ce tableau ?</strong> Les prix médians sont des points centraux — la moitié des transactions se situe au-dessus, la moitié en dessous. Pour un bien spécifique, le positionnement à l'intérieur de la fourchette dépend de critères concrets : étage (avec ou sans ascenseur), exposition sud, vue dégagée, présence d'un extérieur, état du DPE, qualité de la copropriété. L'évolution sur 1 an est un signal de tendance, pas une garantie : un bien d'exception peut s'écarter significativement de la médiane de sa commune.</p>

    <h2>Demandez une estimation précise et gratuite</h2>
    <p>Si vous envisagez de vendre dans le Pays de Gex, la première étape rationnelle est d'obtenir une estimation chiffrée, justifiée, et adaptée à votre commune et à votre bien. Cette estimation est gratuite, confidentielle, et ne vous engage à rien — elle vous donne simplement le repère nécessaire pour décider de vendre, attendre, ou repositionner votre bien.</p>
    <p><a href="/estimation">Demander mon estimation gratuite →</a></p>
  `
  },
  {
    id: 2,
    slug: "immobilier-frontalier-pays-de-gex",
    title: "Immobilier dans le Pays de Gex : ce que les frontaliers doivent savoir",
    excerpt: "Vivre en France, travailler en Suisse : le Pays de Gex attire chaque année des milliers de nouveaux frontaliers. Voici ce qu'il faut comprendre sur ce marché immobilier atypique avant d'acheter ou de vendre.",
    date: "2026-05-05",
    category: "Frontalier",
    image: "/images/hero-pays-de-gex.jpg",
    content: `
    <p>Le Pays de Gex compte environ 100 000 habitants, dont près de 35 % travaillent en Suisse. Cette proportion de frontaliers — parmi les plus élevées d'Europe — structure intégralement le marché immobilier local : niveaux de prix, profils d'acheteurs, critères de choix, délais de transaction. Acheter ou vendre dans ce secteur sans maîtriser ces spécificités, c'est travailler avec une carte incomplète.</p>

    <h2>Les chiffres du marché frontalier 2026</h2>
    <p>Le marché gessien suit une trajectoire à part dans l'immobilier français. Les chiffres parlent d'eux-mêmes : 100 000 habitants dans le Pays de Gex, dont ~35 % travaillent côté suisse (sources : INSEE, Office cantonal de la statistique de Genève). Le segment prestige a enregistré une hausse de 12 % des transactions au premier trimestre 2025, principalement portée par des acheteurs CERN et organisations internationales. Plus de 50 % des transactions sur les communes immédiatement frontalières sont réalisées par des ménages percevant tout ou partie de leurs revenus en francs suisses.</p>
    <p>Le différentiel de pouvoir d'achat est l'explication clé. Un appartement de 90 m² à Ferney-Voltaire se négocie autour de 500 000 €. Le même logement côté suisse, à Genève ou dans le canton de Vaud, dépasse 1,2 million de francs suisses. Pour un frontalier payé en CHF avec une capacité d'emprunt calculée sur ses revenus suisses, résider en France représente une économie substantielle à qualité de vie équivalente — accès aux axes autoroutiers, temps de trajet maîtrisé, fiscalité française.</p>

    <blockquote>Le Pays de Gex n'est pas un marché immobilier français classique. C'est un marché de frontière, avec ses propres règles, ses propres acheteurs et ses propres dynamiques. Les méthodes d'estimation et de commercialisation doivent en tenir compte.</blockquote>

    <h2>Ce qui différencie un acheteur frontalier</h2>
    <p>Les frontaliers achètent avec des critères précis, souvent non négociables :</p>
    <ul>
      <li><strong>Proximité des axes frontaliers</strong> : D984, A40, douane de Bardonnex — chaque minute gagnée sur le trajet compte, surtout pour les profils avec présentiel obligatoire sur Genève</li>
      <li><strong>Qualité des établissements scolaires</strong> : les familles expatriées cherchent des communes avec lycées internationaux ou accès au réseau scolaire genevois transfrontalier</li>
      <li><strong>Fibre et connectivité</strong> : le télétravail partiel (2 à 3 jours / semaine) est désormais la norme dans les organisations internationales — un débit symétrique &gt; 500 Mbps est devenu un critère filtrant</li>
      <li><strong>Espaces extérieurs</strong> : jardins, terrasses, balcons exposés — la comparaison avec les logements suisses (souvent compacts) joue systématiquement en faveur des biens avec extérieur</li>
    </ul>

    <h2>Critères de sélection par profil d'acheteur</h2>
    <p>La clientèle frontalière n'est pas homogène. Trois profils dominants ciblent des communes différentes, avec des critères et des budgets distincts :</p>
    <p><strong>CERN et organisations internationales</strong> — Privilégient <em>Saint-Genis-Pouilly</em> (à 3 minutes du site du CERN, douane Meyrin à 5 min) et <em>Prévessin-Moëns</em> (calme résidentiel, accès rapide à la zone Genève-aéroport). Budget moyen 500–800 k€ pour un appartement familial ou une petite maison. Profil : cadres scientifiques ou administratifs, contrats de 3 à 6 ans souvent renouvelés, exigent un standard de finition équivalent au marché suisse.</p>
    <p><strong>Cadres finance et services genevois</strong> — Ciblent <em>Divonne-les-Bains</em> (lac, golf, casino, prestige) et <em>Ferney-Voltaire centre-ville</em> (vie de quartier, restaurants, communauté internationale dense). Budget 800 k€ à 2 M€. Profil : directeurs, banquiers privés, avocats — recherchent des biens d'exception avec vue, terrain, ou architecture de caractère.</p>
    <p><strong>Jeunes actifs frontaliers</strong> — Visent <em>Gex</em>, <em>Cessy</em>, <em>Ornex</em>, parfois <em>Thoiry</em>. Budget 300–550 k€ pour un T3/T4 ou une petite maison à rénover. Profil : 28–40 ans, premier achat, prêt en CHF souvent, sensibles au rapport qualité-prix. C'est le segment qui a le plus tiré la demande sur les communes du second cercle ces 3 dernières années.</p>

    <h2>Le marché locatif frontalier</h2>
    <p>Si vous êtes propriétaire bailleur ou investisseur, le marché locatif gessien est l'un des plus tendus de France. La demande locative excède structurellement l'offre sur toutes les communes frontalières. Les contrats de détachement courts (3 à 5 ans) génèrent un flux constant de locataires solvables. La vacance locative sur les biens correctement positionnés est quasi nulle.</p>
    <p>Les <strong>T2 et T3 sont les segments les plus rentables</strong>, avec des rendements bruts de 4 à 5 % sur les communes du second cercle (Gex, Cessy, Ornex), 3 à 4 % sur les premiums (Divonne centre, Ferney prestige). Les loyers médians varient de 18 €/m² (Gex, Thoiry) à 30 €/m² (Divonne, Ferney centre meublés), selon le standing et l'équipement.</p>
    <p>Pour un investisseur étranger ou suisse, le statut LMNP (Loueur Meublé Non Professionnel) reste fiscalement avantageux et opérationnellement simple. C'est l'un des rares marchés français où l'on peut louer rapidement, avec sécurité juridique, et conserver un cash-flow positif net après charges.</p>

    <h2>Vendre à un acheteur frontalier : les 3 erreurs à éviter</h2>
    <p><strong>Erreur n°1 — Diffuser uniquement sur les portails français.</strong> Un propriétaire qui se cantonne à SeLoger, Leboncoin et BienIci laisse passer 30 à 40 % de la demande qualifiée. Les frontaliers actifs sur le marché consultent <em>Properstar</em>, les portails suisses (Homegate, ImmoScout24), et les réseaux d'agents spécialisés zone frontalière. Une diffusion qui ne couvre pas ces canaux est mécaniquement amputée.</p>
    <p><strong>Erreur n°2 — Photographier au smartphone.</strong> Un acheteur frontalier compare votre bien avec des logements suisses dont les annonces sont systématiquement professionnalisées (photos HD, vidéo drone, parfois visite virtuelle). Une annonce visuellement faible est mécaniquement déclassée — pas parce que le bien est moins bien, mais parce que le standard visuel attendu est plus élevé.</p>
    <p><strong>Erreur n°3 — Description française uniquement.</strong> Une part significative des acheteurs frontaliers ne parle pas français comme langue principale (Allemands, Britanniques, Italiens, Néerlandais en relocalisation). Une description bilingue français-anglais double mécaniquement la couverture du bien sur les recherches multilingues.</p>
    <p>Sur les 240 ventes réalisées en 5 ans dans le Pays de Gex, une proportion significative impliquait des acheteurs travaillant à Genève, au CERN ou dans des organisations internationales — cette clientèle a des attentes précises et des processus d'achat différents des acquéreurs français classiques.</p>

    <h2>Les communes les mieux positionnées pour les frontaliers</h2>
    <ul>
      <li><strong>Ferney-Voltaire</strong> : 8 km de Genève, forte communauté internationale, toutes commodités, lycée international</li>
      <li><strong>Saint-Genis-Pouilly</strong> : CERN à proximité immédiate, demande locative très soutenue, écoles bilingues</li>
      <li><strong>Prévessin-Moëns</strong> : calme, résidentiel, accès rapide à la douane Bardonnex et au CERN</li>
      <li><strong>Ornex / Cessy</strong> : pavillonnaire, familles, rapport qualité-prix favorable, accès A40</li>
      <li><strong>Divonne-les-Bains</strong> : prestige, lac, golf, casino — profil cadre supérieur et expatrié senior</li>
      <li><strong>Gex</strong> : capitale du Pays de Gex, services complets, budget plus accessible, ski Jura à 20 min</li>
    </ul>

    <h2>Financement immobilier pour les frontaliers : ce que les banques françaises appliquent</h2>
    <p>Travailler en Suisse et emprunter en France : c'est possible, mais les règles diffèrent de celles appliquées aux résidents classiques. Voici ce qu'il faut savoir avant de se lancer.</p>
    <p><strong>La règle des 35 % appliquée au salaire net français.</strong> Les banques françaises calculent le taux d'endettement sur la base du salaire net imposable en France — c'est-à-dire le salaire brut suisse converti en euros, après abattement fiscal frontalier. Ce montant est généralement inférieur au salaire brut suisse, ce qui peut surprendre les primo-accédants frontaliers qui raisonnent en CHF.</p>
    <p><strong>La variation de change EUR/CHF.</strong> Les établissements prêteurs intègrent un risque de change dans leur analyse. Un frontalier payé en francs suisses qui emprunte en euros est exposé à la fluctuation EUR/CHF. Certaines banques appliquent une décote de 10 à 15 % sur les revenus CHF pour couvrir ce risque, d'autres exigent une assurance change. La meilleure parade reste souvent un prêt en CHF auprès d'une banque transfrontalière (BCGE, Banque de Savoie, CIC Est) qui élimine mécaniquement ce risque.</p>
    <p><strong>Les courtiers spécialisés font la différence.</strong> Plusieurs courtiers en crédit immobilier du Pays de Gex maîtrisent les spécificités du dossier frontalier : présentation du contrat de travail suisse, attestation de l'employeur, historique des fiches de paie en CHF, justificatif de permis G. Un bon courtier peut obtenir des conditions que la banque de détail classique ne propose pas, notamment sur les biens supérieurs à 600 000 €.</p>
    <p><strong>Apport recommandé.</strong> Dans le Pays de Gex, compte tenu des niveaux de prix, un apport de 20 à 30 % est généralement nécessaire pour obtenir des conditions compétitives. Sur un bien à 500 000 €, cela représente 100 000 à 150 000 € d'apport personnel — sans compter les frais de notaire (7 à 8 % dans l'ancien) à provisionner en sus.</p>
    <p><strong>Documents à préparer en amont.</strong> Un dossier frontalier complet inclut : 3 dernières fiches de paie suisses traduites en euros, contrat de travail suisse, attestation de l'employeur sur la pérennité du poste, copie du permis G (frontalier), 3 derniers relevés bancaires CHF et EUR, avis d'imposition français. Un dossier bien préparé peut faire gagner 2 à 3 semaines sur le délai d'instruction bancaire — délai souvent critique quand l'offre d'achat impose une condition suspensive à 45 jours.</p>

    <h2>Vendre dans le Pays de Gex : commencez par une estimation précise</h2>
    <p>Avant toute mise en marché, une estimation fine — qui intègre la spécificité frontalière, la demande locale réelle, et les transactions comparables récentes — vous évite à la fois de sous-vendre et d'immobiliser votre capital trop longtemps. Notre méthode inclut systématiquement la diffusion sur Properstar et les portails suisses spécialisés frontaliers, en plus des 40+ portails français.</p>
    <p><a href="/estimation">Demander mon estimation gratuite →</a></p>
  `
  },
  {
    id: 3,
    slug: "mandat-exclusif-ou-simple-pays-de-gex",
    title: "Mandat exclusif ou mandat simple : lequel choisir dans le Pays de Gex ?",
    excerpt: "Le choix du type de mandat conditionne la stratégie de vente, le délai, et souvent le prix final. Comparaison objective des deux options, 5 questions à poser à un agent, et coût réel d'un bien qui traîne sur le marché.",
    date: "2026-05-18",
    category: "Conseil",
    image: "/images/hero-pays-de-gex.jpg",
    content: `
    <p>La question revient dans presque chaque premier rendez-vous : faut-il signer un mandat exclusif ou confier son bien à plusieurs agences ? La réponse dépend moins d'une préférence générale que de la réalité du marché local et des objectifs du vendeur. Dans le Pays de Gex, les deux formules produisent des résultats très différents selon la situation. Cet article fait le tri, avec un calcul concret du coût d'opportunité d'une mise en marché ratée.</p>

    <h2>Ce que dit la loi Hoguet</h2>
    <p>Un mandat exclusif interdit au propriétaire de confier son bien à une autre agence pendant la durée du contrat, généralement 3 mois renouvelables. Un mandat simple autorise la multi-diffusion et la vente en direct par le propriétaire. Les deux formes sont encadrées par la loi Hoguet du 2 janvier 1970 et ses décrets d'application. L'agent commercial immobilier doit obligatoirement détenir une carte professionnelle (carte T pour les transactions) délivrée par la Chambre de Commerce et d'Industrie.</p>

    <h2>Les avantages concrets du mandat exclusif</h2>
    <ul>
      <li><strong>Engagement renforcé de l'agent</strong> : un mandat exclusif justifie un investissement en communication — shooting photo professionnel, vidéo drone 4K, campagne de diffusion sur 40+ portails, relance active du fichier acheteurs</li>
      <li><strong>Prix affiché cohérent</strong> : un bien sur plusieurs agences apparaît souvent à des prix différents (différentes commissions appliquées), ce qui génère de la méfiance chez les acheteurs et affaiblit la négociation</li>
      <li><strong>Suivi personnalisé</strong> : un seul interlocuteur coordonne les visites, les retours, et l'ajustement éventuel de stratégie tous les 15 jours</li>
      <li><strong>Délai généralement plus court</strong> : les statistiques internes montrent un délai moyen inférieur de 30 à 40 % sur les mandats exclusifs correctement travaillés</li>
      <li><strong>Confidentialité possible</strong> : un mandat exclusif permet une commercialisation off-market, hors portails publics, en sollicitant uniquement un fichier d'acquéreurs qualifiés — précieux pour les biens d'exception ou les situations sensibles (divorce, succession)</li>
    </ul>

    <h2>Quand le mandat simple peut avoir du sens</h2>
    <p>Le mandat simple reste pertinent dans certains cas précis : bien atypique avec une cible très restreinte, propriétaire ayant un réseau personnel solide, ou situation nécessitant une mise sur le marché immédiate sans délai de préparation. Dans ces cas, la multiplication des canaux compense l'absence de stratégie coordonnée. C'est aussi une option pour les vendeurs qui souhaitent garder la possibilité de vendre eux-mêmes à un acquéreur direct (famille, voisin, contact pro).</p>

    <blockquote>Dans le Pays de Gex, la demande est suffisamment soutenue pour qu'un bien correctement estimé et bien présenté se vende avec un mandat exclusif dans des délais raisonnables. La question n'est pas tant le type de mandat que la qualité de l'accompagnement derrière.</blockquote>

    <h2>Ce qui change vraiment la donne</h2>
    <p>Le type de mandat influence moins le résultat final que deux autres facteurs : la justesse de l'estimation initiale et la qualité de la présentation du bien. Un bien surestimé de 8 % avec mandat exclusif se vendra moins bien qu'un bien correctement estimé avec mandat simple. Et un bien photographié au smartphone restera invisible face aux concurrents mis en valeur avec des photos professionnelles et une vidéo drone — surtout face à une clientèle frontalière qui compare avec le standard visuel suisse.</p>
    <p>Ces deux éléments — estimation précise et mise en valeur premium — sont inclus systématiquement dans chaque mandat, quel que soit le type choisi, sans frais ajoutés pour le vendeur.</p>

    <h2>Les 5 questions à poser à un agent avant de signer</h2>
    <p>Avant d'apposer votre signature, posez systématiquement ces 5 questions. Les réponses vous diront en moins de 10 minutes si l'agent en face de vous travaille sérieusement votre dossier ou se contente de mettre une annonce en ligne :</p>
    <ol>
      <li><strong>Sur combien de portails le bien sera-t-il diffusé, et lesquels exactement ?</strong> Une réponse vague ("les principaux") est un drapeau rouge. La bonne réponse cite SeLoger, Leboncoin, BienIci, LogicImmo, Figaro Immobilier, Belles Demeures, Properstar (pour la clientèle frontalière), et parfois LuxuryEstate selon le standing. Soit 40+ portails au total.</li>
      <li><strong>Qui réalise les photos et la vidéo, et à quel coût pour le vendeur ?</strong> Un bon agent finance lui-même les photos professionnelles, la vidéo drone et le home staging virtuel — c'est son investissement, pas le vôtre. Si on vous facture ces prestations, c'est un signe que l'agent rentabilise mal son mandat.</li>
      <li><strong>Quel est votre délai moyen de vente constaté sur les 12 derniers mois, par segment de prix ?</strong> Un agent sérieux a ces chiffres en tête. Demandez le délai moyen sur les biens dans votre fourchette de prix, pas la moyenne globale qui ne veut rien dire.</li>
      <li><strong>Comment gérez-vous les retours négatifs de visiteurs et l'éventuel besoin d'ajuster le prix ?</strong> La bonne réponse inclut un point hebdomadaire, des comptes-rendus écrits de chaque visite, et une discussion factuelle (chiffres, pas opinions) tous les 21 jours sur la pertinence du prix affiché.</li>
      <li><strong>Quelles sont les conditions exactes de résiliation anticipée du mandat ?</strong> La loi vous protège après 3 mois sur un mandat exclusif. Mais les conditions varient selon l'agence. Lisez précisément la clause, posez la question explicitement, et ne signez pas si la réponse est évasive.</li>
    </ol>

    <h2>Ce que coûte vraiment un bien qui traîne sur le marché</h2>
    <p>Beaucoup de propriétaires sous-estiment le coût d'opportunité d'une vente qui traîne. Prenons un exemple concret : maison à 750 000 € qui aurait dû se vendre en 60 jours mais qui reste 6 mois sur le marché avant d'être finalement vendue à 690 000 € (décote de 8 % après plusieurs baisses de prix). Le coût réel ?</p>
    <ul>
      <li><strong>Décote finale</strong> : −60 000 € sur le prix initial</li>
      <li><strong>Crédit-pont ou double charge</strong> (si rachat en cours) : ~1 500 €/mois × 4 mois additionnels = 6 000 €</li>
      <li><strong>Taxe foncière, charges de copropriété, assurances</strong> sur 4 mois additionnels : ~3 000 à 5 000 €</li>
      <li><strong>Coût d'opportunité capital</strong> : 690 000 € qui auraient été placés à 3 % nets pendant 4 mois = 6 900 € de manque à gagner</li>
      <li><strong>Coût psychologique et logistique</strong> : 15 à 20 visites supplémentaires, organisation, déplacements, attente — non chiffrable mais réel</li>
    </ul>
    <p><strong>Total : entre 75 000 et 80 000 € de coût caché</strong> sur un bien qui aurait dû se vendre rapidement. Soit l'équivalent de 10 % du prix affiché. Cette analyse explique pourquoi la justesse de l'estimation initiale est l'investissement à plus fort retour qu'un vendeur peut faire — bien avant le choix du type de mandat.</p>

    <h2>Mandat exclusif et diffusion : comment ça marche en pratique</h2>
    <p>Dans le cadre d'un mandat exclusif chez un agent commercial indépendant connecté à un réseau professionnel (Netty, Hektor, ou équivalent), la diffusion se déroule en 4 étapes calibrées :</p>
    <p><strong>Phase 1 — Production des supports (J0 à J7)</strong> : shooting photo professionnel HD (15 à 25 clichés), vidéo drone 4K si le bien le justifie, plan 2D ou visite virtuelle 3D pour les biens de plus de 350 000 €. Rédaction de l'annonce en français et en anglais. Ces prestations sont entièrement financées par l'agent, sans facturation au vendeur.</p>
    <p><strong>Phase 2 — Diffusion en réseau (J7)</strong> : publication simultanée sur 40+ portails via le hub Netty (SeLoger, Leboncoin, BienIci, LogicImmo, Figaro Immobilier, Belles Demeures, Properstar pour la cible frontalière, LuxuryEstate pour les biens prestige). Activation des fichiers d'acquéreurs internes et partage inter-agences si pertinent.</p>
    <p><strong>Phase 3 — Marketing actif (J7 à J30)</strong> : campagnes Google Ads et Meta géolocalisées, mise en avant sur les réseaux sociaux de l'agent, sollicitation directe des contacts qualifiés du fichier (frontaliers, expatriés, investisseurs).</p>
    <p><strong>Phase 4 — Suivi et ajustement (J15 à J90)</strong> : point hebdomadaire avec le vendeur, comptes-rendus écrits de chaque visite, ajustement de la stratégie tous les 21 jours en fonction des retours visiteurs (prix, présentation, ciblage).</p>
    <p>Tout cela sans frais cachés pour le vendeur : la rémunération de l'agent est uniquement le pourcentage de commission au moment de la vente effective.</p>

    <h2>Calendrier légal et délais à connaître avant de signer un mandat</h2>
    <p>Le cadre réglementaire encadre précisément la durée et les conditions de résiliation des mandats immobiliers en France. Voici les points clés à vérifier dans votre projet de mandat avant la signature.</p>
    <p><strong>Durée initiale.</strong> Un mandat exclusif est généralement conclu pour une durée de 3 mois. Passé ce délai, il devient résiliable à tout moment avec un préavis de 15 jours par lettre recommandée avec accusé de réception envoyée à l'agence.</p>
    <p><strong>La période irrévocable de 3 mois.</strong> Pendant les 3 premiers mois, le mandat exclusif est irrévocable — sauf faute grave de l'agent. C'est la contrepartie de l'investissement initial réalisé (shooting photo, vidéo drone, campagne de diffusion sur 40+ portails). Cette période d'irrévocabilité est encadrée par l'article 78 du décret du 20 juillet 1972 pris en application de la loi de référence.</p>
    <p><strong>Le mandat simple n'a pas de durée minimale imposée.</strong> Il peut être révoqué à tout moment, sous réserve des conditions prévues au contrat. En pratique, cette flexibilité a un coût : un agent qui peut perdre le mandat du jour au lendemain investira mécaniquement moins dans la mise en valeur du bien — moins de photos pro, pas de vidéo drone, diffusion plus limitée.</p>
    <p><strong>Attention aux clauses de reconduction tacite.</strong> Certains mandats prévoient une reconduction automatique si le propriétaire ne notifie pas sa décision dans les délais prévus (souvent 30 jours avant l'échéance). Lisez attentivement la clause de reconduction avant de signer, et notez la date limite dans votre agenda dès la signature.</p>
    <p><strong>Le délai de rétractation : ce qui s'applique vraiment.</strong> Contrairement à ce que croient certains vendeurs, il n'existe pas de délai de rétractation légal pour un mandat immobilier signé en agence. Le délai de 14 jours du Code de la consommation s'applique uniquement aux mandats conclus à distance (téléphone, visioconférence) ou hors établissement (au domicile du vendeur). C'est un point souvent mal compris et qui peut générer des contestations.</p>

    <h2>Commencer par une estimation gratuite</h2>
    <p>Avant de décider du type de mandat, la première étape est de connaître la juste valeur de votre bien. Une estimation de terrain — visite sur site, analyse des comparables récents dans un rayon de 500 m, prise en compte des spécificités de votre commune — est gratuite, confidentielle, et ne vous engage à rien.</p>
    <p>C'est elle qui détermine si votre bien partira en mandat exclusif (avec une stratégie complète) ou en mandat simple, et dans tous les cas, à quel prix.</p>
    <p><a href="/estimation">Demander mon estimation gratuite →</a></p>
  `
  }
];

export const COMMUNES: Commune[] = [
  {
    slug: "ferney-voltaire",
    name: "Ferney-Voltaire",
    cp: "01210",
    distanceGeneve: "8 km",
    prixApptMin: 5200,
    prixApptMax: 6800,
    prixMaisonMin: 6500,
    prixMaisonMax: 9000,
    delaiMoyen: 35,
    pointsForts: [
      "8 km du centre de Genève — accès en 15 min",
      "Communauté internationale dense, lycée bilingue",
      "Tous commerces, restaurants, vie de quartier animée",
    ],
    descriptionMarche:
      "Porte d'entrée du Pays de Gex, Ferney-Voltaire est la commune la plus recherchée par les frontaliers genevois. Organisations internationales, communauté expatriée, commerces : un marché premium sous tension permanente.",
    frontalierContext:
      "À 8 km du centre de Genève et 15 minutes de l'ONU ou du CERN, Ferney-Voltaire concentre la demande des fonctionnaires internationaux et des cadres expatriés. La présence d'un lycée international et d'une communauté anglophone bien établie en fait le premier choix des familles en relocalisation depuis la Suisse.",
    evolutionPrix:
      "Depuis 2020, les prix à Ferney-Voltaire ont progressé de 22 % en moyenne, portés par l'appréciation du franc suisse et la pénurie de biens disponibles. Le marché neuf est quasi absent — les rares livraisons sont absorbées en quelques semaines. La tendance de fond reste haussière malgré les corrections observées sur d'autres marchés français.",
    voisines: ["saint-genis-pouilly", "prevessin-moens"],
  },
  {
    slug: "saint-genis-pouilly",
    name: "Saint-Genis-Pouilly",
    cp: "01630",
    distanceGeneve: "5 km",
    prixApptMin: 4500,
    prixApptMax: 5800,
    prixMaisonMin: 5200,
    prixMaisonMax: 7500,
    delaiMoyen: 40,
    pointsForts: [
      "Accès direct au CERN, douane Meyrin à 3 min",
      "Demande locative parmi les plus fortes du Pays de Gex",
      "Réseau scolaire international (primaire + collège)",
    ],
    descriptionMarche:
      "La commune du CERN. Saint-Genis-Pouilly bénéficie d'une demande locative et d'achat parmi les plus soutenues du Pays de Gex, portée par les milliers d'employés et visiteurs de l'organisation chaque année.",
    frontalierContext:
      "Saint-Genis-Pouilly jouxte directement le site du CERN et bénéficie d'accès frontaliers rapides vers Meyrin et Genève-centre. La rotation des contrats de détachement crée une demande locative structurelle forte — idéale pour l'investissement. Les acheteurs viennent massivement d'Allemagne, de Suisse alémanique et du Royaume-Uni.",
    evolutionPrix:
      "Saint-Genis-Pouilly enregistre l'une des plus fortes progressions du secteur sur 5 ans : +28 % sur les maisons, +18 % sur les appartements. La demande CERN est structurellement insensible aux cycles immobiliers classiques. Les maisons y sont plus rares qu'à Cessy ou Ornex, ce qui maintient une prime de localisation durable.",
    voisines: ["ferney-voltaire", "ornex"],
  },
  {
    slug: "divonne-les-bains",
    name: "Divonne-les-Bains",
    cp: "01220",
    distanceGeneve: "20 km",
    prixApptMin: 4800,
    prixApptMax: 6200,
    prixMaisonMin: 5800,
    prixMaisonMax: 8500,
    delaiMoyen: 55,
    pointsForts: [
      "Lac, golf, casino — qualité de vie premium",
      "Marché très sélectif, biens rares, plus-values élevées",
      "Clientèle cadre supérieur et expatrié senior",
    ],
    descriptionMarche:
      "Prestige, lac et golf : Divonne-les-Bains est le marché le plus premium du Pays de Gex. Cadres supérieurs, directeurs d'organisations, propriétés d'architecte — une clientèle à fort pouvoir d'achat qui arbitre entre Divonne et les communes vaudoises.",
    frontalierContext:
      "Divonne cible une clientèle de cadres supérieurs et de dirigeants travaillant à Genève, Nyon ou Lausanne. Le lac, le casino, le golf et la proximité du Jura font de la commune une alternative crédible aux communes vaudoises. Le profil acheteur est souvent en fin de carrière ou en relocalisation long terme.",
    evolutionPrix:
      "Le marché de Divonne-les-Bains se distingue par une forte proportion de biens haut de gamme et une clientèle internationale peu sensible aux variations de taux. Les prix ont progressé de 15 % depuis 2021. La rareté des biens d'exception — villas avec vue lac ou accès golf — crée des pics très au-dessus des médianes, certaines transactions dépassant 12 000 €/m².",
    voisines: ["gex", "cessy"],
  },
  {
    slug: "gex",
    name: "Gex",
    cp: "01170",
    distanceGeneve: "25 km",
    prixApptMin: 3800,
    prixApptMax: 5200,
    prixMaisonMin: 4500,
    prixMaisonMax: 6800,
    delaiMoyen: 50,
    pointsForts: [
      "Chef-lieu du Pays de Gex — tous services",
      "Accès direct aux pistes de ski du Jura",
      "Rapport qualité-prix le plus favorable du secteur",
    ],
    descriptionMarche:
      "Capitale du Pays de Gex, Gex offre un rapport qualité-prix favorable tout en bénéficiant des attraits du secteur : accès à la Suisse, environnement Jura, services complets. Un marché plus accessible que Ferney ou Saint-Genis, mais en tension croissante.",
    frontalierContext:
      "Gex attire les acheteurs qui souhaitent un cadre plus tranquille et plus grand pour le même budget. À 25 km de Genève, le trajet est compensé par des prix inférieurs de 20 à 30 % par rapport à Ferney-Voltaire. Les familles avec enfants scolarisés localement sont surreprésentées dans les transactions.",
    evolutionPrix:
      "Gex affiche la progression de prix la plus régulière du secteur, sans à-coups. La demande est soutenue par les jeunes actifs frontaliers et les familles en quête d'espace. La ville bénéficie d'un effet de rattrapage par rapport aux communes plus proches de la frontière — l'écart de prix s'est réduit de 15 % en 5 ans.",
    voisines: ["divonne-les-bains", "crozet"],
  },
  {
    slug: "prevessin-moens",
    name: "Prévessin-Moëns",
    cp: "01280",
    distanceGeneve: "6 km",
    prixApptMin: 4200,
    prixApptMax: 5600,
    prixMaisonMin: 5000,
    prixMaisonMax: 7200,
    delaiMoyen: 38,
    pointsForts: [
      "6 km de Genève, accès douane en 10 min",
      "Commune résidentielle calme, pavillonnaire",
      "Secteur scolaire réputé, écoles bilingues proches",
    ],
    descriptionMarche:
      "Entre Ferney-Voltaire et Saint-Genis-Pouilly, Prévessin-Moëns est une commune résidentielle prisée pour son calme et sa proximité frontalière. À 6 km de Genève, elle combine les atouts des deux communes voisines avec un marché encore légèrement plus accessible.",
    frontalierContext:
      "Prévessin-Moëns est souvent le choix des familles qui cherchent à concilier proximité genevoise et cadre pavillonnaire. Les acheteurs sont largement des frontaliers avec enfants, attirés par les écoles de qualité et la sécurité du quartier. Bien desservie par les axes D984 et A40.",
    evolutionPrix:
      "Prévessin-Moëns a connu une forte hausse entre 2021 et 2024, portée par le report de demande depuis Ferney-Voltaire. Les prix ont progressé de 20 % en 4 ans. Le marché est aujourd'hui stabilisé à un niveau élevé, avec peu de décote même sur les biens anciens bien situés.",
    voisines: ["ferney-voltaire", "saint-genis-pouilly"],
  },
  {
    slug: "cessy",
    name: "Cessy",
    cp: "01170",
    distanceGeneve: "12 km",
    prixApptMin: 4000,
    prixApptMax: 5400,
    prixMaisonMin: 4800,
    prixMaisonMax: 7000,
    delaiMoyen: 45,
    pointsForts: [
      "Grandes maisons avec jardins — espace rare à ce prix",
      "Cadre verdoyant, commune tranquille et familiale",
      "12 km de Genève, accès A40 rapide",
    ],
    descriptionMarche:
      "Commune pavillonnaire recherchée pour son cadre verdoyant et ses biens spacieux. Cessy séduit les familles en quête d'espace, avec de grandes maisons et des jardins — un profil rare à ce niveau de prix dans le Pays de Gex.",
    frontalierContext:
      "Cessy est le choix des frontaliers qui privilégient l'espace sur la proximité immédiate. Les maisons avec jardin y sont plus accessibles qu'à Ferney ou Prévessin. La commune est appréciée des acheteurs suisses cherchant l'équivalent des maisons de campagne vaudoises, à prix immobilier français.",
    evolutionPrix:
      "Cessy est l'une des communes du Pays de Gex où le rapport qualité-prix s'est le plus dégradé pour les acheteurs depuis 2020 (+19 % sur les maisons). La commune bénéficie d'un effet résidentiel premium qui attire aussi bien les Genevois que les retraités actifs cherchant un cadre tranquille.",
    voisines: ["ornex", "gex"],
  },
  {
    slug: "ornex",
    name: "Ornex",
    cp: "01710",
    distanceGeneve: "10 km",
    prixApptMin: 4000,
    prixApptMax: 5400,
    prixMaisonMin: 4800,
    prixMaisonMax: 7000,
    delaiMoyen: 42,
    pointsForts: [
      "Proche CERN et Saint-Genis-Pouilly",
      "Commune pavillonnaire, constructions récentes",
      "Premier achat patrimonial accessible dans le Pays de Gex",
    ],
    descriptionMarche:
      "Ornex est l'une des communes les plus recherchées pour l'accès au CERN et à Saint-Genis-Pouilly. Pavillonnaire, calme et encore accessible, elle attire une clientèle de jeunes cadres frontaliers cherchant à se constituer un premier patrimoine.",
    frontalierContext:
      "Ornex est bien positionnée pour les employés du CERN et les frontaliers travaillant sur le secteur de Meyrin. La commune offre un bon rapport qualité-prix avec des maisons récentes. Les acheteurs viennent souvent de Saint-Genis, en recherche d'un bien plus grand pour le même budget.",
    evolutionPrix:
      "Ornex suit de près la dynamique de Saint-Genis-Pouilly, avec un léger décalage à la baisse lié à la moindre densité de services. Les prix ont progressé de 17 % depuis 2021. La commune est particulièrement prisée pour les résidences neuves — plusieurs programmes récents ont été vendus avant livraison.",
    voisines: ["saint-genis-pouilly", "cessy"],
  },
  {
    slug: "thoiry",
    name: "Thoiry",
    cp: "01710",
    distanceGeneve: "18 km",
    prixApptMin: 3500,
    prixApptMax: 4800,
    prixMaisonMin: 4200,
    prixMaisonMax: 6200,
    delaiMoyen: 55,
    pointsForts: [
      "Cadre alpin exceptionnel, Jura à portée immédiate",
      "Biens spacieux parmi les prix les plus accessibles du secteur",
      "En développement — potentiel de plus-value à moyen terme",
    ],
    descriptionMarche:
      "Thoiry est la porte du Jura depuis le Pays de Gex. À 18 km de Genève, la commune offre un cadre naturel exceptionnel avec des biens spacieux à des prix inférieurs aux communes frontalières. Un marché en progression porté par les acheteurs qui arbitrent espace versus proximité.",
    frontalierContext:
      "Thoiry séduit les frontaliers en télétravail partiel, qui acceptent un trajet plus long en échange d'un cadre de vie supérieur. La commune est en développement avec de nouveaux programmes résidentiels. Les acheteurs viennent souvent de la région parisienne, attirés par les salaires suisses et le cadre alpin.",
    evolutionPrix:
      "Thoiry est le marché émergent du Pays de Gex. Les prix ont progressé de 25 % depuis 2020, partant d'une base plus faible. La tendance télétravail a structurellement renforcé l'attractivité de la commune. C'est aujourd'hui l'un des secteurs où le potentiel de plus-value à moyen terme est le plus élevé du Pays de Gex.",
    voisines: ["gex", "crozet"],
  },
  {
    slug: "crozet",
    name: "Crozet",
    cp: "01170",
    distanceGeneve: "22 km",
    prixApptMin: 3500,
    prixApptMax: 4800,
    prixMaisonMin: 4200,
    prixMaisonMax: 6200,
    delaiMoyen: 60,
    pointsForts: [
      "Commune préservée, biens de caractère et atypiques",
      "Marché de niche — rareté créatrice de valeur",
      "22 km de Genève, environnement naturel Jura intact",
    ],
    descriptionMarche:
      "Crozet est une commune préservée du Jura, entre Gex et la frontière. Marché de niche avec peu de transactions mais des biens d'exception. Idéale pour les acheteurs qui cherchent l'authenticité et le calme à distance raisonnable du bassin genevois.",
    frontalierContext:
      "Crozet attire une clientèle de connaisseurs : acheteurs cherchant une résidence principale de caractère ou une résidence secondaire proche de Genève. Le marché est peu liquide — il faut un agent connaissant la commune pour accéder aux rares biens disponibles, souvent vendus hors portails.",
    evolutionPrix:
      "Crozet est un marché de niche avec très peu de transactions annuelles. Les prix sont moins comparables d'une année à l'autre en raison du profil atypique des biens. La commune attire une clientèle spécifique cherchant des maisons de caractère ou des vues dégagées sur le Jura — des critères qui commandent une prime de 15 à 25 % par rapport aux médianes.",
    voisines: ["gex", "thoiry"],
  },
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
