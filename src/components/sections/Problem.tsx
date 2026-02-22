import { SECTION_IDS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";

const painPoints = [
  {
    title: "Data Lag",
    description:
      "You see prices. They see the forces behind prices. By the time data reaches your brokerage, institutions have already moved.",
  },
  {
    title: "Information Overload",
    description:
      "150+ variables move markets every second. No human can track them all. No single indicator tells the whole story.",
  },
  {
    title: "False Signals",
    description:
      "One indicator says buy. Another says sell. You freeze. Single-source signals create noise, not conviction.",
  },
];

export function Problem() {
  return (
    <section
      id={SECTION_IDS.problem}
      className="bg-surface-primary py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionWrapper>
          {/* Section label */}
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
            The Problem
          </p>

          {/* Headline */}
          <h2 className="font-display text-[32px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-tight mb-10 md:mb-14 max-w-3xl">
            <span className="font-light">Retail Traders</span>{" "}
            <span className="font-bold">Are Flying Blind</span>
          </h2>
        </SectionWrapper>

        {/* Pull quote */}
        <SectionWrapper delay={0.1}>
          <blockquote className="accent-bar-left pl-6 md:pl-8 mb-14 md:mb-20 max-w-3xl">
            <p className="font-body text-xl md:text-2xl text-text-secondary leading-relaxed">
              By the time market data reaches your brokerage app, institutional
              players have already moved. Dark pool activity, congressional insider
              trades, market maker positioning — this data exists, but it&apos;s buried
              in feeds designed for hedge funds with six-figure data budgets.
            </p>
          </blockquote>
        </SectionWrapper>

        {/* Pain point cards */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {painPoints.map((point, i) => (
            <SectionWrapper key={i} delay={0.1 * (i + 1)}>
              <Card variant="dark" className="h-full">
                <h3 className="font-display text-xl font-bold text-accent mb-3">
                  {point.title}
                </h3>
                <p className="font-body text-text-secondary leading-relaxed">
                  {point.description}
                </p>
              </Card>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
