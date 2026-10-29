"use client";

import { Send } from "lucide-react";

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-300/50";

export function ContactForm({ email }: { email: string }) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const from = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Portfolio inquiry from ${name}`;
    const body = `${message}\n\n— ${name}${from ? ` (${from})` : ""}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5 space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs font-medium text-white/60">Name</span>
          <input className={`h-11 ${fieldClass}`} placeholder="Your name" name="name" required />
        </label>
        <label className="space-y-2">
          <span className="text-xs font-medium text-white/60">Email</span>
          <input
            className={`h-11 ${fieldClass}`}
            placeholder="you@company.com"
            name="email"
            type="email"
            required
          />
        </label>
      </div>
      <label className="block space-y-2">
        <span className="text-xs font-medium text-white/60">Message</span>
        <textarea
          className={`min-h-[132px] resize-none py-3 ${fieldClass}`}
          placeholder="Tell me about the role or project…"
          name="message"
          required
        />
      </label>
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-white/50">Opens your email app with the message pre-filled.</p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300/15 px-5 py-2.5 text-sm font-medium text-cyan-50 ring-1 ring-inset ring-cyan-300/40 hover:bg-cyan-300/20 hover:ring-cyan-300/55"
        >
          <Send className="h-4 w-4" />
          Send
        </button>
      </div>
    </form>
  );
}
