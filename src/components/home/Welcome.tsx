import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function Welcome() {
  return (
    <Section tone="cream" className="overflow-hidden">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="right">
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] ring-1 ring-navy-900/10 shadow-2xl">
              <Image
                src="/images/site/welcome-handshake.jpg"
                alt="Our Resident Pastor welcomes you"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
            </div>
            {/* Floating quote card */}
            <div className="absolute -bottom-6 -right-4 max-w-xs rounded-2xl bg-navy-900 p-5 shadow-2xl ring-1 ring-gold-500/20 sm:-right-8">
              <Icon name="quote" className="h-6 w-6 text-gold-400" />
              <p className="mt-2 text-sm italic leading-relaxed text-cream/90">
                &ldquo;I rejoiced with those who said to me, let us go to the house of the LORD.&rdquo;
              </p>
              <p className="mt-2 text-xs font-semibold text-gold-300">Psalm 122:1</p>
            </div>
            <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-gold-500/25 blur-3xl" />
          </div>
        </Reveal>

        <Reveal direction="left">
          <Eyebrow>A Personal Welcome</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl md:text-5xl">
            You are <span className="text-gold-gradient">welcome</span> here
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-700/85">
            <p>
              On behalf of the entire Winners Chapel International Southport family, it is my
              joy to welcome you. Whether you are searching, hurting, celebrating, or simply
              curious — there is a place for you at our table.
            </p>
            <p>
              This is a house of faith where the Word is preached without compromise, a family
              of love where no one walks alone, and a home of miracles where God still moves in
              power. Come as you are and discover all that God has prepared for you.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/our-pastor" icon="user-check">Read Full Welcome</Button>
            <Button href="/media#live" variant="outlineDark" icon="play">Watch Video Greeting</Button>
          </div>
          <div className="mt-8 border-t border-navy-900/10 pt-6">
            <p className="font-display text-xl text-navy-900">The Resident Pastor</p>
            <p className="text-sm text-navy-600/70">Winners Chapel International, Southport</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
