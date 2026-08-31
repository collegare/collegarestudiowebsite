import Link from "next/link";
import { Marquee } from "@/components/marquee";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "The Shop", href: "/shop" },
      { label: "The Academy", href: "/academy" },
      { label: "The Course", href: "/course" },
      { label: "The Community", href: "/community" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "About", href: "/studio" },
      { label: "Join the waitlist", href: "/waitlist" },
      { label: "Affiliates", href: "/studio#affiliates" },
      { label: "Contact", href: `mailto:${site.email}` },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <Marquee words={["Build the front end", "Build the back end"]} tone="ink" />
      <div className="shell grid gap-14 py-20 lg:grid-cols-[1.4fr_2fr]">
        <div>
          <p className="font-display text-4xl leading-none">Collegare Studio</p>
          <p className="mt-5 max-w-sm text-paper/60">
            The front end and the back end of a creator career &mdash; taught together, for the first time.
          </p>
          <Link
            href="/waitlist"
            className="mt-8 inline-block rounded-full bg-paper px-6 py-3 font-mono text-[11px] uppercase tracking-label text-ink transition-colors hover:bg-white"
          >
            Join the waitlist
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="label text-paper/40">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="link-underline text-sm text-paper/75 hover:text-paper">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="shell flex flex-col gap-3 border-t border-paper/10 py-7 font-mono text-[11px] uppercase tracking-label text-paper/40 sm:flex-row sm:items-center sm:justify-between">
        <span>&copy; {new Date().getFullYear()} Collegare Studio</span>
        <span>{site.email}</span>
      </div>
    </footer>
  );
}
