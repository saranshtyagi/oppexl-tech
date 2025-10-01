import React from 'react';
import { Box, Container, Typography, Stack, Paper } from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

function VisitOffice() {
  // Google Maps embed (responsive iframe wrapper)
  // Tip: For production, consider Maps Embed API with your API key for customization.
  // This uses the public embed URL for the given address.
  const mapSrc =
    'https://www.google.com/maps?q=Welldone%20Tech%20Park,%20Sohna%20Road,%20Sector%2048,%20Gurugram,%20Haryana%20122018&output=embed';

  return (
    <>
      <Box sx={{ pt: { xs: 14, md: 18 }, pb: 12, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="md">
          {/* Header */}
          <MotionBox
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 1 }}>
              Visit Our Office
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
              Meetings are by appointment to ensure availability and a smooth experience.
            </Typography>
          </MotionBox>

          {/* Address Card */}
          <MotionPaper
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
              bgcolor: 'background.paper',
              mb: 4,
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <LocationOn fontSize="large" color="success" />
              <Typography variant="h6" fontWeight={600}>
                2nd Floor, Welldone Tech Park, Sohna Road, Sector 48, Gurugram, Haryana 122018
              </Typography>
            </Stack>
          </MotionPaper>

          {/* Map (Responsive) */}
          <MotionBox
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 3,
              boxShadow: '0 8px 28px rgba(0,0,0,0.10)',
              // 16:9 aspect ratio
              pt: '56.25%',
              mb: 4,
            }}
          >
            <Box
              component="iframe"
              title="Oppexl Office Map"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                border: 0,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              allowFullScreen
            />
          </MotionBox>

          {/* Supporting Text */}
          <MotionBox
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <Typography variant="body1" sx={{ fontSize: '1.05rem', textAlign: 'justify' }}>
              Parking is available within the tech park premises. For security access, carry a valid ID and
              the meeting confirmation email. If assistance is needed, the front desk team will be
              happy to guide upon arrival.
            </Typography>
          </MotionBox>
        </Container>
      </Box>
    </>
  );
}

export default VisitOffice;
