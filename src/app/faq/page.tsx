import { Metadata } from "next";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { Container } from "@/components/ui/container";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | MotionForge",
  description: "Common questions about MotionForge, licensing, and integration.",
};

const faqItems = [
  {
    question: "What is MotionForge?",
    answer: "MotionForge is a premium component library focusing specifically on highly crafted, production-ready UI animations for modern web interfaces. It saves developers and designers hours of boilerplate work.",
  },
  {
    question: "How do I browse animations?",
    answer: "You can navigate to the Library page where all animations are categorized. You can filter by categories like Hero Animations, Text Animations, and Scroll Animations to find exactly what you need.",
  },
  {
    question: "Can I preview animations before downloading?",
    answer: "Yes, you can view the animations in action by hovering over or interacting with the component cards in the library. This allows you to evaluate the motion before integrating it into your project.",
  },
  {
    question: "How do I download an animation?",
    answer: "Currently, users with full access can view the source code of the animation directly on the component's detail page. You can simply copy the provided React component code or download the required assets to use in your project.",
  },
  {
    question: "Are the animations compatible with React?",
    answer: "Yes, the components are built specifically for React ecosystems. Most components rely on Framer Motion for animation capabilities and Tailwind CSS for styling, making them drop-in ready for modern frameworks like Next.js.",
  },
  {
    question: "Can I customize the animations?",
    answer: "Absolutely. Once you copy the source code into your project, you have complete control over the files. You can modify the timings, styles, colors, and behavior to fit your exact requirements.",
  },
  {
    question: "Do I need an account?",
    answer: "Browsing the library is free, but you need an account with an active purchase or subscription to view and copy the raw source code of the premium components.",
  },
  {
    question: "What happens after purchasing a component or plan?",
    answer: "After completing your purchase, your account will instantly be granted access to the locked component source code. You can view the code, copy it, and begin using the components in your projects immediately.",
  },
  {
    question: "Which browsers are supported?",
    answer: "Our components are tested on modern evergreen browsers including Chrome, Safari, Firefox, and Edge. We use standard CSS transforms and Framer Motion, which are broadly supported and highly performant.",
  },
  {
    question: "Can I use MotionForge components in commercial projects?",
    answer: (
      <>
        Yes, you can use the components in both personal and commercial projects. However, you may not redistribute the raw files as a competing library. For full details, please review our <Link href="/legal/license" className="text-accent hover:underline">License agreement</Link>.
      </>
    )
  },
  {
    question: "How can I get support?",
    answer: "You can reach out to us via the Contact options in our dashboard, or by reviewing our documentation for common integration queries.",
  }
];

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Frequently Asked Questions</h1>
              <p className="text-lg text-muted">Find answers to common questions about MotionForge.</p>
            </div>
            
            <Accordion items={faqItems} />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
