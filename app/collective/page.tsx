import type { Metadata } from "next";
import Image from "next/image";
import { Btn } from "@/components/ui";
import { WaitlistForm } from "@/components/waitlist-form";
import { site, membership, rituals, houseRules } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Collective",
  description:
    "Brand partnership and networking opportunities for a community of talented millennial and Gen-Z creators. First look at the campaign briefs that come through the studio — no representation, no cut of your deal.",
};

export default function CollectivePage() {
  return (
    <main style={{ paddingTop: "var(--chrome-offset)" }}>
      {/* Hero */}
      <section className="striped relative flex min-h-[58vh] items-end overflow-hidden">
        <Image src="/img/coll-1.jpg" alt="" fill sizes="100vw" priority className="object-cover object-[50%_26%]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,21,18,0.28)_0%,rgba(26,21,18,0.85)_100%)]" />
        <div className="relative mx-auto w-full max-w-shell px-[clamp(18px,3.4vw,44px)] py-[clamp(44px,7vh,82px)] text-cream">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] opacity-70">The Studio Collective</p>
          <h1 className="display mt-4 text-[clamp(2.5rem,6.4vw,5rem)] leading-[0.94]">
            Want to be in <span className="ital">the Collective?</span>
          </h1>
          <p className="mt-[18px] max-w-[58ch] text-[1.05rem] leading-[1.65] text-cream/[0.82] [text-wrap:pretty]">
            We bring brand partnership and networking opportunities to a community of talented millennial and Gen&#8209;Z
            creators. Collegare works with brands directly — so when a campaign brief lands, the Collective sees it
            first, and you decide whether to pitch it.
          </p>

          <div className="mt-[clamp(24px,3.6vh,36px)] flex flex-wrap items-center gap-3">
            <Btn href="#join" variant="light" arrow>Join the Collective</Btn>
            <Btn href={site.tiktok} variant="outline-cream" external>
              Follow {site.tiktokHandle}
            </Btn>
          </div>

          <p className="mt-[18px] max-w-[52ch] text-[0.85rem] leading-[1.6] text-cream/[0.6]">
            Collegare Studio is a separate company from Collegare Talent Management. Joining the Collective is not
            representation — we take no cut of your deals.
          </p>
        </div>
      </section>

      {/* What membership is */}
      <section className="bg-cream py-[clamp(60px,9vh,110px)]">
        <div className="mx-auto max-w-shell px-[clamp(18px,3.4vw,44px)]">
          <p className="label !text-brand">What membership is</p>
          <div className="mt-[34px] grid gap-[clamp(24px,4vw,52px)] [grid-template-columns:repeat(auto-fit,minmax(270px,1fr))]">
            {membership.map((m) => (
              <div key={m.t} data-reveal className="border-t-2 border-ink pt-[18px]">
                <h3 className="display !font-extrabold text-[1.7rem] leading-[1.05]">{m.t}</h3>
                <p className="mt-3 text-[1rem] leading-[1.7] text-graphite [text-wrap:pretty]">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standup mosaic */}
      <section className="bg-linen py-[clamp(50px,8vh,100px)]">
        <div className="mx-auto max-w-shell px-[clamp(18px,3.4vw,44px)]">
          <p className="label !text-brand mb-[clamp(24px,4vh,42px)]">Last night&rsquo;s standup ran long</p>
          <div className="grid gap-[clamp(12px,1.8vw,22px)] [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
            {[
              { src: "coll-2", drift: "0.07", up: false },
              { src: "coll-3", drift: "-0.09", up: true },
              { src: "coll-4", drift: "0.11", up: false },
              { src: "coll-5", drift: "-0.06", up: true },
            ].map((it) => (
              <div
                key={it.src}
                data-drift={it.drift}
                className={`relative aspect-[3/4] w-full ${it.up ? "mt-[clamp(14px,3vw,40px)]" : ""}`}
              >
                <Image src={`/img/${it.src}.jpg`} alt="" fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rituals + House rules */}
      <section className="striped py-[clamp(60px,9vh,110px)]">
        <div className="mx-auto grid max-w-shell gap-[clamp(34px,5vw,72px)] px-[clamp(18px,3.4vw,44px)] [grid-template-columns:repeat(auto-fit,minmax(290px,1fr))]">
          <div>
            <h2 className="display text-[clamp(1.8rem,4vw,3rem)] leading-none">The rituals</h2>
            <div className="mt-[26px]">
              {rituals.map((r) => (
                <div key={r.t} className="border-t border-cream/[0.18] py-[18px]">
                  <div className="flex flex-wrap items-baseline justify-between gap-2.5">
                    <span className="display !font-bold text-[1.4rem] leading-[1.1] tracking-[-0.02em]">{r.t}</span>
                    <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-salmon-deep">{r.when}</span>
                  </div>
                  <p className="mt-2 text-[0.96rem] leading-[1.6] text-cream/[0.68] [text-wrap:pretty]">{r.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="display text-[clamp(1.8rem,4vw,3rem)] leading-none">House rules</h2>
            <ol className="mt-[26px] list-none p-0">
              {houseRules.map((h) => (
                <li key={h.n} className="grid grid-cols-[40px_1fr] items-baseline gap-3.5 border-t border-cream/[0.18] py-[18px]">
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-cream/45">{h.n}</span>
                  <span className="text-[1.02rem] leading-[1.6] text-cream/[0.88]">{h.t}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Management band */}
      <section className="border-t border-ink/[0.14] bg-cream">
        <div className="mx-auto grid max-w-shell items-center gap-[clamp(30px,5vw,72px)] px-[clamp(18px,3.4vw,44px)] py-[clamp(60px,9vh,120px)] [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          <div>
            <p className="label !text-brand">Two separate companies</p>
            <h2 className="display mt-[clamp(22px,3.4vh,40px)] text-[clamp(2rem,4.6vw,3.6rem)] leading-[0.98]">
              The Studio is not <span className="ital text-brand">the agency.</span>
            </h2>
            <p className="mt-[clamp(22px,3.4vh,38px)] max-w-[48ch] text-[0.97rem] leading-[1.85] text-graphite [text-wrap:pretty]">
              <strong className="font-semibold text-ink">Collegare Studio</strong> is the education side — the shop, the
              Academy and this Collective. It teaches you to run the business yourself, and it never takes a percentage
              of your work.
            </p>
            <p className="mt-4 max-w-[48ch] text-[0.97rem] leading-[1.85] text-graphite [text-wrap:pretty]">
              <strong className="font-semibold text-ink">Collegare Talent Management</strong> is a separate company that
              represents a small roster of creators and does the pitching, negotiating and chasing for them. Being in
              the Collective is not representation, and it is not an application to the agency. If you want that
              instead, apply to them directly.
            </p>
            <div className="mt-[clamp(24px,3.6vh,42px)]">
              <Btn href={site.management} variant="outline-ink" arrow external>Apply to Collegare Talent</Btn>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[clamp(12px,1.8vw,20px)]">
            <div data-drift="0.05" className="relative aspect-[3/4] w-full">
              <Image src="/img/coll-6.jpg" alt="" fill sizes="25vw" className="object-cover" />
            </div>
            <div data-drift="-0.08" className="relative mt-[clamp(16px,4vw,48px)] aspect-[3/4] w-full">
              <Image src="/img/coll-7.jpg" alt="" fill sizes="25vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Join */}
      <section id="join" className="striped scroll-mt-[var(--chrome-offset)] py-[clamp(60px,9vh,110px)]">
        <div className="mx-auto max-w-narrow px-[clamp(18px,3.4vw,44px)] text-cream">
          <p className="label !text-salmon text-center">Join the Collective</p>
          <h2 className="display mt-3.5 text-center text-[clamp(2rem,4.6vw,3.4rem)] leading-[0.98]">
            Put your name <span className="ital">on the list.</span>
          </h2>
          <p className="mx-auto mt-[18px] max-w-[52ch] text-center text-[1rem] leading-[1.75] text-cream/[0.72] [text-wrap:pretty]">
            The Collective opens to the waitlist first, in small groups, so the room stays useful. Tell us which
            department is hurting most and you&rsquo;ll hear from us before it goes public.
          </p>
          <div className="mt-[clamp(28px,4vh,44px)]">
            <WaitlistForm tone="dark" source="collective" />
          </div>
          <p className="mt-[clamp(24px,3.4vh,36px)] text-center text-[0.85rem] leading-[1.6] text-cream/[0.55]">
            Not ready yet? Applications and brief drops get announced first on{" "}
            <a href={site.tiktok} target="_blank" rel="noreferrer" className="text-salmon underline underline-offset-4 hover:text-cream">
              {site.tiktokHandle}
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
