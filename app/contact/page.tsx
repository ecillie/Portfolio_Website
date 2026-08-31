import { PageIntro, SiteFooter, SiteHeader } from '@/components/SiteChrome';

export const metadata = { title: 'Contact — Evan Cillie', description: 'Connect with Evan Cillie.' };

const links = [
  { label: 'LinkedIn', value: 'in/evan-cillie', href: 'https://www.linkedin.com/in/evan-cillie' },
  { label: 'GitHub', value: '@ecillie', href: 'https://github.com/ecillie' },
];

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro kicker="Contact" title="Good ideas start with a conversation.">
        <p>Have a project, an interesting problem, or just want to compare notes on software, aviation, analytics, or hockey? I&apos;d be glad to connect.</p>
      </PageIntro>
      <section className="contact-layout shell">
        <div className="contact-card">
          <p className="kicker">Find me online</p>
          {links.map((link) => <a href={link.href} key={link.label} target="_blank" rel="noreferrer"><span>{link.label}</span><strong>{link.value}</strong><i>↗</i></a>)}
        </div>
        <div className="contact-note"><span className="big-dot" /><h2>Open to thoughtful conversations and ambitious work.</h2><p>LinkedIn is the best place to reach me. I usually reply within a few days.</p></div>
      </section>
      <SiteFooter />
    </main>
  );
}
