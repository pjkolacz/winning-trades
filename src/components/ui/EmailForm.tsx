"use client";

import { useActionState, useEffect, useRef } from "react";
import { subscribe } from "@/app/actions/subscribe";
import { toast } from "sonner";
import type { SubscribeResult } from "@/lib/validation";

interface EmailFormProps {
  buttonText?: string;
  className?: string;
}

export function EmailForm({
  buttonText = "Get Free Alerts",
  className = "",
}: EmailFormProps) {
  const [state, formAction, isPending] = useActionState<SubscribeResult | null, FormData>(
    subscribe,
    null
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
      formRef.current?.reset();
    } else if (state && !state.success) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className={`w-full ${className}`}>
      <div className="flex flex-col sm:flex-row gap-0">
        <input
          type="email"
          name="email"
          placeholder="you@email.com"
          required
          autoComplete="email"
          className="w-full sm:flex-1 px-5 py-4 bg-surface-elevated text-text-primary font-body text-base border-3 border-border-light placeholder:text-text-secondary focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_oklch(0.75_0.18_145_/_0.2)] transition-all"
        />
        <button
          type="submit"
          disabled={isPending}
          className="px-7 py-4 bg-accent text-surface-primary font-display font-bold text-base uppercase tracking-wide border-3 border-border-light sm:border-l-0 brutal-shadow-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_var(--color-border-light)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-100 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {isPending ? (
            <span className="inline-flex items-center gap-2">
              <svg
                className="animate-spin h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Joining...
            </span>
          ) : (
            <span className="inline-flex items-center gap-2">
              {buttonText}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          )}
        </button>
      </div>
      {state && !state.success && (
        <p className="mt-2 text-sm text-error font-body">{state.message}</p>
      )}
    </form>
  );
}
