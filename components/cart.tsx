"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products, type Product } from "@/lib/site";

type CartValue = {
  items: string[]; // product slugs (digital goods → one of each)
  add: (slug: string) => void;
  remove: (slug: string) => void;
  has: (slug: string) => boolean;
  clear: () => void;
  count: number;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Ctx = createContext<CartValue | null>(null);
const KEY = "cs-cart-v1";

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used within CartProvider");
  return c;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items, hydrated]);

  const add = useCallback((slug: string) => {
    setItems((p) => (p.includes(slug) ? p : [...p, slug]));
    setOpen(true);
  }, []);
  const remove = useCallback((slug: string) => setItems((p) => p.filter((s) => s !== slug)), []);
  const clear = useCallback(() => setItems([]), []);
  const has = useCallback((slug: string) => items.includes(slug), [items]);

  const value = useMemo<CartValue>(
    () => ({ items, add, remove, has, clear, count: items.length, open, setOpen }),
    [items, add, remove, has, clear, open]
  );

  return (
    <Ctx.Provider value={value}>
      {children}
      <CartDrawer />
    </Ctx.Provider>
  );
}

function subtotalOf(slugs: string[]) {
  return slugs.reduce((n, slug) => {
    const p = products.find((x) => x.slug === slug);
    const v = p ? parseFloat(p.price.replace(/[^0-9.]/g, "")) : 0;
    return n + (Number.isNaN(v) ? 0 : v);
  }, 0);
}

function CartDrawer() {
  const { items, open, setOpen, remove, clear, count } = useCart();
  const lineItems = items
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean) as Product[];
  const subtotal = subtotalOf(items);

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-[70] bg-ink/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        role="dialog"
        aria-label="Your cart"
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-[71] flex h-full w-[min(420px,92vw)] flex-col bg-cream shadow-[0_0_60px_rgba(26,21,18,0.35)] transition-transform duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink/[0.14] px-6 py-5">
          <p className="label !text-ink">Your cart ({count})</p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close cart"
            className="text-[18px] leading-none text-ink transition-colors hover:text-brand"
          >
            &times;
          </button>
        </div>

        {lineItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="text-graphite">Your cart is empty.</p>
            <Link
              href="/shop"
              onClick={() => setOpen(false)}
              className="btn btn-solid"
            >
              Browse the shop
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {lineItems.map((p) => (
                <div key={p.slug} className="flex gap-4 border-b border-ink/[0.1] py-4">
                  <div className="relative aspect-[4/5] w-16 flex-none overflow-hidden bg-linen">
                    {p.img ? (
                      <Image src={p.img} alt="" fill sizes="64px" className="object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-stripe-ground">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/img/logo-red.png" alt="" className="w-10 opacity-80" />
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="truncate font-display text-[1.05rem] font-bold tracking-[-0.02em]">{p.name}</p>
                      <span className="shrink-0 text-[0.95rem] text-brand">{p.price}</span>
                    </div>
                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-label text-mute">{p.tag}</p>
                    <div className="mt-2 flex items-center gap-4">
                      <Link
                        href={`/shop/${p.slug}`}
                        onClick={() => setOpen(false)}
                        className="text-[10.5px] font-semibold uppercase tracking-label text-brand hover:text-brand-deep"
                      >
                        Check out &rarr;
                      </Link>
                      <button
                        type="button"
                        onClick={() => remove(p.slug)}
                        className="text-[10.5px] font-semibold uppercase tracking-label text-mute hover:text-ink"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-ink/[0.14] px-6 py-5">
              <div className="flex items-baseline justify-between">
                <span className="label !text-ink">Subtotal</span>
                <span className="font-display text-[1.4rem] font-extrabold tracking-[-0.02em]">
                  ${subtotal.toFixed(0)}
                </span>
              </div>
              <p className="mt-3 text-[0.8rem] leading-[1.5] text-mute">
                Each template checks out securely on its own — use <strong className="font-semibold text-graphite">Check
                out</strong> on any item above.
              </p>
              <button
                type="button"
                onClick={clear}
                className="mt-4 text-[10.5px] font-semibold uppercase tracking-label text-mute hover:text-ink"
              >
                Clear cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
