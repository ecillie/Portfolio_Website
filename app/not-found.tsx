import Link from 'next/link';
import { SiteFooter, SiteHeader } from '@/components/SiteChrome';

export default function NotFound() {
  return <main><SiteHeader /><section className="not-found shell"><p className="kicker">404</p><h1>That page left the map.</h1><p>The link may be out of date, but the rest of the site is right where you left it.</p><Link className="button button-dark" href="/">Back home →</Link></section><SiteFooter /></main>;
}
