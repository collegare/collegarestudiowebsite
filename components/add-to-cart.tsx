"use client";

import { useCart } from "@/components/cart";

export function AddToCart({ slug, variant = "solid" }: { slug: string; variant?: "solid" | "compact" }) {
  const { has, add, setOpen } = useCart();
  const inCart = has(slug);

  const base =
    "inline-flex cursor-pointer items-center justify-center gap-2 font-body font-semibold uppercase tracking-label transition-all duration-200";
  const cls =
    variant === "compact"
      ? `${base} rounded-full border-[1.5px] px-4 py-2 text-[10px] ${
          inCart ? "border-brand bg-brand text-cream" : "border-ink/30 text-ink hover:border-brand hover:text-brand"
        }`
      : `${base} rounded-full px-7 py-4 text-[11px] ${
          inCart ? "bg-brand-deep text-cream" : "bg-brand text-cream hover:-translate-y-0.5 hover:bg-brand-hover"
        }`;

  return (
    <button type="button" onClick={() => (inCart ? setOpen(true) : add(slug))} className={cls}>
      {inCart ? "In cart ✓" : "Add to cart"}
    </button>
  );
}
