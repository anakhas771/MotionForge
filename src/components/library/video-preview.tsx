"use client";

import { useEffect, useRef, useState } from "react";

interface VideoPreviewProps {
  videoSrc?: string;
  fallback: React.ReactNode;
  className?: string;
}

export function VideoPreview({ videoSrc, fallback, className }: VideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc || hasError) return;

    if (isInView) {
      video.play().catch(() => {
        // Silent fail - video may not be ready
      });
    } else {
      video.pause();
    }
  }, [isInView, videoSrc, hasError]);

  if (!videoSrc || hasError) {
    return (
      <div ref={containerRef} className={className}>
        {fallback}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={className}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        loop
        playsInline
        preload="metadata"
        onError={() => setHasError(true)}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
