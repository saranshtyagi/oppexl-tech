import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { Business, Assessment, TrendingUp, Group } from '@mui/icons-material';

function MergerAcquisitions() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Merger & Acquisitions
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Our M&A experts help organizations navigate complex mergers and acquisitions with strategic HR planning, due diligence, and seamless integration of workforce systems and processes.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <Business sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Due Diligence
              </Typography>
              <Typography variant="body1">
                Comprehensive HR due diligence to assess workforce risks, compliance issues, and integration challenges before M&A transactions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <Assessment sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Integration Planning
              </Typography>
              <Typography variant="body1">
                Strategic planning for seamless integration of HR systems, policies, and workforce management across merged entities.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <TrendingUp sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Change Management
              </Typography>
              <Typography variant="body1">
                Expert guidance on managing organizational change, employee transitions, and maintaining productivity during M&A processes.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <Group sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Workforce Optimization
              </Typography>
              <Typography variant="body1">
                Optimization of workforce structure, roles, and responsibilities to maximize efficiency and value creation post-merger.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MergerAcquisitions;
