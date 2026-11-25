import { NavItem, Stat, Facility, LocationItem, RoomSize, Service, BlogPost, Commune } from './types';
import { Home, Key, TrendingUp, Search, PenTool, Building } from 'lucide-react';

export const COLORS = {
  primary: '#011d41',
  text: '#011d41',
  bg: '#FFFFFF'
};

// Fiche Google de Mickaël Lima : nombre vérifié le 5 octobre 2026.
export const GOOGLE_REVIEWS_COUNT = 31;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Services & Mandats', path: '/mandats' },
  { label: 'Nos Biens', path: '/nos-biens/' },
  { label: 'À Propos', path: '/about/' },
  { label: 'Partenaires', path: '/partenaires/' },
  { label: 'Guides', path: '/blog/' },
  { label: 'Contact', path: '/contact/' },
];

export const IMAGES = {
  logo: "/images/mickael-lima-logo.png",
  logoWhite: "/images/mickael-lima-logo.png",
  // Photo officielle de Mickaël (crop carré, buste légèrement coupé): servie en local
  heroAgent: "/images/micka-photo.webp",
  heroBg: "https://madebydesignesia.com/themes/homely/images/demo/homepage-1.webp",
  cardImage: "https://madebydesignesia.com/themes/homely/images/demo/homepage-2.webp",
  misc1: "https://madebydesignesia.com/themes/homely/images/misc/s1.webp",
  misc2: "https://madebydesignesia.com/themes/homely/images/misc/s2.webp",
  misc3: "https://madebydesignesia.com/themes/homely/images/misc/s3.webp",
  misc4: "https://madebydesignesia.com/themes/homely/images/misc/s4.webp",
  misc5: "https://madebydesignesia.com/themes/homely/images/misc/s5.webp",
  videoBg: "https://madebydesignesia.com/themes/homely/images/background/1.webp",
  ctaBg: "/images/pool-cta-final.webp",
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
// (copies du fallback): à remplacer par de vraies photos quand disponibles.
const COMMUNE_HERO_IMAGES: Record<string, string> = {
  'ferney-voltaire': '/images/hero-ferney-voltaire.webp',
  'saint-genis-pouilly': '/images/hero-saint-genis-pouilly.webp',
  'divonne-les-bains': '/images/hero-divonne-les-bains.webp',
};

export const getCommuneHeroImage = (slug: string): string =>
  COMMUNE_HERO_IMAGES[slug] ?? '/images/hero-pays-de-gex.webp';

// Visuels partagés par le slider de l'accueil et les cartes du comparatif.
// objectPosition garde le point d'intérêt visible dans les conteneurs verticaux.
export const COMMUNE_CARD_IMAGES: Record<
  string,
  {
    src: string;
    mobileSrc?: string;
    objectPosition?: string;
    /** Dimensions de src et largeurs des variantes « -<largeur>.webp » générées à côté. */
    width?: number;
    height?: number;
    variants?: number[];
  }
> = {
  'ferney-voltaire': {
    src: '/images/slider-ferney-voltaire.jpg',
    objectPosition: '50% 50%',
  },
  'saint-genis-pouilly': {
    src: '/images/slider-saint-genis-pouilly.webp',
    width: 1280,
    height: 962,
    variants: [960],
    objectPosition: '50% 50%',
  },
  'divonne-les-bains': {
    src: '/images/slider-divonne-les-bains.webp',
    width: 1280,
    height: 727,
    variants: [960],
    objectPosition: '50% 50%',
  },
  gex: {
    src: '/images/slider-gex.webp',
    width: 1280,
    height: 853,
    variants: [960],
    objectPosition: '50% 50%',
  },
  'prevessin-moens': {
    src: '/images/slider-prevessin-moens.webp',
    width: 1280,
    height: 960,
    variants: [960],
    mobileSrc: '/images/slider-prevessin-moens-mobile.webp',
    objectPosition: '50% 50%',
  },
  cessy: {
    src: '/images/slider-cessy.webp',
    width: 1280,
    height: 720,
    variants: [960],
    objectPosition: '50% 50%',
  },
  ornex: {
    src: '/images/slider-ornex.webp',
    width: 2048,
    height: 1361,
    variants: [960, 1280],
    objectPosition: '50% 50%',
  },
  thoiry: {
    src: '/images/slider-thoiry.webp',
    width: 1280,
    height: 960,
    variants: [960],
    objectPosition: '62% 50%',
  },
  crozet: {
    src: '/images/slider-crozet.webp',
    objectPosition: '50% 50%',
  },
};

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
    title: "Prix au m² dans le Pays de Gex en 2026 : les repères des notaires",
    excerpt: "Prix réellement signés, dates des observations et écarts entre communes : les repères notariaux à connaître avant d'estimer un bien dans le Pays de Gex.",
    date: "2026-05-05",
    category: "Marché",
    image: "/images/blog/prix-m2-pays-de-gex-2026.webp",
    content: `
    <p><em>Mise à jour du 29 septembre 2026.</em> Un prix au mètre carré n'a de sens qu'avec sa source, sa période et le type de bien observé. Les prix ci-dessous proviennent de ventes enregistrées par les notaires. Ils ne sont ni des prix d'annonce, ni des estimations pour un logement précis.</p>

    <h2>Le repère le plus solide pour le Pays de Gex</h2>
    <p>Sur les ventes du 1er janvier au 31 décembre 2025, les Notaires de France relèvent un <strong>prix médian de 4 800 €/m² pour les appartements anciens</strong> dans le Pays de Gex, en hausse de <strong>3,7 % sur un an</strong>. Pour les maisons anciennes, la médiane porte sur le <strong>prix total : 598 400 €</strong>, en légère baisse de <strong>0,3 % sur un an</strong>. La maison médiane vendue mesurait 130 m² habitables sur 710 m² de terrain. Il serait trompeur de diviser son prix par 130 pour en déduire un prix au m² applicable à toutes les maisons : la valeur du terrain et les caractéristiques du bien comptent aussi.</p>
    <p>Source : <a href="https://cin-lyon.notaires.fr/wp-content/uploads/2026/03/CID_light01_2025T4.pdf">Notaires de France, conjoncture de l'Ain, ventes 2025</a>.</p>

    <h2>Des écarts réels d'une commune à l'autre</h2>
    <p>Le baromètre notarial de mai 2025 publie les médianes suivantes pour les <strong>appartements anciens</strong> dans cinq communes du secteur.</p>
    <table>
      <thead><tr><th>Commune</th><th>Appartement ancien, prix médian au m²</th><th>Évolution sur un an à la date du baromètre</th></tr></thead>
      <tbody>
        <tr><td>Divonne-les-Bains</td><td>5 640 €</td><td>+1,6 %</td></tr>
        <tr><td>Prévessin-Moëns</td><td>5 210 €</td><td>+6,8 %</td></tr>
        <tr><td>Ferney-Voltaire</td><td>4 700 €</td><td>+9,4 %</td></tr>
        <tr><td>Gex</td><td>4 490 €</td><td>+7,3 %</td></tr>
        <tr><td>Saint-Genis-Pouilly</td><td>4 480 €</td><td>+4,4 %</td></tr>
      </tbody>
    </table>
    <p>Source : <a href="https://cin-lyon.notaires.fr/wp-content/uploads/2025/07/Barometre-de-limmobilier-Ain-mai-2025.pdf">Chambre interdépartementale des notaires, baromètre de l'Ain, mai 2025</a>. Les médianes d'une commune et de l'ensemble du Pays de Gex portent sur des périodes différentes ; elles ne doivent pas être soustraites pour calculer une hausse ou une décote récente.</p>

    <h2>Comment utiliser ces données pour estimer un bien ?</h2>
    <p>Une médiane signifie que la moitié des ventes du groupe considéré se situe au-dessus et l'autre moitié au-dessous. Elle ne dit pas qu'un appartement donné vaut exactement ce montant. L'adresse, la surface, l'étage, l'état du logement, le DPE, l'extérieur et la période de vente changent le résultat. Les communes absentes du tableau ne disposent pas ici d'une médiane notariale comparable publiée dans ce baromètre ; leur attribuer un chiffre précis créerait une fausse précision.</p>
    <p>Les ventes effectives peuvent aussi se consulter dans l'<a href="https://app.dvf.etalab.gouv.fr/">application publique DVF</a>. Pour construire un comparatif utile, il faut sélectionner des transactions récentes et réellement comparables, puis écarter les ventes atypiques, les dépendances et les écarts de surface. Les prix affichés sur les portails immobiliers renseignent sur l'offre concurrente, mais ils ne prouvent pas le prix finalement signé.</p>
    <p>Le calcul d'un écart d'estimation reste simple : sur un bien à 600 000 €, <strong>10 % représentent 60 000 €</strong>. Ce calcul illustre l'enjeu ; il ne signifie pas qu'une estimation en ligne se trompe systématiquement de 10 %.</p>
    <p><a href="/estimation/">Demander une estimation adaptée à mon bien →</a></p>
  `
  },
  {
    id: 2,
    slug: "immobilier-frontalier-pays-de-gex",
    title: "Immobilier dans le Pays de Gex : ce que les frontaliers doivent savoir",
    excerpt: "Vivre en France et travailler en Suisse : chiffres Insee, repères notariaux et points à examiner avant d'acheter, d'investir ou de vendre dans le Pays de Gex.",
    date: "2026-05-05",
    category: "Frontalier",
    image: "/images/blog/immobilier-frontalier-pays-de-gex.webp",
    content: `
    <p><em>Mise à jour du 29 septembre 2026.</em> Le marché gessien est étroitement lié à l'emploi en Suisse. Pour le décrire correctement, il faut distinguer la part des frontaliers parmi les <strong>habitants</strong> de leur part parmi les <strong>personnes en emploi</strong> : ce ne sont pas les mêmes populations.</p>

    <h2>Population et emploi frontalier : les chiffres vérifiables</h2>
    <p>La communauté d'agglomération du Pays de Gex comptait <strong>107 091 habitants en 2023</strong> selon l'Insee. Dans son étude de référence sur l'emploi frontalier, l'Insee dénombrait <strong>29 444 résidents travaillant en Suisse en 2018</strong>, soit <strong>62,0 % des actifs occupés résidant dans l'intercommunalité</strong>. Un travailleur frontalier n'est donc pas « 62 % des habitants » : les enfants, retraités et autres personnes sans emploi ne figurent pas au dénominateur. L'Observatoire des territoires recensait pour sa part plus de 30 000 travailleurs exerçant en Suisse dans le Pays de Gex en 2020.</p>
    <p>Sources : <a href="https://www.insee.fr/fr/statistiques/1405599?geo=EPCI-240100750+COM-01173">Insee, comparateur de territoires, population 2023</a> ; <a href="https://www.insee.fr/fr/statistiques/6444379">Insee, travailleurs frontaliers, recensement 2018</a> ; <a href="https://www.observatoire-des-territoires.gouv.fr/sites/default/files/2025-03/202411_zoom_transfrontalier_1.pdf">Observatoire des territoires, données 2020</a>.</p>

    <h2>Ce que ces flux changent pour l'immobilier</h2>
    <p>La proximité du lieu de travail, les temps de trajet aux heures de pointe, l'accès aux écoles et la possibilité de télétravailler pèsent dans le choix d'un logement. Ces critères varient selon l'employeur, le lieu exact de travail et la composition du ménage. Ferney-Voltaire, Prévessin-Moëns et Saint-Genis-Pouilly ne répondent pas aux mêmes besoins que Divonne-les-Bains, Gex ou les communes plus éloignées de la frontière.</p>
    <p>Les prix confirment que le secteur est cher, sans que tous les biens suivent la même trajectoire. Sur les ventes de 2025, les notaires situent la médiane des <strong>appartements anciens du Pays de Gex à 4 800 €/m² (+3,7 % en un an)</strong> et celle des <strong>maisons anciennes à 598 400 € (−0,3 %)</strong>. Ces chiffres couvrent l'ensemble du secteur et des types de biens différents ; ils ne constituent pas un prix applicable à une adresse particulière. Source : <a href="https://cin-lyon.notaires.fr/wp-content/uploads/2026/03/CID_light01_2025T4.pdf">Notaires de France, conjoncture 2025 de l'Ain</a>.</p>

    <h2>Acheter avec des revenus en francs suisses</h2>
    <p>Le Haut Conseil de stabilité financière fixe en principe un <strong>taux d'effort maximal de 35 %</strong> des revenus pour l'octroi d'un crédit immobilier en France, assurance emprunteur comprise ; des dérogations encadrées existent. Pour un dossier payé en francs suisses, la banque examine aussi la stabilité des revenus et le risque de change. La méthode de conversion, les garanties et l'apport demandés dépendent de l'établissement et du dossier : aucun apport de 20 ou 30 % n'est imposé à tous les frontaliers. Source : <a href="https://www.economie.gouv.fr/hcsf/mesures/mesure-relative-loctroi-de-credits-immobiliers">HCSF, mesure relative à l'octroi des crédits immobiliers</a>.</p>
    <p>Avant de signer une offre, demandez à plusieurs prêteurs ou à un courtier quelles pièces ils exigent, quel revenu en euros ils retiendront, quel taux de change ils appliqueront et combien coûtera le crédit dans les scénarios de change défavorables. Un prêt libellé en francs suisses ne supprime pas tous les risques : ceux-ci dépendent notamment de la devise des revenus pendant toute la durée de remboursement.</p>

    <h2>Investir ou vendre : calculer plutôt que promettre</h2>
    <p>Un rendement brut se calcule en divisant le loyer annuel hors charges par le prix total d'acquisition, frais compris. Il faut ensuite retrancher les charges, la fiscalité, les travaux et une hypothèse de vacance pour approcher le rendement net. Un loyer d'annonce, même élevé, ne garantit ni une location immédiate ni un « cash-flow positif ».</p>
    <p>La location meublée non professionnelle demande aussi un calcul fiscal au cas par cas. Depuis les ventes réalisées à compter du 15 février 2025, les amortissements déduits au régime réel sont en principe pris en compte dans le calcul de la plus-value à la revente. Source : <a href="https://www.impots.gouv.fr/particulier/questions/je-vends-un-bien-immobilier-donne-en-location-meublee-comment-se-calcule-la">Direction générale des finances publiques, plus-value en LMNP</a>.</p>
    <p>Pour vendre, confrontez les transactions comparables et les annonces concurrentes, puis choisissez les canaux de diffusion utiles à votre bien. Une traduction anglaise ou une présence sur un portail suisse peut aider certains dossiers, mais il n'existe pas de pourcentage public fiable permettant d'affirmer que leur absence fait perdre une part fixe des acheteurs.</p>
    <p><a href="/estimation/">Faire étudier mon projet immobilier →</a></p>
  `
  },
  {
    id: 3,
    slug: "mandat-exclusif-ou-simple-pays-de-gex",
    title: "Mandat exclusif ou mandat simple : lequel choisir dans le Pays de Gex ?",
    excerpt: "Mandat exclusif ou simple : les règles de résiliation, les engagements à comparer et un exemple chiffré pour choisir en connaissance de cause.",
    date: "2026-05-18",
    category: "Conseil",
    image: "/images/blog/mandat-exclusif-ou-simple-pays-de-gex.webp",
    content: `
    <p><em>Mise à jour du 29 septembre 2026.</em> Le mandat simple et le mandat exclusif organisent différemment la vente d'un bien. Leur efficacité dépend du prix demandé, de la présentation du logement, de la diffusion prévue et du suivi effectivement assuré. Aucun délai de vente garanti ne découle à lui seul du type de mandat.</p>

    <h2>Ce que chaque mandat autorise</h2>
    <p>Avec un mandat simple, le vendeur peut confier le bien à plusieurs professionnels et, selon les termes signés, le vendre directement. Avec une clause d'exclusivité, il s'engage à respecter les restrictions expressément prévues au contrat. Les honoraires, la durée, les modalités de résiliation et la diffusion doivent être lus avant signature. Un agent commercial intervient sous l'habilitation d'un titulaire de carte professionnelle ; il ne détient pas lui-même nécessairement une carte T. Source : <a href="https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/professionnels-de-limmobilier-les-regles-connaitre">DGCCRF, règles applicables aux professionnels de l'immobilier</a>.</p>

    <h2>Le délai de résiliation prévu par les textes</h2>
    <p>Selon l'<a href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000030782471/">article 78 du décret du 20 juillet 1972</a>, un mandat comportant une clause d'exclusivité ou une clause pénale peut, <strong>passé trois mois après sa signature</strong>, être dénoncé à tout moment par chaque partie avec un <strong>préavis d'au moins quinze jours</strong> notifié par lettre recommandée avec demande d'avis de réception. Le contrat doit aussi être limité dans le temps et détailler ses clauses. La date d'effet et une éventuelle reconduction se vérifient dans le mandat signé.</p>
    <p>Pour un mandat conclu à distance ou hors établissement, notamment lors d'une signature au domicile du vendeur, le droit de la consommation prévoit en principe un <strong>délai de rétractation de quatorze jours</strong>. La signature en agence ne bénéficie pas, du seul fait qu'il s'agit d'un mandat immobilier, de ce même droit. Source : <a href="https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/professionnels-de-limmobilier-les-regles-connaitre">DGCCRF, contrats immobiliers à distance et hors établissement</a>.</p>

    <h2>Choisir sur des engagements vérifiables</h2>
    <p>Avant de signer, demandez un plan de commercialisation adapté au logement : qualité des photographies, informations disponibles dans l'annonce, portails réellement utilisés, calendrier de mise en ligne et manière de restituer les retours de visite. Le nombre brut de portails n'est pas, à lui seul, une mesure de la qualité de la diffusion. Il dépend des abonnements et du réseau du professionnel ; mieux vaut obtenir une liste contractuelle qu'une promesse générale.</p>
    <ol>
      <li><strong>Quel prix conseillez-vous, sur quelles ventes comparables et à quelle date ?</strong></li>
      <li><strong>Quels supports seront créés et qui en paie le coût ?</strong></li>
      <li><strong>Sur quels canaux précis l'annonce sera-t-elle publiée ?</strong></li>
      <li><strong>À quelle fréquence recevrai-je les retours de visites et un bilan de la stratégie ?</strong></li>
      <li><strong>Quelle est la durée du mandat et comment puis-je y mettre fin ?</strong></li>
    </ol>

    <h2>Le coût d'une vente retardée : un exemple, pas une statistique</h2>
    <p>Supposons une maison affichée à <strong>750 000 €</strong>, puis vendue <strong>690 000 €</strong> après plusieurs ajustements : l'écart entre les deux montants est de <strong>60 000 €, soit 8 % du prix initial</strong>. Cet écart n'établit pas que le mandat ou la durée de commercialisation en est la cause : le prix initial pouvait être trop élevé, le marché pouvait évoluer ou le bien présenter des caractéristiques difficiles à valoriser.</p>
    <p>Si la vente dure quatre mois de plus que prévu et qu'un financement relais coûte 1 500 € par mois, ce financement ajoute <strong>6 000 €</strong> dans cet exemple. Il ne faut additionner ni une taxe foncière annuelle fictive ni un rendement de placement hypothétique comme s'il s'agissait de frais certains pour tous les vendeurs. Le calcul réel dépend des charges et de la situation du propriétaire.</p>
    <p>La meilleure comparaison entre deux propositions de mandat porte donc sur le prix justifié par les ventes, la stratégie écrite, les honoraires et les conditions de sortie. Une estimation de terrain permet de poser cette base avant de choisir la formule.</p>
    <p><a href="/estimation/">Demander une estimation de mon bien →</a></p>
  `
  },
  {
    id: 4,
    slug: "estimation-en-ligne-ou-a-domicile-pays-de-gex",
    title: "Estimation en ligne ou à domicile : que valent les simulateurs dans le Pays de Gex ?",
    excerpt: "Quatre simulateurs de prix consultés le même jour pour Gex : jusqu'à 1 270 €/m² d'écart sur les maisons. Ce que chaque méthode d'estimation apporte, et ses limites.",
    date: "2026-11-16",
    category: "Conseil",
    image: "/images/editorial/marche-pays-de-gex.webp",
    content: `
    <p><em>Relevé du 16 novembre 2026.</em> Une estimation en ligne donne un ordre de grandeur en quelques minutes ; elle ne connaît ni l'état du logement, ni sa vue, ni son terrain. Une estimation à domicile, comme celle que réalise Mickaël Lima dans le Pays de Gex, part d'une visite et de ventes comparables, mais demande un rendez-vous. Pour une même commune, les simulateurs consultés le même jour affichent des prix moyens qui diffèrent de 11 % pour les appartements et de près de 30 % pour les maisons.</p>

    <h2>Le test : quatre simulateurs, une commune, le même jour</h2>
    <p>J'ai relevé le 16 novembre 2026 le prix moyen au mètre carré affiché pour Gex (01170) sur quatre sites publics, sans saisir d'adresse ni de caractéristiques. La dernière ligne rappelle la médiane des ventes enregistrées dans la base publique DVF, utilisée sur les <a href="/prix-immobilier/gex/">pages de prix de ce site</a>.</p>
    <table>
      <thead>
        <tr><th>Source</th><th>Période affichée</th><th>Appartements</th><th>Maisons</th></tr>
      </thead>
      <tbody>
        <tr><td><a href="https://www.efficity.com/prix-immobilier-m2/v_gex_01170/">Efficity</a></td><td>Octobre 2026</td><td>4 320 €/m²</td><td>4 270 €/m²</td></tr>
        <tr><td><a href="https://realadvisor.fr/fr/prix-m2-immobilier/01170-gex">RealAdvisor</a></td><td>Octobre 2026</td><td>4 522 €/m²</td><td>4 962 €/m²</td></tr>
        <tr><td><a href="https://www.pap.fr/vendeur/prix-m2/gex-01170-g6829">PAP</a></td><td>1er novembre 2026</td><td>4 617 €/m²</td><td>5 519 €/m²</td></tr>
        <tr><td><a href="https://www.squarehabitat.fr/prix-immobilier/auvergne-rhone-alpes/ain/gex-01170">Square Habitat</a></td><td>Octobre 2026</td><td>4 814 €/m²</td><td>5 540 €/m²</td></tr>
        <tr><td><a href="https://www.data.gouv.fr/datasets/statistiques-dvf">Médiane DVF</a></td><td>Ventes 2021–2025</td><td>4 399 €/m²</td><td>5 175 €/m²</td></tr>
      </tbody>
    </table>
    <p>Entre le simulateur le plus bas et le plus haut, l'écart est de <strong>494 €/m² pour les appartements</strong> (11 %) et de <strong>1 270 €/m² pour les maisons</strong> (30 %). Rapporté à une surface, cela représente environ <strong>34 600 € pour un appartement de 70 m²</strong> et <strong>152 400 € pour une maison de 120 m²</strong>. Ces surfaces sont des exemples de calcul, pas des biens réels.</p>
    <p>Ces chiffres ne sont pas faux pour autant : chaque site utilise ses propres données (ventes enregistrées, annonces, modèle statistique), sa propre période et sa propre définition de la moyenne. L'écart montre surtout qu'un prix moyen par commune ne suffit pas à fixer le prix d'un logement précis, en particulier pour une maison, où le terrain, la vue et l'état pèsent davantage.</p>

    <h2>Trois façons d'estimer un bien, avec leurs limites</h2>
    <p><strong>Le simulateur en ligne.</strong> Gratuit et immédiat, il convient pour situer un ordre de grandeur ou suivre une tendance. Sa limite : il ne visite pas le bien. Travaux, étage, exposition, nuisances, vue sur le Jura ou le Mont-Blanc, qualité de la copropriété lui échappent, et le test ci-dessus montre que deux simulateurs peuvent diverger fortement. La plupart demandent vos coordonnées pour afficher un résultat détaillé, transmises ensuite à des professionnels.</p>
    <p><strong>L'avis de valeur d'un professionnel de la transaction.</strong> Agent immobilier ou agent commercial, il visite le logement et le compare à des ventes récentes du secteur. C'est la méthode que je pratique : après la visite, je transmets une estimation argumentée sous 24 h. Ses limites sont réelles : il faut un rendez-vous, et le professionnel qui estime espère en général obtenir le mandat de vente. Un prix flatteur peut servir à le décrocher. Pour s'en prémunir, demandez la liste des ventes comparables retenues, avec leurs dates, et comparez deux ou trois avis.</p>
    <p><strong>L'expertise d'un expert immobilier ou d'un notaire.</strong> Payante et sur devis, elle aboutit à un rapport écrit qui engage son auteur. Elle s'impose dans les situations où la valeur doit être opposable : succession, divorce, donation, contentieux fiscal. Sa limite : son coût et son délai, rarement justifiés pour une simple mise en vente.</p>

    <h2>Laquelle choisir selon votre situation</h2>
    <ul>
      <li><strong>Vous êtes curieux, sans projet daté :</strong> un simulateur suffit, à condition d'en consulter plusieurs et de retenir une fourchette plutôt qu'un chiffre.</li>
      <li><strong>Vous vendez dans les douze mois :</strong> une estimation à domicile fondée sur des ventes comparables, idéalement auprès de deux professionnels.</li>
      <li><strong>La valeur doit être opposable à un tiers</strong> (administration fiscale, cohéritiers, ex-conjoint) : une expertise ou un avis notarié.</li>
      <li><strong>Votre bien est atypique</strong> (grande parcelle, vue, prestations haut de gamme) : la visite est indispensable, les moyennes communales étant peu représentatives.</li>
    </ul>

    <h2>Méthode et limites de ce relevé</h2>
    <p>Les quatre prix ont été lus sur les pages publiques de chaque site le 16 novembre 2026, pour la commune de Gex uniquement. Il s'agit d'un relevé ponctuel sur une seule commune : il ne permet pas de classer ces simulateurs ni de dire lequel est le plus juste. Leurs chiffres sont mis à jour régulièrement et peuvent avoir changé depuis. La médiane DVF porte sur les ventes de 2021 à 2025 et n'est donc pas directement comparable à un prix moyen d'octobre 2026.</p>
    <p>Pour les autres communes, les repères par commune sont détaillés dans le <a href="/prix-immobilier/pays-de-gex/">comparatif des prix du Pays de Gex</a> et dans l'article sur les <a href="/blog/prix-m2-pays-de-gex-2026/">prix au m² relevés par les notaires</a>.</p>
    <p><a href="/estimation/">Demander une estimation à domicile →</a></p>
  `
  },
  {
    id: 5,
    slug: "agent-immobilier-independant-ou-agence-pays-de-gex",
    title: "Agent immobilier indépendant ou agence : que choisir pour vendre dans le Pays de Gex ?",
    excerpt: "Agence avec vitrine, agent commercial indépendant ou vente entre particuliers : ce qui change vraiment pour le vendeur, ce qui ne change pas, et comment vérifier les habilitations.",
    date: "2026-11-23",
    category: "Conseil",
    image: "/images/editorial/faq-pays-de-gex.webp",
    content: `
    <p><em>Publié le 23 novembre 2026.</em> Pour vendre une maison ou un appartement dans le Pays de Gex, trois voies coexistent : confier le bien à une agence avec vitrine, à un agent immobilier indépendant, ou le vendre soi-même. Le bon choix dépend moins de l'étiquette que de la personne qui suivra réellement le dossier, de sa connaissance des ventes du secteur et de ce qu'elle s'engage à faire par écrit.</p>

    <h2>Trois façons de vendre, trois organisations</h2>
    <p><strong>L'agence avec vitrine.</strong> Elle dispose d'un local, souvent de plusieurs négociateurs, et d'un fichier d'acquéreurs. Le vendeur peut avoir plusieurs interlocuteurs selon les étapes : prise de mandat, visites, négociation, suivi chez le notaire.</p>
    <p><strong>L'agent immobilier indépendant.</strong> Le terme recouvre surtout les agents commerciaux immobiliers, parfois appelés mandataires. Ils travaillent pour le compte d'un professionnel titulaire de la carte professionnelle (agence ou réseau), qui leur délivre une <strong>attestation d'habilitation</strong>, et ils sont inscrits au registre spécial des agents commerciaux (RSAC) en tant que personnes physiques. Source : <a href="https://entreprendre.service-public.gouv.fr/vosdroits/R62621">Service-Public.fr, attestation d'habilitation d'un agent commercial immobilier</a>. Sans vitrine, l'agent se déplace chez le vendeur et suit en principe le dossier de bout en bout.</p>
    <p><strong>La vente entre particuliers.</strong> Le propriétaire publie lui-même son annonce, organise les visites et négocie. Il économise les honoraires, mais il assume seul le prix, la sélection des acquéreurs, la vérification de leur financement et la préparation du dossier pour le notaire.</p>

    <h2>Ce qui ne change pas, quel que soit le choix</h2>
    <ul>
      <li><strong>Les diagnostics.</strong> Le vendeur doit joindre le dossier de diagnostic technique à la promesse ou à l'acte de vente, qu'il vende seul ou accompagné. Source : <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F10798">Service-Public.fr, diagnostics immobiliers</a>.</li>
      <li><strong>Les règles du mandat.</strong> Simple ou exclusif, le mandat obéit aux mêmes textes pour une agence et pour un agent indépendant. Le détail figure dans l'article <a href="/blog/mandat-exclusif-ou-simple-pays-de-gex/">mandat exclusif ou mandat simple</a>.</li>
      <li><strong>Le calendrier après l'offre.</strong> Délai de rétractation de l'acquéreur, condition suspensive de prêt, date de l'acte : ces étapes sont les mêmes pour tous. Elles sont détaillées dans l'article sur les <a href="/blog/compromis-de-vente-delais-pays-de-gex/">délais du compromis de vente</a>.</li>
    </ul>

    <h2>Ce qui change vraiment pour le vendeur</h2>
    <table>
      <thead><tr><th>Critère</th><th>Agence avec vitrine</th><th>Agent indépendant</th><th>Vente seul</th></tr></thead>
      <tbody>
        <tr><td>Interlocuteur</td><td>Un ou plusieurs négociateurs</td><td>En principe une seule personne</td><td>Le vendeur lui-même</td></tr>
        <tr><td>Disponibilité</td><td>Horaires du local</td><td>Selon l'organisation de l'agent</td><td>Selon le temps du vendeur</td></tr>
        <tr><td>Fichier d'acquéreurs</td><td>Celui de l'agence</td><td>Celui de l'agent et du réseau qui l'habilite</td><td>Aucun</td></tr>
        <tr><td>Honoraires</td><td>Selon le barème affiché</td><td>Selon le barème affiché</td><td>Aucun</td></tr>
        <tr><td>Vérification du financement</td><td>Par le professionnel</td><td>Par le professionnel</td><td>Par le vendeur</td></tr>
      </tbody>
    </table>
    <p>Les honoraires ne dépendent pas du statut : chaque professionnel fixe son barème et doit l'afficher. Comparez donc le montant réel sur votre prix de vente, et ce qu'il couvre.</p>

    <h2>Cinq vérifications avant de signer un mandat</h2>
    <ol>
      <li><strong>L'habilitation.</strong> Demandez l'attestation d'habilitation de l'agent indépendant, ou le numéro de carte professionnelle de l'agence, et le nom du titulaire de la carte.</li>
      <li><strong>Les ventes comparables.</strong> Sur quelles ventes récentes de votre commune repose le prix conseillé ? Les données publiques <a href="https://app.dvf.etalab.gouv.fr/">DVF</a> permettent de les vérifier.</li>
      <li><strong>Le plan de diffusion.</strong> Photos, visite virtuelle, portails utilisés, éventuelle présence sur un portail suisse ou une annonce en anglais pour toucher les frontaliers et les expatriés.</li>
      <li><strong>Le suivi.</strong> À quelle fréquence recevrez-vous le compte rendu des visites ?</li>
      <li><strong>La sortie.</strong> Durée du mandat et conditions de résiliation, écrites noir sur blanc.</li>
    </ol>

    <h2>Dans le Pays de Gex, ce qui fait la différence</h2>
    <p>Le marché gessien a ses particularités : beaucoup d'acquéreurs travaillent en Suisse, les prix varient nettement d'une commune à l'autre, et l'écart entre deux biens proches tient souvent à la vue, au terrain ou au temps de trajet vers Genève. Les repères notariaux par commune sont détaillés dans l'article sur les <a href="/blog/prix-m2-pays-de-gex-2026/">prix au m² dans le Pays de Gex</a>. Un professionnel qui connaît ces ventes, qu'il travaille en agence ou en indépendant, sera mieux placé pour fixer un prix crédible dès la mise en vente.</p>
    <p>Je travaille comme agent immobilier indépendant, basé à Divonne-les-Bains, et je suis personnellement chaque dossier, de l'estimation à la signature chez le notaire.</p>
    <p><a href="/estimation/">Demander une estimation de mon bien →</a></p>
  `
  },
  {
    id: 6,
    slug: "vendre-sa-maison-rapidement-pays-de-gex",
    title: "Vendre sa maison rapidement dans le Pays de Gex : ce qui raccourcit vraiment les délais",
    excerpt: "Prix de départ, diagnostics prêts avant la mise en vente, dossier complet et acquéreur dont le financement est vérifié : les leviers concrets pour vendre vite sans brader.",
    date: "2026-11-23",
    category: "Conseil",
    image: "/images/editorial/marche-pays-de-gex.webp",
    content: `
    <p><em>Publié le 23 novembre 2026.</em> Vendre vite ne veut pas dire vendre moins cher. La plupart des ventes qui traînent s'expliquent par quelques causes identifiables : un prix de départ trop haut, un dossier incomplet, une présentation qui ne met pas le bien en valeur, ou un acquéreur dont le financement n'a pas été vérifié. Chacune se corrige avant la mise en vente.</p>

    <h2>1. Fixer le bon prix dès la première semaine</h2>
    <p>Les premières semaines de diffusion sont celles où l'annonce attire le plus d'attention. Un bien affiché trop cher les gaspille : les acquéreurs comparent, ne visitent pas, puis le prix baisse et l'annonce paraît « usée ». Le prix doit s'appuyer sur des ventes réellement signées, pas sur des annonces.</p>
    <p>Dans le Pays de Gex, les notaires situent la médiane des appartements anciens à <strong>4 800 €/m²</strong> sur les ventes de 2025, avec des écarts sensibles entre communes. Le détail et les sources figurent dans l'article sur les <a href="/blog/prix-m2-pays-de-gex-2026/">prix au m² dans le Pays de Gex</a>. Pour une maison, la parcelle, la vue et l'état comptent souvent plus que la moyenne communale. Les simulateurs en ligne donnent un ordre de grandeur, avec des écarts importants entre eux : voir notre <a href="/blog/estimation-en-ligne-ou-a-domicile-pays-de-gex/">relevé de quatre simulateurs pour Gex</a>.</p>
    <p><strong>Un exemple, pas une statistique :</strong> une maison mise en vente à 790 000 € alors que les comparables se situent autour de 720 000 € risque d'attendre, puis de baisser par étapes. Mise en vente directement au bon niveau, elle a plus de chances de recevoir plusieurs visites, et parfois plusieurs offres, dans les premières semaines.</p>

    <h2>2. Avoir les diagnostics avant la mise en vente</h2>
    <p>Le dossier de diagnostic technique doit être joint à la promesse ou à l'acte de vente. Pour une maison, il comprend selon les cas : le DPE, l'audit énergétique si l'étiquette est E, F ou G, le constat de risque d'exposition au plomb (construction avant 1949), l'amiante (permis de construire avant le 1er juillet 1997), l'électricité et le gaz (installations de plus de 15 ans), l'assainissement, les termites selon la zone, l'état des risques et le diagnostic bruit. Source : <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F10798">Service-Public.fr, diagnostics immobiliers</a>.</p>
    <p>Les commander dès la prise de mandat évite deux pertes de temps : attendre le diagnostiqueur une fois l'acquéreur trouvé, et découvrir tardivement une étiquette énergétique qui change la négociation.</p>

    <h2>3. Réunir les documents du notaire dès le départ</h2>
    <ul>
      <li>Titre de propriété et, le cas échéant, plans et permis de construire des extensions.</li>
      <li>Dernier avis de taxe foncière.</li>
      <li>Factures des travaux importants et attestations d'assurance décennale.</li>
      <li>Pour une copropriété : règlement, procès-verbaux des dernières assemblées générales et montant des charges.</li>
      <li>Pour un assainissement individuel : le rapport de contrôle.</li>
    </ul>
    <p>Un dossier complet permet de répondre immédiatement aux questions des acquéreurs et de préparer le compromis sans semaines d'attente.</p>

    <h2>4. Soigner la présentation</h2>
    <p>Photos lumineuses, pièces désencombrées, petites réparations faites, extérieur entretenu : ce travail coûte peu au regard de son effet sur le nombre de visites. Dans le Pays de Gex, beaucoup d'acquéreurs regardent les annonces depuis Genève ou de l'étranger. Une visite virtuelle, un plan et une annonce en anglais aident à les convaincre de se déplacer.</p>

    <h2>5. Vérifier le financement de l'acquéreur</h2>
    <p>Une vente rapide est une vente qui va au bout. Avant d'accepter une offre, il faut savoir comment l'acquéreur finance son achat : apport, accord de principe d'une banque, revenus en francs suisses pris en compte par le prêteur. La condition suspensive d'obtention de prêt prévue au compromis ne peut pas durer moins d'un mois. Source : <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F1673">Service-Public.fr, condition suspensive de prêt</a>. Un dossier fragile peut bloquer le bien pendant des semaines avant d'échouer.</p>

    <h2>6. Connaître le calendrier après l'accord</h2>
    <p>Une fois l'offre acceptée, l'acquéreur dispose d'un délai de rétractation de 10 jours après notification du compromis, puis la date de l'acte authentique est fixée librement par les parties. Les étapes sont détaillées dans l'article sur les <a href="/blog/compromis-de-vente-delais-pays-de-gex/">délais du compromis de vente</a>.</p>
    <p>Si vous préparez une vente dans les prochains mois, une estimation fondée sur les ventes de votre commune est le premier levier : elle fixe le prix de départ, celui qui conditionne tout le reste.</p>
    <p><a href="/estimation/">Demander une estimation sous 48 h →</a></p>
  `
  },
  {
    id: 7,
    slug: "compromis-de-vente-delais-pays-de-gex",
    title: "Compromis de vente : délais et étapes jusqu'à l'acte authentique",
    excerpt: "Délai de rétractation de 10 jours, condition suspensive de prêt d'au moins un mois, date de l'acte fixée par les parties : le calendrier d'une vente expliqué, sources officielles à l'appui.",
    date: "2026-11-23",
    category: "Conseil",
    image: "/images/editorial/partenaire-financement.webp",
    content: `
    <p><em>Publié le 23 novembre 2026.</em> Entre l'accord sur le prix et la remise des clés, une vente passe par le compromis puis par l'acte authentique chez le notaire. Chaque étape a ses délais, certains fixés par la loi, d'autres librement par les parties. Les voici dans l'ordre, avec les sources officielles.</p>

    <h2>Le calendrier en un coup d'œil</h2>
    <table>
      <thead><tr><th>Étape</th><th>Délai</th><th>Qui le fixe</th></tr></thead>
      <tbody>
        <tr><td>Signature du compromis</td><td>Après acceptation de l'offre</td><td>Les parties</td></tr>
        <tr><td>Rétractation de l'acquéreur</td><td>10 jours à compter de la notification</td><td>La loi</td></tr>
        <tr><td>Obtention du prêt (condition suspensive)</td><td>Au moins 1 mois</td><td>La loi fixe le minimum, le compromis fixe la durée</td></tr>
        <tr><td>Signature de l'acte authentique</td><td>Date prévue au compromis</td><td>Les parties</td></tr>
      </tbody>
    </table>

    <h2>Le délai de rétractation de l'acquéreur : 10 jours</h2>
    <p>L'acquéreur non professionnel d'un logement dispose d'un délai de rétractation de <strong>10 jours</strong>. Il ne court pas à partir de la signature mais à partir de la <strong>notification</strong> du compromis : il commence le lendemain de la première présentation de la lettre recommandée qui notifie l'acte. L'acquéreur qui se rétracte n'a pas à se justifier. Source : <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2965">Service-Public.fr, compromis de vente</a>.</p>

    <h2>Le vendeur, lui, est engagé dès la signature</h2>
    <p>Le vendeur ne bénéficie pas d'un délai de rétractation : il est définitivement engagé à vendre dès la signature du compromis, sauf clause particulière prévue dans l'acte. Source : <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2965">Service-Public.fr</a>. C'est une raison de plus pour avoir vérifié le prix et les conditions avant de signer.</p>

    <h2>La condition suspensive de prêt : au moins un mois</h2>
    <p>Lorsque l'acquéreur finance l'achat par un crédit, le compromis prévoit une condition suspensive d'obtention du prêt. Le délai accordé à l'acquéreur ne peut pas être inférieur à <strong>un mois</strong> ; il peut être plus long. Si le prêt est refusé dans ces conditions, la vente ne se fait pas et les sommes versées sont restituées à l'acquéreur. Source : <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F1673">Service-Public.fr, condition suspensive de prêt</a> (Code de la consommation, articles L313-40 à L313-45).</p>
    <p>Dans le Pays de Gex, de nombreux acquéreurs perçoivent des revenus en francs suisses. Les prêteurs n'ont pas tous la même façon de les prendre en compte. Prévoir une durée réaliste pour cette condition, plutôt que le minimum, évite de devoir la prolonger en urgence.</p>

    <h2>La date de l'acte authentique : fixée par les parties</h2>
    <p>Aucun texte n'impose de délai général entre le compromis et l'acte : les parties le fixent librement dans le compromis. Seuls le Haut-Rhin, le Bas-Rhin et la Moselle imposent un maximum de six mois pour un compromis sous seing privé. Source : <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2965">Service-Public.fr</a>. En pratique, la date retenue doit laisser le temps d'obtenir le prêt, de purger les éventuels droits de préemption et de réunir les pièces demandées par le notaire.</p>

    <h2>Les diagnostics doivent être valides à la date du compromis</h2>
    <p>Les diagnostics doivent être en cours de validité à la date de la promesse. Le DPE est valable 10 ans, l'audit énergétique 5 ans. Source : <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2965">Service-Public.fr</a>. Un diagnostic expiré entre l'offre et la signature peut retarder le compromis : mieux vaut vérifier les dates dès la mise en vente. La liste complète des diagnostics figure dans l'article <a href="/blog/vendre-sa-maison-rapidement-pays-de-gex/">vendre sa maison rapidement</a>.</p>

    <h2>Ce que le vendeur peut anticiper</h2>
    <ul>
      <li>Avoir le dossier de diagnostic technique complet avant la première visite.</li>
      <li>Réunir titre de propriété, taxe foncière, factures de travaux et, en copropriété, les documents de l'assemblée générale.</li>
      <li>Vérifier le plan de financement de l'acquéreur avant d'accepter son offre.</li>
      <li>S'accorder sur une date d'acte compatible avec son propre projet (achat suivant, déménagement).</li>
    </ul>
    <p>Vous envisagez de vendre ? Une estimation fondée sur les ventes récentes de votre commune permet de partir sur de bonnes bases, avant même de penser au compromis.</p>
    <p><a href="/estimation/">Demander une estimation de mon bien →</a></p>
  `
  }
];

// Statistiques DVF publiques : médianes des ventes exploitables de 2021 à 2025,
// appartements et maisons séparés, toutes ventes retenues par data.gouv.fr.
// Les champs historiques Min/Max de Commune portent chacun cette médiane.
// Distances indicatives à vol d’oiseau calculées depuis le centre des communes
// (API Découpage administratif) vers le centre de Genève, arrondies au km.
export const COMMUNE_DVF_PERIOD = '2021–2025';
export const COMMUNE_DVF_SOURCE = 'https://www.data.gouv.fr/datasets/statistiques-dvf';
export const COMMUNE_DVF_CSV = 'https://data-pipeline-open.s3.sbg.io.cloud.ovh.net/dvf/stats_whole_period.csv';

export const COMMUNES: Commune[] = [
  {
    slug: "ferney-voltaire",
    name: "Ferney-Voltaire",
    cp: "01210",
    distanceGeneve: "env. 6 km",
    prixApptMin: 4844,
    prixApptMax: 4844,
    prixMaisonMin: 5160,
    prixMaisonMax: 5160,
    delaiMoyen: 0,
    pointsForts: [
      "À proximité de Genève et de ses organisations internationales",
      "Communauté internationale dense, lycée bilingue",
      "Tous commerces, restaurants, vie de quartier animée",
    ],
    descriptionMarche:
      "Porte d'entrée du Pays de Gex, Ferney-Voltaire bénéficie de sa proximité avec Genève, ses organisations internationales et ses commerces. Le prix d'un logement dépend de ses caractéristiques et des ventes comparables récentes.",
    frontalierContext:
      "Ferney-Voltaire offre un accès aux organisations internationales genevoises et au bassin d’emploi du CERN. La présence d'établissements scolaires internationaux peut compter pour les familles en relocalisation depuis la Suisse.",
    evolutionPrix:
      "Le baromètre notarial de mai 2025 situait le prix médian des appartements anciens à 4 700 €/m², en hausse de 9,4 % sur un an à cette date. La médiane DVF 2021–2025 affichée ici porte sur une période et un périmètre différents.",
    voisines: ["saint-genis-pouilly", "prevessin-moens"],
  },
  {
    slug: "saint-genis-pouilly",
    name: "Saint-Genis-Pouilly",
    cp: "01630",
    distanceGeneve: "env. 10 km",
    prixApptMin: 4444,
    prixApptMax: 4444,
    prixMaisonMin: 5176,
    prixMaisonMax: 5176,
    delaiMoyen: 0,
    pointsForts: [
      "Accès au CERN et à la frontière de Meyrin",
      "Demande locative parmi les plus fortes du Pays de Gex",
      "Réseau scolaire international (primaire + collège)",
    ],
    descriptionMarche:
      "Saint-Genis-Pouilly est proche des sites du CERN à Meyrin et à Prévessin. Cette proximité peut compter pour les personnes qui y travaillent, sans suffire à prévoir la demande ou le prix d'un bien précis.",
    frontalierContext:
      "Saint-Genis-Pouilly est proche des sites du CERN et des accès vers Meyrin. Le temps de trajet varie selon l'adresse et la circulation. La demande locative et le rendement d'un investissement doivent être vérifiés pour chaque bien ; l'origine des acheteurs ne se déduit pas des seules statistiques de vente.",
    evolutionPrix:
      "Le baromètre notarial de mai 2025 situait le prix médian des appartements anciens à 4 480 €/m², en hausse de 4,4 % sur un an à cette date. La médiane DVF 2021–2025 affichée ici porte sur une période et un périmètre différents.",
    voisines: ["ferney-voltaire", "ornex"],
  },
  {
    slug: "divonne-les-bains",
    name: "Divonne-les-Bains",
    cp: "01220",
    distanceGeneve: "env. 19 km",
    prixApptMin: 5851,
    prixApptMax: 5851,
    prixMaisonMin: 6369,
    prixMaisonMax: 6369,
    delaiMoyen: 0,
    pointsForts: [
      "Lac, golf, casino: qualité de vie premium",
      "Marché résidentiel avec des biens de standing",
      "Clientèle cadre supérieur et expatrié senior",
    ],
    descriptionMarche:
      "Divonne-les-Bains dispose d'un lac, d'un golf et d'un marché résidentiel aux biens variés. Parmi les neuf communes étudiées, sa médiane DVF 2021–2025 est la plus élevée pour les appartements et les maisons ; cela ne préjuge pas du prix d'un bien précis.",
    frontalierContext:
      "Divonne-les-Bains peut intéresser les personnes travaillant à Genève, Nyon ou Lausanne. Le choix dépend du trajet réel, du budget, des caractéristiques du logement et des services recherchés.",
    evolutionPrix:
      "Le baromètre notarial de mai 2025 situait le prix médian des appartements anciens à 5 640 €/m², en hausse de 1,6 % sur un an à cette date. La médiane DVF 2021–2025 affichée ici porte sur une période et un périmètre différents.",
    voisines: ["gex", "cessy"],
  },
  {
    slug: "gex",
    name: "Gex",
    cp: "01170",
    distanceGeneve: "env. 18 km",
    prixApptMin: 4399,
    prixApptMax: 4399,
    prixMaisonMin: 5175,
    prixMaisonMax: 5175,
    delaiMoyen: 0,
    pointsForts: [
      "Chef-lieu du Pays de Gex: tous services",
      "Accès direct aux pistes de ski du Jura",
      "Prix médian des appartements parmi les plus bas des neuf communes étudiées",
    ],
    descriptionMarche:
      "Chef-lieu du Pays de Gex, Gex offre des services et un accès au Jura. Sa médiane DVF 2021–2025 pour les appartements est inférieure à celles de Ferney-Voltaire et de Saint-Genis-Pouilly ; cela ne préjuge pas du prix d'un logement comparable.",
    frontalierContext:
      "Gex offre un accès aux services du secteur et au Jura. Le trajet vers Genève varie selon la destination et l'heure ; comparez les logements et les déplacements quotidiens avant de choisir la commune.",
    evolutionPrix:
      "Le baromètre notarial de mai 2025 situait le prix médian des appartements anciens à 4 490 €/m², en hausse de 7,3 % sur un an à cette date. La médiane DVF 2021–2025 affichée ici porte sur une période et un périmètre différents.",
    voisines: ["divonne-les-bains", "crozet"],
  },
  {
    slug: "prevessin-moens",
    name: "Prévessin-Moëns",
    cp: "01280",
    distanceGeneve: "env. 8 km",
    prixApptMin: 5200,
    prixApptMax: 5200,
    prixMaisonMin: 5479,
    prixMaisonMax: 5479,
    delaiMoyen: 0,
    pointsForts: [
      "À proximité de Genève et des postes-frontières",
      "Commune résidentielle calme, pavillonnaire",
      "Secteur scolaire réputé, écoles bilingues proches",
    ],
    descriptionMarche:
      "Entre Ferney-Voltaire et Saint-Genis-Pouilly, Prévessin-Moëns est une commune résidentielle prisée pour son calme et sa proximité frontalière. Elle combine les atouts des deux communes voisines, avec des prix qui varient selon le type de bien et l’adresse.",
    frontalierContext:
      "Prévessin-Moëns est souvent le choix des familles qui cherchent à concilier proximité genevoise et cadre pavillonnaire. La proximité des écoles et des accès frontaliers peut intéresser les familles selon leurs trajets quotidiens. Bien desservie par les axes D984 et A40.",
    evolutionPrix:
      "Le baromètre notarial de mai 2025 situait le prix médian des appartements anciens à 5 210 €/m², en hausse de 6,8 % sur un an à cette date. La médiane DVF 2021–2025 affichée ici porte sur une période et un périmètre différents.",
    voisines: ["ferney-voltaire", "saint-genis-pouilly"],
  },
  {
    slug: "cessy",
    name: "Cessy",
    cp: "01170",
    distanceGeneve: "env. 13 km",
    prixApptMin: 4972,
    prixApptMax: 4972,
    prixMaisonMin: 5196,
    prixMaisonMax: 5196,
    delaiMoyen: 0,
    pointsForts: [
      "Grandes maisons avec jardins: espace rare à ce prix",
      "Cadre verdoyant, commune tranquille et familiale",
      "Accès aux axes de circulation du Pays de Gex",
    ],
    descriptionMarche:
      "Commune pavillonnaire recherchée pour son cadre verdoyant et ses biens spacieux. Cessy séduit les familles en quête d'espace, avec de grandes maisons et des jardins: un profil rare à ce niveau de prix dans le Pays de Gex.",
    frontalierContext:
      "Cessy peut convenir à un projet recherchant davantage d'espace. La valeur d'une maison avec jardin dépend de sa surface, du terrain, de son état et de ventes réellement comparables ; le trajet vers la Suisse doit être vérifié depuis l'adresse du bien.",
    evolutionPrix:
      "Les prix médians DVF affichés ici agrègent les ventes exploitables de 2021 à 2025. Ils décrivent un niveau de prix observé sur cinq ans, pas une hausse annuelle ni une prévision de plus-value.",
    voisines: ["ornex", "gex"],
  },
  {
    slug: "ornex",
    name: "Ornex",
    cp: "01710",
    distanceGeneve: "env. 9 km",
    prixApptMin: 5250,
    prixApptMax: 5250,
    prixMaisonMin: 5384,
    prixMaisonMax: 5384,
    delaiMoyen: 0,
    pointsForts: [
      "Proche CERN et Saint-Genis-Pouilly",
      "Commune pavillonnaire, constructions récentes",
      "Premier achat patrimonial accessible dans le Pays de Gex",
    ],
    descriptionMarche:
      "Ornex est proche de Saint-Genis-Pouilly et des accès vers le CERN. Le marché y comprend des maisons et des appartements dont les prix varient selon l'emplacement, l'état et la surface.",
    frontalierContext:
      "Ornex peut intéresser les personnes travaillant dans le secteur de Meyrin ou de Saint-Genis-Pouilly. Une comparaison avec les communes voisines doit porter sur des biens de même type, de même état et de surface proche.",
    evolutionPrix:
      "Les prix médians DVF affichés ici agrègent les ventes exploitables de 2021 à 2025. Ils décrivent un niveau de prix observé sur cinq ans, pas une hausse annuelle ni une prévision de plus-value.",
    voisines: ["saint-genis-pouilly", "cessy"],
  },
  {
    slug: "thoiry",
    name: "Thoiry",
    cp: "01710",
    distanceGeneve: "env. 14 km",
    prixApptMin: 4443,
    prixApptMax: 4443,
    prixMaisonMin: 4841,
    prixMaisonMax: 4841,
    delaiMoyen: 0,
    pointsForts: [
      "Cadre naturel du Jura à portée immédiate",
      "Biens spacieux parmi les prix les plus accessibles du secteur",
      "Cadre naturel et offre résidentielle variée",
    ],
    descriptionMarche:
      "Thoiry est la porte du Jura depuis le Pays de Gex. La commune offre un cadre naturel recherché et des logements de tailles variées. Le prix d’un bien doit être comparé à des ventes de même type, plutôt qu’à une commune entière.",
    frontalierContext:
      "À Thoiry, la proximité du Jura peut compter dans le choix résidentiel. Le temps de trajet vers le lieu de travail et les possibilités de télétravail doivent être vérifiés pour chaque projet. L'origine des acheteurs ne figure pas dans les statistiques DVF utilisées ici.",
    evolutionPrix:
      "Les prix médians DVF affichés ici agrègent les ventes exploitables de 2021 à 2025. Ils décrivent un niveau de prix observé sur cinq ans, pas une hausse annuelle ni une prévision de plus-value.",
    voisines: ["gex", "crozet"],
  },
  {
    slug: "crozet",
    name: "Crozet",
    cp: "01170",
    distanceGeneve: "env. 15 km",
    prixApptMin: 5387,
    prixApptMax: 5387,
    prixMaisonMin: 5171,
    prixMaisonMax: 5171,
    delaiMoyen: 0,
    pointsForts: [
      "Commune préservée, biens de caractère et atypiques",
      "Marché local avec des biens de caractère",
      "Environnement naturel du Jura",
    ],
    descriptionMarche:
      "Crozet est une commune préservée du Jura, entre Gex et la frontière. Marché de niche avec peu de transactions mais des biens d'exception. Idéale pour les acheteurs qui cherchent l'authenticité et le calme à distance raisonnable du bassin genevois.",
    frontalierContext:
      "À Crozet, la diversité des logements rend les comparaisons entre biens délicates. Pour un projet frontalier, vérifiez le trajet quotidien et comparez les transactions par type de logement, surface et état.",
    evolutionPrix:
      "Les prix médians DVF affichés ici agrègent les ventes exploitables de 2021 à 2025. Ils décrivent un niveau de prix observé sur cinq ans, pas une hausse annuelle ni une prévision de plus-value.",
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
  { name: 'Centre Commercial', time: '8-10 min à pied', description: 'Boutiques de mode et services divers.', category: 'Shopping' },
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
