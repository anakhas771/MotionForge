"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Package } from "lucide-react";
import { ComponentCard } from "./component-card";
import { AnimationComponent } from "@/types";

interface ComponentGridProps {
  components: AnimationComponent[];
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.2,
    },
  },
};

export function ComponentGrid({ components }: ComponentGridProps) {
  if (components.length === 0) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-20 h-20 rounded-full bg-surface flex items-center justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <Package className="w-10 h-10 text-muted" />
        </motion.div>

        <h3 className="text-xl font-semibold text-foreground mb-2">
          No components found
        </h3>

        <p className="text-muted text-center max-w-md">
          Try adjusting your filters or search criteria to find what you&apos;re looking for.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence mode="popLayout">
        {components.map((component, index) => (
          <motion.div
            key={component.id}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            layout
            custom={index}
            transition={{ delay: Math.min(index * 0.03, 0.5) }}
          >
            <ComponentCard component={component} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
