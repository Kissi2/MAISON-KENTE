# CONTEXT.md — Projet "MAISON KENTE"

## 📋 Résumé du Projet
- **Nom de la marque** : MAISON KENTE
- **Baseline** : Mode · Élégance · Toi
- **Slogan** : L'art du pagne, l'héritage des hommes de la terre d'or
- **Type** : Site one-page responsive de présentation des tenues de la maison
- **Objectif** : Présenter, promouvoir les tenues et permettre le contact via WhatsApp/appel
- **Logo** : Monogramme « K » Bodoni en dégradé prune → magenta → orange brûlé, étoile à quatre branches, wordmark « MAISON KENTE » (`src/components/shared/Logo.tsx`, SVG inline)
- **Public cible** : Femmes attachées à l'héritage textile africain (Kenté, pagne, wax)

## 🎨 Direction Artistique
- **Esprit** : Beau, épuré, simple de navigation
- **Sections** : Distinguables visuellement les unes des autres
- **Couleurs (charte officielle)** : Prune Profond (#480039), Magenta (#C0005A), Rose Pâle (#F5B6D2), Orange Brûlé (#E85D04), Ivoire (#FFF4E6)
- **Inspiration** : Zalando (richesse visuelle, looks/boards), Mango (navigation épurée, catégories visuelles), Mango Outlet (promotions, countdown)

## 🏗️ Architecture
- **Type** : One-page (SPA-like avec scroll sections)
- **Framework** : Next.js 16 (App Router) avec TypeScript
- **Styling** : TailwindCSS 4 + Framer Motion 12 (animations)
- **Icônes** : Lucide React + SVG inline (Instagram, Facebook)
- **Fonts** : Bodoni Moda (titres) + Inter (corps)
- **Déploiement** : Vercel
- **Contact** : WhatsApp API link + tel: protocol
- **Package Manager** : pnpm

## 📐 Sections du Site (8 sections)
1. **Hero** — Plein écran sur prune, monogramme K, "MAISON KENTE", baseline, slogan, CTA
2. **Présentation de la marque** — Héritage Kenté / Ashanti, stats (500+ clientes, 50+ modèles, 100% qualité)
3. **Collections** — 5 catégories (Ensemble cocooning, Cocktail, Cérémonies, Professionnel, Haut/Bas)
4. **Nos tenues** — 8 pièces avec filtres par collection, badges Nouveau/Promo
5. **Lookbook** — Grille masonry avec 6 looks, hover effects
6. **Témoignages** — Carrousel d'avis + grille desktop, 5 témoignages
7. **Newsletter** — Inscription email, gradient burgundy
8. **Contact** — WhatsApp + Téléphone + Email + Formulaire → WhatsApp

## 📦 Stack Technique
- **Runtime** : Node.js 24+
- **Framework** : Next.js 16.2.6 (App Router, SSG)
- **Langage** : TypeScript 5.9
- **Styling** : TailwindCSS 4.3
- **Animations** : Framer Motion 12.40
- **Icônes** : Lucide React 1.16
- **Utilitaires** : clsx 2.1
- **Fonts** : Google Fonts (Bodoni Moda + Inter)
- **Déploiement** : Vercel

## 📁 Structure de Fichiers
```
kante/
├── public/
│   └── images/
│       ├── hero/          (about.svg)
│       ├── collections/   (6 SVG placeholders)
│       ├── products/       (8 SVG placeholders)
│       ├── lookbook/      (6 SVG placeholders)
│       └── testimonials/  (5 SVG avatars)
├── src/
│   ├── app/
│   │   ├── layout.tsx     (Playfair Display + Inter fonts, metadata SEO)
│   │   ├── page.tsx       (8 sections assemblées)
│   │   └── globals.css    (Design system TailwindCSS v4)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          (sticky, transparent→opaque, mobile menu)
│   │   │   └── Footer.tsx         (3 colonnes, réseaux sociaux, contact)
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx     (fullscreen, gradient, animations)
│   │   │   ├── AboutSection.tsx    (image + texte + stats)
│   │   │   ├── CollectionsSection.tsx (6 catégories visuelles)
│   │   │   ├── ProductsSection.tsx (filtres + grille produits)
│   │   │   ├── LookbookSection.tsx (grille masonry)
│   │   │   ├── TestimonialsSection.tsx (carrousel + grille)
│   │   │   ├── NewsletterSection.tsx (formulaire email)
│   │   │   └── ContactSection.tsx  (WhatsApp + téléphone + formulaire)
│   │   ├── ui/
│   │   │   ├── ProductCard.tsx     (hover, badges, CTA WhatsApp)
│   │   │   ├── CollectionCard.tsx   (hover zoom, overlay)
│   │   │   ├── WhatsAppButton.tsx   (flottant bas-droite)
│   │   │   ├── ScrollToTop.tsx      (apparaît après 300px scroll)
│   │   │   └── AnimatedSection.tsx  (wrapper Framer Motion)
│   │   └── shared/
│   │       ├── SectionTitle.tsx     (titre + sous-titre + décorateur)
│   │       └── Container.tsx       (max-w-7xl wrapper)
│   ├── data/
│   │   ├── collections.ts  (6 collections)
│   │   ├── products.ts     (8 produits)
│   │   └── testimonials.ts (5 témoignages)
│   ├── hooks/              (prêt pour hooks custom)
│   ├── lib/
│   │   ├── constants.ts    (couleurs, liens, config)
│   │   └── utils.ts        (formatPrice, getWhatsAppLink, scrollToElement)
│   └── types/
│       └── index.ts        (Product, Collection, Testimonial, NavLink, SocialLink)
├── tailwind.config.ts → Intégré dans globals.css (TailwindCSS v4)
├── next.config.ts        (images remote patterns)
├── tsconfig.json
├── package.json
└── CONTEXT.md
```

## 🌈 Thèmes
- Thème actif : `ACTIVE_THEME` dans `src/lib/theme.ts` (appliqué via `data-theme` sur `<html>`)
- Thèmes disponibles : `orange-neon` (actif — Pantone Orange #F57E1E + Neon Pink #F52380), `maison-kente` (charte d'origine)
- Chaque thème = un fichier `src/styles/themes/<nom>.css` définissant les variables `--theme-*` ; `globals.css` les mappe vers les utilitaires Tailwind (`bg-ink`, `text-clay`…)
- Ajouter un thème : copier un fichier de thème, ajuster les couleurs, l'importer dans `globals.css`, ajouter son nom dans `THEMES`

## 🎨 Palette de Couleurs (ancienne, à titre historique)
- burgundy: #722F37 | burgundy-light: #8E4A52 | burgundy-dark: #5A252C
- gold: #C9A96E | gold-light: #D4BC8E | gold-dark: #B08D4A
- rose: #F4C2C2 | rose-light: #F8D8D0 | rose-dark: #E8A8A0
- cream: #FFF8F0 | cream-dark: #F5EDE3
- charcoal: #2D2D2D | charcoal-light: #4A4A4A

## 📱 Points de Contact
- WhatsApp : https://wa.me/22500000000 (numéro placeholder à remplacer)
- Téléphone : tel:+22500000000 (numéro placeholder à remplacer)
- Email : contact@chezkante.com (placeholder)

## ✅ État d'Avancement
- [x] Initialisation du projet Next.js + TypeScript + TailwindCSS
- [x] Configuration palette, fonts, constants, types
- [x] Composants layout (Navbar, Footer, Container)
- [x] HeroSection + AboutSection
- [x] CollectionsSection + ProductsSection + données statiques
- [x] LookbookSection + TestimonialsSection
- [x] ContactSection + WhatsAppButton flottant
- [x] NewsletterSection
- [x] Animations Framer Motion + ScrollToTop + smooth scroll
- [x] Responsive design (mobile-first)
- [x] Build réussi ✅
- [ ] SEO (metadata, Open Graph) — déjà en partie dans layout.tsx
- [ ] Déploiement Vercel
- [ ] Remplacer les images placeholder SVG par de vraies photos
- [ ] Remplacer le numéro WhatsApp placeholder par le vrai numéro
- [ ] Créer un vrai logo (actuellement logo typographique)

## 🔗 Références
- https://www.zalando.fr/accueil-femme — Richesse visuelle, looks/boards, stories
- https://shop.mango.com/ci/fr/h/femme — Navigation épurée, catégories visuelles, newsletter
- https://www.mangooutlet.com/fr/fr/h/femme — Promotions, countdown, catégories produits