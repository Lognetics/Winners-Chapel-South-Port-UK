const words = [
  "Faith", "Excellence", "Warmth", "Community", "Healing", "Breakthrough",
  "Salvation", "Restoration", "Family", "Miracles", "Kingdom Excellence",
];

export function Marquee() {
  return (
    <div className="relative flex overflow-hidden border-y border-gold-500/10 bg-[#04091a] py-6">
      <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
        {[...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-display text-2xl font-medium text-cream/25 sm:text-3xl">{w}</span>
            <span className="text-gold-500">✦</span>
          </span>
        ))}
      </div>
      <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10" aria-hidden>
        {[...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-display text-2xl font-medium text-cream/25 sm:text-3xl">{w}</span>
            <span className="text-gold-500">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
