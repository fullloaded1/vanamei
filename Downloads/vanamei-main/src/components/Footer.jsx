import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider
} from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  WhatsApp as WhatsAppIcon
} from '@mui/icons-material';

import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { data, currentLanguage } = useLanguage();
  return (
    <Box component="footer" sx={{ backgroundColor: 'primary.main', color: 'white', py: 4 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
              Nusa Brikket
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
              {currentLanguage === 'id' 
                ? 'Eksportir arang brikket premium berkualitas tinggi dari Indonesia. Melayani pasar global dengan produk terbaik dan layanan profesional.'
                : 'Premium quality charcoal briquette exporter from Indonesia. Serving the global market with the best products and professional service.'
              }
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <Link href="#" color="inherit" sx={{ '&:hover': { opacity: 0.8 } }}>
                <LinkedInIcon />
              </Link>
              <Link href="#" color="inherit" sx={{ '&:hover': { opacity: 0.8 } }}>
                <InstagramIcon />
              </Link>
              <Link href="#" color="inherit" sx={{ '&:hover': { opacity: 0.8 } }}>
                <WhatsAppIcon />
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
              {currentLanguage === 'id' ? 'Tautan Cepat' : 'Quick Links'}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                {data.nav.home}
              </Link>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                {data.nav.about}
              </Link>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                {data.nav.products}
              </Link>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                {data.nav.gallery}
              </Link>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                {data.nav.contact}
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
              {currentLanguage === 'id' ? 'Informasi Kontak' : 'Contact Info'}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                Jalan Keadilan Ujung No. 78
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                {currentLanguage === 'id' ? 'Telepon' : 'Phone'}: +62 858-1199-2995
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                Email: mudaekportindoraya@gmail.com
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                WhatsApp: +62 858-1199-2995
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                {currentLanguage === 'id' ? 'Jam Kerja' : 'Working Hours'}: {currentLanguage === 'id' ? 'Senin - Jumat: 08:00 - 17:00' : 'Monday - Friday: 08:00 - 17:00'}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.2)' }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2025 Nusa Brikket. All rights reserved. | 
            {currentLanguage === 'id' 
              ? 'Eksportir Briket Arang Premium dari Indonesia'
              : 'Premium Charcoal Briquette Export from Indonesia'
            }
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 