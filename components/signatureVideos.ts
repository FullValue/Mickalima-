export interface SignatureVideo {
  id: string;
  src: string;
  poster: string;
  title: string;
  location: string;
}

// Ajouter ici les prochains films : flèches et points suivent cette liste.
export const SIGNATURE_VIDEOS: SignatureVideo[] = [
  {
    id: 'villa-grilly',
    src: '/video/villa-grilly-hero.mp4',
    poster: '/video/villa-grilly-poster.jpg',
    title: 'Une villa, une histoire',
    location: 'Grilly · Pays de Gex',
  },
];
