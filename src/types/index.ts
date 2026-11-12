// Types principaux du projet MAISON KENTE

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  /** Galerie complète (image principale incluse en premier) */
  images?: string[];
  category: string;
  isNew?: boolean;
  isPromo?: boolean;
  description?: string;
  /** Description longue affichée sur la fiche produit */
  longDescription?: string;
  sizes?: string[];
  color?: { name: string; hex: string };
}

export interface CartItem {
  key: string;
  productId: string;
  name: string;
  image: string;
  price: number;
  size: string;
  quantity: number;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  productCount?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  product?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}