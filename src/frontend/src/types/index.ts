export interface Project {
  id: string;
  title: string;
  description: string;
  industry: string;
  serviceType: string;
  location: string;
  year: number;
  coverImage: string;
  images: string[];
  tags: string[];
  client: string;
  results: string;
  featured: boolean;
  hasBeforeAfter?: boolean;
  beforeImage?: string;
  afterImage?: string;
  challenge?: string;
  approach?: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  industries: string[];
  priceRange: string;
  imageUrl: string;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: string;
  useCases: string[];
  benefits: string[];
  color: string;
}

export interface CoverageZone {
  id: string;
  name: string;
  region: string;
  lat: number;
  lng: number;
  radius: number;
  description: string;
  active: boolean;
}
