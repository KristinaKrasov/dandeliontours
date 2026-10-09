# Dandelion

Dandelion is a responsive travel-agency website concept built as a portfolio project. It demonstrates a polished landing page, working tour filters, reusable tour-detail pages, a featured Kenya experience, responsive navigation, and validated demo lead forms.

> This is a demonstration project. Tours, prices, testimonials, availability and form submissions are fictional and are not used for real bookings.

## Stack

- React 19 + TypeScript
- TanStack Start / TanStack Router
- Vite
- Tailwind CSS 4
- React Hook Form + Zod
- Lucide icons

## Highlights

- Responsive desktop and mobile navigation
- Functional country, month and budget filters
- Reusable tour catalogue and dynamic tour routes
- Dedicated featured-tour landing page
- Shared validated `LeadForm` used across the site
- Demo submissions that never store or transmit entered data
- Responsive imagery and WebM-first hero video playback
- Route-specific metadata and custom branding

## Local development

```bash
npm install
npm run dev
```

On Windows PowerShell systems where `npm.ps1` is blocked by the execution policy, use:

```powershell
npm.cmd install
npm.cmd run dev
```

## Production build

```bash
npm run build
```

## Project structure

- `src/components/home/` — landing-page sections
- `src/components/LeadForm.tsx` — reusable validated demo form
- `src/lib/tours.ts` — tour catalogue data
- `src/routes/` — application routes and tour pages
- `src/assets/` — local images and hero video assets

## Portfolio note

The visual identity, content structure and interactions are designed to demonstrate a production-style travel website. No backend, CRM or booking provider is connected.
