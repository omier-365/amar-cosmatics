import type { Metadata } from 'next';
import { Cairo, Tajawal } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
import IntroWrapper from '@/components/IntroWrapper';
import { SITE_CONFIG } from '@/lib/constants';

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
});

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-tajawal',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} - ${SITE_CONFIG.slogan}`,
  description: SITE_CONFIG.description,
  keywords: ['مستحضرات تجميل', 'عناية بالبشرة', 'عناية بالشعر', 'مكياج', 'منتجات طبيعية', 'العراق'],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    type: 'website',
    locale: 'ar_IQ',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.slogan}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.slogan}`,
    description: SITE_CONFIG.description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${cairo.variable} ${tajawal.variable} font-tajawal bg-softGray`}>
        <IntroWrapper>
          <Analytics />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </IntroWrapper>
      </body>
    </html>
  );
}
