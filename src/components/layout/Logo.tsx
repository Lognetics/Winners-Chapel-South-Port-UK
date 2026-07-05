import Image from "next/image";
import Link from "next/link";

export function Logo({ variant = "full" }: { variant?: "full" | "emblem" }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Winners Chapel International, Southport — Home">
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-cream/95 ring-1 ring-gold-400/40 transition-transform duration-500 group-hover:scale-105">
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
          <span className="font-display text-lg font-bold tracking-tight text-cream">
            WINNERS<span className="text-gold-400">.</span>
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-cream/55">
            Chapel Int&apos;l · Southport
          </span>
        </span>
      )}
    </Link>
  );
}
