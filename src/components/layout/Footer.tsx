export function Footer() {
  return (
    <footer className="bg-surface-secondary py-8 border-t border-border-light/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-accent flex items-center justify-center">
            <span className="font-display font-bold text-surface-primary text-sm leading-none">
              W
            </span>
          </div>
          <span className="font-body text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} Winning Trades. Built with AI. Delivered with conviction.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Terms
          </a>
          {/* X / Twitter */}
          <a
            href="#"
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label="Follow on X"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
