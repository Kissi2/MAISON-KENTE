"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1785312278503-16c5c7124fb6?q=80&w=1600&auto=format&fit=crop";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-paper">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative aspect-[4/5] border border-line bg-paper-dark">
              <Image
                src={ABOUT_IMAGE}
                alt="MAISON KENTE — présentation de la marque"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          {/* Texte */}
          <AnimatedSection direction="right" delay={0.15}>
            <SectionTitle
              eyebrow="La Maison"
              title="Présentation de la marque"
              align="left"
              className="mb-10"
            />

            <div className="space-y-6 text-ink-soft leading-relaxed">
              <p>
                <span className="font-heading text-xl text-ink tracking-[0.04em]">
                  La Maison KENTÉ
                </span>{" "}
                est une maison de création et de distribution inspirée de
                l&apos;héritage culturel africain, notamment du Kenté, tissu
                emblématique de la tradition Ashanti symbole de royauté, de
                puissance et d&apos;élégance et d&apos;autres tissus rappelant
                nos racines.
              </p>
              <p>
                À travers ses différentes activités, la Maison KENTÉ incarne un
                art de vivre raffiné, où tradition et modernité se rencontrent
                pour offrir des produits et services d&apos;exception.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
