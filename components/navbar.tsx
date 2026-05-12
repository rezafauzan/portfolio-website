"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";

export type NavItem = { id: string; label: string };

export function Navbar({ items }: { items: NavItem[] }) {
  const ids = useMemo(() => items.map((i) => i.id), [items]);
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-white/8 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="#top"
          className="group inline-flex items-center gap-2 font-semibold tracking-tight text-white"
        >
          <span className="relative">
            <span className="text-gradient">Portfolio</span>
            <span className="absolute -inset-x-2 -inset-y-3 -z-10 rounded-xl bg-cyan-300/10 opacity-0 blur-lg transition group-hover:opacity-100" />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm font-medium text-white/70 transition hover:text-white",
                  isActive && "text-white",
                )}
              >
                {item.label}
                {isActive ? (
                  <span className="absolute inset-x-2 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-cyan-300/90 to-transparent" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={cn("md:hidden", open ? "block" : "hidden")}>
        <div className="mx-auto w-full max-w-6xl px-5 pb-5 sm:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-2">
            {items.map((item) => {
              const isActive = active === item.id;
              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white",
                    isActive && "bg-white/5 text-white",
                  )}
                >
                  <span>{item.label}</span>
                  {isActive ? (
                    <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.6)]" />
                  ) : null}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

