import type { Metadata } from "next";
import Image from "next/image";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Shop",
  description:
    "A department in a box — contracts, rate cards, trackers and invoices we built for ourselves first. Buy the one you're bleeding from.",
};

export default function ShopPage() {
  return (
    <main style={{ paddingTop: "var(--chrome-offset)" }}>
      {/* Hero */}
      <section className="striped relative flex min-h-[54vh] items-end overflow-hidden">
        <Image src="/img/overhead-camera.jpg" alt="" fill sizes="100vw" className="object-cover object-[50%_40%]" priority />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,21,18,0.25)_0%,rgba(26,21,18,0.8)_100%)]" />
        <div className="relative mx-auto w-full max-w-shell px-[clamp(18px,3.4vw,44px)] py-[clamp(44px,7vh,82px)] text-cream">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] opacity-70">The Shop</p>
          <h1 className="display mt-4 text-[clamp(2.6rem,6.6vw,5.2rem)] leading-[0.94]">
            A department <span className="ital">in a box.</span>
          </h1>
          <p className="mt-[18px] max-w-[52ch] text-[1.05rem] leading-[1.65] text-cream/[0.82] [text-wrap:pretty]">
            Every file in here is one we built for ourselves first, usually the week after something went wrong. Buy
            the one you&rsquo;re bleeding from — it all credits toward the course later.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="bg-cream pb-[clamp(72px,11vh,132px)] pt-[clamp(54px,8vh,100px)]">
        <div className="mx-auto grid max-w-shell gap-[clamp(28px,3.4vw,56px)] px-[clamp(18px,3.4vw,44px)] [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
