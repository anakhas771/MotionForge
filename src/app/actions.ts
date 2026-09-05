"use server";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

import fs from "fs";
import path from "path";
import { animations, R2_BASE_URL } from "@/data/animations";
import { AnimationComponent, Category } from "@/types";

const categoryFolders: Record<string, string> = {
  "Scroll Animations": "scroll_animations",
  "Grid Animations": "grid_animations",
  "Mouse Effects": "mouse_effects",
  "Page Transitions": "page_transition",
  "Sliders": "sliders",
  "Hero Animations": "hero_animations",
  "WebGL Shaders": "webgl_shaders",
  "Background Animations": "background_animations",
  "Navigation Menus": "navigation_menu",
  "Hover Effects": "hover_effect",
  "Text Animations": "text_animations",
};

function generateTitleFromFilename(
  filename: string
): string {
  const nameWithoutExt = filename.replace(
    /\.mp4$/i,
    ""
  );

  return nameWithoutExt
    .replace(/[_-]/g, " ")
    .split(" ")
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

  const folderPrefix = folderName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `${folderPrefix}-${baseName}`;
}

export async function getVideoManifest(): Promise<
  AnimationComponent[]
> {
  const publicDir = path.join(
    process.cwd(),
    "public"
  );

  const manifest: AnimationComponent[] = [];



  for (const [
    categoryName,
    folderName,
  ] of Object.entries(categoryFolders)) {
    const folderPath = path.join(
      publicDir,
      folderName
    );

    console.log(
      "📂 Checking folder:",
      folderPath
    );

    if (!fs.existsSync(folderPath)) {
      console.log(
        "⚠ Folder not found:",
        folderPath
      );

      continue;
    }

    try {
      const files =
        await fs.promises.readdir(folderPath);

      console.log(
        `📁 Files in ${folderName}:`,
        files
      );

      const mp4Files = files.filter((file) =>
        file.toLowerCase().endsWith(".mp4")
      );

      for (const file of mp4Files) {
        const slug = generateSlugFromFilename(file, folderName);
        const title = generateTitleFromFilename(file);
        const videoSrc = `${R2_BASE_URL}/${folderName}/${file}`;

        const zipFilename = file.replace(/\.mp4$/i, ".zip");
        const downloadUrl = `/downloads/${folderName}/${zipFilename}`;
        const zipPath = path.join(publicDir, "downloads", folderName, zipFilename);
        const hasDownload = fs.existsSync(zipPath);

        const existingComponent = animations.find(
          (component) =>
            component.slug === slug ||
            component.name.toLowerCase() === title.toLowerCase()
        );

        const baseFilename = file.replace(/\.mp4$/i, "");
        const componentId = `${folderName}-${baseFilename}`;

        if (existingComponent) {
          manifest.push({
            ...existingComponent,
            id: componentId,
            category: categoryName as Category,
            video: videoSrc,
            downloadUrl,
            hasDownload,
          });
        } else {
          manifest.push({
            id: componentId,
            slug: slug,
            name: title,
            description: "Explore this animation preview.",
            category: categoryName as Category,
            technologies: ["react", "framer-motion", "tailwind"],
            difficulty: "beginner",
            interactions: ["hover"],
            video: videoSrc,
            downloadUrl,
            hasDownload,
          });
        }
      }
    } catch (error) {
      console.error(
        `❌ Error reading ${folderPath}:`,
        error
      );
    }
  }

  const shuffledManifest = shuffleArray(manifest);

  console.log(
    "🎬 FINAL VIDEO MANIFEST (Shuffled):",
    shuffledManifest.length, "items"
  );

  return shuffledManifest;
}