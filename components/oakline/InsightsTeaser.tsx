import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../../constants';
import { PillButton, Reveal, SectionHeader } from './primitives';

/**
 * Teaser blog : 3 cartes (BLOG_POSTS) avec badge date arrondi,
 * zoom image au survol, lien vers /blog/:slug.
 */

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const InsightsTeaser: React.FC = () => (
  <section className="bg-white py-24 md:py-32">
    <div className="container mx-auto px-6">
      <SectionHeader
        label="Blog & conseils"
        title="Analyses du marché local"
        subtitle="Prix au m², fiscalité frontalière, stratégies de vente : mes analyses pour comprendre le marché du Pays de Gex avant de vous lancer."
      />

      <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3">
        {BLOG_POSTS.slice(0, 3).map((post, i) => {
          const date = new Date(post.date);
          const day = date.toLocaleDateString('fr-FR', { day: 'numeric' });
          const month = capitalize(
            date.toLocaleDateString('fr-FR', { month: 'long' })
          );
          return (
            <Reveal key={post.id} delay={i * 0.1}>
              <Link
                to={`/blog/${post.slug}`}
                aria-label={`Lire l'article : ${post.title}`}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#ebebeb] bg-white shadow-[0_2px_20px_-5px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgba(1,29,65,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#011d41]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Badge date arrondi */}
                  <span className="absolute left-5 top-5 flex min-w-[56px] flex-col items-center rounded-full bg-white/95 px-4 py-2.5 text-[#011d41] shadow-md backdrop-blur">
                    <span className="font-serif text-lg leading-none">{day}</span>
                    <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] leading-none">
                      {month}
                    </span>
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400">
                    {post.category}
                  </p>
                  <h3 className="mt-3 font-serif text-xl leading-snug text-[#011d41] line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 border-t border-[#ebebeb] pt-5 text-sm font-semibold text-[#011d41]">
                    Lire l'article
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.15} className="mt-12 text-center">
        <PillButton to="/blog" variant="ghost" arrow>
          Voir tous les articles
        </PillButton>
      </Reveal>
    </div>
  </section>
);
