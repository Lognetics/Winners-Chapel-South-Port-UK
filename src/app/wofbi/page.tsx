import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { CountUp } from "@/components/ui/CountUp";
import { Accordion } from "@/components/ui/Accordion";
import { RegisterForm } from "@/components/wofbi/RegisterForm";
import { wofbiCourses } from "@/lib/site";

export const metadata: Metadata = {
  title: "WOFBI",
  description:
    "The Word of Faith Bible Institute (WOFBI) at Winners Chapel Southport — training and equipping believers in the Word of Faith through the BCC, LCC and LDC courses.",
};

const introStats = [
  { to: 2400, suffix: "+", label: "Graduates Trained" },
  { to: 180, suffix: "", label: "Current Students" },
  { to: 3, suffix: "", label: "Accredited Courses" },
  { to: 12, suffix: "", label: "Years Running" },
];

const outlines: Record<string, string[]> = {
  BCC: [
    "Understanding Salvation & the New Creation",
    "The Believer's Covenant Rights",
    "Foundations of Faith & Confession",
    "The Ministry of the Holy Spirit",
    "Prayer & the Word",
    "Water Baptism & the Lord's Table",
  ],
  LCC: [
    "The Call & Character of a Leader",
    "Servant Leadership in the Kingdom",
    "Personal Discipline & Devotion",
    "Soul-Winning & Discipleship",
    "Church Order & Ministry Ethics",
    "Building & Leading Teams",
  ],
  LDC: [
    "Advanced Doctrine & Theology",
    "The Liberation Mandate in Depth",
    "Homiletics — Preaching the Word",
    "Church Administration & Governance",
    "Pastoral Care & Counselling",
    "Vision, Strategy & Ministry Growth",
  ],
};

const faculty = [
  { name: "The Resident Pastor", subject: "Doctrine & The Mandate" },
  { name: "Pastor (Mrs) Grace O.", subject: "Foundations of Faith" },
  { name: "Rev. Emmanuel A.", subject: "Leadership & Homiletics" },
  { name: "Dr. Sarah B.", subject: "Pastoral Care & Counselling" },
];

const upcomingClasses = [
  { date: "Mon · 7 Jul", title: "BCC — Covenant Rights", time: "7:00 PM" },
  { date: "Wed · 9 Jul", title: "LCC — Servant Leadership", time: "7:00 PM" },
  { date: "Sat · 12 Jul", title: "LDC — Homiletics Intensive", time: "10:00 AM" },
  { date: "Mon · 14 Jul", title: "BCC — The Holy Spirit", time: "7:00 PM" },
];

const iconCards = [
  {
    icon: "circle-dollar",
    title: "Online Payment",
    desc: "Pay course fees securely online or in person. Flexible instalments available.",
  },
  {
    icon: "graduation-cap",
    title: "Certificates",
    desc: "Earn recognised certificates on completion of each level of training.",
  },
  {
    icon: "download",
    title: "Course Materials",
    desc: "Download workbooks, lecture notes and study guides for every module.",
  },
];

const faqs = [
  {
    q: "Do I need any prior Bible training to join?",
    a: "Not at all. The Basic Certificate Course (BCC) is designed for everyone — from brand new believers to those wanting a firm foundation in the Word. Each level builds on the last.",
  },
  {
    q: "How much does WOFBI cost?",
    a: "WOFBI is offered at a modest fee to cover materials and administration, with scholarships available for those in need. Contact the coordinator for the current fee schedule.",
  },
  {
    q: "Can I study online?",
    a: "Yes. Every course can be taken on campus in Southport or fully online, with live and recorded sessions so you can learn at a pace that suits you.",
  },
  {
    q: "How long does each course take?",
    a: "The BCC and LCC each run for 10 weeks, while the LDC runs for 12 weeks. Classes are typically held weekly in the evenings or on Saturdays.",
  },
  {
    q: "What happens after I graduate?",
    a: "Graduates are equipped to grow in their walk, serve confidently in ministry and progress to the next level of training, all the way to the Leadership Diploma Course.",
  },
  {
    q: "When can I start?",
    a: "New cohorts begin regularly throughout the year. Register your interest today and we will contact you with the next available start date.",
  },
];

const levelTone: Record<string, string> = {
  Foundation: "text-emerald-300",
  Intermediate: "text-gold-300",
  Advanced: "text-rose-300",
};

export default function WofbiPage() {
  return (
    <>
      <PageHero
        eyebrow="Word of Faith Bible Institute"
        title={
          <>
            Be rooted &amp; built up in{" "}
            <span className="text-gold-gradient">the Word</span>
          </>
        }
        subtitle="WOFBI trains and equips believers in the Word of Faith — grounding you in your covenant, raising you as a leader and releasing you into your Kingdom mandate."
        image="/images/site/welcome-handshake.jpg"
      >
        <div className="flex flex-wrap gap-4">
          <Button href="#register" icon="pen-line">
            Register Now
          </Button>
          <Button href="#courses" variant="outline" iconRight="arrow-right">
            View Courses
          </Button>
        </div>
      </PageHero>

      {/* INTRO + STATS */}
      <Section tone="navy">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="What Is WOFBI"
                title={
                  <>
                    A school for every{" "}
                    <span className="text-gold-gradient">believer</span>
                  </>
                }
              />
              <div className="mt-6 space-y-4 text-cream/70">
                <p className="leading-relaxed">
                  The Word of Faith Bible Institute is the discipleship and
                  leadership training arm of Winners Chapel International. Founded
                  on the vision of Bishop David O. Oyedepo, WOFBI exists to
                  liberate people through the accurate knowledge of the Word.
                </p>
                <p className="leading-relaxed">
                  Through three progressive courses — the Basic Certificate
                  Course, the Leadership Certificate Course and the Leadership
                  Diploma Course — you will be grounded in doctrine, developed in
                  character and released into meaningful service.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="#courses">Explore the Courses</Button>
                <Button href="#faculty" variant="outline">
                  Meet the Faculty
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-5">
            {introStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="glass rounded-3xl p-8 text-center ring-1 ring-gold-500/10">
                  <p className="font-display text-4xl font-bold text-gold-300 sm:text-5xl">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-cream/60">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* COURSES */}
      <Section id="courses" tone="darker">
        <SectionHeading
          eyebrow="The Curriculum"
          title={
            <>
              Three levels, one <span className="text-gold-gradient">journey</span>
            </>
          }
          subtitle="Progress from foundation to leadership diploma, one Spirit-filled step at a time."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {wofbiCourses.map((c, i) => (
            <Reveal key={c.code} delay={i * 0.1}>
              <article className="card-lift group flex h-full flex-col rounded-3xl bg-gradient-to-b from-navy-900/60 to-navy-950 p-8 ring-1 ring-gold-500/10">
                <div className="flex items-center justify-between">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-500/10 font-display text-xl font-bold text-gold-300 ring-1 ring-gold-500/25">
                    {c.code}
                  </span>
                  <span
                    className={`rounded-full bg-navy-900/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider ring-1 ring-gold-500/15 ${
                      levelTone[c.level] ?? "text-gold-300"
                    }`}
                  >
                    {c.level}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-cream">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">
                  {c.desc}
                </p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm text-gold-400">
                  <Icon name="clock" className="h-4 w-4" /> {c.weeks}
                </p>

                <div className="mt-6 border-t border-gold-500/10 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cream/45">
                    Sample outline
                  </p>
                  <ul className="mt-3 space-y-2">
                    {outlines[c.code].map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-2.5 text-sm text-cream/70"
                      >
                        <Icon
                          name="check"
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold-400"
                          strokeWidth={2.5}
                        />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button href="#register" size="sm" className="w-full">
                    Register
                  </Button>
                  <Button
                    href="#downloads"
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    Course Outline
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* REGISTER + PORTAL/CLASSES */}
      <Section id="register" tone="navy">
        <SectionHeading
          align="left"
          eyebrow="Enrol Today"
          title={
            <>
              Begin your <span className="text-gold-gradient">training</span>
            </>
          }
          subtitle="Register in minutes. Study on campus in Southport or fully online."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <RegisterForm />

          <div className="grid gap-6">
            <Reveal>
              <div className="rounded-3xl bg-gradient-to-b from-navy-900/60 to-navy-950 p-8 ring-1 ring-gold-500/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20">
                  <Icon name="user-check" className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-cream">
                  Student Portal
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">
                  Access your classes, materials, assignments and results in one
                  place. The portal is coming soon for enrolled students.
                </p>
                <div className="mt-5">
                  <Button href="#" variant="outline" size="sm" iconRight="arrow-right">
                    Student Login
                  </Button>
                  <p className="mt-3 text-xs text-cream/40">
                    Portal launching soon — you&apos;ll receive login details
                    after enrolment.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-navy-900/50 p-8 ring-1 ring-gold-500/10">
                <h3 className="font-display text-xl font-semibold text-cream">
                  Upcoming Classes
                </h3>
                <div className="mt-5 divide-y divide-gold-500/10">
                  {upcomingClasses.map((c) => (
                    <div
                      key={c.title}
                      className="flex items-center gap-4 py-3.5"
                    >
                      <span className="w-16 shrink-0 text-xs font-semibold uppercase tracking-wider text-gold-400">
                        {c.date}
                      </span>
                      <span className="min-w-0 flex-1 truncate text-sm text-cream/80">
                        {c.title}
                      </span>
                      <span className="shrink-0 text-xs text-cream/50">
                        {c.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ICON CARDS */}
      <Section id="downloads" tone="darker">
        <SectionHeading
          eyebrow="Everything You Need"
          title={
            <>
              Learning made <span className="text-gold-gradient">simple</span>
            </>
          }
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {iconCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="card-lift group flex h-full flex-col rounded-3xl bg-navy-900/50 p-8 ring-1 ring-gold-500/10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20 transition group-hover:bg-gold-500/20">
                  <Icon name={c.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-cream">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SCHOLARSHIPS */}
      <Section tone="navy">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-[#04091a] p-10 ring-1 ring-gold-500/15 sm:p-14">
            <div className="absolute inset-0 hero-glow" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                  <span className="h-px w-6 bg-gold-500/60" /> Scholarships
                </span>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl">
                  Cost should never keep you from{" "}
                  <span className="text-gold-gradient">the Word</span>
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-cream/70">
                  We offer full and partial scholarships for students facing
                  genuine financial hardship. If a fee stands between you and
                  your training, apply — we would love to help you take your seat
                  in the classroom of the Word.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button href="/contact" icon="hand-heart" className="w-full">
                  Apply for a Scholarship
                </Button>
                <Button href="/contact" variant="outline" className="w-full">
                  Ask a Question
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* FACULTY */}
      <Section id="faculty" tone="darker">
        <SectionHeading
          eyebrow="Our Faculty"
          title={
            <>
              Taught by devoted <span className="text-gold-gradient">servants</span>
            </>
          }
          subtitle="Seasoned ministers and teachers committed to your growth in the faith."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.07}>
              <article className="card-lift group overflow-hidden rounded-3xl bg-navy-900/50 ring-1 ring-gold-500/10">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/site/welcome-handshake.jpg"
                    alt={f.name}
                    fill
                    sizes="(max-width:640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-cream">
                    {f.name}
                  </h3>
                  <p className="mt-1 text-sm text-gold-400">{f.subject}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* GRADUATION GALLERY */}
      <Section tone="navy">
        <SectionHeading
          align="left"
          eyebrow="Graduation"
          title={
            <>
              Celebrating our <span className="text-gold-gradient">graduates</span>
            </>
          }
          subtitle="Every graduation marks a life transformed and a leader released."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            "/images/site/children.jpg",
            "/images/site/welcome-handshake.jpg",
            "/images/site/outreach.jpg",
            "/images/site/sermon-audio.jpg",
          ].map((src, i) => (
            <Reveal key={src + i} delay={i * 0.06}>
              <figure
                className={`group relative overflow-hidden rounded-2xl ring-1 ring-gold-500/10 ${
                  i === 0 ? "col-span-2 aspect-[16/9] md:col-span-2" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={src}
                  alt="WOFBI graduation"
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

      {/* FAQ */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <Reveal>
            <SectionHeading
              light
              align="left"
              eyebrow="Questions"
              title={
                <>
                  Frequently <span className="text-gold-gradient">asked</span>
                </>
              }
              subtitle="Everything you need to know before you enrol. Still unsure? We're one message away."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion items={faqs} light />
          </Reveal>
        </div>
      </Section>

      {/* CLOSING CTA */}
      <section className="relative overflow-hidden bg-navy-950 grain">
        <div className="absolute inset-0 hero-glow" />
        <div className="container-x relative z-10 py-24 text-center sm:py-32">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              <span className="h-px w-6 bg-gold-500/60" /> Your Journey Begins
            </span>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight text-cream sm:text-5xl">
              Enrol in the classroom of{" "}
              <span className="text-gold-gradient">the Word</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-cream/65">
              Study to show yourself approved. Register for WOFBI today and take
              your next step in faith, character and leadership.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href="#register" icon="pen-line">
                Register Now
              </Button>
              <Button href="/contact" variant="outline" iconRight="arrow-right">
                Talk to a Coordinator
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
