import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Waitlist signup → Omnisend Contacts API (v3).
 * Set OMNISEND_API_KEY in the environment (Vercel project env / .env.local).
 * Until it's set, this route accepts the signup and no-ops so the form works in dev.
 */
export async function POST(req: Request) {
  let body: { email?: string; firstName?: string; department?: string; source?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  const email = (body.email || "").trim().toLowerCase();
  const firstName = (body.firstName || "").trim();
  const department = (body.department || "").trim();
  const source = (body.source || "site").trim();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ ok: false, error: "A valid email is required" }, { status: 400 });
  }

  const apiKey = process.env.OMNISEND_API_KEY;
  if (!apiKey) {
    // No key yet — accept the signup so the UI flows, but flag that nothing was sent.
    console.warn("[waitlist] OMNISEND_API_KEY not set — signup accepted but not synced:", {
      email,
      department,
      source,
    });
    return NextResponse.json({ ok: true, synced: false });
  }

  const tags = ["waitlist", source, department].filter(Boolean);

  try {
    const res = await fetch("https://api.omnisend.com/v3/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-API-KEY": apiKey },
      body: JSON.stringify({
        identifiers: [
          {
            type: "email",
            id: email,
            channels: { email: { status: "subscribed" } },
          },
        ],
        firstName: firstName || undefined,
        tags,
        customProperties: { department: department || undefined, source },
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[waitlist] Omnisend error", res.status, detail);
      // A duplicate contact (409) is a success from the user's point of view.
      if (res.status === 409) return NextResponse.json({ ok: true, synced: true, existing: true });
      return NextResponse.json({ ok: false, error: "Signup service error" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, synced: true });
  } catch (err) {
    console.error("[waitlist] Omnisend request failed", err);
    return NextResponse.json({ ok: false, error: "Signup service unreachable" }, { status: 502 });
  }
}
