import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Frame } from "@/components/frame";
import { Marquee } from "@/components/marquee";
import { Shell, Section, SectionHead, Eyebrow, Button, Stat } from "@/components/ui";

export const metadata: Metadata = {
  title: "The Academy",
  description:
    "The Collegare Academy — a self-paced library of short lessons, teardowns, and systems for the front end and back end of a creator career.",
};

const tracks = [
  { t: "Content & Voice", d: "Series design, hooks, formats, and the editorial instinct that keeps people coming back.", n: "14 lessons", note: "Filming setup, ring light off" },
  { t: "Business Setup", d: "Entity, banking, bookkeeping, taxes — the hour that turns a hobby into a company.", n: "11 lessons", note: "Paperwork on cream desk" },
  { t: "Deals & Money", d: "Rate cards, negotiation, contracts, usage rights, invoicing, and collection.", n: "17 lessons", note: "Contract with pen, close crop" },
  { t: "Systems & Tools", d: "The stack: trackers, dashboards, and automations that keep the whole thing from becoming chaos.", n: "9 lessons", note: "Dashboard UI on screen" },
];

const how = [
  { n: "01", t: "Watch short", d: "Nothing over twelve minutes. No forty-minute intro module about mindset." },
  { n: "02", t: "Do the rep", d: "Every lesson ends with one action and the template to do it with." },
  { n: "03", t: "Bring it to the room", d: "Post the output in the community and get it torn apart, kindly." },
];

export default function AcademyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-paper">
          <Shell className="grid gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
            <div>
              <Eyebrow>The Academy</Eyebrow>
              <h1 className="display mt-8 text-[clamp(3rem,7.5vw,6rem)]">
                Learn it the
                <br />
                way you&rsquo;ll
                <br />
                <span className="italic text-oxblood">use it.</span>
              </h1>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-graphite">
                The Academy is the library behind the course: short lessons, real teardowns, and one action per lesson.
                Not a curriculum you finish — a reference you keep coming back to.
              </p>
              <div className="mt-11 flex flex-wrap gap-4">
                <Button href="/waitlist">Join the waitlist</Button>
                <Button href="/course" variant="outline">See the course</Button>
              </div>
              <div className="mt-14 grid max-w-md grid-cols-3 gap-8">
                <Stat value="51" label="Lessons" />
                <Stat value="4" label="Tracks" />
                <Stat value="12m" label="Longest lesson" />
              </div>
            </div>
            <Frame note="Academy hero — laptop lesson UI, warm room" ratio="4/5" tone="clay" />
          </Shell>
        </section>

        <Marquee words={["Short lessons", "One action each", "Templates included"]} tone="ink" />

        <Section tone="linen">
          <SectionHead eyebrow="Four tracks" title="Both halves, split into lanes." />
          <div className="mt-16 grid gap-10 sm:grid-cols-2">
            {tracks.map((t) => (
              <div key={t.t} className="group">
                <Frame note={t.note} ratio="16/10" tone="sand" />
                <div className="mt-6 flex items-baseline justify-between gap-6">
                  <h3 className="display text-3xl">{t.t}</h3>
                  <span className="label whitespace-nowrap">{t.n}</span>
                </div>
                <p className="mt-3 leading-relaxed text-graphite">{t.d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="bone">
          <SectionHead eyebrow="How it works" title="Three steps, on repeat." />
          <div className="mt-14 grid gap-px bg-ink/15 md:grid-cols-3">
            {how.map((h) => (
              <div key={h.n} className="bg-bone p-9">
                <span className="font-mono text-[11px] tracking-label text-oxblood">{h.n}</span>
                <h3 className="display mt-4 text-3xl">{h.t}</h3>
                <p className="mt-3 leading-relaxed text-graphite">{h.d}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
