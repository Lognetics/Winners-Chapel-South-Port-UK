import type { ReactNode } from "react";

const inputCls =
  "w-full rounded-xl bg-navy-900/60 px-4 py-3 text-sm text-cream outline-none ring-1 ring-gold-500/15 transition placeholder:text-cream/35 focus:ring-gold-400";

export function Label({ children, htmlFor }: { children: ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cream/60">
      {children}
    </label>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${inputCls} ${props.className ?? ""}`} />;
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${inputCls} min-h-32 resize-y ${props.className ?? ""}`} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`${inputCls} ${props.className ?? ""}`} />;
}

export function Field({ label, htmlFor, children }: { label: string; htmlFor?: string; children: ReactNode }) {
  return (
    <div>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}

/** A styled, non-functional form wrapper. Prevents default submit (no backend yet). */
export function DemoForm({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <form
      className={className}
      action="#"
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...({ onSubmit: undefined } as any)}
    >
      {children}
    </form>
  );
}
