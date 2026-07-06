import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Accordion } from "@/components/ui/Accordion";
import { ministries } from "@/lib/site";
import { JoinForm } from "@/components/ministries/JoinForm";

export const metadata: Metadata = {
  title: "Ministries",
  description: "Find your place to serve and belong at Winners Chapel International, Southport — from the choir to children's church and beyond.",
};

const offers = [
  { icon: "flame", label: "Mission" },
  { icon: "user-check", label: "Leadership" },
  { icon: "camera", label: "Gallery" },
  { icon: "hand", label: "Join Form" },
  { icon: "calendar", label: "Schedule" },
  { icon: "download", label: "Downloads" },
];

const spotlights = [
  {
    id: "children", name: "Children's Church", img: "/images/site/children.jpg",
    text: "A safe, vibrant and fun place where children encounter God at their level — with age-appropriate teaching, worship and activities.",
    points: ["Bible-based curriculum", "DBS-checked, trained teachers", "Secure check-in & check-out", "Parents' guide & resources"],
    reverse: false,
  },
  {
    id: "youth", name: "Youth Alive", img: "/images/site/outreach.jpg",
    text: "Raising a bold generation of purpose-driven young people who love God, know their identity, and shine in every sphere of life.",
    points: ["Weekly Bible study & hangouts", "Mentorship & discipleship", "Careers, skills & prayer", "Camps, media & creativity"],
    reverse: true,
  },
];

const faq = [
  { q: "How do I join a ministry?", a: "Simply fill in the join form below, or speak to a leader after any service. We'll connect you with the right team and walk you through the next steps." },
  { q: "Do I need to be a member first?", a: "We encourage you to become part of the family, but many teams welcome committed volunteers. Attending our membership and workers classes helps you grow and serve with confidence." },
  { q: "Is there any training?", a: "Yes — every ministry provides onboarding and ongoing training so you're equipped and supported in your service." },
  { q: "Can I serve in more than one area?", a: "We recommend focusing on one team so you can serve consistently and build relationships, but talk to your leaders about what's best for your season." },
  { q: "What if I'm not sure where I fit?", a: "That's completely normal! Let us know your interests and gifts in the form and our team will help you discover the right place to belong." },
];

export default function MinistriesPage() {
  const [featured, rest] = [ministries.slice(0, 3), ministries.slice(3)];
  return (
    <>
      <PageHero
        eyebrow="Serve & Belong"
        breadcrumb="Ministries"
        title={<>Find your place in a <span className="text-gold-gradient">ministry</span></>}
        subtitle="There is a place for your gift. Serving is where belonging becomes family — discover where you fit."
        image="/images/site/sermon-audio.jpg"
      />

      {/* Intro / featured */}
      <Section tone="navy">
        <SectionHeading eyebrow="Why We Serve" title={<>Every member a <span className="text-gold-gradient">minister</span></>} subtitle="God has given each of us a gift to build His house and bless His people. Here's where it comes alive." />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {featured.map((m, i) => (
            <Reveal key={m.slug} delay={i * 0.08}>
              <div id={m.slug} className="card-light flex h-full flex-col gap-4 rounded-3xl p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25"><Icon name={m.icon} className="h-7 w-7" /></span>
                <h3 className="font-display text-xl font-semibold text-navy-900">{m.name}</h3>
                <p className="flex-1 text-sm leading-relaxed text-navy-600/80">{m.desc}</p>
                <a href="#join" className="flex items-center gap-1.5 text-sm font-semibold text-gold-700 hover:text-gold-600">Join this team <Icon name="arrow-right" className="h-4 w-4" /></a>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Full grid */}
      <Section tone="darker" className="grain">
        <SectionHeading eyebrow="All Ministries" title={<>{ministries.length} ways to <span className="text-gold-gradient">get involved</span></>} subtitle="From worship to welfare, there's a team for every heart and every gift." />
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {rest.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 4) * 0.04}>
              <a id={m.slug} href="#join" className="card-light group flex h-full flex-col gap-3 rounded-2xl p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25 transition group-hover:bg-gold-500/25"><Icon name={m.icon} className="h-5 w-5" /></span>
                <span className="text-sm font-semibold text-navy-900">{m.name}</span>
                <span className="text-xs leading-relaxed text-navy-600/80">{m.desc}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Spotlights */}
      {spotlights.map((s) => (
        <Section key={s.id} tone="navy">
          <div id={s.id} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal direction={s.reverse ? "left" : "right"} className={s.reverse ? "lg:order-2" : ""}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] ring-1 ring-gold-500/20">
                <Image src={s.img} alt={s.name} fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
              </div>
            </Reveal>
            <Reveal direction={s.reverse ? "right" : "left"} className={s.reverse ? "lg:order-1" : ""}>
              <SectionHeading align="left" eyebrow="Spotlight" title={s.name} />
              <p className="mt-5 text-base leading-relaxed text-navy-600/80">{s.text}</p>
              <ul className="mt-6 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-navy-800">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-500/15 text-gold-700"><Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.5} /></span>{p}
                  </li>
                ))}
              </ul>
              <Button href="#join" className="mt-8" iconRight="arrow-right">Get Involved</Button>
            </Reveal>
          </div>
        </Section>
      ))}

      {/* What every ministry offers */}
      <Section tone="darker">
        <SectionHeading eyebrow="What to Expect" title={<>Every team is <span className="text-gold-gradient">equipped</span> to thrive</>} />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {offers.map((o, i) => (
            <Reveal key={o.label} delay={(i % 6) * 0.04}>
              <div className="card-light flex flex-col items-center gap-3 rounded-2xl p-6 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25"><Icon name={o.icon} className="h-6 w-6" /></span>
                <span className="text-sm font-medium text-navy-800">{o.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Join form */}
      <Section id="join" tone="navy">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal direction="right">
            <SectionHeading align="left" eyebrow="Join a Ministry" title={<>Ready to <span className="text-gold-gradient">serve</span>?</>} subtitle="Tell us a little about you and the team you're drawn to. We'll be in touch to welcome you and take the next step together." />
            <div className="mt-8 space-y-3 text-sm text-navy-600/80">
              <p className="flex items-center gap-3"><Icon name="check" className="h-5 w-5 text-gold-600" />No experience necessary — just a willing heart</p>
              <p className="flex items-center gap-3"><Icon name="check" className="h-5 w-5 text-gold-600" />Full training and support provided</p>
              <p className="flex items-center gap-3"><Icon name="check" className="h-5 w-5 text-gold-600" />Grow, belong and make an eternal impact</p>
            </div>
          </Reveal>
          <Reveal direction="left">
            <JoinForm />
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="cream">
        <SectionHeading light eyebrow="Questions" title={<>Serving <span className="text-gold-gradient">FAQs</span></>} />
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion items={faq} light />
        </div>
      </Section>
    </>
  );
}
