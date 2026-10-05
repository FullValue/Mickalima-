import React from 'react';
import {
    Calculator,
    Hammer,
    PaintBucket,
    Building2,
    Quote,
} from 'lucide-react';
import { SEO } from './SEO';
import { PartnerMethod } from './PartnerMethod';
import './partners-network.css';
import {
    Reveal,
    SectionLabel,
    PillButton,
} from './oakline/primitives';

/**
 * Page Partenaires: alignée sur la DA « Oakline » (accueil) :
 * Labels et boutons partagés, titres Instrument Sans avec accents italiques,
 * réseau d'experts et méthode en trois étapes sur une frise horizontale.
 */

const PARTNERS = [
    {
        icon: Calculator,
        area: 'financement',
        title: 'Courtiers en banque',
        description:
            "Des courtiers indépendants pour préparer votre financement et comparer les solutions, y compris avec des revenus en francs suisses.",
        tag: 'Financement',
    },
    {
        icon: Hammer,
        area: 'travaux',
        title: 'Artisans qualifiés',
        description:
            "Peinture, électricité, plomberie, menuiserie : les bons professionnels pour rafraîchir votre bien, avant une vente ou après un achat.",
        tag: 'Travaux',
    },
    {
        icon: PaintBucket,
        area: 'valorisation',
        title: "Architectes d'intérieur",
        description:
            "Home staging et réaménagement des espaces pour révéler le potentiel du bien et vous aider à imaginer votre futur intérieur.",
        tag: 'Valorisation',
    },
    {
        icon: Building2,
        area: 'renovation',
        title: 'Entreprises de rénovation',
        description:
            "Rénovation énergétique, gros œuvre ou extension : des interlocuteurs pour étudier la faisabilité, le budget et les étapes de votre projet.",
        tag: 'Rénovation',
    },
];


export const Partners: React.FC = () => {
    return (
        <>
            <SEO
                title="Partenaires | Réseau d'Experts: Mickaël Lima Pays de Gex"
                description="Courtiers, artisans qualifiés, architectes d'intérieur et entreprises de rénovation : le réseau de partenaires sélectionnés de Mickaël Lima pour votre projet immobilier."
                canonical="/partenaires"
            />
            <div className="min-h-screen bg-white">
                {/* ---------------------------------- HERO */}
                <section className="relative flex min-h-[620px] items-center overflow-hidden rounded-b-[32px] bg-[#011d41] pt-20">
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
                <section className="partners-network bg-white py-24 md:py-32" aria-labelledby="partners-network-title">
                    <div className="container mx-auto px-6">
                        <div className="partners-network__heading">
                            <Reveal>
                                <SectionLabel>Notre réseau</SectionLabel>
                                <h2 id="partners-network-title" className="partners-network__title font-serif">
                                    Les bonnes expertises,
                                    <br />
                                    <span className="italic">pour votre projet.</span>
                                </h2>
                            </Reveal>
                            <Reveal delay={0.08}>
                                <p className="partners-network__intro">
                                    Financement, travaux, aménagement : je vous
                                    oriente vers les professionnels adaptés à
                                    votre projet, dans le Pays de Gex et le
                                    bassin genevois.
                                </p>
                            </Reveal>
                        </div>

                        <div className="partners-network__grid">
                            <Reveal className="partners-network__visual" delay={0.08}>
                                <figure className="partners-network__figure">
                                    <img
                                        src="/images/services/conseil-immobilier.jpg"
                                        alt="Échange autour des plans d'un projet immobilier, dans un intérieur lumineux"
                                        width="1536"
                                        height="1024"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </figure>
                            </Reveal>
                            {PARTNERS.map((partner, idx) => (
                                <Reveal
                                    key={partner.area}
                                    className={`partners-network__item partners-network__item--${partner.area}`}
                                    delay={idx * 0.06}
                                >
                                    <article className="partners-network__card">
                                        <div className="partners-network__card-top">
                                            <span className="partners-network__icon">
                                                <partner.icon size={23} strokeWidth={1.5} aria-hidden="true" />
                                            </span>
                                            <span className="partners-network__tag">{partner.tag}</span>
                                        </div>
                                        <div>
                                            <h3 className="partners-network__card-title font-serif">{partner.title}</h3>
                                            <p className="partners-network__description">{partner.description}</p>
                                        </div>
                                    </article>
                                </Reveal>
                            ))}
                        </div>

                        <Reveal>
                            <div className="partners-network__contact">
                                <p className="font-serif">Les bons contacts, au bon moment.</p>
                                <PillButton to="/contact" variant="solid" arrow>
                                    Demander une mise en relation
                                </PillButton>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* ---------------------------------- MÉTHODE */}
                <PartnerMethod />

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
