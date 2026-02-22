import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Winning Trades — AI-Powered Trading Alerts",
  description:
    "Our AI agent swarm scans 150+ market variables every second. Dark pools, congressional trades, market maker exposures. Only when the agents agree, you get an alert. Free.",
  openGraph: {
    title: "Winning Trades — AI-Powered Trading Alerts",
    description:
      "Enterprise-grade AI analysis, delivered as simple email alerts. No prompting required.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Winning Trades — AI-Powered Trading Alerts",
    description:
      "Enterprise-grade AI analysis, delivered as simple email alerts. No prompting required.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "oklch(0.21 0.02 260)",
              border: "2px solid oklch(0.75 0.18 145)",
              color: "oklch(0.93 0.005 90)",
              fontFamily: "var(--font-body)",
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
