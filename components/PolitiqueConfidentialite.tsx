import React from 'react';
import { SEO } from './SEO';

export const PolitiqueConfidentialite: React.FC = () => (
  <>
    <SEO
      title="Politique de confidentialité — Mickaël Lima"
      description="Politique de confidentialité de mickael-lima.immo : données collectées, finalité, durée de conservation, droits RGPD."
      canonical="/politique-confidentialite"
    />
    <section className="py-16 md:py-24 lg:py-32 bg-[#f7f7f7]">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="bg-white rounded-[10px] p-8 md:p-14">
        <h1 className="text-4xl md:text-5xl font-medium text-textMain tracking-tight leading-[1.1] mb-12">
          Politique de confidentialité
        </h1>

        <div className="space-y-10 text-textMain font-light leading-relaxed">
          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-4">Responsable du traitement</h2>
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
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-4">Données collectées</h2>
            <p className="text-base mb-3">Les données suivantes sont collectées via le formulaire de contact présent sur ce site :</p>
            <ul className="list-disc pl-6 space-y-1 text-base">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Message libre éventuel et informations relatives au bien immobilier</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-4">Finalité du traitement</h2>
            <p className="text-base">Les données collectées sont utilisées uniquement pour la prise de contact dans le cadre d'une démarche immobilière (estimation, vente, achat, conseil). Elles ne sont en aucun cas utilisées à des fins de prospection commerciale tierce, ni cédées, ni revendues.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-4">Base légale</h2>
            <p className="text-base">Le traitement repose sur votre consentement explicite, donné lors de la soumission du formulaire de contact (article 6.1.a du RGPD).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-4">Durée de conservation</h2>
            <p className="text-base">Les données sont conservées pendant <strong className="font-semibold">3 ans</strong> à compter du dernier contact, puis supprimées automatiquement.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-4">Vos droits</h2>
            <p className="text-base mb-3">Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données :</p>
            <ul className="list-disc pl-6 space-y-1 text-base">
              <li>Droit d'accès</li>
              <li>Droit de rectification</li>
              <li>Droit de suppression (« droit à l'oubli »)</li>
              <li>Droit à la limitation et à l'opposition au traitement</li>
              <li>Droit à la portabilité de vos données</li>
            </ul>
            <p className="text-base mt-4">Pour exercer ces droits, contactez : <a href="mailto:contact@mickael-lima.immo" className="text-primary hover:underline">contact@mickael-lima.immo</a></p>
            <p className="text-base mt-2">Vous pouvez également introduire une réclamation auprès de la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CNIL</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-4">Cookies</h2>
            <p className="text-base">Ce site n'utilise aucun cookie de suivi publicitaire ou de mesure d'audience tiers. Seuls les cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être déposés.</p>
          </section>
        </div>
        </div>
      </div>
    </section>
  </>
);
