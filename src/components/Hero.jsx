import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia
} from '@mui/material';
import {
  Star as StarIcon,
  Public as PublicIcon,
  Nature as NatureIcon
} from '@mui/icons-material';

const Hero = ({ languageData }) => {
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: 'url(/image/vanamei-shrimp-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(30, 41, 59, 0.7)',
          zIndex: 1
        }
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ color: 'white', mb: 4 }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' }
                }}
              >
                {languageData.hero.title}
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  color: 'secondary.main'
                }}
              >
                {languageData.hero.subtitle}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  maxWidth: '600px'
                }}
              >
                {languageData.hero.description}
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'secondary.main',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: 'secondary.dark'
                  }
                }}
              >
                {languageData.hero.cta}
              </Button>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Card sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  height: '100%'
                }}>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <StarIcon sx={{ fontSize: 40, color: 'accent.main', mb: 2 }} />
                    <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                      {languageData.hero.features.quality}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <Card sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  height: '100%'
                }}>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <PublicIcon sx={{ fontSize: 40, color: 'secondary.main', mb: 2 }} />
                    <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                      {languageData.hero.features.global}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <Card sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  height: '100%'
                }}>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <NatureIcon sx={{ fontSize: 40, color: 'success.main', mb: 2 }} />
                    <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                      {languageData.hero.features.sustainable}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero; 