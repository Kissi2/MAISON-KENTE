import { type ClassValue, clsx } from "clsx";
import type { CartItem } from "@/types";

// Simple clsx implementation (no external dependency needed)
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Format price in FCFA
export function formatPrice(price: number): string {
  return (
    new Intl.NumberFormat("fr-FR", {
      style: "decimal",
      minimumFractionDigits: 0,
    }).format(price) + " FCFA"
  );
}

// Generate WhatsApp link with pre-filled message
export function getWhatsAppLink(productName?: string): string {
  const message = productName
    ? `Bonjour, je suis intéressée par la robe "${productName}". Pouvez-vous m'en dire plus ?`
    : "Bonjour, je souhaite avoir des informations sur vos robes.";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2250768609036"}?text=${encodedMessage}`;
}

// Génère un lien WhatsApp récapitulant le contenu du panier
export function getCartWhatsAppLink(items: CartItem[], total: number): string {
  const lines = items.map(
    (item) =>
      `- ${item.name} (Taille ${item.size}) x${item.quantity} — ${formatPrice(item.price * item.quantity)}`,
  );
  const message = [
    "Bonjour, je souhaite commander :",
    "",
    ...lines,
    "",
    `Total estimé : ${formatPrice(total)}`,
  ].join("\n");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2250768609036"}?text=${encodedMessage}`;
}

// Smooth scroll to element
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
