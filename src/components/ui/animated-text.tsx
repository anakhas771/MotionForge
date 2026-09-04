"use client";
import { motion } from "framer-motion";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/utils/cn";
import { createElement } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  as = "h2",
}: AnimatedTextProps) {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.1 });

  const words = text.split(" ");

  return createElement(
    as,
    {
      ref,
      className: cn("overflow-hidden", className),
    },
    words.map((word, wordIndex) => (
      <span key={`${word}-${wordIndex}`} className="inline-block">
        {word.split("").map((char, charIndex) => (
          <motion.span
            key={`${char}-${charIndex}`}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={
              isVisible
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 20, filter: "blur(4px)" }
            }
            transition={{
              duration: 0.4,
              delay: delay + wordIndex * 0.06 + charIndex * 0.02,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
        {wordIndex < words.length - 1 && (
          <span className="inline-block">&nbsp;</span>
        )}
      </span>
    ))
  );
}
