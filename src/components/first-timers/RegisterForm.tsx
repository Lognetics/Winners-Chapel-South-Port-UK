"use client";

import { useState } from "react";
import { Field, Input, Select } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-white ring-1 ring-navy-900/10 shadow-xl rounded-2xl p-8 text-center sm:p-10">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25">
          <Icon name="gift" className="h-8 w-8" />
        </span>
        <p className="mt-6 font-display text-2xl text-navy-900">We saved you a seat!</p>
        <p className="mt-3 text-navy-600/80">
          Thank you for registering. A member of our welcome team will reach out, and there&apos;s a
          free welcome gift waiting for you at the front desk on your visit.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-gold-700 link-underline"
        >
          Register another person
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
        <Field label="Number in Your Party">
          <Select defaultValue="1">
            <option value="1">Just me</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5 or more</option>
          </Select>
        </Field>
      </div>
      <Field label="Which Service Will You Join?">
        <Select required defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          <option>Sunday First Service — 8:00 AM</option>
          <option>Sunday Second Service — 10:30 AM</option>
          <option>Midweek Communion — Wed 6:00 PM</option>
          <option>Not sure yet</option>
        </Select>
      </Field>
      <Field label="How Did You Hear About Us?">
        <Select defaultValue="">
          <option value="" disabled>
            Please choose
          </option>
          <option>A friend or family member</option>
          <option>Social media</option>
          <option>Google / online search</option>
          <option>Walked past the church</option>
          <option>Community outreach</option>
          <option>Other</option>
        </Select>
      </Field>
      <Button type="submit" iconRight="arrow-right" className="w-full">
        Register My Visit
      </Button>
      <p className="text-center text-xs text-navy-600/80">
        We&apos;ll only use your details to welcome you. No spam, ever.
      </p>
    </form>
  );
}
