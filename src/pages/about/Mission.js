import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import { PeopleAlt, TrendingUp, Security } from '@mui/icons-material';

function Leadership() {
  return (
    <>
      {/* Add space below fixed AppBar */}
      <Box sx={{ pt: { xs: 14, md: 18 }, pb: 14, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          {/* Main Heading */}
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 8 }}>
            Our Mission & Vision
          </Typography>

          {/* Mission Section */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h5" fontWeight={600} gutterBottom sx={{ mb: 3 }}>
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', textAlign: 'justify' }}>
              We empower organizations through cutting-edge HR and workforce technologies.
              We build intelligent, user-friendly solutions that streamline talent management, enhance employee engagement, optimize
              workflows, and drive business transformation.
            </Typography>
          </Box>

          {/* Vision Section */}
          <Box sx={{ mb: 10 }}>
            <Typography variant="h5" fontWeight={600} gutterBottom sx={{ mb: 3 }}>
              Our Vision
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', textAlign: 'justify' }}>
              Our vision is to become a global leader in providing seamless, AI-driven platforms and services for payroll, recruitment, talent management and HR transformation. We aspire to set the benchmark for excellence and trust in audits, workforce tech. and help businesses worldwide build high-performance, future-ready teams.
            </Typography>
          </Box>

          {/* Pillars Section */}
          <Typography variant="h5" fontWeight="bold" gutterBottom textAlign="center" sx={{ mb: 8 }}>
            What Drives Us
          </Typography>
          <Grid container spacing={6}>
            {[
              {
                icon: <PeopleAlt fontSize="large" color="primary" />,
                title: 'People First',
                text: 'We create solutions that prioritize employee experience, engagement, and growth.'
              },
              {
                icon: <TrendingUp fontSize="large" color="success" />,
                title: 'Performance Driven',
                text: 'We help businesses scale with data-backed insights and streamlined HR tech.'
              },
              {
                icon: <Security fontSize="large" color="error" />,
                title: 'Trust & Security',
                text: 'With enterprise-grade data protection, we ensure your people and systems stay secure.'
              }
            ].map((item, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 4 }}>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    {item.icon}
                  </Box>
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography variant="h6" fontWeight={600} gutterBottom textAlign="center">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" textAlign="center">
                      {item.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Leadership;
