"use client";
import { useRef, useEffect } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useReducedMotion } from "@/hooks/use-media-query";

export function PremiumBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useMousePosition();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const container = containerRef.current;
    const gradient1 = container.querySelector(".gradient-orb-1") as HTMLDivElement;
    const gradient2 = container.querySelector(".gradient-orb-2") as HTMLDivElement;
    const gradient3 = container.querySelector(".gradient-orb-3") as HTMLDivElement;

    if (!gradient1 || !gradient2 || !gradient3) return;

    // Subtle mouse-reactive movement
    const moveX1 = mouse.normalizedX * 30;
    const moveY1 = mouse.normalizedY * 30;
    const moveX2 = mouse.normalizedX * -20;
    const moveY2 = mouse.normalizedY * -20;
    const moveX3 = mouse.normalizedX * 15;
    const moveY3 = mouse.normalizedY * 15;

    gradient1.style.transform = `translate(${moveX1}px, ${moveY1}px)`;
    gradient2.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
    gradient3.style.transform = `translate(${moveX3}px, ${moveY3}px)`;
  }, [mouse.normalizedX, mouse.normalizedY, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#050505] to-[#020202]" />

      {/* Animated gradient orbs */}
      {!prefersReducedMotion && (
        <>
          {/* Orb 1 - Purple/Violet */}
          <div
            className="gradient-orb-1 absolute top-0 -left-1/4 w-[800px] h-[800px] rounded-full opacity-20 blur-[120px] transition-transform duration-1000 ease-out"
            style={{
              background: "radial-gradient(circle, rgba(167, 139, 250, 0.4) 0%, transparent 70%)",
              animation: "float1 20s ease-in-out infinite",
            }}
          />

          {/* Orb 2 - Blue */}
          <div
            className="gradient-orb-2 absolute top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full opacity-15 blur-[100px] transition-transform duration-1000 ease-out"
            style={{
              background: "radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, transparent 70%)",
              animation: "float2 25s ease-in-out infinite",
            }}
          />

          {/* Orb 3 - Indigo */}
          <div
            className="gradient-orb-3 absolute bottom-0 left-1/2 w-[700px] h-[700px] rounded-full opacity-10 blur-[110px] transition-transform duration-1000 ease-out"
            style={{
              background: "radial-gradient(circle, rgba(129, 140, 248, 0.35) 0%, transparent 70%)",
              animation: "float3 30s ease-in-out infinite",
            }}
          />
        </>
      )}

      {/* Noise overlay for texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)",
        }}
      />

      <style jsx>{`
        @keyframes float1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(100px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-50px, 100px) scale(0.9);
          }
        }

        @keyframes float2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-80px, 60px) scale(1.05);
          }
          66% {
            transform: translate(60px, -80px) scale(0.95);
          }
        }

        @keyframes float3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-60px, -40px) scale(1.08);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gradient-orb-1,
          .gradient-orb-2,
          .gradient-orb-3 {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
