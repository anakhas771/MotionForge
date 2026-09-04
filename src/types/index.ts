export type Difficulty = "beginner" | "intermediate" | "advanced";

export type Category =
  | "All Components"
  | "Scroll Animations"
  | "Mouse Effects"
  | "Page Transitions"
  | "Grid Animations"
  | "Sliders"
  | "Hero Animations"
  | "WebGL Shaders"
  | "Background Animations"
  | "Navigation Menus"
  | "Hover Effects"
  | "Text Animations"
  | "3D Animations"
  | "Physics Effects"
  | "SVG Animations";

export type Technology =
  | "framer-motion"
  | "gsap"
  | "anime.js"
  | "css"
  | "svg"
  | "react"
  | "typescript"
  | "tailwind";

export type InteractionType = "hover" | "scroll" | "click" | "drag" | "mouse";

export interface ControlDefinition {
  name: string;
  label: string;
  type: "range" | "toggle" | "select" | "color";
  min?: number;
  max?: number;
  step?: number;
  defaultValue: number | boolean | string;
  options?: { label: string; value: string }[];
}

export interface AnimationComponent {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: Category;
  technologies: Technology[];
  difficulty: Difficulty;
  interactions: InteractionType[];
  video?: string;
  previewVideo?: string;
  thumbnail?: string;
  featured?: boolean;
  isNew?: boolean;
  downloadUrl?: string;
  hasDownload?: boolean;
  code?: {
    react?: string;
    typescript?: string;
    css?: string;
    tailwind?: string;
  };
  controls?: ControlDefinition[];
  props?: { name: string; type: string; default: string; description: string }[];
  browserSupport?: string[];
  performance?: string;
  relatedSlugs?: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  hasAccess: boolean;
  purchasedAt?: string;
}

export interface CheckoutSession {
  id: string;
  email: string;
  amount: number;
  currency: string;
  status: "pending" | "completed" | "failed";
  createdAt: string;
}

export interface SearchResult {
  component: AnimationComponent;
  matchField: string;
  score: number;
}

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, unknown>;
  timestamp?: number;
}
