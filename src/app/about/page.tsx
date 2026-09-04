import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <Section>
          <Container size="narrow">
            <div className="prose prose-invert max-w-none">
              <h1 className="text-5xl font-bold mb-8">About MotionForge</h1>

              <p className="text-xl text-muted mb-8">
                A premium collection of production-ready React animations and
                interactive UI components built for modern web interfaces.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">What is MotionForge?</h2>
              <p className="text-muted">
                MotionForge is a curated library of 50+ animated components
                designed to help developers build engaging, interactive interfaces
                without starting from scratch. Every component is production-ready,
                fully typed with TypeScript, and built with modern animation
                libraries.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">What&apos;s Included?</h2>
              <ul className="space-y-2 text-muted">
                <li>50+ production-ready animated components</li>
                <li>Full source code with TypeScript support</li>
                <li>Examples using Framer Motion, GSAP, and Anime.js</li>
                <li>Tailwind CSS styling</li>
                <li>Interactive playground for each component</li>
                <li>Commercial usage license</li>
                <li>Lifetime access and updates</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-4">Who is it for?</h2>
              <p className="text-muted">
                MotionForge is designed for frontend developers, UI engineers, and
                product teams who want to add polished animations to their React
                applications without the overhead of building everything from
                scratch.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Pricing</h2>
              <p className="text-muted">
                One-time payment of ₹300 for lifetime access. No subscriptions, no
                recurring fees. Get everything included with future updates at no
                extra cost.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">License</h2>
              <p className="text-muted">
                Commercial usage is included. Use the components in client
                projects, SaaS products, and commercial applications. Redistribution
                as a competing product is not allowed.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Support</h2>
              <p className="text-muted">
                For questions or support, reach out via email or GitHub issues.
                Documentation and implementation guides are included with your
                purchase.
              </p>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
