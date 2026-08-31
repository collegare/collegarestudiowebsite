import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Marquee } from "@/components/marquee";
import { Frame } from "@/components/frame";
import { WaitlistForm } from "@/components/waitlist-form";
import { Shell, Section, SectionHead, Eyebrow, Button, Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "The Creator Business Course",
  description:
    "Eight modules covering the front end and the back end of a creator career. $997 for the first 20 founding members, $1,499 after.",
};

const outcomes = [
  "An entity, a business bank account, and books that don't scare you",
  "A rate card built from your numbers, and the script to hold the number",
  "A pipeline where you can see every deal, stage, and dollar owed",
  "A content system that produces without eating your whole week",
  "Contracts you understand, with the three clauses that cost creators most",
  "A path off the brand-deal treadmill toward income you own",
];

const curriculum = [
  {
    half: "Front end",
    items: [
      { n: "01", t: "Position", d: "Find the lane that fits your actual life, skills, and appetite — then say it in one sentence a brand can repeat.", lessons: 5 },
      { n: "02", t: "Produce", d: "Series design, hook structure, and a shooting and posting cadence that survives a bad week.", lessons: 6 },
      { n: "03", t: "Prove", d: "Turn your content into evidence: the media kit, the case study, the numbers that make a buyer nod.", lessons: 4 },
    ],
  },
  {
    half: "Back end",
    items: [
      { n: "04", t: "Incorporate", d: "Entity choice, EIN, business banking, bookkeeping, and the tax setup that stops the March panic.", lessons: 5 },
      { n: "05", t: "Price", d: "Rate cards from real inputs — usage, exclusivity, whitelisting, reach — and the negotiation language.", lessons: 6 },
      { n: "06", t: "Pitch", d: "Outbound that gets replies, inbound you can qualify fast, and a follow-up rhythm that isn't begging.", lessons: 5 },
      { n: "07", t: "Deliver & Collect", d: "Contracts, revisions, usage windows, invoicing, net terms, and what to say on day 61.", lessons: 6 },
      { n: "08", t: "Scale", d: "Retainers, your own products, and the moment you stop trading hours for posts.", lessons: 5 },
    ],
  },
];

const included = [
  { t: "42 lessons", d: "Short, specific, no filler intros." },
  { t: "The template vault", d: "Contracts, rate cards, invoices, pitch scripts, trackers." },
  { t: "Deal teardowns", d: "Real deals, real numbers, what we'd have negotiated differently." },
  { t: "Community access", d: "The room where you get told the truth about your rate." },
  { t: "Lifetime updates", d: "The back end changes. So does the course." },
  { t: "Founding-member call", d: "First 20 only — a live working session with the studio." },
];

const faqs = [
  { q: "What exactly do I get for $997?", a: "Every module, every template, the deal teardowns, community access, lifetime updates, and the founding-member live session. Founding pricing is capped at 20 people; after that the same thing is $1,499." },
  { q: "How long does it take?", a: "Most people work through it in six to eight weeks at a few hours a week. It's self-paced and it isn't going anywhere — the entity and pricing modules are the ones people redo every year." },
  { q: "Is this just the legal stuff?", a: "No. Half the course is content, voice, and positioning. The point is that those two halves are the same business, and teaching them apart is why so many creators feel unstable." },
  { q: "Do you offer payment plans?", a: "Yes — details go out with the cart link. The founding price is the lowest this will ever be, plan or not." },
  { q: "I'm not in the US. Does the back end still apply?", a: "The principles do — rates, contracts, usage, collection, systems. The entity and tax modules are US-specific, and we flag exactly which lessons those are." },
  { q: "What's the refund policy?", a: "Full terms ship with the cart. We'd rather you skip it than buy it resentfully — the waitlist emails will give you enough to judge." },
];

export default function CoursePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-ink text-paper">
          <Shell className="grid gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
            <div>
              <p className="label flex items-center gap-3 text-paper/50">
                <span className="inline-block h-px w-6 bg-gold" />
                The flagship course
              </p>
              <h1 className="display mt-8 text-[clamp(3rem,7.5vw,6rem)]">
                The Creator
                <br />
                Business
                <br />
                <span className="italic text-gold">Course.</span>
              </h1>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-paper/70">
                Eight modules that build both halves of your career at once — the content people connect to, and the
                business machinery that turns it into income you can plan around.
              </p>
              <div className="mt-10 flex flex-wrap items-baseline gap-5">
                <span className="display text-6xl text-paper">$997</span>
                <span className="font-display text-3xl text-paper/35 line-through">$1,499</span>
                <span className="rounded-full border border-gold/50 px-3 py-1 font-mono text-[10px] uppercase tracking-label text-gold">
                  First 20 founding members
                </span>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/waitlist" variant="light">
                  Join the waitlist
                </Button>
                <Link href="#curriculum" className="link-underline self-center font-mono text-[11px] uppercase tracking-label text-paper/70">
                  See all 8 modules
                </Link>
              </div>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-label text-paper/40">
                Cart is closed. The list gets the link first.
              </p>
            </div>
            <Frame note="Course art — desk, laptop with rate card, contract, coffee" ratio="4/5" tone="ox" />
          </Shell>
        </section>

        <Marquee words={["$997 founding", "20 seats only", "Then $1,499"]} tone="bone" />

        <Section tone="paper">
          <SectionHead
            eyebrow="What you walk out with"
            title={<>By the end, you have a business &mdash; not a <span className="italic text-oxblood">vibe.</span></>}
          />
          <div className="mt-16 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((o, i) => (
              <div key={o} className="bg-paper p-8">
                <span className="font-mono text-[11px] tracking-label text-oxblood">0{i + 1}</span>
                <p className="mt-4 text-lg leading-snug text-ink">{o}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="linen" id="curriculum">
          <SectionHead eyebrow="The curriculum" title="Eight modules, 42 lessons." />
          <div className="mt-16 space-y-16">
            {curriculum.map((group) => (
              <div key={group.half}>
                <div className="flex items-center gap-5">
                  <Badge tone={group.half === "Front end" ? "ox" : "gold"}>{group.half}</Badge>
                  <span className="h-px flex-1 bg-ink/10" />
                </div>
                <div className="mt-8">
                  {group.items.map((m) => (
                    <div
                      key={m.n}
                      className="group grid gap-4 border-b border-ink/10 py-8 transition-colors hover:bg-bone/50 sm:grid-cols-[auto_1fr_auto] sm:items-baseline sm:gap-10"
                    >
                      <span className="font-mono text-[11px] tracking-label text-oxblood">{m.n}</span>
                      <div>
                        <h3 className="display text-3xl group-hover:text-oxblood">{m.t}</h3>
                        <p className="mt-2 max-w-2xl leading-relaxed text-graphite">{m.d}</p>
                      </div>
                      <span className="label whitespace-nowrap">{m.lessons} lessons</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="bone">
          <SectionHead eyebrow="What's included" title="Everything in the box." />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((x) => (
              <div key={x.t} className="border-t border-ink/20 pt-6">
                <h3 className="display text-2xl">{x.t}</h3>
                <p className="mt-2 text-graphite">{x.d}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* PRICING */}
        <Section tone="paper">
          <SectionHead eyebrow="Pricing" title="Two prices. One of them expires." align="center" />
          <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="flex flex-col border border-oxblood bg-linen p-10">
              <Badge tone="ox">Founding member &middot; 20 seats</Badge>
              <p className="display mt-7 text-6xl">$997</p>
              <p className="mt-3 text-graphite">For the first twenty creators who take a seat.</p>
              <ul className="mt-8 space-y-3 text-graphite">
                {["Full course + template vault", "Community access", "Lifetime updates", "Live founding-member session", "Locked price on everything we launch next"].map((li) => (
                  <li key={li} className="flex gap-3 border-t border-ink/10 pt-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-oxblood" />
                    {li}
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <Button href="/waitlist">Join the waitlist</Button>
              </div>
            </div>
            <div className="flex flex-col border border-ink/15 p-10">
              <Badge tone="mute">Standard</Badge>
              <p className="display mt-7 text-6xl text-graphite">$1,499</p>
              <p className="mt-3 text-graphite">Once the founding seats are gone.</p>
              <ul className="mt-8 space-y-3 text-graphite">
                {["Full course + template vault", "Community access", "Lifetime updates"].map((li) => (
                  <li key={li} className="flex gap-3 border-t border-ink/10 pt-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/30" />
                    {li}
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-9 font-mono text-[11px] uppercase tracking-label text-mute">
                Available when the cart opens
              </p>
            </div>
          </div>
        </Section>

        <Section tone="linen">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="display text-[clamp(2.25rem,5vw,3.5rem)]">The real questions.</h2>
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

        <section className="bg-ink text-paper">
          <Shell className="grid gap-14 py-24 lg:grid-cols-2">
            <div>
              <Eyebrow>Last thing</Eyebrow>
              <h2 className="display mt-7 text-[clamp(2.5rem,6vw,4rem)]">
                Twenty seats
                <br />
                at <span className="italic text-gold">$997.</span>
              </h2>
              <p className="mt-7 max-w-md text-lg text-paper/70">
                Then the price is $1,499 and it stays there. The waitlist gets the link first — that&rsquo;s the only way in.
              </p>
            </div>
            <div className="lg:pt-6">
              <WaitlistForm tone="dark" source="course-page" />
            </div>
          </Shell>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
