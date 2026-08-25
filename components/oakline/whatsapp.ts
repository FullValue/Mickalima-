import { BIENS } from '../biensData';

/** Numéro WhatsApp de l'agence (+33 7 69 31 35 02). */
export const WHATSAPP_NUMBER = '33769313502';

/** Construit une URL wa.me avec message prérempli. */
export const buildWhatsappUrl = (message: string): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/** Glyphe officiel WhatsApp (réutilisable dans les icônes SVG). */
export const WHATSAPP_PATH =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z';

const HOME_MSG =
  'Bonjour, je viens de visiter votre site et j’aimerais échanger avec vous concernant mon projet immobilier.';
const NOS_BIENS_MSG =
  'Bonjour, je consulte actuellement vos biens disponibles et j’aimerais avoir davantage d’informations.';

/** Message prérempli adapté à la page sur laquelle se trouve le visiteur. */
export const contextualMessage = (pathname: string): string => {
  // Détail d'un bien : le titre de l'annonce est injecté automatiquement
  if (pathname.startsWith('/nos-biens/')) {
    const slug = decodeURIComponent(pathname.split('/')[2] ?? '');
    const bien = BIENS.find((b) => b.slug === slug);
    if (bien) {
      const label = `${bien.typeLabel} à ${bien.city}`;
      return `Bonjour, je suis intéressé(e) par le bien « ${label} » que je viens de voir sur votre site. Est-il toujours disponible ?`;
    }
    return NOS_BIENS_MSG;
  }
  if (pathname.startsWith('/nos-biens')) return NOS_BIENS_MSG;
  if (pathname.includes('estimation'))
    return 'Bonjour, je souhaiterais obtenir une estimation pour mon bien immobilier. Pouvez-vous m’accompagner ?';
  if (pathname.startsWith('/contact'))
    return 'Bonjour, je souhaiterais échanger avec vous concernant un projet immobilier.';
  if (pathname.startsWith('/mandat'))
    return 'Bonjour, j’aimerais en savoir plus sur vos mandats Signature et Exclusif.';
  if (pathname.startsWith('/prix-immobilier') || pathname.startsWith('/frontalier'))
    return 'Bonjour, je viens de consulter vos analyses de prix et j’aimerais échanger sur mon projet immobilier.';
  if (pathname.startsWith('/blog'))
    return 'Bonjour, je viens de lire un article sur votre blog et j’aimerais échanger avec vous.';
  if (pathname.startsWith('/partenaires'))
    return 'Bonjour, j’aimerais en savoir plus sur votre réseau de partenaires.';
  if (pathname.startsWith('/about'))
    return 'Bonjour, je viens de consulter votre parcours et j’aimerais échanger avec vous.';
  return HOME_MSG;
};
