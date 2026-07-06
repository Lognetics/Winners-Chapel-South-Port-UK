"use client";

import { useState } from "react";
import { Field, Input, Select } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-white p-10 text-center ring-1 ring-navy-900/10 shadow-xl">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25">
          <Icon name="check" className="h-8 w-8" strokeWidth={2.5} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-navy-900">
          You&apos;re enrolled in the Word!
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-navy-600/80">
          Thank you for registering. Our WOFBI coordinator will email you your
          class schedule, materials and next steps shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-gold-700 link-underline"
        >
          Register another student
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
        Register for <span className="text-gold-gradient">WOFBI</span>
      </h3>
      <p className="mt-2 text-sm text-navy-600/80">
        Take your next step in the Word. Complete the form and we&apos;ll take it
        from there.
      </p>
      <div className="mt-6 grid gap-5">
        <Field label="Full Name" htmlFor="w-name">
          <Input id="w-name" name="name" required placeholder="Jane Doe" />
        </Field>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Email" htmlFor="w-email">
            <Input
              id="w-email"
              name="email"
              type="email"
              required
              placeholder="you@email.com"
            />
          </Field>
          <Field label="Phone" htmlFor="w-phone">
            <Input
              id="w-phone"
              name="phone"
              type="tel"
              required
              placeholder="+44 7000 000000"
            />
          </Field>
        </div>
        <Field label="Course" htmlFor="w-course">
          <Select id="w-course" name="course" defaultValue="">
            <option value="" disabled>
              Choose a course
            </option>
            <option value="BCC">BCC — Basic Certificate Course</option>
            <option value="LCC">LCC — Leadership Certificate Course</option>
            <option value="LDC">LDC — Leadership Diploma Course</option>
          </Select>
        </Field>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Study Mode" htmlFor="w-mode">
            <Select id="w-mode" name="mode" defaultValue="">
              <option value="" disabled>
                Select mode
              </option>
              <option value="campus">On Campus — Southport</option>
              <option value="online">Online</option>
            </Select>
          </Field>
          <Field label="Prior WOFBI Level" htmlFor="w-level">
            <Select id="w-level" name="level" defaultValue="">
              <option value="" disabled>
                Select level
              </option>
              <option value="none">None — I&apos;m new</option>
              <option value="bcc">Completed BCC</option>
              <option value="lcc">Completed LCC</option>
              <option value="ldc">Completed LDC</option>
            </Select>
          </Field>
        </div>
        <Button type="submit" iconRight="arrow-right" className="w-full sm:w-auto">
          Submit Registration
        </Button>
      </div>
    </form>
  );
}
