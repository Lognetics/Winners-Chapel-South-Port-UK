"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

type Wall = { text: string; category: string; count: number };

const seed: Wall[] = [
  { text: "Believing God for a complete healing for my mother's recovery.", category: "Healing", count: 128 },
  { text: "Standing in faith for a new job after months of searching. Doors, open!", category: "Career", count: 96 },
  { text: "Praying for peace and restoration in my marriage and home.", category: "Family", count: 214 },
  { text: "Thankful — my visa was finally approved after two years of waiting!", category: "Thanksgiving", count: 301 },
  { text: "Asking God for financial breakthrough to clear my debts this year.", category: "Finance", count: 173 },
  { text: "Pray for my brother to give his life to Christ. His heart is softening.", category: "Salvation", count: 142 },
  { text: "Trusting God for the fruit of the womb. He is faithful.", category: "Family", count: 188 },
  { text: "For strength and courage through a difficult season at university.", category: "Other", count: 74 },
  { text: "Grateful for a clean scan — the tumour is gone. Glory to God!", category: "Thanksgiving", count: 256 },
];

export function PrayerWall() {
  const [items, setItems] = useState(seed);
  const [prayed, setPrayed] = useState<Record<number, boolean>>({});

  return (
    <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
      {items.map((item, i) => (
        <Reveal key={i} delay={(i % 3) * 0.08}>
          <div className="card-lift bg-white ring-1 ring-navy-900/10 rounded-2xl p-6">
            <span className="inline-flex items-center rounded-full bg-gold-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-700 ring-1 ring-gold-500/25">
              {item.category}
            </span>
            <p className="mt-4 text-[15px] leading-relaxed text-navy-700">{item.text}</p>
            <div className="mt-5 flex items-center justify-between border-t border-navy-900/10 pt-4">
              <span className="text-xs text-navy-600/80">
                {item.count.toLocaleString()} praying
              </span>
              <button
                disabled={prayed[i]}
                onClick={() => {
                  setItems((prev) =>
                    prev.map((it, idx) => (idx === i ? { ...it, count: it.count + 1 } : it))
                  );
                  setPrayed((prev) => ({ ...prev, [i]: true }));
                }}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                  prayed[i]
                    ? "bg-gold-500/15 text-gold-700"
                    : "bg-gold-500/15 text-gold-700 hover:bg-gold-500/25"
                }`}
              >
                <span aria-hidden>🙏</span>
                {prayed[i] ? "You prayed" : "I prayed"}
              </button>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
