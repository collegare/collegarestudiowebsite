# Collegare Studio — Website

Next.js 14 (App Router) + TypeScript + Tailwind. Built to deploy on Vercel.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

## Pages

| Route | What it is |
|---|---|
| `/` | Home — the two-halves story, three offerings, course spotlight, waitlist |
| `/waitlist` | Waitlist capture + FAQ |
| `/course` | The Creator Business Course sales page ($997 founding / $1,499) |
| `/shop` | Templates and tools |
| `/academy` | Self-paced library |
| `/community` | Calls, deal reviews, house rules |
| `/studio` | About + founders + affiliate programme |
| `/lp/half-a-business` | Ad landing page (no nav) |
| `/lp/get-paid-cleanly` | Ad landing page (no nav) |
| `/privacy`, `/terms` | Legal drafts — have counsel review before running ads |

## Adding an ad landing page

Open `lib/lp.ts`, copy a variant object, give it a new key. `/lp/<your-key>`
exists immediately. One hook per key so you can attribute CPL per creative.
The form's `source` is set automatically to `lp-<key>`.

## Wiring the waitlist to Omnisend

`components/waitlist-form.tsx` currently logs to the console and shows the
success state — there is a `TODO(omnisend)` marker where the real call goes.

1. Create the Omnisend account, grab an API key.
2. Add `OMNISEND_API_KEY` in Vercel → Settings → Environment Variables.
3. Create `app/api/waitlist/route.ts` that POSTs to
   `https://api.omnisend.com/v3/contacts` with header `X-API-KEY`.
4. Replace the TODO block with `fetch("/api/waitlist", …)`.

Keep the key server-side. Never put it in a `NEXT_PUBLIC_` variable.

## Deploy

```bash
git remote add origin git@github.com:<you>/collegare-web.git
git push -u origin main
```

Then import the repo at vercel.com → New Project. Framework preset is
detected automatically. Add the domain under Settings → Domains.

## Design system

Tokens live in `tailwind.config.ts`.

| Token | Hex | Use |
|---|---|---|
| `paper` | `#F6F1E8` | Default page ground |
| `linen` | `#FBF8F3` | Lighter alternating sections |
| `bone` | `#EBE3D5` | Warmer alternating sections |
| `ink` | `#171310` | Text, dark sections |
| `graphite` | `#3C3530` | Body copy |
| `mute` | `#7A6F66` | Captions, labels |
| `oxblood` | `#6E1F26` | Primary accent, buttons, links |
| `gold` | `#C39A4B` | Accent on dark sections only |

Type: Instrument Serif (display), Inter (body), JetBrains Mono (labels).
To change the whole palette, edit the `colors` block in `tailwind.config.ts` —
nothing hardcodes hex values outside `components/frame.tsx`.

## Images

Every image slot is a `<Frame>` placeholder with a `note` describing the shot
that belongs there. Search the repo for `<Frame` to find all of them, then
swap each for `next/image`.
