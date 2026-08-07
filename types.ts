export interface NavItem {
  label: string;
  path: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: 'size' | 'bed' | 'bath' | 'car';
}

export interface Facility {
  title: string;
  description: string;
  image?: string;
}

export interface LocationItem {
  name: string;
  time: string;
  description: string;
  category?: string;
}

export interface RoomSize {
  name: string;
  size: string;
}

export interface FloorData {
  id: number;
  name: string;
  image: string;
}

export interface Service {
  title: string;
  description: string;
  icon: any;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  content?: string;
}

export type PropertyType = 'Maison' | 'Villa' | 'Appartement' | 'Terrain';
export type PropertyStatus = 'À vendre' | 'Sous compromis' | 'Vendu';

export interface Property {
  id: number;
  title: string;
  commune: string;
  type: PropertyType;
  status: PropertyStatus;
  price: number;
  surface: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  image: string;
  highlights: string[];
}

export interface Commune {
  slug: string;
  name: string;
  cp: string;
  distanceGeneve: string;
  prixApptMin: number;
  prixApptMax: number;
  prixMaisonMin: number;
  prixMaisonMax: number;
  delaiMoyen: number;
  pointsForts: string[];
  descriptionMarche: string;
  frontalierContext: string;
  evolutionPrix: string;
  voisines: [string, string];
}