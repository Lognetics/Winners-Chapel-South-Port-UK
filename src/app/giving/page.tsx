import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Accordion } from "@/components/ui/Accordion";
import { GiveForm } from "@/components/giving/GiveForm";

export const metadata: Metadata = {
  title: "Giving",
  description:
    "Partner with the vision of Winners Chapel Southport. Give securely online with UK Gift Aid, bank transfer, standing order and more. Every gift makes an eternal difference.",
};

const trust = [
  { icon: "shield-check", label: "Bank-grade security" },
  { icon: "circle-dollar", label: "Gift Aid enabled" },
  { icon: "shield", label: "256-bit encrypted" },
];

const ways = [
  {
    icon: "circle-dollar",
    title: "Online",
    body: "The fastest way to give. Use the secure form above for a one-off or recurring gift by card.",
  },
  {
    icon: "briefcase",
    title: "Bank Transfer",
    body: "Winners Chapel Southport · Sort 00-00-00 · Acc 00000000. (Example details — please request our current account details.)",
  },
  {
    icon: "qr",
    title: "QR Code",
    body: "Scan our QR code in the sanctuary or bulletin to give instantly from your phone — no typing required.",
  },
  {
    icon: "hand-heart",
    title: "In Person",
    body: "Give during our services via the offering, or at our welcome desk. Our team will gladly assist you.",
  },
  {
    icon: "calendar",
    title: "Standing Order",
    body: "Set up a regular gift through your bank to sow consistently into the vision. Ask us for a standing order form.",
  },
];

const allocation = [
  { label: "Ministry & Discipleship", pct: 50, icon: "church" },
  { label: "Community & CSR", pct: 30, icon: "heart-handshake" },
  { label: "Missions & Outreach", pct: 20, icon: "megaphone" },
];

const faqs = [
  {
    q: "Is my donation secure?",
    a: "Absolutely. All online gifts are processed through a trusted, PCI-compliant payment provider using 256-bit encryption. We never see or store your full card details.",
  },
  {
    q: "What is Gift Aid?",
    a: "Gift Aid is a UK government scheme that lets registered charities reclaim the basic-rate tax on your donation. If you're a UK taxpayer, we can claim an extra 25p for every £1 you give — at no additional cost to you.",
  },
  {
    q: "Can I set up a recurring gift?",
    a: "Yes. When giving online you can choose a weekly or monthly frequency, or set up a standing order directly with your bank for full control.",
  },
  {
    q: "Which fund should I give to?",
    a: "Give as your heart leads. Tithe and Offering support the general work of the church, while Kingdom Projects, CSR/Community and Mission Support are directed to those specific causes.",
  },
  {
    q: "Will I receive a record of my giving?",
    a: "Yes. You'll receive a confirmation for each online gift, and we can provide an annual giving statement on request — helpful for your own records and Gift Aid.",
  },
  {
    q: "Can I give from outside the UK?",
    a: "Yes, our online giving accepts international cards. Please note Gift Aid applies only to UK taxpayers, but your generosity is welcome from anywhere in the world.",
  },
];

export default function GivingPage() {
  return (
    <>
      <PageHero
        eyebrow="Secure Giving"
        image="/images/site/sermon-audio.jpg"
        title={
          <>
            Partner with the <span className="text-gold-gradient">vision</span>.
          </>
        }
        subtitle="Your generosity fuels the Word, transforms our community and reaches the lost. Give securely, easily, and with confidence — every gift makes an eternal difference."
      >
        <div className="flex flex-wrap gap-4">
          <Button href="#give" icon="hand-heart">
            Give Now
          </Button>
          <Button href="#ways" variant="outline">
            Ways to Give
          </Button>
        </div>
      </PageHero>

      {/* Intro + trust */}
      <Section tone="navy">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
              <span className="h-px w-6 bg-gold-500/60" /> A Cheerful Giver
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl">
              God loves a{" "}
              <span className="text-gold-gradient">cheerful giver</span>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-600/80">
              &ldquo;Every man according as he purposeth in his heart, so let him give; not
              grudgingly, or of necessity: for God loveth a cheerful giver.&rdquo; When you give,
              you&apos;re not just funding a budget — you&apos;re sowing into changed lives, a
              transformed community, and the advance of the Kingdom.
            </p>
            <p className="mt-4 text-sm font-medium uppercase tracking-wider text-gold-700">
              2 Corinthians 9:7
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {trust.map((t) => (
                <span key={t.label} className="inline-flex items-center gap-2 text-sm text-navy-600/80">
                  <Icon name={t.icon} className="h-4 w-4 text-gold-600" /> {t.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Give form */}
      <Section id="give" tone="darker">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Give Online"
              title="Make your gift"
              subtitle="Choose a fund, amount and frequency. It takes less than a minute, and it's completely secure."
            />
            <div className="mt-8 space-y-4">
              {[
                { icon: "shield-check", t: "Safe & secure", d: "Processed by a trusted, encrypted payment provider." },
                { icon: "circle-dollar", t: "Gift Aid ready", d: "Add 25% at no cost to you if you're a UK taxpayer." },
                { icon: "trending-up", t: "One-off or recurring", d: "Give once, weekly or monthly — you're in control." },
              ].map((f) => (
                <div key={f.t} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25">
                    <Icon name={f.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-navy-900">{f.t}</p>
                    <p className="text-sm text-navy-600/80">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <div className="bg-white shadow-xl ring-1 ring-navy-900/10 rounded-2xl p-6 sm:p-8">
              <GiveForm />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Ways to give */}
      <Section id="ways" tone="navy">
        <SectionHeading
          eyebrow="Ways to Give"
          title="Give the way that suits you"
          subtitle="However you prefer to give, we've made it simple and secure."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ways.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 0.08}>
              <div className="card-lift h-full rounded-2xl bg-white p-7 ring-1 ring-navy-900/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25">
                  <Icon name={w.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl text-navy-900">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-600/80">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Gift Aid */}
      <Section tone="darker">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Gift Aid"
              title={
                <>
                  Add <span className="text-gold-gradient">25%</span> — at no cost to you
                </>
              }
              subtitle="If you're a UK taxpayer, Gift Aid lets us reclaim the basic-rate tax on your donation, boosting every £1 you give to £1.25 — without costing you a penny more."
            />
            <div className="mt-8 space-y-3">
              {[
                "You must be a UK taxpayer.",
                "You pay enough Income or Capital Gains Tax to cover what all charities reclaim on your gifts in the tax year.",
                "One simple declaration covers all your future and past gifts (up to 4 years).",
              ].map((line) => (
                <div key={line} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-700">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-navy-600/80">{line}</p>
                </div>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <div className="bg-white shadow-xl ring-1 ring-navy-900/10 rounded-2xl p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25">
                  <Icon name="pen-line" className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl text-navy-900">Gift Aid Declaration</h3>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-navy-600/80">
                Simply tick the Gift Aid box when you give online, and we&apos;ll do the rest. Prefer
                a paper declaration? Our team will gladly provide one — just ask at the welcome desk
                or get in touch.
              </p>
              <p className="mt-5 rounded-xl bg-navy-900/5 p-4 text-xs leading-relaxed text-navy-600/80 ring-1 ring-navy-900/10">
                By making a Gift Aid declaration you confirm you are a UK taxpayer and understand
                that if you pay less Income/Capital Gains Tax than the amount of Gift Aid claimed on
                all your donations in that tax year, it is your responsibility to pay any difference.
              </p>
              <Button href="/contact" variant="outline" size="sm" iconRight="arrow-right" className="mt-6">
                Request a Declaration Form
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Where giving goes */}
      <Section tone="navy">
        <SectionHeading
          eyebrow="Your Impact"
          title="Where your giving goes"
          subtitle="Every gift is stewarded with integrity and transparency. Here's how your generosity is put to work."
        />
        <div className="mx-auto mt-14 max-w-3xl space-y-8">
          {allocation.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.1}>
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-3 font-display text-lg text-navy-900">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25">
                      <Icon name={a.icon} className="h-4 w-4" />
                    </span>
                    {a.label}
                  </span>
                  <span className="font-display text-2xl text-gold-gradient">{a.pct}%</span>
                </div>
                <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-navy-900/5 ring-1 ring-navy-900/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-300"
                    style={{ width: `${a.pct}%` }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Tax info note */}
      <Section tone="darker">
        <Reveal>
          <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-2xl bg-white p-6 ring-1 ring-navy-900/10 sm:p-8">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25">
              <Icon name="shield-check" className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-lg text-navy-900">Tax Information</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600/80">
                Winners Chapel International, Southport is committed to the highest standards of
                financial accountability. Annual giving statements are available on request for your
                tax records. For questions about Gift Aid or tax-efficient giving, please contact our
                finance team.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section tone="cream">
        <SectionHeading
          light
          eyebrow="Giving FAQs"
          title="Your questions, answered"
          subtitle="Everything you need to know about giving, Gift Aid and security."
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <Reveal>
            <Accordion items={faqs} light />
          </Reveal>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section tone="darker">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl p-10 text-center ring-1 ring-navy-900/10 sm:p-16">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Sow into something that{" "}
              <span className="text-gold-gradient">lasts forever</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-navy-600/80">
              Thank you for partnering with us. Together, we&apos;re changing Southport and reaching
              the world with the Word of Faith.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="#give" size="lg" icon="hand-heart">
                Give Securely
              </Button>
              <Button href="/csr" size="lg" variant="outline">
                See Our Impact
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
