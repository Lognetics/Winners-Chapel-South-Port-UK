"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { events, site } from "@/lib/site";

export function EventList() {
  const types = useMemo(() => ["All", ...Array.from(new Set(events.map((e) => e.type)))], []);
  const [filter, setFilter] = useState("All");

  const shown = filter === "All" ? events : events.filter((e) => e.type === filter);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === t
                ? "bg-gradient-to-b from-gold-300 to-gold-500 text-navy-950 shadow-[0_10px_30px_-8px_rgba(212,175,55,0.5)]"
                : "bg-navy-900/50 text-cream/65 ring-1 ring-gold-500/10 hover:text-cream"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((e) => (
            <motion.div
              key={e.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl bg-navy-900/40 ring-1 ring-gold-500/10"
            >
              <div className="flex items-center gap-4 border-b border-gold-500/10 p-6">
                <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-gold-500/10 ring-1 ring-gold-500/20">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-400">
                    {e.month}
                  </span>
                  <span className="font-display text-2xl font-bold leading-none text-gold-300">
                    {e.day}
                  </span>
                </div>
                <div>
                  <span className="inline-block rounded-full bg-navy-950/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold-300 ring-1 ring-gold-500/15">
                    {e.type}
                  </span>
                  <p className="mt-2 text-xs text-cream/50">{e.date}</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-cream">{e.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/60">{e.desc}</p>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <Button href="#register" size="sm" iconRight="arrow-right">
                    Register
                  </Button>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(site.mapsQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-cream/60 ring-1 ring-gold-500/15 transition hover:text-gold-300"
                    title="Directions"
                  >
                    <Icon name="navigation" className="h-4 w-4" />
                  </a>
                  <a
                    href={site.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-cream/60 ring-1 ring-gold-500/15 transition hover:text-gold-300"
                    title="Share"
                  >
                    <Icon name="message-square" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
