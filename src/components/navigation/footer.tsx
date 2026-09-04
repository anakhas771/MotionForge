import Link from "next/link";
import Image from "next/image";
const footerLinks = {
  product: [
    { label: "Animation Library", href: "/library" },
  ],
  resources: [
    { label: "Documentation", href: "/documentation" },
    { label: "FAQ", href: "/faq" },
  ],
  company: [
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "License", href: "/legal/license" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-surface border-t border-border rounded-t-3xl mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/vercel.svg"
                alt="MotionForge"
                width={28}
                height={28}
              />
              <span className="text-lg font-bold">MotionForge</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Motion, without the boilerplate. Production-ready animation patterns
              for modern interfaces.
            </p>
            
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/anakhas771"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted">
          <p>© 2026 MotionForge. All rights reserved.</p>
          <p className="text-xs">Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
