import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Marquee } from "@/components/marquee";
import { Frame } from "@/components/frame";
import { WaitlistForm } from "@/components/waitlist-form";
import { Button, Eyebrow, Section, SectionHead, Shell, Stat, Badge } from "@/components/ui";
import { marqueeWords } from "@/lib/site";

const frontEnd = [
  "Your voice, sharpened until it sounds like nobody else",
  "Series and formats people come back for",
  "Positioning that makes the right brands find you",
  "A content system you can actually keep up with",
];

const backEnd = [
  "Your entity, set up properly and on purpose",
  "Getting paid cleanly — rates, invoices, terms, net-30",
  "A deal pipeline you can see, not a scattered inbox",
  "Deliverables, usage rights, and renewals, tracked",
];

const offerings = [
  {
    title: "The Shop",
    href: "/shop",
    kicker: "Tools & templates",
    copy: "Contract templates, rate cards, deal trackers, and the planners we use to run our own creator business.",
    note: "Product flat-lay — planner + rate card",
    tone: "sand" as const,
  },
  {
    title: "The Academy",
    href: "/academy",
    kicker: "Learn the whole business",
    copy: "The self-paced library: short lessons, real teardowns, and the systems behind a creator career that pays.",
    note: "Lesson UI on laptop, warm desk",
    tone: "clay" as const,
  },
  {
    title: "The Community",
    href: "/community",
    kicker: "Build alongside people",
    copy: "Weekly calls, deal reviews, and a room of creators who will tell you the truth about your rate.",
    note: "Group call grid / meetup shot",
    tone: "ox" as const,
  },
];

const modules = [
  { n: "01", t: "Position", d: "Pick the lane that actually fits you — not the one that worked for someone else." },
  { n: "02", t: "Produce", d: "Series design, hooks, and a shooting cadence you can sustain past week three." },
  { n: "03", t: "Incorporate", d: "Entity, EIN, business banking, bookkeeping. The boring hour that legitimizes everything." },
  { n: "04", t: "Price", d: "Rate cards built from your numbers, and the language to hold the number in the room." },
  { n: "05", t: "Pitch", d: "Outbound that gets answered, and inbound you can qualify in ninety seconds." },
  { n: "06", t: "Deliver", d: "Contracts, usage, revisions, and a delivery system that doesn't live in your DMs." },
  { n: "07", t: "Collect", d: "Invoicing, net terms, follow-up scripts, and what to do when they go quiet." },
  { n: "08", t: "Scale", d: "Your own products, retainers, and the point where you stop trading hours for posts." },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-paper">
          <Shell className="grid items-end gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
            <div className="animate-rise">
              <Eyebrow>Est. 2026 &middot; A creator business studio</Eyebrow>
              <h1 className="display mt-8 text-[clamp(3.25rem,9vw,7.5rem)]">
                Being a creator
                <br />
                isn&rsquo;t just
                <br />
                <span className="italic text-oxblood">posting.</span>
              </h1>
              <p className="mt-9 max-w-xl text-lg leading-relaxed text-graphite sm:text-xl">
                It&rsquo;s a business &mdash; and most people are only running half of it. Collegare Studio teaches the
                front end everyone sees and the back end that makes it real.
              </p>
              <div className="mt-11 flex flex-wrap items-center gap-4">
                <Button href="/waitlist">Join the waitlist</Button>
                <Button href="/course" variant="outline">
                  See the course
                </Button>
              </div>
              <div className="mt-14 grid max-w-lg grid-cols-3 gap-8">
                <Stat value="20" label="Founding seats" />
                <Stat value="8" label="Modules" />
                <Stat value="2" label="Halves, taught together" />
              </div>
            </div>

            <Frame note="Hero film — studio desk, hands, contracts, warm light" ratio="4/5" tone="clay" />
          </Shell>
        </section>

        <Marquee words={marqueeWords} tone="ink" />

        {/* THE TWO HALVES */}
        <Section tone="linen" id="halves">
          <SectionHead
            eyebrow="The whole business"
            title={
              <>
                Half a business is why
                <br />
                it feels so <span className="italic text-oxblood">unstable.</span>
              </>
            }
            lede="You can have a great audience and still have no idea what you're owed, what you signed, or what happens if the algorithm turns. The two halves have to be built together."
          />

          <div className="mt-20 grid gap-px overflow-hidden rounded-sm bg-ink/10 lg:grid-cols-2">
            <div className="bg-linen p-10 lg:p-14">
              <Badge tone="ox">Front end</Badge>
              <h3 className="display mt-7 text-4xl">What people see</h3>
              <p className="mt-4 text-graphite">The part you already love. We make it intentional.</p>
              <ul className="mt-9 space-y-5">
                {frontEnd.map((item) => (
                  <li key={item} className="flex gap-4 border-t border-ink/10 pt-5 text-graphite">
                    <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-oxblood" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-ink p-10 text-paper lg:p-14">
              <span className="rounded-full border border-gold/50 px-3 py-1 font-mono text-[10px] uppercase tracking-label text-gold">
                Back end
              </span>
              <h3 className="display mt-7 text-4xl">What makes it real</h3>
              <p className="mt-4 text-paper/60">The part nobody teaches. It&rsquo;s where the money lives.</p>
              <ul className="mt-9 space-y-5">
                {backEnd.map((item) => (
                  <li key={item} className="flex gap-4 border-t border-paper/15 pt-5 text-paper/80">
                    <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* THREE OFFERINGS */}
        <Section tone="paper">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow="Three ways in" title="Start where you are." />
            <Link href="/course" className="link-underline label text-ink">
              Or go all in on the course
            </Link>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {offerings.map((o) => (
              <Link key={o.title} href={o.href} className="group block">
                <Frame note={o.note} ratio="4/5" tone={o.tone} className="transition-transform duration-500 group-hover:scale-[1.02]" />
                <div className="mt-7">
                  <p className="label">{o.kicker}</p>
                  <h3 className="display mt-3 text-3xl group-hover:text-oxblood">{o.title}</h3>
                  <p className="mt-3 text-graphite">{o.copy}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-oxblood">
                    Learn more
                    <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Section>

        {/* COURSE SPOTLIGHT */}
        <section className="bg-oxblood text-linen">
          <Shell className="grid gap-14 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:py-32">
            <Frame note="Founder portrait — Maya, studio, direct gaze" ratio="1/1" tone="ink" />
            <div className="flex flex-col justify-center">
              <p className="label flex items-center gap-3 text-linen/60">
                <span className="inline-block h-px w-6 bg-linen/40" />
                The flagship
              </p>
              <h2 className="display mt-7 text-[clamp(2.5rem,6vw,4.5rem)]">
                The Creator Business
                <br />
                Course.
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-linen/80">
                Eight modules that take you from &ldquo;I post and hope&rdquo; to a business with an entity, a rate, a
                pipeline, and a system behind it. Built for influencers, UGC creatives, and founders building in public.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <span className="rounded-full border border-linen/30 px-3 py-1 font-mono text-[10px] uppercase tracking-label">
                  $997 founding &middot; first 20
                </span>
                <span className="rounded-full border border-linen/30 px-3 py-1 font-mono text-[10px] uppercase tracking-label">
                  $1,499 after
                </span>
                <span className="rounded-full border border-linen/30 px-3 py-1 font-mono text-[10px] uppercase tracking-label">
                  Waitlist gets first access
                </span>
              </div>
              <div className="mt-11 flex flex-wrap gap-4">
                <Button href="/waitlist" variant="light">
                  Claim a founding seat
                </Button>
                <Link href="/course" className="link-underline self-center font-mono text-[11px] uppercase tracking-label">
                  Full curriculum
                </Link>
              </div>
            </div>
          </Shell>
        </section>

        {/* CURRICULUM */}
        <Section tone="paper">
          <SectionHead eyebrow="Inside the course" title="Eight modules. Both halves." />
          <div className="mt-16 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((m) => (
              <div key={m.n} className="bg-paper p-8 transition-colors hover:bg-bone">
                <span className="font-mono text-[11px] tracking-label text-oxblood">{m.n}</span>
                <h3 className="display mt-4 text-3xl">{m.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite">{m.d}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* FOUNDERS */}
        <Section tone="bone">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Frame note="Founders — Maya, Sky, Karol, editorial group shot" ratio="5/6" tone="sand" />
            <div>
              <Eyebrow>Who&rsquo;s teaching</Eyebrow>
              <h2 className="display mt-7 text-[clamp(2.25rem,5vw,3.75rem)]">
                We built this because we
                <br />
                needed it <span className="italic text-oxblood">first.</span>
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-graphite">
                Collegare Studio came out of running a real creator business &mdash; the brand deals, the invoices that
                went unpaid for ninety days, the contracts we should have read twice, the systems we built after we got
                burned.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-graphite">
                Nobody handed us the back end. We&rsquo;re handing it to you.
              </p>
              <Link href="/studio" className="mt-9 inline-block link-underline font-mono text-[11px] uppercase tracking-label text-oxblood">
                Meet the studio
              </Link>
            </div>
          </div>
        </Section>

        {/* WAITLIST BAND */}
        <section id="waitlist" className="bg-ink text-paper">
          <Shell className="grid gap-14 py-24 lg:grid-cols-[1fr_1fr] lg:py-32">
            <div>
              <p className="label flex items-center gap-3 text-paper/50">
                <span className="inline-block h-px w-6 bg-gold" />
                The waitlist
              </p>
              <h2 className="display mt-7 text-[clamp(2.5rem,6vw,4.5rem)]">
                Doors open
                <br />
                to the list first.
              </h2>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-paper/70">
                Twenty founding seats at $997. After that it&rsquo;s $1,499. The waitlist gets the link before anyone
                else sees it.
              </p>
            </div>
            <div className="lg:pt-6">
              <WaitlistForm tone="dark" source="home" />
            </div>
          </Shell>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
