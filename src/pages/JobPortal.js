import React, { useMemo, useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WorkOutlineRounded from '@mui/icons-material/WorkOutlineRounded';
import FindInPageRounded from '@mui/icons-material/FindInPageRounded';
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';
import TimelineRounded from '@mui/icons-material/TimelineRounded';
import ForumRounded from '@mui/icons-material/ForumRounded';
import LockPersonRounded from '@mui/icons-material/LockPersonRounded';
import RocketLaunchRounded from '@mui/icons-material/RocketLaunchRounded';
import WorkspacePremiumRounded from '@mui/icons-material/WorkspacePremiumRounded';
import SupportAgentRounded from '@mui/icons-material/SupportAgentRounded';
import DoneRounded from '@mui/icons-material/DoneRounded';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

function JobPortal() {
  const featureGroups = useMemo(
    () => ({
      'AI & Matching': [
        'AI-based Resume Matching',
        'Semantic candidate search',
        'Duplicate detection & merge',
        'Smart screening questions'
      ],
      'Pipelines & Workflow': [
        'Custom Job Workflows',
        'Candidate Pipeline Visualization',
        'Stage SLAs & reminders',
        'Bulk actions & automations'
      ],
      'Communication': [
        'Email & SMS Notifications',
        'Integrated video interviews',
        'Calendar scheduling links',
        'Templates & canned responses'
      ],
      'Analytics & Compliance': [
        'Recruiter analytics & funnels',
        'GDPR-Compliant Data Handling',
        'EEO/DEI tagging & reporting',
        'Exportable dashboards'
      ],
      'Collaboration & Branding': [
        'Team Collaboration Tools',
        'Role-based dashboards',
        'Employer branding pages',
        'Public careers site'
      ]
    }),
    []
  );

  const iconMap = {
    'AI & Matching': AutoAwesomeRounded,
    'Pipelines & Workflow': TimelineRounded,
    'Communication': ForumRounded,
    'Analytics & Compliance': LockPersonRounded,
    'Collaboration & Branding': WorkOutlineRounded
  };

  const tabs = Object.keys(featureGroups);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const currentItems = featureGroups[selectedTab] ?? [];

  const plans = [
    {
      name: 'Basic',
      desc: 'Up to 10 job listings, manual screening, basic notifications',
      price: 'Free trial',
      cta: 'Start Free',
      highlight: false,
      features: ['10 Listings', 'Basic ATS', 'Email Alerts', 'Email Support'],
      icon: RocketLaunchRounded,
      color: 'success'
    },
    {
      name: 'Professional',
      desc: '50 listings, smart screening, recruiter dashboards, automations',
      price: '₹6,999 / mo',
      cta: 'Choose Professional',
      highlight: true,
      features: ['50 Listings', 'AI Screening', 'Dashboards', 'Automations + RBAC'],
      icon: WorkspacePremiumRounded,
      color: 'primary'
    },
    {
      name: 'Enterprise',
      desc: 'Unlimited listings, AI matching, white-label branding, premium support',
      price: 'Custom',
      cta: 'Contact Sales',
      highlight: false,
      features: ['Unlimited Listings', 'AI Matching', 'White-label', '24/7 Priority Support'],
      icon: SupportAgentRounded,
      color: 'warning'
    }
  ];

  return (
    <>
      <Box sx={{ height: 64 }} />
      <Container sx={{ py: 10 }}>
        {/* Header */}
        <MotionBox initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Job Portal
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            Oppexl’s job portal automates recruitment with listings, pipelines, resume parsing, and interview scheduling—powered by intelligent search, filtering, and analytics.
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            Features include applicant tracking, automated follow-ups, integrated video interviews, role-based dashboards, recruiter analytics, and employer branding.
          </Typography>
        </MotionBox>

        {/* Tabs */}
        <MotionBox
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', my: 3 }}
        >
          {tabs.map((tab) => (
            <Chip
              key={tab}
              label={tab}
              onClick={() => setSelectedTab(tab)}
              color={selectedTab === tab ? 'primary' : 'default'}
              variant={selectedTab === tab ? 'filled' : 'outlined'}
              sx={{ borderRadius: 2, px: 1 }}
            />
          ))}
        </MotionBox>

        {/* Tab Content */}
        <Grid container spacing={4} alignItems="center" sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <MotionBox
              key={selectedTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <List dense>
                {currentItems.map((feature) => (
                  <ListItem key={feature} disableGutters sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircleIcon color="success" />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </MotionBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <MotionCard
              key={`${selectedTab}-card`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              sx={{
                p: 2,
                borderRadius: 3,
                boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                minHeight: 260,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}
            >
              <Stack spacing={1.2} alignItems="center">
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 2,
                    bgcolor: 'primary.light',
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {React.createElement(iconMap[selectedTab] || FindInPageRounded)}
                </Box>
                <Typography variant="subtitle1" fontWeight={700}>
                  {selectedTab}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 420 }}>
                  Explore {selectedTab.toLowerCase()} capabilities to accelerate hiring and improve candidate quality.
                </Typography>
              </Stack>
            </MotionCard>
          </Grid>
        </Grid>

        {/* Pricing / Plans */}
        <MotionBox
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          sx={{ mt: 8 }}
        >
          <Typography variant="h5" sx={{ pb: 1 }}>
            Subscription Plans
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ pb: 3 }}>
            Choose a plan that fits the hiring needs.
          </Typography>
        </MotionBox>

        <Grid container spacing={3} alignItems="stretch">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <Grid item xs={12} md={4} key={plan.name}>
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
                    borderColor: plan.highlight ? 'primary.main' : 'divider'
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
                          color: `${plan.color}.main`
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
                      <Typography variant="h6" fontWeight={800}>
                        {plan.price}
                      </Typography>
                      <Button
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

export default JobPortal;
