import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Gavel,            
  Diversity3,      
  HealthAndSafety,  
  Verified,         
  Public,           
  Insights,         
} from "@mui/icons-material";

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionTypography = motion(Typography);

function SocialAudits() {
  const listItems = [
    "Labor and employment practices",
    "Health, safety, and workplace conditions",
    "Employee well-being and inclusion",
    "Environmental sustainability initiatives",
    "Ethical governance and community impact",
  ];

  const benefits = [
    {
      icon: <Verified color="primary" />,
      title: "Strengthen Compliance & Governance",
      text: "Ensure alignment with labor laws, safety norms, and ethical codes of conduct.",
    },
    {
      icon: <Insights color="success" />,
      title: "Boost Reputation & Trust",
      text: "Transparency strengthens brand loyalty among customers and employees.",
    },
    {
      icon: <Diversity3 color="secondary" />,
      title: "Improve Workplace Culture",
      text: "Surface concerns early to raise satisfaction, equity, and engagement.",
    },
    {
      icon: <Public color="action" />,
      title: "Encourage Sustainability",
      text: "Pinpoint ways to reduce waste, conserve resources, and go greener.",
    },
    {
      icon: <Gavel color="warning" />,
      title: "Drive Accountability",
      text: "Build ownership of ethical, fair, and inclusive practices across teams.",
    },
  ];

  const transformations = [
    {
      icon: <HealthAndSafety color="primary" />,
      title: "From Reactive to Proactive",
      text: "Spot issues like unsafe conditions or unfair practices early to reduce risk.",
    },
    {
      icon: <Diversity3 color="success" />,
      title: "From Compliance to Culture",
      text: "Embed responsibility into daily work—not just standards on paper.",
    },
    {
      icon: <Insights color="secondary" />,
      title: "From Short- to Long-Term Value",
      text: "Attract talent, improve retention, and build durable customer loyalty.",
    },
    {
      icon: <Gavel color="warning" />,
      title: "From Gaps to Growth",
      text: "Stronger governance builds credibility with investors and regulators.",
    },
  ];

  const headerAnim = {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.45 },
  };

  const cardAnim = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.4, delay },
    whileHover: { y: -6 },
  });

  return (
    <>
      <Box sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 10, md: 14 }, bgcolor: "#f8f9fa" }}>
        <Container maxWidth="lg">
          {/* Title */}
          <MotionTypography
            variant={{ xs: "h4", md: "h3" }}
            component="h1"
            fontWeight="bold"
            gutterBottom
            sx={{ mb: 2, fontSize: { xs: "1.8rem", md: "2.4rem" } }}
            {...headerAnim}
          >
            Internal Social Audits: The Hidden Engine of Business Transformation
          </MotionTypography>

          {/* Intro */}
          <MotionTypography
            variant="body1"
            sx={{ color: "text.secondary", fontSize: { xs: "1rem", md: "1.1rem" }, mb: 6, lineHeight: 1.8 }}
            {...headerAnim}
          >
            In today’s competitive landscape, organizations are judged by more than financials—stakeholders expect accountability, transparency, and responsibility. Internal social audits give companies a mechanism to evaluate whether daily practices align with social and ethical commitments, transforming culture, compliance, and credibility.
          </MotionTypography>

          {/* What is an Internal Social Audit */}
          <MotionTypography variant="h5" fontWeight={700} sx={{ mb: 2 }} {...headerAnim}>
            What is an Internal Social Audit?
          </MotionTypography>
          <MotionTypography
            variant="body1"
            sx={{ mb: 3, lineHeight: 1.8, fontSize: { xs: "1rem", md: "1.05rem" } }}
            {...headerAnim}
          >
            An internal social audit is a structured review that evaluates how well an organization aligns with social responsibility goals across people, safety, sustainability, ethics, and impact. Unlike external audits, it’s proactive and flexible—an internal compass that highlights risks, gaps, and opportunities before external scrutiny forces change.
          </MotionTypography>

          {/* Focus areas list */}
          <Grid container spacing={2} sx={{ mb: 6 }}>
            {listItems.map((text, idx) => (
              <Grid key={text} item xs={12} sm={6} md={4}>
                <MotionCard elevation={2} sx={{ borderRadius: 3, p: 2 }} {...cardAnim(idx * 0.03)}>
                  <CardContent sx={{ py: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      • {text}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>

          {/* Why Social Audits Matter */}
          <MotionTypography variant="h5" fontWeight={700} sx={{ mb: 3 }} {...headerAnim}>
            Why Social Audits Matter
          </MotionTypography>
          <Grid container spacing={3} sx={{ mb: 8 }}>
            {benefits.map((b, idx) => (
              <Grid key={b.title} item xs={12} sm={6} md={4}>
                <MotionCard
                  elevation={3}
                  sx={{ height: "100%", borderRadius: 3 }}
                  {...cardAnim(idx * 0.04)}
                >
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
                      {b.icon}
                      <Typography variant="subtitle1" fontWeight={700}>
                        {b.title}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {b.text}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>

          {/* How Audits Transform Companies */}
          <MotionTypography variant="h5" fontWeight={700} sx={{ mb: 3 }} {...headerAnim}>
            How Internal Social Audits Transform Companies
          </MotionTypography>
          <Grid container spacing={3} sx={{ mb: 8 }}>
            {transformations.map((t, idx) => (
              <Grid key={t.title} item xs={12} sm={6} md={6}>
                <MotionCard elevation={3} sx={{ height: "100%", borderRadius: 3 }} {...cardAnim(idx * 0.05)}>
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
                      {t.icon}
                      <Typography variant="subtitle1" fontWeight={700}>
                        {t.title}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {t.text}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>

          {/* The Way Forward */}
          <MotionTypography variant="h5" fontWeight={700} sx={{ mb: 2 }} {...headerAnim}>
            The Way Forward
          </MotionTypography>
          <MotionTypography
            variant="body1"
            sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8, fontSize: { xs: "1rem", md: "1.05rem" } }}
            {...headerAnim}
          >
            Internal social audits aren’t about fault-finding—they reveal opportunities to evolve. When embedded into culture, they move organizations beyond compliance to ethical, resilient, and sustainable operations. In an era where success blends performance and purpose, social audits power transformation and help leaders set the standards others follow.
          </MotionTypography>

          {/* CTA */}
          <MotionBox
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            textAlign="center"
          >
            <Typography variant="body1" sx={{ mb: 2 }}>
              Want to know how internal social audits can future-proof your organization?
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ borderRadius: 2 }}
              href="/contact"
            >
              Connect with our experts
            </Button>
          </MotionBox>
        </Container>
      </Box>
    </>
  );
}

export default SocialAudits;
