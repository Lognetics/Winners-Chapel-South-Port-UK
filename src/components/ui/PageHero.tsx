import Link from "next/link";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image = "/images/site/outreach.jpg",
  breadcrumb,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  image?: string;
  breadcrumb?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative flex min-h-[52vh] items-center overflow-hidden bg-navy-950 grain">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/80 to-navy-950" />
        <div className="pointer-events-none absolute inset-0 hero-glow" />
      </div>

      <div className="container-x relative z-10 py-24">
        <Reveal>
          <nav className="mb-5 flex items-center gap-2 text-xs text-cream/50">
            <Link href="/" className="hover:text-gold-300">Home</Link>
            <Icon name="chevron-right" className="h-3 w-3" />
            <span className="text-gold-300">{breadcrumb ?? eyebrow}</span>
          </nav>
          <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            <span className="h-px w-6 bg-gold-500/60" /> {eyebrow}
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-cream sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {subtitle && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/70">{subtitle}</p>}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
