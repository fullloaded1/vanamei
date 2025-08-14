import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider
} from '@mui/material';
import {
  Star as StarIcon,
  Group as GroupIcon,
  Public as PublicIcon,
  Inventory as InventoryIcon,
  Nature as NatureIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { data, currentLanguage } = useLanguage();
  
  const featureTexts = {
    id: [
      'Produk berkualitas tinggi dengan standar internasional, memastikan performa optimal dan pembakaran yang bersih.',
      'Dukungan dan kolaborasi dengan Platinum Pro, memastikan setiap tahap produksi hingga pengiriman dikelola secara profesional.',
      'Pengalaman luas dengan transaksi di 14 negara, memberikan kami wawasan global dalam memenuhi kebutuhan pelanggan.',
      'Beragam pilihan briket yang dirancang untuk berbagai keperluan, dari penggunaan rumah tangga hingga kebutuhan industri.'
    ],
    en: [
      'High-quality products with international standards, ensuring optimal performance and clean burning.',
      'Support and collaboration with Platinum Pro, ensuring every stage from production to delivery is managed professionally.',
      'Extensive experience with transactions in 14 countries, giving us global insight in meeting customer needs.',
      'Various briquette options designed for different purposes, from household use to industrial needs.'
    ]
  };

  return (
    <Box component="section" sx={{ py: 10, backgroundColor: '#3b82f6' }}>
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 4,
              color: 'white',
              fontSize: { xs: '2.5rem', md: '4rem' }
            }}
          >
            {data.about.title}
          </Typography>
          <Box sx={{ maxWidth: '4xl', mx: 'auto', mb: 6 }}>
          <Typography
              variant="body1"
            sx={{
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.6,
                color: 'white',
                mb: 3
              }}
            >
              {currentLanguage === 'id' 
                ? 'Arangbriket.id adalah penyedia briket berkualitas tinggi yang berkomitmen untuk menyediakan produk terbaik bagi pelanggan kami di seluruh dunia. Dengan pengalaman transaksi di 14 negara, kami telah membangun reputasi sebagai mitra terpercaya dalam industri briket.'
                : 'Arangbriket.id is a high-quality briquette provider committed to providing the best products for our customers worldwide. With transaction experience in 14 countries, we have built a reputation as a trusted partner in the briquette industry.'
              }
          </Typography>
          <Typography
            variant="body1"
            sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
              lineHeight: 1.6,
                color: 'white'
            }}
          >
              {currentLanguage === 'id'
                ? 'Produk unggulan kami mencakup briket untuk shisha, BBQ, arang batok kelapa dan arang kayu, yang semuanya diproduksi dengan standar kualitas tertinggi. Kami menawarkan berbagai pilihan briket yang dirancang untuk memenuhi kebutuhan pelanggan, mulai dari rumah tangga hingga industri.'
                : 'Our featured products include briquettes for shisha, BBQ, coconut shell charcoal and wood charcoal, all produced with the highest quality standards. We offer various briquette options designed to meet customer needs, from household to industrial use.'
              }
          </Typography>
          </Box>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
              <Card sx={{ 
              backgroundColor: 'white',
              p: 4,
              borderRadius: 3,
              height: '100%'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                <Box sx={{
                  width: 48,
                  height: 48,
                  backgroundColor: '#3b82f6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <CheckCircleIcon sx={{ fontSize: 24, color: 'white' }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#374151',
                      lineHeight: 1.6,
                      fontSize: '1.1rem'
                    }}
                  >
                    {featureTexts[currentLanguage][0]}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ 
              backgroundColor: 'white',
              p: 4,
              borderRadius: 3,
              height: '100%'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                <Box sx={{
                  width: 48,
                  height: 48,
                  backgroundColor: '#3b82f6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <CheckCircleIcon sx={{ fontSize: 24, color: 'white' }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#374151',
                      lineHeight: 1.6,
                      fontSize: '1.1rem'
                    }}
                  >
                    {featureTexts[currentLanguage][1]}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ 
              backgroundColor: 'white',
              p: 4,
              borderRadius: 3,
              height: '100%'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                <Box sx={{
                  width: 48,
                  height: 48,
                  backgroundColor: '#3b82f6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <PublicIcon sx={{ fontSize: 24, color: 'white' }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                                    <Typography
                    variant="body1"
                    sx={{
                      color: '#374151',
                      lineHeight: 1.6,
                      fontSize: '1.1rem'
                    }}
                  >
                    {featureTexts[currentLanguage][2]}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ 
              backgroundColor: 'white',
              p: 4,
              borderRadius: 3,
              height: '100%'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                <Box sx={{
                  width: 48,
                  height: 48,
                  backgroundColor: '#3b82f6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <InventoryIcon sx={{ fontSize: 24, color: 'white' }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#374151',
                      lineHeight: 1.6,
                      fontSize: '1.1rem'
                    }}
                  >
                    {featureTexts[currentLanguage][3]}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 