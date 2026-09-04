export const duration = {
  fast: 0.15,
  medium: 0.3,
  slow: 0.6,
  slower: 1.0,
} as const;

export const ease = {
  out: [0.16, 1, 0.3, 1] as [number, number, number, number],
  inOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
  bounce: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
};

export const spring = {
  soft: { type: "spring" as const, stiffness: 120, damping: 14 },
  medium: { type: "spring" as const, stiffness: 200, damping: 20 },
  stiff: { type: "spring" as const, stiffness: 400, damping: 30 },
  bouncy: { type: "spring" as const, stiffness: 300, damping: 10 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: duration.medium },
};

export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: duration.medium, ease: ease.out },
};

export const slideDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: duration.medium, ease: ease.out },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: duration.medium, ease: ease.out },
};

export const blurReveal = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  exit: { opacity: 0, filter: "blur(10px)" },
  transition: { duration: duration.slow },
};

export function stagger(index: number, baseDelay = 0.05) {
  return { delay: index * baseDelay };
}

export function createStaggerChildren(staggerAmount = 0.05) {
  return {
    animate: {
      transition: {
        staggerChildren: staggerAmount,
      },
    },
  };
}
