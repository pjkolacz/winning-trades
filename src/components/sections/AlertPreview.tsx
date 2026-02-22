import { SECTION_IDS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function AlertPreview() {
  return (
    <section
      id={SECTION_IDS.alertPreview}
      className="bg-surface-primary py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionWrapper>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
            What You Get
          </p>
          <h2 className="font-display text-[32px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-tight mb-14 md:mb-20 max-w-3xl">
            <span className="font-light">Clear Signals.</span>{" "}
            <span className="font-bold">Zero Noise.</span>
          </h2>
        </SectionWrapper>

        <SectionWrapper delay={0.15}>
          <div className="max-w-3xl mx-auto">
            {/* Email window frame */}
            <div className="brutal-border brutal-shadow">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-surface-elevated border-b-3 border-border-light">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-error/80" />
                  <div className="w-3 h-3 rounded-full bg-accent-amber/80" />
                  <div className="w-3 h-3 rounded-full bg-accent/80" />
                </div>
                <span className="font-mono text-xs text-text-secondary ml-2">
                  inbox — Winning Trades Alert
                </span>
              </div>

              {/* Email content */}
              <div className="bg-surface-secondary p-6 md:p-8">
                {/* Subject line */}
                <div className="mb-6">
                  <p className="font-mono text-xs text-text-secondary mb-1">
                    Subject:
                  </p>
                  <p className="font-display text-lg font-bold text-text-primary">
                    SPY Alert: Dark Pool Accumulation + Congressional Buy Signal
                  </p>
                </div>

                {/* Alert body */}
                <div className="space-y-5">
                  {/* Confidence */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                      Agent Confidence:
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-32 bg-surface-elevated overflow-hidden">
                        <div className="h-full w-[87%] bg-accent" />
                      </div>
                      <span className="font-mono text-sm font-bold text-accent">
                        87%
                      </span>
                    </div>
                  </div>

                  {/* Thesis */}
                  <div className="accent-bar-left pl-5 py-1">
                    <p className="font-body text-text-primary leading-relaxed">
                      Multiple signals converging on SPY bullish positioning.
                      Institutional dark pool buying at $542-$545 range coincides
                      with two congressional disclosure filings showing large-cap
                      tech accumulation.
                    </p>
                  </div>

                  {/* Data points */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-surface-elevated p-3 border border-border-light/20">
                      <p className="font-mono text-[11px] uppercase text-text-secondary mb-1">
                        Dark Pool Volume
                      </p>
                      <p className="font-display text-lg font-bold text-accent">
                        +240%
                      </p>
                    </div>
                    <div className="bg-surface-elevated p-3 border border-border-light/20">
                      <p className="font-mono text-[11px] uppercase text-text-secondary mb-1">
                        Congressional Buys
                      </p>
                      <p className="font-display text-lg font-bold text-accent">
                        3 filed
                      </p>
                    </div>
                    <div className="bg-surface-elevated p-3 border border-border-light/20">
                      <p className="font-mono text-[11px] uppercase text-text-secondary mb-1">
                        Gamma Wall
                      </p>
                      <p className="font-display text-lg font-bold text-text-primary">
                        $548
                      </p>
                    </div>
                    <div className="bg-surface-elevated p-3 border border-border-light/20">
                      <p className="font-mono text-[11px] uppercase text-text-secondary mb-1">
                        Agents in Agreement
                      </p>
                      <p className="font-display text-lg font-bold text-accent">
                        6 of 7
                      </p>
                    </div>
                  </div>

                  {/* Sources */}
                  <div className="pt-4 border-t border-border-light/10">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-text-secondary mb-2">
                      Data Sources:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Dark Pool", "STOCK Act", "Gamma Exposure", "Order Flow"].map(
                        (source) => (
                          <span
                            key={source}
                            className="px-2 py-1 text-[11px] font-mono bg-accent/10 text-accent border border-accent/20"
                          >
                            {source}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caption */}
            <p className="text-center font-body text-sm text-text-secondary mt-6">
              Actual alert format. Clear thesis. Supporting data. Actionable conviction.
            </p>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
