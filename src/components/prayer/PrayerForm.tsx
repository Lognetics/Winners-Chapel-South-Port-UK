"use client";

import { useState } from "react";
import { Field, Input, Textarea, Select } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function PrayerForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="glass rounded-2xl p-8 text-center sm:p-10">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/15 text-gold-300 ring-1 ring-gold-400/30">
          <Icon name="flame" className="h-8 w-8" />
        </span>
        <p className="mt-6 font-display text-2xl text-cream">Your request is received.</p>
        <p className="mt-3 text-cream/60">
          Our prayer team is standing with you in agreement. &ldquo;If two of you agree on earth as
          touching anything they ask, it shall be done.&rdquo; Expect your testimony.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-gold-300 link-underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name (optional)">
          <Input placeholder="You may remain anonymous" autoComplete="name" />
        </Field>
        <Field label="Email">
          <Input required type="email" placeholder="you@email.com" autoComplete="email" />
        </Field>
      </div>
      <Field label="Category">
        <Select required defaultValue="">
          <option value="" disabled>
            Select a category
          </option>
          <option>Healing</option>
          <option>Finance</option>
          <option>Family</option>
          <option>Career</option>
          <option>Salvation</option>
          <option>Thanksgiving</option>
          <option>Other</option>
        </Select>
      </Field>
      <Field label="Your Prayer Request">
        <Textarea
          required
          placeholder="Share what's on your heart. Our team will pray over every word."
        />
      </Field>
      <div className="space-y-3 rounded-xl bg-navy-900/40 p-4 ring-1 ring-gold-500/10">
        <label className="flex items-start gap-3 text-sm text-cream/70">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 accent-gold-500"
          />
          <span>Keep this request private (seen only by our pastoral prayer team).</span>
        </label>
        <label className="flex items-start gap-3 text-sm text-cream/70">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 accent-gold-500"
          />
          <span>This is urgent — I need prayer as soon as possible.</span>
        </label>
      </div>
      <Button type="submit" iconRight="arrow-right" className="w-full">
        Send Prayer Request
      </Button>
    </form>
  );
}
