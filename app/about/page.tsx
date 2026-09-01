import type { Metadata } from "next";
import Image from "next/image";
import { Btn } from "@/components/ui";
import { beliefs } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Maya & Sky rebuilt the company they walked out of. Why Collegare Studio exists, what we believe, and how we work.",
};

export default function AboutPage() {
  return (
    <main className="bg-cream" style={{ paddingTop: "var(--chrome-offset)" }}>
      {/* Hero */}
      <section className="relative flex min-h-[min(78vh,720px)] items-end overflow-hidden bg-ink">
        <div data-drift="0.05" className="absolute inset-x-0 -inset-y-[6%]">
          <Image src="/img/night.jpg" alt="Maya and Sky" fill sizes="100vw" priority className="object-cover object-[50%_38%]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,21,18,0.28)_0%,rgba(26,21,18,0.35)_45%,rgba(26,21,18,0.85)_100%)]" />
        <div className="relative mx-auto w-full max-w-shell px-[clamp(18px,3.4vw,44px)] py-[clamp(44px,8vh,90px)] text-cream">
          <p className="text-[11px] font-semibold uppercase tracking-label opacity-75">The Studio &middot; Maya &amp; Sky</p>
          <h1 className="display mt-[clamp(18px,3vh,34px)] max-w-[18ch] text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.93]">
            We rebuilt the company <span className="ital">we walked out of.</span>
          </h1>
        </div>
      </section>

      {/* Why this exists */}
      <section className="bg-cream py-[clamp(64px,10vh,130px)]">
        <div className="mx-auto max-w-text px-[clamp(18px,3.4vw,44px)]">
          <p data-reveal className="label !text-brand">Why this exists</p>
          <h2 data-reveal className="display mt-[clamp(24px,3.6vh,44px)] max-w-[20ch] text-[clamp(2rem,5.2vw,4.2rem)] leading-[0.98]">
            Nobody hands creators <span className="ital text-brand">a back office.</span>
          </h2>
          <p data-reveal className="mt-[clamp(26px,4vh,48px)] max-w-[62ch] text-[1.02rem] leading-[1.85] text-graphite [text-wrap:pretty]">
            You learn to make things people love, and then you learn — usually the expensive way — that loving the work
            and running the company are two different jobs.
          </p>
        </div>
      </section>

      {/* Origin */}
      <section className="striped py-[clamp(64px,10vh,130px)]">
        <div className="mx-auto grid max-w-shell items-center gap-[clamp(30px,5vw,76px)] px-[clamp(18px,3.4vw,44px)] [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          <div>
            <p data-reveal className="text-[11px] font-semibold uppercase tracking-label text-cream/60">Origin</p>
            <h2 data-reveal className="display mt-[clamp(20px,3vh,36px)] text-[clamp(1.9rem,4.4vw,3.4rem)] leading-none">
              The invoice that sat <span className="ital">for ninety days.</span>
            </h2>
            <p data-reveal className="mt-[clamp(22px,3.4vh,40px)] max-w-[50ch] text-[0.98rem] leading-[1.85] text-cream/[0.82] [text-wrap:pretty]">
              That&rsquo;s the short version. A deal we were proud of, a contract we didn&rsquo;t read closely enough,
              and three months of chasing money we&rsquo;d already earned. We built the entity, the rate card, the
              tracker and the collection process out of that — then watched every creator we know go through the same
              thing alone, from scratch, in the same order.
            </p>
            <p data-reveal className="mt-4 max-w-[50ch] text-[0.98rem] leading-[1.85] text-cream">
              Collegare is us refusing to let that keep being the curriculum.
            </p>
          </div>
          <div className="relative min-h-[clamp(360px,52vh,560px)]">
            <div data-drift="-0.09" className="absolute right-0 top-0 aspect-[4/5] w-[78%]">
              <Image src="/img/desk-work.jpg" alt="Maya and Sky working" fill sizes="40vw" className="object-cover" />
            </div>
            <div data-drift="0.13" className="absolute bottom-0 left-0 aspect-square w-[56%] shadow-[16px_-16px_0_#240A06]">
              <Image src="/img/desk-laptops.jpg" alt="Maya and Sky" fill sizes="30vw" className="object-cover object-[50%_45%]" />
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="bg-cream py-[clamp(64px,10vh,130px)]">
        <div className="mx-auto max-w-shell px-[clamp(18px,3.4vw,44px)]">
          <p data-reveal className="label !text-brand">What we believe</p>
          <div className="mt-[clamp(30px,4.6vh,56px)] grid [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
            {beliefs.map((b) => (
              <div key={b.t} data-reveal className="border-t-2 border-ink pb-[clamp(24px,3vw,40px)] pr-[clamp(0px,2vw,28px)] pt-5">
                <h3 className="display text-[clamp(1.4rem,2.4vw,1.9rem)] leading-[1.05]">{b.t}</h3>
                <p className="mt-3.5 text-[0.95rem] leading-[1.8] text-graphite [text-wrap:pretty]">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-linen py-[clamp(56px,9vh,110px)]">
        <div className="mx-auto grid max-w-text items-center gap-[clamp(26px,4vw,60px)] px-[clamp(18px,3.4vw,44px)] [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          <div data-drift="0.06" className="relative aspect-[4/3] w-full">
            <Image src="/img/selfie.jpg" alt="Maya and Sky" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <p className="label !text-brand">How we work</p>
            <p className="mt-[clamp(18px,2.6vh,30px)] font-serif text-[clamp(1.4rem,2.6vw,2.1rem)] italic leading-[1.35] text-ink [text-wrap:pretty]">
              &ldquo;Everything we teach is something we run in our own business first — usually the week after it went
              wrong.&rdquo;
            </p>
            <p className="mt-[18px] text-[10.5px] font-semibold uppercase tracking-label text-mute">Maya &amp; Sky, founders</p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative flex min-h-[min(80vh,760px)] items-end overflow-hidden bg-ink">
        <div data-drift="-0.05" className="absolute inset-x-0 -inset-y-[6%]">
          <Image src="/img/duo-studio.jpg" alt="Maya and Sky" fill sizes="100vw" className="object-cover object-[50%_22%]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,21,18,0.15)_0%,rgba(26,21,18,0.45)_55%,rgba(26,21,18,0.88)_100%)]" />
        <div className="relative mx-auto grid w-full max-w-shell items-end gap-[clamp(20px,4vw,48px)] px-[clamp(18px,3.4vw,44px)] py-[clamp(44px,8vh,90px)] text-cream [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-label opacity-75">Maya &amp; Sky</p>
            <h2 className="display mt-[clamp(16px,2.6vh,30px)] max-w-[18ch] text-[clamp(2rem,5.2vw,4rem)] leading-[0.98]">
              Built to keep <span className="ital">making.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-self-end">
            <Btn href="/waitlist" variant="light" arrow>Join the waitlist</Btn>
            <Btn href="mailto:hello@collegarestudio.com" variant="outline-cream" external>Say hello</Btn>
          </div>
        </div>
      </section>
    </main>
  );
}
