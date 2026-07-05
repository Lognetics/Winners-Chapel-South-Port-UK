import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { experiences } from "@/lib/site";

export function Experience() {
  return (
    <Section tone="transparent" className="section-light">
      <SectionHeading
        light
        eyebrow="Encounter God"
        title={<>Come expecting <span className="text-gold-gradient">the supernatural</span></>}
        subtitle="At Winners Chapel, we believe every service is an appointment with destiny. Here is what God is doing in the lives of His people."
      />
      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {experiences.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.05}>
            <div className="card-light group flex h-full flex-col items-start gap-4 rounded-2xl p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-300/30 to-gold-500/20 text-gold-700 ring-1 ring-gold-500/25 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Icon name={e.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-navy-900">{e.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-600/75">{e.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
