"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  // TODO: connect to your mailing list provider before going live.
  const onSubmit = (e) => {
    e.preventDefault();
    setDone(true);
  };

  if (done) {
    return (
      <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white">
        <Check className="h-4 w-4" /> Thank you for subscribing!
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md overflow-hidden rounded-full bg-white p-1 md:w-auto md:min-w-[420px]">
      <label htmlFor="newsletter" className="sr-only">Email address</label>
      <input
        id="newsletter"
        type="email"
        required
        placeholder="Type your email address"
        className="min-w-0 flex-1 bg-transparent px-5 py-2.5 text-sm text-ink-900 placeholder:text-ink-700/50 focus:outline-none"
      />
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
      >
        <Send className="h-3.5 w-3.5" /> Submit
      </button>
    </form>
  );
}
