import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Frame } from "@/components/frame";
import { WaitlistForm } from "@/components/waitlist-form";
import { Shell } from "@/components/ui";
import { variants, variantKeys } from "@/lib/lp";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return variantKeys.map((variant) => ({ variant }));
}

export function generateMetadata({ params }: { params: { variant: string } }): Metadata {
  const v = variants[params.variant];
  if (!v) return { title: "Collegare Studio" };
  return {
    title: `${v.headline} ${v.highlight}`,
    description: v.sub,
    robots: { index: false, follow: false },
  };
}

export default function LandingPage({ params }: { params: { variant: string } }) {
  const v = variants[params.variant];
  if (!v) notFound();

  return (
    <main className="bg-paper">
      {/* Minimal bar — no nav on purpose. Keep the only exit the form. */}
      <div className="border-b border-ink/10">
        <Shell className="flex h-16 items-center justify-between">
          <Link href="/" className="font-display text-2xl leading-none">
            Collegare <span className="label">Studio</span>
          </Link>
          <span className="label hidden sm:inline">{v.eyebrow}</span>
        </Shell>
      </div>

      {/* ABOVE THE FOLD — hook + form, nothing else */}
      <Shell className="grid gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <h1 className="display text-[clamp(2.75rem,7vw,5.5rem)]">
            {v.headline}
            <br />
            <span className="italic text-oxblood">{v.highlight}</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-graphite sm:text-xl">{v.sub}</p>
          <div className="mt-11">
            <WaitlistForm source={`lp-${params.variant}`} compact />
          </div>
        </div>
        <Frame note={v.art} ratio="4/5" tone="clay" />
      </Shell>

      {/* PROOF */}
      <section className="bg-ink py-20 text-paper">
        <Shell>
          <div className="grid gap-px bg-paper/15 md:grid-cols-3">
            {v.proof.map((p, i) => (
              <div key={p.t} className="bg-ink p-9">
                <span className="font-mono text-[11px] tracking-label text-gold">0{i + 1}</span>
                <h2 className="display mt-4 text-3xl">{p.t}</h2>
                <p className="mt-3 leading-relaxed text-paper/70">{p.d}</p>
              </div>
            ))}
          </div>
        </Shell>
      </section>

      {/* OBJECTIONS */}
      <section className="py-20">
        <Shell className="max-w-3xl">
          {v.objection.map((o) => (
            <div key={o.q} className="border-t border-ink/15 py-8">
              <h3 className="font-display text-2xl">&ldquo;{o.q}&rdquo;</h3>
              <p className="mt-3 leading-relaxed text-graphite">{o.a}</p>
            </div>
          ))}
        </Shell>
      </section>

      {/* CLOSER */}
      <section className="bg-oxblood py-20 text-linen">
        <Shell className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <h2 className="display text-[clamp(2.25rem,5.5vw,4rem)]">{v.closer}</h2>
          <WaitlistForm tone="dark" source={`lp-${params.variant}-footer`} compact />
        </Shell>
      </section>

      <footer className="border-t border-ink/10 py-10">
        <Shell className="flex flex-col gap-3 font-mono text-[11px] uppercase tracking-label text-mute sm:flex-row sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Collegare Studio</span>
          <span className="flex gap-6">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href={`mailto:${site.email}`}>Contact</a>
          </span>
        </Shell>
      </footer>
    </main>
  );
}
