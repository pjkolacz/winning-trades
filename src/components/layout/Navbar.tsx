"use client";

import { useEffect, useState } from "react";
import { SECTION_IDS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-primary/95 backdrop-blur-md border-b-[3px] border-accent"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 9L10 24L16 13L22 24L28 5"
                stroke="var(--color-surface-primary)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="28" cy="5" r="2.5" fill="var(--color-surface-primary)" />
            </svg>
          </div>
          <span className="font-display font-bold text-lg text-text-primary tracking-tight">
            Winning Trades
          </span>
        </a>

        {/* CTA */}
        <a
          href={`#${SECTION_IDS.hero}`}
          className="px-5 py-2.5 bg-accent text-surface-primary font-display font-bold text-sm uppercase tracking-wide border-2 border-border-light shadow-[3px_3px_0px_var(--color-border-light)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_var(--color-border-light)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100"
        >
          Get Free Alerts
        </a>
      </div>
    </nav>
  );
}
