"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global scroll effects, driven from one place (mounted once in the root layout):
 *  - data-reveal : IntersectionObserver wipe-up, staggered per sibling group, with a
 *                  2.6s failsafe so a JS hiccup can never leave content hidden.
 *  - data-drift  : parallax translate on scroll, appended to the element's authored
 *                  transform (rotations survive), via a single rAF-throttled listener.
 * Re-runs on every route change. Respects prefers-reduced-motion.
 */
export function ScrollFX() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const driftEls = () => Array.from(document.querySelectorAll<HTMLElement>("[data-drift]"));

    const drift = () => {
      if (reduce) return;
      const h = window.innerHeight;
      driftEls().forEach((el) => {
        const speed = parseFloat(el.dataset.drift || "0") || 0;
        const r = el.getBoundingClientRect();
        const progress = (r.top + r.height / 2 - h / 2) / h;
        if (el.dataset.driftBase === undefined) {
          el.dataset.driftBase = el.style.transform || "none";
        }
        const base = el.dataset.driftBase;
        const shift = -progress * speed * 260;
        el.style.transform =
          (base === "none" ? "" : base + " ") + `translate3d(0,${shift.toFixed(1)}px,0)`;
      });
    };

    let raf = 0;
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(() => { raf = 0; drift(); });
    };

    // ---- reveal ----
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const show = (el: HTMLElement) => {
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.clipPath = "inset(-20% -20% -20% -20%)";
    };

    let io: IntersectionObserver | null = null;
    let failsafe: ReturnType<typeof setTimeout> | undefined;

    if (reduce) {
      els.forEach(show);
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            const group = el.parentElement
              ? Array.from(el.parentElement.querySelectorAll<HTMLElement>("[data-reveal]"))
              : [el];
            const i = Math.max(0, group.indexOf(el));
            el.style.transitionDelay = Math.min(i, 5) * 70 + "ms";
            show(el);
            io!.unobserve(el);
          });
        },
        { rootMargin: "0px 0px -8% 0px" }
      );

      els.forEach((el) => {
        if (el.dataset.revealed) return;
        el.dataset.revealed = "1";
        const heading = /^H[1-3]$/.test(el.tagName);
        el.style.opacity = "0";
        el.style.transform = heading ? "translateY(26px)" : "translateY(14px)";
        if (heading) el.style.clipPath = "inset(0 -20% 100% -20%)";
        el.style.transition = heading
          ? "opacity 900ms cubic-bezier(0.19,0.85,0.2,1), transform 900ms cubic-bezier(0.19,0.85,0.2,1), clip-path 900ms cubic-bezier(0.19,0.85,0.2,1)"
          : "opacity 700ms cubic-bezier(0.22,0.7,0.2,1), transform 700ms cubic-bezier(0.22,0.7,0.2,1)";
        io!.observe(el);
      });

      failsafe = setTimeout(() => els.forEach(show), 2600);
    }

    drift();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      if (io) io.disconnect();
      if (failsafe) clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
}
