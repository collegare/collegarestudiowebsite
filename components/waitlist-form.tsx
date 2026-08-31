"use client";

import { useState, type FormEvent } from "react";

type Props = {
  tone?: "light" | "dark";
  source?: string;
  compact?: boolean;
};

export function WaitlistForm({ tone = "light", source = "site", compact = false }: Props) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [creatorType, setCreatorType] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("loading");

    // TODO(omnisend): replace this block with a POST to /api/waitlist once the
    // Omnisend account exists. Payload shape Omnisend expects:
    //   { identifiers: [{ type: "email", channels: { email: { status: "subscribed" } }, id: email }],
    //     firstName, tags: ["waitlist", source, creatorType] }
    // Keep the key server-side in OMNISEND_API_KEY — never in this file.
    // eslint-disable-next-line no-console
    console.log("waitlist signup (not yet sent):", { email, firstName, creatorType, source });

    await new Promise((r) => setTimeout(r, 600));
    setStatus("done");
  }

  const dark = tone === "dark";
  const field = dark
    ? "w-full rounded-none border-b border-paper/25 bg-transparent px-0 py-4 text-paper placeholder:text-paper/40 focus:border-paper focus:outline-none"
    : "w-full rounded-none border-b border-ink/20 bg-transparent px-0 py-4 text-ink placeholder:text-mute/70 focus:border-oxblood focus:outline-none";

  if (status === "done") {
    return (
      <div className={`border-l-2 ${dark ? "border-paper/40" : "border-oxblood"} py-2 pl-6`}>
        <p className={`font-display text-3xl ${dark ? "text-paper" : "text-ink"}`}>You&rsquo;re on the list.</p>
        <p className={`mt-3 max-w-md ${dark ? "text-paper/60" : "text-graphite"}`}>
          Watch your inbox &mdash; founding-member pricing opens to the waitlist first, and there are only 20 seats at
          that price.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-xl">
      <div className={`grid gap-5 ${compact ? "" : "sm:grid-cols-2"}`}>
        {!compact ? (
          <div>
            <label htmlFor="firstName" className={`label ${dark ? "text-paper/50" : ""}`}>
              First name
            </label>
            <input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Maya"
              className={field}
              autoComplete="given-name"
            />
          </div>
        ) : null}
        <div className={compact ? "" : ""}>
          <label htmlFor="email" className={`label ${dark ? "text-paper/50" : ""}`}>
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@studio.com"
            className={field}
            autoComplete="email"
          />
        </div>
      </div>

      {!compact ? (
        <div className="mt-8">
          <p className={`label ${dark ? "text-paper/50" : ""}`}>What are you building?</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Influencer", "UGC creative", "Founder in public", "Still figuring it out"].map((opt) => {
              const active = creatorType === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setCreatorType(opt)}
                  className={`rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-label transition-colors ${
                    active
                      ? dark
                        ? "border-paper bg-paper text-ink"
                        : "border-oxblood bg-oxblood text-linen"
                      : dark
                        ? "border-paper/25 text-paper/70 hover:border-paper/60"
                        : "border-ink/20 text-graphite hover:border-oxblood hover:text-oxblood"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className={`mt-9 w-full rounded-full px-8 py-4 font-mono text-[11px] uppercase tracking-label transition-all duration-300 disabled:opacity-60 sm:w-auto ${
          dark ? "bg-paper text-ink hover:bg-white" : "bg-oxblood text-linen hover:bg-oxblood-deep hover:-translate-y-0.5"
        }`}
      >
        {status === "loading" ? "Saving your seat…" : "Join the waitlist"}
      </button>

      {status === "error" ? (
        <p className="mt-4 font-mono text-[11px] uppercase tracking-label text-ember">
          That email doesn&rsquo;t look right &mdash; try again.
        </p>
      ) : null}

      <p className={`mt-5 text-xs ${dark ? "text-paper/40" : "text-mute"}`}>
        No spam, no daily blasts. Launch news, founding-member pricing, and the occasional back-end teardown.
      </p>
    </form>
  );
}
