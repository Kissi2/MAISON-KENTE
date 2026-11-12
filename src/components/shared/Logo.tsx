"use client";

import { useId } from "react";

type LogoTone = "ink" | "paper";

interface LogoMarkProps {
  /** Classe appliquée au SVG — pilotez la taille avec h-* / w-* */
  className?: string;
  /**
   * « ink » : dégradé prune → magenta → orange, pour les fonds clairs.
   * « paper » : dégradé magenta → orange, lisible sur le prune profond.
   */
  tone?: LogoTone;
}

/**
 * Monogramme « K » de la Maison Kenté : capitale Bodoni en dégradé
 * prune → magenta → orange brûlé, surmontée de l'étoile à quatre branches.
 */
export function LogoMark({
  className = "h-10 w-auto",
  tone = "ink",
}: LogoMarkProps) {
  const id = useId();
  const gradientId = `mk-k-${id}`;
  const starId = `mk-star-${id}`;

  return (
    <svg
      viewBox="0 0 116 112"
      className={className}
      role="img"
      aria-label="Monogramme Maison Kenté"
    >
      <defs>
        <linearGradient id={gradientId} x1="0.08" y1="1" x2="0.92" y2="0.04">
          {/* Couleurs fournies par le thème actif (src/styles/themes/*.css) */}
          {tone === "paper" ? (
            <>
              <stop offset="0%" style={{ stopColor: "var(--theme-logo-paper-1)" }} />
              <stop offset="45%" style={{ stopColor: "var(--theme-logo-paper-2)" }} />
              <stop offset="100%" style={{ stopColor: "var(--theme-logo-paper-3)" }} />
            </>
          ) : (
            <>
              <stop offset="0%" style={{ stopColor: "var(--theme-logo-1)" }} />
              <stop offset="38%" style={{ stopColor: "var(--theme-logo-2)" }} />
              <stop offset="70%" style={{ stopColor: "var(--theme-logo-3)" }} />
              <stop offset="100%" style={{ stopColor: "var(--theme-logo-4)" }} />
            </>
          )}
        </linearGradient>
        <linearGradient id={starId} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" style={{ stopColor: "var(--theme-magenta)" }} />
          <stop offset="100%" style={{ stopColor: "var(--theme-orange)" }} />
        </linearGradient>
      </defs>

      <text
        x="46"
        y="101"
        textAnchor="middle"
        fontFamily="var(--font-heading), 'Times New Roman', serif"
        fontSize="132"
        fontWeight="500"
        fill={`url(#${gradientId})`}
      >
        K
      </text>

      {/* Étoile à quatre branches — signature de la marque */}
      <path
        d="M95 4 C95 17 100 22 113 22 C100 22 95 27 95 40 C95 27 90 22 77 22 C90 22 95 17 95 4 Z"
        fill={`url(#${starId})`}
      />
    </svg>
  );
}

interface LogoProps {
  /** « stacked » : monogramme au-dessus du nom. « inline » : côte à côte (barre de navigation). */
  variant?: "stacked" | "inline";
  /** Couleur du texte : prune sur fond clair, ivoire sur fond sombre. */
  tone?: LogoTone;
  /** Affiche la baseline « MODE · ÉLÉGANCE · TOI ». */
  withTagline?: boolean;
  className?: string;
  markClassName?: string;
  nameClassName?: string;
}

export default function Logo({
  variant = "stacked",
  tone = "ink",
  withTagline = true,
  className = "",
  markClassName,
  nameClassName,
}: LogoProps) {
  const isStacked = variant === "stacked";
  const textColor = tone === "paper" ? "text-paper" : "text-ink";
  const taglineColor = tone === "paper" ? "text-paper/60" : "text-ink/55";

  return (
    <span
      className={`inline-flex ${
        isStacked ? "flex-col items-center gap-3" : "flex-row items-center gap-2.5"
      } ${className}`}
    >
      <LogoMark
        tone={tone}
        className={markClassName ?? (isStacked ? "h-16 w-auto" : "h-8 w-auto")}
      />
      <span className={`flex flex-col ${isStacked ? "items-center" : "items-start"}`}>
        <span
          className={`font-heading leading-none ${textColor} ${
            nameClassName ?? (isStacked ? "text-3xl tracking-[0.06em]" : "text-lg tracking-[0.08em]")
          }`}
        >
          MAISON KENTE
        </span>
        {withTagline && (
          <span
            className={`mt-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] ${taglineColor}`}
          >
            Mode · Élégance · Toi
          </span>
        )}
      </span>
    </span>
  );
}
