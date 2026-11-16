import React from 'react';

/**
 * « Comment m'avez-vous connu ? » — champ facultatif transmis avec chaque
 * formulaire (clé web3forms : source_declaree). Sert à comparer ce que
 * déclarent les clients avec ce qu'attribuent les outils d'analyse, qui
 * sous-estiment les recommandations et les assistants IA.
 */
const SOURCES = [
  'Recherche Google',
  'Assistant IA (ChatGPT, Claude, Perplexity, Gemini…)',
  'Recommandation d’un proche',
  'Panneau ou annonce d’un bien',
  'Portail immobilier (SeLoger, Leboncoin…)',
  'Réseaux sociaux',
  'Autre',
];

interface SourceFieldProps {
  id: string;
  labelClassName?: string;
  selectClassName?: string;
}

export const SourceField: React.FC<SourceFieldProps> = ({ id, labelClassName, selectClassName }) => (
  <div>
    <label htmlFor={id} className={labelClassName}>
      Comment m’avez-vous connu ?
    </label>
    <select id={id} name="source_declaree" defaultValue="" className={selectClassName}>
      <option value="">Facultatif</option>
      {SOURCES.map((source) => (
        <option key={source} value={source}>
          {source}
        </option>
      ))}
    </select>
  </div>
);
