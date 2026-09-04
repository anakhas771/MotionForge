"use client";
import { useSyncExternalStore } from "react";

export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mediaQuery = window.matchMedia(query);

      mediaQuery.addEventListener("change", onStoreChange);

      return () => {
        mediaQuery.removeEventListener("change", onStoreChange);
      };
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}

export function useIsMobile() {
  return useMediaQuery("(max-width: 768px)");
}

export function useReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
