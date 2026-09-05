"use client";

import { Package } from "lucide-react";
import { ComponentCard } from "./component-card";
import { AnimationComponent } from "@/types";

interface ComponentGridProps {
  components: AnimationComponent[];
}

export function ComponentGrid({ components }: ComponentGridProps) {
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {components.map((component) => (
        <ComponentCard key={component.id} component={component} />
      ))}
    </div>
  );
}
