# IA Systems - Project Plan

## Overview

**IA Systems** is a React + Vite + Tailwind marketing/landing page for an intelligence and aerial systems company. The site showcases capabilities for government and critical infrastructure clients, featuring disaster response scenarios, operational verification, and global deployment systems.

### Tech Stack
- **Frontend:** React 19, TypeScript, Vite 6
- **Styling:** Tailwind CSS 4 with custom design tokens
- **Animation:** Motion (Framer Motion alternative)
- **Icons:** Lucide React
- **AI:** Google Gemini (@google/genai) - integration present but not visibly active in UI
- **Backend:** Express server configured
- **Package Manager:** pnpm

### Design Language
- Dark, military/tech aesthetic with custom color tokens (surface, primary, outline, etc.)
- Monospace elements for system/technical feel
- Scroll-based animations and parallax effects
- Carousel hero with operational scenario slides
- Live system log panel (decorative)

---

## Completed Today

### Hero Section Overhaul
- [x] Added custom images to hero carousel (placed in `public/img/`)
- [x] Converted hero section to two-column CSS Grid layout (45% / 55%)
- [x] Positioned images in right column with matching titles
- [x] Moved carousel arrow buttons below images, right-aligned
- [x] Aligned image top with eyebrow text vertically
- [x] Set hero section padding-top to account for fixed navbar (160px)
- [x] Added min-height: 100vh to section container
- [x] Updated README with professional documentation

### Image Path Fix
- [x] Moved `img/` folder from project root to `public/img/` for deployment
- [x] Verified all image paths have leading slash (`/img/...`)

---

## Next Actions

### Priority 1: Environment Setup
- [ ] Copy `.env.example` to `.env` and configure API keys
- [ ] Verify Gemini API integration is working
- [ ] Check if Express backend is needed for any routes

### Priority 2: Understand & Document
- [x] Review `src/lib/utils.ts` for utility functions
- [x] Document the carousel/slides system and image assets
- [ ] Understand the Tailwind configuration and design tokens

### Priority 3: Features & Enhancements
- [ ] Connect the "Capability Brief" form to a backend or email service
- [ ] Add actual Gemini AI functionality (currently imported but unused in UI)
- [ ] Implement any planned backend Express routes
- [ ] Mobile optimization pass

### Priority 4: Technical Debt
- [ ] Fix lint/typecheck errors (`npm run lint`)
- [ ] Review and clean up unused imports
- [ ] Optimize images and assets

---

## Current State
- **Live URL:** https://ia-systems.vercel.app/
- Site runs on `localhost:3000` (port hardcoded in package.json dev script)
- Dependencies installed via pnpm
- 6 hero carousel slides with custom images (fire, flood variants, aid, disaster)
- Decorative live system log (no real functionality)
- Hero section uses two-column grid layout (45% text / 55% image)
- Site successfully deployed and working
