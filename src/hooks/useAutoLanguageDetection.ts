'use client';

import { useState, useEffect } from 'react';

type Language = 'en' | 'id' | 'ar';

interface LocationData {
  country?: string;
  countryCode?: string;
  timezone?: string;
}

// Mapping negara ke bahasa
const countryToLanguageMap: Record<string, Language> = {
  // Indonesia
  'ID': 'id',
  'Indonesia': 'id',
  
  // Arab countries
  'SA': 'ar', // Saudi Arabia
  'AE': 'ar', // UAE
  'QA': 'ar', // Qatar
  'KW': 'ar', // Kuwait
  'BH': 'ar', // Bahrain
  'OM': 'ar', // Oman
  'JO': 'ar', // Jordan
  'LB': 'ar', // Lebanon
  'SY': 'ar', // Syria
  'IQ': 'ar', // Iraq
  'YE': 'ar', // Yemen
  'EG': 'ar', // Egypt
  'LY': 'ar', // Libya
  'TN': 'ar', // Tunisia
  'DZ': 'ar', // Algeria
  'MA': 'ar', // Morocco
  'SD': 'ar', // Sudan
  'PS': 'ar', // Palestine
  
  // Default to English for other countries
};

export const useAutoLanguageDetection = () => {
  const [detectedLanguage, setDetectedLanguage] = useState<Language>('en');
  const [isDetecting, setIsDetecting] = useState(true);
  const [locationData, setLocationData] = useState<LocationData>({});

  useEffect(() => {
    const detectLanguage = async () => {
      try {
        // Method 1: Try to get location from IP geolocation API
        try {
          const response = await fetch('https://ipapi.co/json/');
          if (response.ok) {
            const data = await response.json();
            const countryCode = data.country_code;
            const country = data.country_name;
            
            setLocationData({
              country: country,
              countryCode: countryCode,
              timezone: data.timezone
            });

            // Map country to language
            const language = countryToLanguageMap[countryCode] || 
                           countryToLanguageMap[country] || 
                           'en';
            
            setDetectedLanguage(language);
            setIsDetecting(false);
            return;
          }
        } catch (error) {
          console.log('IP geolocation failed, trying browser locale');
        }

        // Method 2: Fallback to browser language detection
        const browserLanguage = navigator.language || navigator.languages?.[0] || 'en';
        
        let detectedLang: Language = 'en';
        
        if (browserLanguage.startsWith('id')) {
          detectedLang = 'id';
        } else if (browserLanguage.startsWith('ar')) {
          detectedLang = 'ar';
        } else {
          detectedLang = 'en';
        }

        setDetectedLanguage(detectedLang);
        setLocationData({
          country: 'Unknown (Browser Locale)',
          countryCode: browserLanguage.split('-')[1] || 'Unknown'
        });
        
      } catch (error) {
        console.error('Language detection failed:', error);
        setDetectedLanguage('en'); // Default fallback
      } finally {
        setIsDetecting(false);
      }
    };

    detectLanguage();
  }, []);

  return {
    detectedLanguage,
    isDetecting,
    locationData
  };
};
