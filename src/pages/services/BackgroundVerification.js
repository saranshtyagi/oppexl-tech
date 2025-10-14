import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import {
  VerifiedUser, Badge, AssignmentInd, School,
  Gavel, WorkHistory, TravelExplore, Policy
} from '@mui/icons-material';

function BackgroundVerification() {
  return (
    <Container maxWidth="lg" sx={{ py: 18 }}>
      {/* Header */}
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Background Verification
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 900, mx: 'auto' }}>
          Comprehensive background verification for blue‑collar and white‑collar hires to ensure trust, safety, and compliance. We validate identity, employment, education, and legal records with strict data privacy controls and quick turnarounds.
        </Typography>
      </Box>

      {/* Core Checks */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <VerifiedUser sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                ID & Address Verification
              </Typography>
              <Typography variant="body1">
                Validate government-issued IDs, current/permanent address, and photo matches using reliable sources and document forensics to prevent identity fraud.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <AssignmentInd sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Employment History
              </Typography>
              <Typography variant="body1">
                Confirm tenure, role, remuneration, and exit reasons with previous employers; reconcile gaps and discrepancies with candidate declarations.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <School sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Education & Certifications
              </Typography>
              <Typography variant="body1">
                Verify degrees, diplomas, professional certifications, and course credentials directly with issuing institutes or verified databases.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <Gavel sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Criminal & Court Records
              </Typography>
              <Typography variant="body1">
                Screen against police/court records and sanctioned lists as applicable, following legal protocols for each jurisdiction and role sensitivity.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Blue‑collar / Field‑force focused */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <WorkHistory sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Blue‑Collar & Contract Workforce
              </Typography>
              <Typography variant="body1">
                Rapid checks tailored for shop‑floor, logistics, and field roles: identity, address, local police verification where supported, and prior supervisor references.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* White‑collar / Sensitive roles */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <Badge sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                White‑Collar & Sensitive Functions
              </Typography>
              <Typography variant="body1">
                Deep-dive verification for finance, technology, and leadership roles, including compliance checks, credit (where permissible), and extended references.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Global checks */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <TravelExplore sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Global Screening
              </Typography>
              <Typography variant="body1">
                International education and employment verification, global watchlists, and regulatory checks for cross‑border hiring and expatriate onboarding.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Compliance & privacy */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <Policy sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Data Privacy & Compliance
              </Typography>
              <Typography variant="body1">
                Consent‑driven processes with clear candidate communication; robust data protection aligned to applicable laws and client policies.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Closing */}
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 900, mx: 'auto' }}>
          Build a trusted workforce with fast, accurate, and compliant background verification. Our configurable workflows adapt to your role, risk, and region.
        </Typography>
      </Box>
    </Container>
  );
}

export default BackgroundVerification;
