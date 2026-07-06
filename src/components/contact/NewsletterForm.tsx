"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="font-display text-xl text-navy-900">
        You&apos;re subscribed. Watch your inbox for encouragement and updates.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <Input required type="email" placeholder="Your email address" autoComplete="email" />
      <Button type="submit" iconRight="arrow-right" className="shrink-0">
        Subscribe
      </Button>
    </form>
  );
}
