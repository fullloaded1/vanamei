import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Divider
} from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery = () => {
  const { data, currentLanguage } = useLanguage();
  
  const galleryImages = [
    {
      image: '/image/galeri1.jpg',
      title: currentLanguage === 'id' ? 'Proses Pembuatan Briket' : 'Briquette Manufacturing Process'
    },
    {
      image: '/image/galeri 2.jpeg',
      title: currentLanguage === 'id' ? 'Pengolahan Bahan Baku' : 'Raw Material Processing'
    },
    {
      image: '/image/galeri3.jpg',
      title: currentLanguage === 'id' ? 'Produksi Briket Arang' : 'Charcoal Briquette Production'
    }
  ];

  return (
    <Box component="section" sx={{ py: 8, backgroundColor: 'grey.50' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: 'primary.main'
            }}
          >
            {data.gallery.title}
          </Typography>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 600,
              mb: 3,
              color: 'secondary.main'
            }}
          >
            {data.gallery.subtitle}
          </Typography>
          <Divider sx={{ width: 100, mx: 'auto', mb: 3 }} />
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.6,
              maxWidth: '800px',
              mx: 'auto',
              color: 'text.secondary'
            }}
          >
            {data.gallery.description}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {galleryImages.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ 
                height: '400px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                borderRadius: 3,
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.15)'
                }
              }}>
                <CardMedia
                  component="img"
                  height="400"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    objectFit: 'cover',
                    backgroundColor: 'grey.100',
                    width: '100%',
                    height: '100%'
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Gallery; 