import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
} from "@mui/material";
import {
  AutoAwesome, // AI
  Psychology,   // Skills / Talent
  Insights,     // Analytics
  School,       // Learning
  Payments,     // Compensation
  SupportAgent, // Employee Experience
  ReceiptLong,  // Payroll
  HomeWork,     // Hybrid work
  Favorite,     // Wellness
  Diversity3,   // DEI
} from "@mui/icons-material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const trends = [
  {
    title: "AI-Powered Recruitment",
    icon: AutoAwesome,
    color: "primary",
    points: [
      "Smart ATS screens resumes using AI for skills over degrees.",
      "Video interviews integrate AI-driven sentiment and skill analysis.",
    ],
    tag: "Recruitment Tech",
  },
  {
    title: "Skills-Based Talent Management",
    icon: Psychology,
    color: "secondary",
    points: [
      "Shift from job titles to skills frameworks.",
      "AI-powered internal marketplaces match employees to projects.",
    ],
    tag: "Talent & Skills",
  },
  {
    title: "HR Analytics & Predictive Insights",
    icon: Insights,
    color: "info",
    points: [
      "Predictive analytics forecast attrition, burnout, and skill gaps.",
      "Data-driven decision-making replaces intuition in workforce planning.",
    ],
    tag: "People Analytics",
  },
  {
    title: "Digital Learning & Micro‑Learning",
    icon: School,
    color: "success",
    points: [
      "LMS with AI tutors and adaptive learning for personalization.",
      "Micro-learning and gamification rise for Gen Z engagement.",
    ],
    tag: "Learning Tech",
  },
  {
    title: "Compensation & Benefits Tech",
    icon: Payments,
    color: "warning",
    points: [
      "AI tools benchmark salaries in real time.",
      "Personalized benefits portals tailor insurance, wellness, and perks.",
    ],
    tag: "Rewards",
  },
  {
    title: "Employee Experience Platforms (EXP)",
    icon: SupportAgent,
    color: "primary",
    points: [
      "Unified HR, payroll, engagement, and performance in one app.",
      "AI chatbots handle HR queries 24/7.",
    ],
    tag: "EXP",
  },
  {
    title: "Payroll Automation & Compliance",
    icon: ReceiptLong,
    color: "secondary",
    points: [
      "Blockchain and AI enable transparent, error‑free payroll.",
      "Real-time compliance updates for India and global labor laws.",
    ],
    tag: "Payroll",
  },
  {
    title: "Hybrid & Remote Work Enablement",
    icon: HomeWork,
    color: "info",
    points: [
      "Smart scheduling balances on‑site and remote staffing.",
      "VR meetings and digital whiteboards improve collaboration.",
    ],
    tag: "Future of Work",
  },
  {
    title: "Wellness & Mental Health Tech",
    icon: Favorite,
    color: "error",
    points: [
      "Wearables integrated into HRMS track stress, sleep, and wellness.",
      "AI wellness apps recommend interventions to prevent burnout.",
    ],
    tag: "Wellbeing",
  },
  {
    title: "Diversity, Equity & Inclusion (DEI) Tech",
    icon: Diversity3,
    color: "success",
    points: [
      "Bias‑detection algorithms ensure fair shortlisting.",
      "Dashboards track diversity in hiring, promotions, and pay equity.",
    ],
    tag: "DEI",
  },
];

function HrTrends() {
  return (
    <>
      <Box sx={{ pt: { xs: 14, md: 18 }, pb: 14, bgcolor: "#f8f9fa" }}>
        <Container maxWidth="lg">
          {/* Header */}
          <MotionBox
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h3" fontWeight="bold" sx={{ mb: 1 }}>
              HR Trends Report
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", color: "text.secondary", mb: 6 }}
            >
              A concise report on the top 10 HR technology and people-strategy trends shaping modern workplaces.
            </Typography>
          </MotionBox>

          {/* Trend Cards */}
          <Grid container spacing={4}>
            {trends.map(({ title, icon: Icon, color, points, tag }, idx) => (
              <Grid item xs= {12} md={6} key={title}>
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    overflow: "hidden",
                  }}
                >
                  <CardContent>
                    <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1 }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: `${color}.light`,
                          color: `${color}.main`,
                        }}
                      >
                        <Icon />
                      </Box>
                      <Typography variant="h6" fontWeight="bold">
                        {idx + 1}. {title}
                      </Typography>
                    </Stack>

                    <Stack spacing={1.2} sx={{ ml: 7, mt: 1 }}>
                      {points.map((p) => (
                        <Typography
                          key={p}
                          variant="body2"
                          sx={{ color: "text.secondary", lineHeight: 1.7 }}
                        >
                          {p}
                        </Typography>
                      ))}
                    </Stack>

                    <Stack direction="row" sx={{ mt: 2, ml: 7 }}>
                      <Chip label={tag} color={color} size="small" variant="outlined" />
                    </Stack>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>

          {/* Footer note */}
          <MotionBox
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            sx={{ mt: 10 }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: "1.05rem", textAlign: "justify", lineHeight: 1.8 }}
            >
              These trends underscore a shift toward AI-first, skills-centric, and employee‑experience led HR functions, supported by secure, automated, and compliant platforms.
            </Typography>
          </MotionBox>
        </Container>
      </Box>
    </>
  );
}

export default HrTrends;
