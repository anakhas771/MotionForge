"use client";
import { motion } from "framer-motion";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/utils/cn";

interface StaggerRevealProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function StaggerReveal({
  children,
  className,
  staggerDelay = 0.08,
  direction = "up",
}: StaggerRevealProps) {
  const [ref, isVisible] = useIntersection<HTMLDivElement>();

  const directionMap = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };

  return (
    <div ref={ref} className={cn(className)}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, ...directionMap[direction] }}
          animate={
            isVisible
              ? { opacity: 1, x: 0, y: 0 }
              : { opacity: 0, ...directionMap[direction] }
          }
          transition={{
            duration: 0.5,
            delay: i * staggerDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
