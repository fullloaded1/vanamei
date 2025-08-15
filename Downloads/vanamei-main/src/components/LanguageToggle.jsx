import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = ({ isMobile = false }) => {
  const { currentLanguage, setLanguage, isIndonesian, isEnglish } = useLanguage();

  const handleLanguageChange = (language) => {
    setLanguage(language);
  };

  if (isMobile) {
    return (
      <div className="language-toggle flex items-center space-x-1 px-2 py-1 bg-gray-50 rounded-full">
        <span 
          className={`text-lg cursor-pointer transition-all duration-200 ${
            isIndonesian 
              ? 'flag-active opacity-100 scale-105' 
              : 'flag-inactive opacity-50 grayscale hover:opacity-75'
          }`}
          onClick={() => handleLanguageChange('id')}
          title={isIndonesian ? "Bahasa Indonesia (Aktif)" : "Bahasa Indonesia (Klik untuk beralih)"}
        >
          🇮🇩
        </span>
        <span 
          className={`text-lg cursor-pointer transition-all duration-200 ${
            isEnglish 
              ? 'flag-active opacity-100 scale-105' 
              : 'flag-inactive opacity-50 grayscale hover:opacity-75'
          }`}
          onClick={() => handleLanguageChange('en')}
          title={isEnglish ? "English (Active)" : "English (Click to switch)"}
        >
          🇺🇸
        </span>
      </div>
    );
  }

  return (
    <div className="language-toggle flex items-center space-x-2 ml-6 px-3 py-2 bg-gray-50 rounded-full border border-gray-200 hover:border-primary/30 transition-all duration-300">
      <span 
        className={`text-2xl cursor-pointer hover:scale-110 transition-transform duration-200 ${
          isIndonesian 
            ? 'flag-active opacity-100 filter-none scale-105' 
            : 'flag-inactive opacity-50 grayscale hover:opacity-75'
        }`}
        onClick={() => handleLanguageChange('id')}
        title={isIndonesian ? "Bahasa Indonesia (Aktif)" : "Bahasa Indonesia (Klik untuk beralih)"}
      >
        🇮🇩
      </span>
      <div className="w-px h-4 bg-gray-300"></div>
      <span 
        className={`text-2xl cursor-pointer hover:scale-110 transition-transform duration-200 ${
          isEnglish 
            ? 'flag-active opacity-100 filter-none scale-105' 
            : 'flag-inactive opacity-50 grayscale hover:opacity-75'
        }`}
        onClick={() => handleLanguageChange('en')}
        title={isEnglish ? "English (Active)" : "English (Click to switch)"}
      >
        🇺🇸
      </span>
    </div>
  );
};

export default LanguageToggle;
