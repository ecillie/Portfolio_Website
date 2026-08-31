import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Evan Cillie, home">EC<span>.</span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/resume">Resume</Link>
      </nav>
      <Link className="nav-contact" href="/contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation">
          <Link href="/about">About</Link><Link href="/projects">Projects</Link>
          <Link href="/experience">Experience</Link><Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </details>
    </header>
  );
}

export function SiteFooter() {
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

export function PageIntro({ kicker, title, children }: { kicker: string; title: string; children: React.ReactNode }) {
  return (
    <section className="page-intro shell fade-up">
      <p className="kicker">{kicker}</p>
      <h1>{title}</h1>
      <div className="page-lede">{children}</div>
    </section>
  );
}
