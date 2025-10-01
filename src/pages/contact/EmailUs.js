// ===============================
// 📄 EmailUs.js
// ===============================

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Email } from '@mui/icons-material';

function EmailUs() {
  return (
    <>
      {/* Page container with top padding for AppBar */}
      <Box sx={{ pt: { xs: 14, md: 18 }, pb: 10, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="md">
          {/* Heading */}
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 6 }}>
            Email Us
          </Typography>

          {/* Icon and Message */}
          <Box display="flex" alignItems="center" gap={2} mb={3}>
            <Email fontSize="large" color="primary" />
            <Typography variant="h6" fontWeight={500}>
              support@oppexl.com
            </Typography>
          </Box>

          {/* Supporting Text */}
          <Typography variant="body1" sx={{ fontSize: '1.1rem', textAlign: 'justify' }}>
            Reach out to us anytime, and our team will get back to you as soon as possible. For product demos, support, or
            partnership inquiries, drop us a message and we’ll be happy to assist.
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default EmailUs;
