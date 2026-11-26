import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { BIENS } from './biensData';

type Current = 'immobilier' | 'prix' | 'frontalier';

interface CommuneLinksProps {
  slug: string;
  name: string;
  current: Current;
}

/**
 * Maillage entre les trois pages d'une même commune (immobilier/estimation,
 * prix au m², vivre en frontalier) et les ventes réalisées dans la commune.
 */
export const CommuneLinks: React.FC<CommuneLinksProps> = ({ slug, name, current }) => {
  const pages: { key: Current; to: string; label: string; sub: string }[] = [
    { key: 'immobilier', to: `/${slug}/estimation-immobiliere/`, label: `Immobilier à ${name}`, sub: 'Agent indépendant · estimation gratuite' },
    { key: 'prix', to: `/prix-immobilier/${slug}/`, label: `Prix au m² à ${name}`, sub: 'Médianes DVF des maisons et appartements' },
    { key: 'frontalier', to: `/frontalier/${slug}/`, label: `Vivre à ${name} en travaillant à Genève`, sub: 'Trajets, prix et points à vérifier' },
  ];
  const ventes = BIENS.filter(
    (b) => b.status === 'Vendu' && b.city.localeCompare(name, 'fr', { sensitivity: 'base' }) === 0,
  );

  return (
    <section aria-labelledby={`commune-links-${slug}`} className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 id={`commune-links-${slug}`} className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-6">
          {name} sur ce site
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {pages
            .filter((p) => p.key !== current)
            .map((p) => (
              <Link
                key={p.key}
                to={p.to}
                className="group flex items-center justify-between rounded-[10px] border border-gray-100 bg-surface p-6 transition-all hover:border-primary/20"
              >
                <div>
                  <p className="text-lg font-bold text-textMain transition-colors group-hover:text-primary">{p.label}</p>
                  <p className="mt-0.5 text-sm font-light text-gray-500">{p.sub}</p>
                </div>
                <ArrowUpRight size={16} className="shrink-0 text-gray-400 group-hover:text-primary" />
              </Link>
            ))}
          {ventes.map((b) => (
            <Link
              key={b.slug}
              to={`/nos-biens/${b.slug}/`}
              className="group flex items-center justify-between rounded-[10px] border border-gray-100 bg-surface p-6 transition-all hover:border-primary/20"
            >
              <div>
                <p className="text-lg font-bold text-textMain transition-colors group-hover:text-primary">
                  Vendu à {name} : {b.typeLabel.toLowerCase()}
                </p>
                <p className="mt-0.5 text-sm font-light text-gray-500">{Math.round(b.surface)} m² · vente réalisée par Mickaël Lima</p>
              </div>
              <ArrowUpRight size={16} className="shrink-0 text-gray-400 group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
