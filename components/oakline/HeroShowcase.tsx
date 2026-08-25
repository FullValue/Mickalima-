import React, { useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { HERO_SLIDES } from '../../constants';
import { EASE, PillButton, SplitWords } from './primitives';

/**
 * Hero plein écran façon Oakline — version statique (sans slider) :
 * une seule image avec Ken Burns lent à l'apparition, titre géant centré,
 * et en bas un formulaire de demande (estimation gratuite / recherche
 * d'un bien / projet de vente) envoyé via Web3Forms.
 */

const WEB3FORMS_KEY = '38f90cdc-9f17-48ef-bae6-f94e9b44e41f';
const HERO_IMAGE = HERO_SLIDES[0];

type Status = 'idle' | 'loading' | 'success' | 'error';

const inputClass =
  'w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/45 transition-colors focus:border-white/60 focus:bg-white/15 focus:outline-none';
const labelClass =
  'mb-1.5 block text-left text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70';

export const HeroShowcase: React.FC = () => {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const formData = new FormData(form);
    const demande = String(formData.get('demande') ?? 'Demande');
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('subject', `Site ML Immo — ${demande}`);
    formData.append('from_name', 'mickael-lima.immo');
    formData.append('botcheck', '');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        form.reset();
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
    <section
      aria-label="Mickaël Lima Immobilier Prestige — Pays de Gex"
      className="relative flex min-h-[100svh] flex-col overflow-hidden rounded-b-[32px] shadow-[0_30px_80px_-30px_rgba(1,29,65,0.45)]"
    >
      {/* Image de fond unique — Ken Burns lent à l'apparition */}
      <m.img
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        initial={reduce ? false : { scale: 1.18 }}
        animate={{ scale: 1 }}
        transition={{ duration: 9, ease: EASE }}
      />

      {/* Overlays dégradés sombres + teinte bleue de la marque */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/55 via-black/20 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 via-black/30 to-transparent"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#011d41]/25" />

      {/* Titre */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-12 pt-32 text-center text-white">
        <m.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] backdrop-blur-sm"
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-white/70" />
          Agent immobilier prestige — Pays de Gex
        </m.p>

        <h1 className="max-w-5xl font-serif text-[2.6rem] leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
          <SplitWords text="L'excellence immobilière" delay={0.25} />
          <br />
          <span className="italic">
            <SplitWords text="au cœur du Pays de Gex" delay={0.45} />
          </span>
        </h1>

        <m.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
          className="mt-7 max-w-xl text-base font-light leading-relaxed text-white/85 md:text-lg"
        >
          Vente, estimation et accompagnement sur mesure pour une clientèle
          exigeante, frontalière et internationale.
        </m.p>
      </div>

      {/* Formulaire de demande — bas du hero */}
      <div className="relative z-10 px-4 pb-8 sm:px-6 md:pb-10">
        <m.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
          className="mx-auto w-full max-w-4xl rounded-[28px] border border-white/25 bg-white/10 p-6 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.65)] backdrop-blur-2xl md:p-8"
        >
          <div className="mb-5 flex flex-col gap-1 text-left sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-2xl tracking-tight text-white md:text-3xl">
                Votre projet immobilier
              </h2>
              <p className="mt-1 text-sm text-white/70">
                Réponse sous 24 h — estimation gratuite et sans engagement.
              </p>
            </div>
          </div>

          <div aria-live="polite">
            {status === 'success' && (
              <p className="mb-4 flex items-center gap-2 rounded-xl border border-green-300/30 bg-green-400/15 px-4 py-3 text-sm font-medium text-green-100 backdrop-blur-sm">
                <CheckCircle2 size={18} aria-hidden="true" />
                Merci ! Votre demande est bien envoyée — je vous recontacte sous 24 h.
              </p>
            )}
            {status === 'error' && (
              <p className="mb-4 flex items-center gap-2 rounded-xl border border-red-300/30 bg-red-400/15 px-4 py-3 text-sm font-medium text-red-100 backdrop-blur-sm">
                <AlertCircle size={18} aria-hidden="true" />
                Une erreur est survenue. Réessayez ou contactez-moi directement au 07 69 31 35 02.
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2" noValidate={false}>
            <div className="sm:col-span-2">
              <label htmlFor="hero-demande" className={labelClass}>
                Votre demande
              </label>
              <select id="hero-demande" name="demande" required defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Sélectionnez…
                </option>
                <option value="Estimation gratuite">Demande d'estimation gratuite</option>
                <option value="Recherche d'un bien">Recherche d'un bien</option>
                <option value="Projet de vente">Projet de vente</option>
                <option value="Autre demande">Autre demande</option>
              </select>
            </div>

            <div>
              <label htmlFor="hero-nom" className={labelClass}>
                Nom complet
              </label>
              <input id="hero-nom" name="nom" type="text" required autoComplete="name" placeholder="Jean Dupont" className={inputClass} />
            </div>

            <div>
              <label htmlFor="hero-telephone" className={labelClass}>
                Téléphone
              </label>
              <input id="hero-telephone" name="telephone" type="tel" required autoComplete="tel" placeholder="06 12 34 56 78" className={inputClass} />
            </div>

            <div>
              <label htmlFor="hero-email" className={labelClass}>
                Email
              </label>
              <input id="hero-email" name="email" type="email" required autoComplete="email" placeholder="jean@exemple.fr" className={inputClass} />
            </div>

            <div>
              <label htmlFor="hero-commune" className={labelClass}>
                Commune / Secteur <span className="normal-case text-[#011d41]/40">(optionnel)</span>
              </label>
              <input id="hero-commune" name="commune" type="text" placeholder="Ferney-Voltaire, Gex…" className={inputClass} />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="hero-message" className={labelClass}>
                Message <span className="normal-case text-[#011d41]/40">(optionnel)</span>
              </label>
              <textarea id="hero-message" name="message" rows={3} placeholder="Décrivez votre projet en quelques mots…" className={`${inputClass} resize-none`} />
            </div>

            <div className="flex flex-col items-start justify-between gap-4 sm:col-span-2 sm:flex-row sm:items-center">
              <p className="text-xs leading-relaxed text-white/55">
                Vos données restent confidentielles et ne sont jamais partagées.
              </p>
              <PillButton type="submit" variant="solid" arrow disabled={status === 'loading'} className="w-full sm:w-auto">
                {status === 'loading' ? (
                  <>
                    Envoi en cours
                    <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                  </>
                ) : (
                  'Envoyer ma demande'
                )}
              </PillButton>
            </div>
          </form>
        </m.div>
      </div>
    </section>
  );
};
