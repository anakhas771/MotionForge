import Link from "next/link";
import Image from "next/image";

const footerSections = [
  {
    title: "Explore",
    links: [
      { label: "Library", href: "/library" },
      { label: "Documentation", href: "/documentation" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Animation Categories", href: "/library" },
      { label: "Getting Started", href: "/documentation" },
      { label: "License", href: "/legal/license" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "License", href: "/legal/license" },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/anakhas771",
        external: true,
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-32">
      {/* Top gradient border */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="relative bg-[#0a0a0c] border-t border-border/30 rounded-t-3xl overflow-hidden">
        {/* Subtle background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.06] blur-[120px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(167,139,250,0.4) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Main footer content */}
          <div className="pt-16 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
              {/* Brand section */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/vercel.svg"
                    alt="MotionForge"
                    width={32}
                    height={32}
                  />
                  <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                    MotionForge
                  </span>
                </div>
                <p className="text-sm text-muted/80 leading-relaxed max-w-xs">
                  Modern UI animations for modern interfaces. Production-ready animation patterns, completely free to use.
                </p>
              </div>

              {/* Link sections */}
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.href + link.label}>
                        {"external" in link && link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group text-sm text-muted/70 hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1"
                          >
                            <span className="relative">
                              {link.label}
                              <span className="absolute bottom-0 left-0 w-0 h-px bg-accent/50 group-hover:w-full transition-all duration-300" />
                            </span>
                            <svg
                              className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="group text-sm text-muted/70 hover:text-foreground transition-colors duration-200"
                          >
                            <span className="relative">
                              {link.label}
                              <span className="absolute bottom-0 left-0 w-0 h-px bg-accent/50 group-hover:w-full transition-all duration-300" />
                            </span>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

          {/* Bottom bar */}
          <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted/50">
            <p>© 2026 MotionForge. All rights reserved.</p>
            <p className="text-xs">Built for modern interfaces.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
