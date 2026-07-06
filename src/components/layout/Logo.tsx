import Image from "next/image";
import Link from "next/link";

export function Logo({ variant = "full", onLight = false }: { variant?: "full" | "emblem"; onLight?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Winners Chapel International, Southport — Home">
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-cream/95 ring-1 ring-gold-400/40 shadow-sm transition-transform duration-500 group-hover:scale-105">
        <Image
          src="/images/site/emblem.png"
          alt="Winners Chapel emblem"
          width={40}
          height={40}
          className="h-8 w-8 object-contain"
          priority
        />
      </span>
      {variant === "full" && (
        <span className="flex flex-col leading-none">
          <span className={`font-display text-lg font-bold tracking-tight ${onLight ? "text-navy-900" : "text-cream"}`}>
            WINNERS<span className="text-gold-500">.</span>
          </span>
          <span className={`text-[10px] font-medium uppercase tracking-[0.28em] ${onLight ? "text-navy-500" : "text-cream/55"}`}>
            Chapel Int&apos;l · Southport
          </span>
        </span>
      )}
    </Link>
  );
}
