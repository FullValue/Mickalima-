export interface SignatureVideo {
  id: string;
  src: string;
  poster: string;
  title: string;
  location: string;
}

// Ajouter ici les prochains films : les segments et l’enchaînement suivent cette liste.
export const SIGNATURE_VIDEOS: SignatureVideo[] = [
  {
    id: 'villa-grilly',
    src: '/video/villa-grilly-hero.mp4',
    poster: '/video/villa-grilly-poster.jpg',
    title: 'Une villa, une histoire',
    location: 'Grilly · Pays de Gex',
  },
  {
    id: 'villa-divonne',
    src: '/video/villa-divonne.mp4',
    poster: '/video/villa-divonne-poster.jpg',
    title: 'Un lieu à découvrir',
    location: 'Divonne-les-Bains · Pays de Gex',
  },
  {
    id: 'villa-peron',
    src: '/video/villa-peron.mp4',
    poster: '/video/villa-peron-poster.jpg',
    title: 'La lumière, en grand',
    location: 'Péron · Pays de Gex',
  },
  {
    id: 'villa-collonges',
    src: '/video/villa-collonges.mp4',
    poster: '/video/villa-collonges-poster.jpg',
    title: 'Un cadre singulier',
    location: 'Collonges · Pays de Gex',
  },
];
