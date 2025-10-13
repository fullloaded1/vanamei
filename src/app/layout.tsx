import type { Metadata } from 'next';
import './globals.css';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import LanguageWrapper from '@/components/LanguageWrapper';
import LanguageDetectionInfo from '@/components/LanguageDetectionInfo';
import { Analytics } from '@vercel/analytics/next';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  metadataBase: new URL('https://cocoblim.com'),
  title: 'CocoBlim - Premium Coconut Charcoal Manufacturer Indonesia | Arang Kelapa Berkualitas',
  description: 'CocoBlim adalah produsen arang kelapa premium di Jakarta. Menyediakan briket shisha, arang kayu keras, tempurung kelapa & sawdust briquette berkualitas tinggi untuk ekspor dan domestik.',
  keywords: 'arang kelapa, coconut charcoal, briket shisha, arang tempurung kelapa, coconut charcoal Indonesia, arang kayu keras, sawdust briquette, coconut charcoal manufacturer, arang kelapa Jakarta, coconut charcoal supplier',
  authors: [{ name: 'CocoBlim' }],
  creator: 'CocoBlim',
  publisher: 'CocoBlim',
  robots: 'index, follow',
  verification: {
    google: 'fvvOtA2-eGnDPHom3t1PN5SwIWX6cC-tPNfy85sTO3Q',
  },
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
  icons: {
    icon: '/images/CocoBlim Logo 1.png',
    shortcut: '/images/CocoBlim Logo 1.png',
    apple: '/images/CocoBlim Logo 1.png',
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
        <meta name="google-site-verification" content="fvvOtA2-eGnDPHom3t1PN5SwIWX6cC-tPNfy85sTO3Q" />
        <link rel="icon" href="/images/CocoBlim Logo 1.png" type="image/png" />
        <link rel="shortcut icon" href="/images/CocoBlim Logo 1.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/CocoBlim Logo 1.png" />
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
          <LanguageDetectionInfo />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
