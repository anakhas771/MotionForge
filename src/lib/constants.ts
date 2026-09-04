export const SITE_NAME = "MotionForge";
export const SITE_DESCRIPTION = "A premium collection of production-ready React animations and interactive UI components.";
export const SITE_URL = "https://motionforge.dev";
export const PRICE = 300;
export const CURRENCY = "INR";
export const CURRENCY_SYMBOL = "₹";

export const NAV_ITEMS = [
  { label: "Library", href: "/library" },
  { label: "About", href: "/about" },
] as const;

export const CATEGORIES = [
  { value: "text", label: "Text", icon: "Type" },
  { value: "buttons", label: "Buttons", icon: "MousePointerClick" },
  { value: "cards", label: "Cards", icon: "LayoutGrid" },
  { value: "navigation", label: "Navigation", icon: "Navigation" },
  { value: "backgrounds", label: "Backgrounds", icon: "Layers" },
  { value: "cursor", label: "Cursor", icon: "MousePointer2" },
  { value: "scroll", label: "Scroll", icon: "ScrollText" },
  { value: "creative", label: "Creative", icon: "Sparkles" },
] as const;

export const TECHNOLOGIES = [
  { value: "framer-motion", label: "Framer Motion" },
  { value: "gsap", label: "GSAP" },
  { value: "anime.js", label: "Anime.js" },
  { value: "css", label: "CSS" },
  { value: "svg", label: "SVG" },
] as const;

export const DIFFICULTIES = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
] as const;
