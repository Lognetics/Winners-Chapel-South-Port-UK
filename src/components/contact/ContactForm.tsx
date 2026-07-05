"use client";

import { useState } from "react";
import { Field, Input, Textarea, Select } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="glass rounded-2xl p-8 text-center sm:p-10">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/15 text-gold-300 ring-1 ring-gold-400/30">
          <Icon name="check" className="h-8 w-8" />
        </span>
        <p className="mt-6 font-display text-2xl text-cream">Message sent!</p>
        <p className="mt-3 text-cream/60">
          Thank you for reaching out. A member of our team will be in touch with you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-gold-300 link-underline"
        >
          Send another message
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
        <Field label="Full Name">
          <Input required placeholder="Jane Doe" autoComplete="name" />
        </Field>
        <Field label="Email">
          <Input required type="email" placeholder="you@email.com" autoComplete="email" />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone">
          <Input type="tel" placeholder="07000 000000" autoComplete="tel" />
        </Field>
        <Field label="Subject">
          <Select required defaultValue="">
            <option value="" disabled>
              Choose a subject
            </option>
            <option>General Enquiry</option>
            <option>First Timers</option>
            <option>Prayer &amp; Counselling</option>
            <option>WOFBI / Bible Training</option>
            <option>CSR / Volunteering</option>
            <option>Giving &amp; Gift Aid</option>
            <option>Media &amp; Press</option>
          </Select>
        </Field>
      </div>
      <Field label="Message">
        <Textarea required placeholder="How can we help you?" />
      </Field>
      <Button type="submit" iconRight="arrow-right" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
