"use client";
import { useState, useEffect, useCallback, RefObject } from "react";

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
}

export function useMousePosition(ref?: RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState<MousePosition>({
    x: 0, y: 0, normalizedX: 0, normalizedY: 0,
  });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (ref?.current) {
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPosition({
        x, y,
        normalizedX: x / rect.width - 0.5,
        normalizedY: y / rect.height - 0.5,
      });
    } else {
      setPosition({
        x: e.clientX, y: e.clientY,
        normalizedX: e.clientX / window.innerWidth - 0.5,
        normalizedY: e.clientY / window.innerHeight - 0.5,
      });
    }
  }, [ref]);

  useEffect(() => {
    const target = ref?.current ?? window;
    target.addEventListener("mousemove", handleMouseMove as EventListener);
    return () => target.removeEventListener("mousemove", handleMouseMove as EventListener);
  }, [handleMouseMove, ref]);

  return position;
}
