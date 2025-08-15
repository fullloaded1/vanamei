import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Divider,
  Chip
} from '@mui/material';
import {
  SetMeal as SetMealIcon,
  Inventory as InventoryIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

const Products = () => {
  const { data, currentLanguage } = useLanguage();
  
  const products = [
    {
      id: 'hexagonal',
      image: '/image/hexagonal.jpeg',
      title: currentLanguage === 'id' ? 'Brikket Hexagonal' : 'Hexagonal Briquettes',
      description: currentLanguage === 'id' 
        ? 'Brikket berbentuk hexagonal dengan kualitas premium untuk shisha dan hookah'
        : 'Hexagonal-shaped briquettes with premium quality for shisha and hookah',
      specs: currentLanguage === 'id' 
        ? ['Kalori: 7000+ kcal/kg', 'Waktu Bakar: 90+ menit', 'Kemasan: 1kg, 10kg']
        : ['Calories: 7000+ kcal/kg', 'Burn Time: 90+ minutes', 'Packaging: 1kg, 10kg']
    },
    {
      id: 'pillow',
      image: '/image/pillow.jpeg',
      title: currentLanguage === 'id' ? 'Brikket Pillow' : 'Pillow Briquettes',
      description: currentLanguage === 'id'
        ? 'Brikket berbentuk bantal ideal untuk BBQ dan grilling dengan panas yang stabil'
        : 'Pillow-shaped briquettes ideal for BBQ and grilling with stable heat',
      specs: currentLanguage === 'id'
        ? ['Kalori: 6500+ kcal/kg', 'Waktu Bakar: 120+ menit', 'Kemasan: 5kg, 20kg']
        : ['Calories: 6500+ kcal/kg', 'Burn Time: 120+ minutes', 'Packaging: 5kg, 20kg']
    },
    {
      id: 'finger',
      image: '/image/finger.jpg',
      title: currentLanguage === 'id' ? 'Brikket Finger' : 'Finger Briquettes',
      description: currentLanguage === 'id'
        ? 'Brikket bentuk jari yang mudah dinyalakan untuk keperluan rumah tangga dan outdoor'
        : 'Finger-shaped briquettes easy to light for household and outdoor use',
      specs: currentLanguage === 'id'
        ? ['Kalori: 6000+ kcal/kg', 'Waktu Bakar: 80+ menit', 'Kemasan: 2kg, 10kg']
        : ['Calories: 6000+ kcal/kg', 'Burn Time: 80+ minutes', 'Packaging: 2kg, 10kg']
    },
    {
      id: 'coco',
      image: '/image/smn-coco-charcoal-briquettes.jpeg',
      title: currentLanguage === 'id' ? 'Brikket Kelapa Premium' : 'Premium Coconut Briquettes',
      description: currentLanguage === 'id'
        ? 'Brikket dari tempurung kelapa murni dengan kualitas ekspor terbaik'
        : 'Pure coconut shell briquettes with the best export quality',
      specs: currentLanguage === 'id'
        ? ['Kalori: 7500+ kcal/kg', 'Waktu Bakar: 150+ menit', 'Kemasan: 1kg, 10kg, 25kg']
        : ['Calories: 7500+ kcal/kg', 'Burn Time: 150+ minutes', 'Packaging: 1kg, 10kg, 25kg']
    }
  ];

  return (
    <Box component="section" id="products" sx={{ py: 8 }}>
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
            {data.products.title}
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
            {data.products.subtitle}
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
            {data.products.description}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} lg={3} key={product.id}>
              <Card sx={{ 
                height: '600px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.15)'
                }
              }}>
                {/* Product Image - Fixed Height */}
                <Box sx={{ height: '220px', flexShrink: 0 }}>
                  <CardMedia
                    component="img"
                    height="220"
                    image={product.image}
                    alt={product.title}
                    sx={{
                      objectFit: 'cover',
                      backgroundColor: 'grey.100',
                      width: '100%',
                      height: '100%',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  />
                </Box>
                
                <CardContent sx={{ 
                  p: 3, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  flexGrow: 1,
                  height: '380px'
                }}>
                  {/* Title - Fixed Height */}
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      mb: 2,
                      fontWeight: 700,
                      color: 'primary.main',
                      fontSize: '1.3rem',
                      height: '32px',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {product.title}
                  </Typography>
                  
                  {/* Description - Fixed Height */}
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      height: '64px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      fontSize: '0.95rem',
                      overflow: 'hidden'
                    }}
                  >
                    {product.description}
                  </Typography>
                  
                  {/* Specifications - Fixed Height */}
                  <Box sx={{ 
                    mb: 3, 
                    height: '80px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    overflow: 'hidden'
                  }}>
                    {product.specs.map((spec, specIndex) => (
                      <Chip
                        key={specIndex}
                        label={spec}
                        size="small"
                        variant="outlined"
                        sx={{ 
                          fontSize: '0.75rem',
                          height: '26px',
                          mr: 0.5,
                          mb: 0.5,
                          borderColor: 'secondary.main',
                          color: 'secondary.main',
                          fontWeight: 500,
                          '&:hover': {
                            backgroundColor: 'secondary.light',
                            color: 'white',
                            transform: 'scale(1.05)'
                          }
                        }}
                      />
                    ))}
                  </Box>

                  {/* Button - Fixed Position at Bottom */}
                  <Box sx={{ mt: 'auto', pt: 2 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        borderRadius: 2,
                        py: 1.5,
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        textTransform: 'none',
                        height: '48px',
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                        }
                      }}
                    >
                      {currentLanguage === 'id' ? 'Detail Produk' : 'Product Details'}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products; 