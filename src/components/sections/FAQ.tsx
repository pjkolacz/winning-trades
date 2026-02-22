import { SECTION_IDS, FAQS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Accordion } from "@/components/ui/Accordion";

export function FAQ() {
  return (
    <section
      id={SECTION_IDS.faq}
      className="bg-surface-light-alt py-20 md:py-32"
    >
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <SectionWrapper>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
            FAQ
          </p>
          <h2 className="font-display text-[32px] md:text-[44px] leading-[1.1] tracking-tight text-text-dark mb-12 md:mb-16">
            <span className="font-light">Questions.</span>{" "}
            <span className="font-bold">Answered.</span>
          </h2>
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <Accordion items={FAQS} />
        </SectionWrapper>
      </div>
    </section>
  );
}
