"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

type LifecycleCallback = (isIntersecting: boolean) => void;
const preloadCallbacks = new WeakMap<Element, LifecycleCallback>();
const visibleCallbacks = new WeakMap<Element, LifecycleCallback>();

let sharedObserver: IntersectionObserver | null = null;
let activeMobileVideo: HTMLVideoElement | null = null;

function getSharedObserver() {
  if (typeof window === "undefined") return null;
  if (!sharedObserver) {
    // ONE shared IntersectionObserver for the entire application
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.hasAttribute("data-preload")) {
            const cb = preloadCallbacks.get(entry.target);
            if (cb) cb(entry.isIntersecting);
          } else {
            const cb = visibleCallbacks.get(entry.target);
            if (cb) cb(entry.isIntersecting);
          }
        });
      },
      { rootMargin: "0px 0px", threshold: 0 }
    );
  }
  return sharedObserver;
}

interface VideoPreviewProps {
  videoSrc?: string;
  fallback: React.ReactNode;
  className?: string;
}

export function VideoPreview({ videoSrc, fallback, className }: VideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const visibleRef = useRef<HTMLDivElement>(null);
  const preloadRef = useRef<HTMLDivElement>(null);

  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  
  const isVisibleRef = useRef(false);

  const tryPlay = () => {
    const video = videoRef.current;
    if (!video || !isVisibleRef.current) return;

    // 3 = HAVE_FUTURE_DATA
    if (video.readyState >= 3) {
      if (window.innerWidth < 768) {
        if (activeMobileVideo && activeMobileVideo !== video) {
          activeMobileVideo.pause();
        }
        activeMobileVideo = video;
      }
      video.play().catch(() => {});
    }
  };

  useEffect(() => {
    const vEl = visibleRef.current;
    const pEl = preloadRef.current;
    if (!vEl || !pEl) return;

    const observer = getSharedObserver();

    preloadCallbacks.set(pEl, (isIntersecting) => {
      if (isIntersecting) setShouldLoad(true);
    });

    visibleCallbacks.set(vEl, (isIntersecting) => {
      isVisibleRef.current = isIntersecting;
      const video = videoRef.current;
      
      if (video) {
        if (isIntersecting) {
          tryPlay();
        } else {
          video.pause();
          if (activeMobileVideo === video) {
            activeMobileVideo = null;
          }
        }
      }
    });

    if (observer) {
      observer.observe(pEl);
      observer.observe(vEl);
    }

    const videoEl = videoRef.current;

    return () => {
      preloadCallbacks.delete(pEl);
      visibleCallbacks.delete(vEl);
      if (observer) {
        observer.unobserve(pEl);
        observer.unobserve(vEl);
      }
      if (activeMobileVideo === videoEl) {
        activeMobileVideo = null;
      }
    };
  }, []);

  const handleReady = () => {
    if (!isVideoReady) setIsVideoReady(true);
    tryPlay();
  };

  const handleError = () => {
    setIsVideoReady(false);
  };

  return (
    <div ref={visibleRef} className={cn("relative w-full h-full", className)}>
      {/* CSS-driven preload boundaries (150px mobile, 400px desktop) */}
      <div 
        ref={preloadRef} 
        data-preload
        className="absolute w-full pointer-events-none -top-[150px] -bottom-[150px] md:-top-[400px] md:-bottom-[400px] z-[-1]"
      />

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
      <video
        ref={videoRef}
        src={shouldLoad && videoSrc ? videoSrc : undefined}
        preload="metadata"
        muted
        loop
        playsInline
        onLoadedData={handleReady}
        onCanPlay={handleReady}
        onError={handleError}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-150",
          isVideoReady ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
}
