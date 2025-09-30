
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { SupportAgent } from '@mui/icons-material';

function Consulting() {
  return (
    <Box sx={{ pt: { xs: 14, md: 18 }, pb: 10, bgcolor: '#f8f9fa' }}>
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 6 }}>
          Consulting Services
        </Typography>

        <Box display="flex" alignItems="center" gap={2} mb={3}>
          <SupportAgent fontSize="large" color="primary" />
          <Typography variant="h6" fontWeight={500}>
            Strategic HR & Technology Consulting
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ fontSize: '1.1rem', textAlign: 'justify' }}>
          Our expert consulting team helps organizations transform their HR operations through strategic planning, digital transformation, and workforce modernization. Whether you're just starting or scaling up, Oppexl offers tailored guidance to ensure success.
        </Typography>
      </Container>
    </Box>
  );
}

export default Consulting;