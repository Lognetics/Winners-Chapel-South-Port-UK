import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { CountUp } from "@/components/ui/CountUp";
import { Accordion } from "@/components/ui/Accordion";
import { site, twelvePillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story, mission, vision and mandate of Winners Chapel International, Southport — part of Living Faith Church Worldwide.",
};

const mvm = [
  { icon: "flame", title: "Our Mission", text: "To raise a people of faith who know their God, do exploits, and shine as lights across Southport and the nations." },
  { icon: "sparkles", title: "Our Vision", text: "A church without walls — a home of miracles where every life is transformed by the undiluted Word of Faith." },
  { icon: "shield-check", title: "Our Mandate", text: site.mandate },
];

const faith = [
  { q: "The Holy Scriptures", a: "We believe the Bible is the inspired, infallible and authoritative Word of God — our final rule for faith, doctrine and conduct." },
  { q: "The Trinity", a: "We believe in one God eternally existing in three persons: the Father, the Son and the Holy Spirit." },
  { q: "Salvation by Grace", a: "We believe salvation is the gift of God, received by grace through faith in the finished work of Jesus Christ — His death, burial and resurrection." },
  { q: "The Holy Spirit", a: "We believe in the person and work of the Holy Spirit, the baptism in the Holy Spirit, and the gifts of the Spirit at work in the Church today." },
  { q: "Divine Healing & Prosperity", a: "We believe healing, breakthrough and Kingdom prosperity are the covenant rights of every believer through the redemptive work of Christ." },
  { q: "The Church & the Great Commission", a: "We believe the Church is the body of Christ, called to worship God, disciple believers, and reach the world with the gospel." },
  { q: "The Blessed Hope", a: "We believe in the second coming of our Lord Jesus Christ and the eternal reign of the saints with Him." },
];

const leaders = [
  { name: "The Resident Pastor", role: "Resident Pastor", img: "/images/site/welcome-handshake.jpg" },
  { name: "Assistant Pastor", role: "Associate Ministry", img: "/images/site/children.jpg" },
  { name: "Church Secretary", role: "Administration", img: "/images/site/sermon-audio.jpg" },
  { name: "Head of Protocol", role: "Order & Honour", img: "/images/site/outreach.jpg" },
  { name: "Choir Director", role: "Music Ministry", img: "/images/site/welcome-handshake.jpg" },
  { name: "Children's Coordinator", role: "Children's Church", img: "/images/site/children.jpg" },
];

const timeline = [
  { year: "2014", title: "The Beginning", text: "Winners Chapel International plants a fellowship in Southport with a handful of believers and a big vision." },
  { year: "2017", title: "A Growing Family", text: "Rapid growth as souls are won and lives transformed. New ministries and satellite fellowships launch." },
  { year: "2020", title: "Reaching the City", text: "Community outreach and the food bank expand, serving thousands of families across Merseyside." },
  { year: "2024", title: "A Home of Miracles", text: "Established at St George's Church — a thriving, multi-generational family of faith and love." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        breadcrumb="About"
        title={<>A faith-based, Bible-believing <span className="text-gold-gradient">family</span></>}
        subtitle="Part of Living Faith Church Worldwide, we are a home of faith, love and miracles in the heart of Southport."
        image="/images/site/welcome-handshake.jpg"
      />

      {/* History */}
      <Section tone="navy">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-gold-500/20">
              <Image src="/images/site/children.jpg" alt="Winners Chapel Southport family" fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
            </div>
          </Reveal>
          <Reveal direction="left">
            <SectionHeading align="left" eyebrow="Our Journey" title={<>Rooted in faith, growing in <span className="text-gold-gradient">love</span></>} />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-cream/70">
              <p>Winners Chapel International, Southport began with a simple conviction: that the undiluted Word of Faith, preached without compromise, has the power to liberate lives. What started as a small fellowship has become a thriving family drawn from every background and nation.</p>
              <p>We are part of {site.commission}, the global commission founded by {site.presidingBishop} and mandated to liberate the world from all oppression of the devil. That same mandate beats at the heart of everything we do in Southport.</p>
              <p>Today we gather week by week to worship God, grow in the Word, serve our city, and see the miraculous become normal. Whoever you are, there is a place for you here.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/first-timers" icon="hand">Plan Your Visit</Button>
              <Button href="/our-pastor" variant="outline" iconRight="arrow-right">Meet Our Pastor</Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mission / Vision / Mandate */}
      <Section id="mandate" tone="darker" className="grain">
        <SectionHeading eyebrow="Who We Are" title={<>Mission, vision &amp; <span className="text-gold-gradient">mandate</span></>} subtitle="Everything we are flows from one divine assignment." />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {mvm.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08}>
              <div className="card-lift flex h-full flex-col gap-4 rounded-3xl bg-navy-900/50 p-8 ring-1 ring-gold-500/10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20">
                  <Icon name={m.icon} className="h-7 w-7" />
                </span>
                <h3 className="font-display text-2xl font-semibold text-cream">{m.title}</h3>
                <p className="text-sm leading-relaxed text-cream/60">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* The Liberation Mandate quote */}
        <Reveal className="mt-12">
          <figure className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800/70 to-navy-950 p-10 text-center ring-1 ring-gold-500/20 sm:p-16">
            <Icon name="quote" className="mx-auto h-12 w-12 text-gold-500/50" />
            <blockquote className="mx-auto mt-4 max-w-3xl font-display text-2xl font-medium leading-snug text-cream sm:text-3xl">
              &ldquo;{site.mandate}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm uppercase tracking-[0.25em] text-gold-400">The Liberation Mandate</figcaption>
          </figure>
        </Reveal>
      </Section>

      {/* Twelve Pillars */}
      <Section tone="navy">
        <SectionHeading eyebrow="Our Foundation" title={<>The Twelve <span className="text-gold-gradient">Pillars</span></>} subtitle="The revelational truths upon which the Winners' commission is built." />
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {twelvePillars.map((p, i) => (
            <Reveal key={p} delay={(i % 3) * 0.05}>
              <div className="card-lift flex items-center gap-4 rounded-2xl bg-navy-900/40 p-5 ring-1 ring-gold-500/10">
                <span className="font-display text-2xl font-bold text-gold-gradient">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm font-medium text-cream/85">{p}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Statement of Faith */}
      <Section id="faith" tone="darker">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal direction="right" className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading align="left" eyebrow="What We Believe" title={<>Our statement of <span className="text-gold-gradient">faith</span></>} subtitle="The core convictions that anchor our worship, teaching and life together." />
            <Button href="/first-timers" className="mt-8" icon="church">Come and See</Button>
          </Reveal>
          <Reveal direction="left">
            <Accordion items={faith} />
          </Reveal>
        </div>
      </Section>

      {/* Global Commission */}
      <Section tone="navy">
        <SectionHeading eyebrow="Global Commission" title={<>A local church with a <span className="text-gold-gradient">global</span> reach</>} subtitle="Winners Chapel International is part of Living Faith Church Worldwide — one of the fastest-growing church movements on earth." />
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-gold-500/10 lg:grid-cols-4">
          {[
            { v: 150, s: "+", l: "Nations Reached" },
            { v: 6000, s: "+", l: "Churches Worldwide" },
            { v: 50000, s: "+", l: "Seater Faith Tabernacle" },
            { v: 40, s: "+", l: "Years of Impact" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.05}>
              <div className="flex h-full flex-col items-center justify-center gap-2 bg-navy-950 px-4 py-10 text-center">
                <span className="font-display text-3xl font-bold text-gold-gradient sm:text-4xl"><CountUp to={s.v} suffix={s.s} /></span>
                <span className="text-xs uppercase tracking-wider text-cream/55">{s.l}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Leadership */}
      <Section id="leadership" tone="darker">
        <SectionHeading eyebrow="Our Leadership" title={<>Meet the <span className="text-gold-gradient">pastoral team</span></>} subtitle="Servant-hearted leaders committed to shepherding the flock with excellence and love." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((l, i) => (
            <Reveal key={l.name} delay={(i % 3) * 0.06}>
              <div className="card-lift group overflow-hidden rounded-3xl bg-navy-900/50 ring-1 ring-gold-500/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={l.img} alt={l.name} fill sizes="(max-width:1024px) 100vw, 30vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
                </div>
                <div className="flex items-center justify-between p-6">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-cream">{l.name}</h3>
                    <p className="text-sm text-gold-300/80">{l.role}</p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full ring-gold text-gold-300"><Icon name="mail" className="h-4 w-4" /></span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section tone="navy">
        <SectionHeading eyebrow="Our Milestones" title={<>A story still being <span className="text-gold-gradient">written</span></>} />
        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.08}>
              <div className="relative flex h-full flex-col rounded-2xl bg-navy-900/40 p-6 ring-1 ring-gold-500/10">
                <span className="font-display text-3xl font-bold text-gold-gradient">{t.year}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-cream">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/55">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section tone="darker">
        <Reveal>
          <div className="glass flex flex-col items-center gap-6 rounded-3xl p-10 text-center sm:p-16">
            <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">Come and be part of the <span className="text-gold-gradient">family</span></h2>
            <p className="max-w-xl text-cream/60">We would love to welcome you this Sunday. Plan your visit or reach out — there&apos;s a seat with your name on it.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/first-timers" size="lg" icon="hand">Plan Your Visit</Button>
              <Button href="/contact" size="lg" variant="outline">Contact Us</Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
