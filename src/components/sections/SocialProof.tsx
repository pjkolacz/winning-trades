import { SECTION_IDS, SOCIAL_PROOF, TESTIMONIALS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Counter } from "@/components/ui/Counter";

export function SocialProof() {
  return (
    <section
      id={SECTION_IDS.socialProof}
      className="bg-surface-light py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionWrapper>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
            Social Proof
          </p>
          <h2 className="font-display text-[32px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-tight text-text-dark mb-6">
            <span className="font-light">Trusted by Traders</span>{" "}
            <br className="hidden sm:block" />
            <span className="font-bold">Who Want an Edge</span>
          </h2>
        </SectionWrapper>

        {/* Counter */}
        <SectionWrapper delay={0.1}>
          <div className="mb-14 md:mb-20">
            <Counter
              target={SOCIAL_PROOF.subscriberCount}
              suffix="+"
              className="font-display text-[56px] md:text-[72px] font-bold text-text-dark"
            />
            <p className="font-body text-text-dark-muted text-lg mt-1">
              traders receiving consensus alerts
            </p>
          </div>
        </SectionWrapper>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-14 md:mb-20">
          {TESTIMONIALS.map((testimonial, i) => (
            <SectionWrapper key={i} delay={0.1 * (i + 1)}>
              <div
                className={`bg-white p-6 md:p-8 brutal-border-dark shadow-[4px_4px_0px_var(--color-border-dark)] ${
                  i === 1 ? "md:-rotate-1" : i === 2 ? "md:rotate-1" : ""
                }`}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="oklch(0.72 0.17 55)"
                      stroke="none"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <p className="font-body text-text-dark leading-relaxed mb-5 text-[15px]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div>
                  <p className="font-display font-bold text-text-dark text-sm">
                    {testimonial.name}
                  </p>
                  <p className="font-mono text-xs text-text-dark-muted">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>

        {/* Trust badges */}
        <SectionWrapper delay={0.3}>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
            {[
              "No credit card required",
              "One-click unsubscribe",
              "Free forever",
            ].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 font-body text-sm text-text-dark-muted"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="oklch(0.75 0.18 145)"
                  strokeWidth="2.5"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {badge}
              </span>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
