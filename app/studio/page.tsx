import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Frame } from "@/components/frame";
import { Marquee } from "@/components/marquee";
import { Shell, Section, SectionHead, Eyebrow, Button, Badge } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Studio",
  description: "Who Collegare Studio is, why we built it, and how to work with us.",
};

const founders = [
  { name: "Maya", role: "Founder", bio: "Runs the creator business this is all drawn from — the deals, the invoices, the systems built after getting burned.", note: "Portrait — Maya, editorial" },
  { name: "Sky", role: "Co-founder", bio: "PLACEHOLDER — one line on Sky's lane and what she owns inside the studio.", note: "Portrait — Sky, editorial" },
  { name: "Karol", role: "Co-founder", bio: "PLACEHOLDER — one line on Karol's lane and what he owns inside the studio.", note: "Portrait — Karol, editorial" },
];

const beliefs = [
  { t: "Half a business isn't a business", d: "Content without a back end is a hobby with an audience. We refuse to teach one without the other." },
  { t: "Copy nobody's path", d: "The right creator business is the one that fits your life, not the one that went viral on someone else's timeline." },
  { t: "Say the number", d: "Underpricing survives on silence. We make rates, terms, and contracts sayable out loud." },
  { t: "Systems over hustle", d: "You should be able to leave for a week and have the business still know what it's owed." },
];

export default function StudioPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-paper">
          <Shell className="py-20 lg:py-28">
            <Eyebrow>The Studio</Eyebrow>
            <h1 className="display mt-8 max-w-5xl text-[clamp(3rem,7.5vw,6rem)]">
              We built the thing
              <br />
              we needed <span className="italic text-oxblood">first.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-graphite">
              Collegare Studio exists because nobody hands creators the back end. You learn to make things people love,
              and then you learn — usually the hard way — that loving your work and running a business are two different
              skills.
            </p>
          </Shell>
        </section>

        <Section tone="linen">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Frame note="Studio scene — desk, contracts, camera, warm" ratio="4/5" tone="clay" />
            <div>
              <Eyebrow>The origin</Eyebrow>
              <h2 className="display mt-7 text-[clamp(2.25rem,5vw,3.5rem)]">
                The invoice that
                <br />
                sat for ninety days.
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-graphite">
                That&rsquo;s the short version. A deal we were proud of, a contract we didn&rsquo;t read closely enough,
                and three months of chasing a payment we&rsquo;d already spent the time to earn.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-graphite">
                We built the entity, the rate card, the tracker, and the collection process out of that. Then we watched
                every creator we know go through the same thing, alone, from scratch. Collegare is us refusing to let
                that keep being the curriculum.
              </p>
            </div>
          </div>
        </Section>

        <Marquee words={["A career, not a hobby", "Own your system"]} tone="ink" />

        <Section tone="paper">
          <SectionHead eyebrow="Who we are" title="The studio." />
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {founders.map((f) => (
              <div key={f.name}>
                <Frame note={f.note} ratio="4/5" tone="sand" />
                <div className="mt-6">
                  <h3 className="display text-3xl">{f.name}</h3>
                  <p className="label mt-2">{f.role}</p>
                  <p className="mt-4 leading-relaxed text-graphite">{f.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="bone">
          <SectionHead eyebrow="What we believe" title="Four things we won't move on." />
          <div className="mt-14 grid gap-px bg-ink/15 sm:grid-cols-2">
            {beliefs.map((b, i) => (
              <div key={b.t} className="bg-bone p-9">
                <span className="font-mono text-[11px] tracking-label text-oxblood">0{i + 1}</span>
                <h3 className="display mt-4 text-3xl">{b.t}</h3>
                <p className="mt-3 leading-relaxed text-graphite">{b.d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="linen" id="affiliates">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Badge tone="ox">Partners</Badge>
              <h2 className="display mt-6 text-[clamp(2.25rem,5vw,3.5rem)]">
                Affiliate
                <br />
                programme.
              </h2>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-graphite">
                If your audience is creators who are tired of guessing at the business side, we pay 20% on every course
                sale you send. Real tracking, real payouts, no leaderboard theatre.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button href={`mailto:${site.email}?subject=Affiliate%20programme`}>Apply to partner</Button>
              </div>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-label text-mute">
                20% commission &middot; Applications reviewed weekly
              </p>
            </div>
            <Frame note="Partner art — handshake / co-working detail" ratio="4/3" tone="ox" />
          </div>
        </Section>

        <Section tone="paper">
          <div className="max-w-3xl">
            <Eyebrow>Say hello</Eyebrow>
            <h2 className="display mt-7 text-[clamp(2.25rem,5vw,3.5rem)]">Working with us.</h2>
            <p className="mt-6 text-lg leading-relaxed text-graphite">
              Press, partnerships, speaking, or a question the FAQ didn&rsquo;t answer &mdash; write to us directly.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="link-underline mt-7 inline-block font-display text-3xl text-oxblood"
            >
              {site.email}
            </a>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
