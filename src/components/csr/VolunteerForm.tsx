"use client";

import { useState } from "react";
import { Field, Input, Select } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-white p-10 text-center ring-1 ring-navy-900/10 shadow-xl">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25">
          <Icon name="check" className="h-8 w-8" strokeWidth={2.5} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-navy-900">
          Welcome to the team!
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-navy-600/80">
          Thank you for offering your time and heart. Our community team will be
          in touch with the next volunteer session and how to get started.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-gold-700 link-underline"
        >
          Register someone else
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
      className="rounded-3xl bg-white p-8 ring-1 ring-navy-900/10 shadow-xl sm:p-10"
    >
      <h3 className="font-display text-2xl font-semibold text-navy-900">
        Become a <span className="text-gold-gradient">volunteer</span>
      </h3>
      <p className="mt-2 text-sm text-navy-600/80">
        Lend your time, gifts and heart to serve Southport. Every hour makes a
        difference.
      </p>
      <div className="mt-6 grid gap-5">
        <Field label="Full Name" htmlFor="v-name">
          <Input id="v-name" name="name" required placeholder="Jane Doe" />
        </Field>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Email" htmlFor="v-email">
            <Input
              id="v-email"
              name="email"
              type="email"
              required
              placeholder="you@email.com"
            />
          </Field>
          <Field label="Phone" htmlFor="v-phone">
            <Input
              id="v-phone"
              name="phone"
              type="tel"
              required
              placeholder="+44 7000 000000"
            />
          </Field>
        </div>
        <Field label="Area of Interest" htmlFor="v-area">
          <Select id="v-area" name="area" defaultValue="">
            <option value="" disabled>
              Where would you like to serve?
            </option>
            <option>Food Bank</option>
            <option>Homeless Support</option>
            <option>Employment Training</option>
            <option>Skills Development</option>
            <option>School Support</option>
            <option>Community Partnerships</option>
            <option>Wherever I&apos;m needed</option>
          </Select>
        </Field>
        <Field label="Availability" htmlFor="v-avail">
          <Select id="v-avail" name="availability" defaultValue="">
            <option value="" disabled>
              When are you free?
            </option>
            <option>Weekday mornings</option>
            <option>Weekday afternoons</option>
            <option>Weekday evenings</option>
            <option>Weekends</option>
            <option>Flexible</option>
          </Select>
        </Field>
        <Button type="submit" iconRight="arrow-right" className="w-full sm:w-auto">
          Sign Me Up
        </Button>
      </div>
    </form>
  );
}
