import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteFooter, SiteHeader } from '@/components/SiteChrome';
import { getProject, projects } from '@/data/projects';

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return { title: 'Project not found — Evan Cillie' };
  return {
    title: `${project.title} — Evan Cillie`, description: project.shortDescription,
    openGraph: { title: `${project.title} — Evan Cillie`, description: project.shortDescription, images: [] },
    twitter: { card: 'summary', title: `${project.title} — Evan Cillie`, description: project.shortDescription, images: [] },
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return (
    <main>
      <SiteHeader />
      <section className="case-hero shell fade-up">
        <Link className="back-link" href="/projects">← All projects</Link>
        <p className="kicker">Case study {project.number}</p>
        <h1>{project.title}</h1>
        <p className="case-summary">{project.shortDescription}</p>
        {project.technologies.length > 0 && <ul className="case-tags">{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>}
      </section>
      <div className={`case-visual ${project.accent}`}><span>{project.number}</span><div className="case-chart"><i /><i /><i /><i /><i /><i /></div></div>
      <section className="case-body shell">
        <aside><p className="kicker">Project story</p>{project.github && <a className="button button-dark" href={project.github} target="_blank" rel="noreferrer">View GitHub ↗</a>}</aside>
        <div>
          {[['Current status', project.status], ['Overview', project.overview], ['The problem', project.problem], ['The approach', project.approach], ['The result', project.results]].map(([heading, copy]) => (
            <section key={heading}><h2>{heading}</h2><p>{copy}</p></section>
          ))}
        </div>
      </section>
      <nav className="case-next shell"><p className="kicker">Next up</p><Link href="/projects">Explore every project <span>→</span></Link></nav>
      <SiteFooter />
    </main>
  );
}
