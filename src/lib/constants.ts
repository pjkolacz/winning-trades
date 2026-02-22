export const SECTION_IDS = {
  hero: "hero",
  logoBar: "data-sources",
  problem: "problem",
  howItWorks: "how-it-works",
  features: "features",
  alertPreview: "alert-preview",
  socialProof: "social-proof",
  faq: "faq",
  finalCta: "get-started",
} as const;

export const SOCIAL_PROOF = {
  subscriberCount: 2847,
  variablesScanned: 150,
} as const;

export const DATA_SOURCES = [
  "Dark Pool Activity",
  "Congressional Trades",
  "SPX Market Maker Exposures",
  "Institutional Order Flow",
  "Options Chain Analysis",
  "Gamma Exposure Maps",
  "Earnings Whisper Data",
  "Unusual Volume Detection",
] as const;

export const FEATURES = [
  {
    title: "Dark Pool Intelligence",
    description:
      "Track institutional block trades before they hit public exchanges. See where the smart money is moving.",
    icon: "eye",
  },
  {
    title: "Congressional Trade Tracking",
    description:
      "Monitor what elected officials are buying and selling. STOCK Act data, analyzed in real-time.",
    icon: "landmark",
  },
  {
    title: "Market Maker Exposure Maps",
    description:
      "See where SPX market makers are positioned and where the gamma walls sit. Know the levels that matter.",
    icon: "chart",
  },
  {
    title: "Multi-Agent Consensus",
    description:
      "No single point of failure. Alerts fire only when independent AI agents agree on the signal.",
    icon: "network",
  },
  {
    title: "Zero Prompting Required",
    description:
      "No AI knowledge needed. No dashboards to learn. No buttons to press. Just email.",
    icon: "mail",
  },
  {
    title: "Institutional-Grade Data",
    description:
      "The same feeds hedge funds pay six figures for, distilled into clear, actionable alerts.",
    icon: "shield",
  },
] as const;

export const FAQS = [
  {
    question: "Is this really free?",
    answer:
      "Yes. The core alerts are free forever. We may offer a premium tier later with faster alerts and additional data, but you'll always have access to our consensus-driven alerts at no cost.",
  },
  {
    question: "How often do I get alerts?",
    answer:
      "Only when our AI agents reach consensus. Could be daily, could be a few times a week. We never send noise. Every alert has conviction behind it.",
  },
  {
    question: "Do I need to know anything about AI?",
    answer:
      "Not a thing. You never interact with AI. You never write prompts. You just read emails. That's it.",
  },
  {
    question: "What markets do you cover?",
    answer:
      "US equities, SPX/SPY, and major options chains. We're expanding to futures and crypto soon.",
  },
  {
    question: "How is this different from other trading newsletters?",
    answer:
      "We don't share opinions. Our AI agents scan real institutional data — dark pools, congressional trades, market maker positioning — and only alert when multiple independent signals converge. No guru. No guesswork.",
  },
  {
    question: "Can I unsubscribe?",
    answer: "One click, any time. No questions asked. No hoops to jump through.",
  },
  {
    question: "What data sources do you use?",
    answer:
      "Dark pool feeds, congressional trading disclosures (STOCK Act), SPX market maker gamma exposure data, institutional order flow, options chain analytics, unusual volume detection, and more.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Marcus R.",
    role: "Swing Trader, 8 years",
    quote:
      "I was paying $200/mo for institutional data feeds and still missing signals. Winning Trades caught the SPY reversal three hours before my terminal flagged it.",
  },
  {
    name: "Sarah K.",
    role: "Options Trader",
    quote:
      "The congressional trade alerts alone are worth it. I got a signal about unusual buying in defense stocks a full week before the news dropped.",
  },
  {
    name: "Dev P.",
    role: "Day Trader, 3 years",
    quote:
      "No dashboards. No AI prompting. No noise. Just signals that actually make sense. This is what trading tools should be.",
  },
] as const;
