import React from 'react';
import {
    Calculator,
    Hammer,
    PaintBucket,
    Building2,
    SearchCheck,
    Handshake,
    KeyRound,
    Quote,
} from 'lucide-react';
import { SEO } from './SEO';
import {
    Reveal,
    SectionLabel,
    SectionHeader,
    PillButton,
} from './oakline/primitives';

/**
 * Page Partenaires — alignée sur la DA « Oakline » (accueil) :
 * labels pilules, titres Playfair avec accroche italique, boutons pilule,
 * reveals blur+fade, cartes arrondies 24px, section méthode sur fond navy.
 */

const PARTNERS = [
    {
        icon: Calculator,
        title: 'Courtiers en banque',
        description:
            "Des courtiers indépendants qui structurent votre financement, négocient votre taux et sécurisent votre capacité d'emprunt, y compris pour les revenus frontaliers en francs suisses.",
        tag: 'Financement',
    },
    {
        icon: Hammer,
        title: 'Artisans qualifiés',
        description:
            "Peintres, électriciens, plombiers, menuisiers : des intervenants connus et assurés pour les travaux de rafraîchissement qui augmentent la valeur perçue de votre bien avant la mise en vente.",
        tag: 'Travaux',
    },
    {
        icon: PaintBucket,
        title: "Architectes d'intérieur",
        description:
            "Home staging, réaménagement d'espaces, rénovation haut de gamme : des regards experts pour révéler le potentiel de votre bien et séduire une clientèle exigeante.",
        tag: 'Valorisation',
    },
    {
        icon: Building2,
        title: 'Entreprises de rénovation',
        description:
            "Gros œuvre, rénovations énergétiques, extensions : des entreprises sérieuses pour transformer un bien à fort potentiel — ou rassurer vos acquéreurs sur la suite du projet.",
        tag: 'Rénovation',
    },
];

const METHOD_STEPS = [
    {
        icon: SearchCheck,
        number: '01',
        title: 'Diagnostic de votre projet',
        text: "Lors de l'estimation ou du premier échange, j'identifie vos besoins réels : financement à consolider, travaux à anticiper, délais à tenir.",
    },
    {
        icon: Handshake,
        number: '02',
        title: 'Mise en relation ciblée',
        text: 'Je vous présente le bon interlocuteur — pas une liste anonyme. Un contact direct, avec le contexte de votre dossier déjà transmis.',
    },
    {
        icon: KeyRound,
        number: '03',
        title: 'Suivi coordonné',
        text: "Courtier, artisan, notaire : je reste votre point d'entrée unique jusqu'à la signature, pour que chaque intervenant avance dans le même sens.",
    },
];

export const Partners: React.FC = () => {
    return (
        <>
            <SEO
                title="Partenaires | Réseau d'Experts — Mickaël Lima Pays de Gex"
                description="Courtiers, artisans qualifiés, architectes d'intérieur et entreprises de rénovation : le réseau de partenaires sélectionnés de Mickaël Lima pour votre projet immobilier."
                canonical="/partenaires"
            />
            <div className="min-h-screen bg-white">
                {/* ---------------------------------- HERO */}
                <section className="relative flex min-h-[620px] items-center overflow-hidden bg-[#011d41] pt-20">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/images/partners-hero.jpg"
                            width="1920"
                            height="1080"
                            loading="eager"
                            decoding="async"
                            alt="Partenaires Immobiliers"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#011d41]/95 via-[#011d41]/60 to-[#011d41]/10" />
                    </div>

                    <div className="container relative z-20 mx-auto px-6 text-left text-white">
                        <Reveal y={6}>
                            <SectionLabel tone="light">Écosystème</SectionLabel>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <h1 className="mt-6 font-serif text-4xl leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
                                Le cercle
                                <br />
                                <span className="italic">de confiance.</span>
                            </h1>
                        </Reveal>
                        <Reveal delay={0.16}>
                            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                                Vendre ou acheter un bien implique souvent
                                d'autres projets : financement, rénovation,
                                aménagement. Pour répondre à l'ensemble de vos
                                besoins, je vous ouvre un réseau de partenaires
                                sélectionnés pour leur sérieux et leur
                                professionnalisme.
                            </p>
                        </Reveal>
                        <Reveal delay={0.24}>
                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <PillButton to="/contact" variant="light" arrow>
                                    Demander une mise en relation
                                </PillButton>
                                <a
                                    href="tel:+33769313502"
                                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    07 69 31 35 02
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* ---------------------------------- RÉSEAU */}
                <section className="bg-white py-24 md:py-32">
                    <div className="container mx-auto px-6">
                        <SectionHeader
                            label="Notre réseau"
                            title={
                                <>
                                    Des experts{' '}
                                    <span className="italic">
                                        triés sur le volet.
                                    </span>
                                </>
                            }
                            subtitle="Chaque partenaire a été choisi après collaboration concrète. Pas d'annuaire payant, pas de commission cachée : uniquement des professionnels que je recommanderais à ma propre famille."
                        />

                        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
                            {PARTNERS.map((partner, idx) => (
                                <Reveal key={partner.title} delay={idx * 0.08}>
                                    <article className="group h-full rounded-[24px] border border-[#ebebeb] bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#011d41]/20 hover:shadow-[0_30px_60px_-30px_rgba(1,29,65,0.25)] md:p-10">
                                        <div className="flex items-start justify-between gap-6">
                                            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f5f5f5] text-[#011d41] transition-colors duration-500 group-hover:bg-[#011d41] group-hover:text-white">
                                                <partner.icon
                                                    size={24}
                                                    strokeWidth={1.5}
                                                />
                                            </span>
                                            <span className="rounded-full border border-[#ebebeb] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                                                {partner.tag}
                                            </span>
                                        </div>
                                        <h3 className="mt-8 font-serif text-2xl tracking-tight text-[#011d41] md:text-3xl">
                                            {partner.title}
                                        </h3>
                                        <p className="mt-4 leading-relaxed text-gray-500">
                                            {partner.description}
                                        </p>
                                    </article>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ---------------------------------- MÉTHODE */}
                <section className="relative overflow-hidden bg-[#011d41] py-24 text-white md:py-32">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-white/5 blur-[120px]"
                    />
                    <div className="container relative z-10 mx-auto px-6">
                        <SectionHeader
                            tone="light"
                            label="La méthode"
                            title={
                                <>
                                    Comment je vous{' '}
                                    <span className="italic">oriente.</span>
                                </>
                            }
                            subtitle="Un réseau ne vaut que par la manière dont on l'active. Voici comment je mobilise mes partenaires à chaque étape de votre projet."
                        />

                        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
                            {METHOD_STEPS.map((step, idx) => (
                                <Reveal key={step.number} delay={idx * 0.1}>
                                    <article className="h-full rounded-[24px] border border-white/15 bg-white/[0.06] p-8 backdrop-blur-md transition-colors duration-500 hover:bg-white/10 md:p-10">
                                        <div className="flex items-center justify-between">
                                            <span className="font-serif text-5xl italic text-white/30">
                                                {step.number}
                                            </span>
                                            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10">
                                                <step.icon
                                                    size={20}
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </div>
                                        <h3 className="mt-8 font-serif text-2xl tracking-tight">
                                            {step.title}
                                        </h3>
                                        <p className="mt-4 leading-relaxed text-white/70">
                                            {step.text}
                                        </p>
                                    </article>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ---------------------------------- PROMESSE + CTA */}
                <section className="border-t border-[#ebebeb] bg-[#fafafa] py-24 md:py-32">
                    <div className="container mx-auto px-6 text-center">
                        <Reveal y={6}>
                            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#ebebeb] bg-white text-[#011d41] shadow-sm">
                                <Quote size={22} aria-hidden="true" />
                            </span>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <blockquote className="mx-auto mt-10 max-w-4xl font-serif text-3xl leading-[1.2] tracking-tight text-[#011d41] md:text-5xl">
                                «&nbsp;Un seul mot d'ordre&nbsp;:{' '}
                                <span className="italic">l'excellence.</span>&nbsp;»
                            </blockquote>
                        </Reveal>
                        <Reveal delay={0.16}>
                            <p className="mx-auto mt-8 max-w-2xl leading-relaxed text-gray-500 md:text-lg">
                                Estimation gratuite et confidentielle,
                                déplacement sur site inclus. Un projet dans le
                                Pays de Gex&nbsp;? Parlons-en.
                            </p>
                        </Reveal>
                        <Reveal delay={0.24}>
                            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <PillButton to="/estimation" variant="solid" arrow>
                                    Estimer mon bien
                                </PillButton>
                                <PillButton to="/contact" variant="ghost">
                                    Me contacter
                                </PillButton>
                            </div>
                        </Reveal>
                    </div>
                </section>
            </div>
        </>
    );
};
