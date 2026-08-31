/**
 * Ad landing page variants.
 * Add a new key here and /lp/<key> exists instantly — one page per hook,
 * so you can test creatives against CPL without touching layout code.
 */
export type Variant = {
  eyebrow: string;
  headline: string;
  highlight: string;
  sub: string;
  proof: { t: string; d: string }[];
  objection: { q: string; a: string }[];
  closer: string;
  art: string;
};

export const variants: Record<string, Variant> = {
  "half-a-business": {
    eyebrow: "Free to join · 20 founding seats",
    headline: "You don't have a content problem.",
    highlight: "You have half a business.",
    sub: "The posting is the easy half. The entity, the rates, the contracts, the invoices that go unpaid for ninety days — that's the half nobody taught you. We teach both.",
    proof: [
      { t: "Both halves, together", d: "Content, voice, and positioning on one side. Entity, pricing, contracts, and collection on the other." },
      { t: "Templates you'll use Monday", d: "Rate card, contract pack, deal tracker, invoice kit — the exact ones we run our own business on." },
      { t: "$997 for the first 20", d: "Founding price, then $1,499. The waitlist gets the link before it's public." },
    ],
    objection: [
      { q: "I'm not big enough yet.", a: "The back end is easier to build before you're buried. The people who set it up early are the ones who never have a bad March." },
      { q: "I already know the content side.", a: "Then skip to module four. The half that pays is the one most creators have never been shown." },
    ],
    closer: "Twenty seats at $997. The list goes first.",
    art: "Ad LP art — creator at desk with contract and phone",
  },
  "get-paid-cleanly": {
    eyebrow: "Free to join · 20 founding seats",
    headline: "Know exactly what you're owed,",
    highlight: "and how to collect it.",
    sub: "Rate cards built from real inputs. Contracts you actually understand. Invoices, net terms, and the follow-up script for day sixty-one. The business side of being a creator, taught properly.",
    proof: [
      { t: "Price from your numbers", d: "Usage, exclusivity, whitelisting, reach — a rate card you can defend, not a number you guessed." },
      { t: "The three clauses that cost creators most", d: "We show you where they hide and what to ask for instead." },
      { t: "A pipeline you can see", d: "Every deal, stage, and dollar owed — in one place, not scattered across your DMs." },
    ],
    objection: [
      { q: "Can't I just Google this?", a: "You can. You'll get forty contradictory answers and none of them are a template you can send today." },
      { q: "Is this only for full-time creators?", a: "No. It's most useful right before you go full-time — that's when the back end decides whether you can." },
    ],
    closer: "Founding price $997 · then $1,499",
    art: "Ad LP art — invoice and rate card on cream desk",
  },
};

export const variantKeys = Object.keys(variants);
