"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Field, Input, Textarea, Select } from "@/components/ui/Field";
import { Icon } from "@/components/ui/Icon";
import { ministries } from "@/lib/site";

export function JoinForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="bg-white shadow-xl rounded-3xl p-10 text-center ring-1 ring-navy-900/10">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25">
          <Icon name="check" className="h-8 w-8" strokeWidth={2} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-navy-900">
          Welcome to the team!
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-navy-600/80">
          Thank you for stepping forward to serve. A ministry coordinator will
          reach out to you within a few days to walk you through the next steps.
        </p>
        <div className="mt-7">
          <Button variant="outline" onClick={() => setSent(false)} iconRight="arrow-right">
            Submit another response
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="bg-white shadow-xl rounded-3xl p-7 ring-1 ring-navy-900/10 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="jf-name">
          <Input id="jf-name" name="name" placeholder="Jane Doe" required />
        </Field>
        <Field label="Email Address" htmlFor="jf-email">
          <Input id="jf-email" name="email" type="email" placeholder="you@email.com" required />
        </Field>
        <Field label="Phone Number" htmlFor="jf-phone">
          <Input id="jf-phone" name="phone" type="tel" placeholder="+44 …" />
        </Field>
        <Field label="Ministry of Interest" htmlFor="jf-ministry">
          <Select id="jf-ministry" name="ministry" defaultValue="" required>
            <option value="" disabled>
              Choose a ministry…
            </option>
            {ministries.map((m) => (
              <option key={m.slug} value={m.slug}>
                {m.name}
              </option>
            ))}
          </Select>
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Tell us about yourself" htmlFor="jf-message">
          <Textarea
            id="jf-message"
            name="message"
            placeholder="Share your gifts, availability, or any questions you have…"
          />
        </Field>
      </div>
      <div className="mt-7 flex flex-wrap items-center gap-4">
        <Button type="submit" icon="hand-heart">
          Join This Ministry
        </Button>
        <p className="text-xs text-navy-600/80">
          We&apos;ll keep your details private and only use them to connect you.
        </p>
      </div>
    </form>
  );
}
