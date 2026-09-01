import Link from "next/link";
import type { ReactNode } from "react";

type BtnVariant = "solid" | "light" | "outline-ink" | "outline-cream";

const variantClass: Record<BtnVariant, string> = {
  solid: "btn btn-solid",
  light: "btn btn-light",
  "outline-ink": "btn btn-outline-ink",
  "outline-cream": "btn btn-outline-cream",
};

export function Btn({
  href,
  children,
  variant = "solid",
  arrow = false,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: BtnVariant;
  arrow?: boolean;
  external?: boolean;
  className?: string;
}) {
  const cls = `${variantClass[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow ? <span aria-hidden>&rarr;</span> : null}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** Underlined text link (brand rule under it) used for inline "see more" actions. */
export function TextLink({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  const cls = `label !text-ink border-b-[1.5px] border-brand pb-[3px] transition-colors hover:!text-brand ${className}`;
  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
