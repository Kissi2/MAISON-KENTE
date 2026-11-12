"use client";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import CollectionCard from "@/components/ui/CollectionCard";
import { collections } from "@/data/collections";

export default function CollectionsSection() {
  return (
    <section id="collections" className="py-20 md:py-32 bg-paper-dark">
      <Container>
        <SectionTitle
          eyebrow="Catégories"
          title="Nos collections"
          subtitle="Explorez nos collections et trouvez la tenue parfaite pour chaque occasion."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-12">
          {collections.map((collection, index) => (
            <CollectionCard
              key={collection.id}
              name={collection.name}
              description={collection.description}
              image={collection.image}
              productCount={collection.productCount}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
