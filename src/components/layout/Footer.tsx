import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Button } from "@/components/ui/Button";

const cols = [
  {
    title: "Discover",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Pastor", href: "/our-pastor" },
      { label: "Statement of Faith", href: "/about#faith" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Ministries", href: "/ministries" },
      { label: "WOFBI Training", href: "/wofbi" },
      { label: "Community (CSR)", href: "/csr" },
      { label: "Events", href: "/events" },
      { label: "First Timers", href: "/first-timers" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Watch Live", href: "/media#live" },
      { label: "Sermons", href: "/media#sermons" },
      { label: "Prayer Request", href: "/prayer" },
      { label: "Give Online", href: "/giving" },
      { label: "Testimonies", href: "/media#testimonies" },
    ],
  },
];

const socialIcons = [
  { name: "facebook", href: site.socials.facebook, label: "Facebook" },
  { name: "instagram", href: site.socials.instagram, label: "Instagram" },
  { name: "x", href: site.socials.x, label: "X" },
  { name: "youtube", href: site.socials.youtube, label: "YouTube" },
  { name: "whatsapp", href: site.socials.whatsapp, label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#04091a] pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 hero-glow h-64 opacity-60" />

      <div className="container-x relative">
        {/* Newsletter / CTA band */}
        <div className="glass mb-16 flex flex-col items-center gap-6 rounded-3xl px-6 py-10 text-center sm:px-12 lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-xl">
            <h3 className="font-display text-2xl font-semibold text-cream sm:text-3xl">
              Stay connected to the <span className="text-gold-gradient">Winners family</span>
            </h3>
            <p className="mt-2 text-cream/60">
              Get service reminders, devotionals and event updates in your inbox.
            </p>
          </div>
          <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Your email address"
              className="w-full rounded-full bg-navy-900/70 px-5 py-3.5 text-sm text-cream ring-gold outline-none placeholder:text-cream/40 focus:border-gold-400"
            />
            <Button size="md" iconRight="arrow-right" className="shrink-0">
              Subscribe
            </Button>
          </form>
        </div>

        {/* Main grid */}
        <div className="grid gap-12 pb-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/images/site/logo-white.png"
              alt="Winners Chapel International, Southport"
              width={200}
              height={64}
              className="h-12 w-auto object-contain"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/55">
              A faith-based, Bible-believing church in the heart of Southport — part of{" "}
              {site.commission}. A Place of Faith. A Family of Love. A Home of Miracles.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-cream/70">
              <p className="flex items-start gap-3">
                <Icon name="map-pin" className="mt-0.5 h-4 w-4 text-gold-400" />
                {site.fullAddress}
              </p>
              <p className="flex items-center gap-3">
                <Icon name="phone" className="h-4 w-4 text-gold-400" />
                {site.phones.join(" · ")}
              </p>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-gold-300">
                <Icon name="mail" className="h-4 w-4 text-gold-400" />
                {site.email}
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-cream/60 transition hover:text-gold-300">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-gold-500/10 py-8 sm:flex-row">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialIcons.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full ring-gold text-cream/70 transition hover:-translate-y-0.5 hover:bg-gold-500/10 hover:text-gold-300"
              >
                <BrandIcon name={s.name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
