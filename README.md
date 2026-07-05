# Winners Chapel International, Southport — Website

A premium, modern digital home for **Winners Chapel International, Southport** — *A Place of Faith. A Family of Love. A Home of Miracles.*

Built as a cinematic, spiritually-inspiring experience in the spirit of Hillsong, Elevation and Apple/Stripe-grade design. Deep navy + gold "Kingdom Excellence" theme.

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` design tokens)
- **Framer Motion** for cinematic animation & scroll reveals
- **Lucide** icons + custom brand SVGs
- SEO: metadata, Open Graph, `sitemap.ts`, `robots.ts`, JSON-LD Church schema
- PWA manifest (installable, standalone)

## Pages

Home · About · Our Pastor · Ministries · Services · Events · Media Centre · WOFBI · CSR / Community Impact · First Timers · Prayer · Giving · Contact

Plus a floating 24/7 AI Church Assistant, mobile app-style bottom navigation, and a live-service indicator.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Project Structure

```
src/
  app/                 # routes (App Router)
  components/
    layout/            # Navbar, Footer, MobileNav, Logo
    ui/                # Button, Section, Reveal, Icon, CountUp, Countdown, PageHero, Field, Accordion
    home/              # homepage sections (Hero, Stats, Sermons, ...)
    ai/                # AI assistant widget
    <route>/           # page-specific interactive components (forms, etc.)
  lib/site.ts          # central church data (services, ministries, events, contact, ...)
public/images/site/    # brand assets & photography
```

## Design System

Tokens live in `src/app/globals.css` (`@theme`): `navy-950…50`, `gold-500…`, `cream/ivory/sand`, plus utilities like `text-gold-gradient`, `glass`, `card-lift`, `hero-glow`.

## Deployment

Optimised for **Vercel** — connect the repo and deploy. No environment variables are required for the current public marketing site. Forms are front-end demos (success states) ready to be wired to a backend (e.g. Supabase) in a later phase, alongside the member portal, admin dashboard and live AI features.

## Content & Media

Church details (address, service times, contacts, socials) are sourced from the existing site and centralised in `src/lib/site.ts`. Photography currently uses brand assets as tasteful placeholders — swap in real church media under `public/images/site/`.

---

© Winners Chapel International, Southport. Part of Living Faith Church Worldwide.
