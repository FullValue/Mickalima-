import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock3 } from 'lucide-react';
import { BLOG_POSTS } from '../../constants';
import { PillButton, Reveal, SectionHeader } from './primitives';
import './insights-editorial.css';

const readingTime = (content: string) => Math.max(1, Math.ceil(content.replace(/<[^>]*>/g, ' ').trim().split(/\s+/).length / 200));

/** Disposition Propertiva : un article en grand, deux articles à droite. */
export const InsightsTeaser: React.FC = () => {
  const [featured, ...otherPosts] = BLOG_POSTS.slice(0, 3);
  if (!featured) return null;
  return (
    <section className="insights-editorial" aria-labelledby="insights-title">
      <div className="container mx-auto px-6">
        <SectionHeader
          id="insights-title"
          label="Guides et données locales"
          title={<>Comprendre le <span className="font-accent italic">marché local.</span></>}
          subtitle="Prix au m², fiscalité frontalière, stratégies de vente : mes analyses pour comprendre le marché du Pays de Gex avant de vous lancer."
        />
        <div className="insights-editorial-grid">
          <Reveal className="insights-featured-wrapper">
            <Link to={`/blog/${featured.slug}`} className="insights-featured" aria-label={`Lire l'article : ${featured.title}`}>
              <img src={featured.image} alt="" aria-hidden="true" loading="lazy" decoding="async" className="insights-featured-image" />
              <div className="insights-featured-shade" aria-hidden="true" />
              <span className="insights-reading-time"><Clock3 size={14} aria-hidden="true" />{readingTime(featured.content)} min de lecture</span>
              <div className="insights-featured-copy">
                <span className="insights-category">{featured.category}</span>
                <h3>{featured.title}</h3>
                <div className="insights-featured-meta">
                  <div className="insights-author">
                    <img src="/images/micka-photo.jpg" alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    <span>Mickaël Lima</span>
                    <span className="insights-meta-dot" aria-hidden="true">·</span>
                    <time dateTime={featured.date}>{new Date(featured.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
                  </div>
                  <span className="insights-read-more">Lire l’article <ArrowUpRight size={16} aria-hidden="true" /></span>
                </div>
              </div>
            </Link>
          </Reveal>
          <div className="insights-secondary">
            {otherPosts.map((post, index) => (
              <Reveal key={post.id} delay={0.1 + index * 0.1}>
                <Link to={`/blog/${post.slug}`} className="insights-small-card" aria-label={`Lire l'article : ${post.title}`}>
                  <div className="insights-small-image">
                    <img src={post.image} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    <span className="insights-reading-time"><Clock3 size={14} aria-hidden="true" />{readingTime(post.content)} min de lecture</span>
                  </div>
                  <h3>{post.title}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.15} className="mt-12 text-center">
          <PillButton to="/blog" arrow>Voir tous les articles</PillButton>
        </Reveal>
      </div>
    </section>
  );
};
