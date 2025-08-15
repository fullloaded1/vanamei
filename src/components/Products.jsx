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

const Products = ({ languageData }) => {
  const products = [
    {
      key: 'hoso',
      icon: <SetMealIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      ...languageData.products.items.hoso
    },
    {
      key: 'hlop',
      icon: <InventoryIcon sx={{ fontSize: 60, color: 'secondary.main' }} />,
      ...languageData.products.items.hlop
    },
    {
      key: 'pto',
      icon: <SetMealIcon sx={{ fontSize: 60, color: 'accent.main' }} />,
      ...languageData.products.items.pto
    }
  ];

  return (
    <Box component="section" sx={{ py: 8 }}>
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
            {languageData.products.title}
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
            {languageData.products.subtitle}
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
            {languageData.products.description}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} md={4} key={index}>
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
                    {product.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: 'primary.main'
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                      lineHeight: 1.6
                    }}
                  >
                    {product.description}
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    {product.specs.map((spec, specIndex) => (
                      <Chip
                        key={specIndex}
                        label={spec}
                        variant="outlined"
                        sx={{ 
                          m: 0.5,
                          borderColor: 'primary.main',
                          color: 'primary.main'
                        }}
                      />
                    ))}
                  </Box>

                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      backgroundColor: 'secondary.main',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'secondary.dark'
                      }
                    }}
                  >
                    Detail Produk
                  </Button>
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