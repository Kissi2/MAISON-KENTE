"use client";

import { useState } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-paper-dark">
      <Container>
        <SectionTitle
          eyebrow="Avis"
          title="Ce que disent nos clientes"
          subtitle="Elles nous font confiance et partagent leur expérience."
        />

        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="bg-paper border border-line p-8 md:p-14">
              {/* Étoiles */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < testimonial.rating
                        ? "fill-ink text-ink"
                        : "text-ink/15"
                    }
                  />
                ))}
              </div>

              {/* Commentaire */}
              <blockquote className="font-heading italic text-center text-ink text-xl md:text-2xl leading-relaxed mb-8">
                &ldquo;{testimonial.comment}&rdquo;
              </blockquote>

              {/* Auteur */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 border border-ink/20 flex items-center justify-center">
                  <span className="font-heading text-lg text-ink">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="text-center">
                  <p className="font-medium text-ink text-sm">
                    {testimonial.name}
                  </p>
                  {testimonial.product && (
                    <p className="eyebrow text-stone mt-1">
                      {testimonial.product}
                    </p>
                  )}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-5 mt-10">
                <button
                  onClick={prev}
                  className="w-10 h-10 border border-ink/15 flex items-center justify-center hover:bg-ink hover:text-paper hover:border-ink transition-all duration-200"
                  aria-label="Avis précédent"
                >
                  <ArrowLeft size={16} />
                </button>
                <span className="eyebrow text-stone">
                  {currentIndex + 1} / {testimonials.length}
                </span>
                <button
                  onClick={next}
                  className="w-10 h-10 border border-ink/15 flex items-center justify-center hover:bg-ink hover:text-paper hover:border-ink transition-all duration-200"
                  aria-label="Avis suivant"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Mini-avis en grille (desktop) */}
        <div className="hidden md:grid grid-cols-3 gap-6 mt-12">
          {testimonials.slice(0, 3).map((t) => (
            <div key={t.id} className="bg-paper border border-line p-6">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={
                      i < t.rating ? "fill-ink text-ink" : "text-ink/15"
                    }
                  />
                ))}
              </div>
              <p className="text-ink-soft text-sm leading-relaxed mb-4 line-clamp-3">
                &ldquo;{t.comment}&rdquo;
              </p>
              <p className="font-medium text-ink text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
