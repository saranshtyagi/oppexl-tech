import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { AccountBalance, Gavel, Policy, Assessment } from '@mui/icons-material';

function GovernmentAdvisory() {
  return (
    <Container maxWidth="lg" sx={{ py: 18 }}>
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Government Advisory
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Expert advisory services to help government organizations optimize HR operations, ensure compliance, and implement best practices.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <AccountBalance sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Policy Development
              </Typography>
              <Typography variant="body1">
                Development and review of HR policies and procedures to ensure compliance with government regulations and best practices.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <Gavel sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Regulatory Compliance
              </Typography>
              <Typography variant="body1">
                Comprehensive compliance advisory to ensure adherence to labor laws, employment regulations, and government standards.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <Policy sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Public Sector HR
              </Typography>
              <Typography variant="body1">
                Specialized HR advisory services tailored for public sector organizations and government entities.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <Assessment sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Performance Audits
              </Typography>
              <Typography variant="body1">
                HR performance audits and assessments to identify areas for improvement and operational efficiency.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default GovernmentAdvisory;
