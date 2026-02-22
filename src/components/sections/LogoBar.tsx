import { DATA_SOURCES } from "@/lib/constants";
import { MarqueeBar } from "@/components/ui/MarqueeBar";

export function LogoBar() {
  return (
    <section className="bg-surface-secondary border-y border-border-light/10">
      <MarqueeBar items={DATA_SOURCES} />
    </section>
  );
}
