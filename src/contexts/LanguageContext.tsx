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
    heroTitle: 'Do you need charcoal?',
    heroSubtitle: 'Our charcoal quality is always trusted.',
    supplierText: 'Trusted Indonesian charcoal supplier',
    // Benefits
    whyUs: 'Why Us?',
    benefit1Title: '01. Fast and precise',
    benefit1Text: 'We will fulfill your charcoal needs with quick response. Our team is very competent, solid, and can communicate well in Indonesian and English.',
    benefit2Title: '02. Low cost',
    benefit2Text: 'We are a charcoal supplier in Indonesia that has nearly 10 charcoal factories, which work with us on the island of Java. The ease of logistics distribution on Java Island can help us speed up delivery of your needs through 3 International Ports, namely Jakarta, Semarang, and Surabaya.',
    benefit3Title: '03. Quality is priority',
    benefit3Text: 'We always prioritize the quality of our charcoal products. Our priority is to select the best raw materials to produce competitive Indonesian charcoal products, both coconut shell charcoal and high-quality briquettes.',
    // Understanding Section
    understandingTitle: 'We understand your charcoal needs',
    understandingText1: 'Indonesia is the world\'s best coconut producer and has many types of hardwood that meet international standards. We can ensure that our charcoal products are processed with the best materials.',
    understandingText2: 'We understand global market needs and standards, and are committed to providing the best service.',
    // About Section
    story: 'Story',
    storyText: 'The initial idea of CocoBlim was to utilize coconut waste and sawdust that are abundant in various regions in Indonesia.',
    vision: 'Vision',
    visionText: 'To become a charcoal supply company that can meet local and global market needs, and prioritize the quality of charcoal products.',
    mission: 'Mission',
    missionText: 'Always quick in responding to client needs and continue to innovate to meet charcoal market needs.',
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
    heroTitle: 'Anda membutuhkan arang?',
    heroSubtitle: 'Kualitas arang kami selalu dapat dipercaya.',
    supplierText: 'CocoBlim - Supplier arang Indonesia yang dapat dipercaya',
    // Benefits
    whyUs: 'Why Us?',
    benefit1Title: '01. Cepat dan tepat',
    benefit1Text: 'Kami akan memenuhi kebutuhan arang anda dengan respon yang cepat. Tim kami sangat kompeten, solid, dan dapat berkomunikasi dengan baik dalam Bahasa Indonesia dan Inggris.',
    benefit2Title: '02. Biaya rendah',
    benefit2Text: 'Kami adalah pemasok arang di Indonesia yang memiliki hampir 10 pabrik arang, yang bekerja sama dengan kami di pulau Jawa. Kemudahan distribusi logistik di Pulau Jawa dapat membantu kami untuk mempercepat pengiriman kebutuhan Anda melalui 3 Pelabuhan Internasional, yaitu Jakarta, Semarang, dan Surabaya.',
    benefit3Title: '03. Kualitas adalah prioritas',
    benefit3Text: 'Kami selalu memprioritaskan kualitas arang kami. Prioritas kami adalah memilih bahan baku terbaik untuk menghasilkan arang Indonesia yang kompetitif, baik arang tempurung kelapa ataupun arang briket berkualitas tinggi.',
    // Understanding Section
    understandingTitle: 'Kami mengerti kebutuhan arang anda',
    understandingText1: 'Indonesia merupakan penghasil kelapa terbaik di dunia dan memiliki banyak jenis kayu keras yang menyamai standar internasional. Kami dapat memastikan bahwa produk arang kami diproses dengan bahan-bahan terbaik.',
    understandingText2: 'Kami memahami kebutuhan dan standard pasar global, dan berkomitmen untuk memberikan layanan terbaik.',
    // About Section
    story: 'Story',
    storyText: 'Ide awal CocoBlim adalah untuk memanfaatkan limbah kelapa dan serbuk gergaji yang melimpah di berbagai daerah di Indonesia.',
    vision: 'Visi',
    visionText: 'Menjadi perusahaan pemasok arang yang mampu memenuhi kebutuhan pasar lokal, dunia, dan mengutamakan kualitas produk-produk arang.',
    mission: 'Misi',
    missionText: 'Selalu cepat dalam merespon kebutuhan klien dan terus berinovasi untuk memenuhi kebutuhan pasar arang.',
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
