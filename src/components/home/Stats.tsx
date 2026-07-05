import Image from "next/image";
import { SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { stats } from "@/lib/site";

export function Stats() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 grain">
      {/* Background image + overlays */}
      <div className="absolute inset-0">
        <Image src="/images/site/outreach.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04091a] via-navy-950/90 to-[#04091a]" />
        <div className="pointer-events-none absolute inset-0 hero-glow opacity-70" />
      </div>

      <div className="container-x relative">
        <SectionHeading
          eyebrow="The Winners Family"
          title={<>A growing family of <span className="text-gold-gradient">grace</span></>}
          subtitle="Every number is a life touched, a soul won and a story of God's faithfulness in Southport and beyond."
        />
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-gold-500/10 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="flex h-full flex-col items-center justify-center gap-2 bg-navy-950/80 px-4 py-10 text-center backdrop-blur-sm transition-colors hover:bg-navy-900/70">
                <span className="font-display text-4xl font-bold text-gold-gradient sm:text-5xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-cream/55">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
