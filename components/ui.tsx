import Link from "next/link";
import type { ReactNode } from "react";

export function Shell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`shell ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`label flex items-center gap-3 ${className}`}>
      <span className="inline-block h-px w-6 bg-oxblood/60" />
      {children}
    </p>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost" | "light";
  className?: string;
};

export function Button({ href, children, variant = "solid", className = "" }: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-mono text-[11px] uppercase tracking-label transition-all duration-300";
  const styles: Record<string, string> = {
    solid: "bg-oxblood text-linen hover:bg-oxblood-deep hover:-translate-y-0.5",
    outline: "border border-ink/25 text-ink hover:border-oxblood hover:text-oxblood",
    ghost: "text-ink/70 hover:text-oxblood",
    light: "bg-linen text-ink hover:bg-white hover:-translate-y-0.5",
  };
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        &rarr;
      </span>
    </Link>
  );
}

export function Section({
  children,
  className = "",
  tone = "paper",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "paper" | "bone" | "ink" | "linen";
  id?: string;
}) {
  const tones: Record<string, string> = {
    paper: "bg-paper text-ink",
    bone: "bg-bone text-ink",
    linen: "bg-linen text-ink",
    ink: "bg-ink text-paper",
  };
  return (
    <section id={id} className={`${tones[tone]} py-24 sm:py-32 ${className}`}>
      <Shell>{children}</Shell>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <h2 className="display mt-6 text-[clamp(2.25rem,5vw,4rem)]">{title}</h2>
      {lede ? <p className="mt-6 text-lg leading-relaxed text-graphite">{lede}</p> : null}
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-current/15 pt-5">
      <p className="display text-[clamp(2rem,4vw,3rem)]">{value}</p>
      <p className="label mt-2 text-current/60">{label}</p>
    </div>
  );
}

export function Badge({ children, tone = "gold" }: { children: ReactNode; tone?: "gold" | "ox" | "mute" }) {
  const tones: Record<string, string> = {
    gold: "border-gold/50 text-gold",
    ox: "border-oxblood/40 text-oxblood",
    mute: "border-ink/20 text-mute",
  };
  return (
    <span className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-label ${tones[tone]}`}>
      {children}
    </span>
  );
}
