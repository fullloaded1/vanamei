import type { Metadata } from 'next';
import './globals.css';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import LanguageWrapper from '@/components/LanguageWrapper';
import { Analytics } from '@vercel/analytics/next';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'CocoBlim - Premium Coconut Charcoal Manufacturer Indonesia | Arang Kelapa Berkualitas',
  description: 'CocoBlim adalah produsen arang kelapa premium di Jakarta. Menyediakan briket shisha, arang kayu keras, tempurung kelapa & sawdust briquette berkualitas tinggi untuk ekspor dan domestik.',
  keywords: 'arang kelapa, coconut charcoal, briket shisha, arang tempurung kelapa, coconut charcoal Indonesia, arang kayu keras, sawdust briquette, coconut charcoal manufacturer, arang kelapa Jakarta, coconut charcoal supplier',
  authors: [{ name: 'CocoBlim' }],
  creator: 'CocoBlim',
  publisher: 'CocoBlim',
  robots: 'index, follow',
  openGraph: {
    title: 'CocoBlim - Premium Coconut Charcoal Manufacturer Indonesia',
    description: 'Produsen arang kelapa premium di Jakarta. Briket shisha, arang kayu keras, tempurung kelapa berkualitas tinggi.',
    url: 'https://cocoblim.com',
    siteName: 'CocoBlim',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/images/hero%20gambar.jpg',
        width: 1200,
        height: 630,
        alt: 'CocoBlim - Premium Coconut Charcoal Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CocoBlim - Premium Coconut Charcoal Manufacturer',
    description: 'Produsen arang kelapa premium di Jakarta. Briket shisha, arang kayu keras, tempurung kelapa berkualitas tinggi.',
    images: ['/images/hero%20gambar.jpg'],
  },
  alternates: {
    canonical: 'https://cocoblim.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="font-sans">
        <LanguageProvider>
          <LanguageWrapper>
            <SmoothScrollProvider>
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
              </div>
            </SmoothScrollProvider>
          </LanguageWrapper>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
