'use client';

import React from 'react';
import { useAutoLanguageDetection } from '../hooks/useAutoLanguageDetection';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageDetectionInfo: React.FC = () => {
  const { detectedLanguage, isDetecting, locationData } = useAutoLanguageDetection();
  const { language } = useLanguage();

  // Only show in development mode
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs max-w-xs z-50">
      <div className="font-semibold mb-2">Language Detection Info</div>
      <div className="space-y-1">
        <div>Current: <span className="font-mono">{language}</span></div>
        <div>Detected: <span className="font-mono">{detectedLanguage}</span></div>
        <div>Status: <span className="font-mono">{isDetecting ? 'Detecting...' : 'Done'}</span></div>
        {locationData.country && (
          <div>Country: <span className="font-mono">{locationData.country}</span></div>
        )}
        {locationData.countryCode && (
          <div>Code: <span className="font-mono">{locationData.countryCode}</span></div>
        )}
      </div>
    </div>
  );
};

export default LanguageDetectionInfo;
