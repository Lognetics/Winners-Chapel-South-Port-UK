"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { sermons } from "@/lib/site";

const chips = ["All", "Newest", "Most Watched", "Series"] as const;
type Chip = (typeof chips)[number];

export function SermonGrid() {
  const [active, setActive] = useState<Chip>("All");

  const filtered =
    active === "All"
      ? sermons
      : sermons.filter((s) => s.tag === active);

  return (
    <div className="mt-12">
      <div className="flex flex-wrap items-center gap-3">
        {chips.map((c) => {
          const on = c === active;
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
                on
                  ? "bg-gold-500 text-navy-950 shadow-[0_10px_30px_-8px_rgba(212,175,55,0.5)]"
                  : "bg-navy-900/5 text-navy-600 hover:bg-navy-900/10"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((s) => (
          <article
            key={s.title}
            className="card-light group relative flex flex-col overflow-hidden rounded-3xl"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="(max-width:640px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/25 to-transparent" />
              <span className="absolute left-3 top-3 rounded-full bg-gold-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-950">
                {s.tag}
              </span>
              <span className="absolute bottom-3 right-3 rounded-full bg-navy-950/80 px-2.5 py-1 text-xs text-cream/80">
                {s.duration}
              </span>
              <button
                className="absolute inset-0 flex items-center justify-center"
                aria-label={`Play ${s.title}`}
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/90 text-navy-950 shadow-2xl transition-transform duration-300 group-hover:scale-110">
                  <Icon name="play" className="ml-1 h-7 w-7" strokeWidth={2} />
                </span>
              </button>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                {s.series} · {s.date}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-navy-900">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-navy-600/80">{s.speaker}</p>
              <div className="mt-auto flex items-center gap-4 pt-4 text-xs">
                <button className="flex items-center gap-1.5 text-navy-600 transition hover:text-gold-700">
                  <Icon name="download" className="h-4 w-4" /> MP3
                </button>
                <button className="flex items-center gap-1.5 text-navy-600 transition hover:text-gold-700">
                  <Icon name="pen-line" className="h-4 w-4" /> Notes
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-navy-600/80">
          No messages in this filter yet. Check back soon.
        </p>
      )}
    </div>
  );
}
