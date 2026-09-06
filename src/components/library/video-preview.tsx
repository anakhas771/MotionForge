"use client";

import { cn } from "@/utils/cn";

interface VideoPreviewProps {
  videoSrc?: string;
  fallback: React.ReactNode;
  className?: string;
}

export function VideoPreview({ videoSrc, fallback, className }: VideoPreviewProps) {
  return (
    <div className={cn("relative w-full h-full", className)}>
      {/* Fallback */}
      <div className="absolute inset-0 flex items-center justify-center">
        {fallback}
      </div>

      {/* Video */}
      {videoSrc && (
        <video
          src={videoSrc}
          muted
          loop
          playsInline
          autoPlay
          className="absolute inset-0 w-full h-full object-cover z-10"
        />
      )}
    </div>
  );
}
