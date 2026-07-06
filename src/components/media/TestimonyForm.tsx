"use client";

import { useState } from "react";
import { Field, Input, Textarea, Select } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function TestimonyForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-white p-10 text-center ring-1 ring-navy-900/10 shadow-xl">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/30">
          <Icon name="check" className="h-8 w-8" strokeWidth={2.5} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-navy-900">
          Glory to God!
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-navy-600/80">
          Thank you for sharing what the Lord has done. Our media team will
          reach out to you before we publish your testimony.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-gold-700 link-underline"
        >
          Share another testimony
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
      className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-navy-900/10 sm:p-10"
    >
      <h3 className="font-display text-2xl font-semibold text-navy-900">
        Submit your <span className="text-gold-gradient">testimony</span>
      </h3>
      <p className="mt-2 text-sm text-navy-600/80">
        Your story could be the miracle someone else is waiting to hear.
      </p>
      <div className="mt-6 grid gap-5">
        <Field label="Your Name" htmlFor="t-name">
          <Input id="t-name" name="name" required placeholder="Jane Doe" />
        </Field>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Category" htmlFor="t-cat">
            <Select id="t-cat" name="category" defaultValue="">
              <option value="" disabled>
                Select a category
              </option>
              <option>Healing</option>
              <option>Marriage</option>
              <option>Finance</option>
              <option>Career</option>
              <option>Deliverance</option>
              <option>Family</option>
              <option>Other</option>
            </Select>
          </Field>
          <Field label="Format" htmlFor="t-type">
            <Select id="t-type" name="type" defaultValue="">
              <option value="" disabled>
                Select a format
              </option>
              <option value="written">Written</option>
              <option value="video">Video</option>
              <option value="audio">Audio</option>
            </Select>
          </Field>
        </div>
        <Field label="Your Testimony" htmlFor="t-body">
          <Textarea
            id="t-body"
            name="testimony"
            required
            placeholder="Tell us what God has done…"
          />
        </Field>
        <Button type="submit" iconRight="arrow-right" className="w-full sm:w-auto">
          Share My Testimony
        </Button>
      </div>
    </form>
  );
}
