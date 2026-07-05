import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PrayerForm } from "@/components/prayer/PrayerForm";
import { PrayerWall } from "@/components/prayer/PrayerWall";
import { site, testimonies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prayer",
  description:
    "Submit a prayer request, find comfort, and let our team stand with you in faith. At Winners Chapel Southport, prayer changes everything.",
};

const phoneHref = site.phones[0].replace(/[^+\d]/g, "");

const options = [
  {
    icon: "phone-call",
    title: "Emergency Prayer",
    body: "In crisis or need prayer right now? Our prayer hotline is open. Don't carry it alone — call and let us pray with you.",
    cta: "Call the Prayer Line",
    href: `tel:${phoneHref}`,
    highlight: true,
  },
  {
    icon: "message-circle",
    title: "Schedule Counselling",
    body: "Wisdom and comfort for every season. Book a confidential counselling session with a trained member of our care team.",
    cta: "Request a Session",
    href: "/contact",
  },
  {
    icon: "user-check",
    title: "Book Pastoral Appointment",
    body: "Meet one-to-one with a pastor for guidance, prayer and encouragement tailored to your journey.",
    cta: "Book Appointment",
    href: "/contact",
  },
];

const answered = testimonies.slice(0, 3);

export default function PrayerPage() {
  return (
    <>
      <PageHero
        eyebrow="Prayer & Counselling"
        title={
          <>
            Let&apos;s <span className="text-gold-gradient">pray</span> together.
          </>
        }
        subtitle="Whatever you're facing, you don't have to face it alone. Share your request and our team will stand with you in faith — because heaven answers prayer."
      >
        <div className="flex flex-wrap gap-4">
          <Button href="#request" icon="flame">
            Submit a Request
          </Button>
          <Button href={`tel:${phoneHref}`} variant="outline" icon="phone-call">
            Prayer Hotline
          </Button>
        </div>
      </PageHero>

      {/* Intro */}
      <Section tone="navy">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              <span className="h-px w-6 bg-gold-500/60" /> The Power of Prayer
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl">
              Where two agree, heaven{" "}
              <span className="text-gold-gradient">moves</span>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/70">
              &ldquo;Again I say unto you, that if two of you shall agree on earth as touching any
              thing that they shall ask, it shall be done for them of my Father which is in
              heaven.&rdquo; At Winners Chapel, prayer is not a last resort — it&apos;s our first
              response. Bring us your burden, and let&apos;s believe God together.
            </p>
            <p className="mt-4 text-sm font-medium uppercase tracking-wider text-gold-400/80">
              Matthew 18:19
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Prayer request form — centerpiece */}
      <Section id="request" tone="darker">
        <div className="grid items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              align="left"
              eyebrow="Prayer Request"
              title="Share what's on your heart"
              subtitle="Every request is read and prayed over by our dedicated prayer team. Nothing is too big or too small for God."
            />
            <div className="mt-8 space-y-4">
              {[
                { icon: "shield", t: "Completely confidential", d: "Your privacy is honoured and protected." },
                { icon: "flame", t: "Prayed over faithfully", d: "Our team lifts every request before God." },
                { icon: "heart", t: "You'll be followed up", d: "We care about your breakthrough, not just your request." },
              ].map((f) => (
                <div key={f.t} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20">
                    <Icon name={f.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-cream">{f.t}</p>
                    <p className="text-sm text-cream/55">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <div className="glass rounded-2xl p-6 sm:p-8">
                <PrayerForm />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Options grid */}
      <Section tone="navy">
        <SectionHeading
          eyebrow="More Ways We Can Help"
          title="Support for every season"
          subtitle="Prayer, counselling and pastoral care — reach out in whatever way feels right for you."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {options.map((opt, i) => (
            <Reveal key={opt.title} delay={i * 0.08}>
              <div
                className={`card-lift flex h-full flex-col rounded-2xl p-8 ${
                  opt.highlight
                    ? "bg-gradient-to-br from-gold-500/15 to-transparent ring-1 ring-gold-400/30"
                    : "bg-navy-900/40 ring-1 ring-gold-500/10"
                }`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20">
                  <Icon name={opt.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl text-cream">{opt.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/60">{opt.body}</p>
                {opt.highlight && (
                  <p className="mt-4 font-display text-lg text-gold-300">{site.phones[0]}</p>
                )}
                <Button
                  href={opt.href}
                  variant={opt.highlight ? "gold" : "outline"}
                  size="sm"
                  iconRight="arrow-right"
                  className="mt-5 self-start"
                >
                  {opt.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Prayer wall */}
      <Section tone="darker">
        <SectionHeading
          eyebrow="Prayer Wall"
          title="Stand in agreement"
          subtitle="Real requests from our community. Tap 'I prayed' to add your faith to theirs — together, we carry one another."
        />
        <div className="mt-14">
          <PrayerWall />
        </div>
      </Section>

      {/* Answered prayers / testimonies */}
      <Section tone="navy">
        <SectionHeading
          eyebrow="Answered Prayers"
          title="Testimonies of a faithful God"
          subtitle="What we're believing you for today becomes your testimony tomorrow."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {answered.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="glass card-lift flex h-full flex-col rounded-2xl p-8">
                <Icon name="quote" className="h-8 w-8 text-gold-500/40" />
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-cream/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-gold-500/10 pt-5">
                  <span className="font-display text-cream">{t.name}</span>
                  <span className="rounded-full bg-gold-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-300">
                    {t.category}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Prayer hotline band */}
      <Section tone="darker">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800/80 to-navy-950 p-10 ring-1 ring-gold-500/20 sm:p-14 hero-glow">
            <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
              <div>
                <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                  <span className="h-px w-6 bg-gold-500/60" /> Prayer Hotline
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold text-cream sm:text-4xl">
                  We&apos;re only a call away
                </h2>
                <p className="mt-3 max-w-xl text-cream/65">
                  Whenever you need prayer — day or night — reach out. A real person will pray with
                  you.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href={`tel:${phoneHref}`} size="lg" icon="phone-call">
                  {site.phones[0]}
                </Button>
                <Button href={site.whatsapp} size="lg" variant="outline" icon="message-square">
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Scripture encouragement */}
      <Section tone="navy">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Icon name="book-open" className="mx-auto h-10 w-10 text-gold-500/50" />
            <p className="mt-6 font-display text-2xl leading-snug text-cream sm:text-3xl">
              &ldquo;Be careful for nothing; but in every thing by prayer and supplication with
              thanksgiving let your requests be made known unto{" "}
              <span className="text-gold-gradient">God</span>.&rdquo;
            </p>
            <p className="mt-5 text-sm font-medium uppercase tracking-wider text-gold-400/80">
              Philippians 4:6
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Closing CTA */}
      <Section tone="darker">
        <Reveal>
          <div className="rounded-3xl bg-navy-900/40 p-10 text-center ring-1 ring-gold-500/15 sm:p-14">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold text-cream sm:text-4xl">
              Bring your burden. Leave with{" "}
              <span className="text-gold-gradient">breakthrough</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-cream/65">
              Join us in person as we pray, worship and believe God together for the impossible.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="#request" size="lg" icon="flame">
                Submit a Request
              </Button>
              <Button href="/services" size="lg" variant="outline">
                Join a Service
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
