import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Evan Cillie — Software Engineer',
  description:
    'Software engineer working across application development, cloud systems, data, and real-world problem solving.',
  openGraph: {
    title: 'Evan Cillie — Software Engineer',
    description: 'Software engineer working across data, systems, and real-world curiosity.',
    type: 'website',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Evan Cillie — Software engineer, data, systems and curiosity' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evan Cillie — Software Engineer',
    description: 'Software engineer working across data, systems, and real-world curiosity.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
