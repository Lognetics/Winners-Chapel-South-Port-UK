"use client";

import { useState } from "react";
import { Field, Input, Select } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const presets = ["10", "25", "50", "100"];
const frequencies = [
  { key: "once", label: "One-off" },
  { key: "weekly", label: "Weekly" },
  { key: "monthly", label: "Monthly" },
] as const;

export function GiveForm() {
  const [submitted, setSubmitted] = useState(false);
  const [amount, setAmount] = useState("50");
  const [custom, setCustom] = useState("");
  const [freq, setFreq] = useState<(typeof frequencies)[number]["key"]>("once");

  if (submitted) {
    return (
      <div className="bg-white ring-1 ring-navy-900/10 shadow-xl rounded-2xl p-8 text-center sm:p-10">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25">
          <Icon name="shield-check" className="h-8 w-8" />
        </span>
        <p className="mt-6 font-display text-2xl text-navy-900">Thank you for your generosity!</p>
        <p className="mt-3 text-navy-600/80">
          You&apos;ll be redirected to our secure payment provider to complete your gift. Your
          partnership is advancing the Kingdom in Southport and beyond.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-gold-700 link-underline"
        >
          Give again
        </button>
      </div>
    );
  }

  const displayAmount = amount === "custom" ? custom || "0" : amount;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      <Field label="Choose a Fund">
        <Select required defaultValue="Tithe">
          <option>Tithe</option>
          <option>Offering</option>
          <option>Kingdom Projects</option>
          <option>CSR / Community</option>
          <option>Mission Support</option>
        </Select>
      </Field>

      <div>
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-600/80">
          Amount
        </span>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
          {presets.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setAmount(p)}
              className={`rounded-xl px-3 py-3 text-sm font-semibold transition ${
                amount === p
                  ? "bg-gold-500 text-navy-950"
                  : "bg-white ring-1 ring-navy-900/15 text-navy-800 hover:ring-gold-500"
              }`}
            >
              £{p}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setAmount("custom")}
            className={`rounded-xl px-3 py-3 text-sm font-semibold transition ${
              amount === "custom"
                ? "bg-gold-500 text-navy-950"
                : "bg-white ring-1 ring-navy-900/15 text-navy-800 hover:ring-gold-500"
            }`}
          >
            Other
          </button>
        </div>
        {amount === "custom" && (
          <div className="relative mt-3">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-600/80">
              £
            </span>
            <Input
              type="number"
              min="1"
              step="any"
              required
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              placeholder="Enter amount"
              className="pl-8"
            />
          </div>
        )}
      </div>

      <div>
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-600/80">
          Frequency
        </span>
        <div className="grid grid-cols-3 gap-2">
          {frequencies.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFreq(f.key)}
              className={`rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                freq === f.key
                  ? "bg-gold-500 text-navy-950"
                  : "bg-white ring-1 ring-navy-900/15 text-navy-800 hover:ring-gold-500"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name">
          <Input required placeholder="Jane Doe" autoComplete="name" />
        </Field>
        <Field label="Email">
          <Input required type="email" placeholder="you@email.com" autoComplete="email" />
        </Field>
      </div>

      <label className="flex items-start gap-3 rounded-xl bg-navy-900/5 p-4 text-sm text-navy-800 ring-1 ring-navy-900/10">
        <input type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 accent-gold-500" />
        <span>
          <span className="font-semibold text-navy-900">Add Gift Aid.</span> I am a UK taxpayer and
          would like Winners Chapel to reclaim 25% on my donation at no extra cost to me.
        </span>
      </label>

      <Button type="submit" icon="shield-check" className="w-full">
        Proceed to Secure Payment{" "}
        {freq !== "once" && `(${frequencies.find((f) => f.key === freq)?.label})`} · £{displayAmount}
      </Button>
      <p className="flex items-center justify-center gap-2 text-center text-xs text-navy-600/80">
        <Icon name="shield" className="h-3.5 w-3.5" /> 256-bit encrypted · Powered by a trusted
        payment provider
      </p>
    </form>
  );
}
