import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Phone } from '@mui/icons-material';

function CallUs() {
  return (
    <>
      {/* Page container with top padding for AppBar */}
      <Box sx={{ pt: { xs: 14, md: 18 }, pb: 10, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="md">
          {/* Heading */}
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 6 }}>
            Call Us
          </Typography>

          {/* Icon and Number */}
          <Box display="flex" alignItems="center" gap={2} mb={3}>
            <Phone fontSize="large" color="secondary" />
            <Typography variant="h6" fontWeight={500}>
              +91 7206215762
            </Typography>
          </Box>

          {/* Supporting Text */}
          <Typography variant="body1" sx={{ fontSize: '1.1rem', textAlign: 'justify' }}>
            Our support and sales team is available from Monday to Friday, 9 AM to 6 PM IST. Call us for real-time assistance,
            queries about features, or to speak with a solution specialist.
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default CallUs;
