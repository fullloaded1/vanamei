import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Divider,
  Paper
} from '@mui/material';
import {
  LocationOn as LocationOnIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  WhatsApp as WhatsAppIcon,
  Schedule as ScheduleIcon
} from '@mui/icons-material';

const Contact = ({ languageData }) => {
  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Alamat",
      content: languageData.contact.info.address
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: "Telepon",
      content: languageData.contact.info.phone
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: 'accent.main' }} />,
      title: "Email",
      content: languageData.contact.info.email
    },
    {
      icon: <WhatsAppIcon sx={{ fontSize: 40, color: 'success.main' }} />,
      title: "WhatsApp",
      content: languageData.contact.info.whatsapp
    },
    {
      icon: <ScheduleIcon sx={{ fontSize: 40, color: 'info.main' }} />,
      title: "Jam Kerja",
      content: languageData.contact.info.hours
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
            {languageData.contact.title}
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
            {languageData.contact.subtitle}
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
            {languageData.contact.description}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: 'primary.main'
                  }}
                >
                  Kirim Pesan
                </Typography>
                <Box component="form" sx={{ mt: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label={languageData.contact.form.name}
                        variant="outlined"
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label={languageData.contact.form.email}
                        variant="outlined"
                        type="email"
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label={languageData.contact.form.phone}
                        variant="outlined"
                        type="tel"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label={languageData.contact.form.company}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label={languageData.contact.form.message}
                        variant="outlined"
                        multiline
                        rows={4}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{
                          backgroundColor: 'secondary.main',
                          color: 'white',
                          py: 1.5,
                          '&:hover': {
                            backgroundColor: 'secondary.dark'
                          }
                        }}
                      >
                        {languageData.contact.form.submit}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Grid container spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card sx={{ 
                    height: '100%',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)'
                    }
                  }}>
                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                      <Box sx={{ mb: 2 }}>
                        {info.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        component="h4"
                        sx={{
                          mb: 1,
                          fontWeight: 600,
                          color: 'primary.main'
                        }}
                      >
                        {info.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.5
                        }}
                      >
                        {info.content}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Card sx={{ mt: 3, backgroundColor: 'success.main', color: 'white' }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <WhatsAppIcon sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h6" component="h4" sx={{ mb: 1, fontWeight: 600 }}>
                  Hubungi Kami via WhatsApp
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Dapatkan informasi produk dan harga terbaru
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'white',
                    color: 'success.main',
                    '&:hover': {
                      backgroundColor: 'grey.100'
                    }
                  }}
                >
                  Chat WhatsApp
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 