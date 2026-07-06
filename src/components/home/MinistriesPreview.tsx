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
              className="card-light group flex h-full items-center gap-3 rounded-2xl p-4"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/20 transition group-hover:bg-gold-500/25">
                <Icon name={m.icon} className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium text-navy-800 group-hover:text-navy-900">{m.name}</span>
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
