"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";

type Msg = { role: "bot" | "user"; text: string };

const suggestions = [
  "What time are services?",
  "Where are you located?",
  "How do I give?",
  "Tell me about WOFBI",
  "I need prayer",
];

function answer(q: string): string {
  const s = q.toLowerCase();
  if (s.includes("time") || s.includes("service") || s.includes("sunday"))
    return `Our services are: Sunday First Service 8:00 AM, Sunday Second Service 10:30 AM, and Midweek Communion Service Wednesday 6:00 PM. We'd love to see you at ${site.address.venue}!`;
  if (s.includes("where") || s.includes("locat") || s.includes("address") || s.includes("direction"))
    return `We meet at ${site.fullAddress}. Tap "Get Directions" anywhere on the site for turn-by-turn directions.`;
  if (s.includes("give") || s.includes("giv") || s.includes("tithe") || s.includes("donat"))
    return `You can give securely online via our Giving page — tithes, offerings, Kingdom projects and CSR donations, with Gift Aid support. Visit /giving to give now.`;
  if (s.includes("wofbi") || s.includes("bible school") || s.includes("course"))
    return `WOFBI (Word of Faith Bible Institute) offers BCC, LCC and LDC courses. Registration is free with certificates on graduation. Head to /wofbi to enrol.`;
  if (s.includes("pray"))
    return `We would be honoured to pray with you. Share your request on our Prayer page (/prayer) — our prayer team stands with you, and for emergencies our prayer line is ${site.phones[0]}.`;
  if (s.includes("pastor"))
    return `Learn about our Resident Pastor and read a personal welcome on the Our Pastor page (/our-pastor).`;
  if (s.includes("first") || s.includes("new") || s.includes("visit"))
    return `Welcome! Visit our First Timers page (/first-timers) for what to expect, parking, children's church and a free welcome gift.`;
  if (s.includes("event") || s.includes("shiloh"))
    return `See everything happening — Shiloh, healing services, youth camp and more — on our Events page (/events).`;
  return `Thank you for reaching out! I can help with service times, our location, giving, WOFBI, prayer, events and more. You can also call us on ${site.phones[0]} or email ${site.email}.`;
}

export function Assistant() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "bot", text: "Hi, I'm the Winners Chapel Assistant 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { role: "user", text }, { role: "bot", text: answer(text) }]);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open church assistant"
        className="fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-gold-300 to-gold-500 text-navy-950 shadow-[0_12px_32px_-8px_rgba(212,175,55,0.6)] transition hover:scale-105 lg:bottom-6"
      >
        <AnimatePresence mode="wait">
          <motion.span key={open ? "x" : "chat"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
            <Icon name={open ? "x" : "message-circle"} className="h-6 w-6" strokeWidth={2} />
          </motion.span>
        </AnimatePresence>
        {!open && <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400" /><span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-red-500" /></span>}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-40 right-4 z-50 flex h-[30rem] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl glass shadow-2xl lg:bottom-24"
          >
            <div className="flex items-center gap-3 border-b border-gold-500/15 bg-navy-900/60 p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/15 text-gold-300 ring-1 ring-gold-500/25">
                <Icon name="sparkles" className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-cream">Church Assistant</p>
                <p className="flex items-center gap-1.5 text-xs text-cream/50"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Online · here to help 24/7</p>
              </div>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.role === "user" ? "bg-gold-500 text-navy-950" : "bg-navy-800/80 text-cream/85"}`}>
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <div className="border-t border-gold-500/15 p-3">
              <div className="mb-2 flex flex-wrap gap-1.5">
                {suggestions.slice(0, 3).map((s) => (
                  <button key={s} onClick={() => send(s)} className="rounded-full bg-navy-800/70 px-2.5 py-1 text-[11px] text-cream/70 transition hover:bg-gold-500/15 hover:text-gold-300">
                    {s}
                  </button>
                ))}
              </div>
              <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything…"
                  className="flex-1 rounded-full bg-navy-900/70 px-4 py-2.5 text-sm text-cream outline-none ring-1 ring-gold-500/15 placeholder:text-cream/40 focus:ring-gold-400"
                />
                <button type="submit" aria-label="Send" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500 text-navy-950 transition hover:bg-gold-400">
                  <Icon name="arrow-right" className="h-5 w-5" strokeWidth={2} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
