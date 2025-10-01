import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { AttachMoney, CardGiftcard, TrendingUp, Balance } from '@mui/icons-material';

function CompensationBenefits() {
  return (
    <Container maxWidth="lg" sx={{ py: 18 }}>
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Compensation Benefits & Rewards
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Strategic compensation and benefits programs designed to attract, motivate, and retain top talent while ensuring market competitiveness.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <AttachMoney sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Compensation Strategy
              </Typography>
              <Typography variant="body1">
                Market-competitive compensation structures and salary benchmarking to ensure fair and attractive pay packages.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <CardGiftcard sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Benefits Design
              </Typography>
              <Typography variant="body1">
                Comprehensive benefits packages including health insurance, retirement plans, and wellness programs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <TrendingUp sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Performance Rewards
              </Typography>
              <Typography variant="body1">
                Variable pay programs, bonuses, and incentive structures to reward high performance and drive results.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', p: 3 }}>
            <CardContent>
              <Balance sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Equity Programs
              </Typography>
              <Typography variant="body1">
                Employee stock options, equity compensation, and long-term incentive programs to align interests.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CompensationBenefits;
