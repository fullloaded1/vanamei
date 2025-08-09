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

const Footer = ({ languageData }) => {
  return (
    <Box component="footer" sx={{ backgroundColor: 'primary.main', color: 'white', py: 4 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
              Global Vanabric
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
              Produsen dan eksportir udang vanamei premium berkualitas tinggi dari Indonesia. 
              Melayani pasar global dengan produk terbaik dan layanan profesional.
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
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                {languageData.nav.home}
              </Link>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                {languageData.nav.about}
              </Link>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                {languageData.nav.products}
              </Link>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                {languageData.nav.gallery}
              </Link>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                {languageData.nav.contact}
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                {languageData.contact.info.address}
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                Phone: {languageData.contact.info.phone}
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                Email: {languageData.contact.info.email}
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                WhatsApp: {languageData.contact.info.whatsapp}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.2)' }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2024 Global Vanabric. All rights reserved. | 
            Premium Vanamei Shrimp Export from Indonesia
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 