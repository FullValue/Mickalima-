import React from 'react';
import { Star, ArrowDown, SearchCheck, Camera, Handshake } from 'lucide-react';
import { SEO } from './SEO';
import { PartnerMethod } from './PartnerMethod';
import { AGENT_PHOTO } from './nosBiensShared';
import { PillButton, Reveal, SectionLabel } from './oakline/primitives';

const ABOUT_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mickaël Lima',
  jobTitle: 'Expert immobilier',
  url: 'https://mickael-lima.immo/about/',
  telephone: '+33769313502',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '328 Rue des Fontanettes',
    addressLocality: 'Divonne-les-Bains',
    postalCode: '01220',
    addressCountry: 'FR',
  },
  areaServed: 'Pays de Gex',
  description:
    'Expert immobilier indépendant spécialisé dans le marché franco-suisse du Pays de Gex. 8 ans d’expérience, plus de 240 ventes en 5 ans.',
  knowsAbout: [
    'Immobilier Pays de Gex',
    'Marché frontalier franco-suisse',
    'Estimation immobilière',
  ],
  sameAs: [
    'https://www.linkedin.com/in/mickael-lima-dos-santos-97137419b/',
    'https://share.google/fvsAyaT6pI2059MZF',
  ],
};

const KEY_STATS = [
  { value: '8 ans', label: "d'expérience" },
  { value: '+ de 240', label: 'ventes en 5 ans' },
  { value: '25', label: 'avis 5 étoiles Google' },
  { value: '40+', label: 'portails de diffusion' },
  { value: '20', label: 'communes couvertes' },
  { value: '24 h', label: 'délai de réponse annoncé' },
];

const APPROACH = [
  { icon: SearchCheck, number: '01', title: 'Estimer avec justesse', text: "Le Pays de Gex est porté par la demande genevoise. Une estimation fondée sur les ventes réelles et les caractéristiques de votre bien permet de défendre votre prix, sans surévaluation ni délai inutile.", value: 'Des faits concrets, des explications claires.' },
  { icon: Camera, number: '02', title: 'Présenter ce qui fait la différence', text: "Photographie professionnelle, film et supports adaptés : je rends visibles les qualités de votre bien pour aider chaque acquéreur à en comprendre la valeur.", value: 'Une présentation soignée, une diffusion ciblée.' },
  { icon: Handshake, number: '03', title: 'Vous accompagner jusqu’au bout', text: "De notre premier échange à la signature chez le notaire, vous gardez un seul interlocuteur. Retours de visites, reporting et ajustements : vous savez où en est votre vente à chaque étape.", value: 'Un suivi régulier et une communication transparente.' },
];
const SERVICES = [
  { title: 'Estimation argumentée', text: 'Gratuite, fondée sur les données DVF et les comparables récents.' },
  { title: 'Photographie professionnelle', text: 'Un shooting dédié, sans photos au smartphone ni frais supplémentaires.' },
  { title: 'Vidéo & drone 4K', text: 'Pour les biens avec extérieur ou vue, une autre lecture des volumes et de leur environnement.' },
  { title: 'Diffusion sur plus de 40 portails', text: "SeLoger, Leboncoin, Bien’ici, Figaro Immo, Properstar en Suisse, LuxuryEstate et plus de 35 autres portails." },
  { title: 'Reporting régulier', text: 'Nombre de vues, retours des visiteurs et ajustements de stratégie quand ils sont nécessaires.' },
  { title: 'Un interlocuteur unique', text: 'De l’estimation à la remise des clés, je reste votre point de contact.' },
];

const heading = 'font-serif text-3xl font-normal leading-[1.12] tracking-tight md:text-5xl';

export const About: React.FC = () => (
  <>
    <SEO
      title="À propos : Mickaël Lima | Expert immobilier Pays de Gex"
      description="Découvrez Mickaël Lima Dos Santos, expert immobilier avec 8 ans d'expérience dans le Pays de Gex (plus de 240 ventes en 5 ans). Connaissance locale, stratégie de vente et accompagnement personnalisé."
      canonical="/about"
      schema={ABOUT_SCHEMA}
    />
    <div className="bg-white text-[#011d41]">
      <section className="relative flex min-h-[660px] items-center overflow-hidden rounded-b-[32px] bg-[#011d41] pb-20 pt-36 md:pb-24">
        <img src="/images/about-hero.jpg" alt="" aria-hidden="true" width="1920" height="1080" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#011d41]/90 via-[#011d41]/65 to-[#011d41]/20" />
        <div className="container relative mx-auto px-6 text-white">
          <Reveal y={6}><SectionLabel tone="light">Mickaël Lima · À propos</SectionLabel></Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-7 max-w-4xl font-serif text-[42px] font-normal leading-[1.05] tracking-tight md:text-6xl lg:text-[76px]">
              Un regard local.<br /><span className="font-accent italic">Une stratégie pour vous.</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">Estimer juste, présenter efficacement et négocier dans votre intérêt. Une méthode claire pour vendre dans les meilleures conditions.</p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <PillButton to="/contact" variant="light">Échanger sur mon projet</PillButton>
              <a href="#mon-parcours" className="inline-flex items-center gap-2 text-sm text-white/85 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white">Faire connaissance <ArrowDown size={15} aria-hidden="true" /></a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="mon-parcours" className="scroll-mt-28 py-24 md:py-32">
        <div className="container mx-auto grid items-start gap-16 px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-24">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <figure className="relative mx-auto max-w-md">
                <img src={AGENT_PHOTO} alt="Mickaël Lima Dos Santos, expert immobilier indépendant" width="800" height="1000" loading="lazy" className="aspect-[4/5] w-full rounded-[24px] object-cover" />
                <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/25 bg-[#011d41]/50 p-5 text-white backdrop-blur-2xl">
                  <p className="font-serif text-2xl">Mickaël Lima Dos Santos</p>
                  <p className="mt-1 text-xs text-white/75">Expert immobilier indépendant · Divonne-les-Bains</p>
                </figcaption>
                <a href="https://share.google/fvsAyaT6pI2059MZF" target="_blank" rel="noopener noreferrer" className="absolute -top-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white px-4 py-3 text-xs shadow-lg"><Star size={13} className="fill-[#011d41]" aria-hidden="true" />5,0 · 25 avis Google</a>
              </figure>
            </Reveal>
          </div>
          <div>
            <Reveal y={6}>
              <SectionLabel>Faisons connaissance</SectionLabel>
              <h2 className={`${heading} mt-7`}>Votre projet,<br /><span className="font-accent italic">mon engagement.</span></h2>
              <p className="mt-7 text-xl leading-relaxed">Bonjour, je suis Mickaël Lima Dos Santos, expert immobilier indépendant, basé à Divonne-les-Bains, au cœur du Pays de Gex.</p>
            </Reveal>
            <div className="mt-9 space-y-6 text-base leading-relaxed text-gray-500 md:text-lg">
              <Reveal y={6}><p>Depuis 8 ans, j’accompagne les projets immobiliers du secteur : appartements, maisons, biens de prestige et locaux commerciaux. Plus de 240 ventes réalisées dans le Pays de Gex au cours des cinq dernières années ont construit ma connaissance du terrain.</p></Reveal>
              <Reveal y={6}><p>Bilingue français-anglais, je travaille avec une clientèle française, suisse et internationale : frontaliers, expatriés et collaborateurs du CERN, de l’ONU et de l’OMS. Cette proximité m’aide à comprendre les attentes de chaque acquéreur.</p></Reveal>
              <Reveal y={6}><p>Mon ancrage à Divonne me permet de lire les micro-marchés commune par commune, de connaître les infrastructures locales et d’estimer votre bien au juste prix dès notre premier rendez-vous. Rémunéré uniquement à la commission, je partage votre objectif : une vente réussie.</p></Reveal>
            </div>
            <Reveal y={6}><div className="mt-9 flex flex-wrap gap-4"><PillButton to="/estimation">Estimer mon bien</PillButton><PillButton to="/contact" variant="ghost">Me contacter</PillButton></div></Reveal>
          </div>
        </div>
      </section>

      <section aria-label="Mon expérience en chiffres" className="border-y border-[#ebebeb] bg-[#fafafa] py-10 md:py-14">
        <div className="container mx-auto grid grid-cols-2 gap-x-8 gap-y-10 px-6 md:grid-cols-3 lg:grid-cols-6">
          {KEY_STATS.map((stat, i) => <Reveal key={stat.label} delay={i * 0.04} y={6}><p className="font-accent text-[42px] leading-none md:text-5xl">{stat.value}</p><p className="mt-3 max-w-[150px] text-xs leading-relaxed text-gray-500">{stat.label}</p></Reveal>)}
        </div>
      </section>

      <PartnerMethod
        id="about-method-title"
        label="Ma méthode & mes valeurs"
        title={<>Une méthode claire.<br /><span className="font-accent italic">À chaque étape.</span></>}
        description="Le marché frontalier a ses codes. Mon rôle : les traduire en décisions concrètes pour votre vente."
        steps={APPROACH.map(({ value, ...step }) => ({ ...step, text: `${step.text} ${value}` }))}
      />

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <Reveal y={6}>
            <div className="grid gap-7 lg:grid-cols-2 lg:items-end lg:gap-20">
              <div><SectionLabel>Un accompagnement complet</SectionLabel><h2 className={`${heading} mt-7`}>Les moyens d’une vente<br /><span className="font-accent italic">bien préparée.</span></h2></div>
              <div><p className="max-w-lg leading-relaxed text-gray-500">De la première estimation à la remise des clés, les moyens d’une commercialisation soignée.</p><PillButton to="/mandat-exclusif" className="mt-6">Découvrir le mandat exclusif</PillButton></div>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-x-12 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((item, i) => <Reveal key={item.title} y={6}><article className="h-full border-t border-[#011d41]/15 py-8"><span aria-hidden="true" className="font-accent text-3xl text-[#011d41]/35">0{i + 1}</span><h3 className="mt-5 font-serif text-2xl font-normal tracking-tight">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-gray-500">{item.text}</p></article></Reveal>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#011d41] py-24 md:py-32">
        <img src="/images/pool-cta-final.jpg" alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-[#011d41]/75" />
        <div className="container relative mx-auto px-6 text-center text-white"><Reveal y={6}><SectionLabel tone="light">Parlons de votre projet</SectionLabel><h2 className={`${heading} mt-7`}>Tout commence<br /><span className="font-accent italic">par un échange.</span></h2><p className="mx-auto mt-6 max-w-lg leading-relaxed text-white/75">Une question, une estimation, un projet de vente ? Un premier échange confidentiel, sans engagement, avec une réponse annoncée sous 24 h.</p><div className="mt-9 flex flex-wrap justify-center gap-4"><PillButton to="/contact" variant="light">Me contacter</PillButton><PillButton to="/estimation" variant="light">Estimation offerte</PillButton></div></Reveal></div>
      </section>
    </div>
  </>
);
