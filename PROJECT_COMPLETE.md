# MotionForge

A modern, open animation library built with **Next.js, TypeScript, Tailwind CSS, and Framer Motion**.

MotionForge provides a growing collection of UI animation previews organized into categories. Users can browse animations, preview them directly in the browser, and download the available source packages as ZIP files.

## ✨ Features

- 🎬 **Animation Video Previews** — Browse real animation preview videos directly from the library.
- 📂 **Multiple Categories** — Explore scroll animations, grid animations, hero animations, mouse effects, sliders, WebGL shaders, navigation menus, text animations, and more.
- ▶️ **Auto-Playing Previews** — Animation previews play directly inside the library cards.
- 🔍 **Category Filtering** — Quickly filter animations by category.
- 🎲 **Randomized Library** — Animation components can be displayed in a dynamic randomized order.
- 🔗 **Direct Animation Pages** — Click an animation to open its dedicated preview and download page.
- 📦 **ZIP Downloads** — Download available animation source packages directly.
- 🔒 **Locked Downloads** — Animations without an available ZIP package are clearly marked as locked.
- 🧭 **Persistent Category Navigation** — When returning from an animation page, the selected library category is preserved.
- ♾️ **Infinite Animation Showcase** — The homepage includes a continuously scrolling animation showcase.
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile devices.
- 🌙 **Modern Dark UI** — Built around a clean dark design system using `#1e1e1e`.
- 📚 **Documentation Pages** — Includes documentation, FAQ, terms, privacy policy, and license pages.
- ⚡ **Next.js App Router** — Modern routing and server-side capabilities.
- 🎨 **Smooth Motion** — Powered by Framer Motion and modern CSS animations.

---

## 🛠 Tech Stack

| Technology    | Usage                         |
| ------------- | ----------------------------- |
| Next.js       | Application framework         |
| TypeScript    | Type safety                   |
| React         | User interface                |
| Tailwind CSS  | Styling                       |
| Framer Motion | UI animations                 |
| GSAP          | Advanced animation effects    |
| Lucide React  | Icons                         |
| Prisma        | Database tooling              |
| NextAuth      | Authentication infrastructure |

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
│   │   │   └── auth/
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
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── badge.tsx
│   │       ├── accordion.tsx
│   │       ├── smooth-scroll.tsx
│   │       └── premium-background.tsx
│   │
│   ├── data/
│   │   └── animations.ts
│   │
│   ├── hooks/
│   │   ├── use-intersection.ts
│   │   ├── use-media-query.ts
│   │   ├── use-mouse-position.ts
│   │   └── use-scroll-progress.ts
│   │
│   ├── lib/
│   │   ├── auth.ts
│   │   ├── categories.ts
│   │   ├── constants.ts
│   │   ├── db.ts
│   │   └── motion.ts
│   │
│   ├── types/
│   │   ├── index.ts
│   │   └── next-auth.d.ts
│   │
│   └── utils/
│       ├── analytics.ts
│       └── cn.ts
│
├── package.json
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18 or newer
- npm

Check your versions:

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

## 📜 Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Start Production Server

```bash
npm start
```

Runs the production build locally.

### Lint

```bash
npm run lint
```

Checks the project for ESLint issues.

---

## 🎬 Animation System

MotionForge dynamically discovers animation preview videos from the `public` directory.

For example:

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

The application scans the configured animation folders and generates the animation manifest dynamically.

This allows new animation previews to be added without manually creating every animation card.

---

## 📦 Adding a New Animation

### 1. Add the Preview Video

Place the `.mp4` file inside the appropriate category.

Example:

```text
public/scroll_animations/scroll-20.mp4
```

### 2. Add the ZIP Package

If the source code is available, add the ZIP file to the matching download directory:

```text
public/downloads/scroll_animations/scroll-20.zip
```

### 3. Restart the Development Server

```bash
npm run dev
```

The animation should automatically appear in the library.

---

## 📂 Animation Categories

MotionForge currently supports categories such as:

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

Categories without available videos will simply remain empty.

---

## 🔗 Animation URLs

Each animation has a generated slug based on its filename.

Example:

```text
scroll-1.mp4
```

Generates:

```text
scroll-1
```

The animation page can then be accessed through:

```text
/code/scroll-1
```

Clicking an animation card in the library opens its dedicated animation page.

---

## 📦 Download System

Source packages are stored in:

```text
public/downloads/
```

The folder structure should match the animation category structure.

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

If a matching ZIP package exists, the user can download it.

If no ZIP package is available, the animation is displayed as:

```text
ZIP Locked
```

---

## 🔄 Category Persistence

The selected animation category is stored in the URL.

For example:

```text
/library?category=Scroll%20Animations
```

When a user opens an animation and navigates back, they remain in the same category instead of being returned to **All Components**.

---

## 🎨 Design System

MotionForge uses a modern dark visual style.

The primary interface color is:

```css
#1e1e1e
```

The navigation uses a pill-style layout, and the rest of the interface follows the same dark design language.

Global styles can be customized in:

```text
src/app/globals.css
```

---

## 🧭 Main Pages

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

## ⚙️ Environment Variables

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

Do not commit sensitive environment variables.

---

## 🚀 Deployment

MotionForge is designed to be deployed on platforms that support Next.js.

### Vercel

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

## ⚠️ Large Media Files

The repository intentionally ignores large `.mp4` and `.zip` files:

```gitignore
# large animation videos
/public/**/*.mp4

# downloadable packages
/public/**/*.zip
```

This prevents the Git repository from becoming extremely large.

For production deployment, large animation videos and downloadable ZIP files can be stored using external storage or a CDN, such as:

- Vercel Blob
- Cloudflare R2
- Amazon S3
- Cloudinary
- Supabase Storage

---

## 🧪 Code Quality

Run ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Before deploying, run:

```bash
npm run lint
npm run build
```

---

## 🌐 Browser Support

MotionForge supports modern browsers including:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari
- Modern mobile browsers

For the best animation experience, use the latest version of your browser.

---

## 📄 License

Please review the project's license page for usage terms:

```text
/legal/license
```

The downloadable animation packages may have their own usage restrictions depending on the included source material.

---

## 🤝 Contributing

Contributions, improvements, and ideas are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Run lint and build checks.
5. Open a pull request.

---

## 🛣 Roadmap

Future improvements may include:

- More animation categories
- More downloadable animation packages
- Improved search
- Animation favorites
- User collections
- Better preview controls
- External media storage
- CDN integration
- Better analytics
- Community-contributed animations

---

## 💻 Development

```bash
git clone https://github.com/anakhas771/MotionForge.git

cd MotionForge

npm install

npm run dev
```

Then open:

```text
http://localhost:3000
```

---

Built with ❤️ using **Next.js, TypeScript, Tailwind CSS, and Framer Motion**.
