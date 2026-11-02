import React from 'react';
import { Star } from 'lucide-react';
import { GOOGLE_REVIEWS_COUNT } from '../../constants';
import { PillButton, Reveal, SectionHeader } from './primitives';
import { useMarqueeScroll } from './useMarqueeScroll';

/**
 * Avis clients : photo pleine largeur avec note agrégée Google (5,0/5,
 * nombre d’avis vérifié sur la fiche Google) puis slider autoplay des cartes d'avis: défilement
 * lent droite→gauche, pause au survol, fondu doux sur les bords.
 * Avis tirés de la fiche Google Business, texte repris tel que publié.
 */

const GOOGLE_REVIEWS_URL = 'https://share.google/fvsAyaT6pI2059MZF';

interface Testimonial {
  quote: string;
  name: string;
  context: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      `Excellente expérience avec Mickael. Il a géré la vente de notre maison avec un grand professionnalisme : estimation juste, communication fluide, conseils pertinents et un suivi irréprochable. Grâce à son implication, la vente s’est faite très rapidement et en toute sérénité. Je recommande sans hésiter !`,
    name: 'Dylan Areias',
    context: 'Vente d’une maison',
  },
  {
    quote:
      `Merci mille fois à Mickaël de nous avoir accompagnées pour l'achat d'un appartement pour notre maman. Toujours dispo en cas de besoin, à l'écoute du début à la fin, réactif, et surtout il ne met aucune pression (contrairement à d'autres) ... bref, un vrai bonheur d'avoir fait cette acquisition avec lui !`,
    name: 'Laetitia Le Goulias',
    context: 'Achat d’un appartement',
  },
  {
    quote:
      `Un grand merci à Mickael pour l’accompagnement tout au long de la vente de notre appartement. Il s’est montré disponible, réactif et nous a apporté de très bons conseils pendant ces mois, avec une vente rapide et efficace. Nous recommandons sans hésiter.`,
    name: 'Oceane Laquay',
    context: 'Vente d’un appartement',
  },
  {
    quote:
      `Je remercie Mickael Lima pour son engagement dès avant la signature du mandat et tout au long de la commercialisation de notre maison. J’ai apprécié ses retours réguliers, son sérieux et son professionnalisme. Je le recommande sans hésiter.`,
    name: 'Laurent Fine',
    context: 'Vente d’une maison',
  },
  {
    quote:
      `Mickael nous a accompagné tout le long de notre achat d’appartement, il s’est toujours rendu disponible et s’est toujours renseigné sur toutes nos questions, à été très bienveillant avec nous et très honnête. On voit qu’il aime son métier ! A recommander sans hésitation !`,
    name: 'Carina Fritz',
    context: 'Achat d’un appartement',
  },
  {
    quote:
      `Nous avons eu la chance d’être accompagnés par Mickael pour notre achat immobilier, et nous ne pouvions pas espérer mieux ! Du début à la fin, tout a été géré avec un suivi exemplaire, une communication fluide et au-delà de nos attentes. Toujours disponible, réactif et prêt à rendre service, il a su rendre ce projet simple et serein.`,
    name: 'Flo',
    context: 'Achat immobilier',
  },
  {
    quote:
      `Je recommande vivement Mickael LIMA Professionnel, réactif et à l'écoute, il a su m'accompagner à chaque étape de mon projet immobilier. Grâce à ses conseils avisés et son excellent suivi, j’ai pu acheter mon bien rapidement et en toute confiance. Un vrai plaisir de travailler avec un agent aussi impliqué!`,
    name: 'Laranjeira Vanessa',
    context: 'Achat immobilier',
  },
  {
    quote:
      `Nous avons eu le plaisir de traiter avec Mickaël pour l’acquisition des murs d’un local commercial dont il avait la vente en charge. Nous recommandons vivement ses services pour sa réactivité et son professionnalisme. Merci encore pour cette transaction qui s’est déroulée rapidement!`,
    name: 'Roxane Melon',
    context: 'Acquisition d’un local commercial',
  },
  {
    quote:
      `Très belle collaboration avec Mickael qui est un professionnel très précis. Sa compétence est en rapport avec son expérience. Je recommande vivement tant pour l'acquisition que la vente de votre bien :)`,
    name: 'Axel EBRARD',
    context: 'Achat et vente',
  },
  {
    quote:
      `Un grand merci à Mickaël Lima pour sont travail lors de l'estimation de mon bien. Il a été efficace et très professionnel. Je recommande vivement.`,
    name: 'Veronique',
    context: 'Estimation d’un bien',
  },
  {
    quote:
      `Excellent accompagnement de Mickael du début à la fin. Disponible, réactif, attentif et toujours très professionnel. Un vrai soutien avant, pendant et après la vente. Je recommande vivement !`,
    name: 'lamia hdidi',
    context: 'Vente immobilière',
  },
  {
    quote:
      `Je remercie Mickael de l’agence pour son accompagnement exceptionnel. Il est très bien équipé en matériel photo et vidéo, ce qui a permis de mettre en valeur notre appartement dans les règles de l’art. Le suivi a été sérieux, professionnel et rassurant du début à la fin. Nous recommandons vivement ses services !`,
    name: 'Julien D',
    context: 'Vente d’un appartement',
  },
];

const Stars: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div aria-label="Note de 5 sur 5" className={`flex gap-1 ${className}`}>
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
    ))}
  </div>
);

export const TestimonialsShowcase: React.FC = () => {
  const { ref: marquee, copies } = useMarqueeScroll(TESTIMONIALS.length);
  return (
  <section className="bg-white py-24 md:py-32">
    <div className="container mx-auto px-6">
      <SectionHeader
        label="Avis clients"
        title="Ils m'ont confié leur projet"
        subtitle="Vendeurs et acquéreurs du Pays de Gex partagent leur expérience: la confiance se construit transaction après transaction."
      />

      {/* Photo pleine largeur + note agrégée Google */}
      <Reveal className="mt-14 md:mt-16">
        <article className="relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-[28px] md:min-h-[500px]">
          <img
            src="/images/editorial/avis-pays-de-gex.jpg"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            width="1983"
            height="793"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#011d41]/95 via-[#011d41]/45 to-[#011d41]/10"
          />
          <div className="relative max-w-xl p-8 text-white md:p-12">
            <Stars className="text-white/90" />
            <p className="mt-5 font-serif text-5xl tracking-tight md:text-6xl">
              5,0<span className="text-3xl text-white/70">/5</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
              Sur <span className="font-semibold text-white">{GOOGLE_REVIEWS_COUNT} avis Google</span>: clientèle du Pays de Gex et du bassin genevois.
            </p>
            <PillButton
              href={GOOGLE_REVIEWS_URL}
              external
              variant="light"
              className="mt-7"
            >
              Lire les avis sur Google
            </PillButton>
          </div>
        </article>
      </Reveal>
    </div>

    {/* Slider autoplay des cartes d'avis (fondu sur les bords) */}
    <div
      ref={marquee}
      aria-label="Témoignages clients défilant automatiquement"
      tabIndex={0}
      className="marquee marquee-mask mt-12 overflow-x-auto md:mt-16 [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      <div
        className="marquee-track px-6"
        style={{ '--marquee-duration': '38s' } as React.CSSProperties}
      >
        {Array.from({ length: copies }, () => TESTIMONIALS).flat().map((t, i) => (
          <article
            key={`${t.name}-${i}`}
            aria-hidden={i >= TESTIMONIALS.length || undefined}
            className="mr-5 flex w-[300px] shrink-0 flex-col rounded-[24px] border border-[#ebebeb] bg-[#fafafa] p-7 sm:w-[340px]"
          >
            <Stars className="text-[#011d41]" />
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#011d41]/70">
              Avis Google
            </p>
            <blockquote className="mt-4 flex-1">
              <p className="text-[15px] leading-relaxed text-gray-600">« {t.quote} »</p>
            </blockquote>
            <div className="mt-6 border-t border-[#ebebeb] pt-4">
              <p className="font-serif text-base text-[#011d41]">{t.name}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                {t.context}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
  );
};
