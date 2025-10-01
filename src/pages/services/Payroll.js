import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { AccountBalance, Receipt, Security, Speed } from '@mui/icons-material';

function Payroll() {
  return (
    <Container maxWidth="lg" sx={{ py: 18 }}>
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Payroll
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Comprehensive payroll management solutions to ensure accurate, timely, and compliant payroll processing for your organization.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <AccountBalance sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Payroll Processing
              </Typography>
              <Typography variant="body1">
                Automated payroll processing with accurate calculations, tax deductions, and compliance with local regulations.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <Receipt sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Tax Management
              </Typography>
              <Typography variant="body1">
                Comprehensive tax calculation, filing, and compliance management to ensure regulatory adherence.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <Security sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Compliance & Reporting
              </Typography>
              <Typography variant="body1">
                Automated compliance reporting and audit trails to maintain regulatory compliance and transparency.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <Speed sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Self-Service Portal
              </Typography>
              <Typography variant="body1">
                Employee self-service portal for payslips, tax documents, and payroll-related queries and updates.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Payroll;
