import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { People, TrendingUp, School, Psychology } from '@mui/icons-material';

function TalentManagement() {
  return (
    <Container maxWidth="lg" sx={{ py: 18 }}>
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Talent Management
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Comprehensive talent management solutions to attract, develop, and retain top performers while building a high-performance culture.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <People sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Performance Management
              </Typography>
              <Typography variant="body1">
                Strategic performance management systems to set goals, track progress, and drive employee development and engagement.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <TrendingUp sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Succession Planning
              </Typography>
              <Typography variant="body1">
                Develop future leaders through comprehensive succession planning and leadership development programs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <School sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Learning & Development
              </Typography>
              <Typography variant="body1">
                Customized learning programs and development initiatives to enhance skills and career growth opportunities.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <Psychology sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Employee Engagement
              </Typography>
              <Typography variant="body1">
                Strategies and programs to boost employee engagement, satisfaction, and retention across your organization.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TalentManagement;
