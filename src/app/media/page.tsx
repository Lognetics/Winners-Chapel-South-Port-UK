import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { SermonGrid } from "@/components/media/SermonGrid";
import { Gallery } from "@/components/media/Gallery";
import { TestimonyForm } from "@/components/media/TestimonyForm";
import { site, testimonies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Media Centre",
  description:
    "Watch live, stream sermons, listen to podcasts and be encouraged by daily devotionals and testimonies from Winners Chapel International, Southport.",
};

const liveTeasers = [
  {
    icon: "tv",
    title: "Live TV",
    desc: "Watch every service in high definition, wherever you are.",
    cta: "Open Live TV",
  },
  {
    icon: "radio",
    title: "Live Radio",
    desc: "Audio streaming of the Word and worship around the clock.",
    cta: "Tune In",
  },
  {
    icon: "message-square",
    title: "Live Chat",
    desc: "Join the conversation and receive prayer during the service.",
    cta: "Join Chat",
  },
];

const platforms: {
  label: string;
  handle: string;
  href: string;
  desc: string;
  brand?: string;
  icon?: string;
}[] = [
  {
    label: "YouTube",
    handle: "@WCISouthport",
    brand: "youtube",
    href: site.socials.youtube,
    desc: "Full services, highlights and testimonies.",
  },
  {
    label: "Spotify",
    handle: "Winners Southport",
    icon: "music",
    href: "#",
    desc: "Sermons and worship on the go.",
  },
  {
    label: "Apple Podcasts",
    handle: "Winners Southport",
    icon: "headphones",
    href: "#",
    desc: "Subscribe and never miss a message.",
  },
];

const devotionals = [
  {
    title: "The Anchor That Holds",
    verse: "Hebrews 6:19",
    teaser:
      "Hope is not wishful thinking — it is the confident expectation of good rooted in the covenant.",
    date: "Fri · 4 Jul",
  },
  {
    title: "Faith Speaks",
    verse: "2 Corinthians 4:13",
    teaser:
      "What you keep saying is what you keep seeing. Align your confession with the promise.",
    date: "Thu · 3 Jul",
  },
  {
    title: "Rest in the Blessing",
    verse: "Proverbs 10:22",
    teaser:
      "The blessing of the Lord makes rich, and adds no sorrow. Labour from rest, not for it.",
    date: "Wed · 2 Jul",
  },
  {
    title: "Ordered Steps",
    verse: "Psalm 37:23",
    teaser:
      "A good man's steps are ordered by the Lord. Trust the path even when you cannot see it.",
    date: "Tue · 1 Jul",
  },
];

const podcast = [
  { ep: "EP 42", title: "Living From Victory, Not For It", duration: "38:20", date: "Jun 2026" },
  { ep: "EP 41", title: "The Covenant of Increase Explained", duration: "44:05", date: "Jun 2026" },
  { ep: "EP 40", title: "Prayer That Provokes Heaven", duration: "35:12", date: "May 2026" },
  { ep: "EP 39", title: "Raising Kingdom Families", duration: "41:48", date: "May 2026" },
  { ep: "EP 38", title: "Faith For Your Finances", duration: "39:33", date: "Apr 2026" },
];

const downloads = [
  { title: "The Blessing That Makes Rich — Sermon Notes", size: "PDF · 1.2 MB" },
  { title: "Faith That Moves Mountains — Study Guide", size: "PDF · 0.9 MB" },
  { title: "40 Days of Prayer & Fasting Guide", size: "PDF · 2.4 MB" },
  { title: "New Believer's Foundation Pack", size: "PDF · 3.1 MB" },
];

const typeBadge: Record<string, string> = {
  video: "video",
  audio: "headphones",
  written: "quote",
};

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media Centre"
        title={
          <>
            Encounter the Word, <span className="text-gold-gradient">anywhere</span>
          </>
        }
        subtitle="Watch live, stream life-changing messages, listen to the podcast and be encouraged by daily devotionals and testimonies of God's faithfulness."
        image="/images/site/sermon-audio.jpg"
      >
        <div className="flex flex-wrap gap-4">
          <Button href="#live" icon="play">
            Watch Live
          </Button>
          <Button href="#sermons" variant="outline" iconRight="arrow-right">
            Browse Sermons
          </Button>
        </div>
      </PageHero>

      {/* LIVE */}
      <Section id="live" tone="navy">
        <SectionHeading
          align="left"
          eyebrow="Now Streaming"
          title={
            <>
              Watch <span className="text-gold-gradient">live</span>
            </>
          }
          subtitle="Join the family in worship in real time — from your living room to ours."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.7fr_1fr]">
          <Reveal>
            <div className="group relative aspect-video overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-950 to-[#04091a] ring-1 ring-gold-500/15">
              <Image
                src="/images/site/welcome-handshake.jpg"
                alt=""
                fill
                sizes="(max-width:1024px) 100vw, 60vw"
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 hero-glow" />
              <span className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-red-600 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                Live
              </span>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <button
                  aria-label="Play live stream"
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-500/90 text-navy-950 shadow-2xl transition-transform duration-300 group-hover:scale-110"
                >
                  <Icon name="play" className="ml-1 h-9 w-9" strokeWidth={2} />
                </button>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950 to-transparent p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                  Sunday Second Service
                </p>
                <h3 className="mt-1 font-display text-2xl font-semibold text-cream">
                  The Winning Life — Communion &amp; Word
                </h3>
                <p className="mt-1 text-sm text-cream/60">
                  {site.address.venue}, Southport · 10:30 AM
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {liveTeasers.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.08}>
                <div className="card-light group flex h-full items-start gap-4 rounded-2xl p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25 transition group-hover:bg-gold-500/25">
                    <Icon name={t.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-navy-900">
                      {t.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-navy-600/80">
                      {t.desc}
                    </p>
                    <button className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gold-700 transition hover:text-gold-600">
                      {t.cta}
                      <Icon name="arrow-right" className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* SERMONS */}
      <Section id="sermons" tone="darker">
        <SectionHeading
          align="left"
          eyebrow="Messages"
          title={
            <>
              Featured <span className="text-gold-gradient">sermons</span>
            </>
          }
          subtitle="Filter, watch, download the audio and take the notes with you. Be transformed by the renewing of your mind."
        />
        <SermonGrid />
      </Section>

      {/* PLATFORMS */}
      <Section tone="navy">
        <SectionHeading
          eyebrow="Follow & Subscribe"
          title={
            <>
              Take the Word <span className="text-gold-gradient">with you</span>
            </>
          }
          subtitle="Subscribe on your favourite platform and let faith come by hearing, wherever you are."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {platforms.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.08}>
              <a
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card-light group flex h-full flex-col rounded-3xl p-8"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25 transition group-hover:bg-gold-500/25">
                  {p.brand ? (
                    <BrandIcon name={p.brand} className="h-7 w-7" />
                  ) : (
                    <Icon name={p.icon as string} className="h-7 w-7" />
                  )}
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-navy-900">
                  {p.label}
                </h3>
                <p className="mt-1 text-sm text-gold-600">{p.handle}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600/80">
                  {p.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold-700">
                  Subscribe
                  <Icon
                    name="arrow-up-right"
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* DEVOTIONALS */}
      <Section id="devotionals" tone="darker">
        <SectionHeading
          align="left"
          eyebrow="Daily Manna"
          title={
            <>
              Daily <span className="text-gold-gradient">devotionals</span>
            </>
          }
          subtitle="A fresh word of faith to strengthen your walk every single day."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {devotionals.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.06}>
              <article className="card-light group flex h-full flex-col rounded-3xl p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25">
                    <Icon name="book-open" className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-navy-600/80">
                    {d.date}
                  </span>
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-gold-600">
                  {d.verse}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-navy-900">
                  {d.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600/80">
                  {d.teaser}
                </p>
                <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold-700 transition hover:text-gold-600">
                  Read devotional
                  <Icon name="arrow-right" className="h-4 w-4" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PODCAST */}
      <Section tone="navy">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Listen"
                title={
                  <>
                    The Winners <span className="text-gold-gradient">Podcast</span>
                  </>
                }
                subtitle="Bite-sized faith on your commute, at the gym or over coffee. New episodes every week."
              />
              <div className="mt-8 flex flex-wrap gap-4">
                <Button icon="headphones">Listen Now</Button>
                <Button variant="outline" iconRight="arrow-right">
                  All Episodes
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="divide-y divide-navy-900/10 overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-navy-900/10">
            {podcast.map((e) => (
              <div
                key={e.ep}
                className="group flex items-center gap-4 px-6 py-5 transition hover:bg-gold-500/[0.06]"
              >
                <button
                  aria-label={`Play ${e.title}`}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25 transition group-hover:bg-gold-500 group-hover:text-navy-950"
                >
                  <Icon name="play" className="ml-0.5 h-5 w-5" strokeWidth={2} />
                </button>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                    {e.ep} · {e.date}
                  </p>
                  <h4 className="truncate font-display text-base font-medium text-navy-900">
                    {e.title}
                  </h4>
                </div>
                <span className="shrink-0 text-sm text-navy-600/80">{e.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* GALLERY */}
      <Section id="gallery" tone="darker">
        <SectionHeading
          align="left"
          eyebrow="Moments"
          title={
            <>
              Life at <span className="text-gold-gradient">Winners</span>
            </>
          }
          subtitle="A glimpse into worship, community and family across the seasons of our house."
        />
        <Gallery />
      </Section>

      {/* TESTIMONIES */}
      <Section id="testimonies" tone="navy">
        <SectionHeading
          eyebrow="Testimonies"
          title={
            <>
              Stories of <span className="text-gold-gradient">His faithfulness</span>
            </>
          }
          subtitle="Real people. Real encounters. What God has done for others, He will do for you."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonies.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08}>
              <article className="card-light group flex h-full flex-col rounded-3xl p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25">
                    <Icon name={typeBadge[t.type]} className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-navy-900/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-700 ring-1 ring-navy-900/10">
                    {t.type}
                  </span>
                </div>
                <Icon name="quote" className="mt-6 h-7 w-7 text-gold-500/50" />
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-800">
                  {t.quote}
                </p>
                <div className="mt-6 border-t border-navy-900/10 pt-4">
                  <p className="font-display text-base font-semibold text-navy-900">
                    {t.name}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-gold-600">
                    {t.category}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <TestimonyForm />
        </div>
      </Section>

      {/* DOWNLOADS */}
      <Section tone="darker">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Resources"
              title={
                <>
                  Downloads &amp; <span className="text-gold-gradient">sermon notes</span>
                </>
              }
              subtitle="Grow deeper with study guides, sermon notes and faith-building resources — free to download."
            />
          </Reveal>
          <div className="grid gap-4">
            {downloads.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.06}>
                <div className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-navy-900/10 transition hover:ring-gold-500/40">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25 transition group-hover:bg-gold-500 group-hover:text-navy-950">
                    <Icon name="download" className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-display text-base font-medium text-navy-900">
                      {d.title}
                    </h4>
                    <p className="text-xs text-navy-600/80">{d.size}</p>
                  </div>
                  <Icon
                    name="arrow-right"
                    className="h-5 w-5 shrink-0 text-navy-600/80 transition group-hover:translate-x-1 group-hover:text-gold-700"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* CLOSING CTA */}
      <section className="relative overflow-hidden bg-navy-950 grain">
        <div className="absolute inset-0 hero-glow" />
        <div className="container-x relative z-10 py-24 text-center sm:py-32">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
              <span className="h-px w-6 bg-gold-500/60" /> Never Miss A Moment
            </span>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight text-cream sm:text-5xl">
              Join us this Sunday —{" "}
              <span className="text-gold-gradient">in person or online</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-cream/65">
              Whether you gather with us at {site.address.venue} or stream from
              home, there is a seat and a blessing with your name on it.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href="#live" variant="gold" icon="play">
                Watch Live
              </Button>
              <Button href="/first-timers" variant="outlineLight" iconRight="arrow-right">
                Plan Your Visit
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
