import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { Assessment, Security, Checklist, Analytics } from '@mui/icons-material';

function Audits() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Audits
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Comprehensive audit services to ensure compliance, identify risks, and optimize HR processes across your organization.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <Assessment sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                HR Compliance Audits
              </Typography>
              <Typography variant="body1">
                Thorough review of HR policies, procedures, and practices to ensure compliance with labor laws and regulations.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <Security sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Payroll Audits
              </Typography>
              <Typography variant="body1">
                Detailed examination of payroll processes, calculations, and tax compliance to ensure accuracy and regulatory adherence.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <Checklist sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Process Audits
              </Typography>
              <Typography variant="body1">
                Evaluation of HR processes and workflows to identify inefficiencies and opportunities for improvement.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <Analytics sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Risk Assessment
              </Typography>
              <Typography variant="body1">
                Comprehensive risk analysis to identify potential HR-related risks and develop mitigation strategies.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Audits;
