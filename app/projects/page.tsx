import Link from 'next/link';
import { PageIntro, SiteFooter, SiteHeader } from '@/components/SiteChrome';
import { otherProjects, projects } from '@/data/projects';

export const metadata = { title: 'Projects — Evan Cillie', description: 'Selected software engineering and analytics work by Evan Cillie.' };

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro kicker="Projects" title="Work built to answer real questions.">
        <p>A growing collection of software, research, and data work. Each project is less about the stack alone and more about the thinking behind it.</p>
      </PageIntro>
      <section className="projects-list shell">
        {projects.map((project) => (
          <article className="project-row" key={project.slug}>
            <Link className={`project-visual ${project.accent}`} href={`/projects/${project.slug}`}>
              <span>{project.number}</span><div className="data-lines" aria-hidden="true"><i /><i /><i /><i /><i /></div>
            </Link>
            <div className="project-row-copy">
              <p className="kicker">Case study {project.number}</p>
              <h2><Link href={`/projects/${project.slug}`}>{project.title}</Link></h2>
              <p>{project.shortDescription}</p>
              <p className="project-status"><span>Current status</span>{project.status}</p>
              {project.technologies.length > 0 && <ul>{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>}
              <div className="project-links">
                <Link className="text-link" href={`/projects/${project.slug}`}>Read case study →</Link>
                {project.github && <a className="text-link" href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
              </div>
            </div>
          </article>
        ))}
      </section>
      <section className="other-projects shell">
        <div className="section-heading">
          <div><p className="kicker">Other projects</p><h2>More things I&apos;ve worked on.</h2></div>
          <p className="section-note">Smaller experiments, collaborations, and work that does not need a dedicated page.</p>
        </div>
        <div className="other-project-grid">
          {otherProjects.map((project, index) => {
            const content = <>
              <span className="other-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="other-status"><span>Status</span><strong>{project.status}</strong></div>
              {project.technologies.length > 0 && <ul>{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>}
              {project.link && <span className="other-arrow" aria-hidden="true">↗</span>}
            </>;
            return project.link ? <a className="other-project-card" href={project.link} target="_blank" rel="noreferrer" key={`${project.title}-${index}`}>{content}</a> : <article className="other-project-card" key={`${project.title}-${index}`}>{content}</article>;
          })}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
