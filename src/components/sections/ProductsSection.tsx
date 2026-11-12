"use client";

import { useState } from "react";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

const categories = [
  { id: "all", label: "Toutes" },
  { id: "cocooning", label: "Ensemble cocooning" },
  { id: "cocktail", label: "Cocktail" },
  { id: "ceremonies", label: "Cérémonies" },
  { id: "professionnel", label: "Professionnel" },
  { id: "haut-bas", label: "Haut/Bas" },
];

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-20 md:py-32 bg-paper">
      <Container>
        <SectionTitle
          eyebrow="Boutique"
          title="Nos tenues"
          subtitle="Des pièces sélectionnées avec soin, où tradition et modernité se rencontrent."
        />

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-14 border-b border-line pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`eyebrow pb-1 border-b-2 transition-colors duration-200 ${
                activeCategory === cat.id
                  ? "border-clay text-clay"
                  : "border-transparent text-stone hover:text-ink"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grille produits */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Message si aucun produit */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-stone text-lg">
              Aucune tenue dans cette collection pour le moment.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
