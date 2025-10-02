import React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Button
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const insights = [
  {
    id: 'hr-trends-2025',
    title: 'Top 10 HR Tech Trends Report 2025',
    image: '/hr-trends.png',
    snippet: 'Explore the latest HR technology trends that will define 2025.',
    link: '/insights/hr-trends',
  },
  {
    id: 'performance-management',
    title: 'Future-Focused Performance Management',
    image: '/performance-management.png',
    snippet: 'Discover how to align performance systems with evolving business goals.',
    link: '/insights/performance-management',
  },
  {
    id: 'social-audits', 
    title: 'Internal Social Audits',
    image: '/social-audits.png',
    snippet: 'The Hidden Engine of Business Transformation', 
    link: '/insights/social-audits'
  }
];

const Insights = () => {
  return (
    <Box sx={{ py: 14, bgcolor: '#f8fbff', minHeight: '100vh' }}>
      <Container>
        <Box sx={{ mb: 4 }}>
          <Button component={Link} to="/" startIcon={<ArrowBack />}>
            Back to Home
          </Button>
        </Box>

        <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center">
          All Insights from Oppexl
        </Typography>

        <Typography variant="body1" textAlign="center" sx={{ mb: 5 }}>
          Dive deep into the latest HR technology, performance management strategies, and industry research.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {insights.map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardActionArea component={Link} to={item.link} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <CardMedia component="img" height="180" image={item.image} alt={item.title} />
                  <CardContent sx={{ bgcolor: '#eaf3fb', flexGrow: 1, width: '100%' }}>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.snippet}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Insights;
