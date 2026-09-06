import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ComponentCard } from "@/components/library/component-card";
import { AnimationComponent } from "@/types";

export function ShowcaseGrid({ animations }: { animations: AnimationComponent[] }) {
  return (
    <Section className="bg-surface/30">
      <Container>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            See what you can build.
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            A curated library of animated components for modern React interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {animations.map((comp) => (
            <ComponentCard key={comp.id} component={comp} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/library"
            className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors text-lg font-medium group"
          >
            View all components
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
