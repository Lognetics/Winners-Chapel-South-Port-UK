import Link from "next/link";
import { Icon } from "./Icon";

type Variant = "gold" | "outline" | "outlineDark" | "ghost" | "white" | "navy";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 disabled:opacity-50";

const variants: Record<Variant, string> = {
  gold: "bg-gradient-to-b from-gold-300 to-gold-500 text-navy-950 shadow-[0_10px_30px_-8px_rgba(212,175,55,0.5)] hover:from-gold-200 hover:to-gold-400 hover:shadow-[0_16px_40px_-8px_rgba(212,175,55,0.65)] hover:-translate-y-0.5",
  outline:
    "ring-gold text-cream hover:bg-gold-500/10 hover:border-gold-400 hover:-translate-y-0.5",
  outlineDark:
    "border border-navy-900/20 text-navy-800 hover:bg-navy-900/5 hover:border-gold-500 hover:-translate-y-0.5",
  ghost: "text-cream/80 hover:text-gold-300",
  navy:
    "bg-navy-900 text-cream hover:bg-navy-800 hover:-translate-y-0.5 shadow-lg",
  white:
    "bg-cream text-navy-900 hover:bg-white hover:-translate-y-0.5 shadow-lg",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  href,
  children,
  variant = "gold",
  size = "md",
  icon,
  iconRight,
  className = "",
  ...rest
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: string;
  iconRight?: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const inner = (
    <>
      {icon && <Icon name={icon} className="h-4 w-4" strokeWidth={2} />}
      {children}
      {iconRight && (
        <Icon
          name={iconRight}
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={2}
        />
      )}
    </>
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  );
}
