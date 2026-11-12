"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CollectionCardProps {
  name: string;
  description: string;
  image: string;
  productCount?: number;
  index?: number;
}

export default function CollectionCard({
  name,
  description,
  image,
  productCount,
  index = 0,
}: CollectionCardProps) {
  return (
    <motion.a
      href="#products"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group block"
    >
      <div className="relative aspect-[3/4] overflow-hidden border border-line bg-paper-dark">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="pt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-heading text-xl text-ink mb-1 group-hover:underline underline-offset-4">
            {name}
          </h3>
          <p className="text-sm text-ink-soft leading-snug">{description}</p>
        </div>
        {productCount && (
          <span className="eyebrow text-stone whitespace-nowrap pt-1">
            {productCount}
          </span>
        )}
      </div>
    </motion.a>
  );
}
