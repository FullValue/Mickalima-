import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { IMAGES } from '../../constants';
import { PillButton, Reveal, SectionLabel } from './primitives';

/**
 * CTA final « Parlons-en » : fond image + overlay sombre, carte
 * formulaire blanche (nom, email, téléphone, intérêt, message).
 * POST vers l'endpoint web3forms utilisé par ContactPage/Contact/Hero
 * (même access_key publique côté client, même pattern de soumission).
 */

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = '38f90cdc-9f17-48ef-bae6-f94e9b44e41f';

type Status = 'idle' | 'loading' | 'success' | 'error';

const INTERESTS = [
  'Vendre mon bien',
  'Acheter un bien',
  'Faire estimer mon bien',
  'Autre demande',
];

const inputClass =
  'w-full rounded-full border border-[#ebebeb] bg-[#fafafa] px-5 py-3.5 text-sm text-[#011d41] placeholder:text-gray-400 transition-colors focus:border-[#011d41] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#011d41]/10';

export const CtaContact: React.FC = () => {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', "Contact page d'accueil: mickael-lima.immo");
    formData.append('from_name', 'mickael-lima.immo');
    formData.append('botcheck', '');

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const data = await response.json();
      if (data.success) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        console.error('Web3Forms error:', data);
        setStatus('error');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setStatus('error');
    }
  };

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Fond image + overlay sombre */}
      <img
        src={IMAGES.ctaBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#011d41]/88" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#011d41] via-[#011d41]/80 to-[#011d41]/60"
      />

      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Texte */}
          <div className="text-white">
            <Reveal y={6}>
              <SectionLabel tone="light">Parlons-en</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
                Un projet de vente ?
                <br />
                <span className="italic">Parlons-en.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
                Estimation gratuite et confidentielle, déplacement sur site
                inclus. Réponse sous 48h dans tout le Pays de Gex.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col gap-4 text-sm">
                <a
                  href="tel:+33769313502"
                  className="inline-flex items-center gap-3 font-semibold text-white transition-colors hover:text-white/70"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10">
                    <Phone size={16} aria-hidden="true" />
                  </span>
                  07 69 31 35 02
                </a>
                <a
                  href="mailto:contact@mickael-lima.immo"
                  className="inline-flex items-center gap-3 font-semibold text-white transition-colors hover:text-white/70"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10">
                    <Mail size={16} aria-hidden="true" />
                  </span>
                  contact@mickael-lima.immo
                </a>
              </div>
            </Reveal>
          </div>

          {/* Carte formulaire */}
          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="rounded-[24px] bg-white p-8 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] md:p-10"
            >
              <h3 className="font-serif text-2xl text-[#011d41]">
                Faites-moi passer votre message
              </h3>

              <div className="mt-7 grid gap-4">
                <div>
                  <label
                    htmlFor="cta-nom"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-gray-500"
                  >
                    Nom *
                  </label>
                  <input
                    id="cta-nom"
                    name="nom"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Votre nom"
                    className={inputClass}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="cta-email"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-gray-500"
                    >
                      Email *
                    </label>
                    <input
                      id="cta-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="vous@exemple.fr"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cta-tel"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-gray-500"
                    >
                      Téléphone
                    </label>
                    <input
                      id="cta-tel"
                      name="telephone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="06 00 00 00 00"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="cta-interet"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-gray-500"
                  >
                    Votre projet
                  </label>
                  <select id="cta-interet" name="interet" className={inputClass} defaultValue={INTERESTS[0]}>
                    {INTERESTS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="cta-message"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-gray-500"
                  >
                    Message *
                  </label>
                  <textarea
                    id="cta-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Décrivez votre projet en quelques lignes…"
                    className={`${inputClass} resize-none rounded-[20px]`}
                  />
                </div>

                {/* Honeypot anti-bot (champ invisible) */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
              </div>

              <PillButton
                type="submit"
                variant="solid"
                disabled={status === 'loading'}
                className="mt-7 w-full"
              >
                {status === 'loading' ? 'Envoi en cours…' : 'Envoyer le message'}
              </PillButton>

              <div aria-live="polite" className="mt-4 min-h-[1.5rem] text-sm">
                {status === 'success' && (
                  <p role="status" className="rounded-2xl bg-green-50 px-4 py-3 text-green-700">
                    Merci ! Votre message a bien été envoyé: je vous réponds
                    sous 48h.
                  </p>
                )}
                {status === 'error' && (
                  <p role="alert" className="rounded-2xl bg-red-50 px-4 py-3 text-red-700">
                    Une erreur est survenue. Réessayez ou appelez-moi
                    directement au 07 69 31 35 02.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
