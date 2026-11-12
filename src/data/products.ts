import type { Product } from "@/types";

const SIZES = ["S", "M", "L", "XL"];

export const products: Product[] = [
  {
    id: "tenue-1",
    name: "Robe Cérémonie Prune",
    price: 25000,
    originalPrice: 35000,
    image:
      "https://images.unsplash.com/photo-1601653233006-5c9fd30eab12?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1601653233006-5c9fd30eab12?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1723922967943-9d9fe2da5afd?q=80&w=1600&auto=format&fit=crop",
    ],
    category: "ceremonies",
    isPromo: true,
    description: "Robe de cérémonie longue, coupe fluide et élégante",
    longDescription:
      "Une robe de cérémonie pensée pour les grandes occasions : coupe fluide, tombé impeccable et silhouette allongée. Le tissu souple épouse la silhouette sans la contraindre, pour une élégance qui tient toute la soirée. À porter avec des talons fins et des bijoux dorés pour un rendu sophistiqué.",
    sizes: SIZES,
    color: { name: "Prune", hex: "#480039" },
  },
  {
    id: "tenue-2",
    name: "Ensemble Cocooning Ankara",
    price: 18000,
    image:
      "https://images.unsplash.com/photo-1663044023021-89c818cf9f2d?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1663044023021-89c818cf9f2d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1769451742168-7683113b46a8?q=80&w=1600&auto=format&fit=crop",
    ],
    category: "cocooning",
    isNew: true,
    description: "Ensemble ample en pagne ankara, confortable et enveloppant",
    longDescription:
      "Confectionné dans un lin naturel respirant, cet ensemble accompagne vos journées les plus chaudes sans jamais alourdir la silhouette. Coupe droite et légèrement ample, tissu qui se patine avec le temps pour un aspect toujours plus authentique. Un basique intemporel à associer à des sandales plates.",
    sizes: SIZES,
    color: { name: "Ocre", hex: "#c17f3a" },
  },
  {
    id: "tenue-3",
    name: "Ensemble Cocktail Orangé",
    price: 30000,
    image:
      "https://images.unsplash.com/photo-1626478211161-9d7ef0c70d3f?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1626478211161-9d7ef0c70d3f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611580045568-7201033c7a3b?q=80&w=1600&auto=format&fit=crop",
    ],
    category: "cocktail",
    isNew: true,
    description: "Haut et short en pagne orange fleuri, parfait pour les événements",
    longDescription:
      "Une robe cocktail qui capte la lumière : reflets orange brûlé, coupe ajustée et finitions soignées. Pensée pour les soirées où l'on veut marquer les esprits, sans jamais sacrifier le confort. Se porte aussi bien lors d'un dîner que d'une fête entre amies.",
    sizes: SIZES,
    color: { name: "Orange brûlé", hex: "#e85d04" },
  },
  {
    id: "tenue-4",
    name: "Ensemble Haut/Bas Kenté",
    price: 15000,
    originalPrice: 20000,
    image:
      "https://images.unsplash.com/photo-1726273561224-29c44e5114c8?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1726273561224-29c44e5114c8?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1720343340446-7dfba2a92ceb?q=80&w=1600&auto=format&fit=crop",
    ],
    category: "haut-bas",
    isPromo: true,
    description: "Crop top et jupe en Kenté doré, pour un look affirmé",
    longDescription:
      "Léger et fluide, cet ensemble haut/bas fleuri s'impose comme l'allié de vos journées ensoleillées. Imprimé délicat, coupe évasée qui laisse respirer, ceinture à la taille pour marquer la silhouette. Parfaite pour une balade en ville comme pour un déjeuner entre amies.",
    sizes: SIZES,
    color: { name: "Kenté doré", hex: "#d4a017" },
  },
  {
    id: "tenue-5",
    name: "Robe Cérémonie Ivoire",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1778577192389-e585ce1bb8b4?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1778577192389-e585ce1bb8b4?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1723922967349-d54aabf4084d?q=80&w=1600&auto=format&fit=crop",
    ],
    category: "ceremonies",
    description: "Robe de cérémonie en ivoire, coupe princesse",
    longDescription:
      "Une pièce d'exception pour les grandes cérémonies : coupe princesse, tissu satiné et tombé impeccable. L'ivoire sublime le teint et confère une élégance discrète, sans jamais en faire trop. Se porte avec des accessoires sobres pour laisser parler la robe.",
    sizes: SIZES,
    color: { name: "Ivoire", hex: "#f0ead6" },
  },
  {
    id: "tenue-6",
    name: "Ensemble Wax Imprimé",
    price: 22000,
    image:
      "https://images.unsplash.com/photo-1769349661389-0737f39a8507?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1769349661389-0737f39a8507?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1660695828374-4ff51ac9df5d?q=80&w=1600&auto=format&fit=crop",
    ],
    category: "haut-bas",
    isNew: true,
    description: "Ensemble en tissu wax, design africain contemporain",
    longDescription:
      "Un imprimé wax contemporain, taillé dans un tissu dense et coloré qui ne craint pas le quotidien. Coupe structurée, motifs graphiques affirmés : une pièce qui affirme un style et rend hommage à un savoir-faire textile intemporel.",
    sizes: SIZES,
    color: { name: "Wax", hex: "#b5651d" },
  },
  {
    id: "tenue-7",
    name: "Tailleur Midi Magenta",
    price: 28000,
    image:
      "https://images.unsplash.com/photo-1663044022996-ac509fe98af2?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1663044022996-ac509fe98af2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1784160053632-6eddd51bda26?q=80&w=1600&auto=format&fit=crop",
    ],
    category: "professionnel",
    description: "Tailleur midi magenta, élégance assurée au quotidien",
    longDescription:
      "Un tailleur midi magenta à la coupe ajustée, pensée pour sublimer la silhouette sans jamais la contraindre. Col rond, manches longues et tombé mi-mollet : une élégance sobre et affirmée, pour un dîner comme pour le bureau.",
    sizes: SIZES,
    color: { name: "Magenta", hex: "#c0005a" },
  },
  {
    id: "tenue-8",
    name: "Robe Maxi Tropicale",
    price: 20000,
    image:
      "https://images.unsplash.com/photo-1611580045568-7201033c7a3b?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611580045568-7201033c7a3b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1660695828374-4ff51ac9df5d?q=80&w=1600&auto=format&fit=crop",
    ],
    category: "cocktail",
    description: "Robe longue imprimé tropical, parfaite pour l'été",
    longDescription:
      "Une robe longue à l'imprimé tropical vibrant, coupe fluide et fentes discrètes pour une liberté de mouvement totale. Elle accompagne les soirées d'été, en bord de mer comme en terrasse, avec une allure résolument estivale.",
    sizes: SIZES,
    color: { name: "Tropical", hex: "#23394f" },
  },
];
