import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Frame } from "@/components/frame";
import { Marquee } from "@/components/marquee";
import { WaitlistForm } from "@/components/waitlist-form";
import { Shell, Section, SectionHead, Eyebrow, Button, Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "The Community",
  description:
    "Weekly calls, deal reviews, and a room of creators building both halves of the business — inside Collegare Studio.",
};

const rituals = [
  { t: "Monday Setup", d: "Fifteen minutes. What you're shipping, what you're pitching, what's owed to you.", when: "Mondays" },
  { t: "Deal Review", d: "Bring a live offer. We look at the rate, the usage, and the clause you skimmed.", when: "Every other Wednesday" },
  { t: "Back-End Hour", d: "Open working session — invoices, entities, trackers. Bring the thing you've been avoiding.", when: "Monthly" },
  { t: "The Feed", d: "Async room for rate checks, contract questions, and 'is this red flag actually a red flag'.", when: "Always on" },
];

const rules = [
  "Real numbers or no numbers. Vague flexing helps nobody.",
  "Say the rate out loud. The silence is what keeps creators underpaid.",
  "Feedback is specific and kind, in that order.",
  "What's shared in a deal review stays in the deal review.",
];

/**
 * PLACEHOLDER TESTIMONIALS — these are layout dummies, not real quotes.
 * Replace each with a genuine member quote (with permission) before launch.
 */
const testimonialSlots = [
  { role: "UGC creative", ask: "A quote about pricing confidence — the first time they held a number." },
  { role: "Lifestyle influencer", ask: "A quote about the back end — entity, invoicing, or getting paid." },
  { role: "Founder building in public", ask: "A quote about positioning or series design." },
];

export default function CommunityPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-ink text-paper">
          <Shell className="grid gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
            <div>
              <p className="label flex items-center gap-3 text-paper/50">
                <span className="inline-block h-px w-6 bg-gold" />
                The Community
              </p>
              <h1 className="display mt-8 text-[clamp(3rem,7.5vw,6rem)]">
                A room that
                <br />
                tells you the
                <br />
                <span className="italic text-gold">truth.</span>
              </h1>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-paper/70">
                Most creator groups are a feed of wins. This one is where you bring the offer you&rsquo;re about to
                accept and someone asks what the usage window is.
              </p>
              <div className="mt-11">
                <Button href="/waitlist" variant="light">Get on the list</Button>
              </div>
            </div>
            <Frame note="Community — call grid or in-person meetup, candid" ratio="4/5" tone="ox" />
          </Shell>
        </section>

        <Marquee words={["Say the rate out loud", "Bring the real numbers"]} tone="bone" />

        <Section tone="paper">
          <SectionHead eyebrow="The rituals" title="What actually happens in here." />
          <div className="mt-16 grid gap-px bg-ink/10 sm:grid-cols-2">
            {rituals.map((r) => (
              <div key={r.t} className="bg-paper p-9 transition-colors hover:bg-bone">
                <div className="flex items-baseline justify-between gap-6">
                  <h3 className="display text-3xl">{r.t}</h3>
                  <span className="label whitespace-nowrap">{r.when}</span>
                </div>
                <p className="mt-3 leading-relaxed text-graphite">{r.d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="linen">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Frame note="Detail shot — notebook with rate math, hands" ratio="4/3" tone="sand" />
            <div>
              <Eyebrow>House rules</Eyebrow>
              <h2 className="display mt-7 text-[clamp(2.25rem,5vw,3.5rem)]">Four rules. That&rsquo;s it.</h2>
              <ul className="mt-9 space-y-5">
                {rules.map((r, i) => (
                  <li key={r} className="flex gap-5 border-t border-ink/15 pt-5 text-graphite">
                    <span className="font-mono text-[11px] tracking-label text-oxblood">0{i + 1}</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Testimonial slots — intentionally empty until real quotes exist */}
        <Section tone="bone">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow="From the room" title="Member stories." />
            <Badge tone="mute">Placeholder &mdash; awaiting real quotes</Badge>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonialSlots.map((s) => (
              <div key={s.role} className="border border-dashed border-ink/25 p-8">
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-full bg-ink/10" />
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-label text-ink">Name here</p>
                    <p className="font-mono text-[10px] uppercase tracking-label text-mute">{s.role}</p>
                  </div>
                </div>
                <p className="mt-6 font-display text-2xl leading-snug text-mute">&ldquo;&hellip;&rdquo;</p>
                <p className="mt-5 text-sm leading-relaxed text-mute">
                  <span className="font-mono text-[10px] uppercase tracking-label text-oxblood">Brief: </span>
                  {s.ask}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <section className="bg-ink text-paper">
          <Shell className="grid gap-14 py-24 lg:grid-cols-2">
            <div>
              <Eyebrow>Doors</Eyebrow>
              <h2 className="display mt-7 text-[clamp(2.5rem,6vw,4rem)]">
                Community opens
                <br />
                with the <span className="italic text-gold">course.</span>
              </h2>
              <p className="mt-7 max-w-md text-lg text-paper/70">
                Every founding member is in the room from day one. Get on the list to be one of the twenty.
              </p>
            </div>
            <div className="lg:pt-6">
              <WaitlistForm tone="dark" source="community-page" />
            </div>
          </Shell>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
