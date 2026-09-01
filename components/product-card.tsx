import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/site";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="group flex flex-col text-ink transition-colors hover:text-brand">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        {product.img ? (
          <Image
            src={product.img}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.03]"
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
              <span className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-brand">{product.tag}</span>
              <span className="font-serif text-[clamp(1.3rem,2.2vw,1.8rem)] italic leading-[1.15] text-ink">
                {product.name}
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/logo-red.png" alt="" className="h-auto w-24 opacity-90" />
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-3 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-mute">
        <span>{product.tag}</span>
        <span className="text-brand">{product.price}</span>
      </div>
      <h3 className="display mt-2 text-[clamp(1.3rem,2vw,1.7rem)] leading-[1.05] text-inherit">{product.name}</h3>
      <p className="mt-2.5 text-[0.93rem] leading-[1.75] text-graphite [text-wrap:pretty]">{product.copy}</p>
      <span className="mt-3 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-brand">{product.state}</span>
    </Link>
  );
}
