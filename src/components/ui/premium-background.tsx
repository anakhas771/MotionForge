"use client";
import { useRef, useEffect } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useReducedMotion, useIsTouchDevice } from "@/hooks/use-media-query";

export function PremiumBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useMousePosition();
  const prefersReducedMotion = useReducedMotion();
  const isTouchDevice = useIsTouchDevice();
  const disableAnimation = prefersReducedMotion || isTouchDevice;

  useEffect(() => {
    if (disableAnimation || !containerRef.current) return;

    const container = containerRef.current;
    const gradient1 = container.querySelector(".gradient-orb-1") as HTMLDivElement;
    const gradient2 = container.querySelector(".gradient-orb-2") as HTMLDivElement;
    const gradient3 = container.querySelector(".gradient-orb-3") as HTMLDivElement;

    if (!gradient1 || !gradient2 || !gradient3) return;

    const moveX1 = mouse.normalizedX * 30;
    const moveY1 = mouse.normalizedY * 30;
    const moveX2 = mouse.normalizedX * -20;
    const moveY2 = mouse.normalizedY * -20;
    const moveX3 = mouse.normalizedX * 15;
    const moveY3 = mouse.normalizedY * 15;

    gradient1.style.transform = `translate(${moveX1}px, ${moveY1}px)`;
    gradient2.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
    gradient3.style.transform = `translate(${moveX3}px, ${moveY3}px)`;
  }, [mouse.normalizedX, mouse.normalizedY, disableAnimation]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Deep near-black base */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Subtle radial gradient from top */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f15]/60 via-[#050505]/80 to-[#020202]" />

      {/* Large soft radial light fields */}
      <div
        className={`gradient-orb-1 absolute -top-[20%] -left-[10%] w-[900px] h-[900px] rounded-full opacity-[0.05] md:opacity-[0.12] blur-[60px] md:blur-[140px] transition-transform duration-1000 ease-out`}
        style={{
          background: "radial-gradient(circle at center, rgba(167,139,250,0.35) 0%, rgba(167,139,250,0.05) 50%, transparent 70%)",
          animation: disableAnimation ? "none" : "float1 22s ease-in-out infinite",
        }}
      />
      <div
        className={`gradient-orb-2 absolute top-[30%] -right-[15%] w-[700px] h-[700px] rounded-full opacity-[0.04] md:opacity-[0.10] blur-[50px] md:blur-[120px] transition-transform duration-1000 ease-out`}
        style={{
          background: "radial-gradient(circle at center, rgba(96,165,250,0.30) 0%, rgba(96,165,250,0.05) 50%, transparent 70%)",
          animation: disableAnimation ? "none" : "float2 28s ease-in-out infinite",
        }}
      />
      <div
        className={`gradient-orb-3 absolute -bottom-[10%] left-[20%] w-[800px] h-[800px] rounded-full opacity-[0.03] md:opacity-[0.08] blur-[50px] md:blur-[130px] transition-transform duration-1000 ease-out`}
        style={{
          background: "radial-gradient(circle at center, rgba(129,140,248,0.30) 0%, rgba(129,140,248,0.05) 50%, transparent 70%)",
          animation: disableAnimation ? "none" : "float3 32s ease-in-out infinite",
        }}
      />

      {/* Very subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Soft noise texture */}
      <div
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 40%, transparent 0%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      <style jsx global>{`
        @keyframes float1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(120px, -60px) scale(1.08);
          }
          66% {
            transform: translate(-60px, 120px) scale(0.92);
          }
        }
        @keyframes float2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-100px, 70px) scale(1.05);
          }
          66% {
            transform: translate(80px, -90px) scale(0.95);
          }
        }
        @keyframes float3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-80px, -50px) scale(1.12);
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
