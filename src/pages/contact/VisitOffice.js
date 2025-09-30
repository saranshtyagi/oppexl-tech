// ===============================
// 📄 VisitOffice.js
// ===============================

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { LocationOn } from '@mui/icons-material';

function VisitOffice() {
  return (
    <>
      {/* Page container with top padding for AppBar */}
      <Box sx={{ pt: { xs: 14, md: 18 }, pb: 10, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="md">
          {/* Heading */}
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 6 }}>
            Visit Our Office
          </Typography>

          {/* Icon and Address */}
          <Box display="flex" alignItems="center" gap={2} mb={3}>
            <LocationOn fontSize="large" color="success" />
            <Typography variant="h6" fontWeight={500}>
              2nd Floor, Welldone Tech Park, Sohna Road, Sector 48, Gurugram, Haryana 122018
            </Typography>
          </Box>

          {/* Supporting Text */}
          <Typography variant="body1" sx={{ fontSize: '1.1rem', textAlign: 'justify' }}>
            We welcome visits from partners, clients, and job applicants. Please contact us in advance to schedule an
            appointment so we can ensure a smooth experience for you.
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default VisitOffice;
