export function Marquee({
  words,
  tone = "ink",
}: {
  words: string[];
  tone?: "ink" | "oxblood" | "bone";
}) {
  const tones: Record<string, string> = {
    ink: "bg-ink text-paper",
    oxblood: "bg-oxblood text-linen",
    bone: "bg-bone text-ink",
  };
  const run = [...words, ...words, ...words, ...words];
  return (
    <div className={`overflow-hidden border-y border-current/10 py-4 ${tones[tone]}`}>
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center gap-8">
            {run.map((word, i) => (
              <span key={`${dup}-${i}`} className="flex items-center gap-8">
                <span className="font-mono text-[11px] uppercase tracking-label">{word}</span>
                <span aria-hidden className="text-current/40">
                  &#9670;
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
