import { type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-surface-primary font-bold brutal-border brutal-shadow-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:brutal-shadow-lg active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
  secondary:
    "bg-surface-elevated text-text-primary brutal-border hover:bg-surface-secondary",
  ghost:
    "bg-transparent text-accent border-2 border-accent hover:bg-accent/10",
};

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 px-7 py-4 font-display text-base uppercase tracking-wide transition-all duration-100 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
