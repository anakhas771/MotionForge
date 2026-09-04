import { Metadata } from "next";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Documentation | MotionForge",
  description: "Learn how to use MotionForge animations in your React projects.",
};

export default function DocumentationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12 text-muted leading-relaxed">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Documentation</h1>
              <p className="text-lg">Everything you need to know to get started with MotionForge.</p>
            </div>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Welcome to MotionForge</h2>
              <p>
                MotionForge is a premium library and platform for discovering modern UI animations and motion components. It provides production-ready, highly crafted components designed for modern web interfaces, saving you hours of boilerplate animation code.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Getting Started</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong className="text-foreground">Browse the animation library:</strong> Navigate to our Library to see all available components.</li>
                <li><strong className="text-foreground">Explore categories:</strong> Filter by different interaction types and visual styles.</li>
                <li><strong className="text-foreground">Preview animations:</strong> Hover over or interact with the component cards to see the animations in action.</li>
                <li><strong className="text-foreground">Select an animation:</strong> Click on any component to view its details and code.</li>
                <li><strong className="text-foreground">Access the source code:</strong> If you have full access, you can view and copy the source code directly.</li>
                <li><strong className="text-foreground">Integrate it into a React project:</strong> Drop the code into your project and customize it.</li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Browsing Components</h2>
              <p>MotionForge organizes animations into logical categories for easy discovery, such as:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Hero Animations:</strong> Eye-catching introductory sections.</li>
                <li><strong className="text-foreground">Text Animations:</strong> Dynamic typography and reveal effects.</li>
                <li><strong className="text-foreground">Scroll Animations:</strong> Elements that react to the user&apos;s scroll position.</li>
                <li><strong className="text-foreground">Background Animations:</strong> Subtle, engaging background patterns and meshes.</li>
                <li><strong className="text-foreground">Buttons:</strong> Interactive micro-interactions for call-to-actions.</li>
                <li><strong className="text-foreground">Cards:</strong> Hover states, expansions, and 3D effects for content containers.</li>
                <li><strong className="text-foreground">Loaders:</strong> Creative states for loading and processing.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Downloading Components</h2>
              <p>
                When viewing a component, users with full access can view the raw source code and instructions required to implement the animation. You can simply copy the provided code or download the required assets to integrate into your own project.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Using Components</h2>
              <p>A general workflow to use a component in your project:</p>
              <div className="bg-surface p-6 rounded-xl border border-border font-mono text-sm space-y-1">
                <p>1. View the component source code</p>
                <p>2. Copy the required component files</p>
                <p>3. Install any required dependencies (e.g., framer-motion, lucide-react)</p>
                <p>4. Import the component into your project</p>
                <p>5. Customize the styles and content as needed</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">React Integration</h2>
              <p>
                Most components are built using React and Framer Motion. They utilize modern React patterns and Tailwind CSS for styling. Ensure your project is set up to support these technologies (such as a Next.js App Router project or Vite React app).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Best Practices</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Keep animations purposeful:</strong> Animations should guide the user&apos;s attention, not distract from the content.</li>
                <li><strong className="text-foreground">Respect reduced motion preferences:</strong> Use CSS or Framer Motion&apos;s useReducedMotion hook to disable intense animations for users who prefer reduced motion.</li>
                <li><strong className="text-foreground">Avoid excessive animation:</strong> Too many moving parts can overwhelm the interface.</li>
                <li><strong className="text-foreground">Test on mobile devices:</strong> Ensure touch interactions and layout shifts behave correctly on smaller screens.</li>
                <li><strong className="text-foreground">Consider performance:</strong> Favor transform and opacity animations to ensure smooth 60fps performance without triggering costly layout recalculations.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Support</h2>
              <p>
                If you experience issues integrating a component or have questions regarding your account, please reach out via our contact options or check out the FAQ section for common solutions.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
