import React from 'react';
import { SEO } from './SEO';

const MENTIONS_LEGALES_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Mentions légales — Mickaël Lima',
  url: 'https://mickael-lima.immo/mentions-legales/',
  publisher: {
    '@type': 'Person',
    name: 'Mickaël Lima',
    url: 'https://mickael-lima.immo',
  },
};

export const MentionsLegales: React.FC = () => (
  <>
    <SEO
      title="Mentions légales — Mickaël Lima"
      description="Mentions légales de mickael-lima.immo : éditeur, hébergeur, responsable de publication, données personnelles."
      canonical="/mentions-legales"
      schema={MENTIONS_LEGALES_SCHEMA}
    />
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-medium text-textMain tracking-tight leading-[1.1] mb-12">
          Mentions légales
        </h1>

        <div className="space-y-10 text-textMain font-light leading-relaxed">
          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-4">Éditeur du site</h2>
            <ul className="space-y-1.5 text-base">
              <li><strong className="font-semibold">Nom :</strong> Mickaël Lima (Michael Lima dos Santos)</li>
              <li><strong className="font-semibold">Qualité :</strong> Agent commercial immobilier indépendant</li>
              <li><strong className="font-semibold">Mandant :</strong> L’agence Immo — <a href="https://lagenceimmo01.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">lagenceimmo01.fr</a></li>
              <li><strong className="font-semibold">Adresse :</strong> 328 Rue des Fontanettes, 01220 Divonne-les-Bains</li>
              <li><strong className="font-semibold">Téléphone :</strong> <a href="tel:+33769313502" className="text-primary hover:underline">07 69 31 35 02</a></li>
              <li><strong className="font-semibold">Email :</strong> <a href="mailto:contact@mickael-lima.immo" className="text-primary hover:underline">contact@mickael-lima.immo</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-4">Responsable de la publication</h2>
            <p className="text-base">Mickaël Lima — joignable aux coordonnées ci-dessus.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-4">Hébergeur</h2>
            <ul className="space-y-1.5 text-base">
              <li><strong className="font-semibold">Société :</strong> Vercel, Inc.</li>
              <li><strong className="font-semibold">Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</li>
              <li><strong className="font-semibold">Site :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vercel.com</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-4">Propriété intellectuelle</h2>
            <p className="text-base">L'ensemble du contenu présent sur ce site (textes, images, logo, identité visuelle) est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-4">Données personnelles</h2>
            <p className="text-base">Les données personnelles communiquées via le formulaire de contact sont collectées uniquement aux fins de répondre à votre demande. Elles ne sont ni cédées, ni revendues à des tiers. Pour plus d'informations, consultez la <a href="/politique-confidentialite" className="text-primary hover:underline">politique de confidentialité</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-4">Cookies</h2>
            <p className="text-base">Ce site n'utilise pas de cookies de suivi tiers. Seuls les cookies techniques nécessaires au bon fonctionnement du site peuvent être déposés.</p>
          </section>
        </div>
      </div>
    </section>
  </>
);
