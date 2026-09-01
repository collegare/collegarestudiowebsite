"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLeft, navRight, site } from "@/lib/site";
import { useCart } from "@/components/cart";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, setOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Route change closes the mobile menu.
  useEffect(() => setMenuOpen(false), [pathname]);

  // Never leave the menu (and its scroll lock) behind when we cross into desktop.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  // Only the homepage hero is dark enough to sit the header over transparently —
  // and not while the cream menu panel is under it.
  const overHero = isHome && !scrolled && !menuOpen;

  const linkCls =
    "font-body text-[11.5px] font-semibold uppercase tracking-[0.14em] opacity-[0.78] transition-opacity duration-200 hover:opacity-100";

  const barCls = "absolute left-0 h-[1.5px] w-full bg-current transition-all duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)]";

  return (
    <>
      {/* Announcement bar */}
      <Link
        href="/waitlist"
        className="fixed inset-x-0 top-0 z-[61] flex h-[34px] items-center justify-center gap-2.5 bg-brand px-4 text-center text-[10.5px] font-semibold uppercase tracking-[0.16em] text-cream transition-colors duration-200 hover:bg-brand-hover"
      >
        <span className="truncate">The Academy and the Collective open to the waitlist first</span>
        <span className="hidden opacity-75 sm:inline">Join &rarr;</span>
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
          {/* Left: hamburger on mobile, nav on desktop */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className="-ml-2 inline-flex h-11 w-11 items-center justify-center md:hidden"
            >
              <span aria-hidden className="relative block h-[13px] w-[21px]">
                <span className={`${barCls} ${menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`} />
                <span className={`${barCls} ${menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-full -translate-y-full"}`} />
              </span>
            </button>

            <nav className="hidden items-center gap-[clamp(10px,1.8vw,26px)] md:flex">
              {navLeft.map((item) => (
                <Link key={item.href} href={item.href} className={linkCls}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

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

          {/* Right: nav on desktop, cart always */}
          <nav className="flex items-center justify-end gap-[clamp(10px,1.8vw,26px)]">
            <span className="hidden items-center gap-[clamp(10px,1.8vw,26px)] md:flex">
              {navRight.map((item) => (
                <Link key={item.href} href={item.href} className={linkCls}>
                  {item.label}
                </Link>
              ))}
            </span>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                setOpen(true);
              }}
              aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
              className="-mr-1 inline-flex items-center gap-[7px] whitespace-nowrap px-1 py-2 font-body text-[11.5px] font-semibold uppercase tracking-[0.14em] transition-opacity duration-200 hover:opacity-70"
            >
              <span aria-hidden className="relative inline-block h-3 w-[13px] rounded-b-[2px] border-[1.5px] border-t-0 border-current">
                <span className="absolute left-1/2 top-[-6px] h-[7px] w-2 -translate-x-1/2 rounded-t-[5px] border-[1.5px] border-b-0 border-current" />
              </span>
              <span className="hidden sm:inline">Cart </span>({count})
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu panel — sits under the chrome so the header stays live above it */}
      <div
        id="mobile-nav"
        aria-hidden={!menuOpen}
        className={`fixed inset-x-0 bottom-0 z-[59] flex flex-col bg-cream transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] md:hidden ${
          menuOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        style={{ top: "var(--chrome-offset)" }}
      >
        <nav className="flex-1 overflow-y-auto px-[clamp(18px,6vw,36px)] pt-8">
          {[...navLeft, ...navRight].map((item, i) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline gap-4 border-b border-ink/[0.1] py-[18px]"
              >
                <span className="w-6 shrink-0 text-[10px] font-semibold tracking-label text-mute">
                  0{i + 1}
                </span>
                <span
                  className={`display text-[clamp(1.9rem,9vw,2.6rem)] leading-[1.05] transition-colors ${
                    active ? "text-brand" : "text-ink"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-ink/[0.14] px-[clamp(18px,6vw,36px)] py-6">
          <p className="label !text-brand">{site.motto}</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-graphite">
            <a href={`mailto:${site.email}`} tabIndex={menuOpen ? 0 : -1} className="hover:text-brand">
              {site.email}
            </a>
            <a
              href={site.tiktok}
              target="_blank"
              rel="noreferrer"
              tabIndex={menuOpen ? 0 : -1}
              className="hover:text-brand"
            >
              {site.tiktokHandle}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
