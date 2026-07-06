import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Countdown } from "@/components/ui/Countdown";
import { events } from "@/lib/site";
import { EventList } from "@/components/events/EventList";
import { RegisterForm } from "@/components/events/RegisterForm";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events at Winners Chapel International, Southport — Shiloh, healing services, youth camp, prayer summit and more.",
};

export default function EventsPage() {
  const featured = events.find((e) => e.featured) ?? events[0];
  return (
    <>
      <PageHero
        eyebrow="What's On"
        breadcrumb="Events"
        title={<>Come and experience <span className="text-gold-gradient">more</span></>}
        subtitle="From Shiloh to healing services, youth camps and prayer summits — there's always something happening in the house."
        image="/images/site/outreach.jpg"
      />

      {/* Featured */}
      <Section tone="navy">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-800/70 to-navy-950 p-8 ring-1 ring-gold-500/20 sm:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-500/10 blur-3xl" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-950">
                  <Icon name="star" className="h-3 w-3" /> Featured Event
                </span>
                <h2 className="mt-5 font-display text-4xl font-bold text-cream sm:text-5xl">{featured.title}</h2>
                <p className="mt-2 text-gold-300">{featured.type} · {featured.date}</p>
                <p className="mt-4 max-w-lg text-cream/70">{featured.desc}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button href="#register" size="lg" variant="gold" icon="calendar">Register Now</Button>
                  <Button href="#calendar" size="lg" variant="outlineLight" iconRight="arrow-right">View All Events</Button>
                </div>
              </div>
              <div className="glass rounded-3xl p-6 text-center">
                <p className="text-xs uppercase tracking-[0.25em] text-gold-600">Counting Down</p>
                <p className="mt-2 mb-5 font-display text-lg text-cream">The next gathering begins in</p>
                <div className="flex justify-center"><Countdown /></div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Filterable list */}
      <Section id="calendar" tone="darker" className="grain">
        <SectionHeading eyebrow="Full Calendar" title={<>Upcoming <span className="text-gold-gradient">events</span></>} subtitle="Filter by category and register for what speaks to you." />
        <Reveal className="mt-12">
          <EventList />
        </Reveal>
      </Section>

      {/* Registration */}
      <Section id="register" tone="navy">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal direction="right">
            <SectionHeading align="left" eyebrow="Register" title={<>Secure your <span className="text-gold-gradient">place</span></>} subtitle="Registration is free. Reserve your spot and we'll send you all the details." />
            <div className="mt-8 space-y-3 text-sm text-navy-600/80">
              <p className="flex items-center gap-3"><Icon name="check" className="h-5 w-5 text-gold-600" />Free registration for all events</p>
              <p className="flex items-center gap-3"><Icon name="check" className="h-5 w-5 text-gold-600" />Reminders by email &amp; SMS</p>
              <p className="flex items-center gap-3"><Icon name="check" className="h-5 w-5 text-gold-600" />Bring your family and friends</p>
            </div>
          </Reveal>
          <Reveal direction="left">
            <RegisterForm />
          </Reveal>
        </div>
      </Section>

      {/* Volunteer CTA */}
      <Section tone="darker">
        <Reveal>
          <div className="bg-white shadow-xl ring-1 ring-navy-900/10 flex flex-col items-center gap-6 rounded-3xl p-10 text-center sm:p-16">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25"><Icon name="hand-heart" className="h-7 w-7" /></span>
            <h2 className="font-display text-3xl font-semibold text-navy-900 sm:text-4xl">Serve at an <span className="text-gold-gradient">event</span></h2>
            <p className="max-w-xl text-navy-600/80">Every great gathering is powered by willing hands. Join our volunteer teams and be part of something unforgettable.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/ministries#join" size="lg" icon="hand">Volunteer</Button>
              <Button href="/contact" size="lg" variant="outline">Ask a Question</Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
