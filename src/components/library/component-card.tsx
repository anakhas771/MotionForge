"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { AnimationComponent } from "@/types";
import { VideoPreview } from "./video-preview";

interface ComponentCardProps {
  component: AnimationComponent;
}

const getCategoryPreview = (category: string) => {
  switch (category.toLowerCase()) {
    case "text":
      return (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <motion.line
            x1="12"
            y1="20"
            x2="52"
            y2="20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1="12"
            y1="32"
            x2="52"
            y2="32"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.2, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1="12"
            y1="44"
            x2="40"
            y2="44"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.4, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      );
    case "buttons":
      return (
        <motion.div
          className="w-20 h-12 rounded-lg bg-foreground"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      );
    case "cards":
      return (
        <div className="relative w-24 h-24">
          <motion.div
            className="absolute inset-0 rounded-lg bg-foreground/40"
            initial={{ rotate: 0, scale: 0.9 }}
            animate={{ rotate: 6, scale: 0.95 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div
            className="absolute inset-0 rounded-lg bg-foreground/60"
            initial={{ rotate: 0, scale: 0.95 }}
            animate={{ rotate: 3, scale: 1 }}
            transition={{ duration: 2, delay: 0.2, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div
            className="absolute inset-0 rounded-lg bg-foreground"
            initial={{ rotate: 0, scale: 1 }}
            animate={{ rotate: -2, scale: 1.02 }}
            transition={{ duration: 2, delay: 0.4, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>
      );
    case "loaders":
      return (
        <motion.div
          className="w-16 h-16 border-4 border-foreground/20 border-t-foreground rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      );
    case "backgrounds":
      return (
        <div className="w-24 h-24 rounded-lg overflow-hidden relative">
          <motion.div
            className="absolute inset-0 bg-linear-to-br from-foreground/60 to-foreground/20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>
      );
    case "navigation":
      return (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <motion.rect
            x="12"
            y="16"
            width="40"
            height="6"
            rx="1"
            fill="currentColor"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.rect
            x="12"
            y="29"
            width="40"
            height="6"
            rx="1"
            fill="currentColor"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
          />
          <motion.rect
            x="12"
            y="42"
            width="40"
            height="6"
            rx="1"
            fill="currentColor"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
          />
        </svg>
      );
    case "forms":
      return (
        <div className="space-y-2">
          <motion.div
            className="w-24 h-3 rounded bg-foreground/40"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ transformOrigin: "left" }}
          />
          <motion.div
            className="w-24 h-3 rounded bg-foreground/40"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 1, 0] }}
            transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
            style={{ transformOrigin: "left" }}
          />
          <motion.div
            className="w-16 h-3 rounded bg-foreground/40"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 1, 0] }}
            transition={{ duration: 3, delay: 1, repeat: Infinity }}
            style={{ transformOrigin: "left" }}
          />
        </div>
      );
    default:
      return (
        <motion.div
          className="w-16 h-16 rounded-full bg-foreground"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      );
  }
};

function ComponentCardContent({ component }: ComponentCardProps) {
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();
  const href = `/code/${component.slug}${queryString ? `?${queryString}` : ""}`;

  return (
    <Link href={href} className="block">
      <motion.div
        className="rounded-xl border border-border bg-card overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Preview Area */}
        <div className="aspect-4/3 bg-surface relative flex items-center justify-center text-foreground/60 group-hover:text-foreground transition-colors overflow-hidden">
          <VideoPreview
            videoSrc={component.video}
            fallback={getCategoryPreview(component.category)}
            className="w-full h-full flex items-center justify-center"
          />
        </div>
      </motion.div>
    </Link>
  );
}

export function ComponentCard({ component }: ComponentCardProps) {
  return (
    <Suspense fallback={<div className="aspect-4/3 bg-surface rounded-xl border border-border animate-pulse" />}>
      <ComponentCardContent component={component} />
    </Suspense>
  );
}
