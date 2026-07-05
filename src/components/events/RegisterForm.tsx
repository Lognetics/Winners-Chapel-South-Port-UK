"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Field, Input, Select } from "@/components/ui/Field";
import { Icon } from "@/components/ui/Icon";
import { events } from "@/lib/site";

export function RegisterForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="glass rounded-3xl p-10 text-center ring-1 ring-gold-500/20">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/15 text-gold-300 ring-1 ring-gold-500/30">
          <Icon name="calendar" className="h-8 w-8" strokeWidth={2} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-cream">
          You&apos;re registered!
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-cream/65">
          We can&apos;t wait to celebrate with you. A confirmation and event
          details will be sent to your email shortly.
        </p>
        <div className="mt-7">
          <Button variant="outline" onClick={() => setSent(false)} iconRight="arrow-right">
            Register for another event
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
      className="glass rounded-3xl p-7 ring-1 ring-gold-500/15 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="rf-name">
          <Input id="rf-name" name="name" placeholder="Jane Doe" required />
        </Field>
        <Field label="Email Address" htmlFor="rf-email">
          <Input id="rf-email" name="email" type="email" placeholder="you@email.com" required />
        </Field>
        <Field label="Select Event" htmlFor="rf-event">
          <Select id="rf-event" name="event" defaultValue="" required>
            <option value="" disabled>
              Choose an event…
            </option>
            {events.map((ev) => (
              <option key={ev.title} value={ev.title}>
                {ev.title}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Number Attending" htmlFor="rf-count">
          <Select id="rf-count" name="attending" defaultValue="1">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "person" : "people"}
              </option>
            ))}
          </Select>
        </Field>
      </div>
      <div className="mt-7 flex flex-wrap items-center gap-4">
        <Button type="submit" icon="calendar">
          Confirm Registration
        </Button>
        <p className="text-xs text-cream/45">Free to attend · all are welcome.</p>
      </div>
    </form>
  );
}
