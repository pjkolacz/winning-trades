import { SECTION_IDS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const steps = [
  {
    number: "01",
    title: "Scan",
    description:
      "AI agents monitor 150+ market variables every second — dark pools, options flow, institutional positioning, congressional trades.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Consensus",
    description:
      "Agents only flag opportunities when multiple independent signals align. No single-indicator noise. No guesswork.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Alert",
    description:
      "You get a clear, actionable email. What to watch, why it matters, and the data behind it. No dashboards. No learning curve.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section
      id={SECTION_IDS.howItWorks}
      className="bg-surface-light py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionWrapper>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
            How It Works
          </p>
          <h2 className="font-display text-[32px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-tight text-text-dark mb-14 md:mb-20 max-w-3xl">
            <span className="font-light">From 150+ Variables</span>{" "}
            <br className="hidden sm:block" />
            <span className="font-bold">to One Clear Signal</span>
          </h2>
        </SectionWrapper>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-[3px] bg-border-dark/10" />

          {steps.map((step, i) => (
            <SectionWrapper key={i} delay={0.15 * i}>
              <div className="relative">
                {/* Number badge */}
                <div className="w-14 h-14 flex items-center justify-center border-3 border-border-dark bg-white mb-6 relative z-10">
                  <span className="font-display text-xl font-bold text-text-dark">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="text-accent mb-4">{step.icon}</div>

                {/* Content */}
                <h3 className="font-display text-2xl font-bold text-text-dark uppercase tracking-wide mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-text-dark-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
