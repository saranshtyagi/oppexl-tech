import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
} from '@mui/material';

function SuccessStories() {
  const stories = [
    {
      company: 'TechNova Inc.',
      result: 'Reduced hiring time by 50% using our Job Portal & Smart Scheduling.',
      logo: '/logos/company1.png'
    },
    {
      company: 'EduSoft Pvt Ltd',
      result: 'Upskilled 1,200 employees in 6 months through our gamified LMS.',
      logo: '/logos/company2.png'
    },
    {
      company: 'FinCore Group',
      result: 'Automated payroll for 700+ employees with Oppexl HRMS.',
      logo: '/logos/company3.png'
    },
    {
      company: 'RetailSphere',
      result: 'Centralized employee training across 150 stores with LMS.',
      logo: '/logos/company4.png'
    },
    {
      company: 'BlueBank Corp.',
      result: 'Ensured 100% compliance in HR policies using Oppexl HRMS.',
      logo: '/logos/company5.png'
    }
  ];

  return (
    <Box sx={{ pt: { xs: 12, md: 16 }, pb: 12, bgcolor: '#f9fafb' }}>
      <Container>
        <Typography variant="h3" fontWeight="bold" textAlign="center" gutterBottom>
          Customer Success Stories
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 6 }}>
          Real-world results from teams who transformed their HR experience with Oppexl.
        </Typography>

        <Grid container spacing={4}>
          {stories.map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card sx={{ p: 3, height: '100%', textAlign: 'center', boxShadow: 2 }}>
                <Box
                  component="img"
                  src={item.logo}
                  alt={item.company}
                  sx={{ height: 60, mb: 2, objectFit: 'contain' }}
                />
                <Typography variant="h6" gutterBottom>
                  {item.company}
                </Typography>
                <Typography variant="body2">
                  {item.result}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default SuccessStories;
