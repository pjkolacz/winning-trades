import { SECTION_IDS, SOCIAL_PROOF } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { EmailForm } from "@/components/ui/EmailForm";

export function FinalCTA() {
  return (
    <section
      id={SECTION_IDS.finalCta}
      className="bg-surface-primary accent-bar-top py-20 md:py-32 relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.93 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.93 0 0) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 text-center">
        <SectionWrapper>
          <h2 className="font-display text-[36px] md:text-[52px] lg:text-[64px] leading-[1.05] tracking-tight mb-6">
            <span className="font-light">The Market Doesn&apos;t Wait.</span>
            <br />
            <span className="font-bold">Neither Should You.</span>
          </h2>

          <p className="font-body text-lg md:text-xl text-text-secondary mb-10 md:mb-12 max-w-xl mx-auto">
            Get institutional-grade AI trading alerts delivered to your inbox.{" "}
            <span className="text-accent font-semibold">Free.</span>
          </p>
        </SectionWrapper>

        <SectionWrapper delay={0.15}>
          <div className="max-w-xl mx-auto mb-6">
            <EmailForm buttonText="Start Receiving Alerts" />
          </div>

          <p className="font-body text-sm text-text-secondary">
            Join {SOCIAL_PROOF.subscriberCount.toLocaleString()}+ traders already
            getting the edge.
          </p>
        </SectionWrapper>
      </div>
    </section>
  );
}
