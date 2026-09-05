"use server";

import { animations, R2_BASE_URL } from "@/data/animations";
import { AnimationComponent, Category } from "@/types";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ];
  }

  return shuffled;
}

const categoryFolders: Record<string, string> = {
  "Background Animations": "background_animations",
  "Grid Animations": "grid_animations",
  "Hero Animations": "hero_animations",
  "Hover Effects": "hover_effect",
  "Mouse Effects": "mouse_effects",
  "Navigation Menus": "navigation_menu",
  "Page Transitions": "page_transition",
  "Scroll Animations": "scroll_animations",
  Sliders: "sliders",
  "Text Animations": "text_animations",
  "WebGL Shaders": "webgl_shaders",
};

const videoFiles: Record<string, string[]> = {
  background_animations: ["bg-11-650.mp4"],

  grid_animations: [
    "grid-1.mp4",
    "grid-2.mp4",
    "grid-3.mp4",
    "grid-4.mp4",
    "grid-5.mp4",
    "grid-6.mp4",
    "grid-8.mp4",
    "grid-9.mp4",
    "grid-10.mp4",
  ],

  hero_animations: [
    "hero-1 (1).mp4",
    "hero-2.mp4",
    "hero-3.mp4",
    "hero-4.mp4",
    "hero-5.mp4",
    "hero-6.mp4",
    "hero-7.mp4",
    "hero-8.mp4",
    "hero-9.mp4",
    "hero-10.mp4",
    "hero-11.mp4",
    "hero-12.mp4",
    "hero-13.mp4",
    "hero-14.mp4",
    "hero-15.mp4",
    "hero-16.mp4",
    "hero-17.mp4",
    "hero-18.mp4",
    "hero-19.mp4",
    "hero-20.mp4",
    "hero-21.mp4",
    "hero-22.mp4",
    "hero-23.mp4",
    "hero-24.mp4",
    "hero-25.mp4",
    "hero-26.mp4",
  ],

  hover_effect: [
    "hover-1.mp4",
    "hover-2.mp4",
    "hover-3.mp4",
    "hover-4.mp4",
    "hover-5.mp4",
    "hover-6.mp4",
    "hover-7.mp4",
    "hover-8.mp4",
    "hover-9.mp4",
    "hover-10.mp4",
    "hover-11.mp4",
    "hover-12.mp4",
    "hover-13.mp4",
    "hover-15.mp4",
    "hover-16.mp4",
    "hover-17.mp4",
    "hover-18.mp4",
    "hover-19.mp4",
    "hover-20.mp4",
    "hover-21.mp4",
  ],

  mouse_effects: [
    "mouse-1.mp4",
    "mouse-2.mp4",
    "mouse-3.mp4",
    "mouse-4.mp4",
    "mouse-6.mp4",
    "mouse-7.mp4",
    "mouse-8.mp4",
    "mouse-9.mp4",
    "mouse-10.mp4",
    "mouse-11.mp4",
    "mouse-12.mp4",
    "mouse-13.mp4",
    "mouse-14.mp4",
    "mouse-15.mp4",
    "mouse-16.mp4",
    "mouse-17.mp4",
    "mouse-18.mp4",
    "mouse-19-650.mp4",
    "mouse-20.mp4",
    "mouse-21-650.mp4",
    "prev.mp4",
  ],

  navigation_menu: [
    "menu-1.mp4",
    "menu-2.mp4",
    "menu-2-650.mp4",
    "menu-3.mp4",
    "menu-4.mp4",
    "menu-5.mp4",
    "menu-7.mp4",
    "menu-8.mp4",
    "menu-9.mp4",
    "menu-10.mp4",
    "menu-11.mp4",
    "menu-12.mp4",
    "menu-14.mp4",
    "menu-16.mp4",
    "menu-20.mp4",
    "prev (1).mp4",
    "prev (2).mp4",
    "preview (1).mp4",
  ],

  page_transition: [
    "pegetr-1.mp4",
    "pegetr-2.mp4",
    "pegetr-3.mp4",
    "pegetr-4.mp4",
    "pegetr-5.mp4",
    "pegetr-6.mp4",
    "pagetr-7.mp4",
    "pegetr-8.mp4",
    "pegetr-10.mp4",
    "pegetr-12.mp4",
    "pegetr-13-650.mp4",
    "pegetr-14-650.mp4",
    "pegetr-15-650.mp4",
    "preview (2).mp4",
  ],

  scroll_animations: [
    "scroll-1.mp4",
    "scroll-2.mp4",
    "scroll-3.mp4",
    "scroll-4.mp4",
    "scroll-5.mp4",
    "scroll-7.mp4",
    "scroll-8.mp4",
    "scroll-9.mp4",
    "scroll-10.mp4",
    "scroll-11.mp4",
    "scroll-15.mp4",
    "scroll-16.mp4",
    "scroll-17.mp4",
    "scroll-18.mp4",
    "scroll-19.mp4",
  ],

  sliders: [
    "preview (3).mp4",
    "preview (4).mp4",
    "preview (5).mp4",
    "sliders-1-650.mp4",
    "sliders-2.mp4",
    "sliders-2-650.mp4",
    "sliders-2-650 (1).mp4",
    "sliders-3.mp4",
    "sliders-3-650.mp4",
    "sliders-4.mp4",
    "sliders-4-650.mp4",
    "sliders-5-650.mp4",
    "sliders-7.mp4",
    "sliders-9.mp4",
    "sliders-9-650.mp4",
    "sliders-10.mp4",
    "sliders-11.mp4",
    "sliders-12.mp4",
    "sliders-13.mp4",
    "sliders-14.mp4",
    "sliders-18.mp4",
    "sliders-19-650.mp4",
    "sliders-21-650.mp4",
    "sliders-22.mp4",
  ],

  text_animations: [
    "prev.mp4",
    "preview.mp4",
    "text-1.mp4",
    "text-2.mp4",
    "text-3.mp4",
    "text-4.mp4",
    "text-4-650.mp4",
    "text-5.mp4",
    "text-6.mp4",
    "text-7.mp4",
    "text-8.mp4",
    "text-9.mp4",
    "text-12.mp4",
    "text-13.mp4",
    "text-15-650.mp4",
    "text-16-650.mp4",
    "text-17-650.mp4",
    "text-18.mp4",
  ],

  webgl_shaders: [
    "preview (1).mp4",
    "preview (2).mp4",
    "webgl-1.mp4",
    "webgl-2.mp4",
    "webgl-2-650.mp4",
    "webgl-3.mp4",
    "webgl-4.mp4",
    "webgl-5.mp4",
    "webgl-6.mp4",
    "webgl-7.mp4",
    "webgl-8.mp4",
    "webgl-9.mp4",
    "webgl-9-650.mp4",
    "webgl-10.mp4",
    "webgl-11.mp4",
    "webgl-12.mp4",
    "webgl-13.mp4",
    "webgl-17-650.mp4",
    "webgl-18-650.mp4",
  ],
};

/*
 * Only ZIP files that actually exist in R2 should be listed here.
 *
 * Structure:
 * category folder -> ZIP filenames
 */
const downloadFiles: Record<string, string[]> = {
  background_animations: [
    "bg-11-650.zip",
  ],

  grid_animations: [
    "grid-1.zip",
    "grid-2.zip",
    "grid-3.zip",
    "grid-4.zip",
    "grid-5.zip",
    "grid-6.zip",
    "grid-7.zip",
    "grid-8.zip",
    "grid-9.zip",
    "grid-10.zip",
  ],

  hero_animations: [
    "hero-1 (1).zip",
    "hero-2.zip",
    "hero-3.zip",
    "hero-4.zip",
    "hero-5.zip",
    "hero-6.zip",
    "hero-7.zip",
    "hero-8.zip",
    "hero-9.zip",
    "hero-10.zip",
    "hero-11.zip",
    "hero-12.zip",
    "hero-13.zip",
    "hero-14.zip",
    "hero-15.zip",
    "hero-16.zip",
    "hero-17.zip",
    "hero-18.zip",
    "hero-19.zip",
    "hero-20.zip",
    "hero-21.zip",
    "hero-22.zip",
    "hero-23.zip",
    "hero-24.zip",
    "hero-25.zip",
    "hero-26.zip",
  ],

  hover_effect: [
    "hover-.4.zip",
    "hover-1.zip",
    "hover-2.zip",
    "hover-3.zip",
    "hover-5.zip",
    "hover-6.zip",
    "hover-7.zip",
    "hover-8.zip",
    "hover-9.zip",
    "hover-10.zip",
    "hover-11.zip",
    "hover-12.zip",
    "hover-13.zip",
    "hover-15.zip",
    "hover-16.zip",
    "hover-17.zip",
    "hover-18.zip",
    "hover-19.zip",
    "hover-20.zip",
    "hover-21.zip",
  ],

  mouse_effects: [
    "mouse-1.zip",
    "mouse-2.zip",
    "mouse-3.zip",
    "mouse-4.zip",
  ],

  navigation_menu: [
    "menu-1.zip",
    "menu-2.zip",
    "menu-3.zip",
    "menu-4.zip",
    "menu-5.zip",
  ],

  page_transition: [
    "pegetr-1.zip",
    "pegetr-2.zip",
    "pegetr-3.zip",
    "pegetr-4.zip",
    "pegetr-5.zip",
  ],

  scroll_animations: [
    "scroll-1.zip",
    "scroll-2.zip",
    "scroll-3.zip",
    "scroll-4.zip",
  ],

  sliders: [
    "sliders-1-650.zip",
    "sliders-2.zip",
    "sliders-3.zip",
  ],

  text_animations: [
    "text-1.zip",
    "text-2.zip",
    "text-3.zip",
    "text-4.zip",
  ],

  webgl_shaders: [],
};

function generateTitleFromFilename(filename: string): string {
  return filename
    .replace(/\.mp4$/i, "")
    .replace(/[_-]/g, " ")
    .replace(/\s*\(\d+\)/g, "")
    .replace(/\b\d+\b/g, "")
    .trim()
    .split(/\s+/)
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1).toLowerCase()
    )
    .join(" ");
}

function generateSlugFromFilename(
  filename: string,
  folderName: string
): string {
  const baseName = filename
    .replace(/\.mp4$/i, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `${folderName}-${baseName}`;
}

export async function getVideoManifest(): Promise<
  AnimationComponent[]
> {
  const manifest: AnimationComponent[] = [];

  for (const [
    categoryName,
    folderName,
  ] of Object.entries(categoryFolders)) {
    const files = videoFiles[folderName] ?? [];
    const availableDownloads =
      downloadFiles[folderName] ?? [];

    for (const file of files) {
      const slug = generateSlugFromFilename(
        file,
        folderName
      );

      const title =
        generateTitleFromFilename(file);

      const encodedFile = encodeURIComponent(file);

      const videoSrc =
        `${R2_BASE_URL}/${folderName}/${encodedFile}`;

      const zipFilename = file.replace(
        /\.mp4$/i,
        ".zip"
      );

      const hasDownload =
        availableDownloads.includes(zipFilename);

      const downloadUrl = hasDownload
        ? `${R2_BASE_URL}/downloads/${folderName}/${encodeURIComponent(
            zipFilename
          )}`
        : undefined;

      const existingComponent = animations.find(
        (component) =>
          component.slug === slug
      );

      const componentId =
        `${folderName}-${file
          .replace(/\.mp4$/i, "")
          .replace(/[^a-zA-Z0-9]+/g, "-")
          .toLowerCase()}`;

      if (existingComponent) {
        manifest.push({
          ...existingComponent,
          id: componentId,
          category: categoryName as Category,
          video: videoSrc,
          hasDownload,
          downloadUrl,
        });
      } else {
        manifest.push({
          id: componentId,
          slug,
          name: title,
          description:
            "Explore this animation preview.",
          category: categoryName as Category,
          technologies: [
            "react",
            "framer-motion",
            "tailwind",
          ],
          difficulty: "beginner",
          interactions: ["hover"],
          video: videoSrc,
          hasDownload,
          downloadUrl,
        });
      }
    }
  }

  console.log(
    "🎬 FINAL R2 VIDEO MANIFEST:",
    manifest.length,
    "items"
  );

  return shuffleArray(manifest);
}