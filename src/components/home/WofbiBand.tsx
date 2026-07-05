import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { wofbiCourses } from "@/lib/site";

export function WofbiBand() {
  return (
    <section className="relative overflow-hidden bg-[#04091a] py-20 sm:py-28">
      <div className="absolute inset-0 opacity-30">
        <Image src="/images/site/sermon-audio.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-navy-950/85" />
      </div>
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
        <Reveal direction="right">
          <Eyebrow>Word of Faith Bible Institute</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl md:text-5xl">
            Be <span className="text-gold-gradient">rooted</span> and built up in the Word
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/70">
            WOFBI is our Bible school raising believers who know their God and do exploits.
            Enrol in any of our certificate courses — free registration, structured curriculum,
            and certificates on graduation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/wofbi" icon="graduation-cap">Register for WOFBI</Button>
            <Button href="/wofbi#courses" variant="outline" iconRight="arrow-right">View Courses</Button>
          </div>
        </Reveal>

        <div className="space-y-4">
          {wofbiCourses.map((c, i) => (
            <Reveal key={c.code} delay={i * 0.08} direction="left">
              <div className="glass card-lift flex items-center gap-5 rounded-2xl p-5">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gold-500/15 font-display text-xl font-bold text-gold-300 ring-1 ring-gold-500/25">
                  {c.code}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-lg font-semibold text-cream">{c.name}</h3>
                  </div>
                  <p className="mt-1 text-sm text-cream/55">{c.desc}</p>
                  <div className="mt-2 flex gap-4 text-xs text-gold-300/80">
                    <span className="flex items-center gap-1"><Icon name="clock" className="h-3.5 w-3.5" />{c.weeks}</span>
                    <span className="flex items-center gap-1"><Icon name="star" className="h-3.5 w-3.5" />{c.level}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
