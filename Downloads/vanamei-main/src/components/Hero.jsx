import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button
} from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { data, currentLanguage } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundImage: 'url(/image/pexels-shayne-spencer-105105-14887417.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1
        }}
      />
      
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
          py: 4
        }}>
          <Box sx={{ color: 'white', maxWidth: '800px' }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                color: 'white'
              }}
            >
              {data.hero.title}
            </Typography>
            
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 600,
                mb: 4,
                fontSize: { xs: '1.3rem', md: '2rem' },
                color: 'white',
                textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
              }}
            >
              {data.hero.subtitle}
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                mb: 6,
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.6,
                color: 'white',
                maxWidth: '600px',
                mx: 'auto',
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
              }}
            >
              {data.hero.description}
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => scrollToSection('products')}
                sx={{
                  backgroundColor: 'secondary.main',
                  color: 'white',
                  px: 6,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '50px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                  '&:hover': {
                    backgroundColor: 'secondary.dark',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                {currentLanguage === 'id' ? 'Jelajahi Produk' : 'Explore Products'}
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollToSection('contact')}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 6,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '50px',
                  borderWidth: '2px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'white',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(255, 255, 255, 0.2)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                {currentLanguage === 'id' ? 'Hubungi Kami' : 'Contact Me'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero; 