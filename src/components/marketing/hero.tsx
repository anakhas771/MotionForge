"use client";
import { useRef} from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";

const heroText = {
  line1: "Build interfaces",
  line2: "that move.",
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mouse = useMousePosition(ref);

const particles = [
  { id: 0, size: 26, x: 8, y: 18, rotation: 32, opacity: 0.07, type: "circle" },
  { id: 1, size: 34, x: 22, y: 64, rotation: 118, opacity: 0.05, type: "rect" },
  { id: 2, size: 42, x: 41, y: 28, rotation: 210, opacity: 0.08, type: "line" },
  { id: 3, size: 24, x: 57, y: 73, rotation: 88, opacity: 0.06, type: "circle" },
  { id: 4, size: 38, x: 71, y: 16, rotation: 146, opacity: 0.05, type: "rect" },
  { id: 5, size: 30, x: 84, y: 52, rotation: 278, opacity: 0.07, type: "line" },
  { id: 6, size: 44, x: 14, y: 84, rotation: 54, opacity: 0.04, type: "rect" },
  { id: 7, size: 28, x: 33, y: 46, rotation: 172, opacity: 0.06, type: "circle" },
  { id: 8, size: 36, x: 63, y: 39, rotation: 224, opacity: 0.05, type: "line" },
  { id: 9, size: 25, x: 92, y: 24, rotation: 316, opacity: 0.07, type: "circle" },
  { id: 10, size: 32, x: 5, y: 43, rotation: 76, opacity: 0.05, type: "line" },
  { id: 11, size: 40, x: 28, y: 12, rotation: 194, opacity: 0.06, type: "rect" },
  { id: 12, size: 27, x: 48, y: 88, rotation: 260, opacity: 0.05, type: "circle" },
  { id: 13, size: 35, x: 76, y: 68, rotation: 34, opacity: 0.07, type: "line" },
  { id: 14, size: 43, x: 96, y: 86, rotation: 154, opacity: 0.04, type: "rect" },
  { id: 15, size: 29, x: 18, y: 36, rotation: 306, opacity: 0.06, type: "circle" },
  { id: 16, size: 37, x: 54, y: 8, rotation: 92, opacity: 0.05, type: "line" },
  { id: 17, size: 31, x: 68, y: 48, rotation: 228, opacity: 0.07, type: "rect" },
  { id: 18, size: 39, x: 88, y: 34, rotation: 44, opacity: 0.05, type: "circle" },
  { id: 19, size: 33, x: 39, y: 58, rotation: 182, opacity: 0.06, type: "line" },
];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Floating UI Fragments */}
      <div className="absolute inset-0">
        {particles.map((el) => (
          <motion.div
            key={el.id}
            className="absolute"
            style={{
              left: `${el.x}%`,
              top: `${el.y}%`,
              width: el.size,
              height: el.size,
            }}
            animate={{
              x: mouse.normalizedX * 30,
              y: mouse.normalizedY * 30,
              rotate: el.rotation + mouse.normalizedX * 10,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            {el.type === "circle" ? (
              <div
                className="w-full h-full rounded-full border border-white/10"
                style={{ opacity: el.opacity }}
              />
            ) : el.type === "rect" ? (
              <div
                className="w-full h-full border border-accent/10"
                style={{ opacity: el.opacity }}
              />
            ) : (
              <div
                className="w-full h-0.5 bg-white/10"
                style={{ opacity: el.opacity }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/50 backdrop-blur-sm text-sm shimmer">
            <span className="text-accent">✦</span>
            <span className="text-muted">50+ Production-Ready Animations</span>
          </div>
        </motion.div>

        {/* Hero Heading */}
        <div className="space-y-2">
          <AnimatedLine text={heroText.line1} delay={0.2} />
          <AnimatedLine
            text={heroText.line2}
            delay={0.5}
            className="gradient-text"
          />
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl text-muted max-w-2xl mx-auto"
        >
          A premium collection of production-ready React animations and
          interactive UI components.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild size="lg">
            <Link href="/library">Explore Library</Link>
          </Button>
        </motion.div>
        {/* Trust Strip */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-sm text-muted/70"
        >
          Completely free · Open source · 50+ components
        </motion.p>
      </div>

      {/* Bottom Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 w-64 h-px bg-linear-to-r from-transparent via-accent to-transparent"
      />
    </section>
  );
}

function AnimatedLine({
  text,
  delay,
  className,
}: {
  text: string;
  delay: number;
  className?: string;
}) {
  const chars = text.split("");

  return (
    <h1
      className={cn(
        "text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight",
        className
      )}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 60, rotateX: -40 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 14,
            delay: delay + i * 0.02,
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </h1>
  );
}
