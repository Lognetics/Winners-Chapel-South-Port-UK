import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { services, site } from "@/lib/site";

export function ServiceTimes() {
  return (
    <Section id="services" tone="darker">
      <SectionHeading
        eyebrow="Weekly Gatherings"
        title={<>Come and worship <span className="text-gold-gradient">with us</span></>}
        subtitle="There is a place for you at every service. Join us in person at St George's Church, Southport, or online from anywhere in the world."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.06}>
            <div className="card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl bg-navy-900/50 p-7 ring-1 ring-gold-500/10">
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold-500/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400/20 to-gold-600/10 text-gold-300 ring-1 ring-gold-500/20">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-navy-800/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-300">
                  {s.tag}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-cream">{s.name}</h3>
              <div className="mt-2 flex items-center gap-3 text-sm text-gold-200/90">
                <span className="flex items-center gap-1.5"><Icon name="calendar" className="h-4 w-4" />{s.day}</span>
                <span className="flex items-center gap-1.5"><Icon name="clock" className="h-4 w-4" />{s.time}</span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-cream/55">{s.desc}</p>
              <div className="mt-6 flex items-center gap-4 border-t border-gold-500/10 pt-4">
                <button className="text-xs font-semibold uppercase tracking-wider text-gold-300 transition hover:text-gold-200">
                  + Add to Calendar
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Location strip */}
      <Reveal className="mt-8">
        <div className="glass flex flex-col items-center gap-6 rounded-3xl p-6 sm:flex-row sm:justify-between sm:p-8">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20">
              <Icon name="map-pin" className="h-7 w-7" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-gold-400">Find Us</p>
              <p className="mt-1 font-display text-lg text-cream">{site.fullAddress}</p>
            </div>
          </div>
          <Button
            href={`https://maps.google.com/?q=${encodeURIComponent(site.mapsQuery)}`}
            variant="outline"
            icon="navigation"
          >
            Get Directions
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
