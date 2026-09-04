"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion} from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { NAV_ITEMS, SITE_NAME } from "@/lib/constants";

import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled && "backdrop-blur-xl border-b border-border bg-background/80"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/vercel.svg"
                alt="MotionForge"
                width={32}
                height={32}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span className="text-xl font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-300">
                {SITE_NAME}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 bg-[#1e1e1e] px-8 py-2.5 rounded-full border border-white/5 shadow-sm">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group"
                >
                  <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors duration-200">
                    {item.label}
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-primary to-accent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ originX: 0 }}
                  />
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">


              {/* CTA Button */}
              <Link
                href="/library"
                data-cursor="pointer"
              >
                <motion.button
                  className={cn(
                    "hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm",
                    "bg-linear-to-r from-primary via-accent to-secondary",
                    "text-white hover:shadow-lg hover:shadow-primary/20",
                    "transition-all duration-300"
                  )}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Browse Library
                </motion.button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-foreground/5 transition-colors duration-200"
                aria-label="Toggle mobile menu"
                data-cursor="pointer"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-primary via-accent to-secondary"
          style={{ scaleX: scrollProgress / 100, originX: 0 }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
