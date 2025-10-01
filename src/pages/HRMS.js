import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function HRMS() {
  const [selectedTab, setSelectedTab] = useState('HR Process Automation');

  const workforceFocusAreas = {
    'Recruitment Automation': ['Resume Screening', 'Interview Scheduler', 'Offer Letters'],
    'Learning & Growth': ['Onboarding Modules', 'Skill Gap Analysis', 'Gamified LMS'],
    'Performance Management': ['OKR Tracking', 'Continuous Feedback', 'Appraisal Workflows'],
    'Employee Engagement': ['Pulse Surveys', 'Rewards & Recognition', 'Wellness Programs'],
    'HR Process Automation': ['Attendance Tracking', 'Leave Management', 'Payroll Processing']
  };

  return (
    <>
  
      {/* Unified Workforce Section */}
      <Box sx={{ py: 18, bgcolor: '#e6f2fb' }}>
        <Container>
          <Typography variant="h4" textAlign="center" fontWeight={700} gutterBottom>Human Resource Management System (LMS)</Typography>
          <Typography variant="h4" textAlign="center" fontWeight={500} gutterBottom>
            Streamlined Workforce, Maximum Output
          </Typography>
          <Typography variant="subtitle1" textAlign="center" gutterBottom>
            Streamline hiring, training, and operations from a single suite
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 6, gap: 2, flexWrap: 'wrap' }}>
            {Object.keys(workforceFocusAreas).map((tab) => (
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
                {workforceFocusAreas[selectedTab].map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
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
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
          {[
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
          ].map((plan, index) => (
            <Grid item xs={12} sm={4} key={index} pb={8}>
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
