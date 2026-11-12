"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";

const looks = [
  {
    id: "look-1",
    label: "Cérémonies",
    alt: "Look élégant en tenue de cérémonie",
    image:
      "https://images.unsplash.com/photo-1660675133902-acd1b057f75d?q=80&w=1600&auto=format&fit=crop",
    span: "row-span-1",
  },
  {
    id: "look-2",
    label: "Ensemble cocooning",
    alt: "Look décontracté en ensemble cocooning",
    image:
      "https://images.unsplash.com/photo-1769451742168-7683113b46a8?q=80&w=1600&auto=format&fit=crop",
    span: "row-span-2",
  },
  {
    id: "look-3",
    label: "Cocktail",
    alt: "Look chic en tenue de cocktail",
    image:
      "https://images.unsplash.com/photo-1611580045568-7201033c7a3b?q=80&w=1600&auto=format&fit=crop",
    span: "row-span-1",
  },
  {
    id: "look-4",
    label: "Haut/Bas",
    alt: "Look en ensemble haut/bas kenté",
    image:
      "https://images.unsplash.com/photo-1769349661389-0737f39a8507?q=80&w=1600&auto=format&fit=crop",
    span: "row-span-1",
  },
  {
    id: "look-5",
    label: "Professionnel",
    alt: "Look professionnel en tailleur",
    image:
      "https://images.unsplash.com/photo-1784160053632-6eddd51bda26?q=80&w=1600&auto=format&fit=crop",
    span: "row-span-2",
  },
  {
    id: "look-6",
    label: "Haut/Bas",
    alt: "Look urbain en ensemble imprimé",
    image:
      "https://images.unsplash.com/photo-1626478211161-9d7ef0c70d3f?q=80&w=1600&auto=format&fit=crop",
    span: "row-span-1",
  },
];

export default function LookbookSection() {
  return (
    <section id="lookbook" className="py-20 md:py-32 bg-ink">
      <Container>
        <SectionTitle
          eyebrow="Inspiration"
          title="Lookbook"
          subtitle="Inspirez-vous de nos looks et trouvez votre style."
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {looks.map((look, index) => (
            <motion.div
              key={look.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative overflow-hidden cursor-pointer border border-paper/10 ${look.span}`}
            >
              <Image
                src={look.image}
                alt={look.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-500" />
              <span className="eyebrow absolute bottom-3 left-3 text-paper drop-shadow-sm">
                {look.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
