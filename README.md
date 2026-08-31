# Portfolio Website

Evan Cillie’s personal portfolio, built with React, TypeScript, Vite/Vinext, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

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
