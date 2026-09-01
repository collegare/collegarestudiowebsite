import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ThriveCartCheckout } from "@/components/thrivecart-checkout";
import { Btn } from "@/components/ui";
import { products } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = products.find((x) => x.slug === params.slug);
  if (!p) return { title: "The Shop" };
  return { title: p.name, description: p.copy };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = products.find((x) => x.slug === params.slug);
  if (!p) notFound();

  return (
    <main className="bg-cream" style={{ paddingTop: "var(--chrome-offset)" }}>
      <section className="py-[clamp(36px,6vh,84px)]">
        <div className="mx-auto max-w-shell px-[clamp(18px,3.4vw,44px)]">
          <Link href="/shop" className="label !text-brand transition-colors hover:!text-brand-deep">
            &larr; The Shop
          </Link>

          <div className="mt-6 grid items-start gap-[clamp(28px,4vw,64px)] lg:grid-cols-2">
            {/* Media */}
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              {p.img ? (
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
              ) : (
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: "#FBF3E6",
                    backgroundImage: "url('/img/stripe.jpg')",
                    backgroundSize: "auto 100%",
                    backgroundRepeat: "repeat",
                  }}
                >
                  <div className="absolute inset-[clamp(18px,8%,42px)] flex flex-col items-center justify-center gap-3.5 bg-cream p-5 text-center shadow-[0_14px_34px_rgba(26,21,18,0.16)]">
                    <span className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-brand">{p.tag}</span>
                    <span className="font-serif text-[clamp(1.3rem,2.2vw,1.8rem)] italic leading-[1.15] text-ink">{p.name}</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/img/logo-red.png" alt="" className="h-auto w-24 opacity-90" />
                  </div>
                </div>
              )}
            </div>

            {/* Info + checkout */}
            <div>
              <div className="flex items-baseline justify-between gap-3 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-mute">
                <span>{p.tag}</span>
                <span className="text-brand">{p.price}</span>
              </div>
              <h1 className="display mt-3 text-[clamp(2rem,4.4vw,3.4rem)] leading-none">{p.name}</h1>
              <p className="mt-4 max-w-[46ch] text-[1rem] leading-[1.8] text-graphite [text-wrap:pretty]">{p.copy}</p>
              <p className="mt-3 text-[9.5px] font-semibold uppercase tracking-label text-brand">{p.state}</p>

              <div className="mt-9">
                {p.thrivecart ? (
                  <ThriveCartCheckout {...p.thrivecart} />
                ) : (
                  <div className="border-t border-ink/[0.16] pt-6">
                    <p className="max-w-[44ch] text-[0.95rem] leading-[1.7] text-graphite">
                      Checkout for this one opens with the launch. Join the waitlist and you&rsquo;ll get it first.
                    </p>
                    <div className="mt-5">
                      <Btn href="/waitlist" variant="solid" arrow>Join the waitlist</Btn>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
