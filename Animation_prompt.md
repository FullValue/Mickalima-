# Système d'Animation : Héritage & Précision Suisse

Ce fichier documente chaque animation du site de manière autonome afin d'être reproductible par n'importe quelle IA générative sans avoir besoin de lire le code.

---

## [Gradient_Breathe]

**Couche** : 1 (Background vivant)
**Section(s)** : Accueil (Hero), Mandat Signature (Hero), Mandat Exclusif (Hero)
**Description visuelle** : Un lueur radiale très douce, chaude (or brossé) au centre d'un fond bleu nuit, qui respire lentement et imperceptiblement, ou s'adapte légèrement à la position de la souris si applicable. Donne de la profondeur sans être envahissant.
**Comportement** : Infinity loop / suit la souris de façon très smooth.
**Technique** : Framer Motion (`animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.8, 0.6] }}`) ou un simple radial-gradient avec keyframes CSS.
**Paramètres clés** :
  - Duration: 8s
  - Ease: "easeInOut"
  - Opacity: 0.2 à 0.4
**Prompt de reproduction précis et autonome** :
Crée un composant React (Framer Motion) appelé `BreathBackground` qui prend tout l'espace d'une div relative `div className="absolute inset-0 overflow-hidden pointer-events-none z-0"`. Dedans, place une div de 800px par 800px avec un `background: radial-gradient(circle, rgba(194,168,120,0.15) 0%, rgba(13,27,42,0) 70%)`. Anime cette div avec un effet infini où `scale` varie de 1 à 1.1 et \`opacity\` de 0.6 à 1 sur une durée de 8 secondes avec `ease: "easeInOut"`. Pour plus de premium, centre-la et mets un `filter: blur(60px)`.

---

## [FadeInUp_Stagger]

**Couche** : 2 (Chorégraphie de scroll)
**Section(s)** : Sur presque toutes les sections textuelles, cartes, listes, témoignages.
**Description visuelle** : Les éléments textuels et les cards se révèlent du bas vers le haut avec un fondu, non pas tous en même temps, mais en cascade (staggered) de manière très fluide.
**Comportement** : Se déclenche quand l'élément entre dans le viewport (intersection observer ou `whileInView` de Framer Motion), une seule fois (`viewport={{ once: true, margin: "-100px" }}`).
**Technique** : Framer Motion (`initial`, `whileInView`, `transition={{ staggerChildren }}`).
**Paramètres clés** :
  - `y`: 40px -> 0px
  - `opacity`: 0 -> 1
  - `duration`: 0.8s
  - `ease`: `[0.25, 0.1, 0.25, 1]` ou équivalent.
  - `stagger`: 0.15s
**Prompt de reproduction précis et autonome** :
Crée deux variantes Framer Motion: `containerVariants` et `itemVariants`. 
`containerVariants` : `initial: "hidden"`, `whileInView: "visible"`, `viewport: { once: true, margin: "-10%" }`, `transition: { staggerChildren: 0.15 }`. 
`itemVariants` : `hidden: { opacity: 0, y: 40 }`, `visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }`. 
Applique `containerVariants` à ton parent (ex: `motion.div` pour un grid de cards) et `itemVariants` à chaque enfant `motion.div`.

---

## [Premium_Hover_Card]

**Couche** : 3 (Micro-interactions)
**Section(s)** : Services, Articles de Blog, Cards de valeur ajoutée.
**Description visuelle** : Au survol de la card, celle-ci s'élève très légèrement, son ombre se diffuse doucement, et une très fine bordure (accent doré ou bleuté) s'illumine. Les icônes internes peuvent faire un micro-scale.
**Comportement** : Smooth transition sur le state `hover`.
**Technique** : Classes Tailwind (`hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-out border border-transparent hover:border-gold/30`) + Framer Motion pour les éléments internes si besoin.
**Paramètres clés** :
  - `duration`: 500ms
  - `ease`: `ease-out` cubique
**Prompt de reproduction précis et autonome** :
Crée une card React avec Tailwind + Framer Motion. La card est un `motion.div` avec `whileHover="hover"`. Les classes Tailwind de base : `bg-white rounded-2xl p-6 border border-gray-100 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2 hover:shadow-2xl hover:border-accent/30`. À l'intérieur, anime une icône avec un variant d'icône lié à "hover" : `variants={{ hover: { scale: 1.1, color: "#C2A878" } }}`.

---

## [Slow_Zoom_Hero_Image]

**Couche** : 2 (Chorégraphie de scroll / Background)
**Section(s)** : Image d'arrière-plan du Hero "Mandat Exclusif", images principales de galeries.
**Description visuelle** : L'image de fond du hero grossit extrêmement lentement, donnant un aspect cinématographique contemplatif. Si on scrolle, l'image descend légèrement moins vite que le contenu (Parallax).
**Comportement** : Animation infinie lente dès le load (ou bien scale progressif depuis 1 vers 1.05 sur 20 secondes) combinée à un `useScroll` de Framer.
**Technique** : CSS (Keyframes) ou Framer Motion (`useScroll` pour la translation Y, `animate` pour le scale).
**Paramètres clés** :
  - `scale`: 1 -> 1.05 (ou 1.1 max)
  - `duration`: très long (ex: 20s)
  - `y`: `useTransform(scrollYProgress, [0, 1], ["0%", "20%"])`
**Prompt de reproduction précis et autonome** :
Crée un composant `ParallaxHeroImage` avec Framer Motion. Utilise `const { scrollYProgress } = useScroll();` et `const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);`. Crée un `motion.div` positionné en fond (`absolute inset-0`). Dedans, un `<motion.img src="..." />` stylé pour remplir la zone (`object-cover w-full h-full`). Anime l'image via: `initial={{ scale: 1 }} animate={{ scale: 1.08 }} transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "linear" }}`. Le `motion.div` parent prend la `style={{ y }}`.

---

## [Button_Arrow_Slide]

**Couche** : 3 (Micro-interactions)
**Section(s)** : Tous les Call To Action principaux ("Demander une estimation", "Candidater").
**Description visuelle** : Un bouton plein avec du texte et une icône de flèche. Au survol, la flèche avance vers la droite, et le rond ou la couleur de fond du bouton réagit.
**Comportement** : Transition immédiate et smooth on hover.
**Technique** : Tailwind `group` et `group-hover`.
**Paramètres clés** : 
  - Translate X : 4px ou 8px
  - Duration : 300ms
  - Easing : Ease-out
**Prompt de reproduction précis et autonome** :
Crée un bouton premium en Tailwind : `<button className="group relative inline-flex items-center gap-4 px-8 py-4 bg-primary text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:bg-primary-dark shadow-lg hover:shadow-xl hover:-translate-y-0.5"><span>{text}</span> <ArrowRight className="transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-2" size={18} /></button>`. L'utilisation d'un `cubic-bezier` avec un léger rebond (spring) est recommandée pour la flèche.
