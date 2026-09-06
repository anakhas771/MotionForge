"use client";

import { Package, Loader2 } from "lucide-react";
import { ComponentCard } from "./component-card";
import { AnimationComponent } from "@/types";
import { useState, useEffect, useRef } from "react";

interface ComponentGridProps {
  components: AnimationComponent[];
}

export function ComponentGrid({ components }: ComponentGridProps) {
  // Safe window check for SSR
  const getBatchSize = () => {
    if (typeof window === "undefined") return 12;
    return window.innerWidth < 768 ? 6 : 12;
  };

  const [batchSize, setBatchSize] = useState(12);
  const [visibleCount, setVisibleCount] = useState(12);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [prevComponents, setPrevComponents] = useState(components);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Initialize batch size on mount
  useEffect(() => {
    const size = getBatchSize();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBatchSize(size);
     
    setVisibleCount(size);
  }, []);

  // Reset when components change (e.g. category filter)
  if (components !== prevComponents) {
    setPrevComponents(components);
    setVisibleCount(batchSize);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          if (isLoadingMore) return;
          
          if (visibleCount < components.length) {
            setIsLoadingMore(true);
            // Small delay to prevent rapid continuous firing and allow browser rendering
            setTimeout(() => {
              setVisibleCount((prev) => Math.min(prev + batchSize, components.length));
              setIsLoadingMore(false);
            }, 100);
          }
        }
      },
      { rootMargin: "400px 0px" } // trigger before user hits the very bottom
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [visibleCount, components.length, isLoadingMore, batchSize]);

  if (components.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 animate-in fade-in duration-500">
        <div className="w-20 h-20 rounded-full bg-surface flex items-center justify-center mb-6">
          <Package className="w-10 h-10 text-muted" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          No components found
        </h3>
        <p className="text-muted text-center max-w-md">
          Try adjusting your filters or search criteria to find what you&apos;re looking for.
        </p>
      </div>
    );
  }

  const displayedComponents = components.slice(0, visibleCount);
  const hasMore = visibleCount < components.length;

  return (
    <div className="flex flex-col pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedComponents.map((component) => (
          <ComponentCard key={component.id} component={component} />
        ))}
      </div>
      
      {/* Sentinel / Load More Indicator */}
      {hasMore && (
        <div 
          ref={loadMoreRef} 
          aria-hidden="true" 
          className="w-full mt-8 flex justify-center items-center"
          style={{ minHeight: "1px" }}
        >
          {isLoadingMore && (
            <div className="flex items-center gap-2 text-muted text-sm py-4">
              <Loader2 className="w-4 h-4 animate-spin" />
              Loading more animations...
            </div>
          )}
        </div>
      )}
      
      {/* End of list */}
      {!hasMore && displayedComponents.length > 0 && (
        <div className="w-full mt-12 text-center text-sm text-muted/60 py-4 border-t border-border/40">
          You&apos;ve reached the end.
        </div>
      )}
    </div>
  );
}
