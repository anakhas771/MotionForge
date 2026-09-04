"use client";

import * as React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

export function Accordion({ items }: { items: { question: string; answer: React.ReactNode }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border border-border rounded-xl bg-surface overflow-hidden">
            <button
              className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-hidden"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="font-medium text-foreground">{item.question}</span>
              <ChevronDown
                className={cn("w-5 h-5 text-muted transition-transform duration-200 shrink-0", isOpen && "rotate-180")}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-4 text-muted leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
