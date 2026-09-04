"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimationComponent } from "@/types";
import { searchComponents } from "@/data/animations";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<AnimationComponent[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = useCallback((slug: string) => {
    router.push(`/code/${slug}`);
    onClose();
  }, [router, onClose]);

  const performSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }
    const searchResults = searchComponents(searchQuery);
    setResults(searchResults);
    setSelectedIndex(0);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch(query);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, performSearch]);

  useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
    }

    if (!isOpen) return;

    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < results.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter" && results.length > 0) {
      e.preventDefault();
      handleSelect(results[selectedIndex].slug);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [isOpen, results, selectedIndex, onClose, handleSelect]);

useEffect(() => {
  if (!isOpen) return;

  const resetId = window.setTimeout(() => {
    setQuery("");
    setResults([]);
    setSelectedIndex(0);
  }, 0);

  return () => window.clearTimeout(resetId);
}, [isOpen]);


  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
            <motion.div
              className="w-full max-w-xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
                <Search className="w-5 h-5 text-muted shrink-0" />
                <input
                  type="text"
                  placeholder="Search animations..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted outline-none"
                  autoFocus
                />
                <button
                  onClick={onClose}
                  className="text-muted hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Results List */}
              <div className="max-h-80 overflow-auto">
                {query.trim() && results.length === 0 && (
                  <div className="px-4 py-8 text-center text-muted">
                    No components found for &quot;{query}&quot;
                  </div>
                )}

                {results.length > 0 && (
                  <div className="py-2">
                    {results.map((result, index) => (
                      <motion.button
                        key={result.id}
                        onClick={() => handleSelect(result.slug)}
                        className={`w-full px-4 py-3 flex flex-col gap-2 text-left transition-colors ${
                          index === selectedIndex
                            ? "bg-surface"
                            : "hover:bg-surface/50"
                        }`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.02 }}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground">
                            {result.name}
                          </span>
                          <Badge
                            variant="outline"
                            className="text-xs capitalize"
                          >
                            {result.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted line-clamp-1">
                          {result.description}
                        </p>
                      </motion.button>
                    ))}
                  </div>
                )}

                {!query.trim() && (
                  <div className="px-4 py-8 text-center text-muted">
                    Start typing to search animations...
                  </div>
                )}
              </div>

              {/* Footer Hint */}
              <div className="px-4 py-3 border-t border-border bg-surface/30">
                <div className="flex items-center gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-background border border-border">↑↓</kbd>
                    Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-background border border-border">Enter</kbd>
                    Select
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-background border border-border">Esc</kbd>
                    Close
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
