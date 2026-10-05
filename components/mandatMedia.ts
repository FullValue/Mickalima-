export interface PropertyPhoto {
  src: string;
  alt: string;
  caption?: string;
  position?: string;
}

const photo = (name: string, alt: string, caption?: string, position?: string): PropertyPhoto => ({
  src: `/images/mandats/${name}.webp`, alt, caption, position,
});

const PHOTOS = {
  dusk: photo('villa-crepuscule', 'Villa éclairée à la tombée du jour, photographiée depuis les airs', 'À la tombée du jour'),
  entry: photo('entree-escalier', 'Entrée lumineuse avec escalier et banquette'),
  bedroom: photo('chambre-desencombree', 'Chambre désencombrée virtuellement avec une grande baie vitrée', 'Désencombrement virtuel'),
  attic: photo('chambre-sous-charpente', 'Chambre sous charpente ouverte sur un balcon'),
  kitchen: photo('cuisine-bleue', 'Cuisine bleue avec îlot central et grandes fenêtres', 'La lumière naturelle'),
  balcony: photo('terrasse-boisee', 'Terrasse en bois ouverte sur un jardin arboré', 'Dedans, dehors'),
  living: photo('salon-lumineux', 'Salon lumineux avec canapé gris et vue sur le jardin', 'Volumes et lumière'),
  office: photo('bureau-bois', 'Bureau avec bibliothèque en bois et grande fenêtre', 'Un espace à repenser'),
  gardenRoom: photo('chambre-jardin', 'Chambre avec vue sur le jardin et fenêtres en angle'),
  stairs: photo('escalier-bois', 'Escalier en bois dans une entrée vitrée'),
  woodBath: photo('salle-eau-bois', 'Salle d’eau en bois avec une porte ouverte sur la terrasse'),
  dining: photo('cuisine-conviviale', 'Cuisine et grande table en bois face au jardin'),
  villa: photo('villa-jardin', 'Villa contemporaine avec jardin et terrasse', 'Le premier regard'),
  woodLiving: photo('sejour-bois', 'Séjour avec poêle à bois et grandes baies vitrées', 'Une ambiance chaleureuse'),
  aerial: photo('villa-vue-aerienne', 'Vue aérienne d’une villa contemporaine et de son jardin', 'Une autre perspective'),
  patio: photo('terrasse-jardin', 'Terrasse abritée avec mobilier extérieur et vue dégagée'),
  lounge: photo('salon-bois', 'Salon avec canapé clair et meubles en bois'),
  bath: photo('salle-bain-lumineuse', 'Salle de bains lumineuse avec baignoire et meuble en bois'),
  dressing: photo('dressing', 'Dressing aménagé avec rangements en bois'),
};

export const SIGNATURE_PHOTOS = [PHOTOS.villa, PHOTOS.kitchen, PHOTOS.balcony, PHOTOS.dusk];
export const SIGNATURE_POTENTIAL_PHOTOS = [PHOTOS.bedroom, PHOTOS.living, PHOTOS.office, PHOTOS.woodLiving];
export const EXCLUSIVE_PHOTOS = [PHOTOS.dusk, PHOTOS.aerial, PHOTOS.dining, PHOTOS.patio, PHOTOS.attic];
export const CLIENT_PHOTO_COLUMNS = [
  [PHOTOS.villa, PHOTOS.kitchen, PHOTOS.gardenRoom, PHOTOS.woodBath, PHOTOS.lounge],
  [PHOTOS.balcony, PHOTOS.living, PHOTOS.stairs, PHOTOS.attic, PHOTOS.dressing],
  [PHOTOS.dusk, PHOTOS.dining, PHOTOS.office, PHOTOS.entry, PHOTOS.woodLiving],
  [PHOTOS.aerial, PHOTOS.patio, PHOTOS.bath, PHOTOS.kitchen, PHOTOS.villa],
];
