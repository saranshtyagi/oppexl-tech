// ===============================
// 📄 Support.js
// ===============================

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { HeadsetMic } from '@mui/icons-material';

function Support() {
  return (
    <Box sx={{ pt: { xs: 14, md: 18 }, pb: 10, bgcolor: '#f8f9fa' }}>
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 6 }}>
          Support Services
        </Typography>

        <Box display="flex" alignItems="center" gap={2} mb={3}>
          <HeadsetMic fontSize="large" color="secondary" />
          <Typography variant="h6" fontWeight={500}>
            24/7 Customer Assistance
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ fontSize: '1.1rem', textAlign: 'justify' }}>
          We're committed to helping you get the most from Oppexl. Our support team is always available to resolve issues, provide updates, and ensure uninterrupted service – every hour of every day.
        </Typography>
      </Container>
    </Box>
  );
}

export default Support;
