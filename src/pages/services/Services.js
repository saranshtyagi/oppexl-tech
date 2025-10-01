import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

function Services() {
  const services = [
    {
      title: "HR Audits & Compliance",
      description:
        "Ensure your organization adheres to labor laws and best practices with thorough HR audits and expert compliance guidance.",
    },
    {
      title: "Mergers & Acquisitions Support",
      description:
        "Navigate workforce integration, due diligence, and HR strategies during organizational changes.",
    },
    {
      title: "Compensation & Benefits Consulting",
      description:
        "Design competitive and fair compensation structures to attract and retain top talent.",
    },
    {
      title: "Talent Management & Recruitment",
      description:
        "From hiring strategies to onboarding, we help you identify, nurture, and retain high-performing employees.",
    },
    {
      title: "Payroll Solutions",
      description:
        "Efficient, accurate, and automated payroll management tailored to your business needs.",
    },
    {
      title: "Government Advisory",
      description:
        "Expert support in regulatory requirements, statutory compliance, and policy guidance.",
    },
    {
      title: "HR Technology Solutions",
      description:
        "Leverage our advanced HRMS, LMS, and dynamic job portal to simplify the entire employee lifecycle and drive operational efficiency.",
    },
  ];

  return (
    <>
      <Box sx={{ pt: { xs: 14, md: 18 }, pb: 14, bgcolor: "#f8f9fa" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{ mb: 8 }}
          >
            Our Services
          </Typography>
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", textAlign: "justify", lineHeight: 1.8 }}
            >
              At Oppexl, we offer a comprehensive range of HR consulting and
              technology solutions designed to empower organizations and
              streamline workforce management. Our services include:
            </Typography>
          </Box>

          {/* Services Grid */}
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    transition: "0.3s ease",
                    "&:hover": { boxShadow: "0 6px 24px rgba(0,0,0,0.12)" },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      gutterBottom
                      color="primary"
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", lineHeight: 1.6 }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Closing Section */}
          <Box sx={{ mt: 10 }}>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", textAlign: "justify", lineHeight: 1.8 }}
            >
              Guided by integrity and transparency, we partner with businesses
              to unlock workforce potential, drive compliance, and enable
              sustainable growth. At the core, we are more than consultants – we
              are strategic partners shaping the future of work.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Services;
