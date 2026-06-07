# ARM Management Website

Source code for [arm-management.com](https://arm-management.com) — the international business advisory website for ARM Management.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro](https://astro.build) v5 — static site generator |
| Styling | Plain CSS (`src/styles/global.css`) — no framework |
| Fonts | Cormorant Garamond + Inter via Google Fonts |
| Hosting | [Netlify](https://netlify.com) — auto-deploys from GitHub |
| Forms | Netlify Forms (contact page) |
| Analytics | Google Analytics (G-QQTF5Z21P7) |

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:4321
npm run dev

# Build for production (outputs to /dist)
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
/
├── src/
│   ├── layouts/
│   │   └── Base.astro          # Shared header, footer, <head> boilerplate
│   ├── pages/
│   │   ├── index.astro         # Homepage (includes ARM Verify banner)
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── thank-you.astro
│   │   ├── services/
│   │   │   ├── index.astro
│   │   │   ├── transaction-advisory.astro
│   │   │   └── company-formation.astro
│   │   └── regions/
│   │       └── european-union.astro
│   └── styles/
│       └── global.css          # All shared CSS (design tokens, layout, components)
├── public/
│   └── favicon.svg
├── astro.config.mjs
├── netlify.toml
└── package.json
```

## Making Changes with Claude Code

Open a terminal in this folder and run `claude`. Claude Code has full access to all source files.

Examples of things you can ask:
- "Add a new services page for Payroll & HR"
- "Update the homepage hero text"
- "Add a new region page for GCC & Middle East"
- "Change the gold colour to #C4A012"

After making changes, Claude Code will commit and push to GitHub automatically.

## Deployments

**How it works:**
1. Make changes to source files in `src/`
2. Commit and push to the `main` branch on GitHub
3. Netlify detects the push and runs `npm run build`
4. Built files from `/dist` go live at arm-management-site.netlify.app

**Custom domain:**
To connect arm-management.com, go to Netlify → Site settings → Domain management → Add custom domain.

**Netlify site:** [arm-management-site.netlify.app](https://arm-management-site.netlify.app)
**GitHub repo:** [github.com/atarajput1990-maker/arm-management](https://github.com/atarajput1990-maker/arm-management)

## ARM Verify Banner

The homepage (`src/pages/index.astro`) includes a prominent banner linking to [verify.arm-management.com](https://verify.arm-management.com).

The banner is the `.verify-banner` section between the trust-bar stats and the services grid. Its CSS is in `src/styles/global.css` under the `Verify banner` section.

To update the banner text or link, edit `src/pages/index.astro` and search for `verify-banner`.

## Brand

| Token | Value |
|-------|-------|
| Navy | `#0D1B2A` |
| Gold | `#B8960C` |
| Cream | `#F7F3EC` |
| Warm white | `#FDFAF5` |
| Heading font | Cormorant Garamond |
| Body font | Inter |
