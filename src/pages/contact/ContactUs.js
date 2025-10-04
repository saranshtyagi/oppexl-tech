import React from 'react';
import { Box, Container, Typography, Stack, Paper, Link as MuiLink } from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

function ContactUs() {
  const address = 'Welldone Tech Park, Sohna Road, Sector 48, Gurugram, Haryana 122018';
  
  const publicMapSrc =
    'https://www.google.com/maps?q=' + encodeURIComponent(address) + '&output=embed';

  return (
    <>
      <Box sx={{ pt: { xs: 14, md: 18 }, pb: 8, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="md">
          <MotionBox initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 1 }}>
              Call Us
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
              Available Monday–Friday, 9 AM–6 PM IST.
            </Typography>
          </MotionBox>

          <MotionPaper
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            elevation={0}
            sx={{ p: 3, borderRadius: 3, boxShadow: '0 6px 20px rgba(0,0,0,0.08)', mb: 6, bgcolor: 'background.paper' }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Phone fontSize="large" color="secondary" />
              <Typography variant="h6" fontWeight={600}>+91 7206215762</Typography>
            </Stack>
            <Typography variant="body1" sx={{ mt: 2 }}>
              For real-time assistance, feature queries, or to speak with a solution specialist, call during business hours.
            </Typography>
          </MotionPaper>

          <MotionBox initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 1 }}>
              Email Us
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
              Reach out anytime. The team responds as soon as possible.
            </Typography>
          </MotionBox>

          <MotionPaper
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            elevation={0}
            sx={{ p: 3, borderRadius: 3, boxShadow: '0 6px 20px rgba(0,0,0,0.08)', mb: 6, bgcolor: 'background.paper' }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Email fontSize="large" color="primary" />
              <Typography variant="h6" fontWeight={600}>
                <MuiLink href="mailto:support@oppexl.com" underline="hover">support@oppexl.com</MuiLink>
              </Typography>
            </Stack>
            <Typography variant="body1" sx={{ mt: 2 }}>
              For demos, support, or partnerships, drop a message and a specialist will be in touch.
            </Typography>
          </MotionPaper>

          <MotionBox initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 1 }}>
              Visit Our Office
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
              Visits are by appointment to ensure availability and a smooth experience.
            </Typography>
          </MotionBox>

          <MotionPaper
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            elevation={0}
            sx={{ p: 3, borderRadius: 3, boxShadow: '0 6px 20px rgba(0,0,0,0.08)', mb: 4, bgcolor: 'background.paper' }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <LocationOn fontSize="large" color="success" />
              <Typography variant="h6" fontWeight={600}>
                2nd Floor, Welldone Tech Park, Sohna Road, Sector 48, Gurugram, Haryana 122018
              </Typography>
            </Stack>
          </MotionPaper>

          {/* Responsive Map (public URL) */}
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
              pt: '56.25%', // 16:9 aspect
              mb: 8,
            }}
          >
            <Box
              component="iframe"
              title="Oppexl Office Map"
              src={publicMapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              style={{
                border: 0,
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </MotionBox>
        </Container>
      </Box>
    </>
  );
}

export default ContactUs;
