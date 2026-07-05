import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { ServiceTimes } from "@/components/home/ServiceTimes";
import { Welcome } from "@/components/home/Welcome";
import { Stats } from "@/components/home/Stats";
import { Experience } from "@/components/home/Experience";
import { Sermons } from "@/components/home/Sermons";
import { Gallery } from "@/components/home/Gallery";
import { MinistriesPreview } from "@/components/home/MinistriesPreview";
import { WofbiBand } from "@/components/home/WofbiBand";
import { EventsPreview } from "@/components/home/EventsPreview";
import { CsrBand } from "@/components/home/CsrBand";
import { Testimonies } from "@/components/home/Testimonies";
import { ClosingCta } from "@/components/home/ClosingCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServiceTimes />
      <Welcome />
      <Stats />
      <Experience />
      <Sermons />
      <Gallery />
      <MinistriesPreview />
      <WofbiBand />
      <EventsPreview />
      <CsrBand />
      <Testimonies />
      <ClosingCta />
    </>
  );
}
