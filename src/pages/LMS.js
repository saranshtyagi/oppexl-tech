import React, { useMemo, useState } from "react";
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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SchoolRounded from "@mui/icons-material/SchoolRounded";
import StyleRounded from "@mui/icons-material/StyleRounded";
import EmojiEventsRounded from "@mui/icons-material/EmojiEventsRounded";
import InsightsRounded from "@mui/icons-material/InsightsRounded";
import SmartphoneRounded from "@mui/icons-material/SmartphoneRounded";
import HubRounded from "@mui/icons-material/HubRounded";
import RocketLaunchRounded from "@mui/icons-material/RocketLaunchRounded";
import WorkspacePremiumRounded from "@mui/icons-material/WorkspacePremiumRounded";
import SupportAgentRounded from "@mui/icons-material/SupportAgentRounded";
import DoneRounded from "@mui/icons-material/DoneRounded";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

function LMS() {
  // Tab groups similar to HRMS
  const featureGroups = useMemo(
    () => ({
      "Course Creation": [
        "Custom Course Builder",
        "SCORM/xAPI compatible",
        "Templates & media library",
        "Bulk import/export",
      ],
      "Engagement & Gamification": [
        "Interactive Quizzes & Certificates",
        "Gamification & Badges",
        "Streaks & Leaderboards",
        "Social learning forums",
      ],
      "Analytics & Insights": [
        "Progress Tracking & Reports",
        "Skill Gap Analysis",
        "Manager dashboards",
        "Learning ROI insights",
      ],
      "Anywhere Learning": [
        "Mobile Learning Support",
        "Offline mode (sync on connect)",
        "Responsive UI/UX",
        "Micro-learning journeys",
      ],
      "Integrations": [
        "Integration with HRMS & Job Portals",
        "SSO & RBAC",
        "Webhooks & APIs",
        "Calendar/Email integrations",
      ],
    }),
    []
  );

  const iconMap = {
    "Course Creation": SchoolRounded,
    "Engagement & Gamification": EmojiEventsRounded,
    "Analytics & Insights": InsightsRounded,
    "Anywhere Learning": SmartphoneRounded,
    Integrations: HubRounded,
  };

  const tabs = Object.keys(featureGroups);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const currentItems = featureGroups[selectedTab] ?? [];

  const plans = [
    {
      name: "Starter",
      desc: "Up to 100 users, manual course creation, basic insights",
      cta: "Contact Sales",
      highlight: false,
      features: ["Course Builder", "Basic Quizzes", "Basic Reports", "Email Support"],
      icon: RocketLaunchRounded,
      color: "success",
    },
    {
      name: "Growth",
      desc: "500+ users, analytics dashboard, certificates, mobile access",
      cta: "Contact Sales",
      highlight: true,
      features: ["Advanced Quizzes + Certs", "Analytics Dashboard", "Mobile App Access", "RBAC + SSO"],
      icon: WorkspacePremiumRounded,
      color: "primary",
    },
    {
      name: "Enterprise",
      desc: "Unlimited users, SCORM/xAPI, integrations, 24/7 support",
      cta: "Contact Sales",
      highlight: false,
      features: ["SCORM/xAPI", "Custom Integrations", "Dedicated CSM", "24/7 Priority Support"],
      icon: SupportAgentRounded,
      color: "warning",
    },
  ];

  return (
    <>
      <Box sx={{ height: 64 }} />

      <Container sx={{ py: 10 }}>
        {/* Header */}
        <MotionBox initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Learning Management System (LMS)
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: "text.secondary" }}>
            Oppexl LMS is a smart platform designed to upskill and engage the workforce with interactive, gamified, and data-driven learning modules.
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: "text.secondary" }}>
            Assign courses, track progress, conduct quizzes, and generate learning analytics—all from a central dashboard.
          </Typography>
        </MotionBox>

        {/* Animated Tabs */}
        <MotionBox
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", my: 3 }}
        >
          {tabs.map((tab) => (
            <Chip
              key={tab}
              label={tab}
              onClick={() => setSelectedTab(tab)}
              color={selectedTab === tab ? "primary" : "default"}
              variant={selectedTab === tab ? "filled" : "outlined"}
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
              <List>
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
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                minHeight: 260,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Stack spacing={1.2} alignItems="center">
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 2,
                    bgcolor: "primary.light",
                    color: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {React.createElement(iconMap[selectedTab] || StyleRounded)}
                </Box>
                <Typography variant="subtitle1" fontWeight={700}>
                  {selectedTab}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", maxWidth: 420 }}>
                  Explore {selectedTab.toLowerCase()} capabilities tailored for scalable, engaging learning experiences.
                </Typography>
              </Stack>
            </MotionCard>
          </Grid>
        </Grid>

        {/* CTA */}
        <MotionBox
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          textAlign="center"
          mt={6}
        >
          <Button variant="contained" color="primary" size="large">
            Try Oppexl LMS Now
          </Button>
        </MotionBox>

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
            Simple, transparent pricing that scales with learning needs.
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
                    position: "relative",
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: plan.highlight ? "0 10px 30px rgba(0,0,0,0.12)" : "0 6px 20px rgba(0,0,0,0.08)",
                    bgcolor: plan.highlight ? "background.paper" : "#f8fafc",
                    border: plan.highlight ? "2px solid" : "1px solid",
                    borderColor: plan.highlight ? "primary.main" : "divider",
                  }}
                >
                  {plan.highlight && (
                    <Chip
                      label="Recommended"
                      color="primary"
                      size="small"
                      sx={{ position: "absolute", top: 12, right: 12, fontWeight: 600 }}
                    />
                  )}
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
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
                        variant={plan.highlight ? "contained" : "outlined"}
                        color={plan.highlight ? "primary" : "inherit"}
                        sx={{ borderRadius: 2, textTransform: "none", fontWeight: 700 }}
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

export default LMS;
