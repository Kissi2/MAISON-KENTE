import { Phone } from "lucide-react";
import {
  SITE_NAME,
  SITE_SLOGAN,
  SOCIAL_LINKS,
  PHONE_LINK,
  PHONE_NUMBER,
} from "@/lib/constants";
import Logo from "@/components/shared/Logo";

// Icônes réseaux sociaux (traits fins, cohérentes avec lucide-react)
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const FOOTER_LINKS = [
  { label: "Accueil", href: "#hero" },
  { label: "La Maison", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Nos Tenues", href: "#products" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "Avis", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper/70">
      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Colonne 1 — Brand */}
          <div>
            <Logo
              variant="inline"
              tone="paper"
              withTagline={false}
              className="mb-4"
              markClassName="h-10 w-auto"
              nameClassName="text-xl tracking-[0.08em]"
            />
            <p className="eyebrow text-paper/40 mb-5">
              Mode · Élégance · Toi
            </p>
            <p className="font-heading italic text-paper/80 text-base leading-relaxed mb-4 max-w-xs">
              {SITE_SLOGAN}
            </p>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Maison de création et de distribution inspirée de l&apos;héritage
              culturel africain — Abidjan, Côte d&apos;Ivoire.
            </p>
            <div className="flex gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-paper/20 flex items-center justify-center hover:bg-clay hover:border-clay hover:text-paper transition-colors duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-paper/20 flex items-center justify-center hover:bg-clay hover:border-clay hover:text-paper transition-colors duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon size={17} />
              </a>
            </div>
          </div>

          {/* Colonne 2 — Navigation */}
          <div>
            <p className="eyebrow text-paper mb-5">Navigation</p>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-paper transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Contact */}
          <div>
            <p className="eyebrow text-paper mb-5">Contact</p>
            <div className="space-y-3 text-sm">
              <a
                href={PHONE_LINK}
                className="flex items-center gap-3 hover:text-paper transition-colors duration-200"
              >
                <Phone size={15} />
                {PHONE_NUMBER}
              </a>
              <p>Disponible du lundi au samedi, 9h – 19h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="border-t border-paper/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-paper/40">
          <p>© {currentYear} {SITE_NAME}. Tous droits réservés.</p>
          <p>Abidjan — Côte d&apos;Ivoire</p>
        </div>
      </div>
    </footer>
  );
}
