import React, { useState, useMemo } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  Button
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function HRMS() {
  const workforceFocusAreas = useMemo(() => ({
    'Recruitment Automation': ['Resume Screening', 'Interview Scheduler', 'Offer Letters'],
    'Learning & Growth': ['Onboarding Modules', 'Skill Gap Analysis', 'Gamified LMS'],
    'Performance Management': ['OKR Tracking', 'Continuous Feedback', 'Appraisal Workflows'],
    'Employee Engagement': ['Pulse Surveys', 'Rewards & Recognition', 'Wellness Programs'],
    'Payroll': ['Attendance Tracking', 'Leave Management', 'Payroll Processing']
  }), []);

  // Initialize to a valid tab key
  const [selectedTab, setSelectedTab] = useState(
    Object.keys(workforceFocusAreas)[0]
  );

  const tabs = Object.keys(workforceFocusAreas);
  const currentItems = workforceFocusAreas[selectedTab] ?? [];

  const plans = [
    {
      name: 'Starter',
      desc: 'Core HR, attendance, and leave management for up to 50 employees'
    },
    {
      name: 'Growth',
      desc: 'Payroll automation, performance tracking, reports, 24x5 support'
    },
    {
      name: 'Enterprise',
      desc: 'All modules, customization, dedicated account manager, 24/7 SLA'
    }
  ];

  return (
    <>
      {/* Unified Workforce Section */}
      <Box sx={{ py: 18, bgcolor: '#e6f2fb' }}>
        <Container>
          <Typography variant="h4" textAlign="center" fontWeight={700} gutterBottom>
            Human Resource Management System (HRMS)
          </Typography>
          <Typography variant="h4" textAlign="center" fontWeight={500} gutterBottom>
            Streamlined Workforce, Maximum Output
          </Typography>
          <Typography variant="subtitle1" textAlign="center" gutterBottom>
            Streamline Payroll, Hiring, Training and HR Operations.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 6, gap: 2, flexWrap: 'wrap' }}>
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant={selectedTab === tab ? 'contained' : 'outlined'}
                onClick={() => setSelectedTab(tab)}
                sx={{ borderRadius: 20, textTransform: 'none', px: 3 }}
              >
                {tab}
              </Button>
            ))}
          </Box>

          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box>
                {currentItems.map((item) => (
                  <Box key={item} sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <CheckCircleIcon sx={{ color: '#4caf50', mr: 2 }} />
                    <Typography>{item}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ width: '100%', height: 300, borderRadius: 2, boxShadow: 2, overflow: 'hidden' }}>
                <img
                  src="/platform-diagram.png"
                  alt="Platform Design"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </Box>
            </Grid>
          </Grid>

          <Box textAlign="center" mt={10}>
            <Button variant="contained" color="error" size="large">
              Get Started with HRMS 🚀
            </Button>
          </Box>
        </Container>
      </Box>

      <Box sx={{ height: 64 }} />

      <Container>
        <Typography variant="h5" sx={{ pb: 3 }}>
          Subscription Plans
        </Typography>

        <Grid container spacing={3}>
          {plans.map((plan) => (
            <Grid item xs={12} sm={4} key={plan.name} sx={{ pb: 8 }}>
              <Card sx={{ bgcolor: '#f5f5f5', height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>{plan.name}</Typography>
                  <Typography variant="body2">{plan.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default HRMS;
