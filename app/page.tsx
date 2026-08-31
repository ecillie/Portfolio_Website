import Link from 'next/link';
import { SiteFooter, SiteHeader } from '@/components/SiteChrome';
import { projects } from '@/data/projects';
import { siteContent } from '@/data/site';

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero shell">
        <div className="eyebrow fade-up">
          <span className="status-dot" />
          {siteContent.eyebrow}
        </div>
        <h1 className="hero-title fade-up delay-1">
          {siteContent.headlineStart} <em>{siteContent.headlineEmphasis}</em>{' '}
          {siteContent.headlineEnd}
        </h1>
        <div className="hero-bottom fade-up delay-2">
          <p>{siteContent.shortBio}</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/projects">
              Explore my work <span aria-hidden="true">→</span>
            </Link>
            <Link className="text-link" href="/about">
              More about me <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className="orbit-art" aria-hidden="true">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="orbit-core">EC</span>
          <span className="orbit-label label-build">BUILD</span>
          <span className="orbit-label label-learn">LEARN</span>
          <span className="orbit-label label-repeat">REPEAT</span>
        </div>
      </section>

      <section className="marquee" aria-label="Areas of interest">
        <div>
          <span>SOFTWARE ENGINEERING</span><i>✦</i>
          <span>DATA &amp; ANALYTICS</span><i>✦</i>
          <span>AVIATION</span><i>✦</i>
          <span>HOCKEY</span><i>✦</i>
          <span>CLOUD SYSTEMS</span><i>✦</i>
        </div>
      </section>

      <section className="work-section shell">
        <div className="section-heading">
          <div>
            <p className="kicker">Selected work</p>
            <h2>Projects with a point of view.</h2>
          </div>
          <Link className="text-link" href="/projects">
            View all projects <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <Link className="project-card" href={`/projects/${project.slug}`} key={project.title}>
              <div className={`project-visual ${project.accent}`}>
                <span>{project.number}</span>
                <div className="data-lines" aria-hidden="true">
                  <i /><i /><i /><i /><i />
                </div>
              </div>
              <div className="project-copy">
                <h3>{project.title}</h3>
                <span className="project-arrow" aria-hidden="true">↗</span>
                <p>{project.shortDescription}</p>
                {project.technologies.length > 0 && <ul>
                  {project.technologies.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="currently shell">
        <p className="kicker">Currently</p>
        <div className="currently-grid">
          <h2>{siteContent.currentTitle}</h2>
          <p>{siteContent.currentText}</p>
          <Link className="round-link" href="/experience" aria-label="View experience">↗</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
