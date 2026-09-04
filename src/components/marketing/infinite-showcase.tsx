"use client";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

const components = [
  "Magnetic Button",
  "Text Reveal",
  "3D Tilt Card",
  "Spotlight Effect",
  "Glow Button",
  "Parallax Scroll",
  "Liquid Morph",
  "Aurora Background",
  "Cursor Trail",
  "Animated Tabs",
  "Gradient Text",
  "Image Distortion",
  "Floating Dock",
  "Blur Reveal",
  "Shimmer Button",
];

export function InfiniteShowcase() {
  return (
    <Section className="relative overflow-hidden">
      {/* Radial Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.08)_0%,transparent_70%)]" />

      <Container className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          One library. <span className="gradient-text">Infinite motion.</span>
        </h2>

        <div className="space-y-6">
          {/* First Row - Left to Right */}
          <div className="relative flex overflow-hidden gap-4">
            <div className="animate-marquee flex gap-4 w-max shrink-0">
              {[...components, ...components, ...components, ...components].map((name, i) => (
                <ComponentPill key={`row1-a-${name}-${i}`} name={name} />
              ))}
            </div>
            <div aria-hidden="true" className="animate-marquee flex gap-4 w-max shrink-0">
              {[...components, ...components, ...components, ...components].map((name, i) => (
                <ComponentPill key={`row1-b-${name}-${i}`} name={name} />
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative flex overflow-hidden gap-4">
            <div className="animate-marquee-reverse flex gap-4 w-max shrink-0">
              {[...components, ...components, ...components, ...components].reverse().map((name, i) => (
                <ComponentPill key={`row2-a-${name}-${i}`} name={name} />
              ))}
            </div>
            <div aria-hidden="true" className="animate-marquee-reverse flex gap-4 w-max shrink-0">
              {[...components, ...components, ...components, ...components].reverse().map((name, i) => (
                <ComponentPill key={`row2-b-${name}-${i}`} name={name} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ComponentPill({ name }: { name: string }) {
  return (
    <div className="inline-flex items-center px-6 py-3 rounded-full border border-border bg-card hover:border-accent/30 hover:bg-surface-hover transition-all duration-300 cursor-default">
      <span className="text-sm font-medium text-muted">{name}</span>
    </div>
  );
}
