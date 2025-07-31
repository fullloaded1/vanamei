import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, Typography, Button, Card, CardContent, Grid, Container } from '@mui/material';
import { Star as StarIcon, Public as PublicIcon, Nature as NatureIcon } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e293b',
    },
    secondary: {
      main: '#3b82f6',
    },
    accent: {
      main: '#f59e0b',
    },
  },
  typography: {
    fontFamily: 'Poppins, Inter, sans-serif',
  },
});

function ReactApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show React component after page loads
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isVisible && (
        <Box 
          sx={{ 
            position: 'fixed',
            top: '50%',
            right: '20px',
            transform: 'translateY(-50%)',
            zIndex: 1000,
            backgroundColor: 'white',
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            p: 2,
            maxWidth: 300,
            display: { xs: 'none', md: 'block' }
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
            🚀 React JS Active
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Website ini menggunakan React JS dengan Material UI untuk fitur interaktif.
          </Typography>
          
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Card sx={{ textAlign: 'center', p: 1 }}>
                <StarIcon sx={{ fontSize: 20, color: 'accent.main', mb: 1 }} />
                <Typography variant="caption">Material UI</Typography>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ textAlign: 'center', p: 1 }}>
                <PublicIcon sx={{ fontSize: 20, color: 'secondary.main', mb: 1 }} />
                <Typography variant="caption">React</Typography>
              </Card>
            </Grid>
          </Grid>
          
          <Button 
            variant="contained" 
            size="small" 
            fullWidth 
            sx={{ mt: 2, backgroundColor: 'secondary.main' }}
            onClick={() => setIsVisible(false)}
          >
            Tutup
          </Button>
        </Box>
      )}
    </ThemeProvider>
  );
}

export default ReactApp; 