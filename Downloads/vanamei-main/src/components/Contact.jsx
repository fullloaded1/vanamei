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

import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { data, currentLanguage } = useLanguage();
  
  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 20, color: 'primary.main' }} />,
      title: currentLanguage === 'id' ? 'Alamat' : 'Address',
      content: 'Jalan Keadilan Ujung No. 78'
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 20, color: 'secondary.main' }} />,
      title: currentLanguage === 'id' ? 'Telepon' : 'Phone',
      content: '+62 858-1199-2995'
    },
    {
      icon: <EmailIcon sx={{ fontSize: 20, color: 'accent.main' }} />,
      title: 'Email',
      content: 'mudaekportindoraya@gmail.com'
    },
    {
      icon: <WhatsAppIcon sx={{ fontSize: 20, color: 'success.main' }} />,
      title: 'WhatsApp',
      content: '+62 858-1199-2995'
    },
    {
      icon: <ScheduleIcon sx={{ fontSize: 20, color: 'info.main' }} />,
      title: currentLanguage === 'id' ? 'Jam Kerja' : 'Working Hours',
      content: currentLanguage === 'id' ? 'Senin - Jumat: 08:00 - 17:00' : 'Monday - Friday: 08:00 - 17:00'
    }
  ];

  return (
    <Box component="section" id="contact" sx={{ py: 8, backgroundColor: 'grey.50' }}>
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
            {data.contact.title}
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
            {data.contact.subtitle}
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
            {data.contact.description}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <Card sx={{ 
              height: '100%',
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(255,255,255,0.95)'
            }}>
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    mb: 4,
                    fontWeight: 700,
                    color: 'primary.main',
                    textAlign: 'center'
                  }}
                >
                  {currentLanguage === 'id' ? 'Kirim Pesan' : 'Send Message'}
                </Typography>
                <Box component="form" sx={{ mt: 2 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label={data.contact.form.name}
                        variant="outlined"
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label={data.contact.form.email}
                        variant="outlined"
                        type="email"
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label={data.contact.form.phone}
                        variant="outlined"
                        type="tel"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label={data.contact.form.company}
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label={data.contact.form.message}
                        variant="outlined"
                        multiline
                        rows={4}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                        }}
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
                          py: 2,
                          borderRadius: 2,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          textTransform: 'none',
                          '&:hover': {
                            backgroundColor: 'secondary.dark',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)'
                          },
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {data.contact.form.submit}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {contactInfo.map((info, index) => (
                <Card key={index} sx={{ 
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  '&:hover': {
                    transform: 'translateX(5px)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    backgroundColor: 'rgba(255,255,255,1)'
                  }
                }}>
                  <CardContent sx={{ p: 2, py: 1.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ 
                        width: 35,
                        height: 35,
                        backgroundColor: 'primary.light',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          transform: 'scale(1.1)'
                        }
                      }}>
                        {info.icon}
                      </Box>
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography
                          variant="body2"
                          component="h4"
                          sx={{
                            fontWeight: 600,
                            color: 'primary.main',
                            fontSize: '0.85rem',
                            mb: 0.5
                          }}
                        >
                          {info.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            lineHeight: 1.3,
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            wordBreak: 'break-word'
                          }}
                        >
                          {info.content}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>

            <Card sx={{ 
              mt: 2, 
              backgroundColor: 'success.main', 
              color: 'white',
              borderRadius: 2,
              boxShadow: '0 4px 15px rgba(76, 175, 80, 0.2)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 8px 20px rgba(76, 175, 80, 0.3)'
              }
            }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Box sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 2
                }}>
                  <WhatsAppIcon sx={{ fontSize: 24 }} />
                </Box>
                <Typography variant="h6" component="h4" sx={{ mb: 1, fontWeight: 600, fontSize: '1rem' }}>
                  {currentLanguage === 'id' ? 'Hubungi Kami via WhatsApp' : 'Contact Us via WhatsApp'}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, opacity: 0.9, fontSize: '0.85rem' }}>
                  {currentLanguage === 'id' 
                    ? 'Dapatkan informasi produk dan harga terbaru' 
                    : 'Get the latest product information and prices'
                  }
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: 'white',
                    color: 'success.main',
                    px: 3,
                    py: 1,
                    borderRadius: 1.5,
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '0.85rem',
                    '&:hover': {
                      backgroundColor: 'grey.100',
                      transform: 'translateY(-1px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  {currentLanguage === 'id' ? 'Chat WhatsApp' : 'WhatsApp Chat'}
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