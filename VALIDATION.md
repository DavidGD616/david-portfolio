# Redesign validation

## Dependency migration

Registry stable versions installed: Astro 7.3.8 (from 5.x), @astrojs/sitemap 3.7.4, Inter variable 5.3.0, Tailwind and @tailwindcss/vite 4.3.3. astro-robots-txt remains 1.0.0, its current stable release. Added @astrojs/check 0.9.10 and TypeScript 6.0.3 for type checking. TypeScript 7 is outside the checker's supported peer range, so the latest compatible 6.x release is used. Node minimum is now 22.12.

Compatible `npm update` unified Vite at 8.3.4 and removed initially stale Vite/Rollup audit findings. No forced audit fixes or peer dependency bypasses were used. Clean `npm ci` reproduced the installation with zero reported vulnerabilities.

## Browser QA

Local browser checks at 1280px desktop, 390px mobile and 320px narrow mobile found no horizontal overflow. Reviewed dark and light hero layouts and narrow mobile contact section. Native select changed the theme through keyboard Home/ArrowDown/Tab interactions; System selection persisted after reload and resolved to the machine's dark preference. Computed light background is #f7f7ff and accent #1dd05d; dark palette remains #0a192f / #62fbd8.

Work and Contact navigation reached their page sections. Every internal anchor resolves to an existing ID. All four rendered email links retain the Protonmail destination; no mail client or message submission was triggered. All three images loaded as their lazy-load sections entered view. The H1 is static rendered HTML.

Screenshots are saved outside the checkout in `../qa/`: desktop-hero.jpg, desktop-light.jpg (full page), mobile-dark.jpg (full page).

## Limits

No separate lint/unit-test tooling exists in this repository; Astro check and production build are the applicable automated checks. No authentication, PDF export, or message submission was attempted on external projects. ResuEase details were verified against its current source, including useResumePdf and ResumePdfViewer. SpotInsight content follows the existing portfolio description; its live functionality was not independently tested. No push, PR, deploy or publication was performed.
