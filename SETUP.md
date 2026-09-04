# MotionForge Setup Guide

## Complete Setup Instructions

### Step 1: Install Dependencies

```bash
cd C:\Users\acer\Desktop\MotionForge
npm install
```

### Step 2: Run Development Server

```bash
npm run dev
```

The application will start at `http://localhost:3000`

### Step 3: Explore the Application

#### Homepage (`/`)
- Spectacular animated hero section
- Live component showcase grid
- Infinite scrolling marquee
- Testimonials
- Final CTA section

#### Library Page (`/library`)
- Browse all 52 animation components
- Filter by category, technology, difficulty
- Search with CMD+K
- Preview animations

#### Component Detail (`/components/[slug]`)
- Interactive component preview
- Locked code viewer
- Props documentation
- Related components

#### Pricing (`/pricing`)
- Single pricing tier: ₹450
- Feature list
- Direct checkout link

#### Authentication (`/login`, `/signup`)
- Demo authentication system
- Creates mock user accounts
- Stored in localStorage via Zustand

#### Checkout (`/checkout`)
- Mock payment form
- Order summary
- Simulates purchase flow

#### Dashboard (`/dashboard`)
- User account overview
- Access status
- Quick actions
- Download capability

## Testing the Complete Flow

### 1. Browse Components (No Account)
1. Visit `http://localhost:3000`
2. Click "Explore Library"
3. Browse components, try filters
4. Click any component to see detail page
5. Notice code is locked

### 2. Create Account & Purchase
1. Click "Get Access — ₹450" (any CTA)
2. Click "Sign up" if no account
3. Create account (any credentials work - it's a demo)
4. Proceed to checkout
5. Fill mock payment form
6. Click "Pay ₹450"
7. Get redirected to dashboard

### 3. Access Unlocked Content
1. Return to `/library`
2. Open any component detail page
3. Code is now unlocked
4. Can view full source code
5. Copy button enabled

## Project Structure Overview

```
C:\Users\acer\Desktop\MotionForge\
├── src/
│   ├── app/                    # Next.js pages
│   │   ├── page.tsx           # Homepage
│   │   ├── library/page.tsx   # Library
│   │   ├── components/[slug]/ # Component details
│   │   ├── pricing/page.tsx   # Pricing
│   │   ├── checkout/page.tsx  # Checkout
│   │   ├── dashboard/page.tsx # Dashboard
│   │   ├── login/page.tsx     # Login
│   │   ├── signup/page.tsx    # Signup
│   │   └── about/page.tsx     # About
│   ├── components/
│   │   ├── ui/                # Base UI components
│   │   ├── navigation/        # Nav, Footer, Menus
│   │   ├── marketing/         # Marketing sections
│   │   ├── library/           # Library components
│   │   └── code/             # Code viewer
│   ├── data/
│   │   └── animations.ts      # 52 components data
│   ├── hooks/                 # Custom hooks
│   ├── lib/                   # Config & utilities
│   ├── types/                 # TypeScript types
│   └── utils/                 # Helper functions
├── public/                    # Static assets
├── .env.example              # Environment template
├── package.json              # Dependencies
├── tailwind.config.ts        # Tailwind config
└── tsconfig.json            # TypeScript config
```

## Key Features Implemented

### ✅ Design System
- Custom cursor (desktop only)
- Premium dark theme
- Animated components
- Responsive layouts
- Accessibility support

### ✅ Animation Library
- 52 components across 8 categories
- Text, Buttons, Cards, Navigation, Backgrounds, Cursor, Scroll, Creative
- Each with metadata, controls, props, code samples

### ✅ Authentication
- Signup/Login flows
- Zustand state management
- Persistent sessions (localStorage)
- Protected routes

### ✅ Paywall System
- Locked/unlocked states
- Mock checkout flow
- Access control
- Dashboard

### ✅ UI/UX
- Smooth animations throughout
- Interactive previews
- Search & filtering
- Mobile responsive
- Loading states

## Customization Guide

### Change Brand Name
Edit `src/lib/constants.ts`:
```typescript
export const SITE_NAME = "YourBrand";
```

### Change Pricing
Edit `src/lib/constants.ts`:
```typescript
export const PRICE = 999; // Your price
export const CURRENCY_SYMBOL = "$";
```

### Add New Components
Add to `src/data/animations.ts`:
```typescript
{
  id: "53",
  slug: "your-animation",
  name: "Your Animation",
  // ... full definition
}
```

### Customize Colors
Edit `src/app/globals.css`:
```css
:root {
  --accent: #your-color;
}
```

## Production Deployment

### For Real Production Use:

1. **Replace Mock Auth** with:
   - NextAuth.js
   - Supabase Auth
   - Firebase Auth
   - Custom backend

2. **Integrate Real Payments**:
   ```bash
   npm install razorpay
   # or
   npm install stripe
   ```

3. **Add Database**:
   - Store user accounts
   - Track purchases
   - Manage access

4. **Setup Email**:
   - Purchase confirmations
   - Password resets
   - Updates

5. **Add Analytics**:
   ```typescript
   // src/utils/analytics.ts
   setAnalyticsProvider(yourAnalyticsProvider);
   ```

## Environment Variables for Production

Create `.env.local`:

```bash
# Site
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Database
DATABASE_URL=postgresql://...

# Auth (if using NextAuth)
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=https://yourdomain.com

# Payment (Razorpay example)
RAZORPAY_KEY_ID=rzp_live_...
RAZORPAY_KEY_SECRET=your_secret

# Email (if using Resend/SendGrid)
RESEND_API_KEY=re_...

# Analytics
NEXT_PUBLIC_POSTHOG_KEY=phc_...
```

## Build for Production

```bash
# Test production build locally
npm run build
npm start

# Deploy to Vercel
vercel

# Or deploy to other platforms:
# - Netlify
# - Railway  
# - Render
# - Digital Ocean App Platform
```

## Performance Metrics

The application is optimized for:
- Fast initial load (<3s)
- Smooth animations (60fps)
- Small bundle size
- Code splitting
- Image optimization

## Browser Testing Checklist

- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Chrome
- [ ] Mobile Safari
- [ ] Tablet devices

## Accessibility Features

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states
- Reduced motion support
- Color contrast
- Screen reader friendly

## Support & Maintenance

### Common Issues

**Port 3000 in use:**
```bash
npx kill-port 3000
# or
npm run dev -- -p 3001
```

**Build errors:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**TypeScript errors:**
```bash
npx tsc --noEmit
```

## Next Steps

1. Test the complete user flow
2. Customize branding and colors
3. Add real payment integration
4. Set up proper authentication
5. Deploy to production
6. Monitor analytics
7. Collect user feedback

## Tech Stack Summary

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion 13, GSAP 3
- **State:** Zustand 5
- **Icons:** Lucide React
- **Utilities:** clsx, tailwind-merge, CVA

## File Size

- Total components: ~100 files
- Data: 52 animation definitions
- Lines of code: ~8,000+
- Bundle size: Optimized with code splitting

---

**Application is ready to run! Execute `npm run dev` to start.**
