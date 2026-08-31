import { PageIntro, SiteFooter, SiteHeader } from '@/components/SiteChrome';
import { experience } from '@/data/experience';

export const metadata = { title: 'Experience — Evan Cillie', description: 'Software engineering, education, and team experience.' };

export default function ExperiencePage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro kicker="Experience" title="Growing through real responsibility.">
        <p>Engineering roles, academic work, and team environments that have shaped how I solve problems and contribute.</p>
      </PageIntro>
      <section className="timeline shell">
        {experience.map((item, index) => (
          <article className="timeline-item" key={item.role}>
            <span className="timeline-number">0{index + 1}</span>
            <p className="timeline-period">{item.period}</p>
            <div><h2>{item.role}</h2><p className="organization">{item.organization}</p><p className="timeline-description">{item.description}</p></div>
          </article>
        ))}
      </section>
      <section className="principles shell">
        <p className="kicker">What I bring</p>
        <div>{['Systems thinking', 'Clear communication', 'Operational detail'].map((item, index) => <article key={item}><span>0{index + 1}</span><h3>{item}</h3></article>)}</div>
      </section>
      <SiteFooter />
    </main>
  );
}
