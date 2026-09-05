import { AnimationComponent } from "@/types";

export const R2_BASE_URL =
  "https://pub-958316778e384500b760d382f88b0c54.r2.dev";

export const animations: AnimationComponent[] = [
  // TEXT (8)
  {
    id: "1",
    slug: "text-reveal",
    name: "Text Reveal",
    description: "Characters animate in with staggered timing for a dynamic text entrance effect.",
    category: "Text Animations",
    technologies: ["framer-motion", "react", "typescript"],
    difficulty: "beginner",
    interactions: ["scroll"],
    // TODO: Map this animation to its verified R2 video file.
    video: `${R2_BASE_URL}/text_animations/text-1.mp4`,
    featured: true,

    code: {
      react: `import { motion } from "framer-motion";\n\nexport function TextReveal({ text }: { text: string }) {\n  const chars = text.split("");\n  return (\n    <div>\n      {chars.map((char, i) => (\n        <motion.span\n          key={i}\n          initial={{ opacity: 0, y: 20 }}\n          animate={{ opacity: 1, y: 0 }}\n          transition={{ delay: i * 0.05 }}\n        >\n          {char}\n        </motion.span>\n      ))}\n    </div>\n  );\n}\n// ... (unlock for full source)`,
      typescript: `interface TextRevealProps {\n  text: string;\n  delay?: number;\n  stagger?: number;\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "stagger", label: "Stagger Delay", type: "range", min: 0, max: 0.2, step: 0.01, defaultValue: 0.05 },
      { name: "distance", label: "Distance", type: "range", min: 0, max: 50, step: 1, defaultValue: 20 },
    ],
    props: [
      { name: "text", type: "string", default: "", description: "Text to animate" },
      { name: "stagger", type: "number", default: "0.05", description: "Delay between characters" },
    ],
    relatedSlugs: ["split-text", "blur-reveal", "gradient-text"],
  },
  {
    id: "2",
    slug: "split-text",
    name: "Split Text",
    description: "Words split and animate independently for creative text effects.",
    category: "Text Animations",
    technologies: ["framer-motion", "react"],
    difficulty: "intermediate",
    interactions: ["scroll"],
    // TODO: Map this animation to its verified R2 video file.
    video: `${R2_BASE_URL}/text_animations/text-2.mp4`,

    code: {
      react: `import { motion } from "framer-motion";\n\nexport function SplitText({ text }: { text: string }) {\n  const words = text.split(" ");\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "spacing", label: "Word Spacing", type: "range", min: 0, max: 20, step: 1, defaultValue: 8 },
    ],
    props: [{ name: "text", type: "string", default: "", description: "Text content" }],
    relatedSlugs: ["text-reveal", "scramble-text"],
  },
  {
    id: "3",
    slug: "scramble-text",
    name: "Scramble Text",
    description: "Random characters scramble and resolve into final text with a digital effect.",
    category: "Text Animations",
    technologies: ["react", "typescript"],
    difficulty: "advanced",
    interactions: ["hover"],
    // TODO: Map this animation to its verified R2 video file.
    video: `${R2_BASE_URL}/text_animations/text-3.mp4`,
    isNew: true,

    code: {
      react: `export function ScrambleText({ text }: { text: string }) {\n  const [display, setDisplay] = useState(text);\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "speed", label: "Speed", type: "range", min: 10, max: 100, step: 5, defaultValue: 30 },
    ],
    props: [{ name: "text", type: "string", default: "", description: "Target text" }],
    relatedSlugs: ["glitch-text", "text-reveal"],
  },
  {
    id: "4",
    slug: "typewriter",
    name: "Typewriter Effect",
    description: "Classic character-by-character typing animation effect.",
    category: "Text Animations",
    technologies: ["react", "typescript"],
    difficulty: "beginner",
    video: `${R2_BASE_URL}/text_animations/text-4.mp4`,

    interactions: ["scroll"],

    code: {
      react: `export function Typewriter({ text }: { text: string }) {\n  const [current, setCurrent] = useState("");\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "speed", label: "Type Speed", type: "range", min: 10, max: 200, step: 10, defaultValue: 50 },
    ],
    props: [{ name: "text", type: "string", default: "", description: "Text to type" }],
    relatedSlugs: ["text-reveal", "scramble-text"],
  },
  {
    id: "5",
    slug: "gradient-text",
    name: "Gradient Text",
    description: "Animated gradient flows smoothly across text creating a dynamic color effect.",
    category: "Text Animations",
    technologies: ["css", "tailwind"],
    difficulty: "beginner",
    video: `${R2_BASE_URL}/text_animations/text-5.mp4`,

    interactions: ["hover"],
    featured: true,

    code: {
      react: `export function GradientText({ children }: { children: string }) {\n  return (\n    <span className="gradient-text-animated">\n      {children}\n    </span>\n  );\n}\n// ... (unlock for full source)`,
      css: `.gradient-text-animated {\n  background: linear-gradient(90deg, ...);\n  background-size: 200% auto;\n  animation: gradient 3s linear infinite;\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "speed", label: "Animation Speed", type: "range", min: 1, max: 10, step: 0.5, defaultValue: 3 },
    ],
    props: [{ name: "children", type: "ReactNode", default: "", description: "Text content" }],
    relatedSlugs: ["text-reveal", "glitch-text"],
  },
  {
    id: "6",
    slug: "blur-reveal",
    name: "Blur Reveal",
    description: "Text transitions smoothly from blur to sharp focus.",
    category: "Text Animations",
    technologies: ["framer-motion", "react"],
    difficulty: "beginner",
    video: `${R2_BASE_URL}/text_animations/text-6.mp4`,

    interactions: ["scroll"],

    code: {
      react: `import { motion } from "framer-motion";\n\nexport function BlurReveal({ text }: { text: string }) {\n  return (\n    <motion.div\n      initial={{ opacity: 0, filter: "blur(10px)" }}\n      animate={{ opacity: 1, filter: "blur(0px)" }}\n    >\n      {text}\n    </motion.div>\n  );\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "blur", label: "Initial Blur", type: "range", min: 0, max: 20, step: 1, defaultValue: 10 },
    ],
    props: [{ name: "text", type: "string", default: "", description: "Text to reveal" }],
    relatedSlugs: ["text-reveal", "split-text"],
  },
  {
    id: "7",
    slug: "word-morph",
    name: "Word Morph",
    description: "Words smoothly morph and transition between different values.",
    category: "Text Animations",
    technologies: ["framer-motion", "react"],
    difficulty: "intermediate",
    video: `${R2_BASE_URL}/text_animations/text-7.mp4`,

    interactions: ["scroll"],
    isNew: true,

    code: {
      react: `export function WordMorph({ words }: { words: string[] }) {\n  const [index, setIndex] = useState(0);\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "duration", label: "Morph Duration", type: "range", min: 0.5, max: 3, step: 0.1, defaultValue: 1 },
    ],
    props: [{ name: "words", type: "string[]", default: "[]", description: "Words to cycle" }],
    relatedSlugs: ["text-reveal", "scramble-text"],
  },
  {
    id: "8",
    slug: "glitch-text",
    name: "Glitch Text",
    description: "Digital glitch distortion effect with chromatic aberration.",
    category: "Text Animations",
    technologies: ["css", "react"],
    difficulty: "advanced",
    video: `${R2_BASE_URL}/text_animations/text-8.mp4`,

    interactions: ["hover"],

    code: {
      react: `export function GlitchText({ text }: { text: string }) {\n  return (\n    <div className="glitch" data-text={text}>\n      {text}\n    </div>\n  );\n}\n// ... (unlock for full source)`,
      css: `.glitch {\n  position: relative;\n  animation: glitch-anim 2s infinite;\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "intensity", label: "Glitch Intensity", type: "range", min: 0, max: 10, step: 1, defaultValue: 5 },
    ],
    props: [{ name: "text", type: "string", default: "", description: "Text to glitch" }],
    relatedSlugs: ["scramble-text", "gradient-text"],
  },

  // BUTTONS (7)
  {
    id: "9",
    slug: "magnetic-button",
    name: "Magnetic Button",
    description: "Button follows cursor with magnetic pull creating an interactive hover effect.",
    category: "Hover Effects",
    technologies: ["framer-motion", "react", "typescript"],
    difficulty: "intermediate",
    video: `${R2_BASE_URL}/hover_effect/hover-1.mp4`,

    interactions: ["hover", "mouse"],
    featured: true,

    code: {
      react: `import { motion, useMotionValue, useSpring } from "framer-motion";\n\nexport function MagneticButton({ children }: { children: ReactNode }) {\n  const x = useMotionValue(0);\n  const y = useMotionValue(0);\n  const springX = useSpring(x, { stiffness: 150, damping: 15 });\n  const springY = useSpring(y, { stiffness: 150, damping: 15 });\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "strength", label: "Magnetic Strength", type: "range", min: 0.1, max: 1, step: 0.1, defaultValue: 0.5 },
      { name: "radius", label: "Effect Radius", type: "range", min: 50, max: 200, step: 10, defaultValue: 100 },
    ],
    props: [
      { name: "children", type: "ReactNode", default: "", description: "Button content" },
      { name: "strength", type: "number", default: "0.5", description: "Magnetic pull strength" },
    ],
    relatedSlugs: ["glow-button", "morph-button"],
  },
  {
    id: "10",
    slug: "liquid-button",
    name: "Liquid Button",
    description: "Liquid/gooey morphing effect on hover using SVG filters.",
    category: "Hover Effects",
    technologies: ["svg", "react", "css"],
    difficulty: "advanced",
    video: `${R2_BASE_URL}/hover_effect/hover-2.mp4`,

    interactions: ["hover"],

    code: {
      react: `export function LiquidButton({ children }: { children: ReactNode }) {\n  return (\n    <>\n      <svg style={{ position: "absolute" }}>\n        <defs>\n          <filter id="goo">\n            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />\n            // ... (unlock for full source)`,
    },
    controls: [
      { name: "viscosity", label: "Liquid Viscosity", type: "range", min: 1, max: 20, step: 1, defaultValue: 10 },
    ],
    props: [{ name: "children", type: "ReactNode", default: "", description: "Button text" }],
    relatedSlugs: ["magnetic-button", "morph-button"],
  },
  {
    id: "11",
    slug: "glow-button",
    name: "Glow Button",
    description: "Dynamic glow effect that follows cursor position over the button.",
    category: "Hover Effects",
    technologies: ["framer-motion", "react"],
    difficulty: "intermediate",
    video: `${R2_BASE_URL}/hover_effect/hover-3.mp4`,

    interactions: ["hover", "mouse"],
    featured: true,

    code: {
      react: `export function GlowButton({ children }: { children: ReactNode }) {\n  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "glowSize", label: "Glow Size", type: "range", min: 50, max: 300, step: 10, defaultValue: 150 },
      { name: "intensity", label: "Glow Intensity", type: "range", min: 0.1, max: 1, step: 0.1, defaultValue: 0.6 },
    ],
    props: [{ name: "children", type: "ReactNode", default: "", description: "Content" }],
    relatedSlugs: ["magnetic-button", "shimmer-button"],
  },
  {
    id: "12",
    slug: "shimmer-button",
    name: "Shimmer Button",
    description: "Shimmer light sweep across button surface.",
    category: "Hover Effects",
    technologies: ["css", "tailwind", "react"],
    difficulty: "beginner",
    video: `${R2_BASE_URL}/hover_effect/hover-4.mp4`,

    interactions: ["hover"],

    code: {
      react: `export function ShimmerButton({ children }: { children: ReactNode }) {\n  return (\n    <button className="shimmer-button">\n      {children}\n    </button>\n  );\n}\n// ... (unlock for full source)`,
      css: `.shimmer-button {\n  background: linear-gradient(90deg, ...);\n  background-size: 200% 100%;\n  animation: shimmer 2s infinite;\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "speed", label: "Shimmer Speed", type: "range", min: 0.5, max: 5, step: 0.5, defaultValue: 2 },
    ],
    props: [{ name: "children", type: "ReactNode", default: "", description: "Button content" }],
    relatedSlugs: ["glow-button", "border-beam"],
  },
  {
    id: "13",
    slug: "border-beam",
    name: "Border Beam Button",
    description: "Animated light beam travels around button edges.",
    category: "Hover Effects",
    technologies: ["css", "react"],
    difficulty: "intermediate",
    video: `${R2_BASE_URL}/hover_effect/hover-5.mp4`,

    interactions: ["hover"],
    isNew: true,

    code: {
      react: `export function BorderBeamButton({ children }: { children: ReactNode }) {\n  return (\n    <button className="border-beam-btn">\n      <span className="border-beam" />\n      {children}\n    </button>\n  );\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "speed", label: "Beam Speed", type: "range", min: 1, max: 10, step: 1, defaultValue: 3 },
    ],
    props: [{ name: "children", type: "ReactNode", default: "", description: "Content" }],
    relatedSlugs: ["shimmer-button", "glow-button"],
  },
  {
    id: "14",
    slug: "ripple-button",
    name: "Ripple Button",
    description: "Material-style ripple effect expanding from click point.",
    category: "Hover Effects",
    technologies: ["framer-motion", "react"],
    difficulty: "beginner",
    video: `${R2_BASE_URL}/hover_effect/hover-6.mp4`,

    interactions: ["click"],

    code: {
      react: `export function RippleButton({ children }: { children: ReactNode }) {\n  const [ripples, setRipples] = useState<Ripple[]>([]);\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "duration", label: "Ripple Duration", type: "range", min: 0.3, max: 2, step: 0.1, defaultValue: 0.8 },
    ],
    props: [{ name: "onClick", type: "function", default: "", description: "Click handler" }],
    relatedSlugs: ["magnetic-button", "morph-button"],
  },
  {
    id: "15",
    slug: "morph-button",
    name: "Morph Button",
    description: "Button shape smoothly morphs on interaction.",
    category: "Hover Effects",
    technologies: ["framer-motion", "react"],
    difficulty: "intermediate",
    video: `${R2_BASE_URL}/hover_effect/hover-7.mp4`,

    interactions: ["hover", "click"],

    code: {
      react: `import { motion } from "framer-motion";\n\nexport function MorphButton({ children }: { children: ReactNode }) {\n  return (\n    <motion.button\n      whileHover={{ borderRadius: "24px", scale: 1.05 }}\n      transition={{ type: "spring", stiffness: 300 }}\n    >\n      {children}\n    </motion.button>\n  );\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "scale", label: "Hover Scale", type: "range", min: 1, max: 1.3, step: 0.05, defaultValue: 1.05 },
    ],
    props: [{ name: "children", type: "ReactNode", default: "", description: "Button content" }],
    relatedSlugs: ["magnetic-button", "liquid-button"],
  },

  // CARDS (7)
  {
    id: "16",
    slug: "tilt-card",
    name: "3D Tilt Card",
    description: "Card tilts in 3D perspective following cursor for depth effect.",
    category: "Hover Effects",
    technologies: ["framer-motion", "react", "typescript"],
    difficulty: "intermediate",
    video: `${R2_BASE_URL}/hover_effect/hover-8.mp4`,

    interactions: ["hover", "mouse"],
    featured: true,

    code: {
      react: `import { motion, useMotionValue, useTransform } from "framer-motion";\n\nexport function TiltCard({ children }: { children: ReactNode }) {\n  const x = useMotionValue(0);\n  const y = useMotionValue(0);\n  const rotateX = useTransform(y, [-100, 100], [30, -30]);\n  const rotateY = useTransform(x, [-100, 100], [-30, 30]);\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "maxTilt", label: "Max Tilt Angle", type: "range", min: 5, max: 45, step: 5, defaultValue: 20 },
      { name: "perspective", label: "Perspective", type: "range", min: 500, max: 2000, step: 100, defaultValue: 1000 },
    ],
    props: [
      { name: "children", type: "ReactNode", default: "", description: "Card content" },
      { name: "maxTilt", type: "number", default: "20", description: "Maximum tilt angle" },
    ],
    relatedSlugs: ["parallax-card", "hover-lift"],
  },
  {
    id: "17",
    slug: "spotlight-card",
    name: "Spotlight Card",
    description: "Spotlight effect follows cursor across card surface.",
    category: "Hover Effects",
    technologies: ["react", "css"],
    difficulty: "advanced",
    video: `${R2_BASE_URL}/hover_effect/hover-9.mp4`,

    interactions: ["mouse"],
    featured: true,

    code: {
      react: `export function SpotlightCard({ children }: { children: ReactNode }) {\n  const [position, setPosition] = useState({ x: 0, y: 0 });\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "spotlightSize", label: "Spotlight Size", type: "range", min: 100, max: 500, step: 50, defaultValue: 200 },
    ],
    props: [{ name: "children", type: "ReactNode", default: "", description: "Content" }],
    relatedSlugs: ["tilt-card", "glow-button"],
  },
  {
    id: "18",
    slug: "hover-lift",
    name: "Hover Lift Card",
    description: "Card smoothly lifts with shadow on hover.",
    category: "Hover Effects",
    technologies: ["framer-motion", "react"],
    difficulty: "beginner",
    video: `${R2_BASE_URL}/hover_effect/hover-10.mp4`,

    interactions: ["hover"],

    code: {
      react: `import { motion } from "framer-motion";\n\nexport function HoverLiftCard({ children }: { children: ReactNode }) {\n  return (\n    <motion.div\n      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}\n      transition={{ type: "spring", stiffness: 300 }}\n    >\n      {children}\n    </motion.div>\n  );\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "liftDistance", label: "Lift Distance", type: "range", min: 2, max: 20, step: 2, defaultValue: 8 },
    ],
    props: [{ name: "children", type: "ReactNode", default: "", description: "Card content" }],
    relatedSlugs: ["tilt-card", "magnetic-card"],
  },
  {
    id: "19",
    slug: "parallax-card",
    name: "Parallax Card",
    description: "Multi-layer parallax effect within card following mouse.",
    category: "Hover Effects",
    technologies: ["framer-motion", "react"],
    difficulty: "advanced",
    video: `${R2_BASE_URL}/hover_effect/hover-11.mp4`,

    interactions: ["mouse"],

    code: {
      react: `export function ParallaxCard({ children, layers }: Props) {\n  const { x, y } = useMousePosition();\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "depth", label: "Parallax Depth", type: "range", min: 0.1, max: 1, step: 0.1, defaultValue: 0.5 },
    ],
    props: [{ name: "layers", type: "ReactNode[]", default: "[]", description: "Parallax layers" }],
    relatedSlugs: ["tilt-card", "spotlight-card"],
  },
  {
    id: "20",
    slug: "glass-card",
    name: "Glass Card",
    description: "Frosted glass effect with blur and transparency.",
    category: "Hover Effects",
    technologies: ["css", "tailwind"],
    difficulty: "beginner",
    video: `${R2_BASE_URL}/hover_effect/hover-12.mp4`,

    interactions: ["hover"],

    code: {
      react: `export function GlassCard({ children }: { children: ReactNode }) {\n  return (\n    <div className="backdrop-blur-xl bg-white/10 border border-white/20">\n      {children}\n    </div>\n  );\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "blur", label: "Blur Amount", type: "range", min: 0, max: 20, step: 2, defaultValue: 12 },
    ],
    props: [{ name: "children", type: "ReactNode", default: "", description: "Content" }],
    relatedSlugs: ["spotlight-card", "hover-lift"],
  },
  {
    id: "21",
    slug: "magnetic-card",
    name: "Magnetic Card",
    description: "Entire card follows cursor with magnetic attraction.",
    category: "Hover Effects",
    technologies: ["framer-motion", "react"],
    difficulty: "intermediate",
    video: `${R2_BASE_URL}/hover_effect/hover-13.mp4`,

    interactions: ["mouse"],
    isNew: true,

    code: {
      react: `export function MagneticCard({ children }: { children: ReactNode }) {\n  const x = useMotionValue(0);\n  const y = useMotionValue(0);\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "strength", label: "Pull Strength", type: "range", min: 0.1, max: 1, step: 0.1, defaultValue: 0.3 },
    ],
    props: [{ name: "children", type: "ReactNode", default: "", description: "Card content" }],
    relatedSlugs: ["magnetic-button", "tilt-card"],
  },
  {
    id: "22",
    slug: "expandable-card",
    name: "Expandable Card",
    description: "Card expands smoothly to reveal hidden content with layout animation.",
    category: "Hover Effects",
    technologies: ["framer-motion", "react"],
    difficulty: "intermediate",
    interactions: ["click"],

    code: {
      react: `import { motion, AnimatePresence } from "framer-motion";\n\nexport function ExpandableCard({ title, children }: Props) {\n  const [isExpanded, setIsExpanded] = useState(false);\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "duration", label: "Animation Duration", type: "range", min: 0.2, max: 1, step: 0.1, defaultValue: 0.3 },
    ],
    props: [{ name: "title", type: "string", default: "", description: "Card title" }],
    relatedSlugs: ["hover-lift", "parallax-card"],
  },

  // NAVIGATION (6)
  {
    id: "23",
    slug: "magnetic-navbar",
    name: "Magnetic Navbar",
    description: "Navigation items with magnetic hover effect.",
    category: "Navigation Menus",
    technologies: ["framer-motion", "react"],
    difficulty: "intermediate",
    video: `${R2_BASE_URL}/navigation_menu/menu-1.mp4`,

    interactions: ["hover", "mouse"],

    code: {
      react: `export function MagneticNavbar({ items }: { items: NavItem[] }) {\n  return (\n    <nav>\n      {items.map(item => (\n        <MagneticLink key={item.href} href={item.href}>\n          {item.label}\n        </MagneticLink>\n      ))}\n    </nav>\n  );\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "strength", label: "Magnetic Strength", type: "range", min: 0.1, max: 1, step: 0.1, defaultValue: 0.4 },
    ],
    props: [{ name: "items", type: "NavItem[]", default: "[]", description: "Nav items" }],
    relatedSlugs: ["floating-dock", "animated-tabs"],
  },
  {
    id: "24",
    slug: "floating-dock",
    name: "Floating Dock",
    description: "macOS-style animated dock with icon magnification.",
    category: "Navigation Menus",
    technologies: ["framer-motion", "react"],
    difficulty: "advanced",
    video: `${R2_BASE_URL}/navigation_menu/menu-2.mp4`,

    interactions: ["hover", "mouse"],
    featured: true,

    code: {
      react: `export function FloatingDock({ items }: { items: DockItem[] }) {\n  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "magnification", label: "Icon Magnification", type: "range", min: 1, max: 2, step: 0.1, defaultValue: 1.5 },
      { name: "iconSize", label: "Base Icon Size", type: "range", min: 30, max: 70, step: 5, defaultValue: 50 },
    ],
    props: [{ name: "items", type: "DockItem[]", default: "[]", description: "Dock items" }],
    relatedSlugs: ["magnetic-navbar", "sliding-menu"],
  },
  {
    id: "25",
    slug: "animated-tabs",
    name: "Animated Tabs",
    description: "Tab navigation with smooth sliding indicator.",
    category: "Navigation Menus",
    technologies: ["framer-motion", "react"],
    difficulty: "beginner",
    video: `${R2_BASE_URL}/navigation_menu/menu-3.mp4`,

    interactions: ["click"],

    code: {
      react: `import { motion } from "framer-motion";\n\nexport function AnimatedTabs({ tabs }: { tabs: Tab[] }) {\n  const [activeTab, setActiveTab] = useState(0);\n  return (\n    <div>\n      {tabs.map((tab, i) => (\n        <button key={i} onClick={() => setActiveTab(i)}>\n          {tab.label}\n          {i === activeTab && (\n            <motion.div layoutId="indicator" className="tab-indicator" />\n          )}\n        </button>\n      ))}\n    </div>\n  );\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "springStiffness", label: "Spring Stiffness", type: "range", min: 100, max: 500, step: 50, defaultValue: 300 },
    ],
    props: [{ name: "tabs", type: "Tab[]", default: "[]", description: "Tab items" }],
    relatedSlugs: ["morphing-menu", "magnetic-navbar"],
  },
  {
    id: "26",
    slug: "sliding-menu",
    name: "Sliding Menu",
    description: "Full-screen sliding navigation panel.",
    category: "Navigation Menus",
    technologies: ["framer-motion", "react"],
    difficulty: "intermediate",
    video: `${R2_BASE_URL}/navigation_menu/menu-4.mp4`,

    interactions: ["click"],

    code: {
      react: `import { motion, AnimatePresence } from "framer-motion";\n\nexport function SlidingMenu({ isOpen, onClose }: Props) {\n  return (\n    <AnimatePresence>\n      {isOpen && (\n        <motion.div\n          initial={{ x: "100%" }}\n          animate={{ x: 0 }}\n          exit={{ x: "100%" }}\n        >\n          {/* Menu content */}\n        </motion.div>\n      )}\n    </AnimatePresence>\n  );\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "duration", label: "Slide Duration", type: "range", min: 0.2, max: 1, step: 0.1, defaultValue: 0.4 },
    ],
    props: [{ name: "isOpen", type: "boolean", default: "false", description: "Menu open state" }],
    relatedSlugs: ["morphing-menu", "animated-tabs"],
  },
  {
    id: "27",
    slug: "morphing-menu",
    name: "Morphing Menu",
    description: "Hamburger icon morphs smoothly to close icon.",
    category: "Navigation Menus",
    technologies: ["framer-motion", "react", "svg"],
    difficulty: "intermediate",
    video: `${R2_BASE_URL}/navigation_menu/menu-5.mp4`,

    interactions: ["click"],

    code: {
      react: `import { motion } from "framer-motion";\n\nexport function MorphingMenu({ isOpen, onClick }: Props) {\n  return (\n    <button onClick={onClick}>\n      <svg viewBox="0 0 24 24">\n        <motion.path\n          animate={isOpen ? { d: "..." } : { d: "..." }}\n        />\n      </svg>\n    </button>\n  );\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "strokeWidth", label: "Stroke Width", type: "range", min: 1, max: 4, step: 0.5, defaultValue: 2 },
    ],
    props: [{ name: "isOpen", type: "boolean", default: "false", description: "Open state" }],
    relatedSlugs: ["sliding-menu", "animated-tabs"],
  },
  {
    id: "28",
    slug: "command-menu",
    name: "Command Menu",
    description: "CMD+K command palette with search and keyboard navigation.",
    category: "Navigation Menus",
    technologies: ["react", "typescript"],
    difficulty: "advanced",
    interactions: ["click"],
    isNew: true,

    code: {
      react: `export function CommandMenu({ isOpen, onClose }: Props) {\n  const [query, setQuery] = useState("");\n  const [selected, setSelected] = useState(0);\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "maxResults", label: "Max Results", type: "range", min: 3, max: 10, step: 1, defaultValue: 5 },
    ],
    props: [{ name: "commands", type: "Command[]", default: "[]", description: "Available commands" }],
    relatedSlugs: ["sliding-menu", "animated-tabs"],
  },

  // BACKGROUNDS (7)
  {
    id: "29",
    slug: "aurora-bg",
    name: "Aurora Background",
    description: "Northern lights flowing gradient background.",
    category: "Background Animations",
    technologies: ["css", "react"],
    difficulty: "intermediate",
    video: `${R2_BASE_URL}/grid_animations/grid-1.mp4`,

    interactions: ["scroll"],
    featured: true,

    code: {
      react: `export function AuroraBackground() {\n  return (\n    <div className="aurora-container">\n      <div className="aurora-layer aurora-1" />\n      <div className="aurora-layer aurora-2" />\n      <div className="aurora-layer aurora-3" />\n    </div>\n  );\n}\n// ... (unlock for full source)`,
      css: `.aurora-layer {\n  background: linear-gradient(...);\n  animation: aurora 15s ease-in-out infinite;\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "speed", label: "Animation Speed", type: "range", min: 5, max: 30, step: 5, defaultValue: 15 },
    ],
    props: [{ name: "colors", type: "string[]", default: "[]", description: "Aurora colors" }],
    relatedSlugs: ["waves-bg", "dot-field"],
  },
  {
    id: "30",
    slug: "noise-bg",
    name: "Noise Background",
    description: "Animated grain/noise texture background.",
    category: "Background Animations",
    technologies: ["css", "svg"],
    difficulty: "beginner",
    video: `${R2_BASE_URL}/grid_animations/grid-2.mp4`,

    interactions: ["hover"],

    code: {
      react: `export function NoiseBackground() {\n  return (\n    <div className="noise-bg">\n      <svg><filter id="noise">...</filter></svg>\n    </div>\n  );\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "opacity", label: "Noise Opacity", type: "range", min: 0.01, max: 0.2, step: 0.01, defaultValue: 0.05 },
    ],
    props: [{ name: "opacity", type: "number", default: "0.05", description: "Noise opacity" }],
    relatedSlugs: ["grid-bg", "dot-field"],
  },
  {
    id: "31",
    slug: "grid-bg",
    name: "Grid Background",
    description: "Animated perspective grid background.",
    category: "Background Animations",
    technologies: ["css", "tailwind"],
    difficulty: "beginner",
    video: `${R2_BASE_URL}/grid_animations/grid-3.mp4`,

    interactions: ["scroll"],

    code: {
      react: `export function GridBackground() {\n  return (\n    <div className="grid-background" />\n  );\n}\n// ... (unlock for full source)`,
      css: `.grid-background {\n  background-size: 60px 60px;\n  background-image: linear-gradient(...);\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "gridSize", label: "Grid Size", type: "range", min: 20, max: 100, step: 10, defaultValue: 60 },
    ],
    props: [{ name: "size", type: "number", default: "60", description: "Grid cell size" }],
    relatedSlugs: ["noise-bg", "dot-field"],
  },
  {
    id: "32",
    slug: "particles-bg",
    name: "Particles Background",
    description: "Interactive particle system background.",
    category: "Background Animations",
    technologies: ["react", "typescript"],
    difficulty: "advanced",
    video: `${R2_BASE_URL}/grid_animations/grid-4.mp4`,

    interactions: ["mouse"],
    featured: true,

    code: {
      react: `export function ParticlesBackground({ count = 50 }: Props) {\n  const [particles, setParticles] = useState([]);\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "count", label: "Particle Count", type: "range", min: 20, max: 200, step: 10, defaultValue: 50 },
      { name: "speed", label: "Movement Speed", type: "range", min: 0.1, max: 2, step: 0.1, defaultValue: 0.5 },
    ],
    props: [{ name: "count", type: "number", default: "50", description: "Number of particles" }],
    relatedSlugs: ["dot-field", "aurora-bg"],
  },
  {
    id: "33",
    slug: "spotlight-bg",
    name: "Spotlight Background",
    description: "Cursor-following spotlight effect background.",
    category: "Background Animations",
    technologies: ["react", "css"],
    difficulty: "intermediate",
    video: `${R2_BASE_URL}/grid_animations/grid-5.mp4`,

    interactions: ["mouse"],

    code: {
      react: `export function SpotlightBackground() {\n  const [position, setPosition] = useState({ x: 0, y: 0 });\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "spotlightSize", label: "Spotlight Size", type: "range", min: 200, max: 800, step: 50, defaultValue: 400 },
    ],
    props: [{ name: "size", type: "number", default: "400", description: "Spotlight diameter" }],
    relatedSlugs: ["spotlight-card", "cursor-glow"],
  },
  {
    id: "34",
    slug: "dot-field",
    name: "Dot Field",
    description: "Animated dot matrix background pattern.",
    category: "Background Animations",
    technologies: ["react", "svg"],
    difficulty: "intermediate",
    video: `${R2_BASE_URL}/grid_animations/grid-6.mp4`,

    interactions: ["scroll"],

    code: {
      react: `export function DotField() {\n  return (\n    <svg className="dot-field">\n      {/* Generate dots */}\n    </svg>\n  );\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "density", label: "Dot Density", type: "range", min: 10, max: 50, step: 5, defaultValue: 30 },
    ],
    props: [{ name: "density", type: "number", default: "30", description: "Dots per row/column" }],
    relatedSlugs: ["grid-bg", "particles-bg"],
  },
  {
    id: "35",
    slug: "waves-bg",
    name: "Waves Background",
    description: "Flowing wave animation background.",
    category: "Background Animations",
    technologies: ["svg", "css"],
    difficulty: "intermediate",
    interactions: ["scroll"],

    code: {
      react: `export function WavesBackground() {\n  return (\n    <svg className="waves">\n      <path d="..." className="wave-1" />\n      <path d="..." className="wave-2" />\n    </svg>\n  );\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "amplitude", label: "Wave Amplitude", type: "range", min: 10, max: 50, step: 5, defaultValue: 30 },
    ],
    props: [{ name: "amplitude", type: "number", default: "30", description: "Wave height" }],
    relatedSlugs: ["aurora-bg", "particles-bg"],
  },

  // CURSOR (4)
  {
    id: "36",
    slug: "magnetic-cursor",
    name: "Magnetic Cursor",
    description: "Custom cursor that magnetically snaps to interactive elements.",
    category: "Mouse Effects",
    technologies: ["framer-motion", "react"],
    difficulty: "advanced",
    video: `${R2_BASE_URL}/mouse_effects/mouse-1.mp4`,

    interactions: ["mouse"],

    code: {
      react: `export function MagneticCursor() {\n  const [position, setPosition] = useState({ x: 0, y: 0 });\n  const [hovered, setHovered] = useState(false);\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "snapRadius", label: "Snap Radius", type: "range", min: 20, max: 100, step: 10, defaultValue: 50 },
    ],
    props: [{ name: "snapRadius", type: "number", default: "50", description: "Magnetic snap distance" }],
    relatedSlugs: ["cursor-trail", "cursor-glow"],
  },
  {
    id: "37",
    slug: "cursor-trail",
    name: "Cursor Trail",
    description: "Trailing particles following cursor movement.",
    category: "Mouse Effects",
    technologies: ["framer-motion", "react"],
    difficulty: "intermediate",
    video: `${R2_BASE_URL}/mouse_effects/mouse-2.mp4`,

    interactions: ["mouse"],
    isNew: true,

    code: {
      react: `export function CursorTrail() {\n  const [trail, setTrail] = useState<Point[]>([]);\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "trailLength", label: "Trail Length", type: "range", min: 5, max: 30, step: 5, defaultValue: 15 },
      { name: "fadeSpeed", label: "Fade Speed", type: "range", min: 0.05, max: 0.3, step: 0.05, defaultValue: 0.15 },
    ],
    props: [{ name: "trailLength", type: "number", default: "15", description: "Number of trail particles" }],
    relatedSlugs: ["magnetic-cursor", "particles-bg"],
  },
  {
    id: "38",
    slug: "cursor-glow",
    name: "Cursor Glow",
    description: "Radial glow effect following mouse position.",
    category: "Mouse Effects",
    technologies: ["react", "css"],
    difficulty: "beginner",
    video: `${R2_BASE_URL}/mouse_effects/mouse-3.mp4`,

    interactions: ["mouse"],

    code: {
      react: `export function CursorGlow() {\n  const [position, setPosition] = useState({ x: 0, y: 0 });\n  return (\n    <div\n      className="cursor-glow"\n      style={{ left: position.x, top: position.y }}\n    />\n  );\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "glowSize", label: "Glow Size", type: "range", min: 100, max: 500, step: 50, defaultValue: 300 },
    ],
    props: [{ name: "size", type: "number", default: "300", description: "Glow diameter" }],
    relatedSlugs: ["spotlight-bg", "cursor-trail"],
  },
  {
    id: "39",
    slug: "cursor-spotlight",
    name: "Cursor Spotlight",
    description: "Spotlight reveal effect following cursor.",
    category: "Mouse Effects",
    technologies: ["react", "css"],
    difficulty: "intermediate",
    video: `${R2_BASE_URL}/mouse_effects/mouse-4.mp4`,

    interactions: ["mouse"],

    code: {
      react: `export function CursorSpotlight() {\n  const [position, setPosition] = useState({ x: 0, y: 0 });\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "revealRadius", label: "Reveal Radius", type: "range", min: 100, max: 400, step: 50, defaultValue: 200 },
    ],
    props: [{ name: "revealRadius", type: "number", default: "200", description: "Spotlight size" }],
    relatedSlugs: ["cursor-glow", "spotlight-bg"],
  },

  // SCROLL (6)
  {
    id: "40",
    slug: "parallax-section",
    name: "Parallax Section",
    description: "Multi-speed parallax layers driven by scroll.",
    category: "Scroll Animations",
    technologies: ["framer-motion", "react"],
    difficulty: "intermediate",
    video: `${R2_BASE_URL}/scroll_animations/scroll-1.mp4`,

    interactions: ["scroll"],
    featured: true,

    code: {
      react: `import { useScroll, useTransform, motion } from "framer-motion";\n\nexport function ParallaxSection({ layers }: { layers: Layer[] }) {\n  const { scrollYProgress } = useScroll();\n  return (\n    <>\n      {layers.map((layer, i) => {\n        const y = useTransform(\n          scrollYProgress,\n          [0, 1],\n          [0, layer.speed * 100]\n        );\n        return <motion.div key={i} style={{ y }}>{layer.content}</motion.div>;\n      })}\n    </>\n  );\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "speed", label: "Parallax Speed", type: "range", min: 0.1, max: 2, step: 0.1, defaultValue: 0.5 },
    ],
    props: [{ name: "layers", type: "Layer[]", default: "[]", description: "Parallax layers" }],
    relatedSlugs: ["text-parallax", "reveal-on-scroll"],
  },
  {
    id: "41",
    slug: "horizontal-scroll",
    name: "Horizontal Scroll",
    description: "Horizontal scroll-linked section.",
    category: "Scroll Animations",
    technologies: ["framer-motion", "react"],
    difficulty: "advanced",
    video: `${R2_BASE_URL}/scroll_animations/scroll-2.mp4`,

    interactions: ["scroll"],

    code: {
      react: `import { useScroll, useTransform, motion } from "framer-motion";\n\nexport function HorizontalScroll({ children }: Props) {\n  const targetRef = useRef(null);\n  const { scrollYProgress } = useScroll({ target: targetRef });\n  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "itemCount", label: "Item Count", type: "range", min: 2, max: 10, step: 1, defaultValue: 4 },
    ],
    props: [{ name: "children", type: "ReactNode", default: "", description: "Scroll content" }],
    relatedSlugs: ["parallax-section", "sticky-reveal"],
  },
  {
    id: "42",
    slug: "reveal-on-scroll",
    name: "Reveal on Scroll",
    description: "Elements reveal as they enter viewport.",
    category: "Scroll Animations",
    technologies: ["framer-motion", "react"],
    difficulty: "beginner",
    video: `${R2_BASE_URL}/scroll_animations/scroll-3.mp4`,

    interactions: ["scroll"],

    code: {
      react: `import { motion, useInView } from "framer-motion";\n\nexport function RevealOnScroll({ children }: Props) {\n  const ref = useRef(null);\n  const isInView = useInView(ref, { once: true });\n  return (\n    <motion.div\n      ref={ref}\n      initial={{ opacity: 0, y: 50 }}\n      animate={isInView ? { opacity: 1, y: 0 } : {}}\n    >\n      {children}\n    </motion.div>\n  );\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "distance", label: "Reveal Distance", type: "range", min: 10, max: 100, step: 10, defaultValue: 50 },
    ],
    props: [{ name: "children", type: "ReactNode", default: "", description: "Content to reveal" }],
    relatedSlugs: ["parallax-section", "text-reveal"],
  },
  {
    id: "43",
    slug: "sticky-reveal",
    name: "Sticky Story",
    description: "Sticky section with scrolling content reveals.",
    category: "Scroll Animations",
    technologies: ["framer-motion", "react"],
    difficulty: "advanced",
    video: `${R2_BASE_URL}/scroll_animations/scroll-4.mp4`,

    interactions: ["scroll"],

    code: {
      react: `export function StickyReveal({ sections }: { sections: Section[] }) {\n  const { scrollYProgress } = useScroll();\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "sectionCount", label: "Section Count", type: "range", min: 2, max: 6, step: 1, defaultValue: 3 },
    ],
    props: [{ name: "sections", type: "Section[]", default: "[]", description: "Sticky sections" }],
    relatedSlugs: ["horizontal-scroll", "parallax-section"],
  },
  {
    id: "44",
    slug: "image-mask",
    name: "Image Mask Reveal",
    description: "Image revealed through animated mask on scroll.",
    category: "Scroll Animations",
    technologies: ["framer-motion", "react"],
    difficulty: "intermediate",
    video: `${R2_BASE_URL}/scroll_animations/scroll-5.mp4`,

    interactions: ["scroll"],

    code: {
      react: `import { useScroll, useTransform, motion } from "framer-motion";\n\nexport function ImageMaskReveal({ src }: { src: string }) {\n  const { scrollYProgress } = useScroll();\n  const clipPath = useTransform(\n    scrollYProgress,\n    [0, 1],\n    ["inset(50% 50%)", "inset(0% 0%)"]\n  );\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "maskType", label: "Mask Type", type: "select", defaultValue: "circle", options: [{ label: "Circle", value: "circle" }, { label: "Rectangle", value: "rect" }] },
    ],
    props: [{ name: "src", type: "string", default: "", description: "Image source" }],
    relatedSlugs: ["reveal-on-scroll", "parallax-section"],
  },
  {
    id: "45",
    slug: "text-parallax",
    name: "Text Parallax",
    description: "Large text with scroll-driven parallax effect.",
    category: "Scroll Animations",
    technologies: ["framer-motion", "react"],
    difficulty: "intermediate",
    interactions: ["scroll"],

    code: {
      react: `import { useScroll, useTransform, motion } from "framer-motion";\n\nexport function TextParallax({ text }: { text: string }) {\n  const { scrollYProgress } = useScroll();\n  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);\n  return <motion.h2 style={{ y }}>{text}</motion.h2>;\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "distance", label: "Parallax Distance", type: "range", min: 50, max: 500, step: 50, defaultValue: 200 },
    ],
    props: [{ name: "text", type: "string", default: "", description: "Text content" }],
    relatedSlugs: ["parallax-section", "text-reveal"],
  },

  // CREATIVE (7)
  {
    id: "46",
    slug: "gooey-effect",
    name: "Gooey Effect",
    description: "SVG filter creates gooey blob merging effect.",
    category: "SVG Animations",
    technologies: ["svg", "react"],
    difficulty: "advanced",
    video: `${R2_BASE_URL}/webgl_shaders/webgl-1.mp4`,

    interactions: ["hover"],

    code: {
      react: `export function GooeyEffect({ children }: Props) {\n  return (\n    <>\n      <svg style={{ position: "absolute" }}>\n        <defs>\n          <filter id="gooey">\n            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />\n            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10" />\n          </filter>\n        </defs>\n      </svg>\n      <div style={{ filter: "url(#gooey)" }}>{children}</div>\n    </>\n  );\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "blur", label: "Blur Amount", type: "range", min: 5, max: 20, step: 1, defaultValue: 10 },
    ],
    props: [{ name: "children", type: "ReactNode", default: "", description: "Content" }],
    relatedSlugs: ["liquid-morph", "elastic-effect"],
  },
  {
    id: "47",
    slug: "image-distortion",
    name: "Image Distortion",
    description: "Hover-driven image distortion effect.",
    category: "SVG Animations",
    technologies: ["react", "typescript"],
    difficulty: "advanced",
    video: `${R2_BASE_URL}/webgl_shaders/webgl-2.mp4`,

    interactions: ["hover", "mouse"],

    code: {
      react: `export function ImageDistortion({ src }: { src: string }) {\n  const [distortion, setDistortion] = useState({ x: 0, y: 0 });\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "intensity", label: "Distortion Intensity", type: "range", min: 0, max: 50, step: 5, defaultValue: 20 },
    ],
    props: [{ name: "src", type: "string", default: "", description: "Image URL" }],
    relatedSlugs: ["noise-distortion", "liquid-morph"],
  },
  {
    id: "48",
    slug: "liquid-morph",
    name: "Liquid Morph",
    description: "Smooth liquid morphing shapes with blob animations.",
    category: "SVG Animations",
    technologies: ["svg", "framer-motion"],
    difficulty: "advanced",
    video: `${R2_BASE_URL}/webgl_shaders/webgl-3.mp4`,

    interactions: ["hover"],
    isNew: true,

    code: {
      react: `import { motion } from "framer-motion";\n\nexport function LiquidMorph() {\n  return (\n    <svg viewBox="0 0 200 200">\n      <motion.path\n        d="M..."\n        animate={{ d: ["M...", "M...", "M..."] }}\n        transition={{ duration: 3, repeat: Infinity }}\n      />\n    </svg>\n  );\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "morphSpeed", label: "Morph Speed", type: "range", min: 1, max: 10, step: 1, defaultValue: 3 },
    ],
    props: [{ name: "shapes", type: "string[]", default: "[]", description: "SVG path data" }],
    relatedSlugs: ["svg-morph", "gooey-effect"],
  },
  {
    id: "49",
    slug: "svg-morph",
    name: "SVG Morph",
    description: "SVG path morphing between different shapes.",
    category: "SVG Animations",
    technologies: ["svg", "framer-motion"],
    difficulty: "advanced",
    video: `${R2_BASE_URL}/webgl_shaders/webgl-4.mp4`,

    interactions: ["click"],

    code: {
      react: `import { motion } from "framer-motion";\n\nexport function SVGMorph({ paths }: { paths: string[] }) {\n  const [index, setIndex] = useState(0);\n  return (\n    <svg>\n      <motion.path\n        d={paths[index]}\n        animate={{ d: paths[index] }}\n        onClick={() => setIndex((index + 1) % paths.length)}\n      />\n    </svg>\n  );\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "duration", label: "Morph Duration", type: "range", min: 0.3, max: 2, step: 0.1, defaultValue: 0.8 },
    ],
    props: [{ name: "paths", type: "string[]", default: "[]", description: "SVG paths to morph between" }],
    relatedSlugs: ["liquid-morph", "shape-transition"],
  },
  {
    id: "50",
    slug: "elastic-effect",
    name: "Elastic Effect",
    description: "Elastic stretching interactions with spring physics.",
    category: "SVG Animations",
    technologies: ["framer-motion", "react"],
    difficulty: "intermediate",
    video: `${R2_BASE_URL}/webgl_shaders/webgl-5.mp4`,

    interactions: ["drag"],

    code: {
      react: `import { motion } from "framer-motion";\n\nexport function ElasticEffect({ children }: Props) {\n  return (\n    <motion.div\n      drag\n      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}\n      dragElastic={0.7}\n      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}\n    >\n      {children}\n    </motion.div>\n  );\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "elasticity", label: "Elasticity", type: "range", min: 0.1, max: 1, step: 0.1, defaultValue: 0.7 },
    ],
    props: [{ name: "children", type: "ReactNode", default: "", description: "Content" }],
    relatedSlugs: ["liquid-morph", "gooey-effect"],
  },
  {
    id: "51",
    slug: "shape-transition",
    name: "Shape Transition",
    description: "Geometric shape transitions with smooth morphing.",
    category: "SVG Animations",
    technologies: ["framer-motion", "react"],
    difficulty: "intermediate",
    video: `${R2_BASE_URL}/webgl_shaders/webgl-6.mp4`,

    interactions: ["hover"],

    code: {
      react: `import { motion } from "framer-motion";\n\nexport function ShapeTransition() {\n  const [shape, setShape] = useState("circle");\n  return (\n    <motion.div\n      animate={{\n        borderRadius: shape === "circle" ? "50%" : "0%",\n        rotate: shape === "circle" ? 0 : 45,\n      }}\n    />\n  );\n}\n// ... (unlock for full source)`,
    },
    controls: [
      { name: "duration", label: "Transition Duration", type: "range", min: 0.2, max: 2, step: 0.1, defaultValue: 0.6 },
    ],
    props: [{ name: "shapes", type: "Shape[]", default: "[]", description: "Shape definitions" }],
    relatedSlugs: ["svg-morph", "liquid-morph"],
  },
  {
    id: "52",
    slug: "noise-distortion",
    name: "Noise Distortion",
    description: "Perlin noise-driven distortion effect.",
    category: "SVG Animations",
    technologies: ["react", "typescript"],
    difficulty: "advanced",
    video: `${R2_BASE_URL}/webgl_shaders/webgl-7.mp4`,

    interactions: ["hover"],

    code: {
      react: `export function NoiseDistortion({ children }: Props) {\n  const [offset, setOffset] = useState({ x: 0, y: 0 });\n  // Perlin noise implementation\n  // ... (unlock for full source)`,
    },
    controls: [
      { name: "frequency", label: "Noise Frequency", type: "range", min: 0.01, max: 0.1, step: 0.01, defaultValue: 0.05 },
      { name: "amplitude", label: "Distortion Amplitude", type: "range", min: 0, max: 50, step: 5, defaultValue: 20 },
    ],
    props: [{ name: "children", type: "ReactNode", default: "", description: "Content to distort" }],
    relatedSlugs: ["image-distortion", "liquid-morph"],
  },
];

export function getComponentBySlug(slug: string): AnimationComponent | undefined {
  return animations.find((a) => a.slug === slug);
}

export function getComponentsByCategory(category: string): AnimationComponent[] {
  return animations.filter((a) => a.category === category);
}

export function getFeaturedComponents(): AnimationComponent[] {
  return animations.filter((a) => a.featured);
}

export function searchComponents(query: string): AnimationComponent[] {
  const q = query.toLowerCase();
  return animations.filter(
    (a) =>
      a.name.toLowerCase().includes(q) ||
      a.category.includes(q) ||
      a.technologies.some((t) => t.includes(q)) ||
      a.description.toLowerCase().includes(q)
  );
}
