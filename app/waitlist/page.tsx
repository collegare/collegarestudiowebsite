import type { Metadata } from "next";
import { WaitlistForm } from "@/components/waitlist-form";
import { waitlistReasons, waitlistFaq } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join the waitlist",
  description:
    "Twenty founding seats at $997 before the price goes to $1,499. The Collegare Studio waitlist gets first access.",
};

export default function WaitlistPage() {
  return (
    <main style={{ paddingTop: "var(--chrome-offset)" }}>
      <section className="striped">
        <div className="mx-auto grid max-w-shell gap-[clamp(34px,5vw,72px)] px-[clamp(18px,3.4vw,44px)] pb-[clamp(60px,9vh,110px)] pt-[clamp(54px,8vh,100px)] [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
          <div>
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-cream/60">
              The waitlist &middot; 20 founding seats
            </p>
            <h1 className="display mt-[18px] text-[clamp(2.5rem,6vw,4.8rem)] leading-[0.94]">
              Get in before <span className="ital">the room fills.</span>
            </h1>
            <p className="mt-5 max-w-[48ch] text-[1.05rem] leading-[1.7] text-cream/[0.78] [text-wrap:pretty]">
              The Creator Business Course opens to this list first. Twenty seats at $997, then $1,499 for everyone
              else. Add your email and we&rsquo;ll send the link before it&rsquo;s public.
            </p>
            <div className="mt-[34px]">
              {waitlistReasons.map((r) => (
                <div key={r.n} className="grid grid-cols-[40px_1fr] gap-3.5 border-t border-cream/[0.18] py-[18px]">
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-salmon-deep">{r.n}</span>
                  <div>
                    <p className="display !font-bold text-[1.3rem] leading-[1.15] tracking-[-0.02em]">{r.t}</p>
                    <p className="mt-[7px] text-[0.96rem] leading-[1.6] text-cream/[0.68] [text-wrap:pretty]">{r.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-2.5">
            <WaitlistForm tone="dark" source="waitlist" />
          </div>
        </div>
      </section>

      <section className="bg-cream py-[clamp(60px,9vh,110px)]">
        <div className="mx-auto max-w-narrow px-[clamp(18px,3.4vw,44px)]">
          <h2 className="display text-[clamp(1.9rem,4.2vw,3rem)] leading-none">Questions</h2>
          <div className="mt-7">
            {waitlistFaq.map((f) => (
              <div key={f.q} className="border-t border-ink/[0.16] py-5">
                <p className="font-serif text-[1.5rem] leading-tight italic">{f.q}</p>
                <p className="mt-2 text-[1rem] leading-[1.7] text-graphite [text-wrap:pretty]">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
