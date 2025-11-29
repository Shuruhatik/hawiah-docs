# Hawiah Landing Page

A modern, high-performance landing page for the Hawiah TypeScript library - a lightweight, schema-less database abstraction layer.

## Design

Heavily inspired by the Drizzle ORM documentation website featuring:
- Dark mode aesthetic (#0c0c0c background)
- Clean typography with Geist Sans font
- Neon green accents (#C5F74F)
- Bento-grid layout for driver showcase
- Glassmorphism effects
- Smooth animations with Framer Motion

## Tech Stack

- **Framework:** Next.js 16 (React 19)
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Animation:** Framer Motion
- **TypeScript:** Full type safety

## Features

- ✨ Responsive design optimized for all devices
- 🎨 Modern glassmorphism header with sticky navigation
- 🚀 Hero section with animated code snippet
- 📦 Interactive ecosystem grid showcasing 9 database drivers
- 💻 Tabbed code demo section
- ⚡ Smooth scroll animations
- 🎯 SEO optimized

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Sticky navigation header
│   ├── Hero.tsx         # Hero section with CTA
│   ├── Features.tsx     # Feature highlights
│   ├── EcosystemGrid.tsx # Driver showcase grid
│   ├── CodeDemo.tsx     # Interactive code examples
│   └── Footer.tsx       # Footer with links
└── public/              # Static assets
```

## Customization

### Colors

The primary accent color is neon green (#C5F74F). To change it, update the color values in:
- Component files (search for `#C5F74F`)
- Tailwind classes using the accent color

### Content

Edit the component files to update:
- Hero headline and description
- Supported drivers in `EcosystemGrid.tsx`
- Code examples in `CodeDemo.tsx`
- Feature list in `Features.tsx`

## Build

Create a production build:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

## Deploy

Deploy easily on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## License

MIT
