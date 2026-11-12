"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { CATEGORY_LABELS } from "@/lib/constants";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      size: product.sizes?.[0] ?? "Unique",
    });
  };

  return (
    <Link
      href={`/produit/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden border border-line bg-paper-dark">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="eyebrow bg-ink text-paper px-2.5 py-1">
              Nouveau
            </span>
          )}
          {product.isPromo && (
            <span className="eyebrow bg-paper text-ink border border-ink px-2.5 py-1">
              Promo
            </span>
          )}
        </div>

        {/* CTA au survol */}
        <button
          onClick={handleQuickAdd}
          className={`absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-ink text-paper px-4 py-3 transition-all duration-300 ${
            isHovered
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.14em]">
            Ajouter au panier
          </span>
          <Plus size={16} />
        </button>
      </div>

      {/* Infos */}
      <div className="pt-4">
        <p className="eyebrow text-stone mb-1">
          {CATEGORY_LABELS[product.category] ?? product.category}
        </p>
        <h3 className="font-heading text-lg text-ink mb-1.5 group-hover:underline underline-offset-4">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span
            className={`text-sm font-medium ${product.originalPrice ? "text-clay" : "text-ink"}`}
          >
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-stone line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
