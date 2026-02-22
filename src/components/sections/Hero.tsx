import { SECTION_IDS, SOCIAL_PROOF } from "@/lib/constants";
import { EmailForm } from "@/components/ui/EmailForm";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative min-h-screen flex items-center bg-surface-primary overflow-hidden"
    >
      {/* Radar pulse background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full border border-accent/10 animate-[radar-pulse_4s_ease-out_infinite]" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-accent/10 animate-[radar-pulse_4s_ease-out_infinite_1s]" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-accent/10 animate-[radar-pulse_4s_ease-out_infinite_2s]" />
      </div>

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.93 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.93 0 0) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-28 pb-20 md:pt-32 md:pb-28 w-full">
        <SectionWrapper>
          {/* Kicker */}
          <p className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-accent mb-6 md:mb-8">
            AI Agents. Institutional Data. Your Inbox.
          </p>

          {/* Headline */}
          <h1 className="font-display text-[42px] md:text-[60px] lg:text-[76px] font-light leading-[1.05] tracking-tight mb-6 md:mb-8 max-w-4xl">
            Stop Guessing.{" "}
            <br className="hidden sm:block" />
            Start Trading{" "}
            <br className="hidden sm:block" />
            <span className="font-bold relative inline-block">
              With Conviction
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-[6px] md:h-[8px] bg-accent/60 -skew-x-3" />
            </span>
            <span className="font-bold">.</span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl text-text-secondary max-w-2xl mb-10 md:mb-12 leading-relaxed">
            Our AI agent swarm scans 150+ market variables every second — dark pools,
            congressional trades, SPX market maker exposures — and only alerts you when
            they reach consensus.
          </p>
        </SectionWrapper>

        {/* Email Form */}
        <SectionWrapper delay={0.15}>
          <div className="max-w-xl mb-8">
            <EmailForm />
          </div>
        </SectionWrapper>

        {/* Social Proof Bar */}
        <SectionWrapper delay={0.3}>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-secondary font-body">
            <span className="inline-flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-accent"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Join {SOCIAL_PROOF.subscriberCount.toLocaleString()}+ traders
            </span>
            <span className="inline-flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-accent"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Free forever
            </span>
            <span className="inline-flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-accent"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Unsubscribe anytime
            </span>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
