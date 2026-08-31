"use client";

import Link from "next/link";
import { useState } from "react";
import { nav } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <div className="shell flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-[26px] leading-none tracking-[-0.02em]">Collegare</span>
          <span className="label hidden sm:inline">Studio</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline font-mono text-[11px] uppercase tracking-label text-graphite hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/waitlist"
            className="hidden rounded-full bg-oxblood px-5 py-2.5 font-mono text-[11px] uppercase tracking-label text-linen transition-colors hover:bg-oxblood-deep sm:inline-block"
          >
            Join the waitlist
          </Link>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span className={`h-px w-5 bg-ink transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-ink/10 bg-paper lg:hidden">
          <div className="shell flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/5 py-4 font-display text-2xl"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/waitlist"
              onClick={() => setOpen(false)}
              className="mt-5 rounded-full bg-oxblood px-5 py-3.5 text-center font-mono text-[11px] uppercase tracking-label text-linen"
            >
              Join the waitlist
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
