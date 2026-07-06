import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { ContactForm } from "@/components/contact/ContactForm";
import { NewsletterForm } from "@/components/contact/NewsletterForm";
import { site, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Winners Chapel International, Southport. Find our address, phone numbers, service times, and reach the right team quickly.",
};

const phoneHref = (p: string) => p.replace(/[^+\d]/g, "");

const socials = [
  { name: "facebook", href: site.socials.facebook },
  { name: "instagram", href: site.socials.instagram },
  { name: "x", href: site.socials.x },
  { name: "youtube", href: site.socials.youtube },
  { name: "whatsapp", href: site.socials.whatsapp },
];

const departments = [
  { icon: "message-circle", title: "General Enquiries", desc: "Questions about the church, visiting or anything else.", email: "info@winnerschapelsouthport.org.uk" },
  { icon: "user-check", title: "First Timers", desc: "Planning your first visit? Our welcome team is here.", email: "welcome@winnerschapelsouthport.org.uk" },
  { icon: "flame", title: "Prayer", desc: "Submit a request or reach our prayer & care team.", email: "prayer@winnerschapelsouthport.org.uk" },
  { icon: "book-open", title: "WOFBI", desc: "Word of Faith Bible Institute enquiries and enrolment.", email: "wofbi@winnerschapelsouthport.org.uk" },
  { icon: "heart-handshake", title: "CSR / Volunteering", desc: "Community outreach, food bank and getting involved.", email: "csr@winnerschapelsouthport.org.uk" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title={
          <>
            We&apos;d love to <span className="text-gold-gradient">hear</span> from you.
          </>
        }
        subtitle="Whether you have a question, a prayer need, or simply want to say hello — our door is always open. Reach out and a member of our team will be in touch."
      >
        <div className="flex flex-wrap gap-4">
          <Button href="#contact-form" icon="mail">
            Send a Message
          </Button>
          <Button href={site.whatsapp} variant="outline" icon="message-square">
            WhatsApp Us
          </Button>
        </div>
      </PageHero>

      {/* Form + details */}
      <Section id="contact-form" tone="navy">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Send a Message"
              title="Drop us a line"
              subtitle="Fill in the form and we'll get back to you as soon as we can."
            />
            <Reveal delay={0.1} className="mt-8">
              <ContactForm />
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="bg-white shadow-xl ring-1 ring-navy-900/10 rounded-2xl p-8">
              <h3 className="font-display text-2xl text-navy-900">Contact Details</h3>
              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25">
                    <Icon name="map-pin" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-600/80">
                      Address
                    </p>
                    <p className="mt-1 text-navy-900">{site.address.venue}</p>
                    <p className="text-sm text-navy-600/80">
                      {site.address.street}, {site.address.city}, {site.address.postcode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25">
                    <Icon name="phone" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-600/80">
                      Phone
                    </p>
                    {site.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:${phoneHref(p)}`}
                        className="mt-1 block text-navy-900 transition hover:text-gold-700"
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25">
                    <Icon name="mail" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-600/80">
                      Email
                    </p>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-1 block break-all text-navy-900 transition hover:text-gold-700"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25">
                    <Icon name="clock" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-600/80">
                      Service Times
                    </p>
                    <ul className="mt-1 space-y-0.5 text-sm text-navy-600/80">
                      {services
                        .filter((s) => s.tag === "Weekly")
                        .map((s) => (
                          <li key={s.name}>
                            <span className="text-navy-900">{s.day}</span> · {s.time} — {s.name}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-navy-900/10 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-navy-600/80">
                  Follow Us
                </p>
                <div className="mt-3 flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900/5 text-navy-700 ring-1 ring-navy-900/10 transition hover:bg-gold-500/15 hover:text-gold-700"
                    >
                      <BrandIcon name={s.name} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Map */}
      <Section tone="darker">
        <SectionHeading
          eyebrow="Find Us"
          title="Come and visit"
          subtitle={site.fullAddress}
        />
        <Reveal delay={0.1} className="mt-12">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-navy-900/10">
            <iframe
              title="Map to Winners Chapel Southport"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
        <div className="mt-8 flex justify-center">
          <Button
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.mapsQuery)}`}
            variant="outline"
            iconRight="arrow-up-right"
          >
            Get Directions
          </Button>
        </div>
      </Section>

      {/* Emergency + Departments */}
      <Section tone="navy">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Emergency card */}
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl bg-gradient-to-br from-gold-500/15 to-transparent p-8 ring-1 ring-gold-500/25">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25">
                <Icon name="phone-call" className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl text-navy-900">Emergency Contacts</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600/80">
                Need urgent prayer or pastoral care? Our prayer line is here for you, day or night.
              </p>
              <div className="mt-6 space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-wider text-navy-600/80">Prayer Line</p>
                  <a href={`tel:${phoneHref(site.phones[0])}`} className="font-display text-lg text-gold-700 link-underline">
                    {site.phones[0]}
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-navy-600/80">Pastoral Care</p>
                  <a href={`tel:${phoneHref(site.phones[1])}`} className="font-display text-lg text-gold-700 link-underline">
                    {site.phones[1]}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Departments */}
          <div className="lg:col-span-2">
            <SectionHeading
              align="left"
              eyebrow="Reach the Right Team"
              title="Quick contacts"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {departments.map((d, i) => (
                <Reveal key={d.title} delay={(i % 2) * 0.08}>
                  <a
                    href={`mailto:${d.email}`}
                    className="card-lift flex h-full items-start gap-4 rounded-2xl bg-white p-6 ring-1 ring-navy-900/10"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25">
                      <Icon name={d.icon} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-display text-lg text-navy-900">{d.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-navy-600/80">{d.desc}</p>
                      <span className="mt-2 block break-all text-xs font-medium text-gold-700">
                        {d.email}
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* WhatsApp band */}
      <Section tone="darker">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 text-cream p-10 ring-1 ring-gold-500/20 sm:p-14 hero-glow">
            <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
              <div className="flex items-center gap-5">
                <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25 sm:flex">
                  <BrandIcon name="whatsapp" className="h-8 w-8" />
                </span>
                <div>
                  <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
                    Connect on WhatsApp
                  </h2>
                  <p className="mt-3 max-w-xl text-cream/65">
                    Prefer to chat? Message us on WhatsApp for a quick, friendly response from our
                    team.
                  </p>
                </div>
              </div>
              <Button href={site.whatsapp} size="lg" icon="message-square">
                Chat Now
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Newsletter */}
      <Section tone="navy">
        <Reveal>
          <div className="rounded-3xl bg-white shadow-xl p-10 ring-1 ring-navy-900/10 sm:p-14">
            <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
              <div>
                <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
                  <span className="h-px w-6 bg-gold-500/60" /> Stay Connected
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
                  Get encouragement in your inbox
                </h2>
                <p className="mt-3 max-w-xl text-navy-600/80">
                  Sermons, events and words of faith — delivered straight to you. No spam, just
                  goodness.
                </p>
              </div>
              <NewsletterForm />
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Closing CTA */}
      <Section tone="darker">
        <Reveal>
          <div className="text-center">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              We can&apos;t wait to{" "}
              <span className="text-gold-gradient">meet you</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-navy-600/80">
              Join us this Sunday and experience the Winners family for yourself.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/first-timers" size="lg" icon="user-check">
                Plan Your Visit
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
