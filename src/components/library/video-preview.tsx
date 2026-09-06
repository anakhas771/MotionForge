"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

// Global observers setup to prevent creating hundreds of IntersectionObservers
const nearCallbacks = new WeakMap<Element, (isIntersecting: boolean) => void>();
const visibleCallbacks = new WeakMap<Element, (isIntersecting: boolean) => void>();
let nearObserver: IntersectionObserver | null = null;
let visibleObserver: IntersectionObserver | null = null;

function getNearObserver() {
  if (typeof window === "undefined") return null;
  if (!nearObserver) {
    const isMobile = window.innerWidth < 768;
    const rootMargin = isMobile ? "150px 0px" : "400px 0px";
    
    nearObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cb = nearCallbacks.get(entry.target);
          if (cb) cb(entry.isIntersecting);
        });
      },
      { rootMargin, threshold: 0 }
    );
  }
  return nearObserver;
}

function getVisibleObserver() {
  if (typeof window === "undefined") return null;
  if (!visibleObserver) {
    visibleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cb = visibleCallbacks.get(entry.target);
          if (cb) cb(entry.isIntersecting);
        });
      },
      { rootMargin: "0px 0px", threshold: 0 }
    );
  }
  return visibleObserver;
}

interface VideoPreviewProps {
  videoSrc?: string;
  fallback: React.ReactNode;
  className?: string;
}

export function VideoPreview({ videoSrc, fallback, className }: VideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  
  // Track visibility without triggering re-renders
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const nObs = getNearObserver();
    const vObs = getVisibleObserver();

    nearCallbacks.set(el, (isIntersecting) => {
      if (isIntersecting) {
        setShouldLoad(true);
      }
    });

    visibleCallbacks.set(el, (isIntersecting) => {
      isVisibleRef.current = isIntersecting;
      const video = videoRef.current;
      if (video) {
        if (isIntersecting) {
          // Play when visible
          if (video.readyState >= 3) {
            video.play().catch(() => {});
          }
        } else {
          // Pause when strictly offscreen
          video.pause();
        }
      }
    });

    if (nObs) nObs.observe(el);
    if (vObs) vObs.observe(el);

    return () => {
      nearCallbacks.delete(el);
      visibleCallbacks.delete(el);
      if (nObs) nObs.unobserve(el);
      if (vObs) vObs.unobserve(el);
    };
  }, []);

  const handleReady = () => {
    if (!isVideoReady) {
      setIsVideoReady(true);
    }
    const video = videoRef.current;
    if (video && isVisibleRef.current) {
      video.play().catch(() => {});
    }
  };

  return (
    <div ref={containerRef} className={cn("relative w-full h-full", className)}>
      {/* Placeholder / Fallback */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-opacity duration-150",
          isVideoReady ? "opacity-0" : "opacity-100"
        )}
      >
        {fallback}
      </div>

      {/* Video */}
      {shouldLoad && videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          preload="metadata"
          muted
          loop
          playsInline
          onLoadedData={handleReady}
          onCanPlay={handleReady}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-150",
            isVideoReady ? "opacity-100" : "opacity-0"
          )}
        />
      )}
    </div>
  );
}
