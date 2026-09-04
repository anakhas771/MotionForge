"use client";

import { motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";

interface LibraryHeaderProps {
  onSearchClick: () => void;
  componentCount: number;
}

export function LibraryHeader({ onSearchClick, componentCount }: LibraryHeaderProps) {
  return (
    <section className="space-y-6">
      {/* Title and Description */}
      <div className="space-y-4">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Animation Library
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          50+ production-ready animations built for modern React interfaces.
        </motion.p>
      </div>

      {/* Search Bar and Stats */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        {/* Search Bar Trigger */}
        <motion.button
          onClick={onSearchClick}
          className="flex-1 max-w-md flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-surface hover:bg-surface/80 transition-colors group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <Search className="w-5 h-5 text-muted group-hover:text-foreground transition-colors" />
          <span className="text-muted group-hover:text-foreground transition-colors">
            Search animations...
          </span>
          <div className="ml-auto flex items-center gap-1">
            <kbd className="px-2 py-1 text-xs rounded bg-background border border-border text-muted">
              {typeof navigator !== "undefined" && navigator.platform.includes("Mac") ? "⌘" : "Ctrl"}
            </kbd>
            <kbd className="px-2 py-1 text-xs rounded bg-background border border-border text-muted">
              K
            </kbd>
          </div>
        </motion.button>

        {/* Component Count Display */}
        <motion.div
          className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border bg-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Sparkles className="w-5 h-5 text-foreground" />
          <span className="text-sm font-medium text-foreground">
            {componentCount} Components
          </span>
        </motion.div>
      </div>
    </section>
  );
}
