import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider
} from '@mui/material';
import {
  SetMeal as SetMealIcon,
  Inventory as InventoryIcon,
  LocalShipping as LocalShippingIcon
} from '@mui/icons-material';

const Gallery = ({ languageData }) => {
  const galleryItems = [
    {
      icon: <SetMealIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: "Produk Segar",
      description: "Udang vanamei segar langsung dari tambak"
    },
    {
      icon: <InventoryIcon sx={{ fontSize: 60, color: 'secondary.main' }} />,
      title: "Pengolahan Modern",
      description: "Fasilitas pengolahan dengan teknologi terkini"
    },
    {
      icon: <LocalShippingIcon sx={{ fontSize: 60, color: 'accent.main' }} />,
      title: "Ekspor Global",
      description: "Pengiriman ke berbagai negara di seluruh dunia"
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
            {languageData.gallery.title}
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
            {languageData.gallery.subtitle}
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
            {languageData.gallery.description}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {galleryItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ 
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
                }
              }}>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Box sx={{ mb: 3 }}>
                    {item.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: 'primary.main'
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Gallery; 