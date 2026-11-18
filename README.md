# Joyanta Halder — Full-Stack Developer Portfolio

A responsive, single-page developer portfolio built with React, TypeScript, Vite, Tailwind CSS, and GSAP. The visual identity uses a near-black background with the existing topaz and gold accent palette.

## Featured work

- **LOVESONE** — E-commerce product  
  Live: https://lovesone.vercel.app/ · Source: https://github.com/joy11122/lovesone
- **Multi-Salon** — Multi-salon management and booking platform  
  Live: https://multi-salon-pi.vercel.app/ · Source: https://github.com/joy11122/multi-salon
- **AI Analytics SaaS** — Natural-language database analytics project  
  Live: https://ai-analytics-saas-mu.vercel.app/ · Source: https://github.com/joy11122/database-querry

## Tech stack

- React 19 and TypeScript
- Vite 7
- Tailwind CSS 3
- GSAP and ScrollTrigger
- Lucide React

## Local development

Use the Node.js version configured in `package.json`.

```bash
npm ci
npm run dev
```

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

The production build runs TypeScript checks before generating the Vite output in `dist/`.

## Deployment

The project is configured for Vercel. Connect the GitHub repository and use the standard Vite build output:

- Build command: `npm run build`
- Output directory: `dist`

## Notes

- Testimonials are intentionally not displayed until genuine, permission-approved feedback is available.
- Analytics tracking is not enabled by default. Add a consent flow before introducing non-essential tracking.
- Project preview illustrations are portfolio visuals; use real, current product screenshots when available.
