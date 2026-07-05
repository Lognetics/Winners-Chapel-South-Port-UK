import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { events } from "@/lib/site";

export function EventsPreview() {
  const list = events.slice(0, 4);
  return (
    <Section tone="navy">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          align="left"
          eyebrow="What's On"
          title={<>Upcoming <span className="text-gold-gradient">events</span></>}
          subtitle="From Shiloh to healing services and youth camps — there's always something happening in the house."
        />
        <Button href="/events" variant="outline" iconRight="arrow-right" className="hidden shrink-0 sm:inline-flex">
          Full Calendar
        </Button>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {list.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.06}>
            <article className={`card-lift group flex h-full gap-5 rounded-3xl p-6 ring-1 ring-gold-500/10 ${e.featured ? "bg-gradient-to-br from-navy-800/70 to-navy-950" : "bg-navy-900/40"}`}>
              <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-gold-500/10 text-center ring-1 ring-gold-500/20">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400">{e.month}</span>
                <span className="font-display text-2xl font-bold text-cream">{e.day}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-navy-800/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold-300">{e.type}</span>
                  {e.featured && <span className="rounded-full bg-gold-500 px-2.5 py-0.5 text-[10px] font-bold uppercase text-navy-950">Featured</span>}
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-cream">{e.title}</h3>
                <p className="mt-1 text-sm text-cream/55">{e.desc}</p>
                <div className="mt-3 flex items-center gap-4 text-xs text-gold-300/80">
                  <span className="flex items-center gap-1.5"><Icon name="calendar" className="h-4 w-4" />{e.date}</span>
                  <button className="flex items-center gap-1.5 font-semibold text-gold-300 transition hover:text-gold-200">Register <Icon name="arrow-right" className="h-3.5 w-3.5" /></button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
