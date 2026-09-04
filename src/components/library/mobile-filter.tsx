"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { PRO_CATEGORIES, type Category } from "@/lib/categories";
import { Button } from "@/components/ui/button";

interface MobileFilterProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
  componentCount: number;
}

export function MobileFilter({
  activeCategory,
  onCategoryChange,
  componentCount,
}: MobileFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (category: Category) => {
    onCategoryChange(category);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface hover:bg-surface-hover transition-colors"
      >
        <Filter className="w-4 h-4" />
        <span className="text-sm font-medium">{activeCategory}</span>
        <span className="text-xs text-muted">({componentCount})</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border rounded-t-2xl lg:hidden max-h-[80vh] overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div>
                  <h3 className="font-semibold">Filter Animations</h3>
                  <p className="text-xs text-muted">{componentCount} components</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-surface-hover transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Categories */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {PRO_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleSelect(category)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      activeCategory === category
                        ? "bg-accent text-white"
                        : "bg-surface hover:bg-surface-hover"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Actions */}
              <div className="p-4 border-t border-border space-y-2">
                {activeCategory !== "All Components" && (
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleSelect("All Components")}
                  >
                    Clear Filters
                  </Button>
                )}
                <Button className="w-full" onClick={() => setIsOpen(false)}>
                  Apply
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
