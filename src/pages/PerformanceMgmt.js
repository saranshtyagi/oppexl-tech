import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Divider,
} from "@mui/material";
import {
  TrendingUp,
  AutoAwesome,
  Psychology,
  Timeline,
  School,
  Hub,
  Insights,
  VerifiedUser,
  Groups,
  EmojiEvents,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const sections = [
  {
    title: "Future-Focused Performance Management: Redefining Growth in the Workplace",
    icon: TrendingUp,
    color: "primary",
    paragraphs: [
      "Performance management is transforming from annual reviews and rigid ratings into a continuous, tech-enabled system centered on growth, outcomes, and culture.",
      "Modern approaches integrate real-time feedback, analytics, and skill development to align employee potential with evolving business strategy.",
    ],
    tag: "Executive Summary",
  },
  {
    title: "Why the Shift is Necessary",
    icon: Insights,
    color: "secondary",
    paragraphs: [
      "Fast-changing markets and diverse workforce expectations render annual, one-way reviews ineffective for engagement and retention.",
      "Forward-looking systems prioritize continuous development, agility, and data-backed decisions to motivate and retain talent.",
    ],
    bullets: [
      "Encourage continuous feedback, not annual appraisals.",
      "Leverage data and AI for trends, predictions, and personalization.",
      "Emphasize skills and adaptability beyond outcomes alone.",
      "Align goals with business strategy in real time.",
    ],
    tag: "Context",
  },
];

const pillars = [
  {
    title: "Continuous Feedback and Conversations",
    icon: Groups,
    color: "success",
    points: [
      "Frequent manager-employee check-ins create transparency and enable rapid course correction.",
      "Ongoing dialogue builds trust and shifts focus from evaluation to enablement.",
    ],
  },
  {
    title: "AI-Driven Insights",
    icon: AutoAwesome,
    color: "info",
    points: [
      "Predicts skill gaps, patterns, and risks to inform objective, bias-resistant decisions.",
      "Transforms reviews with analytics that improve fairness and clarity.",
    ],
  },
  {
    title: "Agility and Goal Alignment",
    icon: Timeline,
    color: "warning",
    points: [
      "Dynamic goals adjust with priorities while preserving clarity of outcomes.",
      "Purpose-linked goals help employees see their impact on strategy.",
    ],
  },
  {
    title: "Employee-Centric Development",
    icon: School,
    color: "primary",
    points: [
      "Personalized paths, coaching, and real-time development recommendations unlock potential.",
      "Shifts from compliance ritual to growth platform with measurable progress.",
    ],
  },
  {
    title: "Integration with HR Technology",
    icon: Hub,
    color: "secondary",
    points: [
      "HRMS + LMS integration connects performance, learning, and engagement into one ecosystem.",
      "A 360° data view ties actions to outcomes across the employee journey.",
    ],
  },
];

const techRole = [
  {
    title: "Real-Time HRMS Signals",
    icon: VerifiedUser,
    color: "primary",
    points: [
      "Track productivity, attendance, and project signals to inform conversations.",
      "Surface nudges and exceptions for timely, constructive action.",
    ],
  },
  {
    title: "Adaptive LMS Journeys",
    icon: School,
    color: "success",
    points: [
      "Recommend upskilling based on performance gaps and future role needs.",
      "Embed learning in the flow of work with micro-pathways.",
    ],
  },
  {
    title: "Predictive Dashboards",
    icon: Psychology,
    color: "info",
    points: [
      "Anticipate attrition risk, engagement dips, and capability gaps.",
      "Guide leaders from retrospective evaluation to proactive enablement.",
    ],
  },
];

const benefits = [
  { title: "Higher Engagement", detail: "Frequent recognition and growth opportunities keep motivation high.", color: "success" },
  { title: "Better Retention", detail: "Clear development pathways increase commitment and reduce churn.", color: "primary" },
  { title: "Improved Outcomes", detail: "Goal alignment boosts productivity and organizational agility.", color: "warning" },
  { title: "Reduced Bias", detail: "Data-driven insights improve fairness and consistency.", color: "info" },
  { title: "Continuous Innovation", detail: "Adaptability and skill building keep teams competitive.", color: "secondary" },
];

const preparation = [
  "Invest in integrated, AI-powered HR tech connecting performance, learning, and analytics.",
  "Enable managers as coaches with guided prompts and two-way feedback.",
  "Redesign cycles for continuous check-ins and dynamic goals.",
  "Co-create goals and success metrics with employees to increase ownership.",
  "Build transparent frameworks emphasizing growth, trust, and recognition.",
];

function PerformanceMgmt() {
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
              Future-Focused Performance Management
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "text.secondary", mb: 6 }}>
              Redefining Growth in the Workplace
            </Typography>
          </MotionBox>

          {/* Intro sections */}
          <Grid container spacing={4} sx={{ mb: 2 }}>
            {sections.map(({ title, icon: Icon, color, paragraphs, bullets, tag }, idx) => (
              <Grid item xs={12} key={title}>
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  sx={{
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
                        {title}
                      </Typography>
                      {tag && (
                        <Chip label={tag} size="small" color={color} variant="outlined" sx={{ ml: 1 }} />
                      )}
                    </Stack>

                    <Stack spacing={1.5} sx={{ mt: 1 }}>
                      {paragraphs.map((p) => (
                        <Typography key={p} variant="body1" sx={{ lineHeight: 1.8, color: "text.primary" }}>
                          {p}
                        </Typography>
                      ))}
                    </Stack>

                    {bullets && (
                      <>
                        <Divider sx={{ my: 2 }} />
                        <Stack spacing={1.2}>
                          {bullets.map((b) => (
                            <Typography key={b} variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                              • {b}
                            </Typography>
                          ))}
                        </Stack>
                      </>
                    )}
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>

          {/* Core Pillars */}
          <MotionBox
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
              Core Pillars of Future-Focused Performance Management
            </Typography>
          </MotionBox>
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {pillars.map(({ title, icon: Icon, color, points }, idx) => (
              <Grid item xs={12} md={6} key={title}>
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
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
                      <Typography variant="subtitle1" fontWeight="bold">
                        {title}
                      </Typography>
                    </Stack>
                    <Stack spacing={1.2} sx={{ ml: 7, mt: 1 }}>
                      {points.map((p) => (
                        <Typography key={p} variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                          {p}
                        </Typography>
                      ))}
                    </Stack>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>

          {/* Role of Technology */}
          <MotionBox
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
              The Role of Technology in Shaping the Future
            </Typography>
          </MotionBox>
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {techRole.map(({ title, icon: Icon, color, points }, idx) => (
              <Grid item xs={12} md={4} key={title}>
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
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
                      <Typography variant="subtitle1" fontWeight="bold">
                        {title}
                      </Typography>
                    </Stack>
                    <Stack spacing={1.2} sx={{ ml: 7, mt: 1 }}>
                      {points.map((p) => (
                        <Typography key={p} variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                          {p}
                        </Typography>
                      ))}
                    </Stack>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>

          {/* Culture */}
          <MotionCard
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.08)", mb: 6 }}
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
                    bgcolor: "warning.light",
                    color: "warning.main",
                  }}
                >
                  <EmojiEvents />
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  Building a Culture of Transparency and Trust
                </Typography>
              </Stack>
              <Typography variant="body1" sx={{ color: "text.primary", lineHeight: 1.8 }}>
                Sustainable performance is culture-powered—organizations that value integrity, fairness, and open communication
                create clarity, psychological safety, and visible recognition that empower employees to thrive.
              </Typography>
            </CardContent>
          </MotionCard>

          {/* Benefits */}
          <MotionBox
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
              Benefits of Future-Focused Performance Management
            </Typography>
          </MotionBox>
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {benefits.map((b, idx) => (
              <Grid item xs={12} md={6} key={b.title}>
                <MotionCard
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  sx={{
                    borderRadius: 3,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    height: "100%",
                  }}
                >
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 0.5 }}>
                      <Chip label={b.title} color={b.color} variant="outlined" />
                    </Stack>
                    <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                      {b.detail}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>

          {/* Preparing for the Future */}
          <MotionBox
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
              Preparing for the Future
            </Typography>
          </MotionBox>
          <MotionCard
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.08)", mb: 6 }}
          >
            <CardContent>
              <Stack spacing={1.2}>
                {preparation.map((step) => (
                  <Typography key={step} variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                    • {step}
                  </Typography>
                ))}
              </Stack>
            </CardContent>
          </MotionCard>

          {/* Conclusion */}
          <MotionCard
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
          >
            <CardContent>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                Conclusion
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: "text.primary" }}>
                The future of performance management uses technology to empower people—shifting the conversation from past ratings
                to growth and enablement. With continuous feedback, data-driven insight, and integrated learning, organizations
                stay agile, employees feel valued, and results become sustainable.
              </Typography>
            </CardContent>
          </MotionCard>
        </Container>
      </Box>
    </>
  );
}

export default PerformanceMgmt;
