import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Btn } from "@/components/ui";
import { modules, included, courseFaq } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Academy",
  description:
    "Know your number. Get it paid. Eight modules and 42 short lessons that hand creators the four departments they never got — money, contracts, deals, systems. $997 founding, first 20.",
};

const collage = [
  { src: "hero-1", style: { left: "2%", top: "8%", width: "clamp(120px,13vw,205px)" }, rotate: -5, drift: "0.10", pos: "50% 30%" },
  { src: "overhead-reading", style: { right: "3%", top: "4%", width: "clamp(130px,14vw,215px)" }, rotate: 4, drift: "-0.14", pos: "50% 50%" },
  { src: "night", style: { left: "8%", bottom: "5%", width: "clamp(120px,12vw,190px)" }, rotate: 6, drift: "-0.08", pos: "50% 40%" },
  { src: "hero-4", style: { right: "7%", bottom: "3%", width: "clamp(135px,14vw,220px)" }, rotate: -4, drift: "0.13", pos: "50% 40%" },
  { src: "desk-laptops", style: { left: "1%", top: "46%", width: "clamp(96px,9vw,150px)" }, rotate: 3, drift: "0.18", pos: "50% 50%" },
  { src: "coll-3", style: { right: "1.5%", top: "50%", width: "clamp(100px,10vw,160px)" }, rotate: -6, drift: "-0.17", pos: "50% 40%" },
];

const rightPlace = [
  "You quoted a number, they said yes instantly, and you felt sick about it.",
  "A brand still owes you money and you don’t know what to send next.",
  "You signed something with the word “perpetuity” in it.",
  "Your pipeline is three inboxes, a Notes app, and your memory.",
];
const before = [
  "A rate you guess at, then apologise for.",
  "Contracts you skim and hope about.",
  "Money you’re owed, tracked in your head.",
  "A week that eats the work.",
];
const after = [
  "A rate card built from your numbers — said out loud, held.",
  "Contracts you understand, with the three clauses fixed.",
  "A pipeline that shows every deal and every dollar owed.",
  "Hours back, spent on the thing that compounds.",
];

export default function AcademyPage() {
  return (
    <main className="bg-cream" style={{ paddingTop: "var(--chrome-offset)" }}>
      {/* Scattered-collage hero */}
      <section className="relative flex min-h-[min(90vh,820px)] items-center justify-center overflow-hidden bg-cream px-[clamp(18px,4vw,44px)] py-[clamp(60px,9vh,120px)]">
        {collage.map((c) => (
          <div
            key={c.src}
            data-drift={c.drift}
            className="absolute aspect-[3/4] shadow-[0_18px_50px_rgba(26,21,18,0.18)]"
            style={{ ...c.style, transform: `rotate(${c.rotate}deg)` }}
          >
            <Image src={`/img/${c.src}.jpg`} alt="" fill sizes="220px" style={{ objectPosition: c.pos }} className="object-cover" />
          </div>
        ))}
        <div className="relative max-w-[820px] rounded-[3px] bg-[rgba(253,250,240,0.92)] px-[clamp(24px,4vw,56px)] py-[clamp(32px,5vw,62px)] text-center backdrop-blur-[6px]">
          <p className="label !text-brand">The Academy &middot; Opens to the waitlist first</p>
          <h1 className="display mt-[clamp(22px,3.4vh,42px)] text-[clamp(2.9rem,7.4vw,6.2rem)] leading-[0.92]">
            Know your number. <span className="ital text-brand">Get it paid.</span>
          </h1>
          <p className="mx-auto mt-[clamp(24px,3.6vh,44px)] max-w-[52ch] text-[1rem] leading-[1.8] text-graphite [text-wrap:pretty]">
            Eight modules and 42 short lessons that hand you the four departments you never got — money, contracts,
            deals, systems — so the making can keep going.
          </p>
          <div className="mt-[clamp(26px,4vh,46px)] flex flex-wrap items-center justify-center gap-3.5">
            <Btn href="/waitlist" variant="solid">Join the waitlist</Btn>
            <span className="text-[10.5px] font-semibold uppercase tracking-label text-mute">
              $997 founding &middot; first 20 &middot; $1,499 after
            </span>
          </div>
        </div>
      </section>

      {/* Right place if true */}
      <section className="striped py-[clamp(56px,9vh,110px)]">
        <div className="mx-auto max-w-text px-[clamp(18px,3.4vw,44px)]">
          <h2 data-reveal className="display max-w-[22ch] text-[clamp(1.7rem,3.6vw,2.8rem)] leading-[1.05]">
            You&rsquo;re in the right place if any of this is true.
          </h2>
          <div className="mt-[clamp(30px,4.6vh,54px)] grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
            {rightPlace.map((t, i) => (
              <p
                key={i}
                data-reveal
                className="m-0 grid grid-cols-[42px_1fr] items-baseline gap-3.5 border-t border-cream/[0.24] py-5 text-[1rem] leading-[1.7] text-cream/[0.88]"
              >
                <span className="text-[10px] font-semibold uppercase tracking-label text-salmon">0{i + 1}</span>
                {t}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="bg-cream py-[clamp(64px,10vh,130px)]">
        <div className="mx-auto max-w-text px-[clamp(18px,3.4vw,44px)]">
          <p data-reveal className="label !text-brand">What changes</p>
          <div className="mt-[clamp(30px,4.6vh,56px)] grid items-start gap-[clamp(24px,4vw,64px)] [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
            <div data-reveal>
              <p className="text-[10.5px] font-semibold uppercase tracking-label text-mute">Before</p>
              <ul className="mt-[18px] grid list-none gap-3.5 p-0">
                {before.map((t) => (
                  <li key={t} className="border-t border-ink/[0.14] pt-3.5 text-[1rem] leading-[1.6] text-mute">{t}</li>
                ))}
              </ul>
            </div>
            <div data-reveal>
              <p className="text-[10.5px] font-semibold uppercase tracking-label text-brand">After</p>
              <ul className="mt-[18px] grid list-none gap-3.5 p-0">
                {after.map((t) => (
                  <li key={t} className="border-t-[1.5px] border-brand pt-3.5 text-[1.05rem] leading-[1.6] text-ink">{t}</li>
                ))}
              </ul>
            </div>
            <div data-reveal className="relative min-h-[320px]">
              <div data-drift="-0.08" className="absolute right-0 top-0 aspect-[3/4] w-[82%]">
                <Image src="/img/overhead-camera.jpg" alt="" fill sizes="40vw" className="object-cover" />
              </div>
              <div data-drift="0.12" className="absolute -bottom-[8%] left-0 aspect-square w-[52%] shadow-[14px_-14px_0_#FDFAF0]">
                <Image src="/img/selfie.jpg" alt="" fill sizes="25vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statement band */}
      <section className="relative flex min-h-[min(62vh,600px)] items-center overflow-hidden">
        <div data-drift="0.05" className="absolute inset-x-0 -inset-y-[8%]">
          <Image src="/img/ladder-laptop.jpg" alt="" fill sizes="100vw" className="object-cover object-[50%_28%]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,21,18,0.78)_0%,rgba(26,21,18,0.45)_55%,rgba(26,21,18,0.2)_100%)]" />
        <div className="relative mx-auto w-full max-w-text px-[clamp(18px,3.4vw,44px)] py-[clamp(40px,7vh,80px)] text-cream">
          <h2 className="display max-w-[20ch] text-[clamp(2rem,4.8vw,3.8rem)] leading-none">
            Burnout is a business problem. <span className="ital">So we fixed it like one.</span>
          </h2>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-linen py-[clamp(64px,10vh,130px)]">
        <div className="mx-auto grid max-w-shell items-start gap-[clamp(30px,5vw,80px)] px-[clamp(18px,3.4vw,44px)] lg:[grid-template-columns:minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="lg:sticky lg:top-[130px]">
            <p className="label !text-brand">The modules</p>
            <h2 className="display mt-[clamp(20px,3vh,36px)] text-[clamp(2.2rem,5vw,4rem)] leading-[0.98]">
              Eight modules. <span className="ital">In order.</span>
            </h2>
            <p className="mt-[clamp(20px,3vh,34px)] max-w-[36ch] text-[0.96rem] leading-[1.8] text-graphite">
              Each one ends with a file to fill in, a number to set, or an email to send. Six to eight weeks at a few
              hours a week.
            </p>
            <div data-drift="0.05" className="relative mt-[clamp(24px,3.6vh,40px)] aspect-[4/5] w-full max-w-[340px]">
              <Image src="/img/desk-work.jpg" alt="" fill sizes="340px" className="object-cover" />
            </div>
          </div>
          <div>
            {modules.map((m) => (
              <div
                key={m.n}
                data-reveal
                className="group grid grid-cols-[54px_1fr] items-baseline gap-[clamp(12px,2vw,28px)] border-t border-ink/[0.18] py-[clamp(18px,2.6vw,26px)] transition-[padding] duration-300 hover:pl-2.5"
              >
                <span className="text-[10.5px] font-semibold uppercase tracking-label text-brand">{m.n}</span>
                <div>
                  <h3 className="display text-[clamp(1.4rem,2.6vw,2rem)] leading-[1.02]">{m.t}</h3>
                  <p className="mt-2.5 max-w-[52ch] text-[0.95rem] leading-[1.75] text-graphite [text-wrap:pretty]">{m.d}</p>
                  <p className="mt-2.5 text-[9.5px] font-semibold uppercase tracking-label text-mute">{m.dept}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Everything in the box */}
      <section className="striped py-[clamp(64px,10vh,130px)]">
        <div className="mx-auto max-w-shell px-[clamp(18px,3.4vw,44px)]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 data-reveal className="display text-[clamp(1.9rem,4.2vw,3.2rem)] leading-none">Everything in the box</h2>
            <p data-reveal className="text-[10.5px] font-semibold uppercase tracking-label text-cream/60">Included with every seat</p>
          </div>
          <div className="mt-[clamp(30px,4.6vh,56px)] grid gap-[clamp(20px,3vw,44px)] [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]">
            {included.map((i) => (
              <div key={i.t} data-reveal className="border-t border-cream/[0.28] pt-4">
                <p className="display text-[1.15rem]">{i.t}</p>
                <p className="mt-2.5 text-[0.93rem] leading-[1.75] text-cream/70">{i.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-[clamp(36px,5vh,64px)] grid gap-[clamp(12px,1.8vw,20px)] [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]">
            {[
              { src: "hero-2", drift: "0.09", up: false, pos: "50% 22%" },
              { src: "overhead-laptop", drift: "-0.07", up: true, pos: "50% 50%" },
              { src: "street", drift: "0.13", up: false, pos: "50% 50%" },
              { src: "mirror", drift: "-0.05", up: true, pos: "50% 50%" },
            ].map((it) => (
              <div key={it.src} data-drift={it.drift} className={`relative aspect-[3/4] w-full ${it.up ? "mt-[clamp(14px,3vw,42px)]" : ""}`}>
                <Image src={`/img/${it.src}.jpg`} alt="" fill sizes="(max-width:768px) 50vw, 25vw" style={{ objectPosition: it.pos }} className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-cream py-[clamp(64px,10vh,130px)]">
        <div className="mx-auto grid max-w-text items-stretch gap-[clamp(26px,4vw,60px)] px-[clamp(18px,3.4vw,44px)] [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          <div data-reveal className="flex flex-col border-[1.5px] border-brand p-[clamp(28px,3.6vw,44px)]">
            <p className="label !text-brand">Founding &middot; first 20</p>
            <p className="display mt-[18px] text-[clamp(3rem,6vw,4.6rem)] leading-none">$997</p>
            <p className="mt-4 text-[0.96rem] leading-[1.8] text-graphite">
              Every module, every file, the teardowns, Collective access, lifetime updates, and the live founding
              session with the studio.
            </p>
            <div className="mt-auto pt-[clamp(24px,3.4vh,38px)]">
              <Btn href="/waitlist" variant="solid">Claim a founding seat</Btn>
            </div>
          </div>
          <div data-reveal className="flex flex-col border border-ink/20 p-[clamp(28px,3.6vw,44px)]">
            <p className="label">After the first 20</p>
            <p className="display mt-[18px] text-[clamp(3rem,6vw,4.6rem)] leading-none text-mute">$1,499</p>
            <p className="mt-4 text-[0.96rem] leading-[1.8] text-graphite">
              Same course, same files, without the founding session or the founding price. The waitlist is the only way
              to get the lower number.
            </p>
            <p className="mt-auto pt-[clamp(24px,3.4vh,38px)] text-[10.5px] font-semibold uppercase tracking-label text-mute">
              Payment plans available at launch
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-linen py-[clamp(60px,9vh,120px)]">
        <div className="mx-auto max-w-narrow px-[clamp(18px,3.4vw,44px)]">
          <p data-reveal className="label !text-brand text-center">Questions</p>
          <div className="mt-[clamp(28px,4vh,50px)]">
            {courseFaq.map((f) => (
              <div key={f.q} data-reveal className="border-t border-ink/[0.16] py-[22px]">
                <p className="font-serif text-[1.5rem] leading-[1.2] italic">{f.q}</p>
                <p className="mt-2.5 text-[0.96rem] leading-[1.8] text-graphite [text-wrap:pretty]">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-brand text-cream">
        <div data-drift="-0.06" className="absolute inset-x-0 -inset-y-[8%]">
          <Image src="/img/duo-studio.jpg" alt="" fill sizes="100vw" className="object-cover object-[50%_24%] opacity-30 mix-blend-luminosity" />
        </div>
        <div className="relative mx-auto max-w-[900px] px-[clamp(18px,4vw,44px)] py-[clamp(80px,13vh,170px)] text-center">
          <h2 data-reveal className="display text-[clamp(2.4rem,6.4vw,5rem)] leading-[0.95]">
            Doors open to <span className="ital">the list first.</span>
          </h2>
          <p data-reveal className="mx-auto mt-[clamp(24px,3.6vh,44px)] max-w-[50ch] text-[0.98rem] leading-[1.85] text-cream/[0.88]">
            Twenty founding seats at $997, then $1,499. The Collective opens with it, and the list gets the link before
            anyone else sees it.
          </p>
          <div data-reveal className="mt-[clamp(26px,4vh,46px)] flex flex-wrap justify-center gap-3">
            <Btn href="/waitlist" variant="light" arrow>Join the waitlist</Btn>
            <Btn href="/collective" variant="outline-cream">Inside the Collective</Btn>
          </div>
        </div>
      </section>
    </main>
  );
}
