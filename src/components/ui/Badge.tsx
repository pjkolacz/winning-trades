interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "amber" | "muted";
  className?: string;
}

const variants = {
  accent: "bg-accent/15 text-accent border-accent/30",
  amber: "bg-accent-amber/15 text-accent-amber border-accent-amber/30",
  muted: "bg-surface-elevated text-text-secondary border-border-light/20",
};

export function Badge({ children, variant = "accent", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono uppercase tracking-wider border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
