// Constantes du projet MAISON KENTE

export const SITE_NAME = "MAISON KENTE";
export const SITE_TAGLINE = "Mode · Élégance · Toi";
export const SITE_SLOGAN =
  "L'art du pagne, l'héritage des hommes de la terre d'or";
export const SITE_DESCRIPTION =
  "Maison de création et de distribution inspirée de l'héritage culturel africain";
export const SITE_URL = "https://maison-kente.vercel.app";

// Contact — Remplacer par le vrai numéro
export const WHATSAPP_NUMBER = "2250768609036"; // Format international sans +
export const PHONE_NUMBER = "+225 07 68 60 90 36";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_LINK = `tel:${WHATSAPP_NUMBER}`;

// Réseaux sociaux — À compléter
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/maisonkente",
  facebook: "https://facebook.com/maisonkente",
  tiktok: "https://tiktok.com/@maisonkente",
};

// Libellés d'affichage des collections (avec accents)
export const CATEGORY_LABELS: Record<string, string> = {
  cocooning: "Ensemble cocooning",
  cocktail: "Cocktail",
  ceremonies: "Cérémonies",
  professionnel: "Professionnel",
  "haut-bas": "Haut/Bas",
};

// Navigation
export const NAV_LINKS = [
  { label: "Accueil", href: "#hero" },
  { label: "La Maison", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Nos Tenues", href: "#products" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "Avis", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

// Palette de couleurs officielle de la marque
export const COLORS = {
  prune: "#480039", // Élégance · Sophistication · Force
  magenta: "#C0005A", // Féminité · Créativité · Énergie
  rose: "#F5B6D2", // Douceur · Modernité · Équilibre
  orange: "#E85D04", // Audace · Originalité · Vitalité
  ivoire: "#FFF4E6", // Pureté · Minimalisme · Élégance
} as const;
