'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

interface LanguageWrapperProps {
  children: React.ReactNode;
}

export default function LanguageWrapper({ children }: LanguageWrapperProps) {
  const { language } = useLanguage();

  useEffect(() => {
    // Update document direction and language
    const htmlElement = document.documentElement;
    
    if (language === 'ar') {
      htmlElement.setAttribute('dir', 'rtl');
      htmlElement.setAttribute('lang', 'ar');
      htmlElement.classList.add('arabic-text');
    } else {
      htmlElement.setAttribute('dir', 'ltr');
      htmlElement.setAttribute('lang', language);
      htmlElement.classList.remove('arabic-text');
    }
  }, [language]);

  return <>{children}</>;
}
