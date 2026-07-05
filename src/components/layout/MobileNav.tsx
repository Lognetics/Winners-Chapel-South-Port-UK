"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";

const items = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Watch", href: "/media#live", icon: "play" },
  { label: "Live", href: "/media#live", icon: "radio", center: true },
  { label: "Give", href: "/giving", icon: "gift" },
  { label: "Prayer", href: "/prayer", icon: "flame" },
];

export function MobileNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
      <div className="mx-3 mb-3 flex items-center justify-around rounded-2xl border border-gold-500/15 bg-navy-950/90 px-2 py-2 shadow-[0_-8px_30px_-10px_rgba(0,0,0,0.7)] backdrop-blur-xl">
        {items.map((item) =>
          item.center ? (
            <Link
              key={item.label}
              href={item.href}
              className="relative -mt-8 flex flex-col items-center"
              aria-label="Watch Live"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-red-500 to-red-700 text-white shadow-[0_10px_30px_-6px_rgba(220,38,38,0.7)] ring-4 ring-navy-950">
                <span className="absolute inline-flex h-14 w-14 animate-pulse-ring rounded-full bg-red-500/50" />
                <Icon name="radio" className="h-6 w-6" strokeWidth={2} />
              </span>
              <span className="mt-1 text-[10px] font-semibold text-red-400">LIVE</span>
            </Link>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-1 flex-col items-center gap-1 py-1.5 text-[10px] font-medium transition-colors ${
                pathname === item.href ? "text-gold-300" : "text-cream/55"
              }`}
            >
              <Icon name={item.icon} className="h-5 w-5" strokeWidth={1.8} />
              {item.label}
            </Link>
          )
        )}
      </div>
    </nav>
  );
}
