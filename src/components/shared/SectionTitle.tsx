interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "left";
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-14 ${isCenter ? "text-center mx-auto max-w-2xl" : "text-left"} ${className}`}
    >
      {eyebrow && (
        <p
          className={`eyebrow mb-4 ${light ? "text-paper/60" : "text-stone"}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-[3.25rem] leading-[1.05] font-medium ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            light ? "text-paper/70" : "text-ink-soft"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
