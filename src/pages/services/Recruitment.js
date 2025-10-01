import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { PersonAdd, Search, Assessment, Group } from '@mui/icons-material';

function Recruitment() {
  return (
    <Container maxWidth="lg" sx={{ py: 18 }}>
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Recruitment
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          End-to-end recruitment solutions to help you find, attract, and hire the best talent for your organization.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <PersonAdd sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Executive Search
              </Typography>
              <Typography variant="body1">
                Specialized recruitment for senior-level positions and executive roles with extensive market knowledge.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <Search sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Talent Sourcing
              </Typography>
              <Typography variant="body1">
                Advanced sourcing strategies and candidate identification using cutting-edge recruitment technologies.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <Assessment sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Assessment & Selection
              </Typography>
              <Typography variant="body1">
                Comprehensive candidate assessment and selection processes to ensure the right cultural and skill fit.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <Group sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Bulk Hiring
              </Typography>
              <Typography variant="body1">
                Efficient bulk recruitment solutions for large-scale hiring needs with streamlined processes.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Recruitment;
