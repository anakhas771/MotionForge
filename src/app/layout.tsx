import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PremiumBackground } from "@/components/ui/premium-background";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MotionForge — Premium React Animation Library",

  description:
    "Explore production-ready React animations, interactive UI components and motion effects. Download the complete source code for free.",

  keywords: [
    "react animations",
    "framer motion",
    "gsap",
    "ui components",
    "animation library",
    "motion design",
    "interactive ui",
  ],

  icons: {
    icon: "/vercel.svg",
    shortcut: "/vercel.svg",
    apple: "/vercel.svg",
  },

  openGraph: {
    title: "MotionForge — Premium React Animation Library",
    description:
      "Production-ready animated components with downloadable source code.",
    url: "https://motionforge.dev",
    siteName: "MotionForge",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MotionForge — Premium React Animation Library",
    description:
      "Production-ready animated components with downloadable source code.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <Analytics/>
      <body
        className="min-h-full flex flex-col bg-background text-foreground"
        suppressHydrationWarning
      >
        <PremiumBackground />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}