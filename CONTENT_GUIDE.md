# Portfolio content guide

This project keeps editable content separate from layout code so any LLM—or a person—can update it safely.

## Most common edits

- **Bio, homepage headline, interests, current focus:** `data/site.ts`
- **Four projects and their detail pages:** `data/projects.ts`
- **Resume list:** `data/resumes.ts`
- **Resume PDF files:** `public/resumes/`
- **Experience timeline:** `data/experience.ts`

## Finishing a project

In `data/projects.ts`, find the project by its `slug` and replace every `TODO` and placeholder summary. Update `status` whenever the project changes. Add technology names to the `technologies` array. Add a `github` or `demo` URL only when one is ready.

The same record automatically powers:

- the homepage project card;
- the Projects page;
- the project detail page;
- page title and social metadata.

For smaller work that should not have a detail page, add entries to `otherProjects` in the same file. Those records appear only as compact cards on the Projects page and support a description, status, technologies, and optional external link.

## Adding resumes

1. Copy a PDF into `public/resumes/`.
2. Add an entry with the exact filename to `data/resumes.ts`.
3. The Resume tab automatically adds a download link and previews the first available PDF.

## Prompt for another LLM

> Update only the content files described in CONTENT_GUIDE.md. Preserve their TypeScript shape, avoid changing layout code, and run `npm run build` after editing.
