# personal site

Personal portfolio with bio, experience, projects, and education.

Live at [afrancojc.vercel.app](https://afrancojc.vercel.app) *(or your domain here)*

## Stack

- Astro v6
- Tailwind CSS
- TypeScript

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview   # optional: preview production output
```

Output is in `dist/`.

## Edit content

All page content lives directly in `src/pages/`:

- `index.astro` — homepage card (bio, now/next/edu/life scenes)
- `projects.astro` — projects list
- `blog.astro` — blog (coming soon)

Global styles are in `src/styles/global.css`. Layout, header, footer, and theme toggle are in `src/layouts/Layout.astro`.

## Deploy

Configured for Vercel: build command `npm run build`, output directory `dist`.

## About

Built from scratch — no template. Design inspired by [patrickyoussef.com](https://patrickyoussef.com) and [locbuilds.tech](https://locbuilds.tech).
