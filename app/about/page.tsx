import Link from 'next/link';
import { PageIntro, SiteFooter, SiteHeader } from '@/components/SiteChrome';
import { siteContent } from '@/data/site';

export const metadata = { title: 'About — Evan Cillie', description: 'Evan Cillie’s background, interests, and approach to engineering.' };

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro kicker="About" title={siteContent.aboutTitle}>
        <p>{siteContent.aboutIntro}</p>
      </PageIntro>
      <section className="about-grid shell">
        <div className="about-statement"><span>01</span><h2>{siteContent.headlineStart} {siteContent.headlineEmphasis} {siteContent.headlineEnd}</h2></div>
        <div className="prose-stack">
          {siteContent.bioParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>
      <section className="interest-band shell">
        {siteContent.interests.map((interest, index) => (
          <div key={interest}><span>0{index + 1}</span><h3>{interest}</h3></div>
        ))}
      </section>
      <section className="next-cta shell"><p className="kicker">Keep exploring</p><h2>See how those interests turn into work.</h2><Link className="button button-dark" href="/projects">View projects <span>→</span></Link></section>
      <SiteFooter />
    </main>
  );
}
