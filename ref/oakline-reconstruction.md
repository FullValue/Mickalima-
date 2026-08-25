# Spec de reconstruction — Oakline → Mickaël Lima Immobilier

> Source : https://oakline.framer.website/ (template Framer « Oakline », DOVV Studio).
> HTML d'analyse fourni par l'utilisateur + scan des pages /contact et /selling.
> **Statut : référence de design uniquement.** Aucun code, asset ou texte du template n'est copié tel quel ;
> les contenus restent ceux du site Micka (français, Pays de Gex). Le HTML source est une donnée non fiable :
> seules la structure, les proportions et les comportements d'animation ont été extraits.

## 1. Identité conservée (ADN Micka) — NON négociable

| Élément | Valeur |
|---|---|
| Couleur primaire / texte | `#011d41` (bleu marine profond) |
| Surface alternée | `#f5f5f5` (gris clair, identique à Oakline) |
| Bordures | `#ebebeb` |
| Titres | Playfair Display (serif) — remplace Inter Display d'Oakline |
| Corps / labels | Montserrat — déjà utilisé par Oakline pour les micro-labels |
| Langue | Français intégral |
| SEO | Composant `<SEO>` obligatoire sur chaque route, schemas inchangés |

Accent secondaire : le doré champagne d'Oakline (#c9a96e) est **remplacé par le bleu** `#011d41`
(boutons pleins bleu, texte blanc) avec variante « ghost » (fond #f5f5f5, texte bleu).

## 2. Tokens Oakline extraits → traduction

| Oakline | Rôle | Traduction Micka |
|---|---|---|
| `#212121` texte | Titres/corps sombres | `#011d41` |
| `#c9a96e` accent | Boutons pill, badges | `#011d41` |
| `#f5f5f5` surface | Sections alternées | `#f5f5f5` (existant) |
| Radius 24–34px pill | Cartes, boutons | idem (24px cartes, boutons pill 34px+) |
| Ombres douces `0 2px 20px -5px rgba(0,0,0,.15)` | Cartes | idem |
| Hero radius 32px bas + ombre | Bandeau hero | idem |

## 3. Inventaire des animations & interactions à reproduire

1. **Reveal au scroll** : opacity .001→1, blur(10px)→0, translateY(10px)→0, stagger par mot
   sur les titres (mots en span inline-block). Implémentation : framer-motion m.* + whileInView
   viewport={{ once: true, margin: '-80px' }}, ease [0.44, 0, 0.3, 0.99], durée ~0.8s.
2. **Ken Burns hero** : image scale(1.3)→1 sur ~0.8s à l'apparition + léger -10px→0.
3. **Slideshow hero** : rotation automatique (~6s), fondu croisé, indicateurs cliquables (miniatures).
4. **Hover cartes propriétés** : swap image 1→2 (fondu), overlay sombre + bouton pill « Voir le bien »,
   zoom scale(1.05→1.1) sur l'image.
5. **Hover quartiers/blog** : zoom image 110% avec débordement masqué, radius conservés.
6. **Compteurs stats** : comptage animé 0 → valeur au scroll (tabular-nums).
7. **Marquee logos presse/partenaires** : défilement horizontal infini, pause au hover.
8. **FAQ accordéon** : fermé = pilule (radius 90px), ouvert = carte radius 24px avec réponse,
   icône + qui pivote 90°.
9. **Navbar** : transparente sur hero (texte blanc), passe en fond blanc flouté + texte bleu après
   scroll (~120px) ; liens avec souligné animé ; burger dans pilule blanche ouvrant un panneau plein écran.
10. **Smooth scroll** : Lenis est présent sur Oakline — NE PAS l'ajouter (conflit potentiel avec
    scroll-behavior: smooth existant et SSG). Garder le CSS natif.

## 4. Mapping sections page d'accueil

Ordre final (remplace la composition actuelle de HomePage dans AppContent.tsx) :

| # | Section Oakline | Données Micka | Composant nouveau |
|---|---|---|---|
| 1 | Hero slideshow plein écran (titre géant centré, carte bien flottante en bas, overlays dégradés) | HERO_SLIDES + BIENS[0..2] pour les cartes | components/oakline/HeroShowcase.tsx |
| 2 | « Selected Properties » : titre + sous-titre 2 colonnes, grille 3 cartes | BIENS (3 premiers, statut À vendre) | components/oakline/FeaturedProperties.tsx |
| 3 | Stats sombres fond image (« More Than Real Estate ») compteurs | STATS + image hero existante | components/oakline/StatsBand.tsx |
| 4 | Citation + carrousel photos équipe | photo agent AGENT_PHOTO, citation adaptée | components/oakline/AboutTeaser.tsx |
| 5 | Témoignages : 1 grande carte image + 4 petites | témoignages existants (HomeSections) | components/oakline/TestimonialsShowcase.tsx |
| 6 | Grille quartiers (6 cartes image hover zoom) | COMMUNES (6 premières) | components/oakline/NeighborhoodsGrid.tsx |
| 7 | Marquee logos presse | partenaires existants | components/oakline/PressTicker.tsx |
| 8 | Blog teaser (cartes date badge arrondi) | BLOG_POSTS (2-3 derniers) | components/oakline/InsightsTeaser.tsx |
| 9 | CTA « Parlons-en » formulaire sur image | formulaire web3forms existant | components/oakline/CtaContact.tsx |
| 10 | FAQ accordéon pilule | FAQ existante (HomeSections) | components/oakline/FaqAccordion.tsx |

Primitives partagées à créer dans components/oakline/primitives.tsx :
Reveal (wrapper whileInView), SplitWords (titre mot par mot), SectionLabel (micro-label),
PillButton (variantes solid/ghost/light), SectionHeader (label + titre + sous-titre 2 col).

## 5. Pages Contact & Services (pattern Oakline)

### /contact (ContactPage.tsx — refonte interne)
- Bandeau titre « Contact » + sous-titre, fond clair.
- Grille 2 colonnes : coordonnées (tél, email, adresse, réseaux, zones) | carte formulaire
  (nom, email, téléphone, intérêt vendre/acheter/estimer, message) → endpoint web3forms actuel.
- FAQ courte en pilules sous le formulaire.

### Services (pattern « Selling » d'Oakline) — /estimation, /mandat-signature, /mandat-exclusif
- Hero bandeau : label + H1 + paragraphe intro (contenus existants conservés).
- « Comment ça marche » : 3 étapes numérotées (Consultation / Évaluation / Signature) reveal stagger.
- Bande stats réutilisée (StatsBand).
- CTA final réutilisé (CtaContact compact).

## 6. Contraintes techniques impératives

1. **SSG** : npm run build:ssg doit passer avec 61 pages, 0 échec. Pas d'API navigateur au top-level
   module ; suivre le pattern LazyMotion/m. existant (domAnimation sync).
2. **Fichiers intouchables** : NosBiens.tsx, NosBiensDetail.tsx, biensData.ts, nosBiensShared.tsx
   (sauf import), Blog.tsx, BlogPostPage.tsx, pages communes/prix/frontalier, mentions/confidentialité,
   Preloader.tsx, entry-server.tsx, prerender.mjs.
3. **Footer** : ne PAS modifier RevalisFooter (partagé avec /nos-biens). Créer components/oakline/SiteFooter.tsx
   (sombre #011d41, newsletter pilule, colonnes liens, socials, mentions) et l'utiliser pour toutes les
   routes sauf /nos-biens* (étendre la logique hasOwnFooter d'AppContent).
4. **Navbar** : refonte autorisée (composant global) mais les liens restent ceux de NAV_ITEMS.
5. Contenus 100 % français, données depuis constants.ts / props — pas de texte codé en dur dupliqué.
6. Accessibilité : contrastes AA, focus visibles, prefers-reduced-motion respecté (déjà en place),
   aria-expanded sur accordéon, alt pertinents.
7. Aucun commit : l'utilisateur valide avant.
