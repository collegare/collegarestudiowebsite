import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Frame } from "@/components/frame";
import { Shell, Section, Eyebrow, Badge, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "The Shop",
  description: "Contracts, rate cards, trackers, and planners — the back-end tools we use to run our own creator business.",
};

const products = [
  { name: "The Deal Tracker", price: "$39", was: "", cat: "Notion template", status: "Coming soon", note: "Notion board mockup", tone: "sand" as const },
  { name: "Creator Contract Pack", price: "$79", was: "$99", cat: "Templates", status: "Coming soon", note: "Contract on linen desk", tone: "clay" as const },
  { name: "Rate Card Builder", price: "$29", was: "", cat: "Spreadsheet", status: "Coming soon", note: "Rate card spreadsheet", tone: "sand" as const },
  { name: "The Back-End Planner", price: "$48", was: "", cat: "Print", status: "Coming soon", note: "Physical planner, three angles", tone: "clay" as const },
  { name: "Pitch Script Library", price: "$25", was: "", cat: "Swipe file", status: "Coming soon", note: "Phone with email draft", tone: "ox" as const },
  { name: "Invoice + Net-30 Kit", price: "$19", was: "", cat: "Templates", status: "Coming soon", note: "Invoice flat-lay", tone: "sand" as const },
];

export default function ShopPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-paper">
          <Shell className="py-20 lg:py-28">
            <Eyebrow>The Shop</Eyebrow>
            <h1 className="display mt-8 max-w-4xl text-[clamp(3rem,7.5vw,6rem)]">
              The tools, without
              <br />
              the <span className="italic text-oxblood">course.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-graphite">
              Everything here is something we built for ourselves first. Buy the piece you need now — it all credits
              toward the course later.
            </p>
          </Shell>
        </section>

        <Section tone="linen">
          <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div key={p.name} className="group">
                <div className="relative">
                  <Frame note={p.note} ratio="1/1" tone={p.tone} />
                  <span className="absolute left-4 top-4 rounded-full bg-linen/90 px-3 py-1 font-mono text-[10px] uppercase tracking-label text-ink">
                    {p.status}
                  </span>
                </div>
                <div className="mt-6">
                  <p className="label">{p.cat}</p>
                  <h3 className="display mt-2 text-2xl">{p.name}</h3>
                  <p className="mt-2 flex items-baseline gap-3">
                    <span className="font-mono text-sm text-ink">{p.price}</span>
                    {p.was ? <span className="font-mono text-sm text-mute line-through">{p.was}</span> : null}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="bone">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <Badge tone="ox">Bundle</Badge>
              <h2 className="display mt-6 text-[clamp(2.25rem,5vw,3.5rem)]">
                Or get all of it
                <br />
                inside the course.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-graphite">
                Every template in this shop is already in the course vault — plus the lessons that tell you when and how
                to actually use them.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button href="/course" variant="outline">See the course</Button>
                <Button href="/waitlist">Join the waitlist</Button>
              </div>
            </div>
            <Frame note="Bundle shot — all templates fanned out" ratio="4/3" tone="clay" />
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
