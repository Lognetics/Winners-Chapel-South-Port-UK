"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Countdown } from "@/components/ui/Countdown";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";

const slides = [
  { img: "/images/site/welcome-handshake.jpg", tag: "Community & Welcome" },
  { img: "/images/site/children.jpg", tag: "Children's Church" },
  { img: "/images/site/sermon-audio.jpg", tag: "The Word" },
  { img: "/images/site/outreach.jpg", tag: "Outreach" },
];

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy-950 grain">
      {/* Rotating cinematic background */}
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[i].img}
            alt=""
            fill
            priority
            sizes="100vw"
            className="animate-ken-burns object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/70 to-navy-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/50 to-transparent" />
      <div className="pointer-events-none absolute inset-0 hero-glow" />

      {/* Content */}
      <div className="container-x relative z-10 grid w-full items-center gap-10 py-24 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full glass-light px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-gold-200"
          >
            <Icon name="sparkles" className="h-3.5 w-3.5 text-gold-400" />
            {site.tagline}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl"
          >
            Welcome to <span className="text-gold-gradient">Winners Chapel</span> International Southport
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75 sm:text-xl"
          >
            A Place of Faith. A Family of Love. A Home of Miracles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="/first-timers" size="lg" icon="church">
              Join Us This Sunday
            </Button>
            <Button href="/media#live" size="lg" variant="outline" icon="play">
              Watch Live
            </Button>
            <Button href="/first-timers" size="lg" variant="ghost" iconRight="arrow-right">
              Plan Your Visit
            </Button>
          </motion.div>

          {/* Slide indicators */}
          <div className="mt-12 flex items-center gap-3">
            {slides.map((s, idx) => (
              <button
                key={s.tag}
                onClick={() => setI(idx)}
                className="group flex items-center gap-2"
                aria-label={s.tag}
              >
                <span
                  className={`h-1 rounded-full transition-all duration-500 ${
                    idx === i ? "w-10 bg-gold-400" : "w-4 bg-cream/25 group-hover:bg-cream/50"
                  }`}
                />
              </button>
            ))}
            <span className="ml-2 text-xs uppercase tracking-widest text-cream/45">{slides[i].tag}</span>
          </div>
        </div>

        {/* Live / next service card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="animate-float justify-self-end"
        >
          <div className="glass w-full max-w-sm rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full bg-red-600/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                Live Now
              </span>
              <span className="text-xs text-cream/50">Sunday Service</span>
            </div>

            <h3 className="mt-5 font-display text-2xl font-semibold text-cream">
              Next Service Begins In
            </h3>
            <p className="mt-1 text-sm text-cream/55">Sunday · Second Service · 10:30 AM</p>

            <div className="mt-5">
              <Countdown />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button href="/media#live" size="sm" icon="play" className="w-full">
                Watch Live
              </Button>
              <Button href="/prayer" size="sm" variant="outline" icon="flame" className="w-full">
                Prayer Line
              </Button>
            </div>

            <div className="mt-5 flex items-center gap-3 border-t border-gold-500/10 pt-4 text-xs text-cream/55">
              <Icon name="map-pin" className="h-4 w-4 text-gold-400" />
              {site.address.venue}, {site.address.postcode}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/40 lg:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-cream/30 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-gold-400" />
        </span>
      </div>
    </section>
  );
}
