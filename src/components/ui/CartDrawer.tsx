"use client";

import Image from "next/image";
import { X, Minus, Plus, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice, getCartWhatsAppLink } from "@/lib/utils";

export default function CartDrawer() {
  const { items, isOpen, close, removeItem, updateQuantity, totalPrice } =
    useCart();

  const handleCheckout = () => {
    window.open(getCartWhatsAppLink(items, totalPrice), "_blank");
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Panneau */}
      <aside
        className={`fixed top-0 right-0 z-[70] flex h-full w-full max-w-md flex-col bg-paper transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Panier"
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <p className="eyebrow text-ink">
            Panier {items.length > 0 && `(${items.length})`}
          </p>
          <button
            onClick={close}
            aria-label="Fermer le panier"
            className="text-ink hover:text-stone transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag size={32} className="text-ink/20" />
            <p className="text-ink-soft text-sm">Votre panier est vide.</p>
            <button
              onClick={close}
              className="eyebrow border-b border-ink pb-0.5 text-ink hover:opacity-60 transition-opacity"
            >
              Continuer mes achats
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4">
                  <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden border border-line bg-paper-dark">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-heading text-base text-ink leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-xs text-stone mt-0.5">
                          Taille {item.size}
                        </p>
                      </div>
                      <p className="text-sm text-ink whitespace-nowrap">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-line">
                        <button
                          onClick={() =>
                            updateQuantity(item.key, item.quantity - 1)
                          }
                          aria-label="Diminuer la quantité"
                          className="w-7 h-7 flex items-center justify-center hover:bg-paper-dark transition-colors"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="w-8 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.key, item.quantity + 1)
                          }
                          aria-label="Augmenter la quantité"
                          className="w-7 h-7 flex items-center justify-center hover:bg-paper-dark transition-colors"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="eyebrow text-stone hover:text-ink transition-colors"
                      >
                        Retirer
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-line px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="eyebrow text-stone">Total estimé</p>
                <p className="font-heading text-xl text-ink">
                  {formatPrice(totalPrice)}
                </p>
              </div>
              <button
                onClick={handleCheckout}
                className="flex w-full items-center justify-center gap-2 bg-clay px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-paper hover:bg-clay/90 transition-colors"
              >
                Commander via WhatsApp
                <ArrowRight size={16} />
              </button>
              <p className="text-xs text-stone text-center leading-relaxed">
                La commande est finalisée directement avec la boutique via
                WhatsApp — aucun paiement en ligne.
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
