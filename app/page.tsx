import Image from "next/image";
import Link from "next/link";
import { WaitlistForm } from "@/components/waitlist-form";
import { FilmBand } from "@/components/film-band";
import { HeroVideo } from "@/components/hero-video";
import { ProductCard } from "@/components/product-card";
import { Btn, TextLink } from "@/components/ui";
import { ctaLabel, marqueeWords, courseChips, products } from "@/lib/site";

export default function Home() {
  const marqueeRun = [...Array(4).fill(marqueeWords).flat()];
  const marqueeTrack = [...marqueeRun, ...marqueeRun];

  return (
    <main>
      {/* HERO */}
      <HeroVideo src="/img/hero.mp4" poster="/img/hero-2.jpg">

        <div className="relative box-border flex min-h-[max(660px,100svh)] flex-col items-center justify-center gap-[clamp(18px,3vh,34px)] px-[clamp(18px,5vw,60px)] pb-[104px] pt-[132px] text-center text-cream">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo-cream.png" alt="Collegare Studio" className="hero-in h-auto w-[min(72vw,820px)]" />
          <p className="hero-in font-serif text-[clamp(1.5rem,3.2vw,2.6rem)] italic leading-none" style={{ animationDelay: "160ms" }}>
            Work hard, create smarter.
          </p>
          <div className="hero-in flex flex-wrap justify-center gap-3" style={{ animationDelay: "300ms" }}>
            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2.5 rounded-[2px] bg-brand px-7 py-4 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-cream transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-brand-hover"
            >
              {ctaLabel} <span>&rarr;</span>
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center gap-2.5 rounded-[2px] border-[1.5px] border-cream/75 bg-ink/55 px-7 py-4 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-cream backdrop-blur-[3px] transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-cream/[0.22]"
            >
              Explore the Academy
            </Link>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 px-[clamp(18px,3.4vw,44px)] pb-6 text-cream">
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] opacity-70">One person. Every department.</span>
          <span className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] opacity-80">
            Scroll
            <span className="relative inline-block h-[30px] w-px overflow-hidden bg-cream/30">
              <span className="absolute inset-0 animate-cue bg-cream" />
            </span>
          </span>
        </div>
      </HeroVideo>

      {/* MARQUEE */}
      <div className="overflow-hidden bg-brand py-3.5 text-cream">
        <div className="flex w-max animate-marq-36 gap-7 whitespace-nowrap">
          {marqueeTrack.map((w, i) => (
            <span key={i} className="flex items-center gap-7 text-[12px] font-semibold uppercase tracking-[0.16em]">
              {w}
              <span className="opacity-50">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* MAKE MORE. FOR LONGER. */}
      <section className="bg-cream py-[clamp(90px,15vh,190px)]">
        <div className="mx-auto max-w-[1000px] px-[clamp(20px,5vw,48px)] text-center">
          <p data-reveal className="label !text-brand">Sustainability</p>
          <h2 data-reveal className="display mt-[clamp(34px,5vh,58px)] text-[clamp(2.6rem,6.6vw,5.4rem)] leading-[0.96]">
            Make more. <span className="ital text-brand">For longer.</span>
          </h2>
          <p data-reveal className="mx-auto mt-[clamp(34px,5vh,56px)] max-w-[56ch] text-[0.98rem] leading-[1.85] text-graphite [text-wrap:pretty]">
            Every hour you spend reconstructing what a brand owes you is an hour you didn&rsquo;t spend making
            something. The more of your week the business eats, the less of you is left for the work — and the work is
            the only part that compounds. A staffed business isn&rsquo;t the opposite of being creative. It&rsquo;s the
            only version of this that lasts past year three.
          </p>
          <div data-reveal className="mt-[clamp(34px,5vh,54px)] flex justify-center">
            <Btn href="/waitlist" variant="outline-ink">Join the waitlist</Btn>
          </div>
        </div>
      </section>

      {/* COLLECTIVE FILM BAND */}
      <FilmBand />

      {/* CREATIVITY ISN'T WHAT RUNS OUT */}
      <section className="bg-linen py-[clamp(84px,13vh,170px)]">
        <div className="mx-auto max-w-[1000px] px-[clamp(20px,5vw,48px)] text-center">
          <p data-reveal className="label !text-brand">The whole business</p>
          <h2 data-reveal className="display mt-[clamp(30px,4.5vh,52px)] text-[clamp(2.2rem,5.4vw,4.4rem)] leading-[0.98]">
            Creativity isn&rsquo;t <span className="ital text-brand">what runs out.</span>
          </h2>
          <p data-reveal className="mx-auto mt-[clamp(30px,4.5vh,50px)] max-w-[56ch] text-[0.98rem] leading-[1.85] text-graphite [text-wrap:pretty]">
            You didn&rsquo;t get worse at making things. You started doing four other jobs at the same time — chasing
            the invoice, guessing the rate, skimming the contract, remembering the deadline. That&rsquo;s the tax
            nobody warned you about, and it&rsquo;s why creators burn out on their second good year instead of their
            tenth. Burnout is a business problem. So we fixed it like one.
          </p>
        </div>
      </section>

      {/* THREE OFFERING BLOCKS */}
      <OfferingBlock
        bg="bg-cream"
        img="/img/desk-laptops.jpg"
        objectPosition="50% 42%"
        eyebrow="Start where the gap is"
        title="A department in a box."
        body="The contracts, rate cards, trackers and invoices we run our own company on. Buy the one you're bleeding from."
        href="/shop"
        cta="Browse the shop"
        variant="light"
      />
      <OfferingBlock
        bg="striped"
        img="/img/overhead-reading.jpg"
        objectPosition="50% 45%"
        eyebrow="Start where the gap is"
        title="The onboarding you never got."
        body="Every company you've worked for trained you. Nobody trained you into this one. Short lessons, real teardowns, one action each."
        href="/academy"
        cta="Learn more"
        variant="dark"
        imageRight
      />
      <OfferingBlock
        bg="bg-linen"
        img="/img/duo-studio.jpg"
        objectPosition="50% 38%"
        eyebrow="Start where the gap is"
        title="The coworkers you lost."
        body="Going out on your own also meant nobody to ask “does this rate look insane to you?” This is that room — standups, deal reviews, and a feed where you can post a real number."
        href="/collective"
        cta="Inside the Collective"
        variant="light"
      />

      {/* INLINE CAPTURE BAND */}
      <section className="border-t border-ink/[0.14] bg-linen">
        <div className="mx-auto grid max-w-shell items-center gap-[clamp(24px,4vw,60px)] px-[clamp(18px,3.4vw,44px)] py-[clamp(44px,7vh,76px)] [grid-template-columns:repeat(auto-fit,minmax(290px,1fr))]">
          <div>
            <h3 data-reveal className="display text-[clamp(1.7rem,3.4vw,2.6rem)] leading-none">
              Four vacancies. <span className="ital text-brand">One list to fix them.</span>
            </h3>
            <p data-reveal className="mt-3 max-w-[44ch] text-[1rem] leading-[1.6] text-graphite">
              The Academy and the Collective open to the waitlist first. Twenty founding seats, then it&rsquo;s full
              price for everyone else.
            </p>
          </div>
          <div data-reveal>
            <WaitlistForm tone="light" source="home-inline" />
          </div>
        </div>
      </section>

      {/* COURSE SPOTLIGHT */}
      <section className="striped">
        <div className="mx-auto grid max-w-shell items-center gap-[clamp(32px,5vw,72px)] px-[clamp(18px,3.4vw,44px)] py-[clamp(72px,11vh,132px)] [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          <div className="overflow-hidden">
            <div className="relative aspect-[4/5] w-full">
              <Image src="/img/hero-3.jpg" alt="" fill sizes="(max-width:900px) 100vw, 50vw" className="object-cover object-[50%_28%]" />
            </div>
          </div>
          <div>
            <p data-reveal className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-cream/60">The flagship</p>
            <h2 data-reveal className="display mt-[18px] text-[clamp(2.3rem,5.2vw,4.2rem)] leading-[0.94]">The Creator Business Course.</h2>
            <p data-reveal className="mt-[22px] max-w-[48ch] text-[1.06rem] leading-[1.65] text-cream/80 [text-wrap:pretty]">
              Eight modules that staff every empty department. You finish with an entity, a rate you can defend out
              loud, a contract you understand, a pipeline you can see, and a content system that runs without you
              burning out to feed it.
            </p>
            <div data-reveal className="mt-[26px] flex flex-wrap gap-2">
              {courseChips.map((c) => (
                <span key={c} className="border border-cream/30 px-3.5 py-2 text-[10.5px] font-semibold uppercase tracking-[0.14em]">
                  {c}
                </span>
              ))}
            </div>
            <div data-reveal className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="/waitlist"
                className="rounded-[2px] bg-brand px-6 py-3.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:bg-brand-hover"
              >
                Claim a founding seat &rarr;
              </Link>
              <Link href="/academy" className="border-b border-cream/40 pb-[3px] text-[11.5px] font-semibold uppercase tracking-[0.14em] text-cream/85 hover:text-cream">
                Full curriculum
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP PREVIEW */}
      <section className="bg-linen py-[clamp(72px,11vh,130px)]">
        <div className="mx-auto max-w-shell px-[clamp(18px,3.4vw,44px)]">
          <div className="flex flex-wrap items-end justify-between gap-[18px]">
            <div>
              <p data-reveal className="label !text-brand">The Shop</p>
              <h2 data-reveal className="display mt-3 text-[clamp(2rem,4.2vw,3.2rem)] leading-none">A department in a box.</h2>
            </div>
            <TextLink href="/shop">All files &rarr;</TextLink>
          </div>
          <div className="mt-[clamp(34px,5vh,56px)] grid gap-[clamp(24px,3vw,48px)] [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
            {products.slice(0, 3).map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-shell items-center gap-[clamp(32px,5vw,72px)] px-[clamp(18px,3.4vw,44px)] py-[clamp(72px,11vh,130px)] [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          <div className="grid grid-cols-2 gap-3">
            <div data-reveal className="relative aspect-[4/5] w-full">
              <Image src="/img/night.jpg" alt="" fill sizes="25vw" className="object-cover" />
            </div>
            <div data-reveal className="relative mt-[38px] aspect-[4/5] w-full">
              <Image src="/img/desk-work.jpg" alt="" fill sizes="25vw" className="object-cover" />
            </div>
          </div>
          <div>
            <p data-reveal className="label !text-brand">Who&rsquo;s teaching</p>
            <h2 data-reveal className="display mt-[clamp(26px,3.4vw,42px)] text-[clamp(2.1rem,4.4vw,3.5rem)] leading-[0.98]">
              We rebuilt the company <span className="ital text-brand">we walked out of.</span>
            </h2>
            <p data-reveal className="mt-5 max-w-[48ch] text-[1.05rem] leading-[1.7] text-graphite [text-wrap:pretty]">
              Collegare came out of running a real creator business — the deals we were proud of, the contract we
              should have read twice, the invoice that sat for ninety days while we kept posting. We built the finance
              and legal and ops functions after we got burned, one at a time, late and badly.
            </p>
            <p data-reveal className="mt-3.5 max-w-[48ch] text-[1.05rem] leading-[1.7] text-graphite">
              You don&rsquo;t have to do it in that order.
            </p>
            <div data-reveal className="mt-[26px]">
              <TextLink href="/about">About the studio &rarr;</TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* WAITLIST BAND */}
      <section className="striped">
        <div className="mx-auto grid max-w-shell items-center gap-[clamp(32px,5vw,72px)] px-[clamp(18px,3.4vw,44px)] py-[clamp(72px,11vh,132px)] [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          <div>
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-cream/55">The waitlist</p>
            <h2 className="display mt-[18px] text-[clamp(2.3rem,5.2vw,4.2rem)] leading-[0.94]">
              Doors open to <span className="ital">the list first.</span>
            </h2>
            <p className="mt-[22px] max-w-[40ch] text-[1.05rem] leading-[1.7] text-cream/[0.72] [text-wrap:pretty]">
              Twenty founding seats at $997. After that it&rsquo;s $1,499. The list gets the link before anyone else
              sees it.
            </p>
          </div>
          <div>
            <WaitlistForm tone="dark" source="home" />
          </div>
        </div>
      </section>
    </main>
  );
}

function OfferingBlock({
  bg,
  img,
  objectPosition,
  eyebrow,
  title,
  body,
  href,
  cta,
  variant,
  imageRight = false,
}: {
  bg: string;
  img: string;
  objectPosition: string;
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  variant: "light" | "dark";
  imageRight?: boolean;
}) {
  const dark = variant === "dark";
  const media = (
    <div className="group relative min-h-[56vh] overflow-hidden">
      <Image
        src={img}
        alt=""
        fill
        sizes="(max-width:900px) 100vw, 50vw"
        style={{ objectPosition }}
        className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.04]"
      />
    </div>
  );
  const copy = (
    <div className="flex flex-col justify-center px-[clamp(24px,5vw,88px)] py-[clamp(44px,6.5vw,96px)]">
      <p data-reveal className={`label ${dark ? "!text-cream/60" : "!text-ink/60"}`}>{eyebrow}</p>
      <h3 data-reveal className="display mt-[clamp(26px,3.4vw,42px)] text-[clamp(2.1rem,4.2vw,3.6rem)] leading-[0.98]">{title}</h3>
      <p data-reveal className={`mt-[clamp(26px,3.4vw,40px)] max-w-[48ch] text-[0.97rem] leading-[1.85] [text-wrap:pretty] ${dark ? "text-cream/80" : "text-ink/80"}`}>{body}</p>
      <div data-reveal className="mt-[clamp(28px,3.6vw,44px)]">
        <Btn href={href} variant={dark ? "outline-cream" : "outline-ink"} arrow className="!rounded-[2px]">{cta}</Btn>
      </div>
    </div>
  );

  return (
    <section className={`${bg} border-b border-ink/[0.12]`}>
      <div className="grid min-h-[68vh] items-stretch md:grid-cols-2">
        {imageRight ? (
          <>
            <div className="max-md:order-2">{copy}</div>
            {media}
          </>
        ) : (
          <>
            {media}
            {copy}
          </>
        )}
      </div>
    </section>
  );
}
