import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object | object[];
}

const BASE_URL = 'https://mickael-lima.immo';
const DEFAULT_IMAGE = `${BASE_URL}/images/pool-cta-final.jpg`;

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  schema,
}) => {
  const fullTitle = title.includes('Mickaël Lima') ? title : `${title} | Mickaël Lima`;
  // Force trailing slash sur tous les canonicals pour matcher ce que sert Vercel
  // (résout le mismatch sitemap/canonical sur 40 pages identifié par l'audit)
  const normalizedCanonical = canonical
    ? (canonical.endsWith('/') ? canonical : canonical + '/')
    : undefined;
  const canonicalUrl = normalizedCanonical ? `${BASE_URL}${normalizedCanonical}` : undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Hreflang : audience frontalière franco-suisse (même URL pour fr-FR et fr-CH) */}
      {canonicalUrl && <link rel="alternate" hrefLang="fr-FR" href={canonicalUrl} />}
      {canonicalUrl && <link rel="alternate" hrefLang="fr-CH" href={canonicalUrl} />}
      {canonicalUrl && <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : schema)}
        </script>
      )}
    </Helmet>
  );
};
