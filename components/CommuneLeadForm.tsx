import React, { useState } from 'react';
import { CheckCircle, Phone } from 'lucide-react';
import { FORM_FIELD_CLASS, FORM_LABEL_CLASS } from './formStyles';
import { SourceField } from './SourceField';
import { track, trackLead, leadContext } from './oakline/tracking';

const WEB3FORMS_KEY = '38f90cdc-9f17-48ef-bae6-f94e9b44e41f';

interface CommuneLeadFormProps {
  communeName: string;
  communeCp: string;
}

/**
 * Formulaire d'estimation court, intégré aux pages commune :
 * type de bien, nom et téléphone suffisent. Même backend que les autres
 * formulaires (Web3Forms), avec la page et la source de la visite.
 */
export const CommuneLeadForm: React.FC<CommuneLeadFormProps> = ({ communeName, communeCp }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [started, setStarted] = useState(false);
  const idPrefix = `estim-${communeCp}`;

  const onFirstFocus = () => {
    if (started) return;
    setStarted(true);
    track('estimation_form_start', { form: 'estimation_commune', commune: communeName });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const payload = {
      ...Object.fromEntries(new FormData(form)),
      access_key: WEB3FORMS_KEY,
      subject: `Estimation ${communeName}: mickael-lima.immo`,
      from_name: 'mickael-lima.immo',
      demande: 'Estimation gratuite (page commune)',
      ville: `${communeName} (${communeCp})`,
      botcheck: '',
      ...leadContext(),
    };
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data.success) throw new Error('web3forms');
      trackLead('estimation_commune');
      setStatus('success');
      form.reset();
    } catch (err) {
      console.error('Web3Forms error:', err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center md:p-10" role="status">
        <CheckCircle size={40} className="mx-auto mb-4 text-primary" />
        <p className="text-2xl font-medium text-textMain">Demande reçue</p>
        <p className="mt-3 text-gray-500 font-light">
          Mickaël vous rappelle sous 24 h pour convenir de la visite de votre bien à {communeName}.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocus={onFirstFocus}
      className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_30px_60px_-30px_rgba(1,29,65,0.35)] md:p-8"
    >
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />
      <p className="text-xs font-bold uppercase tracking-widest text-primary/60">Gratuit · sans engagement</p>
      <h2 className="mt-2 text-2xl font-medium tracking-tight text-textMain md:text-3xl">
        Estimation gratuite à {communeName}
      </h2>
      <p className="mt-2 text-sm font-light text-gray-500">
        Trois informations suffisent. Mickaël vous rappelle sous 24 h.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor={`${idPrefix}-type`} className={FORM_LABEL_CLASS}>Type de bien</label>
          <select id={`${idPrefix}-type`} name="type_bien" required defaultValue="" className={FORM_FIELD_CLASS}>
            <option value="" disabled>Choisir</option>
            <option value="Maison">Maison</option>
            <option value="Appartement">Appartement</option>
            <option value="Terrain">Terrain</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={`${idPrefix}-nom`} className={FORM_LABEL_CLASS}>Nom</label>
            <input id={`${idPrefix}-nom`} name="nom" required autoComplete="name" className={FORM_FIELD_CLASS} placeholder="Votre nom" />
          </div>
          <div>
            <label htmlFor={`${idPrefix}-tel`} className={FORM_LABEL_CLASS}>Téléphone</label>
            <input id={`${idPrefix}-tel`} name="telephone" type="tel" required autoComplete="tel" className={FORM_FIELD_CLASS} placeholder="06 00 00 00 00" />
          </div>
        </div>
        <div>
          <label htmlFor={`${idPrefix}-email`} className={FORM_LABEL_CLASS}>E-mail (facultatif)</label>
          <input id={`${idPrefix}-email`} name="email" type="email" autoComplete="email" className={FORM_FIELD_CLASS} placeholder="vous@exemple.fr" />
        </div>
        <SourceField id={`${idPrefix}-source`} labelClassName={FORM_LABEL_CLASS} selectClassName={FORM_FIELD_CLASS} />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-6 w-full rounded-full bg-primary px-6 py-4 text-base font-bold text-white transition-colors hover:bg-textMain disabled:opacity-60"
      >
        {status === 'loading' ? 'Envoi…' : 'Demander mon estimation gratuite'}
      </button>
      {status === 'error' && (
        <p className="mt-3 text-sm text-red-600" role="alert">
          L’envoi a échoué. Appelez directement le 07 69 31 35 02.
        </p>
      )}
      <a href="tel:+33769313502" className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-primary">
        <Phone size={14} /> Ou appelez le 07 69 31 35 02
      </a>
    </form>
  );
};
