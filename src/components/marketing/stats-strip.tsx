"use client";
import { motion } from "framer-motion";
import { useIntersection } from "@/hooks/use-intersection";

const stats = [
  { value: "50+", label: "Components" },
  { value: "8", label: "Categories" },
  { value: "3", label: "Frameworks" },
  { value: "₹300", label: "Lifetime" },
];

export function StatsStrip() {
  const [ref, isVisible] = useIntersection<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="border-y border-border bg-surface/50 backdrop-blur-sm py-12"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center space-y-1 relative"
            >
              {i !== 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border" />
              )}
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
