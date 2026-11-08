import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import LanguageWrapper from '@/components/LanguageWrapper';
import { Analytics } from '@vercel/analytics/next';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  metadataBase: new URL('https://cocoblim.com'),
  title: 'CocoBlim — Indonesian Activated Carbon Manufacturer & Exporter',
  description: 'CocoBlim manufactures virgin coconut shell activated carbon in Tanjungsari, Bogor, Indonesia. Steam activation for municipal water treatment, gold mining (CIP/CIL), and global export. Iodine 900 - 1200 mg/g.',
  keywords: [
    'activated carbon manufacturer Indonesia',
    'coconut shell activated carbon',
    'karbon aktif Bogor',
    'granular activated carbon GAC',
    'powdered activated carbon PAC',
    'pelletized activated carbon',
    'gold recovery carbon CIP CIL',
    'water treatment activated carbon',
    'FOB activated carbon Tanjung Priok'
  ].join(', '),
  authors: [{ name: 'CocoBlim Activated Carbon' }],
  creator: 'CocoBlim',
  publisher: 'CocoBlim',
  robots: 'index, follow',
  icons: {
    icon: '/images/CocoBlim_logo_baru_-removebg-preview.png',
    shortcut: '/images/CocoBlim_logo_baru_-removebg-preview.png',
    apple: '/images/CocoBlim_logo_baru_-removebg-preview.png',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&family=Figtree:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <StructuredData />
      </head>
      <body className="bg-bg text-ink font-sans antialiased min-h-[100dvh] flex flex-col">
        <LanguageProvider>
          <LanguageWrapper>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </LanguageWrapper>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
