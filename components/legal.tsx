import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Shell, Eyebrow } from "@/components/ui";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="bg-paper">
        <Shell className="max-w-3xl py-20 lg:py-28">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="display mt-7 text-[clamp(2.5rem,6vw,4.5rem)]">{title}</h1>
          <p className="label mt-5">Last updated {updated}</p>
          <div className="mt-12 space-y-8 leading-relaxed text-graphite [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-ink [&_a]:text-oxblood [&_a]:underline">
            <div className="border-l-2 border-ember bg-bone/60 p-5 font-mono text-[11px] uppercase tracking-label text-ember">
              Draft placeholder — have counsel review before running paid traffic.
            </div>
            {children}
          </div>
        </Shell>
      </main>
      <SiteFooter />
    </>
  );
}
