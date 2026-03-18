# Pacific Farewell — Sea Burial Services Website

A modern, ocean-themed Next.js website for a sea burial services business.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** (Cormorant Garamond + Jost)

## Getting Started in VS Code

### 1. Open the project

Open the `sea-burial-website` folder in VS Code.

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
sea-burial-website/
├── app/
│   ├── globals.css       # Global styles, animations, CSS variables
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page — assembles all sections
├── components/
│   ├── Navbar.tsx        # Sticky navigation with scroll effects
│   ├── Hero.tsx          # Full-screen hero with animated canvas particles
│   ├── Services.tsx      # 6-card services grid
│   ├── Process.tsx       # 5-step process timeline
│   ├── About.tsx         # About section with stats and story
│   ├── Testimonials.tsx  # 4 customer testimonials
│   ├── FAQ.tsx           # Accordion FAQ section
│   ├── Contact.tsx       # Contact form + info
│   └── Footer.tsx        # Footer with links
├── public/               # Static assets (add images here)
├── tailwind.config.ts    # Tailwind configuration with custom colors
├── next.config.js        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## Customization Guide

### Business Information
Update these files with your real business details:

- **`app/layout.tsx`** — Page title, meta description, keywords
- **`components/Navbar.tsx`** — Company name "Pacific Farewell"
- **`components/About.tsx`** — Company story, stats, founder quote
- **`components/Contact.tsx`** — Phone number, email, service area
- **`components/Footer.tsx`** — Social media links, legal pages

### Colors
Edit `tailwind.config.ts` and `app/globals.css` to change the color palette:

```css
--ocean-deep: #0a1628    /* Main background */
--seafoam: #4ecdc4       /* Primary accent (teal) */
--gold: #c9a96e          /* Secondary accent (gold) */
--pearl: #f0ece3         /* Primary text */
--mist: #a8c5da          /* Secondary text */
```

### Services
Edit the `services` array in `components/Services.tsx` to match your actual offerings.

### FAQ
Edit the `faqs` array in `components/FAQ.tsx` to update questions and answers.

### Adding Real Photos
Place images in the `/public` folder and reference them using Next.js `<Image>` component:

```tsx
import Image from "next/image";
<Image src="/your-photo.jpg" alt="Description" width={800} height={600} />
```

## Build for Production

```bash
npm run build
npm start
```

## Deploy

This project is ready to deploy on [Vercel](https://vercel.com) — just connect your GitHub repo.
