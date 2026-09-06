import { useEffect, useState, type ReactNode } from 'react';
import { Link, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { experience } from '@/data/experience';
import { otherProjects, projects, type Project } from '@/data/projects';
import { resumes } from '@/data/resumes';
import { siteContent } from '@/data/site';

function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="Evan Cillie, home">EC<span>.</span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link to="/about">About</Link><Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link><Link to="/resume">Resume</Link>
      </nav>
      <Link className="nav-contact" to="/contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation">
          <Link to="/about">About</Link><Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link><Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </details>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <p>© {new Date().getFullYear()} Evan Cillie</p>
      <div>
        <a href="https://github.com/ecillie" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/evan-cillie" target="_blank" rel="noreferrer">LinkedIn ↗</a>
      </div>
    </footer>
  );
}

function PageIntro({ kicker, title, children }: { kicker: string; title: string; children: ReactNode }) {
  return <section className="page-intro shell fade-up"><p className="kicker">{kicker}</p><h1>{title}</h1><div className="page-lede">{children}</div></section>;
}

function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <div className={`${large ? 'case-visual' : 'project-visual'} ${project.accent}`}>
      <span>{project.number}</span>
      <div className={large ? 'case-chart' : 'data-lines'} aria-hidden="true"><i /><i /><i /><i /><i />{large && <i />}</div>
    </div>
  );
}

function PageFrame({ children }: { children: ReactNode }) {
  return <main><SiteHeader />{children}<SiteFooter /></main>;
}

function HomePage() {
  return (
    <PageFrame>
      <section className="hero shell">
        <div className="eyebrow fade-up"><span className="status-dot" />{siteContent.eyebrow}</div>
        <h1 className="hero-title fade-up delay-1">{siteContent.headlineStart} <em>{siteContent.headlineEmphasis}</em> {siteContent.headlineEnd}</h1>
        <div className="hero-bottom fade-up delay-2">
          <p>{siteContent.shortBio}</p>
          <div className="hero-actions"><Link className="button button-dark" to="/projects">Explore my work <span>→</span></Link><Link className="text-link" to="/about">More about me ↗</Link></div>
        </div>
        <div className="orbit-art" aria-hidden="true"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="orbit-core">EC</span><span className="orbit-label label-build">BUILD</span><span className="orbit-label label-learn">LEARN</span><span className="orbit-label label-repeat">REPEAT</span></div>
      </section>
      <section className="marquee" aria-label="Areas of interest"><div><span>SOFTWARE ENGINEERING</span><i>✦</i><span>DATA &amp; ANALYTICS</span><i>✦</i><span>AVIATION</span><i>✦</i><span>HOCKEY</span><i>✦</i><span>CLOUD SYSTEMS</span><i>✦</i></div></section>
      <section className="work-section shell">
        <div className="section-heading"><div><p className="kicker">Selected work</p><h2>Projects with a point of view.</h2></div><Link className="text-link" to="/projects">View all projects →</Link></div>
        <div className="project-grid">{projects.map((project) => <Link className="project-card" to={`/projects/${project.slug}`} key={project.slug}><ProjectVisual project={project} /><div className="project-copy"><h3>{project.title}</h3><span className="project-arrow">↗</span><p>{project.shortDescription}</p>{project.technologies.length > 0 && <ul>{project.technologies.map((tag) => <li key={tag}>{tag}</li>)}</ul>}</div></Link>)}</div>
      </section>
      <section className="currently shell"><p className="kicker">Currently</p><div className="currently-grid"><h2>{siteContent.currentTitle}</h2><p>{siteContent.currentText}</p><Link className="round-link" to="/experience" aria-label="View experience">↗</Link></div></section>
    </PageFrame>
  );
}

function AboutPage() {
  return (
    <PageFrame>
      <PageIntro kicker="About" title={siteContent.aboutTitle}><p>{siteContent.aboutIntro}</p></PageIntro>
      <section className="about-grid shell"><div className="about-statement"><span>01</span><h2>{siteContent.headlineStart} {siteContent.headlineEmphasis} {siteContent.headlineEnd}</h2></div><div className="prose-stack">{siteContent.bioParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>
      <section className="interest-band shell">{siteContent.interests.map((interest, index) => <div key={interest}><span>0{index + 1}</span><h3>{interest}</h3></div>)}</section>
      <section className="next-cta shell"><p className="kicker">Keep exploring</p><h2>See how those interests turn into work.</h2><Link className="button button-dark" to="/projects">View projects <span>→</span></Link></section>
    </PageFrame>
  );
}

function ProjectsPage() {
  return (
    <PageFrame>
      <PageIntro kicker="Projects" title="Work built to answer real questions."><p>A growing collection of software, research, and data work—with the thinking and current progress behind each project.</p></PageIntro>
      <section className="projects-list shell">{projects.map((project) => <article className="project-row" key={project.slug}><Link to={`/projects/${project.slug}`} aria-label={`View ${project.title} case study`}><ProjectVisual project={project} /></Link><div className="project-row-copy"><p className="kicker">Case study {project.number}</p><h2><Link to={`/projects/${project.slug}`}>{project.title}</Link></h2><p>{project.shortDescription}</p><p className="project-status"><span>Current status</span>{project.status}</p>{project.technologies.length > 0 && <ul>{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>}<div className="project-links"><Link className="text-link" to={`/projects/${project.slug}`}>Read case study →</Link>{project.github && <a className="text-link" href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>}</div></div></article>)}</section>
      <section className="other-projects shell">
        <div className="section-heading"><div><p className="kicker">Other projects</p><h2>More things I&apos;ve worked on.</h2></div><p className="section-note">Smaller experiments, collaborations, and work that does not need a dedicated page.</p></div>
        <div className="other-project-grid">{otherProjects.map((project, index) => {
          const content = <><span className="other-number">{String(index + 1).padStart(2, '0')}</span><h3>{project.title}</h3><p>{project.description}</p><div className="other-status"><span>Status</span><strong>{project.status}</strong></div>{project.technologies.length > 0 && <ul>{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>}{project.link && <span className="other-arrow">↗</span>}</>;
          return project.link ? <a className="other-project-card" href={project.link} target="_blank" rel="noreferrer" key={`${project.title}-${index}`}>{content}</a> : <article className="other-project-card" key={`${project.title}-${index}`}>{content}</article>;
        })}</div>
      </section>
    </PageFrame>
  );
}

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <Navigate to="/404" replace />;
  return (
    <PageFrame>
      <section className="case-hero shell fade-up"><Link className="back-link" to="/projects">← All projects</Link><p className="kicker">Case study {project.number}</p><h1>{project.title}</h1><p className="case-summary">{project.shortDescription}</p>{project.technologies.length > 0 && <ul className="case-tags">{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>}</section>
      <ProjectVisual project={project} large />
      <section className="case-body shell"><aside><p className="kicker">Project story</p>{project.github && <a className="button button-dark" href={project.github} target="_blank" rel="noreferrer">View GitHub ↗</a>}</aside><div>{[['Current status', project.status], ['Overview', project.overview], ['The problem', project.problem], ['The approach', project.approach], ['The result', project.results]].map(([heading, copy]) => <section key={heading}><h2>{heading}</h2><p>{copy}</p></section>)}</div></section>
      <nav className="case-next shell"><p className="kicker">Next up</p><Link to="/projects">Explore every project <span>→</span></Link></nav>
    </PageFrame>
  );
}

function ExperiencePage() {
  return (
    <PageFrame>
      <PageIntro kicker="Experience" title="Growing through real responsibility."><p>Engineering roles, academic work, and team environments that have shaped how I solve problems and contribute.</p></PageIntro>
      <section className="timeline shell">{experience.map((item, index) => <article className="timeline-item" key={item.role}><span className="timeline-number">0{index + 1}</span><p className="timeline-period">{item.period}</p><div><h2>{item.role}</h2><p className="organization">{item.organization}</p><p className="timeline-description">{item.description}</p></div></article>)}</section>
      <section className="principles shell"><p className="kicker">What I bring</p><div>{['Systems thinking', 'Clear communication', 'Operational detail'].map((item, index) => <article key={item}><span>0{index + 1}</span><h3>{item}</h3></article>)}</div></section>
    </PageFrame>
  );
}

function ResumePage() {
  const [selectedFilename, setSelectedFilename] = useState(resumes[0]?.filename);
  const preview = resumes.find((resume) => resume.filename === selectedFilename) ?? resumes[0];
  return (
    <PageFrame>
      <PageIntro kicker="Resumes" title="Resume library."><p>Download the resume that best matches the opportunity or preview it directly below.</p></PageIntro>
      <section className="resume-panel shell"><div className="resume-toolbar resume-library"><div><span className="status-dot" /><strong>Resume files available</strong><p>{resumes.length} PDF file{resumes.length === 1 ? '' : 's'}</p></div><nav className="resume-options" aria-label="Choose a resume to preview">{resumes.map((resume) => <div className="resume-option" key={resume.filename}><button className={`button resume-select ${preview?.filename === resume.filename ? 'is-selected' : ''}`} type="button" aria-pressed={preview?.filename === resume.filename} onClick={() => setSelectedFilename(resume.filename)}>{resume.label}<span aria-hidden="true">↗</span></button><a className="resume-download" href={`/resumes/${resume.filename}`} download aria-label={`Download ${resume.label}`}>↓</a></div>)}</nav></div>{preview && <iframe className="resume-frame" src={`/resumes/${preview.filename}`} title={`${preview.name} — ${preview.label}`} />}</section>
    </PageFrame>
  );
}

function ContactPage() {
  const links = [{ label: 'LinkedIn', value: 'in/evan-cillie', href: 'https://www.linkedin.com/in/evan-cillie' }, { label: 'GitHub', value: '@ecillie', href: 'https://github.com/ecillie' }];
  return (
    <PageFrame><PageIntro kicker="Contact" title="Good ideas start with a conversation."><p>Have a project, an interesting problem, or want to compare notes on software, aviation, analytics, or hockey? I&apos;d be glad to connect.</p></PageIntro><section className="contact-layout shell"><div className="contact-card"><p className="kicker">Find me online</p>{links.map((link) => <a href={link.href} key={link.label} target="_blank" rel="noreferrer"><span>{link.label}</span><strong>{link.value}</strong><i>↗</i></a>)}</div><div className="contact-note"><span className="big-dot" /><h2>Open to thoughtful conversations and ambitious work.</h2><p>LinkedIn is the best place to reach me. I will normally respond within 24 hours!</p></div></section></PageFrame>
  );
}

function NotFoundPage() {
  return <PageFrame><section className="not-found shell"><p className="kicker">404</p><h1>That page left the map.</h1><p>The link may be out of date, but the rest of the site is right where you left it.</p><Link className="button button-dark" to="/">Back home →</Link></section></PageFrame>;
}

function RouteEffects() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const project = projects.find((item) => location.pathname === `/projects/${item.slug}`);
    const labels: Record<string, string> = { '/': 'Evan Cillie — Software Engineer', '/about': 'About — Evan Cillie', '/projects': 'Projects — Evan Cillie', '/experience': 'Experience — Evan Cillie', '/resume': 'Resumes — Evan Cillie', '/contact': 'Contact — Evan Cillie' };
    document.title = project ? `${project.title} — Evan Cillie` : labels[location.pathname] ?? 'Page not found — Evan Cillie';
  }, [location.pathname]);
  return null;
}

export default function App() {
  return <><RouteEffects /><Routes><Route path="/" element={<HomePage />} /><Route path="/about" element={<AboutPage />} /><Route path="/projects" element={<ProjectsPage />} /><Route path="/projects/:slug" element={<ProjectPage />} /><Route path="/experience" element={<ExperiencePage />} /><Route path="/resume" element={<ResumePage />} /><Route path="/contact" element={<ContactPage />} /><Route path="*" element={<NotFoundPage />} /></Routes></>;
}
