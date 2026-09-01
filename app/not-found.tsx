import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="shell flex min-h-[70vh] flex-col items-start justify-center py-32"
      style={{ paddingTop: "calc(var(--chrome-offset) + 4rem)" }}
    >
      <p className="label !text-brand">Error 404</p>
      <h1 className="display mt-6 text-[clamp(3rem,8vw,6rem)] leading-none">Nothing here yet.</h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-graphite">
        This page is either still being built or has moved. The waitlist, meanwhile, is very much open.
      </p>
      <Link
        href="/waitlist"
        className="mt-9 rounded-full bg-brand px-7 py-3.5 text-[11px] font-semibold uppercase tracking-label text-cream transition-colors hover:bg-brand-hover"
      >
        Join the waitlist
      </Link>
    </main>
  );
}
