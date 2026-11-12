"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { LogoMark } from "@/components/shared/Logo";
import { SITE_SLOGAN } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink"
    >
      {/* Motif décoratif — trame Kenté en trait fin, très discret */}
      <svg
        viewBox="0 0 240 240"
        className="hidden xl:block absolute -right-16 top-1/2 -translate-y-1/2 w-[26rem] h-[26rem] text-rose/[0.06]"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
      >
        <path d="M0 40h240M0 80h240M0 120h240M0 160h240M0 200h240" />
        <path d="M40 0v240M80 0v240M120 0v240M160 0v240M200 0v240" />
        <path d="M40 40 80 80 40 120 0 80Z M120 40 160 80 120 120 80 80Z M200 40 240 80 200 120 160 80Z" />
        <path d="M80 120 120 160 80 200 40 160Z M160 120 200 160 160 200 120 160Z" />
      </svg>

      {/* Contenu */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <LogoMark tone="paper" className="h-24 md:h-32 w-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-paper leading-none tracking-[0.04em]"
        >
          MAISON KENTE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.34em] text-rose"
        >
          Mode · Élégance · Toi
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-heading italic text-paper/80 text-lg md:text-2xl mt-10 mb-4"
        >
          {SITE_SLOGAN}
        </motion.p>

        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-paper/50 text-sm md:text-base max-w-lg mx-auto mb-12 leading-relaxed"
        >
          Une maison de création inspirée du Kenté, tissu emblématique de la
          tradition Ashanti — symbole de royauté, de puissance et d&apos;élégance.
        </motion.p> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#collections"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("collections")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-8 py-4 bg-clay text-paper text-xs font-semibold uppercase tracking-[0.14em] hover:bg-orange transition-colors duration-300"
          >
            Découvrir la collection
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-8 py-4 border border-paper/40 text-paper text-xs font-semibold uppercase tracking-[0.14em] hover:border-paper hover:bg-paper/5 transition-colors duration-300"
          >
            Nous contacter
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center gap-2 text-paper/50 hover:text-paper transition-colors duration-200"
        >
          <span className="eyebrow">Découvrir</span>
          <ArrowDown size={16} />
        </a>
      </motion.div>
    </section>
  );
}
