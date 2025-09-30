import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import { EmojiObjects, Groups, Stars } from '@mui/icons-material';

function Leadership() {
  return (
    <>
      {/* Add space below fixed AppBar */}
      <Box sx={{ pt: { xs: 14, md: 18 }, pb: 14, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          {/* Main Heading */}
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 8 }}>
            Leadership at Oppexl
          </Typography>

          {/* Intro Section */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', textAlign: 'justify' }}>
              At Oppexl, leadership means more than management—it means inspiring innovation, championing collaboration,
              and delivering long-term value to both employees and clients. Our leadership team is dedicated to steering the
              company with a clear vision, bold strategies, and a deep commitment to people and performance.
            </Typography>
          </Box>

          {/* Leadership Pillars */}
          <Typography variant="h5" fontWeight="bold" gutterBottom textAlign="center" sx={{ mb: 8 }}>
            What Defines Our Leadership
          </Typography>
          <Grid container spacing={6}>
            {[
              {
                icon: <EmojiObjects fontSize="large" color="warning" />,
                title: 'Visionary Thinking',
                text: 'We anticipate future challenges and innovate with purpose to create meaningful solutions.'
              },
              {
                icon: <Groups fontSize="large" color="primary" />,
                title: 'Collaborative Culture',
                text: 'Our leaders nurture teamwork and transparency, empowering every voice within the organization.'
              },
              {
                icon: <Stars fontSize="large" color="success" />,
                title: 'Excellence & Integrity',
                text: 'We lead by example—maintaining high standards, acting ethically, and always striving to do better.'
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
