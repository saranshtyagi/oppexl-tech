import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { IntegrationInstructions } from '@mui/icons-material';

function Implementation() {
  return (
    <Box sx={{ pt: { xs: 14, md: 18 }, pb: 10, bgcolor: '#f8f9fa' }}>
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 6 }}>
          Implementation Services
        </Typography>

        <Box display="flex" alignItems="center" gap={2} mb={3}>
          <IntegrationInstructions fontSize="large" color="success" />
          <Typography variant="h6" fontWeight={500}>
            Smooth Onboarding & Deployment
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ fontSize: '1.1rem', textAlign: 'justify' }}>
          Our implementation experts ensure a seamless transition from your current systems to Oppexl's platform. From data migration to user training, we handle everything with minimal disruption and maximum support.
        </Typography>
      </Container>
    </Box>
  );
}

export default Implementation;
