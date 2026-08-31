import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Marquee } from "@/components/marquee";
import { Frame } from "@/components/frame";
import { WaitlistForm } from "@/components/waitlist-form";
import { Shell, Section, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Join the waitlist",
  description:
    "Twenty founding seats at $997 before the price goes to $1,499. The Collegare Studio waitlist gets first access.",
};

const perks = [
  {
    t: "Founding price, held",
    d: "The first 20 seats are $997. Everyone after pays $1,499. The list gets the link first — that's the whole advantage.",
  },
  {
    t: "The back-end teardowns",
    d: "While you wait, you get the emails we'd charge for: rate math, contract red flags, and how the money actually moves.",
  },
  {
    t: "Shape the curriculum",
    d: "We ask the list what's breaking in their business, and we build the module before we build the sales page.",
  },
];

const faqs = [
  {
    q: "When does it open?",
    a: "Cart opens to the waitlist first. We'd rather launch to a warm room than an empty one, so the date follows the list — not the other way around.",
  },
  {
    q: "Am I committing to anything?",
    a: "No. The waitlist is an email address and a heads-up. No card, no deposit, no auto-enroll.",
  },
  {
    q: "I'm brand new. Is this too early for me?",
    a: "The back end is easier to build before you're buried. Most people wish they'd set the entity, the rate, and the tracking up a year earlier.",
  },
  {
    q: "I already make money as a creator. Is this too basic?",
    a: "If you can't say your net-30 policy, your usage-rights rate bump, and your last quarter's numbers out loud, there's a back end here worth having.",
  },
];

export default function WaitlistPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-paper">
          <Shell className="grid gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
            <div>
              <Eyebrow>The waitlist &middot; 20 founding seats</Eyebrow>
              <h1 className="display mt-8 text-[clamp(3rem,7.5vw,6rem)]">
                Get in before
                <br />
                the <span className="italic text-oxblood">room fills.</span>
              </h1>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-graphite">
                The Creator Business Course opens to this list first. Twenty seats at $997, then $1,499 for everyone
                else. Add your email and we&rsquo;ll send the link before it&rsquo;s public.
              </p>
              <div className="mt-12">
                <WaitlistForm source="waitlist-page" />
              </div>
            </div>
            <Frame note="Waitlist art — hands, notebook, warm studio light" ratio="4/5" tone="ox" />
          </Shell>
        </section>

        <Marquee words={["20 founding seats", "$997 then $1,499", "The list goes first"]} tone="oxblood" />

        <Section tone="linen">
          <div className="grid gap-12 md:grid-cols-3">
            {perks.map((p, i) => (
              <div key={p.t} className="border-t border-ink/15 pt-7">
                <span className="font-mono text-[11px] tracking-label text-oxblood">0{i + 1}</span>
                <h3 className="display mt-4 text-3xl">{p.t}</h3>
                <p className="mt-3 leading-relaxed text-graphite">{p.d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="paper">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="display text-[clamp(2.25rem,5vw,3.5rem)]">
              Questions,
              <br />
              answered.
            </h2>
            <div>
              {faqs.map((f) => (
                <div key={f.q} className="border-t border-ink/15 py-8">
                  <h3 className="font-display text-2xl">{f.q}</h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-graphite">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
