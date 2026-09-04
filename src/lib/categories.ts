import type { Category } from "@/types";

// Map old category system to new PRO-Level categories
export const CATEGORY_MAP: Record<string, Category> = {
  text: "Text Animations",
  buttons: "Hover Effects",
  cards: "Hover Effects",
  navigation: "Navigation Menus",
  backgrounds: "Background Animations",
  cursor: "Mouse Effects",
  scroll: "Scroll Animations",
  creative: "SVG Animations",
};

export const PRO_CATEGORIES: Category[] = [
  "All Components",
  "Scroll Animations",
  "Mouse Effects",
  "Page Transitions",
  "Grid Animations",
  "Sliders",
  "Hero Animations",
  "WebGL Shaders",
  "Background Animations",
  "Navigation Menus",
  "Hover Effects",
  "Text Animations",
  "3D Animations",
  "Physics Effects",
  "SVG Animations",
];

export function normalizeCategory(oldCategory: string): Category {
  if (PRO_CATEGORIES.includes(oldCategory as Category)) {
    return oldCategory as Category;
  }
  return CATEGORY_MAP[oldCategory] || "Hover Effects";
}

export type { Category };
