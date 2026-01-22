export interface ProductHighlight {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface ProductCategory {
  id: 'cani' | 'gatti' | 'pappagalli' | 'galline';
  title: string;
  description: string;
  highlights: ProductHighlight[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  benefit: string;
  icon: string;
  status: 'attivo' | 'in-arrivo';
  details?: string[];
}

export interface Testimonial {
  name: string;
  pet: string;
  quote: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface OpeningHour {
  day: string;
  hours: string;
}

export interface NavItem {
  label: string;
  path: string;
  fragment?: string;
}
