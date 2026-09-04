"use client";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { PRO_CATEGORIES, type Category } from "@/lib/categories";

interface FilterSidebarProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
  onSearchClick: () => void;
  componentCount: number;
}

export function FilterSidebar({
  activeCategory,
  onCategoryChange,
  onSearchClick,
  componentCount,
}: FilterSidebarProps) {
  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="sticky top-24 space-y-6">
        {/* Search */}
        <button
          onClick={onSearchClick}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-surface hover:bg-surface-hover transition-colors group"
        >
          <Search className="w-4 h-4 text-muted group-hover:text-foreground transition-colors" />
          <span className="text-sm text-muted group-hover:text-foreground transition-colors">
            Search animations...
          </span>
          <div className="ml-auto flex items-center gap-1">
            <kbd className="px-2 py-0.5 text-xs rounded bg-background border border-border text-muted">
              ⌘K
            </kbd>
          </div>
        </button>

        {/* Category Header */}
        <div className="space-y-1">
          <h3 className="text-xs font-semibold text-muted uppercase tracking-wider">
            PRO-Level SVG Animations
          </h3>
          <p className="text-xs text-muted/60">{componentCount} components</p>
        </div>

        {/* Categories */}
        <nav className="space-y-1">
          {PRO_CATEGORIES.map((category) => (
            <motion.button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative",
                activeCategory === category
                  ? "bg-accent/10 text-accent"
                  : "text-muted hover:text-foreground hover:bg-surface-hover"
              )}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-accent/10 rounded-lg"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative">{category}</span>
            </motion.button>
          ))}
        </nav>

        {/* Clear Filters */}
        {activeCategory !== "All Components" && (
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onClick={() => onCategoryChange("All Components")}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <X className="w-3 h-3" />
            Clear filters
          </motion.button>
        )}
      </div>
    </aside>
  );
}
