import Link from "next/link";
import { site, ctaLabel, footerCols, footerMarquee } from "@/lib/site";

export function SiteFooter() {
  const run = Array(5).fill(footerMarquee).flat();
  const track = [...run, ...run];

  return (
    <footer
      className="relative text-ink"
      style={{
        backgroundColor: "#FBF3E6",
        backgroundImage: "url('/img/stripe.jpg')",
        backgroundSize: "auto 260px",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Cream veil over the stripe fabric */}
      <div className="pointer-events-none absolute inset-0 bg-[rgba(253,250,240,0.82)]" />

      {/* Marquee */}
      <div className="relative overflow-hidden bg-brand py-3.5 text-cream">
        <div className="flex w-max animate-marq-42 gap-7 whitespace-nowrap">
          {track.map((w, i) => (
            <span key={i} className="flex items-center gap-7 text-[12px] font-semibold uppercase tracking-[0.16em]">
              {w}
              <span className="opacity-55">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="relative mx-auto grid max-w-shell gap-[clamp(32px,5vw,70px)] px-[clamp(18px,3.4vw,44px)] py-[clamp(50px,7vh,82px)] [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo-red.png" alt="Collegare Studio" className="h-auto w-[min(280px,70%)]" />
          <p className="mt-5 max-w-[34ch] leading-[1.7] text-graphite">{site.motto}</p>
          <p className="mt-1.5 font-serif text-[1.3rem] italic text-brand">{site.tagline}</p>
          <Link
            href="/waitlist"
            className="mt-[22px] inline-block rounded-full bg-brand px-[26px] py-3.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:bg-brand-deep"
          >
            {ctaLabel}
          </Link>
        </div>

        <div className="grid gap-[26px] [grid-template-columns:repeat(auto-fit,minmax(130px,1fr))]">
          {footerCols.map((col) => (
            <div key={col.title}>
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-mute">{col.title}</p>
              <ul className="mt-4 grid list-none gap-[11px] p-0">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("mailto:") ? (
                      <a href={l.href} className="text-[0.93rem] text-ink transition-colors hover:text-brand">
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href} className="text-[0.93rem] text-ink transition-colors hover:text-brand">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-mute">Social</p>
            <ul className="mt-4 grid list-none gap-[11px] p-0">
              <li>
                <a href={site.tiktok} target="_blank" rel="noreferrer" className="text-[0.93rem] text-ink transition-colors hover:text-brand">
                  TikTok
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="text-[0.93rem] text-ink transition-colors hover:text-brand">
                  Email us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal line */}
      <div className="relative mx-auto flex max-w-shell flex-wrap items-center justify-between gap-3 border-t border-ink/[0.18] px-[clamp(18px,3.4vw,44px)] py-5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-mute-soft">
        <span>&copy; 2026 Collegare Studio</span>
        <span>{site.email}</span>
      </div>
    </footer>
  );
}
