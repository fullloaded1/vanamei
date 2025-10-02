'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navbar
    home: 'Home',
    about: 'About',
    product: 'Product',
    media: 'Media',
    blog: 'Blog',
    glossary: 'Glossary',
    getSample: 'Get Sample',
    // Hero
    heroTitle: 'Do you need coconut products?',
    heroSubtitle: 'Our product quality is always trusted.',
    supplierText: 'CocoBlim - Trusted Indonesian coconut supplier',
    // Benefits
    benefit1Title: '01. Fast and precise',
    benefit1Text: 'We will fulfill your coconut product needs with quick response. Our team is very competent, solid, and can communicate well in Indonesian, Japanese, and English.',
    benefit2Title: '02. Low cost',
    benefit2Text: 'We are a coconut product supplier in Indonesia that has nearly 10 coconut factories, which work with us on the island of Java. The ease of logistics distribution on Java Island can help us speed up delivery of your needs through 3 International Ports, namely Jakarta, Semarang, and Surabaya. Thus we can minimize local logistics distribution costs.',
    benefit3Title: '03. Quality is priority',
    benefit3Text: 'We always prioritize the quality of our coconut products. Our priority is to select the best raw materials to produce competitive Indonesian coconut products, both natural coconuts and processed coconut products.',
  },
  id: {
    // Navbar
    home: 'Beranda',
    about: 'Tentang',
    product: 'Produk',
    media: 'Media',
    blog: 'Blog',
    glossary: 'Glosarium',
    getSample: 'Dapatkan Sampel',
    // Hero
    heroTitle: 'Anda membutuhkan produk kelapa?',
    heroSubtitle: 'Kualitas produk kami selalu dipercaya.',
    supplierText: 'CocoBlim - Supplier produk kelapa Indonesia yang dapat dipercaya',
    // Benefits
    benefit1Title: '01. Cepat dan tepat',
    benefit1Text: 'Kami akan memenuhi kebutuhan arang anda dengan respon yang cepat. Tim kami sangat kompeten, solid, dan dapat berkomunikasi dengan baik dalam Bahasa Indonesia dan Inggris.',
    benefit2Title: '02. Biaya rendah',
    benefit2Text: 'Kami adalah pemasok arang di Indonesia yang memiliki hampir 10 pabrik arang, yang bekerja sama dengan kami di pulau Jawa. Kemudahan distribusi logistik di Pulau Jawa dapat membantu kami untuk mempercepat pengiriman kebutuhan Anda melalui 3 Pelabuhan Internasional, yaitu Jakarta, Semarang, dan Surabaya.',
    benefit3Title: '03. Kualitas adalah prioritas',
    benefit3Text: 'Kami selalu memprioritaskan kualitas arang kami. Prioritas kami adalah memilih bahan baku terbaik untuk menghasilkan arang Indonesia yang kompetitif, baik arang tempurung kelapa ataupun arang briket berkualitas tinggi.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translation = translations[language]?.[key as keyof typeof translations[typeof language]];
    return translation || translations.en[key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
