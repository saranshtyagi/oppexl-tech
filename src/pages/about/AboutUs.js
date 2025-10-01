import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Groups, Security, Lightbulb, EmojiObjects, Stars } from "@mui/icons-material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionTypography = motion(Typography);

function AboutUs() {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  // Animation helpers
  const sectionHeaderProps = {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.45 },
  };
  const paragraphProps = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.45 },
  };
  const cardProps = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.4, delay },
    whileHover: { y: -6 },
  });

  return (
    <>
      {/* Add space below fixed AppBar */}
      <Box sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 10, md: 14 }, bgcolor: "#f8f9fa" }}>
        <Container maxWidth="lg">
          {/* Main Heading */}
          <MotionTypography
            variant={isSmDown ? "h4" : "h3"}
            fontWeight="bold"
            gutterBottom
            sx={{ mb: 6 }}
            {...sectionHeaderProps}
          >
            About Us
          </MotionTypography>

          {/* Intro Section */}
          <MotionBox sx={{ mb: 8 }} {...paragraphProps}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                textAlign: "justify",
                lineHeight: 1.8,
              }}
            >
              We are a next-generation HR consulting and technology firm, empowering organizations with innovative
              people solutions and AI-driven platforms. With over a decade of consulting expertise, our team
              specializes in delivering end-to-end services across audits, mergers & acquisitions, compensation &
              benefits, talent management, recruitment, payroll, and government advisory.
              <br />
              <br />
              Our product suite includes advanced HRMS, LMS, and a dynamic job portal - designed to simplify and
              enhance the employee lifecycle. Guided by integrity and transparency, we partner with businesses to
              unlock workforce potential, drive compliance, and enable sustainable growth.
              <br />
              <br />
              At the core, we are more than consultants - we are strategic partners shaping the future of work.
            </Typography>
          </MotionBox>

          {/* Company Highlights */}
          <MotionTypography
            variant={isSmDown ? "h6" : "h5"}
            fontWeight="bold"
            gutterBottom
            textAlign="center"
            sx={{ mb: 6 }}
            {...sectionHeaderProps}
          >
            What Defines Us
          </MotionTypography>

          <Grid container spacing={4}>
            {[
              {
                icon: <Groups fontSize="large" color="primary" />,
                title: "People First",
                text:
                  "We believe in building inclusive workplaces where people thrive and contribute to their fullest potential.",
              },
              {
                icon: <Security fontSize="large" color="secondary" />,
                title: "Integrity & Trust",
                text:
                  "Our foundation is transparency and ethical practices, ensuring long-lasting relationships with clients.",
              },
              {
                icon: <Lightbulb fontSize="large" color="success" />,
                title: "Innovation at Core",
                text:
                  "From AI-driven HR solutions to advanced platforms, innovation drives everything we deliver.",
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <MotionCard
                  elevation={3}
                  sx={{ height: "100%", display: "flex", flexDirection: "column", p: 4, borderRadius: 3 }}
                  {...cardProps(index * 0.05)}
                >
                  <Box sx={{ textAlign: "center", mb: 3 }}>{item.icon}</Box>
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      gutterBottom
                      textAlign="center"
                      sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" textAlign="center" sx={{ color: "text.secondary" }}>
                      {item.text}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#f8f9fa", py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          {/* Main Heading */}
          <MotionTypography
            variant={isSmDown ? "h4" : "h3"}
            fontWeight="bold"
            gutterBottom
            sx={{ mb: 6 }}
            {...sectionHeaderProps}
          >
            Our Mission & Vision
          </MotionTypography>

          {/* Mission Section */}
          <MotionBox sx={{ mb: 8 }} {...paragraphProps}>
            <Typography variant={isSmDown ? "h6" : "h5"} fontWeight={600} gutterBottom sx={{ mb: 2 }}>
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, textAlign: "justify" }}>
              We empower organizations through cutting-edge HR and workforce technologies. We build intelligent,
              user-friendly solutions that streamline talent management, enhance employee engagement, optimize workflows,
              and drive business transformation.
            </Typography>
          </MotionBox>

          {/* Vision Section */}
          <MotionBox sx={{ mb: { xs: 8, md: 10 } }} {...paragraphProps}>
            <Typography variant={isSmDown ? "h6" : "h5"} fontWeight={600} gutterBottom sx={{ mb: 2 }}>
              Our Vision
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, textAlign: "justify" }}>
              Our vision is to become a global leader in providing seamless, AI-driven platforms and services for payroll,
              recruitment, talent management and HR transformation. We aspire to set the benchmark for excellence and trust
              in audits, workforce tech. and help businesses worldwide build high-performance, future-ready teams.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      <Box sx={{ pb: { xs: 8, md: 12 }, bgcolor: "#f8f9fa" }}>
        <Container maxWidth="lg">
          {/* Main Heading */}
          <MotionTypography
            variant={isSmDown ? "h4" : "h3"}
            fontWeight="bold"
            gutterBottom
            sx={{ mb: 6 }}
            {...sectionHeaderProps}
          >
            Leadership at Oppexl
          </MotionTypography>

          {/* Intro Section */}
          <MotionBox sx={{ mb: 6 }} {...paragraphProps}>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, textAlign: "justify" }}
            >
              At Oppexl, leadership means more than management—it means inspiring innovation, championing collaboration,
              and delivering long-term value to both employees and clients. Our leadership team is dedicated to steering
              the company with a clear vision, bold strategies, and a deep commitment to people and performance.
            </Typography>
          </MotionBox>

          {/* Leadership Pillars */}
          <MotionTypography
            variant={isSmDown ? "h6" : "h5"}
            fontWeight="bold"
            gutterBottom
            textAlign="center"
            sx={{ mb: 6 }}
            {...sectionHeaderProps}
          >
            What Defines Our Leadership
          </MotionTypography>

          <Grid container spacing={4}>
            {[
              {
                icon: <EmojiObjects fontSize="large" color="warning" />,
                title: "Visionary Thinking",
                text: "We anticipate future challenges and innovate with purpose to create meaningful solutions.",
              },
              {
                icon: <Groups fontSize="large" color="primary" />,
                title: "Collaborative Culture",
                text:
                  "Our leaders nurture teamwork and transparency, empowering every voice within the organization.",
              },
              {
                icon: <Stars fontSize="large" color="success" />,
                title: "Excellence & Integrity",
                text:
                  "We lead by example—maintaining high standards, acting ethically, and always striving to do better.",
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <MotionCard
                  elevation={3}
                  sx={{ height: "100%", display: "flex", flexDirection: "column", p: 4, borderRadius: 3 }}
                  {...cardProps(index * 0.05)}
                >
                  <Box sx={{ textAlign: "center", mb: 3 }}>{item.icon}</Box>
                  <CardContent
                    sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      gutterBottom
                      textAlign="center"
                      sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" textAlign="center" sx={{ color: "text.secondary" }}>
                      {item.text}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default AboutUs;
