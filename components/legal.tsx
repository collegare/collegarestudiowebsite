type LegalData = {
  title: string;
  intro: string;
  sections: { t: string; d: string }[];
};

export function LegalDoc({ data }: { data: LegalData }) {
  return (
    <main className="bg-cream" style={{ paddingTop: "var(--chrome-offset)" }}>
      <div className="mx-auto max-w-[820px] px-[clamp(18px,3.4vw,44px)] pb-[clamp(72px,11vh,130px)] pt-[clamp(54px,8vh,100px)]">
        <p className="label !text-brand">Legal</p>
        <h1 className="display mt-4 text-[clamp(2.2rem,5vw,3.8rem)] leading-none">{data.title}</h1>
        <p className="mt-5 text-[1.02rem] leading-[1.75] text-graphite">{data.intro}</p>
        <div className="mt-8">
          {data.sections.map((s) => (
            <div key={s.t} className="border-t border-ink/[0.16] py-5">
              <h2 className="display !font-bold text-[1.4rem] leading-tight tracking-[-0.02em]">{s.t}</h2>
              <p className="mt-2 text-[1rem] leading-[1.7] text-graphite [text-wrap:pretty]">{s.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-[26px] text-[10.5px] font-semibold uppercase tracking-[0.14em] text-mute">
          Draft — have counsel review before running ads.
        </p>
      </div>
    </main>
  );
}
