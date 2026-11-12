"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with email service
    setIsSubmitted(true);
    setEmail("");
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-20 md:py-28 bg-ink">
      <Container>
        <div className="text-center max-w-xl mx-auto">
          <p className="eyebrow text-paper/50 mb-4">Newsletter</p>
          <h2 className="font-heading text-3xl md:text-4xl text-paper mb-4">
            Restez informée
          </h2>
          <p className="text-paper/60 mb-10 leading-relaxed">
            Inscrivez-vous pour recevoir en exclusivité nos nouvelles
            collections, promotions et conseils mode.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3.5 bg-transparent border border-paper/25 text-paper placeholder:text-paper/40 focus:border-paper outline-none transition-colors duration-200"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-paper text-ink px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] hover:bg-paper/90 transition-colors duration-200"
            >
              S&apos;inscrire
              <ArrowRight size={16} />
            </button>
          </form>

          {isSubmitted && (
            <p className="mt-4 text-paper font-medium animate-fade-in text-sm">
              Merci pour votre inscription.
            </p>
          )}

          <p className="text-paper/35 text-xs mt-5">
            En vous inscrivant, vous acceptez de recevoir nos communications.
            Désabonnement possible à tout moment.
          </p>
        </div>
      </Container>
    </section>
  );
}
