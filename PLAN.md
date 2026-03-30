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

### Design Language
- Dark, military/tech aesthetic with custom color tokens (surface, primary, outline, etc.)
- Monospace elements for system/technical feel
- Scroll-based animations and parallax effects
- Carousel hero with operational scenario slides
- Live system log panel (decorative)

---

## Next Actions

### Priority 1: Environment Setup
- [ ] Copy `.env.example` to `.env` and configure API keys
- [ ] Verify Gemini API integration is working
- [ ] Check if Express backend is needed for any routes

### Priority 2: Understand & Document
- [ ] Review `src/lib/utils.ts` for utility functions
- [ ] Understand the Tailwind configuration and design tokens
- [ ] Document the carousel/slides system and image assets

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
- Site runs on `localhost:3000` (port hardcoded in package.json dev script)
- Dependencies installed via pnpm
- 6 hero carousel slides with placeholder images
- Decorative live system log (no real functionality)
