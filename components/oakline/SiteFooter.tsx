import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { IMAGES, NAV_ITEMS } from '../../constants';
import { PillButton } from './primitives';

/**
 * Footer sombre #011d41 de la refonte — utilisé sur toutes les routes
 * SAUF /nos-biens* (qui conserve RevalisFooter, non modifié).
 * Newsletter pilule (web3forms), colonnes Pages / Services / Légal,
 * coordonnées, socials LinkedIn + Google, copyright Mickaël Lima.
 */

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = '38f90cdc-9f17-48ef-bae6-f94e9b44e41f';

const LINKEDIN_URL =
  'https://www.linkedin.com/in/mickael-lima-dos-santos-97137419b/';
const GOOGLE_URL = 'https://share.google/fvsAyaT6pI2059MZF';
const WHATSAPP_URL =
  'https://wa.me/33769313502?text=' +
  encodeURIComponent(
    "Bonjour Mickaël, je vous contacte depuis votre site au sujet d'un projet immobilier."
  );

/* Colonne « Pages » : NAV_ITEMS sans l'entrée /mandats (route inexistante,
   les mandats sont couverts par la colonne Services). */
const PAGES_LINKS = NAV_ITEMS.filter((item) => item.path !== '/mandats');

const SERVICES_LINKS = [
  { label: 'Mandat Signature', to: '/mandat-signature' },
  { label: 'Mandat Exclusif', to: '/mandat-exclusif' },
  { label: 'Estimation offerte', to: '/estimation' },
  { label: 'Nos biens', to: '/nos-biens' },
];

const LEGAL_LINKS = [
  { label: 'Mentions légales', to: '/mentions-legales' },
  { label: 'Politique de confidentialité', to: '/politique-confidentialite' },
];

const NewsletterForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'Newsletter — mickael-lima.immo');
    formData.append('from_name', 'mickael-lima.immo');
    formData.append('botcheck', '');
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
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
    <form onSubmit={handleSubmit} className="mt-7">
      <div className="flex max-w-md items-center gap-2 rounded-full border border-white/20 bg-white/10 p-1.5 backdrop-blur transition-colors focus-within:border-white/50">
        <label htmlFor="footer-newsletter-email" className="sr-only">
          Votre adresse email
        </label>
        <input
          id="footer-newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Votre adresse email"
          className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
        />
        {/* Honeypot anti-bot */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="group flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#011d41] transition-colors hover:bg-white/90 disabled:opacity-60"
        >
          {status === 'loading' ? 'Envoi…' : "S'abonner"}
          <ArrowUpRight
            size={15}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </button>
      </div>
      <div aria-live="polite" className="mt-3 min-h-[1.25rem] text-sm">
        {status === 'success' && (
          <p role="status" className="text-green-300">
            Merci ! Votre inscription à la newsletter est confirmée.
          </p>
        )}
        {status === 'error' && (
          <p role="alert" className="text-red-300">
            Une erreur est survenue — réessayez ou écrivez-moi directement.
          </p>
        )}
      </div>
    </form>
  );
};

export const SiteFooter: React.FC = () => (
  <footer className="bg-[#011d41] text-white">
    <div className="container mx-auto px-6 py-16 md:py-20">
      {/* Newsletter */}
      <div className="flex flex-col items-start justify-between gap-8 border-b border-white/15 pb-12 lg:flex-row lg:items-center">
        <h2 className="max-w-md font-serif text-3xl leading-snug tracking-tight md:text-4xl">
          Recevez les nouveaux biens en avant-première
        </h2>
        <NewsletterForm />
      </div>

      {/* Colonnes */}
      <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* Marque */}
        <div>
          <Link to="/" aria-label="Mickaël Lima — Accueil" className="inline-block">
            <img
              src={IMAGES.logoWhite}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="h-10 w-auto [filter:brightness(0)_invert(1)]"
            />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
            Agent immobilier dans le Pays de Gex et le bassin genevois. Vente,
            estimation et accompagnement des vendeurs comme des acquéreurs
            frontaliers.
          </p>
          {/* Socials */}
          <div className="mt-6 flex gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mickaël Lima sur WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 transition-colors hover:bg-[#25D366] hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[17px] w-[17px]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mickaël Lima sur LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 transition-colors hover:bg-white hover:text-[#011d41]"
            >
              <Linkedin size={17} aria-hidden="true" />
            </a>
            <a
              href={GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Avis Google — Mickaël Lima"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 font-serif text-base font-semibold transition-colors hover:bg-white hover:text-[#011d41]"
            >
              G
            </a>
          </div>
        </div>

        {/* Pages */}
        <nav aria-label="Pages du site">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Pages
          </p>
          <ul className="flex flex-col gap-3 text-sm">
            {PAGES_LINKS.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="rf-link text-white/85 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Services">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Services
          </p>
          <ul className="flex flex-col gap-3 text-sm">
            {SERVICES_LINKS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="rf-link text-white/85 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact + Légal */}
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Contactez-moi
          </p>
          <ul className="flex flex-col gap-3 text-sm text-white/85">
            <li className="flex items-center gap-2.5">
              <Phone size={15} aria-hidden="true" />
              <a href="tel:+33769313502" className="rf-link transition-colors hover:text-white">
                07 69 31 35 02
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={15} aria-hidden="true" />
              <a
                href="mailto:contact@mickael-lima.immo"
                className="rf-link transition-colors hover:text-white"
              >
                contact@mickael-lima.immo
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={15} aria-hidden="true" className="mt-0.5 shrink-0" />
              <span>328 Rue des Fontanettes, 01220 Divonne-les-Bains</span>
            </li>
          </ul>

          <p className="mb-4 mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Légal
          </p>
          <ul className="flex flex-col gap-3 text-sm">
            {LEGAL_LINKS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="rf-link text-white/85 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Barre basse */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-6 text-sm text-white/55">
        <span>© 2026 Mickaël Lima — L'agence Immo. Tous droits réservés.</span>
        <PillButton to="/estimation" variant="light" arrow className="!px-5 !py-2.5 text-xs">
          Estimation offerte
        </PillButton>
      </div>
    </div>
  </footer>
);
