"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-ink text-paper px-5 py-3 border border-ink hover:bg-paper hover:text-ink transition-colors duration-200"
      aria-label="Contacter via WhatsApp"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline text-sm font-medium">
        Écrivez-nous
      </span>
    </a>
  );
}
