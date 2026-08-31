import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="shell flex min-h-[60vh] flex-col items-start justify-center py-32">
        <p className="label">Error 404</p>
        <h1 className="display mt-6 text-[clamp(3rem,8vw,6rem)]">Nothing here yet.</h1>
        <p className="mt-6 max-w-md text-lg text-graphite">
          This page is either still being built or has moved. The waitlist, meanwhile, is very much open.
        </p>
        <Link
          href="/waitlist"
          className="mt-9 rounded-full bg-oxblood px-7 py-3.5 font-mono text-[11px] uppercase tracking-label text-linen"
        >
          Join the waitlist
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
