import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import {
  Policy,               // Audits & Compliance
  TrendingUp,           // M&A
  Payments,             // Compensation & Benefits
  ManageAccounts,       // Talent Management
  RequestQuote,         // Payroll
  Gavel,                // Government Advisory
  Work,                 // Recruitment / HR Tech
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

function Services() {
  const services = [
    {
      title: "HR Audits & Compliance",
      description:
        "Ensure your organization adheres to labor laws and best practices with thorough HR audits and expert compliance guidance.",
      path: "/services/audits",
      icon: Policy,
      color: "primary",
    },
    {
      title: "Mergers & Acquisitions Support",
      description:
        "Navigate workforce integration, due diligence, and HR strategies during organizational changes.",
      path: "/services/merger-acquisitions",
      icon: TrendingUp,
      color: "secondary",
    },
    {
      title: "Compensation & Benefits Consulting",
      description:
        "Design competitive and fair compensation structures to attract and retain top talent.",
      path: "/services/compensation-benefits",
      icon: Payments,
      color: "warning",
    },
    {
      title: "Talent Management",
      description:
        "From hiring strategies to onboarding, we help you identify, nurture, and retain high-performing employees.",
      path: "/services/talent-management",
      icon: ManageAccounts,
      color: "success",
    },
    {
      title: "Payroll Solutions",
      description:
        "Efficient, accurate, and automated payroll management tailored to your business needs.",
      path: "/services/payroll",
      icon: RequestQuote,
      color: "info",
    },
    {
      title: "Government Advisory",
      description:
        "Expert support in regulatory requirements, statutory compliance, and policy guidance.",
      path: "/services/government-advisory",
      icon: Gavel,
      color: "error",
    },
    {
      title: "Recruitment & HR Technology Solutions",
      description:
        "Leverage our advanced HRMS, LMS, and dynamic job portal to simplify the entire employee lifecycle and drive operational efficiency.",
      path: "/services/recruitment",
      icon: Work,
      color: "primary",
    },
  ];

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
            <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 1 }}>
              Our Services
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", color: "text.secondary", mb: 6 }}
            >
              We offer a comprehensive range of HR consulting and technology solutions designed to empower organizations and streamline workforce management.
            </Typography>
          </MotionBox>

          {/* Services Grid */}
          <Grid container spacing={4}>
            {services.map(({ title, description, path, icon: Icon, color }, index) => (
              <Grid item xs={12} md={6} lg={4} key={title}>
                <MotionCard
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    overflow: "hidden",
                  }}
                >
                  <CardActionArea component={Link} to={path}>
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
                        <Typography variant="h6" fontWeight="bold" color="text.primary">
                          {title}
                        </Typography>
                      </Stack>

                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", lineHeight: 1.7, ml: 7 }}
                      >
                        {description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </MotionCard>
              </Grid>
            ))}
          </Grid>

          {/* Closing Section */}
          <MotionBox
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            sx={{ mt: 10 }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", textAlign: "justify", lineHeight: 1.8 }}
            >
              Guided by integrity and transparency, we partner with businesses to unlock workforce potential, drive compliance, and enable sustainable growth. At the core, we are more than consultants—strategic partners shaping the future of work.
            </Typography>
          </MotionBox>
        </Container>
      </Box>
    </>
  );
}

export default Services;
