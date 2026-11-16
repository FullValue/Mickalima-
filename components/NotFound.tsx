import React from 'react';
import { SEO } from './SEO';
import { PillButton, SectionLabel } from './oakline/primitives';

/**
 * Page 404. Pré-rendue en dist/404.html : Vercel et Netlify la servent avec
 * un vrai statut HTTP 404 pour tout chemin inconnu (plus de « soft 404 »).
 * Pas de canonical, noindex.
 */
export const NotFound: React.FC = () => (
  <>
    <SEO
      title="Page introuvable: Mickaël Lima"
      description="Cette page n'existe pas ou a été déplacée. Retrouvez les biens à vendre, les prix par commune et l'estimation dans le Pays de Gex."
      noindex
    />
    <section className="flex min-h-[80vh] items-center bg-[#FAF9F6] px-6 py-32">
      <div className="mx-auto w-full max-w-2xl text-center">
        <SectionLabel>Erreur 404</SectionLabel>
        <h1 className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight text-[#011d41] md:text-6xl">
          Page introuvable
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
          Cette page n'existe pas ou a été déplacée. Voici les pages les plus consultées du site.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PillButton to="/" variant="solid" arrow>Accueil</PillButton>
          <PillButton to="/nos-biens" variant="ghost">Biens à vendre</PillButton>
          <PillButton to="/prix-immobilier/pays-de-gex" variant="ghost">Prix par commune</PillButton>
          <PillButton to="/estimation" variant="ghost">Estimation</PillButton>
        </div>
      </div>
    </section>
  </>
);
