import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { LanguageProvider } from './contexts/LanguageContext';

// Import components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e293b',
    },
    secondary: {
      main: '#3b82f6',
    },
    accent: {
      main: '#f59e0b',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

const MainApp = () => {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ width: '100%' }}>
          <Navigation />
          
          {/* Hero Section */}
          <Box id="home">
            <Hero />
          </Box>
          
          {/* About Section */}
          <Box id="about">
            <About />
          </Box>
          
          {/* Products Section */}
          <Box id="products">
            <Products />
          </Box>
          
          {/* Gallery Section */}
          <Box id="gallery">
            <Gallery />
          </Box>
          
          {/* Contact Section */}
          <Box id="contact">
            <Contact />
          </Box>
          
          {/* Footer */}
          <Footer />
        </Box>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default MainApp;
