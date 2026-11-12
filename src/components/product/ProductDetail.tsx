"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Minus, Plus, MessageCircle } from "lucide-react";
import { products } from "@/data/products";
import { CATEGORY_LABELS, SITE_NAME } from "@/lib/constants";
import { formatPrice, getWhatsAppLink } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/types";

interface ProductDetailProps {
  product: Product;
  index: number;
}

export default function ProductDetail({ product, index }: ProductDetailProps) {
  const gallery = product.images?.length ? product.images : [product.image];
  const sizes = product.sizes?.length ? product.sizes : ["Unique"];

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const { addItem, open } = useCart();

  const prevProduct = products[(index - 1 + products.length) % products.length];
  const nextProduct = products[(index + 1) % products.length];

  const handleAddToCart = () => {
    addItem(
      {
        productId: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        size: selectedSize,
      },
      quantity,
    );
    open();
  };

  return (
    <section className="pt-[4.5rem] md:pt-20 lg:flex lg:min-h-screen">
      {/* Galerie */}
      <div className="lg:w-3/5 bg-paper-dark">
        <div className="relative aspect-[4/5] lg:aspect-auto lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)]">
          <Image
            src={gallery[activeImage]}
            alt={product.name}
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />

          {gallery.length > 1 && (
            <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 flex gap-2 bg-ink/30 backdrop-blur-sm p-2">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setActiveImage(i)}
                  className={`relative h-16 w-14 flex-shrink-0 overflow-hidden border-2 transition-colors ${
                    i === activeImage
                      ? "border-paper"
                      : "border-paper/40 hover:border-paper/80"
                  }`}
                  aria-label={`Voir la photo ${i + 1}`}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Informations */}
      <div className="lg:w-2/5 flex flex-col">
        <div className="flex-1 px-6 py-10 sm:px-10 lg:px-12 lg:py-16">
          {/* Repère + retour boutique */}
          <div className="flex items-center justify-between mb-6">
            <p className="eyebrow text-stone">
              {SITE_NAME} — {CATEGORY_LABELS[product.category] ?? product.category}
            </p>
            <Link
              href="/#products"
              className="group relative flex h-9 w-9 flex-shrink-0 items-center justify-center border border-line text-ink hover:border-ink hover:bg-ink hover:text-paper transition-colors"
              aria-label="Retour à la boutique"
            >
              <ArrowLeft size={15} />
              <span className="eyebrow pointer-events-none absolute right-0 top-full mt-2 whitespace-nowrap bg-ink px-2.5 py-1.5 text-paper opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 z-10">
                Retour à la boutique
              </span>
            </Link>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl text-ink leading-tight">
            {product.name}
          </h1>
          {product.description && (
            <p className="eyebrow text-stone mt-3">{product.description}</p>
          )}

          <div className="my-8 h-px bg-line" />

          {product.longDescription && (
            <p className="text-ink-soft leading-relaxed">
              {product.longDescription}
            </p>
          )}

          {/* Taille + Coloris */}
          <div className="mt-10 flex items-start justify-between gap-6">
            <div>
              <p className="eyebrow text-stone mb-3">Taille</p>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-9 min-w-9 px-2 border text-sm transition-colors ${
                      selectedSize === size
                        ? "border-ink bg-ink text-paper"
                        : "border-line text-ink hover:border-ink"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {product.color && (
              <div className="text-right flex-shrink-0">
                <p className="eyebrow text-stone mb-3">Coloris</p>
                <div className="flex items-center justify-end gap-3">
                  <span className="text-sm text-ink-soft">
                    {product.color.name}
                  </span>
                  <span
                    className="h-9 w-9 border border-ink/15 flex-shrink-0"
                    style={{ backgroundColor: product.color.hex }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="my-10 h-px bg-line" />

          {/* Prix */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className={`text-2xl font-heading ${product.originalPrice ? "text-clay" : "text-ink"}`}
            >
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-base text-stone line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Quantité + Ajout panier */}
          <div className="flex items-stretch gap-3">
            <div className="flex h-14 items-center border border-line">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Diminuer la quantité"
                className="w-12 h-full flex items-center justify-center hover:bg-paper-dark transition-colors"
              >
                <Minus size={14} />
              </button>
              <span className="w-10 text-center text-sm">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Augmenter la quantité"
                className="w-12 h-full flex items-center justify-center hover:bg-paper-dark transition-colors"
              >
                <Plus size={14} />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 h-14 bg-ink text-paper text-xs font-semibold uppercase tracking-[0.14em] hover:bg-ink-soft transition-colors"
            >
              Ajouter au panier
            </button>
          </div>

          {/* Question produit */}
          <a
            href={getWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex h-12 items-center justify-center gap-2 border border-line text-sm text-ink-soft hover:border-ink hover:text-ink transition-colors"
          >
            <MessageCircle size={15} />
            Une question ? Écrivez-nous sur WhatsApp
          </a>
        </div>

        {/* Navigation catalogue */}
        <div className="border-t border-line px-6 py-6 sm:px-10 lg:px-12">
          <div className="flex items-center justify-between">
            <Link
              href={`/produit/${prevProduct.id}`}
              className="flex h-9 w-9 items-center justify-center border border-line text-ink-soft hover:border-ink hover:text-ink transition-colors"
              aria-label="Tenue précédente"
            >
              <ArrowLeft size={16} />
            </Link>
            <span className="eyebrow text-stone">
              {index + 1} / {products.length}
            </span>
            <Link
              href={`/produit/${nextProduct.id}`}
              className="flex h-9 w-9 items-center justify-center border border-line text-ink-soft hover:border-ink hover:text-ink transition-colors"
              aria-label="Tenue suivante"
            >
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
