import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import { Groups, Security, Lightbulb } from '@mui/icons-material';

function AboutUs() {
  return (
    <>
      {/* Add space below fixed AppBar */}
      <Box sx={{ pt: { xs: 14, md: 18 }, pb: 14, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          {/* Main Heading */}
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 8 }}>
            About Us
          </Typography>

          {/* Intro Section */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="body1"
              sx={{ fontSize: '1.1rem', textAlign: 'justify', lineHeight: 1.8 }}
            >
              We are a next-generation HR consulting and technology firm,
              empowering organizations with innovative people solutions and
              AI-driven platforms. With over a decade of consulting expertise,
              our team specializes in delivering end-to-end services across
              audits, mergers & acquisitions, compensation & benefits, talent
              management, recruitment, payroll, and government advisory.
              <br /><br />
              Our product suite includes advanced HRMS, LMS, and a dynamic job
              portal - designed to simplify and enhance the employee lifecycle.
              Guided by integrity and transparency, we partner with businesses
              to unlock workforce potential, drive compliance, and enable
              sustainable growth.
              <br /><br />
              At the core, we are more than consultants - we are strategic
              partners shaping the future of work.
            </Typography>
          </Box>

          {/* Company Highlights */}
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            textAlign="center"
            sx={{ mb: 8 }}
          >
            What Defines Us
          </Typography>
          <Grid container spacing={6}>
            {[
              {
                icon: <Groups fontSize="large" color="primary" />,
                title: 'People First',
                text: 'We believe in building inclusive workplaces where people thrive and contribute to their fullest potential.'
              },
              {
                icon: <Security fontSize="large" color="secondary" />,
                title: 'Integrity & Trust',
                text: 'Our foundation is transparency and ethical practices, ensuring long-lasting relationships with clients.'
              },
              {
                icon: <Lightbulb fontSize="large" color="success" />,
                title: 'Innovation at Core',
                text: 'From AI-driven HR solutions to advanced platforms, innovation drives everything we deliver.'
              }
            ].map((item, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card
                  elevation={3}
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 4 }}
                >
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    {item.icon}
                  </Box>
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      gutterBottom
                      textAlign="center"
                    >
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

export default AboutUs;
