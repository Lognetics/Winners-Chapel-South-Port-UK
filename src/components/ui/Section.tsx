import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-600 ${className}`}
    >
      <span className="h-px w-6 bg-gold-500/70" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  onDark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  /** Use on dark (navy) backgrounds — renders light text. */
  onDark?: boolean;
  /** @deprecated retained for backwards compatibility (no-op) */
  light?: boolean;
}) {
  const alignCls = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  return (
    <Reveal className={`flex max-w-3xl flex-col gap-4 ${alignCls}`}>
      {eyebrow && (
        <span className={`inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] ${onDark ? "text-gold-400" : "text-gold-600"}`}>
          <span className={`h-px w-6 ${onDark ? "bg-gold-500/60" : "bg-gold-500/70"}`} />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl ${
          onDark ? "text-cream" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base leading-relaxed sm:text-lg ${onDark ? "text-cream/65" : "text-navy-600/85"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

export function Section({
  children,
  className = "",
  id,
  tone = "navy",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  /** navy = white surface, darker = cream surface, cream = warm cream, dark = navy (for anchors) */
  tone?: "navy" | "darker" | "cream" | "dark" | "transparent";
}) {
  const tones = {
    navy: "bg-ivory text-navy-900",
    darker: "bg-cream text-navy-900",
    cream: "bg-cream text-navy-900",
    dark: "bg-navy-950 text-cream",
    transparent: "",
  };
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${tones[tone]} ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}
