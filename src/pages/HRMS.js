import React, { useState, useMemo } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoneRounded from '@mui/icons-material/DoneRounded';
import RocketLaunchRounded from '@mui/icons-material/RocketLaunchRounded';
import WorkspacePremiumRounded from '@mui/icons-material/WorkspacePremiumRounded';
import SupportAgentRounded from '@mui/icons-material/SupportAgentRounded';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

function HRMS() {
  const workforceFocusAreas = useMemo(() => ({
    'Recruitment Automation': ['Resume Screening', 'Interview Scheduler', 'Offer Letters'],
    'Learning & Growth': ['Onboarding Modules', 'Skill Gap Analysis', 'Gamified LMS'],
    'Performance Management': ['OKR Tracking', 'Continuous Feedback', 'Appraisal Workflows'],
    'Employee Engagement': ['Pulse Surveys', 'Rewards & Recognition', 'Wellness Programs'],
    'Payroll': ['Attendance Tracking', 'Leave Management', 'Payroll Processing']
  }), []);

  const [selectedTab, setSelectedTab] = useState(Object.keys(workforceFocusAreas)[0]);
  const tabs = Object.keys(workforceFocusAreas);
  const currentItems = workforceFocusAreas[selectedTab] ?? [];

  const plans = [
    {
      name: 'Starter',
      desc: 'Core HR, attendance, and leave management for up to 50 employees',
      cta: 'Contact Sales',
      highlight: false,
      features: ['Employee Directory', 'Attendance & Leave', 'Basic Reports', 'Email Support'],
      icon: RocketLaunchRounded,
      color: 'success',
    },
    {
      name: 'Growth',
      desc: 'Payroll automation, performance tracking, analytics, 24x5 support',
      cta: 'Contact Sales',
      highlight: true,
      features: ['Full Payroll Suite', 'Performance & OKRs', 'Advanced Analytics', 'SSO + Role-Based Access'],
      icon: WorkspacePremiumRounded,
      color: 'primary',
    },
    {
      name: 'Enterprise',
      desc: 'All modules, customization, dedicated account manager, 24/7 SLA',
      cta: 'Contact Sales',
      highlight: false,
      features: ['All Modules + LMS', 'Custom Workflows', 'Dedicated CSM', '24/7 Priority Support'],
      icon: SupportAgentRounded,
      color: 'warning',
    },
  ];

  return (
    <>
      {/* Unified Workforce Section */}
      <Box sx={{ py: 18, bgcolor: '#e6f2fb' }}>
        <Container>
          <MotionBox initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Typography variant="h4" textAlign="center" fontWeight={700} gutterBottom>
              Human Resource Management System (HRMS)
            </Typography>
            <Typography variant="h4" textAlign="center" fontWeight={500} gutterBottom>
              Streamlined Workforce, Maximum Output
            </Typography>
            <Typography variant="subtitle1" textAlign="center" gutterBottom>
              Streamline Payroll, Hiring, Training and HR Operations.
            </Typography>
          </MotionBox>

          {/* Tabs */}
          <MotionBox
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 6, gap: 2, flexWrap: 'wrap' }}
          >
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
          </MotionBox>

          {/* Features + Visual */}
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
              >
                {currentItems.map((item) => (
                  <Box key={item} sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <CheckCircleIcon sx={{ color: '#4caf50', mr: 2 }} />
                    <Typography>{item}</Typography>
                  </Box>
                ))}
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                sx={{ width: '100%', height: 300, borderRadius: 2, boxShadow: 2, overflow: 'hidden' }}
              >
                <img
                  src="/platform-diagram.png"
                  alt="Platform Design"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </MotionBox>
            </Grid>
          </Grid>

          <MotionBox
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            textAlign="center"
            mt={10}
          >
            <Button variant="contained" color="error" size="large">
              Get Started with HRMS 🚀
            </Button>
          </MotionBox>
        </Container>
      </Box>

      <Box sx={{ height: 64 }} />

      {/* Pricing / Plans */}
      <Container>
        <MotionBox
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <Typography variant="h5" sx={{ pb: 1 }}>
            Subscription Plans
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ pb: 3 }}>
            Simple, transparent pricing that scales with the organization.
          </Typography>
        </MotionBox>

        <Grid container spacing={3} alignItems="stretch">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <Grid item xs={12} md={4} key={plan.name} sx={{ pb: { xs: 2, md: 4 } }}>
                <MotionCard
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                  sx={{
                    position: 'relative',
                    height: '100%',
                    borderRadius: 3,
                    boxShadow: plan.highlight ? '0 10px 30px rgba(0,0,0,0.12)' : '0 6px 20px rgba(0,0,0,0.08)',
                    bgcolor: plan.highlight ? 'background.paper' : '#f8fafc',
                    border: plan.highlight ? '2px solid' : '1px solid',
                    borderColor: plan.highlight ? 'primary.main' : 'divider',
                  }}
                >
                  {plan.highlight && (
                    <Chip
                      label="Recommended"
                      color="primary"
                      size="small"
                      sx={{ position: 'absolute', top: 12, right: 12, fontWeight: 600 }}
                    />
                  )}
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: `${plan.color}.light`,
                          color: `${plan.color}.main`,
                        }}
                      >
                        <Icon />
                      </Box>
                      <Typography variant="h6" fontWeight={700}>
                        {plan.name}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {plan.desc}
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Stack spacing={1.2} sx={{ mb: 2 }}>
                      {plan.features.map((f) => (
                        <Stack key={f} direction="row" spacing={1} alignItems="center">
                          <DoneRounded fontSize="small" color="success" />
                          <Typography variant="body2" color="text.secondary">
                            {f}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>

                    <Stack direction="row" alignItems="baseline" justifyContent="space-between" sx={{ mt: 1 }}>
                      <Button
                        href="mailto:support@oppexl.com"
                        variant={plan.highlight ? 'contained' : 'outlined'}
                        color={plan.highlight ? 'primary' : 'inherit'}
                        sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 700 }}
                      >
                        {plan.cta}
                      </Button>
                    </Stack>
                  </CardContent>
                </MotionCard>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default HRMS;
