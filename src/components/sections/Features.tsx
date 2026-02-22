import { SECTION_IDS, FEATURES } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";

const icons: Record<string, React.ReactNode> = {
  eye: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  landmark: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 22V8l9-6 9 6v14" />
      <path d="M7 22V12h4v10" />
      <path d="M13 22V12h4v10" />
    </svg>
  ),
  chart: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M7 16l4-8 4 4 4-6" />
    </svg>
  ),
  network: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3" />
      <circle cx="5" cy="19" r="3" />
      <circle cx="19" cy="19" r="3" />
      <path d="M12 8v4M9.5 14.5L5.5 17M14.5 14.5l4 2.5" />
      <circle cx="12" cy="14" r="2" />
    </svg>
  ),
  mail: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4L12 13 2 4" />
    </svg>
  ),
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
};

export function Features() {
  return (
    <section
      id={SECTION_IDS.features}
      className="bg-surface-light-alt py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionWrapper>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
            Capabilities
          </p>
          <h2 className="font-display text-[32px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-tight text-text-dark mb-14 md:mb-20 max-w-3xl">
            <span className="font-light">Institutional Data,</span>{" "}
            <br className="hidden sm:block" />
            <span className="font-bold">Zero Complexity</span>
          </h2>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {FEATURES.map((feature, i) => (
            <SectionWrapper key={i} delay={0.08 * i}>
              <Card variant="light" className="h-full">
                <div className="text-accent mb-4">{icons[feature.icon]}</div>
                <h3 className="font-display text-xl font-bold text-text-dark mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-text-dark-muted leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
