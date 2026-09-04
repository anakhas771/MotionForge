"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useIntersection } from "@/hooks/use-intersection";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";

const benefits = [
  "Completely free",
  "Open source",
  "Commercial use",
  "Instant access",
];

export function FinalCTA() {
  const [ref, isVisible] = useIntersection<HTMLDivElement>();

  return (
    <Section className="relative overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.06)_0%,transparent_50%)]" />

      <Container className="relative z-10">
        <div ref={ref} className="text-center space-y-8 max-w-3xl mx-auto">
          <AnimatedText
            text="Make your interface move."
            className="text-5xl md:text-6xl font-bold"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-muted"
          >
            Browse the completely free animation library.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button asChild variant="accent" size="xl">
              <Link href="/library">Browse Library</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted"
          >
            {benefits.map((benefit) => (
              <span key={benefit} className="flex items-center gap-1.5">
                <span className="text-accent">✓</span>
                {benefit}
              </span>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
