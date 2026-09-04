# Portfolio Website

Evan Cillie’s personal portfolio, built with React, TypeScript, Vite, React Router, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Vercel

Use the Vite framework preset, `npm run build`, and the `dist` output directory. `vercel.json` rewrites direct page requests to the single-page app.

## Content updates

See `CONTENT_GUIDE.md`. The short version:

- Homepage and bio copy live in `data/site.ts`.
- The four project records live in `data/projects.ts`.
- Resume entries live in `data/resumes.ts`; PDF files go in `public/resumes/`.
- Experience entries live in `data/experience.ts`.
- Set `NEXT_PUBLIC_SITE_URL` to the final production origin for absolute social metadata URLs.

## Checks

```bash
npm run build
npm run lint
```
