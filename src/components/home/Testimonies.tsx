import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { testimonies } from "@/lib/site";

const typeIcon: Record<string, string> = { video: "video", audio: "headphones", written: "pen-line" };

export function Testimonies() {
  return (
    <Section tone="navy">
      <SectionHeading
        eyebrow="Testimonies"
        title={<>The testimony of <span className="text-gold-gradient">His goodness</span></>}
        subtitle="Real people. Real encounters. Real miracles. These are just a few of the countless stories of God's faithfulness."
      />
      <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {testimonies.map((t, i) => (
          <Reveal key={t.name} delay={(i % 3) * 0.06}>
            <figure className="card-lift break-inside-avoid rounded-3xl bg-gradient-to-b from-navy-900/60 to-navy-950 p-7 ring-1 ring-gold-500/10">
              <div className="flex items-center justify-between">
                <Icon name="quote" className="h-8 w-8 text-gold-500/60" />
                <span className="flex items-center gap-1.5 rounded-full bg-navy-800/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-300">
                  <Icon name={typeIcon[t.type]} className="h-3 w-3" /> {t.category}
                </span>
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-cream/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-gold-500/10 pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/15 font-display font-bold text-gold-300">
                  {t.name.charAt(0)}
                </span>
                <span className="text-sm font-medium text-cream">{t.name}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button href="/media#testimonies" variant="outline" icon="star">Share Your Testimony</Button>
      </div>
    </Section>
  );
}
