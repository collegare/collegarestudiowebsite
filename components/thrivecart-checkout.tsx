"use client";

import { useEffect } from "react";

/**
 * Renders a ThriveCart v2 embeddable checkout inline.
 * Pass the values from a product's ThriveCart embed snippet:
 *   data-thrivecart-account, data-thrivecart-product, data-thrivecart-embeddable.
 * The ThriveCart script is (re)injected on mount so it finds and hydrates the target
 * even after client-side route changes.
 */
export function ThriveCartCheckout({
  account,
  product,
  embeddable,
  tpl = "v2",
}: {
  account: string;
  product: string;
  embeddable: string;
  tpl?: string;
}) {
  useEffect(() => {
    document.getElementById(embeddable)?.remove();
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://tinder.thrivecart.com/embed/v2/thrivecart.js";
    s.id = embeddable;
    document.body.appendChild(s);
    return () => {
      document.getElementById(embeddable)?.remove();
    };
  }, [embeddable]);

  return (
    <div
      className="tc-v2-embeddable-target"
      data-thrivecart-account={account}
      data-thrivecart-tpl={tpl}
      data-thrivecart-product={product}
      data-thrivecart-embeddable={embeddable}
    />
  );
}
