import type { ReactNode } from "react";

/**
 * Placeholder art frame. Drop a real <Image> in place of this component —
 * the `note` tells you what shot belongs there.
 */
export function Frame({
  note,
  ratio = "4/5",
  tone = "clay",
  className = "",
  children,
}: {
  note: string;
  ratio?: string;
  tone?: "clay" | "ink" | "sand" | "ox";
  className?: string;
  children?: ReactNode;
}) {
  const tones: Record<string, string> = {
    clay: "bg-[linear-gradient(150deg,#E4D8C6_0%,#CDB79C_55%,#A8896B_100%)]",
    sand: "bg-[linear-gradient(150deg,#F3ECE0_0%,#E3D8C6_100%)]",
    ink: "bg-[linear-gradient(150deg,#2A2320_0%,#171310_100%)]",
    ox: "bg-[linear-gradient(150deg,#8A2C31_0%,#521218_100%)]",
  };
  return (
    <div
      style={{ aspectRatio: ratio }}
      className={`relative w-full overflow-hidden ${tones[tone]} ${className}`}
    >
      <div className="absolute inset-0 opacity-[0.07] [background-image:repeating-linear-gradient(45deg,#000_0_1px,transparent_1px_7px)]" />
      {children}
      <span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-label text-white/70">
        {note}
      </span>
    </div>
  );
}
