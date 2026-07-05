import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { sermons } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Pastor",
  description: "Meet the Resident Pastor of Winners Chapel International, Southport — a personal welcome, biography, vision and resources.",
};

const vision = [
  { icon: "flame", title: "A House of Prayer", text: "Raising an army of intercessors who move heaven and change our city on their knees." },
  { icon: "users", title: "A Family of Love", text: "Where no one walks alone — every member known, discipled and celebrated." },
  { icon: "trending-up", title: "A People of Impact", text: "Believers thriving in every sphere — family, career, business and community." },
  { icon: "megaphone", title: "A City Reached", text: "Southport transformed as the gospel touches every home, school and workplace." },
];

const books = [
  { title: "The Winning Life", tag: "Faith", img: "/images/site/sermon-audio.jpg" },
  { title: "Faith That Works", tag: "Foundations", img: "/images/site/welcome-handshake.jpg" },
  { title: "Covenant of Increase", tag: "Prosperity", img: "/images/site/outreach.jpg" },
  { title: "Living in Victory", tag: "Devotional", img: "/images/site/children.jpg" },
];

const engagements = [
  { date: "Aug 2026", title: "Faith Explosion Conference", place: "Manchester, UK", type: "Conference" },
  { date: "Oct 2026", title: "Leaders Retreat", place: "Southport, UK", type: "Retreat" },
  { date: "Dec 2026", title: "Shiloh Global Gathering", place: "Canaanland / Online", type: "Convention" },
];

export default function OurPastorPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Pastor"
        breadcrumb="Our Pastor"
        title={<>A shepherd&apos;s heart, a <span className="text-gold-gradient">liberating</span> word</>}
        subtitle="Meet the Resident Pastor of Winners Chapel International, Southport."
        image="/images/site/welcome-handshake.jpg"
      />

      {/* Biography */}
      <Section tone="navy">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal direction="right">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-gold-500/20">
                <Image src="/images/site/welcome-handshake.jpg" alt="The Resident Pastor" fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
              </div>
              <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-gold-500/20 blur-3xl" />
            </div>
          </Reveal>
          <Reveal direction="left">
            <SectionHeading align="left" eyebrow="Biography" title={<>Called to <span className="text-gold-gradient">liberate</span> Southport</>} />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-cream/70">
              <p>Our Resident Pastor carries a deep passion for the presence of God and a burning desire to see lives transformed by the Word of Faith. A gifted teacher and devoted shepherd, they lead the Winners Chapel Southport family with wisdom, warmth and unwavering faith.</p>
              <p>Grounded in the mandate of Living Faith Church Worldwide, their ministry is marked by fervent prayer, practical teaching and a genuine love for people. Whether in the pulpit or over a cup of tea, their heart is that every person would discover their identity and destiny in Christ.</p>
              <p>Alongside a supportive family, they give themselves fully to the work of the ministry — believing God for a Southport where the miraculous is normal and no one is left behind.</p>
            </div>
            <p className="mt-6 font-display text-2xl text-gold-gradient">The Resident Pastor</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/prayer" icon="flame">Request Prayer</Button>
              <Button href="/contact" variant="outline" iconRight="arrow-right">Get in Touch</Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Personal welcome quote */}
      <Section tone="darker" className="grain">
        <Reveal>
          <figure className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800/70 to-navy-950 p-10 text-center ring-1 ring-gold-500/20 sm:p-16">
            <Icon name="quote" className="mx-auto h-12 w-12 text-gold-500/50" />
            <blockquote className="mt-4 font-display text-2xl font-medium leading-snug text-cream sm:text-3xl">
              &ldquo;I rejoiced with those who said to me, &lsquo;Let us go to the house of the LORD.&rsquo; You are welcome here — come as you are, and let God do the rest.&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm uppercase tracking-[0.25em] text-gold-400">Psalm 122:1 · A Personal Welcome</figcaption>
          </figure>
        </Reveal>
      </Section>

      {/* Family */}
      <Section tone="navy">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right" className="lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] ring-1 ring-gold-500/20">
              <Image src="/images/site/children.jpg" alt="A heart for families" fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal direction="left" className="lg:order-1">
            <SectionHeading align="left" eyebrow="Family" title={<>A heart for <span className="text-gold-gradient">families</span></>} subtitle="We believe strong homes build a strong church and a strong city." />
            <p className="mt-6 text-base leading-relaxed text-cream/70">Our pastor champions the family as God&apos;s first institution. From marriage enrichment to raising godly children, the ministry is committed to building homes that honour God and reflect His love — because when families win, everyone wins.</p>
            <Button href="/ministries" className="mt-8" variant="outline" iconRight="arrow-right">Explore Family Ministries</Button>
          </Reveal>
        </div>
      </Section>

      {/* Vision */}
      <Section tone="darker">
        <SectionHeading eyebrow="The Vision" title={<>What we&apos;re believing God <span className="text-gold-gradient">for</span></>} subtitle="Four pillars of the vision God has placed on our pastor's heart for Southport." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {vision.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <div className="card-lift flex h-full flex-col gap-4 rounded-3xl bg-navy-900/50 p-7 ring-1 ring-gold-500/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20"><Icon name={v.icon} className="h-6 w-6" /></span>
                <h3 className="font-display text-lg font-semibold text-cream">{v.title}</h3>
                <p className="text-sm leading-relaxed text-cream/55">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Books */}
      <Section tone="navy">
        <SectionHeading eyebrow="Books & Resources" title={<>Faith-building <span className="text-gold-gradient">resources</span></>} subtitle="Go deeper with messages and books to strengthen your walk." />
        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {books.map((b, i) => (
            <Reveal key={b.title} delay={(i % 4) * 0.06}>
              <div className="card-lift group overflow-hidden rounded-2xl bg-navy-900/50 ring-1 ring-gold-500/10">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={b.img} alt={b.title} fill sizes="(max-width:1024px) 50vw, 22vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-gold-500 px-2.5 py-1 text-[10px] font-bold uppercase text-navy-950">{b.tag}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-semibold text-cream">{b.title}</h3>
                  <button className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-gold-300 hover:text-gold-200">Get Book <Icon name="arrow-right" className="h-3.5 w-3.5" /></button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Messages */}
      <Section tone="darker">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading align="left" eyebrow="Recent Messages" title={<>Latest from the <span className="text-gold-gradient">pulpit</span></>} />
          <Button href="/media#sermons" variant="outline" iconRight="arrow-right" className="hidden shrink-0 sm:inline-flex">All Messages</Button>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sermons.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.06}>
              <a href="/media#sermons" className="card-lift group block overflow-hidden rounded-2xl bg-navy-900/50 ring-1 ring-gold-500/10">
                <div className="relative aspect-video overflow-hidden">
                  <Image src={s.img} alt={s.title} fill sizes="(max-width:1024px) 50vw, 22vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 flex items-center justify-center bg-navy-950/30">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/90 text-navy-950"><Icon name="play" className="ml-0.5 h-5 w-5" strokeWidth={2} /></span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-gold-400">{s.series}</p>
                  <h3 className="mt-1 font-display text-base font-semibold leading-snug text-cream">{s.title}</h3>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Speaking engagements */}
      <Section tone="navy">
        <SectionHeading eyebrow="On the Road" title={<>Upcoming <span className="text-gold-gradient">engagements</span></>} />
        <div className="mt-14 space-y-4">
          {engagements.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.06}>
              <div className="card-lift flex flex-col gap-4 rounded-2xl bg-navy-900/50 p-6 ring-1 ring-gold-500/10 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-5">
                  <span className="flex h-16 w-20 shrink-0 flex-col items-center justify-center rounded-xl bg-gold-500/10 text-center ring-1 ring-gold-500/20">
                    <span className="font-display text-sm font-bold text-gold-300">{e.date}</span>
                  </span>
                  <div>
                    <span className="rounded-full bg-navy-800/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold-300">{e.type}</span>
                    <h3 className="mt-1.5 font-display text-lg font-semibold text-cream">{e.title}</h3>
                    <p className="flex items-center gap-1.5 text-sm text-cream/55"><Icon name="map-pin" className="h-4 w-4 text-gold-400" />{e.place}</p>
                  </div>
                </div>
                <Button href="/events" variant="outline" size="sm" iconRight="arrow-right">Details</Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section tone="darker">
        <Reveal>
          <div className="glass flex flex-col items-center gap-6 rounded-3xl p-10 text-center sm:p-16">
            <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">Let&apos;s <span className="text-gold-gradient">connect</span></h2>
            <p className="max-w-xl text-cream/60">Our pastor would love to meet you. Come this Sunday, or reach out for prayer and a personal welcome.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/first-timers" size="lg" icon="hand">Plan Your Visit</Button>
              <Button href="/prayer" size="lg" variant="outline" icon="flame">Request Prayer</Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
