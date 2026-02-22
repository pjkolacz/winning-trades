"use client";

interface MarqueeBarProps {
  items: readonly string[];
  className?: string;
}

export function MarqueeBar({ items, className = "" }: MarqueeBarProps) {
  const duplicated = [...items, ...items];

  return (
    <div
      className={`overflow-hidden group ${className}`}
    >
      <div
        className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]"
      >
        {duplicated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-6 md:px-8 py-4 text-sm font-mono uppercase tracking-wider text-text-secondary"
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
