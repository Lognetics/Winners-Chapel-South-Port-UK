import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { CountUp } from "@/components/ui/CountUp";
import { VolunteerForm } from "@/components/csr/VolunteerForm";
import { csrPrograms } from "@/lib/site";

export const metadata: Metadata = {
  title: "Community Impact",
  description:
    "The Corporate Social Responsibility of Winners Chapel International, Southport — food banks, homeless support, employment training and community projects transforming lives across Southport.",
};

const dashboard = [
  { to: 5400, suffix: "+", label: "Families Served", icon: "heart-handshake" },
  { to: 9800, suffix: "+", label: "Food Bank Beneficiaries", icon: "shopping-basket" },
  { to: 320, suffix: "", label: "Active Volunteers", icon: "users" },
  { to: 24, suffix: "", label: "Community Projects", icon: "sparkles" },
];

const spotlights = [
  {
    title: "The Southport Food Bank",
    img: "/images/site/outreach.jpg",
    desc: "Every week our doors open to families facing food insecurity — no questions, no judgement, just dignity and care.",
    points: [
      "Fresh groceries and store-cupboard essentials",
      "Baby formula, nappies and children's items",
      "Warm meals and hot drinks on collection days",
      "Signposting to further support and prayer",
    ],
    reverse: false,
  },
  {
    title: "Homeless Support",
    img: "/images/site/welcome-handshake.jpg",
    desc: "We take the love of Christ to the streets — offering warmth, food and friendship to Southport's most vulnerable.",
    points: [
      "Weekly hot meal and clothing distribution",
      "Winter warm packs, sleeping bags and toiletries",
      "A listening ear and pathways off the streets",
      "Partnership with local shelters and services",
    ],
    reverse: true,
  },
  {
    title: "Employment Training",
    img: "/images/site/children.jpg",
    desc: "From CV clinics to interview coaching, we equip job seekers with the confidence and skills to thrive in the workplace.",
    points: [
      "Free CV writing and review clinics",
      "Mock interviews and coaching sessions",
      "Digital and workplace skills workshops",
      "Encouragement, mentoring and prayer",
    ],
    reverse: false,
  },
  {
    title: "Education & School Support",
    img: "/images/site/sermon-audio.jpg",
    desc: "We invest in the next generation — supplying uniforms, supplies and mentoring so no child is left behind.",
    points: [
      "School uniforms and learning supplies",
      "Homework clubs and reading support",
      "Mentoring for local pupils",
      "Partnerships with Southport schools",
    ],
    reverse: true,
  },
];

const stories = [
  {
    name: "Blessing E.",
    program: "Employment Training",
    story:
      "I secured my dream job after the employment clinic and prayers. Doors opened supernaturally after months of searching.",
    icon: "briefcase",
  },
  {
    name: "The Johnsons",
    program: "Food Bank",
    story:
      "When we arrived in a new country with nothing, the food bank fed us and this church became our family. We found love and belonging.",
    icon: "shopping-basket",
  },
  {
    name: "Samuel O.",
    program: "Skills Development",
    story:
      "From redundancy to running my own business within a year. The skills workshops and encouragement changed the trajectory of my life.",
    icon: "wrench",
  },
];

const reports = [
  { title: "Community Impact Report 2025", size: "PDF · 4.2 MB" },
  { title: "Community Impact Report 2024", size: "PDF · 3.8 MB" },
  { title: "Food Bank Annual Summary 2025", size: "PDF · 1.6 MB" },
];

const partners = [
  "Sefton Council",
  "Southport Food Charities",
  "Local Primary Schools",
  "NHS Community Services",
  "Trussell Trust Network",
  "Southport Shelters",
];

export default function CsrPage() {
  return (
    <>
      <PageHero
        eyebrow="Community Impact"
        title={
          <>
            Loving Southport, one life at{" "}
            <span className="text-gold-gradient">a time</span>
          </>
        }
        subtitle="Faith without works is dead. Our Corporate Social Responsibility takes the love of Christ beyond our walls — feeding families, supporting the vulnerable and building a stronger community."
        image="/images/site/outreach.jpg"
      >
        <div className="flex flex-wrap gap-4">
          <Button href="#volunteer" icon="hand-heart">
            Volunteer With Us
          </Button>
          <Button href="/giving" variant="outline" iconRight="arrow-right">
            Support the Work
          </Button>
        </div>
      </PageHero>

      {/* IMPACT DASHBOARD */}
      <section className="relative overflow-hidden bg-[#04091a] grain">
        <div className="absolute inset-0 hero-glow" />
        <div className="container-x relative z-10 py-20 sm:py-24">
          <Reveal>
            <div className="text-center">
              <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                <span className="h-px w-6 bg-gold-500/60" /> Our Impact
              </span>
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl">
                Real numbers. <span className="text-gold-gradient">Real lives.</span>
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {dashboard.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.08}>
                <div className="glass rounded-3xl p-8 text-center ring-1 ring-gold-500/10">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20">
                    <Icon name={d.icon} className="h-7 w-7" />
                  </span>
                  <p className="mt-5 font-display text-4xl font-bold text-gold-300 sm:text-5xl">
                    <CountUp to={d.to} suffix={d.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-cream/60">{d.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <Section tone="navy">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Our community <span className="text-gold-gradient">programmes</span>
            </>
          }
          subtitle="Practical, sustained initiatives meeting real needs across Southport and beyond."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {csrPrograms.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <article className="card-lift group flex h-full flex-col rounded-3xl bg-gradient-to-b from-navy-900/60 to-navy-950 p-8 ring-1 ring-gold-500/10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20 transition group-hover:bg-gold-500/20">
                  <Icon name={p.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-cream">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/60">
                  {p.desc}
                </p>
                <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold-500/10 px-3 py-1.5 text-xs font-semibold text-gold-300 ring-1 ring-gold-500/20">
                  <Icon name="sparkles" className="h-3.5 w-3.5" /> {p.stat}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SPOTLIGHTS */}
      <Section tone="darker">
        <SectionHeading
          eyebrow="In Focus"
          title={
            <>
              Programmes making a <span className="text-gold-gradient">difference</span>
            </>
          }
        />
        <div className="mt-14 space-y-16 sm:space-y-24">
          {spotlights.map((s) => (
            <div
              key={s.title}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <Reveal
                direction={s.reverse ? "left" : "right"}
                className={s.reverse ? "lg:order-2" : ""}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-gold-500/15">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width:1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                </div>
              </Reveal>
              <Reveal
                direction={s.reverse ? "right" : "left"}
                delay={0.1}
                className={s.reverse ? "lg:order-1" : ""}
              >
                <div>
                  <h3 className="font-display text-2xl font-semibold text-cream sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-cream/70">{s.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {s.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-3 text-sm text-cream/75"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-300">
                          <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.5} />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </Section>

      {/* VOLUNTEER */}
      <Section id="volunteer" tone="navy">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Give Your Time"
                title={
                  <>
                    Why <span className="text-gold-gradient">volunteer?</span>
                  </>
                }
                subtitle="Because changed communities begin with changed hearts willing to serve."
              />
              <div className="mt-8 space-y-5">
                {[
                  {
                    icon: "heart",
                    title: "Make a tangible difference",
                    desc: "See the fruit of your service in the faces of families you help every week.",
                  },
                  {
                    icon: "users",
                    title: "Belong to a family",
                    desc: "Serve alongside a warm, welcoming team that becomes lifelong friends.",
                  },
                  {
                    icon: "trending-up",
                    title: "Grow your gifts",
                    desc: "Develop new skills, confidence and experience while doing good.",
                  },
                ].map((b) => (
                  <div key={b.title} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20">
                      <Icon name={b.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-cream">
                        {b.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-cream/60">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <VolunteerForm />
        </div>
      </Section>

      {/* DONATE BAND */}
      <Section tone="darker">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gold-500/15 via-navy-900 to-[#04091a] p-10 ring-1 ring-gold-500/20 sm:p-14">
            <div className="absolute inset-0 hero-glow" />
            <div className="relative z-10 flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
              <div>
                <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                  <span className="h-px w-6 bg-gold-500/60" /> Fuel The Mission
                </span>
                <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl">
                  Your giving puts food on tables and{" "}
                  <span className="text-gold-gradient">hope in hearts</span>
                </h2>
                <p className="mt-4 max-w-xl text-cream/70">
                  Every gift, large or small, extends our reach into the
                  community. Partner with us to keep the doors of compassion open.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Button href="/giving" icon="gift">
                  Give to CSR
                </Button>
                <Button href="#volunteer" variant="outline">
                  Volunteer Instead
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* IMPACT STORIES */}
      <Section tone="navy">
        <SectionHeading
          eyebrow="Impact Stories"
          title={
            <>
              Lives <span className="text-gold-gradient">transformed</span>
            </>
          }
          subtitle="Behind every statistic is a person, a family and a story of renewed hope."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <article className="card-lift group flex h-full flex-col rounded-3xl bg-gradient-to-b from-navy-900/60 to-navy-950 p-8 ring-1 ring-gold-500/10">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-navy-900/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-300 ring-1 ring-gold-500/15">
                    {s.program}
                  </span>
                </div>
                <Icon name="quote" className="mt-6 h-7 w-7 text-gold-500/40" />
                <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/75">
                  {s.story}
                </p>
                <p className="mt-6 border-t border-gold-500/10 pt-4 font-display text-base font-semibold text-cream">
                  {s.name}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CSR GALLERY */}
      <Section tone="darker">
        <SectionHeading
          align="left"
          eyebrow="On The Ground"
          title={
            <>
              Compassion in <span className="text-gold-gradient">action</span>
            </>
          }
        />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            "/images/site/outreach.jpg",
            "/images/site/welcome-handshake.jpg",
            "/images/site/children.jpg",
            "/images/site/sermon-audio.jpg",
          ].map((src, i) => (
            <Reveal key={src + i} delay={i * 0.06}>
              <figure
                className={`group relative overflow-hidden rounded-2xl ring-1 ring-gold-500/10 ${
                  i === 1 ? "col-span-2 aspect-[16/9] md:col-span-2" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={src}
                  alt="Community outreach"
                  fill
                  sizes="(max-width:768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* REPORTS + PARTNERS */}
      <Section tone="navy">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Accountability"
                title={
                  <>
                    Impact <span className="text-gold-gradient">reports</span>
                  </>
                }
                subtitle="We steward every resource with transparency. Read the full story of our year."
              />
              <div className="mt-8 grid gap-4">
                {reports.map((r) => (
                  <div
                    key={r.title}
                    className="group flex items-center gap-4 rounded-2xl bg-navy-900/50 p-5 ring-1 ring-gold-500/10 transition hover:ring-gold-400/30"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20 transition group-hover:bg-gold-500 group-hover:text-navy-950">
                      <Icon name="download" className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-display text-base font-medium text-cream">
                        {r.title}
                      </h4>
                      <p className="text-xs text-cream/45">{r.size}</p>
                    </div>
                    <Icon
                      name="arrow-right"
                      className="h-5 w-5 shrink-0 text-cream/40 transition group-hover:translate-x-1 group-hover:text-gold-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Better Together"
                title={
                  <>
                    Our <span className="text-gold-gradient">partners</span>
                  </>
                }
                subtitle="We work hand in hand with councils, charities and schools for greater, lasting impact."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                {partners.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center gap-2 rounded-full bg-navy-900/50 px-5 py-3 text-sm font-medium text-cream/75 ring-1 ring-gold-500/15"
                  >
                    <Icon name="handshake" className="h-4 w-4 text-gold-400" />
                    {p}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="outline" iconRight="arrow-right">
                  Partner With Us
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CLOSING CTA */}
      <section className="relative overflow-hidden bg-navy-950 grain">
        <div className="absolute inset-0 hero-glow" />
        <div className="container-x relative z-10 py-24 text-center sm:py-32">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              <span className="h-px w-6 bg-gold-500/60" /> Be The Difference
            </span>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight text-cream sm:text-5xl">
              Join us in loving{" "}
              <span className="text-gold-gradient">Southport</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-cream/65">
              Whether you give your time, your gifts or your prayers, you can be
              part of a story of transformation in our community.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href="#volunteer" icon="hand-heart">
                Volunteer Today
              </Button>
              <Button href="/giving" variant="outline" iconRight="arrow-right">
                Give to the Work
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
