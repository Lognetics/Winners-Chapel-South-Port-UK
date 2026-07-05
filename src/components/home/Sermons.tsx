"use client";

import { useRef } from "react";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { sermons } from "@/lib/site";

export function Sermons() {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    scroller.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <Section tone="darker">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          align="left"
          eyebrow="Media & Messages"
          title={<>Featured <span className="text-gold-gradient">sermons</span></>}
          subtitle="Be transformed by the renewing of your mind. Watch, listen and download life-changing messages."
        />
        <div className="flex items-center gap-3">
          <button onClick={() => scroll(-1)} aria-label="Previous" className="flex h-11 w-11 items-center justify-center rounded-full ring-gold text-cream transition hover:bg-gold-500/10">
            <Icon name="chevron-right" className="h-5 w-5 rotate-180" />
          </button>
          <button onClick={() => scroll(1)} aria-label="Next" className="flex h-11 w-11 items-center justify-center rounded-full ring-gold text-cream transition hover:bg-gold-500/10">
            <Icon name="chevron-right" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scroller}
        className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {sermons.map((s) => (
          <article
            key={s.title}
            className="card-lift group relative w-[300px] shrink-0 snap-start overflow-hidden rounded-3xl bg-navy-900/50 ring-1 ring-gold-500/10 sm:w-[340px]"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image src={s.img} alt={s.title} fill sizes="340px" className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
              <span className="absolute left-3 top-3 rounded-full bg-gold-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-950">
                {s.tag}
              </span>
              <span className="absolute bottom-3 right-3 rounded-full bg-navy-950/80 px-2.5 py-1 text-xs text-cream/80">
                {s.duration}
              </span>
              <button className="absolute inset-0 flex items-center justify-center" aria-label={`Play ${s.title}`}>
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/90 text-navy-950 shadow-2xl transition-transform duration-300 group-hover:scale-110">
                  <Icon name="play" className="ml-1 h-7 w-7" strokeWidth={2} />
                </span>
              </button>
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-400">{s.series} · {s.date}</p>
              <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-cream">{s.title}</h3>
              <p className="mt-1 text-sm text-cream/50">{s.speaker}</p>
              <div className="mt-4 flex items-center gap-4 text-xs">
                <button className="flex items-center gap-1.5 text-cream/70 transition hover:text-gold-300"><Icon name="download" className="h-4 w-4" /> MP3</button>
                <button className="flex items-center gap-1.5 text-cream/70 transition hover:text-gold-300"><Icon name="pen-line" className="h-4 w-4" /> Notes</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button href="/media" variant="outline" iconRight="arrow-right">Explore the Media Centre</Button>
      </div>
    </Section>
  );
}
