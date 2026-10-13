# David Guerrero — portfolio

A static Astro portfolio for direct small-business clients. It presents document/PDF tools, workflow integrations and focused web projects, with honest personal-project case studies and a direct Protonmail contact link.

## Local development

Requires Node.js **22.12 or newer** and npm. The checked-in npm lockfile is the installation source of truth.

```sh
npm ci
npm run dev
```

Astro serves the site at `http://localhost:4321`. With Astro 7, the development server runs in the background; use `npx astro dev status`, `npx astro dev logs` and `npx astro dev stop` to manage it.

## Validation

```sh
npm run check
npm run build
npm audit
```

`check` runs Astro's TypeScript diagnostics. There is no separate lint or unit-test configuration in this repository. Production output is written to `dist/`; `npm run preview` serves that output locally.

## Content and appearance

- Page content: `src/pages/index.astro`
- Typography, responsive layouts and both palettes: `src/styles/global.css`
- Native keyboard-accessible Light / Dark / System selector: `src/components/ThemeToggle.astro`
- Canonical and social metadata: `src/layouts/Layout.astro`
- Site origin for canonical URLs, sitemap and robots: `astro.config.mjs`

System appearance is the default; an explicit choice persists locally. Storage restrictions are handled without breaking the control. Reduced-motion preferences disable smooth scrolling and button movement.

The ResuEase hero image is its existing `apps/app/frontend/public/og-resume.png`, copied from the project source. It is a branded project image, **not an editor screenshot**. The ResuEase case study describes the current browser-side React-PDF/PDF.js pipeline; the live link starts at sign-in. SpotInsight uses the original portfolio screenshot and is explicitly described as a local personal project. No client work, testimonials or performance metrics are implied.

Contact links retain `mailto:David.GuerreroD@protonmail.com`. The origin remains `https://davidguerrero.co`. Nothing in the local redesign deploys or publishes the site.
