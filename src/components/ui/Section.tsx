import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 ${className}`}
    >
      <span className="h-px w-6 bg-gold-500/60" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
}) {
  const alignCls = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  return (
    <Reveal className={`flex max-w-3xl flex-col gap-4 ${alignCls}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl ${
          light ? "text-navy-900" : "text-cream"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base leading-relaxed sm:text-lg ${light ? "text-navy-700/80" : "text-cream/65"}`}>
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
  tone?: "navy" | "darker" | "cream" | "transparent";
}) {
  const tones = {
    navy: "bg-navy-950",
    darker: "bg-[#04091a]",
    cream: "bg-cream text-navy-900",
    transparent: "",
  };
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${tones[tone]} ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}
