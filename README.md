# MotionForge

MotionForge is a modern animation library built with **Next.js, TypeScript, Tailwind CSS, Framer Motion, and GSAP**.

It provides a growing collection of UI animation previews organized into categories. Users can browse animations, preview them directly in the browser, and download available source packages as ZIP files.

## ✨ Features

- 🎬 **Animation Preview Library** — Browse a growing collection of UI animation previews.
- ▶️ **Auto-Playing Videos** — Preview animations directly inside library cards.
- 📂 **Multiple Categories** — Browse scroll animations, hero animations, grid animations, mouse effects, sliders, WebGL shaders, text animations, and more.
- 🔎 **Category Filtering** — Filter the animation library by category.
- 🎲 **Randomized Components** — Components can be displayed in a randomized order for a dynamic browsing experience.
- 🔗 **Dedicated Animation Pages** — Click an animation card to open its preview and download page.
- 📦 **ZIP Downloads** — Download available animation source packages.
- 🔒 **ZIP Locked State** — Animations without an available ZIP package are clearly marked as locked.
- ♾️ **Infinite Showcase** — The homepage includes an animated infinite-scroll showcase.
- 📍 **Category Persistence** — Returning from an animation page keeps the selected library category.
- 📱 **Fully Responsive** — Designed for desktop, tablet, and mobile devices.
- 🌙 **Modern Dark UI** — Built with a clean dark interface using `#1e1e1e`.
- 📚 **Documentation & Legal Pages** — Includes documentation, FAQ, Terms of Service, Privacy Policy, and License pages.
- ⚡ **Modern Next.js Architecture** — Built using the Next.js App Router and TypeScript.

---

## 🛠 Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **UI:** React
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion and GSAP
- **Authentication Infrastructure:** NextAuth
- **Database Tooling:** Prisma
- **Icons:** Lucide React

---

## 🚀 Quick Start

### Prerequisites

Make sure you have installed:

- Node.js 18+
- npm

Check your installation:

```bash
node -v
npm -v
```

### Installation

Clone the repository:

```bash
git clone https://github.com/anakhas771/MotionForge.git
```

Move into the project directory:

```bash
cd MotionForge
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 📜 Available Commands

### Run Development Server

```bash
npm run dev
```

### Create a Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Run ESLint

```bash
npm run lint
```

Before deploying, run:

```bash
npm run lint
npm run build
```

---

## 📁 Project Structure

```text
MotionForge/
│
├── public/
│   ├── background_animations/
│   ├── grid_animations/
│   ├── hero_animations/
│   ├── hover_effect/
│   ├── mouse_effects/
│   ├── navigation_menu/
│   ├── page_transition/
│   ├── scroll_animations/
│   ├── sliders/
│   ├── text_animations/
│   ├── webgl_shaders/
│   │
│   ├── downloads/
│   │   ├── background_animations/
│   │   ├── grid_animations/
│   │   ├── hero_animations/
│   │   ├── hover_effect/
│   │   ├── mouse_effects/
│   │   ├── navigation_menu/
│   │   ├── page_transition/
│   │   ├── scroll_animations/
│   │   ├── sliders/
│   │   └── text_animations/
│   │
│   └── vercel.svg
│
├── prisma/
│   └── dev.db
│
├── src/
│   │
│   ├── app/
│   │   ├── about/
│   │   ├── api/
│   │   ├── code/
│   │   │   └── [slug]/
│   │   ├── dashboard/
│   │   ├── documentation/
│   │   ├── faq/
│   │   ├── legal/
│   │   │   ├── license/
│   │   │   ├── privacy/
│   │   │   └── terms/
│   │   ├── library/
│   │   ├── login/
│   │   ├── signup/
│   │   ├── actions.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── library/
│   │   │   ├── component-card.tsx
│   │   │   ├── component-grid.tsx
│   │   │   ├── filter-bar.tsx
│   │   │   ├── filter-sidebar.tsx
│   │   │   ├── mobile-filter.tsx
│   │   │   ├── search-dialog.tsx
│   │   │   └── video-preview.tsx
│   │   │
│   │   ├── marketing/
│   │   │   ├── hero.tsx
│   │   │   ├── infinite-showcase.tsx
│   │   │   ├── showcase-grid.tsx
│   │   │   ├── stats-strip.tsx
│   │   │   └── final-cta.tsx
│   │   │
│   │   ├── navigation/
│   │   │   ├── navbar.tsx
│   │   │   ├── mobile-menu.tsx
│   │   │   └── footer.tsx
│   │   │
│   │   └── ui/
│   │       ├── accordion.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── premium-background.tsx
│   │       ├── smooth-scroll.tsx
│   │       └── other reusable UI components
│   │
│   ├── data/
│   │   └── animations.ts
│   │
│   ├── hooks/
│   │
│   ├── lib/
│   │   ├── auth.ts
│   │   ├── categories.ts
│   │   ├── constants.ts
│   │   ├── db.ts
│   │   └── motion.ts
│   │
│   ├── types/
│   │
│   └── utils/
│
├── package.json
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

# 🎬 Animation System

MotionForge dynamically discovers animation preview videos from the `public` directory.

Example:

```text
public/
├── scroll_animations/
│   ├── scroll-1.mp4
│   ├── scroll-2.mp4
│   └── scroll-3.mp4
│
├── hero_animations/
│   ├── hero-1.mp4
│   └── hero-2.mp4
│
└── grid_animations/
    ├── grid-1.mp4
    └── grid-2.mp4
```

The application reads the configured animation folders and generates animation data dynamically.

This makes it easy to expand the animation library without manually creating every card.

---

# ➕ Adding a New Animation

## 1. Add the Preview Video

Place the `.mp4` preview inside the correct category folder.

Example:

```text
public/scroll_animations/scroll-20.mp4
```

## 2. Add the Download Package

If the source code is available, add the ZIP package inside the corresponding download folder.

Example:

```text
public/downloads/scroll_animations/scroll-20.zip
```

## 3. Restart the Development Server

```bash
npm run dev
```

The new animation should automatically appear in the library.

---

# 📦 Download System

Animation source packages are stored inside:

```text
public/downloads/
```

The ZIP file structure should match the animation category structure.

Example:

```text
public/
├── hero_animations/
│   └── hero-1.mp4
│
└── downloads/
    └── hero_animations/
        └── hero-1.zip
```

If a matching ZIP file exists, users can download it.

If no ZIP package is available, the animation will display a:

```text
ZIP Locked
```

state.

---

# 📂 Animation Categories

MotionForge supports categories such as:

- Scroll Animations
- Grid Animations
- Hero Animations
- Mouse Effects
- Page Transitions
- Sliders
- WebGL Shaders
- Background Animations
- Navigation Menus
- Hover Effects
- Text Animations
- 3D Animations
- Physics Effects
- SVG Animations

---

# 🔗 Animation Routes

Each animation receives a slug based on its filename.

Example:

```text
scroll-1.mp4
```

Generates:

```text
scroll-1
```

The corresponding animation page can be accessed through:

```text
/code/scroll-1
```

Clicking an animation card from the library opens its dedicated preview and download page.

---

# 🔄 Category Persistence

The selected animation category is preserved in the URL.

Example:

```text
/library?category=Scroll%20Animations
```

When users open an animation and return to the library, they remain in the previously selected category instead of returning to **All Components**.

---

# 🎨 Design System

MotionForge uses a clean, modern dark interface.

Primary UI color:

```css
#1e1e1e
```

The navigation uses a pill-style design, while the rest of the interface follows the same dark visual system.

Global styling can be customized in:

```text
src/app/globals.css
```

---

# 🧭 Application Routes

| Route            | Description                         |
| ---------------- | ----------------------------------- |
| `/`              | Homepage                            |
| `/library`       | Animation library                   |
| `/code/[slug]`   | Animation preview and download page |
| `/documentation` | Documentation                       |
| `/faq`           | Frequently asked questions          |
| `/about`         | About MotionForge                   |
| `/login`         | Login page                          |
| `/signup`        | Signup page                         |
| `/dashboard`     | User dashboard                      |
| `/legal/terms`   | Terms of Service                    |
| `/legal/privacy` | Privacy Policy                      |
| `/legal/license` | License information                 |

---

# ⚙️ Environment Variables

Create a `.env.local` file if required:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=MotionForge
```

For production:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=MotionForge
```

Do not commit sensitive environment variables to GitHub.

---

# 🚀 Deployment

MotionForge can be deployed on any platform that supports Next.js.

## Vercel

Install the Vercel CLI:

```bash
npm install -g vercel
```

Deploy:

```bash
vercel
```

You can also connect the GitHub repository to Vercel for automatic deployments.

---

# ⚠️ Large Media Files

Large animation previews and ZIP packages should not be pushed directly to Git if they make the repository too large.

The project currently ignores:

```gitignore
# Large animation videos
/public/**/*.mp4

# Downloadable packages
/public/**/*.zip
```

For production, these files can be stored separately using services such as:

- Vercel Blob
- Cloudflare R2
- Amazon S3
- Cloudinary
- Supabase Storage

The application can then load previews and download packages from external storage or a CDN.

---

# 🧪 Quality Checks

Run ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Before deployment:

```bash
npm run lint
npm run build
```

---

# 🌐 Browser Support

MotionForge supports modern browsers including:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari
- Modern mobile browsers

For the best animation experience, use the latest browser version.

---

# 🤝 Contributing

Contributions and improvements are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Run lint and build checks.
5. Open a pull request.

---

# 🛣 Roadmap

Potential future improvements include:

- More animation categories
- More downloadable animation packages
- Improved animation search
- Favorites and collections
- Better preview controls
- External media storage
- CDN integration
- Analytics
- Community-contributed animations

---

## ❤️ Built With

Built with **Next.js, TypeScript, Tailwind CSS, Framer Motion, and GSAP**.

**MotionForge — Explore, preview, and download modern UI animations.**
