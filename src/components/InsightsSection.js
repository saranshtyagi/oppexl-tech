// src/components/InsightsSection.js
import React from 'react';
import { Box, Typography, Grid, Card, CardActionArea, CardMedia, CardContent, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const insights = [
  {
    title: 'Top 10 HR Tech Trends Report 2025',
    image: '/assets/hr-tech-trends.jpg',
    link: '/insights/hr-trends',
  },
  {
    title: 'Future-Focused Performance Management',
    image: '/assets/performance-management.jpg',
    link: '/insights/performance-management',
  },
  {
    title: "Gartner's 2024 Magic Quadrant Report",
    image: '/assets/magic-quadrant.jpg',
    link: '/insights/magic-quadrant',
  },
];

const InsightsSection = () => {
  return (
    <Box sx={{ py: 10, bgcolor: '#f8fbff' }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Latest from our Oppexl Insights
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
        {insights.map((item, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: 2 }}>
              <CardActionArea href={item.link}>
                <CardMedia
                  component="img"
                  height="180"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent sx={{ bgcolor: '#eaf3fb' }}>
                  <Typography variant="body1" fontWeight={600}>
                    {item.title}
                  </Typography>
                  <ArrowForward sx={{ mt: 1 }} />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box mt={5} textAlign="center">
        <Button
          variant="contained"
          sx={{ bgcolor: '#002b54', borderRadius: 2 }}
          href="/insights"
          endIcon={<ArrowForward />}
        >
          View all from Oppexl Insights
        </Button>
      </Box>
    </Box>
  );
};

export default InsightsSection;
