import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Navigation = () => {
  const { data } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    closeMobileMenu();
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-xl fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo Section */}
          <div className="flex items-center group">
            <div className="relative">
              <img 
                src="logo/logo.jpg" 
                alt="Nusa Brikket" 
                className="h-14 w-14 rounded-full object-cover shadow-lg ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="ml-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Nusa Brikket
              </span>
              <p className="text-xs text-gray-500 font-medium">Premium Charcoal</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <button 
              onClick={() => scrollToSection('#home')}
              className="nav-link px-4 py-2 rounded-lg text-primary hover:text-white hover:bg-primary transition-all duration-300 font-medium relative group"
            >
              <span className="relative z-10">{data.nav.home}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('#about')}
              className="nav-link px-4 py-2 rounded-lg text-primary hover:text-white hover:bg-primary transition-all duration-300 font-medium relative group"
            >
              <span className="relative z-10">{data.nav.about}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('#products')}
              className="nav-link px-4 py-2 rounded-lg text-primary hover:text-white hover:bg-primary transition-all duration-300 font-medium relative group"
            >
              <span className="relative z-10">{data.nav.products}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('#gallery')}
              className="nav-link px-4 py-2 rounded-lg text-primary hover:text-white hover:bg-primary transition-all duration-300 font-medium relative group"
            >
              <span className="relative z-10">{data.nav.gallery}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="nav-link px-4 py-2 rounded-lg text-primary hover:text-white hover:bg-primary transition-all duration-300 font-medium relative group"
            >
              <span className="relative z-10">{data.nav.contact}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            {/* Language Toggle */}
            <LanguageToggle />
            
            {/* CTA Button */}
            <button 
              onClick={() => scrollToSection('#contact')}
              className="ml-4 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <i className="ri-phone-line text-sm"></i>
              <span>{data.hero.contactBtn}</span>
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Mobile Language Toggle */}
            <LanguageToggle isMobile={true} />
            
            <button 
              onClick={toggleMobileMenu}
              className="text-primary hover:text-secondary p-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              <i className={`text-2xl ${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 py-6 space-y-3">
            <button 
              onClick={() => scrollToSection('#home')}
              className="w-full text-left px-4 py-3 rounded-lg text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium flex items-center"
            >
              <i className="ri-home-line mr-3"></i>{data.nav.home}
            </button>
            <button 
              onClick={() => scrollToSection('#about')}
              className="w-full text-left px-4 py-3 rounded-lg text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium flex items-center"
            >
              <i className="ri-information-line mr-3"></i>{data.nav.about}
            </button>
            <button 
              onClick={() => scrollToSection('#products')}
              className="w-full text-left px-4 py-3 rounded-lg text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium flex items-center"
            >
              <i className="ri-product-hunt-line mr-3"></i>{data.nav.products}
            </button>
            <button 
              onClick={() => scrollToSection('#gallery')}
              className="w-full text-left px-4 py-3 rounded-lg text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium flex items-center"
            >
              <i className="ri-gallery-line mr-3"></i>{data.nav.gallery}
            </button>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="w-full text-left px-4 py-3 rounded-lg text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium flex items-center"
            >
              <i className="ri-contacts-line mr-3"></i>{data.nav.contact}
            </button>
            <div className="pt-4 border-t border-gray-200">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <i className="ri-phone-line"></i>
                <span>{data.hero.contactBtn}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
