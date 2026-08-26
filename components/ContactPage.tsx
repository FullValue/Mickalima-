import React from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Star,
    MessageSquare,
    Clock,
    Globe,
    ShieldCheck,
    ChevronDown,
    ArrowRight,
} from 'lucide-react';
import { SEO } from './SEO';
import { IMAGES } from '../constants';
import { buildWhatsappUrl, WHATSAPP_PATH } from './oakline/whatsapp';
import { track } from './oakline/tracking';
import { m } from 'framer-motion';
import {
    Reveal,
    SectionLabel,
    SectionHeader,
    PillButton,
} from './oakline/primitives';

/**
 * Page Contact: alignée sur la DA « Oakline » (accueil / CtaContact) :
 * mêmes labels pilules, mêmes champs arrondis, boutons pilule, reveals.
 * Logique métier inchangée : Web3Forms, FAQ, WhatsApp, schema ContactPage.
 */

const CONTACT_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact: Mickaël Lima Agent Immobilier Pays de Gex',
    url: 'https://mickael-lima.immo/contact/',
    mainEntity: {
        '@type': 'RealEstateAgent',
        name: 'Mickaël Lima: L’agence Immo',
        telephone: '+33769313502',
        email: 'contact@mickael-lima.immo',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '328 Rue des Fontanettes',
            addressLocality: 'Divonne-les-Bains',
            postalCode: '01220',
            addressCountry: 'FR',
        },
    },
};

/* Champs identiques à ceux du CTA de l'accueil (CtaContact). */
const inputClass =
    'w-full rounded-full border border-[#ebebeb] bg-[#fafafa] px-5 py-3.5 text-sm text-[#011d41] placeholder:text-gray-400 transition-colors focus:border-[#011d41] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#011d41]/10';
const labelClass =
    'mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-gray-500';

export const ContactPage: React.FC = () => {
    const [activeFaq, setActiveFaq] = React.useState<number | null>(null);
    const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        formData.append('access_key', '38f90cdc-9f17-48ef-bae6-f94e9b44e41f');
        formData.append('subject', 'Contact: mickael-lima.immo');
        formData.append('from_name', 'mickael-lima.immo');
        formData.append('botcheck', '');

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: json,
            });
            const data = await response.json();
            if (data.success) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                console.error('Web3Forms error:', data);
                setStatus('error');
            }
        } catch (err) {
            console.error('Fetch error:', err);
            setStatus('error');
        }
    };

    const faqs = [
        {
            question: "Combien de temps prend une estimation complète ?",
            answer: "Une estimation sérieuse nécessite généralement 48h. Nous nous déplaçons d'abord sur site pour analyser votre bien, puis nous étudions les données marché avant de vous remettre un dossier complet et confidentiel."
        },
        {
            question: "Proposez-vous des mandats simples ou uniquement exclusifs ?",
            answer: "Si nous privilégions le Mandat Exclusif pour un investissement marketing maximal (vidéo, reportage photo premium, diffusion prioritaire), nous proposons également un Mandat Signature offrant une flexibilité totale."
        },
        {
            question: "Comment garantissez-vous la confidentialité de la vente ?",
            answer: "Nous pouvons opter pour une commercialisation 'Off-Market'. Dans ce cadre, aucune annonce publique n'est diffusée. Nous sollicitons uniquement notre réseau d'acquéreurs préalablement qualifiés et financièrement solides."
        },
        {
            question: "Couvrez-vous le bassin Genevois ?",
            answer: "Absolument. Notre expertise historique se situe dans le Pays de Gex et l'agglomération frontalière, ce qui nous permet d'attirer une clientèle locale et internationale à fort pouvoir d'achat."
        }
    ];

    return (
        <>
        <SEO
            title="Contact | Estimation Gratuite: Mickaël Lima Pays de Gex"
            description="Contactez Mickaël Lima pour une estimation gratuite et confidentielle de votre bien dans le Pays de Gex. Réponse sous 48h, déplacement sur site inclus."
            canonical="/contact"
            schema={CONTACT_SCHEMA}
        />
        <div className="min-h-screen bg-white">
            {/* ---------------------------------- HERO */}
            <section className="relative flex min-h-[620px] items-center overflow-hidden bg-[#011d41] pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/contact-hero.jpg"
                        width="1920"
                        height="1080"
                        loading="eager"
                        decoding="async"
                        alt="Contact"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#011d41]/95 via-[#011d41]/60 to-[#011d41]/10" />
                </div>

                <div className="container relative z-20 mx-auto px-6 text-left text-white">
                    <Reveal y={6}>
                        <SectionLabel tone="light">Contact &amp; Échanges</SectionLabel>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <h1 className="mt-6 font-serif text-4xl leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
                            Votre projet commence
                            <br />
                            <span className="italic">ici.</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.16}>
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                            Une question, une estimation, un projet de vente ?
                            Réponse garantie sous 48h, déplacement sur site
                            inclus dans tout le Pays de Gex.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* ---------------------------------- FORMULAIRE */}
            <section className="relative overflow-hidden py-24 md:py-32">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-0 top-0 h-[800px] w-1/3 translate-x-1/2 skew-x-12 bg-[#011d41]/5 opacity-50"
                />

                <div className="container relative z-10 mx-auto px-6">
                    <Reveal>
                        <div className="flex min-h-[750px] flex-col overflow-hidden rounded-[24px] border border-[#ebebeb] bg-white shadow-[0_40px_80px_-40px_rgba(1,29,65,0.25)] lg:flex-row">
                            {/* Panneau gauche: navy */}
                            <div className="relative flex flex-col justify-between overflow-hidden bg-[#011d41] p-10 text-white md:p-14 lg:w-5/12">
                                <div className="absolute inset-0 z-0">
                                    <img src={IMAGES.cardImage} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-20 mix-blend-overlay grayscale" />
                                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#011d41]/90 via-[#011d41]/95 to-[#011d41]" />
                                </div>
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -translate-y-1/2 translate-x-1/2 top-0 right-0 z-10 h-96 w-96 rounded-full bg-white/5 blur-[100px]"
                                />

                                <div className="relative z-20">
                                    <SectionLabel tone="light">Contact</SectionLabel>

                                    <h2 className="mt-8 font-serif text-4xl leading-[1.08] tracking-tight md:text-5xl">
                                        Parlons de
                                        <br />
                                        <span className="italic">votre projet.</span>
                                    </h2>
                                    <p className="mb-12 mt-6 max-w-sm leading-relaxed text-white/70">
                                        Une question, une estimation, un projet
                                        de vente ? Je suis à votre écoute pour
                                        un échange confidentiel et sans
                                        engagement.
                                    </p>

                                    {/* Accès rapides : appel direct + email */}
                                    <div className="space-y-6">
                                        <a href="tel:+33769313502" className="group flex w-fit items-center gap-5">
                                            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md transition-colors duration-300 group-hover:bg-white group-hover:text-[#011d41]">
                                                <Phone size={18} />
                                            </span>
                                            <span>
                                                <span className="block font-semibold tracking-wide transition-colors group-hover:text-white/80">07 69 31 35 02</span>
                                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Appel direct</span>
                                            </span>
                                        </a>
                                        <a href="mailto:contact@mickael-lima.immo" className="group flex w-fit items-center gap-5">
                                            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md transition-colors duration-300 group-hover:bg-white group-hover:text-[#011d41]">
                                                <Mail size={18} />
                                            </span>
                                            <span>
                                                <span className="block font-semibold tracking-wide transition-colors group-hover:text-white/80">contact@mickael-lima.immo</span>
                                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Réponse sous 24h</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>

                                {/* Avis clients */}
                                <div className="relative z-20 mt-12 flex items-center gap-6 border-t border-white/10 pt-10">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3].map((i) => (
                                            <img
                                                key={i}
                                                src={`https://i.pravatar.cc/100?img=${i + 30}`}
                                                alt=""
                                                aria-hidden="true"
                                                loading="lazy"
                                                className="h-12 w-12 rounded-full border-2 border-[#011d41] object-cover"
                                            />
                                        ))}
                                    </div>
                                    <div>
                                        <div className="mb-1 flex items-center gap-1 text-white">
                                            <Star size={16} fill="currentColor" className="text-white" aria-hidden="true" />
                                            <span className="ml-2 font-semibold text-lg">5/5</span>
                                        </div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">25 avis clients</p>
                                    </div>
                                </div>
                            </div>

                            {/* Panneau droit: formulaire */}
                            <div className="relative flex flex-col justify-center bg-white p-10 md:p-14 lg:w-7/12">
                                <m.form
                                    onSubmit={handleSubmit}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="relative z-10 mx-auto w-full max-w-xl space-y-6"
                                >
                                    {/* Web3Forms */}
                                    <input type="hidden" name="access_key" value="38f90cdc-9f17-48ef-bae6-f94e9b44e41f" />
                                    <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                                    <div>
                                        <label htmlFor="contact-nom" className={labelClass}>Nom complet *</label>
                                        <input
                                            id="contact-nom"
                                            type="text"
                                            name="nom"
                                            required
                                            autoComplete="name"
                                            placeholder="Votre nom"
                                            className={inputClass}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="contact-email" className={labelClass}>Email *</label>
                                            <input
                                                id="contact-email"
                                                type="email"
                                                name="email"
                                                required
                                                autoComplete="email"
                                                placeholder="vous@exemple.fr"
                                                className={inputClass}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="contact-tel" className={labelClass}>Téléphone *</label>
                                            <input
                                                id="contact-tel"
                                                type="tel"
                                                name="telephone"
                                                required
                                                autoComplete="tel"
                                                placeholder="06 00 00 00 00"
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="contact-message" className={labelClass}>Message *</label>
                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            required
                                            rows={5}
                                            placeholder="Parlez-moi de votre projet…"
                                            className={`${inputClass} resize-none rounded-[20px]`}
                                        />
                                    </div>

                                    <PillButton
                                        type="submit"
                                        variant="solid"
                                        disabled={status === 'loading'}
                                        className="w-full"
                                    >
                                        {status === 'loading' ? 'Envoi en cours…' : 'Envoyer la demande'}
                                    </PillButton>

                                    <div aria-live="polite" className="min-h-[1.5rem] text-sm">
                                        {status === 'success' && (
                                            <div role="status" className="rounded-2xl bg-green-50 px-4 py-3 text-green-700">
                                                <p>Merci ! Votre message a bien été envoyé: réponse sous 24h.</p>
                                                <a
                                                    href={buildWhatsappUrl("Bonjour, je viens de vous transmettre une demande d'estimation depuis votre site.")}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={() => track('whatsapp_click_post_estimation', { page: '/contact' })}
                                                    className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                                                >
                                                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4"><path d={WHATSAPP_PATH} /></svg>
                                                    Continuer sur WhatsApp
                                                </a>
                                            </div>
                                        )}
                                        {status === 'error' && (
                                            <p role="alert" className="rounded-2xl bg-red-50 px-4 py-3 text-red-700">
                                                Une erreur est survenue. Appelez-moi directement au{' '}
                                                <a href="tel:+33769313502" className="font-semibold underline">07 69 31 35 02</a>.
                                            </p>
                                        )}
                                    </div>
                                </m.form>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ---------------------------------- CHARTE */}
            <section className="border-t border-[#ebebeb] bg-white py-24">
                <div className="container mx-auto px-6">
                    <SectionHeader
                        label="Notre charte"
                        title={
                            <>
                                Nos engagements,{' '}
                                <span className="italic">noirs sur blanc.</span>
                            </>
                        }
                        subtitle="Trois principes non négociables qui structurent chaque accompagnement, de la première prise de contact à la signature."
                    />

                    <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
                        {[
                            {
                                icon: Clock,
                                title: 'Réactivité absolue',
                                text: "Un interlocuteur unique. Réponse garantie sous 24h sur chaque demande, retour systématique après chaque visite.",
                            },
                            {
                                icon: ShieldCheck,
                                title: 'Sélection rigoureuse',
                                text: "Finis les visites curieuses. Chaque profil acquéreur est analysé et son financement pré-validé avant d'entrer chez vous.",
                            },
                            {
                                icon: Globe,
                                title: 'Portée internationale',
                                text: "Des connexions solides avec une clientèle frontalière, expatriée et des partenaires de relocalisation reconnus.",
                            },
                        ].map((item, idx) => (
                            <Reveal key={item.title} delay={idx * 0.08}>
                                <article className="h-full rounded-[24px] border border-[#ebebeb] bg-[#fafafa] p-10 transition-all duration-500 hover:-translate-y-1 hover:border-[#011d41]/20 hover:bg-white hover:shadow-[0_30px_60px_-30px_rgba(1,29,65,0.25)]">
                                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#011d41] shadow-sm">
                                        <item.icon size={22} aria-hidden="true" />
                                    </span>
                                    <h3 className="mt-8 font-serif text-2xl tracking-tight text-[#011d41]">{item.title}</h3>
                                    <p className="mt-4 leading-relaxed text-gray-500">{item.text}</p>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------------------------- FAQ + ZONE */}
            <section className="bg-[#fafafa] py-24">
                <div className="container mx-auto px-6">
                    <SectionHeader
                        label="FAQ"
                        title={
                            <>
                                Questions <span className="italic">fréquentes.</span>
                            </>
                        }
                        subtitle="Les réponses aux questions que l'on me pose le plus souvent avant un premier rendez-vous."
                    />

                    <div className="mt-16 flex flex-col items-stretch gap-10 lg:flex-row lg:gap-16">
                        {/* Accordéon FAQ */}
                        <div className="flex flex-col justify-center lg:w-7/12">
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className={`overflow-hidden rounded-[20px] border bg-white transition-colors duration-300 ${activeFaq === index ? 'border-[#011d41]' : 'border-[#ebebeb]'}`}
                                    >
                                        <button
                                            onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                            aria-expanded={activeFaq === index}
                                            className="flex w-full items-center justify-between p-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#011d41]"
                                        >
                                            <span className={`pr-4 font-semibold ${activeFaq === index ? 'text-[#011d41]' : 'text-[#011d41]/80'}`}>{faq.question}</span>
                                            <ChevronDown
                                                size={18}
                                                aria-hidden="true"
                                                className={`shrink-0 transition-transform duration-300 ${activeFaq === index ? 'rotate-180 text-[#011d41]' : 'text-gray-400'}`}
                                            />
                                        </button>
                                        <div
                                            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${activeFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                        >
                                            <div className="min-h-0 overflow-hidden px-6">
                                                <p className="pb-6 leading-relaxed text-gray-500">{faq.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Zone d'intervention */}
                        <div className="lg:w-5/12">
                            <div className="group relative flex h-full flex-col justify-center overflow-hidden rounded-[24px] bg-[#011d41] p-10 text-white md:p-12">
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -translate-y-1/2 translate-x-1/2 top-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-[80px] transition-colors duration-700 group-hover:bg-white/10"
                                />

                                <SectionLabel tone="light" className="self-start">Zone d'intervention</SectionLabel>

                                <div className="mt-10 mb-10 flex gap-6">
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                                        <MapPin size={18} className="text-white" aria-hidden="true" />
                                    </span>
                                    <div>
                                        <p className="mb-1 font-semibold text-lg">Pays de Gex (01)</p>
                                        <p className="leading-relaxed text-white/70">
                                            Intervention sur tout le secteur, en
                                            France comme côté genevois.
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-10 rounded-[20px] border border-white/15 bg-white/5 p-6 backdrop-blur-md">
                                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Communes couvertes</p>
                                    <p className="text-sm leading-relaxed text-white/85">
                                        Ferney-Voltaire, Divonne-les-Bains,
                                        Saint-Genis-Pouilly, Gex,
                                        Prévessin-Moëns, Cessy, Thoiry, Ornex,
                                        Crozet et communes voisines.
                                    </p>
                                </div>

                                <div className="flex gap-6 border-t border-white/10 pt-10">
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                                        <MessageSquare size={18} aria-hidden="true" />
                                    </span>
                                    <div>
                                        <p className="mb-1 font-semibold text-lg">WhatsApp privé</p>
                                        <p className="mb-4 leading-relaxed text-white/70">
                                            Une messagerie directe pour un
                                            échange immédiat et confidentiel.
                                        </p>
                                        <a
                                            href="https://wa.me/33769313502"
                                            onClick={() => track('whatsapp_click_contact_zone', { page: '/contact' })}
                                            className="inline-flex items-center gap-2 font-semibold text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                                        >
                                            Démarrer le chat <ArrowRight size={16} aria-hidden="true" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};
