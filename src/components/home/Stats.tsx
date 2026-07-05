import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { stats } from "@/lib/site";

export function Stats() {
  return (
    <Section tone="darker" className="grain">
      <SectionHeading
        eyebrow="The Winners Family"
        title={<>A growing family of <span className="text-gold-gradient">grace</span></>}
        subtitle="Every number is a life touched, a soul won and a story of God's faithfulness in Southport and beyond."
      />
      <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-gold-500/10 sm:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05}>
            <div className="flex h-full flex-col items-center justify-center gap-2 bg-navy-950 px-4 py-10 text-center transition-colors hover:bg-navy-900/60">
              <span className="font-display text-4xl font-bold text-gold-gradient sm:text-5xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-cream/55">{s.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
