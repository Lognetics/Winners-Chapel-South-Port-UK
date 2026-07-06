"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { galleryCategories } from "@/lib/site";

const pool = [
  "/images/site/welcome-handshake.jpg",
  "/images/site/children.jpg",
  "/images/site/outreach.jpg",
  "/images/site/sermon-audio.jpg",
];

type Photo = { src: string; cat: string; span: string; ratio: string; caption: string };

const photos: Photo[] = [
  { src: pool[0], cat: "Church Life", span: "row-span-2", ratio: "aspect-[3/4]", caption: "A warm welcome" },
  { src: pool[1], cat: "Children", span: "", ratio: "aspect-[4/3]", caption: "Children's church" },
  { src: pool[2], cat: "Community", span: "", ratio: "aspect-[4/3]", caption: "Southport outreach" },
  { src: pool[3], cat: "Worship", span: "row-span-2", ratio: "aspect-[3/4]", caption: "Sounds of praise" },
  { src: pool[2], cat: "Community", span: "", ratio: "aspect-[4/3]", caption: "Serving our city" },
  { src: pool[0], cat: "Conferences", span: "", ratio: "aspect-[4/3]", caption: "Shiloh gathering" },
  { src: pool[1], cat: "Youth", span: "", ratio: "aspect-[4/3]", caption: "Youth Alive" },
  { src: pool[3], cat: "Worship", span: "", ratio: "aspect-[4/3]", caption: "The choir" },
  { src: pool[0], cat: "Church Life", span: "row-span-2", ratio: "aspect-[3/4]", caption: "Family & fellowship" },
  { src: pool[1], cat: "Children", span: "", ratio: "aspect-[4/3]", caption: "Little Winners" },
  { src: pool[2], cat: "Community", span: "", ratio: "aspect-[4/3]", caption: "Food bank" },
  { src: pool[3], cat: "Conferences", span: "", ratio: "aspect-[4/3]", caption: "The Word feast" },
];

export function Gallery() {
  const [active, setActive] = useState("All");
  const cats = ["All", ...galleryCategories];
  const shown = active === "All" ? photos : photos.filter((p) => p.cat === active);

  return (
    <div className="mt-12">
      <div className="flex flex-wrap items-center gap-3">
        {cats.map((c) => {
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

      <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {shown.map((p, i) => (
          <figure
            key={`${p.src}-${i}`}
            className={`group relative overflow-hidden rounded-2xl ring-1 ring-navy-900/10 ${p.span}`}
          >
            <Image
              src={p.src}
              alt={p.caption}
              fill
              sizes="(max-width:640px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-300">
                {p.cat}
              </span>
              <p className="text-sm font-medium text-cream">{p.caption}</p>
            </figcaption>
            <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-navy-950/70 text-gold-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Icon name="image" className="h-4 w-4" />
            </span>
          </figure>
        ))}
      </div>
    </div>
  );
}
