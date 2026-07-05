import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { services, site } from "@/lib/site";
import { WeekView } from "@/components/services/WeekView";

export const metadata: Metadata = {
  title: "Services",
  description: "Service times and weekly activities at Winners Chapel International, Southport — join us in person or online.",
};

const expectations = [
  { icon: "sunrise", title: "First Service · 8:00 AM", text: "A powerful communion service to begin your week in victory — the Word, worship and the Lord's table." },
  { icon: "church", title: "Second Service · 10:30 AM", text: "Our main celebration with vibrant praise, life-changing teaching and children's church running alongside." },
  { icon: "book", title: "Midweek · Wed 6:00 PM", text: "Bible study and communion — a midweek recharge to go deeper in the Word and fellowship." },
];

const online = [
  { icon: "play", title: "Watch Live", href: "/media#live" },
  { icon: "message-circle", title: "Live Chat", href: "/media#live" },
  { icon: "flame", title: "Prayer Request", href: "/prayer" },
  { icon: "gift", title: "Online Giving", href: "/giving" },
  { icon: "book-open", title: "Digital Bible", href: "/media" },
  { icon: "pen-line", title: "Sermon Notes", href: "/media#sermons" },
];

const wsf = [
  { icon: "map-pin", title: "Find Nearest Fellowship", text: "Locate a Winners Satellite Fellowship in your neighbourhood and connect midweek." },
  { icon: "home", title: "Host a Fellowship", text: "Open your home as a centre of light, prayer and community on your street." },
  { icon: "user-check", title: "Become a Leader", text: "Answer the call to shepherd a fellowship and raise disciples where you live." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Weekly Gatherings"
        breadcrumb="Services"
        title={<>Come and worship <span className="text-gold-gradient">with us</span></>}
        subtitle="There's a place for you at every gathering — in person at St George's Church, Southport, or online from anywhere."
        image="/images/site/children.jpg"
      >
        <div className="flex flex-wrap gap-4">
          <Button href="/first-timers" icon="hand">Plan Your Visit</Button>
          <Button href="/media#live" variant="outline" icon="play">Watch Live</Button>
        </div>
      </PageHero>

      {/* Service times */}
      <Section tone="navy">
        <SectionHeading eyebrow="Service Times" title={<>When we <span className="text-gold-gradient">gather</span></>} subtitle="Weekly services and gatherings across the Winners Chapel Southport family." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.06}>
              <div className="card-lift flex h-full flex-col rounded-3xl bg-navy-900/50 p-7 ring-1 ring-gold-500/10">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20"><Icon name={s.icon} className="h-6 w-6" /></span>
                  <span className="rounded-full bg-navy-800/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-300">{s.tag}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-cream">{s.name}</h3>
                <div className="mt-2 flex items-center gap-3 text-sm text-gold-200/90">
                  <span className="flex items-center gap-1.5"><Icon name="calendar" className="h-4 w-4" />{s.day}</span>
                  <span className="flex items-center gap-1.5"><Icon name="clock" className="h-4 w-4" />{s.time}</span>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-cream/55">{s.desc}</p>
                <button className="mt-6 flex items-center gap-1.5 border-t border-gold-500/10 pt-4 text-xs font-semibold uppercase tracking-wider text-gold-300 hover:text-gold-200"><Icon name="calendar" className="h-4 w-4" /> Add to Calendar</button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* What to expect */}
      <Section tone="darker" className="grain">
        <SectionHeading eyebrow="What to Expect" title={<>Every service, an <span className="text-gold-gradient">encounter</span></>} />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {expectations.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08}>
              <div className="card-lift flex h-full flex-col gap-4 rounded-3xl bg-navy-900/50 p-8 ring-1 ring-gold-500/10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20"><Icon name={e.icon} className="h-7 w-7" /></span>
                <h3 className="font-display text-lg font-semibold text-cream">{e.title}</h3>
                <p className="text-sm leading-relaxed text-cream/60">{e.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Weekly activities */}
      <Section tone="navy">
        <SectionHeading eyebrow="Weekly Activities" title={<>Something for <span className="text-gold-gradient">every day</span></>} subtitle="Explore what's happening across the week — tap a day to see the details." />
        <Reveal className="mt-12">
          <WeekView />
        </Reveal>
      </Section>

      {/* WSF */}
      <Section tone="darker">
        <SectionHeading eyebrow="Winners Satellite Fellowship" title={<>Church in your <span className="text-gold-gradient">neighbourhood</span></>} subtitle="Our WSF network brings the family closer to home — midweek fellowships of prayer, the Word and community across Southport." />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {wsf.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08}>
              <div className="card-lift flex h-full flex-col gap-4 rounded-3xl bg-navy-900/50 p-8 ring-1 ring-gold-500/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20"><Icon name={w.icon} className="h-6 w-6" /></span>
                <h3 className="font-display text-lg font-semibold text-cream">{w.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-cream/55">{w.text}</p>
                <Button href="/contact" variant="outline" size="sm" iconRight="arrow-right">Enquire</Button>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <div className="overflow-hidden rounded-3xl ring-1 ring-gold-500/20">
            <div className="relative h-72">
              <iframe title="Southport fellowships map" src="https://maps.google.com/maps?q=Southport&output=embed" className="absolute inset-0 h-full w-full grayscale-[0.3]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Online church */}
      <Section tone="navy">
        <SectionHeading eyebrow="Online Church" title={<>Worship from <span className="text-gold-gradient">anywhere</span></>} subtitle="Can't make it in person? Join our online community and experience everything, everywhere." />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {online.map((o, i) => (
            <Reveal key={o.title} delay={(i % 6) * 0.04}>
              <a href={o.href} className="card-lift group flex flex-col items-center gap-3 rounded-2xl bg-navy-900/40 p-6 text-center ring-1 ring-gold-500/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20 transition group-hover:bg-gold-500/20"><Icon name={o.icon} className="h-6 w-6" /></span>
                <span className="text-sm font-medium text-cream/80">{o.title}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Location + map */}
      <section className="relative overflow-hidden bg-navy-950">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center px-6 py-16 sm:px-12 lg:py-24">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400"><span className="h-px w-6 bg-gold-500/60" /> Find Us</span>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl">See you this <span className="text-gold-gradient">Sunday</span></h2>
              <div className="mt-6 space-y-4 text-cream/70">
                <p className="flex items-start gap-3"><Icon name="map-pin" className="mt-0.5 h-5 w-5 text-gold-400" />{site.fullAddress}</p>
                <p className="flex items-center gap-3"><Icon name="clock" className="h-5 w-5 text-gold-400" />Sundays 8:00 AM &amp; 10:30 AM · Wednesdays 6:00 PM</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={`https://maps.google.com/?q=${encodeURIComponent(site.mapsQuery)}`} icon="navigation">Get Directions</Button>
                <Button href="/first-timers" variant="outline">Plan Your Visit</Button>
              </div>
            </Reveal>
          </div>
          <div className="relative min-h-[360px] lg:min-h-full">
            <iframe title="Map to Winners Chapel Southport" src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`} className="absolute inset-0 h-full w-full grayscale-[0.3]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  );
}
