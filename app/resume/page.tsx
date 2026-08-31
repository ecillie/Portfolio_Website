import fs from 'node:fs';
import path from 'node:path';
import { PageIntro, SiteFooter, SiteHeader } from '@/components/SiteChrome';
import { resumes } from '@/data/resumes';

export const metadata = { title: 'Resumes — Evan Cillie', description: 'Resume downloads and previews.' };

export default function ResumePage() {
  const availableResumes = resumes.filter((resume) =>
    fs.existsSync(path.join(process.cwd(), 'public', 'resumes', resume.filename)),
  );
  const preview = availableResumes[0];

  return (
    <main>
      <SiteHeader />
      <PageIntro kicker="Resumes" title="Resume library.">
        <p>Add one or more PDF versions here. The page automatically creates downloads and previews the first available file.</p>
      </PageIntro>
      <section className="resume-panel shell">
        <div className="resume-toolbar resume-library">
          <div>
            <span className="status-dot" />
            <strong>{availableResumes.length > 0 ? 'Resume files available' : 'Resume skeleton ready'}</strong>
            <p>{availableResumes.length > 0 ? `${availableResumes.length} PDF file${availableResumes.length === 1 ? '' : 's'}` : 'Drop PDFs into public/resumes/'}</p>
          </div>
          <nav aria-label="Resume downloads">
            {availableResumes.map((resume) => (
              <a className="button button-dark" href={`/resumes/${resume.filename}`} download key={resume.filename}>
                {resume.label} ↓
              </a>
            ))}
          </nav>
        </div>
        {preview ? (
          <iframe className="resume-frame" src={`/resumes/${preview.filename}`} title={`${preview.name} — ${preview.label}`} />
        ) : (
          <div className="resume-placeholder">
            <span>PDF</span>
            <h2>Your resume preview will live here.</h2>
            <p>Add PDFs to <code>public/resumes/</code>, then list each file in <code>data/resumes.ts</code>. No page code needs to change.</p>
          </div>
        )}
      </section>
      <SiteFooter />
    </main>
  );
}
