"use client";

import { useState, type FormEvent } from "react";

type Tone = "light" | "dark";
const DEPARTMENTS = ["Money", "Contracts", "Deals", "Systems"] as const;

export function WaitlistForm({ tone = "light", source = "site" }: { tone?: Tone; source?: string }) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [pick, setPick] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const dark = tone === "dark";
  const fg = dark ? "#FDFAF0" : "#1A1512";
  const fgMuted = dark ? "rgba(253,250,240,0.55)" : "#8A7F76";
  const line = dark ? "rgba(253,250,240,0.28)" : "rgba(26,21,18,0.22)";
  const accent = dark ? "#C9705F" : "#8B0D00";
  const btnBg = dark ? "#FDFAF0" : "#8B0D00";
  const btnFg = dark ? "#1A1512" : "#FBF8F3";

  // Field ids are derived from `source` — the homepage renders two instances,
  // and shared ids break label→input focus.
  const uid = `wf-${source}`;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, department: pick, source }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div style={{ width: "100%", maxWidth: 620 }}>
        <div style={{ borderLeft: `2px solid ${accent}`, padding: "6px 0 6px 26px" }}>
          <p className="display" style={{ fontSize: "2.1rem", lineHeight: 1.05, margin: 0, color: fg }}>
            You&rsquo;re on the list.
          </p>
          <p style={{ margin: "14px 0 0", maxWidth: "44ch", lineHeight: 1.65, color: fgMuted }}>
            Watch your inbox. Founding pricing opens to the list first, and there are only twenty seats at that
            number.
          </p>
        </div>
      </div>
    );
  }

  const labelStyle = {
    fontSize: "10.5px",
    fontWeight: 600,
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    color: fgMuted,
  };
  const inputStyle = {
    width: "100%",
    boxSizing: "border-box" as const,
    border: 0,
    borderBottom: `1px solid ${line}`,
    background: "transparent",
    padding: "14px 0",
    color: fg,
    outline: "none",
  };

  return (
    <div style={{ width: "100%", maxWidth: 620 }}>
      <form onSubmit={onSubmit}>
        <div style={{ display: "grid", gap: 22, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          <div>
            <label htmlFor={`${uid}-name`} style={labelStyle}>First name</label>
            <input
              id={`${uid}-name`}
              autoComplete="given-name"
              placeholder="Maya"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor={`${uid}-email`} style={labelStyle}>Email</label>
            <input
              id={`${uid}-email`}
              type="email"
              required
              autoComplete="email"
              placeholder="you@studio.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>
        </div>

        <p style={{ ...labelStyle, margin: "30px 0 0" }}>Which department is hurting most?</p>
        <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8 }}>
          {DEPARTMENTS.map((label) => {
            const on = pick === label;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setPick(label)}
                style={{
                  border: "1px solid",
                  borderRadius: 2,
                  padding: "9px 16px",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 220ms ease",
                  background: on ? (dark ? "#FDFAF0" : "#8B0D00") : "transparent",
                  color: on ? (dark ? "#1A1512" : "#FBF8F3") : dark ? "rgba(253,250,240,0.7)" : "#4A413A",
                  borderColor: on ? (dark ? "#FDFAF0" : "#8B0D00") : line,
                }}
              >
                {label}
              </button>
            );
          })}
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            marginTop: 34,
            border: 0,
            borderRadius: 2,
            padding: "16px 30px",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "transform 250ms ease",
            background: btnBg,
            color: btnFg,
            opacity: status === "loading" ? 0.7 : 1,
          }}
        >
          {status === "loading" ? "Saving your seat…" : "Join the waitlist"}
        </button>

        {status === "error" ? (
          <p style={{ margin: "16px 0 0", fontSize: "0.82rem", letterSpacing: "0.02em", color: accent }}>
            That didn&rsquo;t go through — check the email and try again.
          </p>
        ) : null}

        <p style={{ margin: "20px 0 0", fontSize: "0.78rem", lineHeight: 1.6, color: fgMuted }}>
          No daily blasts. Launch news, founding pricing, and the department memos.
        </p>
      </form>
    </div>
  );
}
