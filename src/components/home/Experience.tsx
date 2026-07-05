import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { experiences } from "@/lib/site";

export function Experience() {
  return (
    <Section tone="navy">
      <SectionHeading
        eyebrow="Encounter God"
        title={<>Come expecting <span className="text-gold-gradient">the supernatural</span></>}
        subtitle="At Winners Chapel, we believe every service is an appointment with destiny. Here is what God is doing in the lives of His people."
      />
      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {experiences.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.05}>
            <div className="card-lift group flex h-full flex-col items-start gap-4 rounded-2xl bg-gradient-to-b from-navy-900/60 to-navy-950 p-6 ring-1 ring-gold-500/10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Icon name={e.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-cream">{e.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-cream/55">{e.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
