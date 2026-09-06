# Portfolio content guide

This project keeps editable content separate from layout code so any LLM—or a person—can update it safely.

## Most common edits

- **Profile links, homepage overview, bio, interests, and grouped skills:** `data/site.ts`
- **Featured projects, case-study content, and additional projects:** `data/projects.ts`
- **Resume list:** `data/resumes.ts`
- **Resume PDF files:** `public/resumes/`
- **Experience timeline:** `data/experience.ts`

## Updating a featured project

In `data/projects.ts`, find the project by its `slug`. The short `problemSummary`, `buildSummary`, and `takeaway` fields power the scannable project card. The longer `overview`, `problem`, `approach`, `implementation`, `results`, and `status` fields power the case study. Add a `github` or `demo` URL only when it has been verified.

The same record automatically powers:

- the homepage project card;
- the Projects page;
- the project detail page;
- page title and description metadata.

For smaller work that should not have a detail page, add entries to `otherProjects` in the same file. Those records appear as compact cards on the Projects page and support a description, status, technologies, and optional external link.

If a project stack is architectural rather than implemented, set `technologyLabel` to a clear label such as `Planned stack`.

## Updating experience or profile links

- Add accomplishment bullets and supporting tools to `data/experience.ts`; use `featured: true` only for roles that belong on the homepage.
- Update résumé, GitHub, LinkedIn, and email destinations once in `profileLinks` inside `data/site.ts`.
- Keep skill groups in `data/site.ts` limited to technologies supported by the résumé, project records, or source repositories.

## Adding resumes

1. Copy a PDF into `public/resumes/`.
2. Add an entry with the exact filename to `data/resumes.ts`.
3. The Resume tab automatically adds a selectable preview and download link for each PDF.

## Prompt for another LLM

> Update only the content files described in CONTENT_GUIDE.md. Preserve their TypeScript shape, avoid changing layout code, and run `npm run build` after editing.
