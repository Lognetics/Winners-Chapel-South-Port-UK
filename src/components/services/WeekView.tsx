"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";

type Activity = { time: string; title: string; desc: string; icon: string; tag?: string };

const week: { day: string; short: string; note: string; items: Activity[] }[] = [
  {
    day: "Monday",
    short: "Mon",
    note: "The Winners' Hour of Prayer sets the tone for the week.",
    items: [
      { time: "6:00 AM", title: "Winners' Hour of Prayer", desc: "Corporate prayer altar to open the week in victory.", icon: "flame", tag: "Online" },
      { time: "7:00 PM", title: "Follow-up Calls", desc: "The care team reaches out to first timers and members.", icon: "phone-call" },
    ],
  },
  {
    day: "Tuesday",
    short: "Tue",
    note: "A midweek focus on intercession and outreach.",
    items: [
      { time: "6:00 AM", title: "Morning Watch Prayer", desc: "Start your day covered in the presence of God.", icon: "flame" },
      { time: "7:00 PM", title: "Kingdom Advancement", desc: "Evangelism strategy and soul-winning across Southport.", icon: "megaphone" },
    ],
  },
  {
    day: "Wednesday",
    short: "Wed",
    note: "Midweek Communion Service — the highlight of the week.",
    items: [
      { time: "6:00 AM", title: "Morning Watch Prayer", desc: "Corporate prayer to fuel your faith.", icon: "flame" },
      { time: "6:00 PM", title: "Midweek Communion Service", desc: "Bible study, communion and the Word that transforms.", icon: "book", tag: "In Person" },
    ],
  },
  {
    day: "Thursday",
    short: "Thu",
    note: "Choir and technical teams prepare for Sunday.",
    items: [
      { time: "6:00 PM", title: "Choir Rehearsal", desc: "The worship team prepares to lead us into His presence.", icon: "music" },
      { time: "7:30 PM", title: "Technical Run-through", desc: "Sound, lighting and media excellence for worship.", icon: "sliders" },
    ],
  },
  {
    day: "Friday",
    short: "Fri",
    note: "Winners Satellite Fellowships gather across the city.",
    items: [
      { time: "6:30 PM", title: "Winners Satellite Fellowship", desc: "Neighbourhood fellowships for prayer and community.", icon: "users", tag: "WSF" },
      { time: "8:00 PM", title: "Youth Alive Night", desc: "Worship, the Word and connection for young people.", icon: "rocket" },
    ],
  },
  {
    day: "Saturday",
    short: "Sat",
    note: "Workers gather and the community is served.",
    items: [
      { time: "9:00 AM", title: "Workers Meeting", desc: "Equipping and refreshing our volunteers for service.", icon: "user-check" },
      { time: "11:00 AM", title: "Community Outreach", desc: "Food bank, evangelism and support across Southport.", icon: "heart", tag: "Monthly" },
    ],
  },
  {
    day: "Sunday",
    short: "Sun",
    note: "The Lord's Day — our two celebration services.",
    items: [
      { time: "8:00 AM", title: "Sunday First Service", desc: "Communion Service to start your week in victory.", icon: "sunrise", tag: "Weekly" },
      { time: "10:30 AM", title: "Sunday Second Service", desc: "Vibrant worship, the Word and children's church.", icon: "church", tag: "Weekly" },
    ],
  },
];

export function WeekView() {
  const todayIdx = (new Date().getDay() + 6) % 7; // Mon=0 … Sun=6
  const [active, setActive] = useState(todayIdx);
  const day = week[active];

  return (
    <div className="mt-12">
      <div className="flex flex-wrap justify-center gap-2">
        {week.map((d, i) => (
          <button
            key={d.day}
            onClick={() => setActive(i)}
            className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition ${
              active === i ? "text-navy-950" : "text-navy-600 hover:text-navy-900"
            }`}
          >
            {active === i && (
              <motion.span
                layoutId="week-pill"
                className="absolute inset-0 rounded-full bg-gold-500 shadow-[0_10px_30px_-8px_rgba(212,175,55,0.5)]"
                transition={{ type: "spring", stiffness: 400, damping: 34 }}
              />
            )}
            <span className="relative z-10">{d.short}</span>
          </button>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={day.day}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 className="font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
                {day.day}
              </h3>
              {active === todayIdx && (
                <span className="rounded-full bg-gold-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-700 ring-1 ring-gold-500/25">
                  Today
                </span>
              )}
            </div>
            <p className="mb-6 text-sm italic text-navy-600/80">{day.note}</p>

            <div className="space-y-3">
              {day.items.map((a) => (
                <div
                  key={a.title}
                  className="card-light flex items-start gap-4 rounded-2xl p-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25">
                    <Icon name={a.icon} className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-display text-lg font-medium text-navy-900">{a.title}</span>
                      {a.tag && (
                        <span className="rounded-full bg-navy-900/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold-700 ring-1 ring-navy-900/10">
                          {a.tag}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-navy-600/80">{a.desc}</p>
                  </div>
                  <span className="shrink-0 text-sm font-semibold tabular-nums text-gold-700">
                    {a.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
