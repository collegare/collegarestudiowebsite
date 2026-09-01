import Image from "next/image";
import { site, tiktokTiles } from "@/lib/site";

/**
 * "Follow along" strip that sits directly above the footer on every page.
 * Placeholder thumbnails for now — swap for real post thumbnails or TikTok's embed.
 */
export function TikTokStrip() {
  return (
    <section className="border-t border-ink/[0.14] bg-cream py-[clamp(54px,8vh,96px)]">
      <div className="shell flex flex-wrap items-end justify-between gap-3.5">
        <div>
          <p className="label !text-brand">Follow along</p>
          <h2 className="display mt-3.5 text-[clamp(1.9rem,4.2vw,3.2rem)] leading-none">
            The back office, <span className="ital text-brand">in public.</span>
          </h2>
        </div>
        <a
          href={site.tiktok}
          target="_blank"
          rel="noreferrer"
          className="label !text-ink border-b-[1.5px] border-brand pb-[3px] hover:!text-brand"
        >
          {site.tiktokHandle} on TikTok &rarr;
        </a>
      </div>

      <div className="mt-[clamp(28px,4vh,44px)] flex gap-3 overflow-x-auto px-[clamp(18px,3.4vw,44px)] pb-1.5">
        {tiktokTiles.map((slug, i) => (
          <a
            key={`${slug}-${i}`}
            href={site.tiktok}
            target="_blank"
            rel="noreferrer"
            className="group relative block aspect-[9/16] w-[clamp(170px,17vw,240px)] flex-none overflow-hidden bg-ink"
          >
            <Image
              src={`/img/${slug}.jpg`}
              alt=""
              fill
              sizes="240px"
              className="object-cover opacity-90 transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-105 group-hover:opacity-100"
            />
            <span className="absolute bottom-3 left-3 text-[9.5px] font-semibold uppercase tracking-label text-cream [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]">
              {site.tiktokHandle}
            </span>
            <span
              aria-hidden
              className="absolute right-3 top-3 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-ink/55 text-[10px] text-cream"
            >
              &#9654;
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
