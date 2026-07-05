"use client";

import { useEffect, useState } from "react";

/** Returns ms until the next Sunday 10:30 (local) or next service window. */
function nextServiceDate(): Date {
  const now = new Date();
  const d = new Date(now);
  const day = now.getDay(); // 0 = Sun
  // Sunday service at 10:30
  const daysUntilSunday = (7 - day) % 7;
  d.setDate(now.getDate() + daysUntilSunday);
  d.setHours(10, 30, 0, 0);
  if (d.getTime() <= now.getTime()) {
    d.setDate(d.getDate() + 7);
  }
  return d;
}

export function Countdown({ compact = false }: { compact?: boolean }) {
  const [target] = useState(nextServiceDate);
  const [left, setLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      setLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { v: left.d, l: "Days" },
    { v: left.h, l: "Hrs" },
    { v: left.m, l: "Min" },
    { v: left.s, l: "Sec" },
  ];

  return (
    <div className={`flex ${compact ? "gap-2" : "gap-3"}`}>
      {units.map((u) => (
        <div
          key={u.l}
          className={`flex flex-col items-center rounded-xl bg-navy-900/60 ring-gold ${
            compact ? "min-w-[3rem] px-2 py-1.5" : "min-w-[4rem] px-3 py-2.5"
          }`}
        >
          <span
            className={`font-display font-bold tabular-nums text-gold-300 ${
              compact ? "text-lg" : "text-2xl sm:text-3xl"
            }`}
          >
            {String(u.v).padStart(2, "0")}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-cream/50">{u.l}</span>
        </div>
      ))}
    </div>
  );
}
