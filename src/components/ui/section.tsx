"use client";
import { motion } from "framer-motion";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/utils/cn";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  const [ref, isVisible] = useIntersection<HTMLElement>({ threshold: 0.1 });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn("relative py-24 md:py-32", className)}
    >
      {children}
    </motion.section>
  );
}
