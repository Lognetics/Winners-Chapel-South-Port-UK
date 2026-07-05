import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const tiles = [
  { img: "/images/site/welcome-handshake.jpg", label: "Community", pos: "object-center", span: "sm:col-span-2 sm:row-span-2" },
  { img: "/images/site/children.jpg", label: "Children's Church", pos: "object-center", span: "" },
  { img: "/images/site/sermon-audio.jpg", label: "The Word", pos: "object-center", span: "" },
  { img: "/images/site/outreach.jpg", label: "Outreach", pos: "object-center", span: "sm:col-span-2" },
  { img: "/images/site/children.jpg", label: "Worship", pos: "object-top", span: "" },
  { img: "/images/site/welcome-handshake.jpg", label: "Fellowship", pos: "object-left", span: "" },
];

export function Gallery() {
  return (
    <Section tone="darker" className="grain">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          align="left"
          eyebrow="Church Life"
          title={<>Moments from the <span className="text-gold-gradient">Winners family</span></>}
          subtitle="A glimpse of the worship, community and life we share together week by week."
        />
        <Button href="/media#gallery" variant="outline" iconRight="arrow-right" className="hidden shrink-0 sm:inline-flex">
          View Full Gallery
        </Button>
      </div>

      <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {tiles.map((t, i) => (
          <Reveal key={i} delay={(i % 4) * 0.05} className={`${t.span} h-full`}>
            <figure className="group relative h-full w-full overflow-hidden rounded-2xl ring-1 ring-gold-500/10">
              <Image
                src={t.img}
                alt={t.label}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className={`${t.pos} object-cover transition-transform duration-700 group-hover:scale-110`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
              <figcaption className="absolute bottom-3 left-3 flex items-center gap-1.5 text-sm font-medium text-cream">
                <Icon name="camera" className="h-3.5 w-3.5 text-gold-400" />
                {t.label}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 flex justify-center sm:hidden">
        <Button href="/media#gallery" variant="outline" iconRight="arrow-right">View Full Gallery</Button>
      </div>
    </Section>
  );
}
