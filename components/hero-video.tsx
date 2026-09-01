"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** Path under /public, e.g. "/img/hero.mp4". Null renders the drifting placeholder. */
  src?: string | null;
  /** First-frame JPG. Shows before the video decodes and stays up for both fallbacks. */
  poster?: string | null;
  children: React.ReactNode;
};

/**
 * Full-bleed silent looping hero.
 *
 * Falls back gracefully in three cases:
 *   1. No `src` yet           -> drifting gradient placeholder
 *   2. prefers-reduced-motion -> poster still, video never plays
 *   3. Autoplay blocked       -> poster still (iOS low-power mode does this)
 */
export function HeroVideo({ src, poster, children }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reduced) {
      v.pause();
      return;
    }
    // Some browsers reject autoplay until the element is muted in JS too.
    v.muted = true;
    void v.play().catch(() => {
      /* poster stays up — nothing to do */
    });
  }, [reduced, src]);

  return (
    <section className="striped relative h-auto min-h-[max(660px,100svh)] overflow-hidden">
      {src ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster ?? undefined}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          tabIndex={-1}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 animate-drift bg-[radial-gradient(120%_90%_at_20%_15%,#5E0900_0%,#240A06_55%,#1A1512_100%)] bg-[length:150%_150%]"
        />
      )}

      {/* Required overlays — footage swings near-white and cream type fails without them */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,21,18,0.62)_0%,rgba(26,21,18,0.42)_22%,rgba(26,21,18,0.5)_48%,rgba(26,21,18,0.6)_74%,rgba(26,21,18,0.78)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_48%,rgba(26,21,18,0.5)_0%,rgba(26,21,18,0.22)_55%,rgba(26,21,18,0)_80%)]"
      />

      {children}
    </section>
  );
}
