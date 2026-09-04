# MotionForge

A premium animation UI library SaaS built with Next.js, TypeScript, Framer Motion, and Tailwind CSS.

## Features

- 🎨 **50+ Premium Animations** - Production-ready animated components
- ⚡ **Modern Stack** - Built with Next.js 15, TypeScript, Framer Motion, GSAP
- 🎯 **Interactive Playground** - Test and customize animations in real-time
- 🔒 **Paywall System** - Complete checkout and access control
- 📱 **Fully Responsive** - Works beautifully on all devices
- 🎭 **Custom Cursor** - Premium desktop cursor interactions
- 🌙 **Dark Theme** - Sophisticated dark design system
- ⚙️ **TypeScript** - Fully typed for better DX

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the application.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── library/           # Component library page
│   ├── components/[slug]/ # Component detail pages
│   ├── pricing/           # Pricing page
│   ├── checkout/          # Checkout flow
│   ├── dashboard/         # User dashboard
│   ├── login/            # Authentication
│   └── signup/
├── components/
│   ├── animations/        # Animated component implementations
│   ├── code/             # Code viewer components
│   ├── library/          # Library UI components
│   ├── marketing/        # Marketing sections
│   ├── navigation/       # Navbar, footer, menus
│   ├── playground/       # Interactive playground
│   └── ui/              # Reusable UI components
├── data/
│   └── animations.ts     # Animation components data (52 components)
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and configuration
├── types/              # TypeScript type definitions
└── utils/              # Helper functions
```

## Key Technologies

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP, Anime.js
- **State**: Zustand
- **Icons**: Lucide React

## Component Categories

1. **Text** (8) - Text reveals, scramble, typewriter, gradients
2. **Buttons** (7) - Magnetic, liquid, glow, shimmer effects
3. **Cards** (7) - 3D tilt, spotlight, parallax, glass effects
4. **Navigation** (6) - Magnetic navbar, floating dock, animated tabs
5. **Backgrounds** (7) - Aurora, particles, grid, noise patterns
6. **Cursor** (4) - Magnetic cursor, trails, glows
7. **Scroll** (6) - Parallax, horizontal scroll, reveal effects
8. **Creative** (7) - Gooey effects, morphing, distortions

## Environment Variables

Create a `.env.local` file:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=MotionForge
```

See `.env.example` for all available options.

## Payment Integration

The checkout system is architected for easy integration with payment providers:

### Razorpay Integration

```typescript
// lib/payment.ts
import Razorpay from "razorpay";

export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});
```

### Stripe Integration

```typescript
import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});
```

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Build the production bundle:

```bash
npm run build
```

The output will be in `.next/` directory. Deploy this along with:
- `package.json`
- `public/` directory
- `.env` variables configured in your hosting platform

## Performance

The application is optimized for production:

- Server-side rendering for initial load
- Code splitting for optimal bundle size
- Image optimization with Next.js Image
- CSS optimization with Tailwind
- Reduced motion support for accessibility

## Customization

### Brand Colors

Edit `src/app/globals.css`:

```css
:root {
  --accent: #a78bfa;  /* Primary accent color */
  --accent-bright: #c4b5fd;
}
```

### Animation Library

Add new components in `src/data/animations.ts`:

```typescript
{
  id: "53",
  slug: "new-animation",
  name: "New Animation",
  category: "text",
  // ... rest of properties
}
```

### Pricing

Update pricing in `src/lib/constants.ts`:

```typescript
export const PRICE = 450;
export const CURRENCY = "INR";
export const CURRENCY_SYMBOL = "₹";
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Modern mobile browsers

## License

This is a demo project. For production use, implement proper:
- Payment processing
- User authentication (with secure backend)
- Database integration
- Terms of service and privacy policy
- Refund policy

## Architecture Notes

### Authentication

Currently uses Zustand with localStorage for demo purposes. For production:

1. Implement proper backend authentication (NextAuth.js, Supabase, Firebase)
2. Secure session management
3. Password hashing and validation
4. Email verification
5. Password reset flow

### Payment Flow

The checkout is a mock implementation. For production:

1. Integrate Razorpay or Stripe
2. Create secure API routes for payment processing
3. Implement webhook handlers
4. Store purchase records in database
5. Send confirmation emails
6. Handle refunds and disputes

### Analytics

The analytics system is abstracted in `src/utils/analytics.ts`. Integrate with:

- PostHog
- Plausible
- Google Analytics
- Mixpanel

## Development Tips

### Adding New Components

1. Add component data to `src/data/animations.ts`
2. Create implementation in `src/components/animations/`
3. Component will automatically appear in library

### Hot Reload

The development server supports hot module replacement. Changes to components will reflect immediately.

### Type Safety

All components are fully typed. Use TypeScript to catch errors early:

```bash
npm run type-check
```

## Troubleshooting

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

## Contributing

This is a demonstration project. Feel free to fork and customize for your needs.

## Support

For questions or issues:
- Check the documentation
- Review the source code
- Open an issue on GitHub

---

**Built with ❤️ using Next.js, TypeScript, and Framer Motion**
