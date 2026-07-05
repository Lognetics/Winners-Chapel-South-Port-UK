import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Accordion } from "@/components/ui/Accordion";
import { RegisterForm } from "@/components/first-timers/RegisterForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "First Timers",
  description:
    "Planning your first visit to Winners Chapel International, Southport? Here's everything you need to feel right at home — we saved you a seat.",
};

const expect = [
  {
    icon: "sparkles",
    title: "The Atmosphere",
    body: "Warm, joyful and full of faith. From the car park to the sanctuary, you'll be welcomed like family — because that's exactly what you are.",
  },
  {
    icon: "clock",
    title: "Length of Service",
    body: "Our services run for around 90 minutes — a beautiful blend of worship, prayer, and the life-changing Word of God.",
  },
  {
    icon: "music",
    title: "The Worship",
    body: "Expect vibrant, heartfelt praise. Whether you clap, sing or simply soak it in, worship here lifts your spirit and prepares your heart.",
  },
  {
    icon: "book-open",
    title: "The Word",
    body: "Practical, faith-filled teaching straight from Scripture that you can apply on Monday morning. You'll leave equipped and encouraged.",
  },
  {
    icon: "hand",
    title: "What to Wear",
    body: "Come as you are. Some dress smart, others casual — there's no dress code. God is far more interested in your heart than your outfit.",
  },
  {
    icon: "cross",
    title: "Communion",
    body: "On Communion Sundays we share the Lord's table together — a sacred, unifying moment. You're welcome to take part or simply observe.",
  },
];

const practical = [
  {
    icon: "navigation",
    title: "Parking",
    body: "Convenient parking is available near the venue on and around Lord Street, with additional public car parks a short walk away.",
  },
  {
    icon: "bus",
    title: "Bus Pickup",
    body: "No transport? Our transportation team runs a bus pickup service across Southport. Let us know and we'll arrange your ride.",
  },
  {
    icon: "hand",
    title: "Dress Code",
    body: "There isn't one. Come comfortable, come as you are — you'll fit right in whether you're smart or casual.",
  },
  {
    icon: "baby",
    title: "Children's Church",
    body: "A safe, joyful, age-appropriate space where your children learn about Jesus and have fun while you enjoy the service.",
  },
  {
    icon: "heart-handshake",
    title: "Accessibility",
    body: "Our venue is wheelchair accessible with step-free access. Let a steward know if you need any assistance and we'll gladly help.",
  },
  {
    icon: "gift",
    title: "Welcome Pack",
    body: "Every first timer receives a free welcome pack and gift at our welcome desk — our small way of saying we're glad you came.",
  },
];

const steps = [
  {
    icon: "navigation",
    title: "Arrive & Park",
    body: "Aim to arrive 10–15 minutes early. Park nearby and follow the signs — our friendly stewards will point you the right way.",
  },
  {
    icon: "hand",
    title: "Say Hi at the Welcome Desk",
    body: "Stop by our welcome desk. Our team will greet you, answer any questions, and help you find the best seat in the house.",
  },
  {
    icon: "gift",
    title: "Enjoy the Service & Grab Your Gift",
    body: "Relax and enjoy worship and the Word. On your way out, collect your free welcome gift — no strings attached.",
  },
];

const faqs = [
  {
    q: "Do I need to register before I come?",
    a: "Not at all — you're welcome to simply turn up. Registering ahead just helps our welcome team prepare a seat and your gift, so your visit is even smoother.",
  },
  {
    q: "What time should I arrive?",
    a: "We recommend arriving 10–15 minutes before the service starts so you can park, settle in, and grab a great seat with time to spare.",
  },
  {
    q: "Will I be singled out or asked to give?",
    a: "Never. You won't be put on the spot. Giving is entirely optional and private — as our guest, there's absolutely no pressure.",
  },
  {
    q: "Can I bring my children?",
    a: "Absolutely. Children are welcome to stay with you, and our vibrant Children's Church offers a safe, fun space designed just for them.",
  },
  {
    q: "Is the building accessible?",
    a: "Yes. The venue offers step-free, wheelchair-accessible entry. Please let a steward know if you'd like any assistance during your visit.",
  },
  {
    q: "What should I do when I arrive?",
    a: "Head to our welcome desk. A member of our first-timers team will greet you, help you settle in, and make sure you have everything you need.",
  },
];

export default function FirstTimersPage() {
  return (
    <>
      <PageHero
        eyebrow="Welcome Home"
        image="/images/site/welcome-handshake.jpg"
        title={
          <>
            We saved you a <span className="text-gold-gradient">seat</span>.
          </>
        }
        subtitle="Whether it's your very first time in church or your first time with us, you belong here. Let us make your visit warm, easy and unforgettable."
      >
        <div className="flex flex-wrap gap-4">
          <Button href="#register" icon="user-check">
            Register My Visit
          </Button>
          <Button href="#expect" variant="outline">
            What to Expect
          </Button>
        </div>
      </PageHero>

      {/* Warm intro */}
      <Section tone="navy">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              <span className="h-px w-6 bg-gold-500/60" /> A Warm Welcome
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl">
              You&apos;re not a stranger here — you&apos;re{" "}
              <span className="text-gold-gradient">family</span>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/70">
              At Winners Chapel International, Southport, every first timer is a gift. From the
              moment you walk through the doors, you&apos;ll find genuine warmth, real people, and a
              place where faith comes alive. Come exactly as you are — we can&apos;t wait to meet
              you.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* What to expect */}
      <Section id="expect" tone="darker">
        <SectionHeading
          eyebrow="What to Expect"
          title="Your visit, made simple"
          subtitle="Here's a glimpse of what a service at Winners Southport feels like."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expect.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <div className="glass card-lift h-full rounded-2xl p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl text-cream">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/60">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Practical info */}
      <Section tone="navy">
        <SectionHeading
          eyebrow="Good to Know"
          title="The practical details"
          subtitle="Everything you might be wondering about before you arrive."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practical.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <div className="card-lift h-full rounded-2xl bg-navy-900/40 p-7 ring-1 ring-gold-500/10">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg text-cream">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-cream/60">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3 steps timeline */}
      <Section tone="darker">
        <SectionHeading
          eyebrow="Your First Visit"
          title="As easy as 1, 2, 3"
          subtitle="Three simple steps and you're in. That's all it takes."
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="relative h-full rounded-2xl bg-navy-900/40 p-8 ring-1 ring-gold-500/10">
                <div className="flex items-center gap-4">
                  <span className="font-display text-5xl font-bold text-gold-500/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20">
                    <Icon name={step.icon} className="h-6 w-6" />
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl text-cream">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/60">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Register form + gift/connect */}
      <Section id="register" tone="navy">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Register Your Attendance"
              title="Let us know you're coming"
              subtitle="Tell us a little about your visit and we'll roll out the welcome — plus a free gift waiting just for you."
            />
            <div className="mt-8 space-y-5">
              <Reveal>
                <div className="flex items-start gap-4 rounded-2xl bg-gradient-to-br from-gold-500/15 to-transparent p-6 ring-1 ring-gold-400/30">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-300 ring-1 ring-gold-400/30">
                    <Icon name="gift" className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-cream">A Free Welcome Gift</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-cream/65">
                      Every first timer receives a thoughtful welcome gift at our desk — our way of
                      celebrating that you chose to visit us.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="flex items-start gap-4 rounded-2xl bg-navy-900/40 p-6 ring-1 ring-gold-500/10">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20">
                    <Icon name="message-circle" className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-cream">Meet Someone</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-cream/65">
                      Prefer a personal chat first? Connect with a pastor or member and we&apos;ll
                      answer any question before you arrive.
                    </p>
                    <Button href="/contact" variant="ghost" size="sm" iconRight="arrow-right" className="mt-2 -ml-1">
                      Talk to us
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal delay={0.1}>
            <RegisterForm />
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="darker">
        <SectionHeading
          eyebrow="Questions?"
          title="First timer FAQs"
          subtitle="Still wondering about something? These are the questions we hear most."
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <Reveal>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </Section>

      {/* Map + directions */}
      <Section tone="navy">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Find Us"
              title="How to get here"
              subtitle={site.fullAddress}
            />
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20">
                  <Icon name="map-pin" className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-medium text-cream">{site.address.venue}</p>
                  <p className="text-sm text-cream/60">
                    {site.address.street}, {site.address.city}, {site.address.postcode}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20">
                  <Icon name="phone" className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-medium text-cream">Call ahead</p>
                  <a href={`tel:${site.phones[0].replace(/[^+\d]/g, "")}`} className="text-sm text-gold-300 link-underline">
                    {site.phones[0]}
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.mapsQuery)}`}
                variant="outline"
                iconRight="arrow-up-right"
              >
                Get Directions
              </Button>
            </div>
          </div>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-gold-500/20">
              <iframe
                title="Map to Winners Chapel Southport"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section tone="darker">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800/80 to-navy-950 p-10 text-center ring-1 ring-gold-500/20 sm:p-16 hero-glow">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold text-cream sm:text-4xl">
              This Sunday, there&apos;s a{" "}
              <span className="text-gold-gradient">seat with your name on it</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-cream/65">
              Come and experience faith, love and miracles for yourself. We can&apos;t wait to
              welcome you home.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="#register" size="lg" icon="user-check">
                Register My Visit
              </Button>
              <Button href="/services" size="lg" variant="outline">
                See Service Times
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
