import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import { WorkOutline, EmojiEmotions, TrendingUp } from '@mui/icons-material';

function Careers() {
  return (
    <>
      {/* Add space below fixed AppBar */}
      <Box sx={{ pt: { xs: 14, md: 18 }, pb: 14, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          {/* Main Heading */}
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 8 }}>
            Careers at Oppexl
          </Typography>

          {/* Intro Section */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', textAlign: 'justify' }}>
              At Oppexl, we're not just building platforms—we're building the future of work. If you're passionate
              about innovation, growth, and creating real impact, you’ll find your place with us. Our culture values
              creativity, continuous learning, and inclusivity, ensuring every employee thrives.
            </Typography>
          </Box>

          {/* Career Highlights */}
          <Typography variant="h5" fontWeight="bold" gutterBottom textAlign="center" sx={{ mb: 8 }}>
            Why Join Oppexl?
          </Typography>
          <Grid container spacing={6}>
            {[
              {
                icon: <WorkOutline fontSize="large" color="primary" />,
                title: 'Meaningful Work',
                text: 'Contribute to high-impact projects that shape the future of HR and workforce technology.'
              },
              {
                icon: <EmojiEmotions fontSize="large" color="secondary" />,
                title: 'Supportive Culture',
                text: 'Thrive in an inclusive, people-first environment that values your voice and well-being.'
              },
              {
                icon: <TrendingUp fontSize="large" color="success" />,
                title: 'Career Growth',
                text: 'Grow with personalized learning paths, mentorship, and leadership opportunities.'
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

export default Careers;
