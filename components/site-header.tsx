"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLeft, navRight } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Only the homepage hero is dark enough to sit the header over transparently.
  const overHero = isHome && !scrolled;

  const linkCls =
    "font-body text-[11.5px] font-semibold uppercase tracking-[0.14em] opacity-[0.78] transition-opacity duration-200 hover:opacity-100";

  return (
    <>
      {/* Announcement bar */}
      <Link
        href="/waitlist"
        className="fixed inset-x-0 top-0 z-[61] flex h-[34px] items-center justify-center gap-2.5 bg-brand px-4 text-center text-[10.5px] font-semibold uppercase tracking-[0.16em] text-cream transition-colors duration-200 hover:bg-brand-hover"
      >
        <span className="truncate">The Academy and the Collective open to the waitlist first</span>
        <span className="opacity-75">Join &rarr;</span>
      </Link>

      {/* Header */}
      <header
        className="fixed inset-x-0 top-[34px] z-[60] border-b backdrop-blur-[10px] transition-[background-color,border-color,color] duration-[400ms]"
        style={{
          backgroundColor: overHero ? "rgba(26,21,18,0.06)" : "rgba(253,250,240,0.94)",
          borderColor: overHero ? "rgba(253,250,240,0.2)" : "rgba(26,21,18,0.12)",
          color: overHero ? "#FDFAF0" : "#1A1512",
        }}
      >
        <div className="mx-auto grid min-h-[72px] max-w-shell grid-cols-[1fr_auto_1fr] items-center gap-[clamp(12px,3vw,32px)] px-[clamp(16px,3.4vw,44px)]">
          {/* Left nav */}
          <nav className="flex flex-wrap items-center gap-[clamp(10px,1.8vw,26px)]">
            {navLeft.map((item) => (
              <Link key={item.href} href={item.href} className={linkCls}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Center logo — two stacked images cross-faded by opacity */}
          <Link href="/" aria-label="Collegare Studio" className="relative flex h-[19px] items-center justify-self-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/logo-red.png"
              alt="Collegare Studio"
              className="h-[19px] w-auto transition-opacity duration-[400ms]"
              style={{ opacity: overHero ? 0 : 1 }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/logo-cream.png"
              alt=""
              aria-hidden
              className="absolute left-0 top-0 h-[19px] w-auto transition-opacity duration-[400ms]"
              style={{ opacity: overHero ? 1 : 0 }}
            />
          </Link>

          {/* Right nav */}
          <nav className="flex flex-wrap items-center justify-end gap-[clamp(10px,1.8vw,26px)]">
            {navRight.map((item) => (
              <Link key={item.href} href={item.href} className={linkCls}>
                {item.label}
              </Link>
            ))}
            <Link
              href="/shop"
              className="inline-flex items-center gap-[7px] font-body text-[11.5px] font-semibold uppercase tracking-[0.14em] transition-opacity duration-200 hover:opacity-70"
            >
              <span aria-hidden className="relative inline-block h-3 w-[13px] rounded-b-[2px] border-[1.5px] border-t-0 border-current">
                <span className="absolute left-1/2 top-[-6px] h-[7px] w-2 -translate-x-1/2 rounded-t-[5px] border-[1.5px] border-b-0 border-current" />
              </span>
              Cart (0)
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
