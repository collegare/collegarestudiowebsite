"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * Collective film band. Idle: no tint. On hover (or first tap) the red multiply
 * and ink dim rise, and the centered copy fades/rises in. Click only ever reveals
 * (never hides the copy under the cursor); the CTAs stop propagation.
 */
export function FilmBand() {
  const [film, setFilm] = useState(false);

  return (
    <section
      onMouseEnter={() => setFilm(true)}
      onMouseLeave={() => setFilm(false)}
      onClick={() => setFilm(true)}
      className="striped relative flex min-h-[min(78vh,720px)] items-center justify-center overflow-hidden"
    >
      <video
        src="/img/collective-film.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover [filter:saturate(0.9)]"
      />
      <div
        className="absolute inset-0 bg-brand mix-blend-multiply transition-opacity duration-700"
        style={{ opacity: film ? 0.92 : 0 }}
      />
      <div
        className="absolute inset-0 bg-ink transition-opacity duration-700"
        style={{ opacity: film ? 0.44 : 0.06 }}
      />

      <div
        className="relative max-w-[780px] px-[clamp(20px,5vw,60px)] py-[clamp(40px,7vw,80px)] text-center text-cream transition-[opacity,transform] duration-[620ms] ease-[cubic-bezier(0.2,0.75,0.2,1)]"
        style={{
          opacity: film ? 1 : 0,
          transform: film ? "translateY(0) scale(1)" : "translateY(18px) scale(0.985)",
        }}
      >
        <p className="text-[11px] font-semibold uppercase tracking-label opacity-85">The Collective</p>
        <h2 className="display mt-[18px] text-[clamp(2rem,4.6vw,3.6rem)] leading-[0.98]">
          The room, the tools, <span className="ital">and the brief board.</span>
        </h2>
        <p className="mx-auto mt-[18px] max-w-[52ch] text-[1.02rem] leading-[1.65] text-cream/[0.86] [text-wrap:pretty]">
          Membership gets you every template we build, the deal reviews, the standups — and first look at the
          campaign briefs that come through the studio. It opens with the Academy, to the waitlist first.
        </p>
        <div className="mt-[30px] flex flex-wrap justify-center gap-3">
          <Link
            href="/waitlist"
            onClick={(e) => e.stopPropagation()}
            className="rounded-[2px] bg-cream px-[26px] py-[15px] text-[11.5px] font-semibold uppercase tracking-[0.14em] text-brand"
          >
            Join the waitlist &rarr;
          </Link>
          <Link
            href="/collective"
            onClick={(e) => e.stopPropagation()}
            className="rounded-full border-[1.5px] border-cream/70 px-[26px] py-[15px] text-[11.5px] font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:bg-cream/[0.18]"
          >
            What&rsquo;s inside
          </Link>
        </div>
      </div>
    </section>
  );
}
