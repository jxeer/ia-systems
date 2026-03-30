# IA Systems

A high-fidelity landing page for an intelligence and aerial systems company specializing in disaster response, operational verification, and global deployment systems for government and critical infrastructure clients.

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | React 19 + Vite 6 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 4 with custom design tokens |
| **Animation** | Motion (Framer Motion alternative) |
| **Icons** | Lucide React |
| **AI** | Google Gemini (@google/genai) |
| **Backend** | Express.js |

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ia-systems

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server (default: localhost:3000)
pnpm run dev

# Type checking
pnpm run lint
```

## Project Structure

```
ia-systems/
├── src/
│   ├── App.tsx          # Main application component
│   ├── index.css        # Global styles and Tailwind config
│   ├── main.tsx        # Application entry point
│   └── lib/
│       └── utils.ts    # Utility functions (cn helper)
├── public/             # Static assets
├── img/                # Image assets
├── index.html
├── vite.config.ts
└── package.json
```

## Features

- **Hero Carousel** — Full-screen operational scenario slides with auto-advance
- **Live System Log** — Decorative telemetry panel with animated entries
- **Scroll Animations** — Motion-powered reveal effects on scroll
- **Capability Brief Modal** — Secure contact form for government clients
- **Responsive Design** — Optimized for desktop and mobile

## Design Language

- Dark military/tech aesthetic with custom color tokens
- Monospace typography for system/technical elements
- Scroll-driven parallax and fade animations
- High-contrast imagery with operational overlays
