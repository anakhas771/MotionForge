"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/utils/cn";

interface VideoPreviewProps {
  videoSrc?: string;
  fallback: React.ReactNode;
  className?: string;
}

export function VideoPreview({ videoSrc, fallback, className }: VideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 400px margin for early loading
  const isNearViewport = useInView(containerRef, { margin: "400px 0px", amount: 0 });
  // 0px margin for play/pause
  const isStrictlyInView = useInView(containerRef, { margin: "0px 0px", amount: 0 });

  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Once it comes near viewport, permanently set shouldLoad to true
  if (isNearViewport && !shouldLoad) {
    setShouldLoad(true);
  }

  // Handle play/pause based on strict visibility and readiness
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVideoReady || hasError) return;

    if (isStrictlyInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isStrictlyInView, isVideoReady, hasError]);

  return (
    <div ref={containerRef} className={cn("relative w-full h-full", className)}>
      {/* Placeholder / Fallback */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
          isVideoReady ? "opacity-0" : "opacity-100"
        )}
      >
        {fallback}
      </div>

      {/* Video */}
      {shouldLoad && !hasError && videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setIsVideoReady(true)}
          onCanPlay={() => setIsVideoReady(true)}
          onError={() => setHasError(true)}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
            isVideoReady ? "opacity-100" : "opacity-0"
          )}
        />
      )}
    </div>
  );
}
