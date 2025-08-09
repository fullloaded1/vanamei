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

const About = ({ languageData }) => {
  const features = [
    {
      icon: <StarIcon sx={{ fontSize: 40, color: 'accent.main' }} />,
      title: languageData.about.features.experience.title,
      description: languageData.about.features.experience.description
    },
    {
      icon: <CheckCircleIcon sx={{ fontSize: 40, color: 'success.main' }} />,
      title: languageData.about.features.quality.title,
      description: languageData.about.features.quality.description
    },
    {
      icon: <PublicIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: languageData.about.features.global.title,
      description: languageData.about.features.global.description
    },
    {
      icon: <NatureIcon sx={{ fontSize: 40, color: 'success.main' }} />,
      title: languageData.about.features.sustainable.title,
      description: languageData.about.features.sustainable.description
    },
    {
      icon: <InventoryIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: languageData.about.features.technology.title,
      description: languageData.about.features.technology.description
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: languageData.about.features.service.title,
      description: languageData.about.features.service.description
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
            {languageData.about.title}
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
            {languageData.about.subtitle}
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
            {languageData.about.description}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
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
                  <Box sx={{ mb: 2 }}>
                    {feature.icon}
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
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6
                    }}
                  >
                    {feature.description}
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

export default About; 