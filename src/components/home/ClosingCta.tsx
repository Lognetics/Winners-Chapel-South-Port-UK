import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

const actions = [
  { title: "Plan Your Visit", desc: "First time? Let us roll out the red carpet and prepare a welcome gift for you.", href: "/first-timers", icon: "hand", cta: "I'm New" },
  { title: "Request Prayer", desc: "Whatever you're facing, we want to stand with you in prayer. We believe with you.", href: "/prayer", icon: "flame", cta: "Send Request" },
  { title: "Give Online", desc: "Partner with the vision through your tithes, offerings and Kingdom projects.", href: "/giving", icon: "gift", cta: "Give Now" },
];

export function ClosingCta() {
  return (
    <>
      <Section tone="darker">
        <div className="grid gap-5 md:grid-cols-3">
          {actions.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <div className="card-lift group flex h-full flex-col rounded-3xl bg-gradient-to-b from-navy-900/60 to-navy-950 p-8 ring-1 ring-gold-500/10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20 transition group-hover:bg-gold-500/20">
                  <Icon name={a.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-cream">{a.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/60">{a.desc}</p>
                <div className="mt-6">
                  <Button href={a.href} variant="outline" iconRight="arrow-right" className="w-full">{a.cta}</Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Map + Directions */}
      <section className="relative overflow-hidden bg-navy-950">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center px-6 py-16 sm:px-12 lg:py-24">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                <span className="h-px w-6 bg-gold-500/60" /> Visit Us
              </span>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl">
                We can&apos;t wait to <span className="text-gold-gradient">meet you</span>
              </h2>
              <div className="mt-6 space-y-4 text-cream/70">
                <p className="flex items-start gap-3"><Icon name="map-pin" className="mt-0.5 h-5 w-5 text-gold-400" />{site.fullAddress}</p>
                <p className="flex items-center gap-3"><Icon name="clock" className="h-5 w-5 text-gold-400" />Sundays 8:00 AM &amp; 10:30 AM · Wednesdays 6:00 PM</p>
                <p className="flex items-center gap-3"><Icon name="phone" className="h-5 w-5 text-gold-400" />{site.phones[0]}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={`https://maps.google.com/?q=${encodeURIComponent(site.mapsQuery)}`} icon="navigation">Get Directions</Button>
                <Button href="/contact" variant="outline">Contact Us</Button>
              </div>
            </Reveal>
          </div>
          <div className="relative min-h-[360px] lg:min-h-full">
            <iframe
              title="Map to Winners Chapel International, Southport"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`}
              className="absolute inset-0 h-full w-full grayscale-[0.3]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
