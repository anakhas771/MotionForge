"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

// --- Module-level singleton observers ---
// Two observers: one for preloading (wider margin) and one for visible playback
// Created lazily at runtime so SSR never touches them.
let preloadObserver: IntersectionObserver | null = null;
let visibleObserver: IntersectionObserver | null = null;

// WeakMaps so garbage collection works naturally when cards unmount
const preloadRegistry = new WeakMap<Element, () => void>();
const visibleRegistry = new WeakMap<Element, (visible: boolean) => void>();

// Mobile: only one video plays at a time
let activeMobileVideo: HTMLVideoElement | null = null;

function isMobile() {
  return typeof window !== "undefined" && window.innerWidth < 768;
}

function getPreloadObserver(): IntersectionObserver {
  if (!preloadObserver) {
    const margin = isMobile() ? "200px 0px" : "400px 0px";
    preloadObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const cb = preloadRegistry.get(entry.target);
            if (cb) {
              cb();
              // Fire once only — unobserve after triggering
              preloadObserver?.unobserve(entry.target);
            }
          }
        }
      },
      { rootMargin: margin, threshold: 0 }
    );
  }
  return preloadObserver;
}

function getVisibleObserver(): IntersectionObserver {
  if (!visibleObserver) {
    visibleObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const cb = visibleRegistry.get(entry.target);
          if (cb) cb(entry.isIntersecting);
        }
      },
      { rootMargin: "0px", threshold: 0 }
    );
  }
  return visibleObserver;
}

// ---

type VideoState = "idle" | "loading" | "ready" | "error";

interface VideoPreviewProps {
  videoSrc?: string;
  fallback: React.ReactNode;
  className?: string;
}

export function VideoPreview({ videoSrc, fallback, className }: VideoPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // sourceLoaded ensures we only assign src once
  const sourceLoadedRef = useRef(false);
  // visible ref avoids stale closures in event handlers
  const isVisibleRef = useRef(false);

  const [videoState, setVideoState] = useState<VideoState>("idle");

  // tryPlay: call whenever visibility OR readyState might have changed
  function tryPlay() {
    const video = videoRef.current;
    if (!video || !isVisibleRef.current) return;
    // HAVE_CURRENT_DATA (2) is enough to start playback
    if (video.readyState < 2) return;

    if (isMobile()) {
      // Pause the previous mobile video
      if (activeMobileVideo && activeMobileVideo !== video) {
        activeMobileVideo.pause();
      }
      activeMobileVideo = video;
    }
    video.play().catch(() => {/* browser policy rejection – ignore silently */});
  }

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !videoSrc) return;

    const pObs = getPreloadObserver();
    const vObs = getVisibleObserver();

    // --- Preload callback: assign src once ---
    preloadRegistry.set(container, () => {
      if (sourceLoadedRef.current) return;
      const video = videoRef.current;
      if (!video) return;

      sourceLoadedRef.current = true;
      setVideoState("loading");

      // Directly set src on the DOM element — bypasses React render cycle
      video.src = videoSrc;
      video.load();
    });

    // --- Visible callback: play / pause ---
    visibleRegistry.set(container, (visible: boolean) => {
      isVisibleRef.current = visible;
      const video = videoRef.current;
      if (!video) return;

      if (visible) {
        tryPlay();
      } else {
        video.pause();
        if (activeMobileVideo === video) {
          activeMobileVideo = null;
        }
      }
    });

    pObs.observe(container);
    vObs.observe(container);

    const capturedContainer = container;
    const capturedVideo = videoRef.current;

    return () => {
      preloadRegistry.delete(capturedContainer);
      visibleRegistry.delete(capturedContainer);
      pObs.unobserve(capturedContainer);
      vObs.unobserve(capturedContainer);
      if (activeMobileVideo === capturedVideo) {
        activeMobileVideo = null;
      }
    };
  }, [videoSrc]);

  function handleLoadedData() {
    setVideoState("ready");
    tryPlay();
  }

  function handleCanPlay() {
    if (videoState !== "ready") setVideoState("ready");
    tryPlay();
  }

  function handleError() {
    setVideoState("error");
  }

  const showVideo = videoState === "ready";
  const showFallback = videoState !== "ready"; // idle | loading | error

  return (
    <div ref={containerRef} className={cn("relative w-full h-full", className)}>
      {/* Fallback / placeholder */}
      <div
        className={cn(
          "absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-150",
          showFallback ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {fallback}
      </div>

      {/* Video — always in DOM, src set imperatively via ref */}
      <video
        ref={videoRef}
        preload="metadata"
        muted
        loop
        playsInline
        onLoadedData={handleLoadedData}
        onCanPlay={handleCanPlay}
        onError={handleError}
        className={cn(
          "absolute inset-0 z-20 w-full h-full object-cover transition-opacity duration-150",
          showVideo ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
}
