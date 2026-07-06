import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { csrPrograms } from "@/lib/site";

export function CsrBand() {
  return (
    <Section tone="darker" className="grain">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <Reveal direction="right" className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="Community Impact"
            title={<>Faith that <span className="text-gold-gradient">serves</span> Southport</>}
            subtitle="We don't just preach the gospel — we live it. Through our food bank, employment training and outreach, we bring hope to our city."
          />
          <div className="mt-8 overflow-hidden rounded-3xl ring-1 ring-navy-900/10 shadow-xl">
            <div className="relative aspect-[16/10]">
              <Image src="/images/site/outreach.jpg" alt="Community outreach" fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="font-display text-3xl font-bold text-gold-gradient">9,800+</p>
                <p className="text-sm text-cream/80">Food bank beneficiaries served</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href="/csr#volunteer" icon="hand-heart">Volunteer</Button>
            <Button href="/giving" variant="outline" icon="gift">Donate</Button>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {csrPrograms.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08} direction="left">
              <div className="card-light flex h-full flex-col gap-3 rounded-2xl p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-semibold text-navy-900">{p.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-navy-600/80">{p.desc}</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-700">{p.stat}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
