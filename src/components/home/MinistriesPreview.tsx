import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { ministries } from "@/lib/site";

export function MinistriesPreview() {
  const preview = ministries.slice(0, 12);
  return (
    <Section tone="navy">
      <SectionHeading
        eyebrow="Serve & Belong"
        title={<>Find your place in a <span className="text-gold-gradient">ministry</span></>}
        subtitle="From the choir to children's church, there is a place for your gift. Serving is where belonging becomes family."
      />
      <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {preview.map((m, i) => (
          <Reveal key={m.slug} delay={(i % 4) * 0.05}>
            <a
              href={`/ministries#${m.slug}`}
              className="card-lift group flex h-full items-center gap-3 rounded-2xl bg-navy-900/40 p-4 ring-1 ring-gold-500/10"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/15 transition group-hover:bg-gold-500/20">
                <Icon name={m.icon} className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium text-cream/85 group-hover:text-cream">{m.name}</span>
            </a>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button href="/ministries" iconRight="arrow-right">See All {ministries.length} Ministries</Button>
      </div>
    </Section>
  );
}
