import React, { createContext, useContext, useState, useEffect } from 'react';

// Import language data
import { languageData } from '../data/languageData.js';

// Create Language Context
const LanguageContext = createContext();

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  // Get initial language from localStorage or default to 'id'
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'id';
    }
    return 'id';
  });

  // Get current language data
  const data = languageData[currentLanguage] || languageData.id;

  // Function to toggle language
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'id' ? 'en' : 'id';
    setCurrentLanguage(newLanguage);
  };

  // Function to set specific language
  const setLanguage = (language) => {
    if (languageData[language]) {
      setCurrentLanguage(language);
    }
  };

  // Save language to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', currentLanguage);
    }
  }, [currentLanguage]);

  const value = {
    currentLanguage,
    data,
    toggleLanguage,
    setLanguage,
    isIndonesian: currentLanguage === 'id',
    isEnglish: currentLanguage === 'en'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
