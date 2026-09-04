"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/utils/cn";
import { NAV_ITEMS } from "@/lib/constants";


interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
};

const menuContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const menuItemVariants: Variants = {
  hidden: { opacity: 0, x: -40, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: -20,
    filter: "blur(4px)",
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.2 },
  },
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-background p-8"
            variants={menuContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-lg hover:bg-surface-hover transition-colors"
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <nav className="flex-1 flex flex-col justify-center space-y-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.div key={item.href} variants={menuItemVariants}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "block text-4xl font-bold hover:text-accent transition-colors",
                      "relative group"
                    )}
                  >
                    <span className="text-muted/30 mr-4">{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div variants={ctaVariants} className="pt-8 border-t border-border">
              <Link
                href="/library"
                onClick={onClose}
                className="block text-center py-4 px-8 bg-linear-to-r from-accent to-accent-bright text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Browse Library
              </Link>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
