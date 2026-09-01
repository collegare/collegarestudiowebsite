export const site = {
  name: "Collegare Studio",
  tagline: "Work hard, create smarter.",
  motto: "One person. Every department.",
  domain: "collegarestudio.com",
  email: "hello@collegarestudio.com",
  tiktok: "https://www.tiktok.com/@collegare.studio",
  tiktokHandle: "@collegare.studio",
  management: "https://www.collegaretalentmanagement.com/for-creators#apply",
  // Flip to true on cart-open day to swap waitlist CTAs for checkout.
  cartOpen: false,
  waitlistGoal: 300,
};

export const ctaLabel = site.cartOpen ? "Buy the course" : "Join the waitlist";

export const navLeft = [
  { label: "The Shop", href: "/shop" },
  { label: "The Academy", href: "/academy" },
  { label: "Waitlist", href: "/waitlist" },
];

export const navRight = [
  { label: "The Collective", href: "/collective" },
  { label: "About", href: "/about" },
];

export const marqueeWords = [
  "One person. Every department.",
  "Work hard, create smarter.",
  "Four vacancies.",
  "Say the number.",
];

export const footerMarquee = ["One person. Every department.", "Work hard, create smarter."];

export const footerCols = [
  {
    title: "Explore",
    links: [
      { label: "The Shop", href: "/shop" },
      { label: "The Academy", href: "/academy" },
      { label: "The Collective", href: "/collective" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "About", href: "/about" },
      { label: "Join the waitlist", href: "/waitlist" },
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

export type Product = {
  slug: string;
  tag: string;
  price: string;
  name: string;
  copy: string;
  state: "Available" | "Pre-order";
  img?: string; // real 4:5 shot; when absent, a striped placeholder tile is used
  // ThriveCart v2 embeddable checkout — present once the product is live in ThriveCart.
  thrivecart?: { account: string; product: string; embeddable: string };
};

export const products: Product[] = [
  {
    tag: "Deals",
    price: "$39",
    slug: "rate-card-builder",
    name: "The Rate Card Builder",
    copy: "Your sales department’s only real tool. Rates from your inputs, a quote you can defend, and the working shown.",
    state: "Available",
    img: "/img/shop-rate-card.jpg",
  },
  {
    tag: "Systems",
    price: "$49",
    slug: "deal-tracker",
    name: "The Deal Tracker",
    copy: "Your ops department in one board. Every deal, stage and dollar owed, visible.",
    state: "Available",
    img: "/img/deal-tracker.jpg",
    thrivecart: { account: "collegarestudio", product: "3", embeddable: "tc-collegarestudio-3-V1OWM9" },
  },
  {
    tag: "Contracts",
    price: "$129",
    slug: "contract-pack",
    name: "The Contract Pack",
    copy: "Your legal review, pre-written. Scope, usage, exclusivity, revisions, kill fee.",
    state: "Available",
    img: "/img/contract-pack.jpg",
  },
  {
    tag: "Money",
    price: "$45",
    slug: "invoice-net-30-kit",
    name: "The Invoice & Net-30 Kit",
    copy: "Finance, including the day-61 email — the one that gets answered without burning the relationship.",
    state: "Available",
    img: "/img/invoice-net-30-kit.jpg",
  },
  {
    tag: "Deals",
    price: "$35",
    slug: "pitch-library",
    name: "The Pitch Library",
    copy: "Outbound that gets answered: cold, warm, re-engage, and the follow-up sequence.",
    state: "Available",
    img: "/img/pitch-library.jpg",
  },
  {
    tag: "The Work",
    price: "$29",
    slug: "back-office-planner",
    name: "The Back Office Planner",
    copy: "The print one, for people who think on paper. Weekly pipeline, invoices out, invoices owed.",
    state: "Pre-order",
  },
];

export const courseChips = ["$997 founding · first 20", "$1,499 after", "Waitlist gets first access"];

export const modules = [
  { n: "01", dept: "The Work", t: "Position", d: "Pick the lane that fits your actual life, skills and appetite — then say it in one sentence a brand can repeat back." },
  { n: "02", dept: "The Work", t: "Produce", d: "Series design, hook structure, and a shooting cadence that survives a bad week." },
  { n: "03", dept: "The Work · Deals", t: "Prove", d: "Turn content into evidence: the media kit, the case study, the numbers that make a buyer nod." },
  { n: "04", dept: "Money", t: "Incorporate", d: "Entity, EIN, business banking, bookkeeping, and the tax setup that ends the March panic." },
  { n: "05", dept: "Deals", t: "Price", d: "Usage, exclusivity, whitelisting, reach — a rate card you can defend, not a number you guessed." },
  { n: "06", dept: "Deals", t: "Pitch", d: "Outbound that gets replies, inbound you can qualify in ninety seconds, and follow-up that isn't begging." },
  { n: "07", dept: "Contracts · Money", t: "Deliver & Collect", d: "Contracts, revisions, usage windows, invoicing, net terms, and exactly what to say on day sixty-one." },
  { n: "08", dept: "Systems", t: "Scale", d: "Retainers, your own products, and the point where you stop trading hours for posts." },
];

export const included = [
  { t: "42 lessons", d: "Short, specific, no forty-minute mindset intro." },
  { t: "The department files", d: "Contracts, rate cards, invoices, pitch scripts, trackers." },
  { t: "Deal teardowns", d: "Real deals, real numbers, what we'd renegotiate now." },
  { t: "The coworkers", d: "Collective access from day one." },
  { t: "Lifetime updates", d: "The back office changes, so the course does too." },
  { t: "Founding session", d: "First twenty only — live working session with the studio." },
];

export const courseFaq = [
  { q: "What exactly do I get for $997?", a: "Every module, every file, the teardowns, Collective access, lifetime updates, and the founding-member session. Founding pricing is capped at twenty people; after that the same thing is $1,499." },
  { q: "How long does it take?", a: "Six to eight weeks at a few hours a week, self-paced. The money and pricing modules are the ones people come back and redo every year." },
  { q: "Is this just the legal and money stuff?", a: "No — The Work is a third of the course. A company runs every department at once, and teaching them separately is why so many creators feel unstable." },
  { q: "Do you offer payment plans?", a: "Yes. Details go out with the cart link. The founding price is the lowest this will ever be, plan or not." },
  { q: "I'm not in the US. Does this still apply?", a: "Rates, contracts, usage, collection and ops all travel. The entity and tax lessons are US-specific and we flag exactly which ones." },
];

export const membership = [
  { t: "First look at the briefs.", d: "We build brand-side relationships as a studio. When a campaign brief comes in, it goes to the Collective before it goes anywhere else — you see the scope and the budget, and you decide whether to pitch. No representation, no cut of your deal." },
  { t: "The coworkers you lost.", d: "Going out on your own also meant nobody to lean over and ask “does this rate look insane to you?” Monday standups, deal reviews, and a feed where you can post a real number." },
  { t: "The reason to stay after the course.", d: "The course ends. The briefs and the room don't. This is where the next opportunity tends to come from." },
];

export const rituals = [
  { t: "Monday Standup", when: "Mondays", d: "Fifteen minutes. What you're shipping, what you're pitching, what's owed to you." },
  { t: "Deal Review", when: "Every other Wednesday", d: "Bring a live offer. We look at the rate, the usage, and the clause you skimmed." },
  { t: "Back Office Hour", when: "Monthly", d: "Open working session. Invoices, entities, trackers. Bring the thing you've been avoiding." },
  { t: "The Brief Board", when: "As they come", d: "Campaign briefs that come through the studio, posted to the Collective before they go anywhere else. Pitch the ones that fit." },
];

export const houseRules = [
  { n: "01", t: "Real numbers or no numbers. Vague flexing helps nobody." },
  { n: "02", t: "Say the rate out loud. The silence is what keeps creators underpaid." },
  { n: "03", t: "Feedback is specific and kind, in that order." },
  { n: "04", t: "What's shared in a deal review stays in the deal review." },
];

export const beliefs = [
  { t: "A headcount of one is still a company.", d: "Calling it a hobby is what gets you paid like one." },
  { t: "Copy nobody's org chart.", d: "The right creator business fits your life, not the one that went viral on someone else's timeline." },
  { t: "Say the number.", d: "Underpricing survives on silence. We make rates, terms and contracts sayable out loud." },
  { t: "Systems over hustle.", d: "You should be able to leave for a week and have the business still know what it's owed." },
];

export const waitlistReasons = [
  { n: "01", t: "Founding price, held.", d: "The first twenty seats are $997. Everyone after pays $1,499. The list gets the link first — that's the entire advantage, and it's a real one." },
  { n: "02", t: "The department memos.", d: "While you wait you get the emails we'd charge for: rate math, contract red flags, and how the money actually moves between a brand and you." },
  { n: "03", t: "Shape the org chart.", d: "We ask the list which department is hurting most, and we build that module before we build the sales page." },
];

export const waitlistFaq = [
  { q: "When does it open?", a: "Cart opens to the waitlist first. We'd rather launch to a full room than an empty one, so the date follows the list — not the other way around." },
  { q: "Am I committing to anything?", a: "No. An email address and a heads-up. No card, no deposit, no auto-enroll." },
  { q: "I'm brand new. Is this too early for me?", a: "The back office is easier to build before you're buried in it. Nobody has ever regretted setting the entity up a year early." },
  { q: "I already make money as a creator. Is this too basic?", a: "If you can't say your net-30 policy, your usage-rights bump, and last quarter's numbers out loud, there's a department here you haven't staffed." },
];

export const tiktokTiles = [
  "hero-1", "hero-4", "overhead-reading", "desk-work", "duo-studio", "hero-2", "overhead-laptop", "night",
];

export const legal = {
  privacy: {
    title: "Privacy",
    intro: "What we collect, why, and what we never do with it. This is a working draft.",
    sections: [
      { t: "What we collect", d: "Your email, first name, and the department you told us is hurting most. Nothing else, and nothing you didn't type in." },
      { t: "Why", d: "To send launch news, founding pricing, and the department memos — and to decide which module we build first." },
      { t: "What we don't do", d: "We don't sell your data, and we don't share it with brands. Sharing your work with a brand is always opt-in, and applying for management is a separate step you choose." },
      { t: "Leaving", d: "One click, bottom of any email. We delete on request — reply to any email and ask." },
    ],
  },
  terms: {
    title: "Terms of Service",
    intro: "Plain-language terms for buying from and participating in Collegare Studio. This is a working draft.",
    sections: [
      { t: "What you're buying", d: "Digital products and course access, licensed to you personally. You can use every template in your own business, including with your clients." },
      { t: "What you can't do", d: "Resell, redistribute, or repackage the files as your own product, and no sharing course logins." },
      { t: "Refunds", d: "Full refund terms ship with the cart link. Digital templates are non-refundable once downloaded." },
      { t: "Community conduct", d: "The house rules are the terms. Real numbers, kind and specific feedback, and nothing leaves a deal review." },
    ],
  },
};
