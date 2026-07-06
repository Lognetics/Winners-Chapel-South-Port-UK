"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/lib/site";
import { Logo } from "./Logo";
import { Icon } from "@/components/ui/Icon";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Close the mobile menu whenever the route changes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* Announcement bar */}
      <div className="hidden bg-navy-900 text-cream/70 lg:block">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            Sunday Services · 8:00 AM &amp; 10:30 AM · St George&apos;s Church, Southport
          </span>
          <div className="flex items-center gap-4">
            <a href="tel:+447445448874" className="link-underline hover:text-gold-300">Prayer Line: +44 7445 448874</a>
            <Link href="/giving" className="link-underline hover:text-gold-300">Give</Link>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ivory/90 backdrop-blur-xl shadow-[0_10px_40px_-24px_rgba(12,21,51,0.5)] ring-1 ring-navy-900/5"
            : "bg-transparent"
        }`}
      >
        <nav className="container-x flex h-18 items-center justify-between py-3">
          <Logo onLight={scrolled} />

          <div className="hidden items-center gap-0.5 lg:flex">
            {nav.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-medium tracking-tight transition-colors xl:px-4 xl:text-sm ${
                    pathname === item.href
                      ? scrolled ? "text-gold-700" : "text-gold-300"
                      : scrolled ? "text-navy-700 hover:text-navy-900" : "text-cream/75 hover:text-cream"
                  }`}
                >
                  {item.label}
                  {item.children && <Icon name="chevron-right" className="h-3 w-3 rotate-90 opacity-50" />}
                </Link>
                <AnimatePresence>
                  {item.children && openMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3"
                    >
                      <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-navy-900/10">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="flex flex-col gap-0.5 rounded-xl px-4 py-3 transition-colors hover:bg-gold-500/10"
                          >
                            <span className="text-sm font-medium text-navy-900">{c.label}</span>
                            {c.desc && <span className="text-xs text-navy-500">{c.desc}</span>}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/media#live"
              className="hidden items-center gap-2 rounded-full bg-red-600/90 px-4 py-2 text-xs font-semibold text-white shadow-lg transition hover:bg-red-500 xl:flex"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/80" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              WATCH LIVE
            </Link>
            <Link
              href="/first-timers"
              className="hidden rounded-full bg-gradient-to-b from-gold-300 to-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-[0_8px_24px_-8px_rgba(212,175,55,0.5)] transition hover:-translate-y-0.5 lg:inline-flex"
            >
              Plan Your Visit
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className={`flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
                scrolled ? "border border-navy-900/15 text-navy-800" : "ring-gold text-cream"
              }`}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <Icon name={open ? "x" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile / tablet full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-navy-950/97 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex h-full flex-col overflow-y-auto pt-24 pb-28">
              <div className="flex flex-col divide-y divide-gold-500/10">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                    className="py-3"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-1 font-display text-2xl text-cream"
                    >
                      {item.label}
                      <Icon name="arrow-up-right" className="h-5 w-5 text-gold-400" />
                    </Link>
                    {item.children && (
                      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 pl-1">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            onClick={() => setOpen(false)}
                            className="text-sm text-cream/55 transition hover:text-gold-300"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <Link href="/first-timers" onClick={() => setOpen(false)} className="rounded-full bg-gradient-to-b from-gold-300 to-gold-500 px-6 py-4 text-center font-semibold text-navy-950">
                  Plan Your Visit
                </Link>
                <Link href="/giving" onClick={() => setOpen(false)} className="rounded-full ring-gold px-6 py-4 text-center font-semibold text-cream">
                  Give Online
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
