import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS, IMAGES } from '../constants';
import { SEO } from './SEO';
import { ArrowLeft, Calendar, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';
import { m } from 'framer-motion';
import { PillButton, SectionLabel } from './oakline/primitives';

const LAST_MODIFIED_DATE = '2026-05-18';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain mb-8 font-newsletter italic font-normal">Article introuvable</h2>
        <PillButton to="/blog" variant="solid">Retour à l'observatoire</PillButton>
      </div>
    );
  }

  // Calcul reading time : compte les mots du contenu HTML stripé (~200 wpm)
  // Fallback caractères/1000 si content vide.
  const plainText = (post.content || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const wordCount = plainText ? plainText.split(' ').length : 0;
  const readingTime = wordCount > 0
    ? Math.max(1, Math.ceil(wordCount / 200))
    : Math.max(1, Math.ceil((post.content?.length || 0) / 1000));

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: LAST_MODIFIED_DATE,
    author: {
      '@type': 'Person',
      name: 'Mickaël Lima Dos Santos',
      url: 'https://mickael-lima.immo/about/',
      sameAs: [
        'https://www.linkedin.com/in/mickael-lima-dos-santos-97137419b/',
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: "Mickaël Lima — L’agence Immo",
      url: 'https://mickael-lima.immo',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mickael-lima.immo/images/logo.png',
      },
    },
    image: `https://mickael-lima.immo${post.image}`,
    url: `https://mickael-lima.immo/blog/${post.slug}/`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://mickael-lima.immo/blog/${post.slug}/`,
    },
    wordCount,
    timeRequired: `PT${readingTime}M`,
  };

  return (
    <>
    <SEO
      title={`${post.title} — Mickaël Lima`}
      description={post.excerpt}
      canonical={`/blog/${post.slug}`}
      ogImage={post.image}
      ogType="article"
      schema={articleSchema}
    />
    <article className="bg-[#FAF9F6] min-h-screen relative w-full overflow-hidden">

      {/* 
        Full Width Hero Header 
        Simple and elegant with the image taking the whole screen height at the top
      */}
      <header className="relative w-full h-[60vh] md:h-[70vh] flex items-end pb-16 justify-center">
        {/* Post Cover Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient to ensure text readability */}
           <div className="absolute inset-0 bg-gradient-to-t from-[#011d41]/95 via-[#011d41]/55 to-[#011d41]/10"></div>
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
        </div>

        {/* Header Content */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full max-w-5xl">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link to="/blog" className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              <ArrowLeft size={16} />
              Retour aux articles
            </Link>

            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest mb-6">
              <SectionLabel tone="light">{post.category}</SectionLabel>
              <span className="flex items-center gap-2 text-white/90">
                <Calendar size={14} className="text-accent" /> {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
              <span className="hidden md:flex items-center gap-2 text-white/90">
                <Clock size={14} className="text-accent" /> {readingTime} min de lecture
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] text-white break-words hyphens-auto max-w-4xl">
              {post.title}
            </h1>
          </m.div>
        </div>
      </header>

      {/* Lecture structurée : rail auteur, colonne éditoriale, sommaire contextuel */}
      <div className="relative z-20 -mt-8 w-full rounded-t-[32px] border-t border-[#ebebeb] bg-white md:rounded-t-[48px]">

        <div className="container mx-auto max-w-[1240px] px-6 py-16 md:py-24">

          <div className="grid gap-12 lg:grid-cols-[190px_minmax(0,720px)_190px] lg:gap-12 xl:gap-16">

            {/* Left Sidebar: Socials & Author (Sticky) */}
            <aside className="relative order-2 lg:order-1">
              <div className="flex flex-col gap-8 rounded-[24px] border border-[#ebebeb] bg-[#fafafa] p-6 lg:sticky lg:top-28">

                {/* Author Info */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="mb-4 h-16 w-16 overflow-hidden rounded-full border-2 border-[#011d41]/10">
                    <img src={IMAGES.heroAgent} alt="Mickaël Lima" className="w-full h-full object-cover" />
                  </div>
                  <p className="font-serif text-xl leading-tight text-[#011d41]">Mickaël Lima</p>
                  <p className="mb-4 mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#011d41]/65">Expert immobilier</p>
                  <p className="hidden text-sm leading-relaxed text-gray-500 lg:block">
                    Analyste du marché immobilier Gessien. Mes conseils sont fondés sur 8 ans d'expérience locale.
                  </p>
                </div>

                {/* Share Options */}
                <div className="hidden flex-col gap-4 lg:flex">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">Partager</p>
                  <div className="flex gap-3">
                    <button type="button" aria-label="Partager sur Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ebebeb] bg-white text-[#011d41] transition-colors hover:bg-[#011d41] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#011d41]">
                      <Facebook size={16} />
                    </button>
                    <button type="button" aria-label="Partager sur X" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ebebeb] bg-white text-[#011d41] transition-colors hover:bg-[#011d41] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#011d41]">
                      <Twitter size={16} />
                    </button>
                    <button type="button" aria-label="Partager sur LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ebebeb] bg-white text-[#011d41] transition-colors hover:bg-[#011d41] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#011d41]">
                      <Linkedin size={16} />
                    </button>
                  </div>
                </div>

              </div>
            </aside>

            {/* Right Main Content */}
            <main className="order-1 min-w-0 lg:order-2">

              {/* Introduction/Excerpt Highlight */}
              <div className="mb-12 rounded-[24px] border border-[#ebebeb] bg-[#fafafa] p-7 md:p-9">
                <SectionLabel>À retenir</SectionLabel>
                <p className="mt-5 font-serif text-xl italic leading-relaxed text-[#011d41] md:text-2xl">
                  {post.excerpt}
                </p>
              </div>

              {/* Rich Text HTML Content */}
              {/* Added specific CSS rules to ensure gorgeous typography and blue details */}
              <div
                className="prose prose-lg w-full max-w-none prose-headings:font-serif prose-headings:font-normal prose-headings:tracking-tight prose-headings:text-[#011d41] prose-headings:mt-14 prose-headings:mb-5 prose-h2:text-3xl prose-h3:text-2xl prose-p:max-w-[68ch] prose-p:text-[#4f5968] prose-p:leading-[1.85] prose-p:mb-7 prose-a:font-semibold prose-a:text-[#011d41] prose-a:underline prose-a:decoration-[#011d41]/25 prose-a:underline-offset-4 hover:prose-a:decoration-[#011d41] prose-img:my-10 prose-img:w-full prose-img:rounded-[24px] prose-img:border prose-img:border-[#ebebeb] prose-blockquote:my-10 prose-blockquote:rounded-[20px] prose-blockquote:border-l-0 prose-blockquote:bg-[#011d41] prose-blockquote:px-8 prose-blockquote:py-7 prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:text-white prose-strong:font-semibold prose-strong:text-[#011d41] prose-ul:my-7 prose-ul:rounded-[20px] prose-ul:bg-[#fafafa] prose-ul:px-8 prose-ul:py-6 prose-li:my-2 prose-li:text-[#4f5968] marker:text-[#011d41]"
                dangerouslySetInnerHTML={{ __html: post.content || '' }}
              />

              {/* Navigation Bottom Footer */}
              <div className="mt-20 flex flex-col items-start justify-between gap-8 rounded-[24px] border border-[#ebebeb] bg-[#fafafa] p-8 sm:flex-row sm:items-center">
                <div>
                  <h2 className="mb-2 font-serif text-2xl text-[#011d41]">Un projet immobilier en vue ?</h2>
                  <p className="text-gray-500">Discutons de vive voix de vos objectifs.</p>
                </div>
                <PillButton to="/contact" variant="solid" arrow>Me contacter</PillButton>
              </div>
            </main>

            <aside className="order-3 hidden lg:block">
              <div className="sticky top-28 rounded-[24px] border border-[#ebebeb] bg-white p-6">
                <SectionLabel>Lecture</SectionLabel>
                <div className="mt-6 space-y-5 text-sm text-gray-500">
                  <div>
                    <p className="font-serif text-3xl text-[#011d41]">{readingTime} min</p>
                    <p className="mt-1">Temps de lecture estimé</p>
                  </div>
                  <div className="border-t border-[#ebebeb] pt-5">
                    <p className="font-serif text-3xl text-[#011d41]">{wordCount}</p>
                    <p className="mt-1">Mots analysés</p>
                  </div>
                  <PillButton to="/estimation" variant="ghost" className="w-full px-4" arrow>Estimation</PillButton>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </article>
    </>
  );
};
