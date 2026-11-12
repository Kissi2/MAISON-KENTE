"use client";

import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { WHATSAPP_LINK, PHONE_LINK, PHONE_NUMBER } from "@/lib/constants";

const contactPoints = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "Réponse rapide, commande facile",
    href: WHATSAPP_LINK,
    external: true,
  },
  {
    icon: Phone,
    title: "Appel téléphonique",
    detail: PHONE_NUMBER,
    href: PHONE_LINK,
    external: false,
  },
  {
    icon: Mail,
    title: "Email",
    detail: "contact@maisonkente.com",
    href: "mailto:contact@maisonkente.com",
    external: false,
  },
  {
    icon: MapPin,
    title: "Localisation",
    detail: "Abidjan, Côte d'Ivoire",
    href: undefined,
    external: false,
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `Bonjour, je m'appelle ${formData.name}.\n${formData.message}\nMon numéro : ${formData.phone}`
    );
    window.open(`${WHATSAPP_LINK}?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-paper">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Contactez-nous"
          subtitle="Une question ? Besoin de conseils ? Nous sommes là pour vous."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
          {/* Informations de contact */}
          <AnimatedSection direction="left">
            <div className="space-y-8">
              <p className="text-ink-soft leading-relaxed">
                À la MAISON KENTE, nous sommes à votre écoute. Que ce soit pour
                commander une tenue, demander des conseils sur les tailles ou
                simplement échanger, n&apos;hésitez pas à nous contacter.
              </p>

              <div className="space-y-3">
                {contactPoints.map((point) => {
                  const Icon = point.icon;
                  const content = (
                    <>
                      <div className="w-11 h-11 border border-ink/15 flex items-center justify-center flex-shrink-0">
                        <Icon size={19} className="text-ink" />
                      </div>
                      <div>
                        <p className="font-medium text-ink text-sm">
                          {point.title}
                        </p>
                        <p className="text-sm text-stone">{point.detail}</p>
                      </div>
                    </>
                  );

                  if (!point.href) {
                    return (
                      <div
                        key={point.title}
                        className="flex items-center gap-4 p-5 border border-line"
                      >
                        {content}
                      </div>
                    );
                  }

                  return (
                    <a
                      key={point.title}
                      href={point.href}
                      target={point.external ? "_blank" : undefined}
                      rel={point.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-5 border border-line hover:border-ink transition-colors duration-200"
                    >
                      {content}
                    </a>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          {/* Formulaire */}
          <AnimatedSection direction="right" delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="border border-line p-8 md:p-10 space-y-6"
            >
              <div>
                <h3 className="font-heading text-2xl text-ink mb-1.5">
                  Envoyez-nous un message
                </h3>
                <p className="text-stone text-sm">
                  Votre message sera envoyé directement via WhatsApp.
                </p>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="eyebrow block text-stone mb-2"
                >
                  Votre nom
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-line bg-paper focus:border-ink outline-none transition-colors duration-200"
                  placeholder="Entrez votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="eyebrow block text-stone mb-2"
                >
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-line bg-paper focus:border-ink outline-none transition-colors duration-200"
                  placeholder="+225 XX XX XX XX XX"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="eyebrow block text-stone mb-2"
                >
                  Votre message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-line bg-paper focus:border-ink outline-none transition-colors duration-200 resize-none"
                  placeholder="Décrivez ce que vous recherchez..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-clay text-paper px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] hover:bg-ink transition-colors duration-200"
              >
                Envoyer via WhatsApp
                <ArrowRight size={17} />
              </button>
            </form>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
