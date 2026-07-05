"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./Icon";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-gold-500/10 overflow-hidden rounded-2xl ring-1 ring-gold-500/10">
      {items.map((item, i) => (
        <div key={i} className="bg-navy-900/40">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={open === i}
          >
            <span className="font-display text-lg font-medium text-cream">{item.q}</span>
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-gold text-gold-300 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>
              <Icon name="arrow-up-right" className="h-4 w-4" />
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-sm leading-relaxed text-cream/60">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
