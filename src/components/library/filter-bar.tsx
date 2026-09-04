"use client";

import { motion } from "framer-motion";
import { CATEGORIES, TECHNOLOGIES, DIFFICULTIES } from "@/lib/constants";
import { cn } from "@/utils/cn";

interface FilterBarProps {
  activeCat: string;
  setActiveCat: (category: string) => void;
  activeTech: string;
  setActiveTech: (technology: string) => void;
  activeDiff: string;
  setActiveDiff: (difficulty: string) => void;
}

export function FilterBar({
  activeCat,
  setActiveCat,
  activeTech,
  setActiveTech,
  activeDiff,
  setActiveDiff,
}: FilterBarProps) {
  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted">Category:</label>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <motion.button
            onClick={() => setActiveCat("all")}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors border",
              activeCat === "all"
                ? "bg-foreground text-background border-foreground"
                : "bg-surface text-muted border-border hover:border-foreground/50"
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            All
          </motion.button>
          {CATEGORIES.map((category) => (
            <motion.button
              key={category.value}
              onClick={() => setActiveCat(category.value)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors border",
                activeCat === category.value
                  ? "bg-foreground text-background border-foreground"
                  : "bg-surface text-muted border-border hover:border-foreground/50"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Technology Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted">Tech:</label>
        <div className="flex flex-wrap gap-2">
          <motion.button
            onClick={() => setActiveTech("all")}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors border",
              activeTech === "all"
                ? "bg-foreground text-background border-foreground"
                : "bg-surface text-muted border-border hover:border-foreground/50"
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            All
          </motion.button>
          {TECHNOLOGIES.map((tech) => (
            <motion.button
              key={tech.value}
              onClick={() => setActiveTech(tech.value)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors border",
                activeTech === tech.value
                  ? "bg-foreground text-background border-foreground"
                  : "bg-surface text-muted border-border hover:border-foreground/50"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {tech.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Difficulty Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted">Level:</label>
        <div className="flex flex-wrap gap-2">
          <motion.button
            onClick={() => setActiveDiff("all")}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors border",
              activeDiff === "all"
                ? "bg-foreground text-background border-foreground"
                : "bg-surface text-muted border-border hover:border-foreground/50"
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            All
          </motion.button>
          {DIFFICULTIES.map((difficulty) => (
            <motion.button
              key={difficulty.value}
              onClick={() => setActiveDiff(difficulty.value)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors border",
                activeDiff === difficulty.value
                  ? "bg-foreground text-background border-foreground"
                  : "bg-surface text-muted border-border hover:border-foreground/50"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {difficulty.label}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
