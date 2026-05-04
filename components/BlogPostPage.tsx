import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS, IMAGES } from '../constants';
import { SEO } from './SEO';
import { ArrowLeft, Calendar, User, Tag, ArrowUpRight, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium text-textMain mb-8 font-newsletter italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">Article introuvable</h2>
        <Link to="/blog" className="text-textMain font-bold hover:text-primary transition-colors flex items-center gap-2 bg-white px-8 py-4 rounded-full shadow-lg">
          <ArrowLeft size={20} /> Retour à l'observatoire
        </Link>
      </div>
    );
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Mickael Lima Dos Santos',
      url: 'https://mickael-lima.immo/about',
    },
    publisher: {
      '@type': 'Organization',
      name: "Mickael Lima — L'Agence Immo",
      url: 'https://mickael-lima.immo',
    },
    image: post.image,
    url: `https://mickael-lima.immo/blog/${post.slug}`,
  };

  return (
    <>
    <SEO
      title={`${post.title} — Mickael Lima`}
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
        </div>

        {/* Header Content */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors font-bold tracking-widest text-xs uppercase mb-8 backdrop-blur-md bg-white/10 px-4 py-2 rounded-full border border-white/20">
              <ArrowLeft size={16} />
              Retour aux articles
            </Link>

            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="bg-primary/20 backdrop-blur-md px-4 py-2 rounded-full border border-primary/30 text-white shadow-sm">
                {post.category}
              </span>
              <span className="flex items-center gap-2 text-white/90">
                <Calendar size={14} className="text-accent" /> {post.date}
              </span>
              <span className="hidden md:flex items-center gap-2 text-white/90">
                <Clock size={14} className="text-accent" /> 5 min de lecture
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] text-white drop-shadow-md break-words hyphens-auto max-w-4xl">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </header>

      {/* Main Content Area - Full width strategy with beautiful typography max-width */}
      <div className="w-full bg-white relative z-20 -mt-8 rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.05)] border-t border-gray-100">

        <div className="container mx-auto px-6 py-20 max-w-4xl">

          <div className="flex flex-col md:flex-row gap-16">

            {/* Left Sidebar: Socials & Author (Sticky) */}
            <div className="md:w-1/4 relative">
              <div className="sticky top-32 flex flex-col gap-10">

                {/* Author Info */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/10 shadow-lg mb-4">
                    <img src={IMAGES.heroAgent} alt="Mickael Lima" className="w-full h-full object-cover" />
                  </div>
                  <p className="font-bold text-textMain text-lg leading-tight">Mickael Lima</p>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1 mb-4">Expert Immobilier</p>
                  <p className="text-gray-500 font-light text-sm leading-relaxed hidden md:block">
                    Analyste du marché immobilier Gessien. Mes conseils sont fondés sur plus de 10 ans d'expérience locale.
                  </p>
                </div>

                {/* Share Options */}
                <div className="hidden md:flex flex-col gap-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Partager</p>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-surface border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-colors shadow-sm">
                      <Facebook size={16} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-surface border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-colors shadow-sm">
                      <Twitter size={16} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-surface border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors shadow-sm">
                      <Linkedin size={16} />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Main Content */}
            <main className="md:w-3/4">

              {/* Introduction/Excerpt Highlight */}
              <div className="mb-12 border-l-4 border-primary pl-6">
                <p className="text-2xl text-textMain font-medium leading-relaxed font-serif italic text-justify">
                  {post.excerpt}
                </p>
              </div>

              {/* Rich Text HTML Content */}
              {/* Added specific CSS rules to ensure gorgeous typography and blue details */}
              <div
                className="prose prose-lg md:prose-xl w-full max-w-none 
                prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-textMain prose-headings:mt-12 prose-headings:mb-6
                prose-p:text-[#4A5568] prose-p:font-light prose-p:leading-[1.8] prose-p:mb-8 prose-p:text-justify
                prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline hover:prose-a:text-blue-700
                prose-img:rounded-[2rem] prose-img:shadow-2xl prose-img:my-12 prose-img:w-full prose-img:border prose-img:border-gray-100
                prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:text-textMain prose-blockquote:my-10
                prose-strong:text-textMain prose-strong:font-bold
                prose-ul:list-disc prose-ul:ml-4 prose-li:text-[#4A5568] prose-li:font-light prose-li:mb-2 marker:text-primary"
                dangerouslySetInnerHTML={{ __html: post.content || '' }}
              />

              {/* Navigation Bottom Footer */}
              <div className="mt-24 pt-10 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-8 bg-surface p-8 rounded-[2rem]">
                <div>
                  <h4 className="font-bold text-textMain text-xl mb-2">Un projet immobilier en vue ?</h4>
                  <p className="text-gray-500 font-light">Discutons de vive voix de vos objectifs.</p>
                </div>
                <Link to="/contact" className="group bg-primary text-white font-bold p-3 pr-8 rounded-full hover:bg-textMain transition-all shadow-xl shadow-primary/20 flex items-center gap-4 text-base">
                  <div className="w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center transition-transform shrink-0">
                    <ArrowUpRight size={18} />
                  </div>
                  <span className="tracking-wide">Contactez-nous</span>
                </Link>
              </div>
            </main>

          </div>
        </div>
      </div>
    </article>
    </>
  );
};