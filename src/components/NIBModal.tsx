'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface NIBModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NIBModal: React.FC<NIBModalProps> = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const nibPages = [
    '/file/NIB_page-0001.jpg',
    '/file/NIB_page-0002.jpg',
    '/file/NIB_page-0003.jpg'
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">NIB Certificate - Page {currentPage + 1} of {nibPages.length}</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        
        <div className="p-4">
          <div className="relative w-full h-[70vh] mb-4">
            <Image
              src={nibPages[currentPage]}
              alt={`NIB Certificate Page ${currentPage + 1}`}
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-lg"
            />
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-emerald-700 transition-colors"
            >
              Previous
            </button>
            
            <div className="flex space-x-2">
              {nibPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentPage ? 'bg-emerald-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(Math.min(nibPages.length - 1, currentPage + 1))}
              disabled={currentPage === nibPages.length - 1}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-emerald-700 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NIBModal;
