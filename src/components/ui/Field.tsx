import type { ReactNode } from "react";

const inputCls =
  "w-full rounded-xl bg-white px-4 py-3 text-sm text-navy-900 outline-none ring-1 ring-navy-900/15 transition placeholder:text-navy-400 focus:ring-2 focus:ring-gold-500";

export function Label({ children, htmlFor }: { children: ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-600">
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
