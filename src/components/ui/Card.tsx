interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "dark" | "light";
}

export function Card({ children, className = "", variant = "dark" }: CardProps) {
  const base =
    variant === "dark"
      ? "bg-surface-elevated brutal-border brutal-shadow"
      : "bg-white brutal-border-dark shadow-[4px_4px_0px_var(--color-border-dark)]";

  return (
    <div className={`p-6 md:p-8 ${base} ${className}`}>
      {children}
    </div>
  );
}
