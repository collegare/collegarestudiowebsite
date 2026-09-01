import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WaitlistForm } from "@/components/waitlist-form";
import { variants, variantKeys } from "@/lib/lp";

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
    <main style={{ paddingTop: "var(--chrome-offset)" }}>
      {/* Hook + form */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-shell gap-[clamp(32px,5vw,72px)] px-[clamp(18px,3.4vw,44px)] py-[clamp(48px,8vh,96px)] lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="label !text-brand">{v.eyebrow}</p>
            <h1 className="display mt-6 text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95]">
              {v.headline} <span className="ital text-brand">{v.highlight}</span>
            </h1>
            <p className="mt-8 max-w-[48ch] text-[1.05rem] leading-[1.7] text-graphite [text-wrap:pretty]">{v.sub}</p>
            <div className="mt-10">
              <WaitlistForm source={`lp-${params.variant}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="striped py-[clamp(56px,9vh,110px)]">
        <div className="mx-auto grid max-w-shell gap-[clamp(24px,3vw,48px)] px-[clamp(18px,3.4vw,44px)] md:grid-cols-3">
          {v.proof.map((p, i) => (
            <div key={p.t} className="border-t border-cream/[0.28] pt-4">
              <span className="text-[10px] font-semibold uppercase tracking-label text-salmon">0{i + 1}</span>
              <h2 className="display mt-3 text-[1.6rem] leading-tight">{p.t}</h2>
              <p className="mt-2.5 text-[0.95rem] leading-[1.75] text-cream/70 [text-wrap:pretty]">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Objections */}
      <section className="bg-cream py-[clamp(56px,9vh,110px)]">
        <div className="mx-auto max-w-narrow px-[clamp(18px,3.4vw,44px)]">
          {v.objection.map((o) => (
            <div key={o.q} className="border-t border-ink/[0.16] py-6">
              <p className="font-serif text-[1.5rem] leading-tight italic">&ldquo;{o.q}&rdquo;</p>
              <p className="mt-2.5 text-[1rem] leading-[1.7] text-graphite [text-wrap:pretty]">{o.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closer */}
      <section className="bg-brand py-[clamp(56px,9vh,110px)] text-cream">
        <div className="mx-auto grid max-w-shell items-center gap-[clamp(28px,5vw,64px)] px-[clamp(18px,3.4vw,44px)] lg:grid-cols-2">
          <h2 className="display text-[clamp(2.25rem,5.5vw,4rem)] leading-[0.98]">{v.closer}</h2>
          <WaitlistForm tone="dark" source={`lp-${params.variant}-footer`} />
        </div>
      </section>
    </main>
  );
}
