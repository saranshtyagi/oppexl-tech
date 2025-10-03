import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Toolbar,
  Typography,
  TextField,
  Dialog,
  DialogContent,
  DialogActions,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Slider from "react-slick";
import {
  ArrowForward,
  CheckCircle,
  MonetizationOn,
  People,
  TrendingUp,
  EmojiEmotions,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionTypography = motion(Typography);

function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [clientReady, setClientReady] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [sending, setSending] = useState(false);


  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setClientReady(true);
  }, []);


  const featuresCarousel = [
    {
      key: "lms",
      icon: <People fontSize="large" sx={{ color: "#10b981" }} />,
      title: "LMS",
      description:
        "Upskill employees through interactive and gamified training modules.",
      path: "/products/lms",
    },
    {
      key: "hrms",
      icon: <CheckCircle fontSize="large" sx={{ color: "#ec4899" }} />,
      title: "HRMS",
      description:
        "Automate HR operations, payroll, and compliance effortlessly.",
      path: "/products/hrms",
    },
    {
      key: "job-portal",
      icon: <MonetizationOn fontSize="large" sx={{ color: "#0ba5e9" }} />,
      title: "Job Portal",
      description:
        "Seamless hiring process with resume parsing and smart scheduling.",
      path: "/products/job-portal",
    },
    {
      key: "mna",
      icon: <TrendingUp fontSize="large" sx={{ color: "#3b82f6" }} />,
      title: "Merger & Acquisitions",
      description:
        "End-to-end M&A support from due diligence to post-merger integration.",
      path: "/services/merger-acquisitions",
    },
    {
      key: "audits",
      icon: <CheckCircle fontSize="large" sx={{ color: "#22c55e" }} />,
      title: "Audits",
      description:
        "Comprehensive HR and compliance audits to reduce operational risk.",
      path: "/services/audits",
    },
    {
      key: "talent-management",
      icon: <EmojiEmotions fontSize="large" sx={{ color: "#f59e0b" }} />,
      title: "Talent Management",
      description:
        "Performance, succession, and skill mapping for a stronger bench.",
      path: "/services/talent-management",
    },
    {
      key: "comp-benefits-rewards",
      icon: <MonetizationOn fontSize="large" sx={{ color: "#16a34a" }} />,
      title: "Compensation, Benefits & Rewards",
      description: "Design pay and benefits programs at scale.",
      path: "/services/compensation-benefits",
    },
    {
      key: "recruitment",
      icon: <People fontSize="large" sx={{ color: "#0ea5e9" }} />,
      title: "Recruitment",
      description: "Source, screen, and hire faster with AI-enabled workflows.",
      path: "/services/recruitment",
    },
    {
      key: "payroll",
      icon: <MonetizationOn fontSize="large" sx={{ color: "#8b5cf6" }} />,
      title: "Payroll",
      description:
        "Accurate, compliant, and timely payroll processing across regions.",
      path: "/services/payroll",
    },
    {
      key: "gov-advisory",
      icon: <TrendingUp fontSize="large" sx={{ color: "#dc2626" }} />,
      title: "Government Advisory",
      description:
        "Advisory for public-sector HCM modernization and compliance.",
      path: "/services/government-advisory",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    pauseOnHover: true,
    pauseOnFocus: false,
    adaptiveHeight: true,
    mobileFirst: true,
    variableWidth: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1, infinite: false } },
    ],
  };

  const insights = [
    {
      id: "hr-trends-2025",
      title: "Top 10 HR Tech Trends Report 2025",
      image: "/hr-trends.png",
      snippet: "Explore the latest HR technology trends that will define 2025.",
      link: "/insights/hr-trends",
    },
    {
      id: "performance-management",
      title: "Future-Focused Performance Management",
      image: "/performance-management.png",
      snippet:
        "Discover how to align performance systems with evolving business goals.",
      link: "/insights/performance-management",
    },
    {
      id: "social-audits",
      title: "Internal Social Audits",
      image: "/social-audits.png",
      snippet: "The Hidden Engine of Business Transformation",
      link: "/insights/social-audits",
    },
  ];

  const videoRef = useRef(null);

  const sliderRef = useRef(null);
  useEffect(() => {
    const fix = () => {
      try {
        sliderRef.current?.slickGoTo(0);
        sliderRef.current?.innerSlider?.onWindowResized?.();
      } catch {}
    };
    if (clientReady) {
      const t1 = setTimeout(fix, 0);
      const t2 = setTimeout(fix, 150);
      window.addEventListener("orientationchange", fix);
      window.addEventListener("resize", fix);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        window.removeEventListener("orientationchange", fix);
        window.removeEventListener("resize", fix);
      };
    }
  }, [clientReady]);

  const handleWeb3Submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      formData.append("access_key", "f32d89ae-02b3-448a-b6e7-9053971e2de8");

      formData.append("subject", "New Demo Request via Website");
      formData.append("from_name", "Oppexl Website");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((r) => r.json());

      if (res.success) {
        setSnackOpen(true);
        setOpen(false);
        form.reset();
      } else {
        console.error("Web3Forms error:", res);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Toolbar />

      <Box
        sx={{
          position: "relative",
          height: { xs: "80vh", md: "100vh" },
          overflow: "hidden",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/heroImage.jpg"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            // backgroundColor: "transparent",
          }}
          onEnded={() => videoRef.current?.play()}
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: {
              xs: "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.15))",
              md: "none",
            },
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Container maxWidth="lg">
            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              sx={{
                textAlign: { xs: "center", md: "left" },
                px: { xs: 1, md: 0 },
              }}
            >
              <MotionTypography
                variant={isSmDown ? "h4" : isMdDown ? "h3" : "h2"}
                gutterBottom
                sx={{
                  color: { xs: "white", md: "black" },
                  fontWeight: 900,
                  lineHeight: 1.2,
                }}
              >
                Empowering Your Workforce with Technology
              </MotionTypography>
              <MotionTypography
                variant="body1"
                sx={{
                  mb: 3,
                  color: { xs: "white", md: "black" },
                  opacity: { xs: 0.95, md: 1 },
                  fontSize: { xs: "0.95rem", md: "1rem" },
                }}
              >
                Oppexl Technologies is your one stop solution for all Human
                Capital needs - HR Tech, Transformation, Audits and many more...
              </MotionTypography>
            </MotionBox>
          </Container>
        </Box>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "white" }}>
        <Container>
          <MotionTypography
            variant={isSmDown ? "h5" : "h4"}
            gutterBottom
            textAlign="center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            Everything you need to create a high performance culture
          </MotionTypography>

          <MotionBox
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            sx={{ mt: 4 }}
          >
            {clientReady && (
              <Slider ref={sliderRef} {...sliderSettings}>
                {featuresCarousel.map((item) => (
                  <Box key={item.key} sx={{ px: 1.5 }}>
                    <MotionCard
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4 }}
                      sx={{
                        p: 3,
                        boxShadow: 3,
                        height: "100%",
                        minHeight: 220,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Box sx={{ mb: 2 }}>{item.icon}</Box>
                      <Typography variant="h6" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        paragraph
                        sx={{ flexGrow: 1 }}
                      >
                        {item.description}
                      </Typography>
                      <Button
                        size="small"
                        component={Link}
                        to={item.path}
                        endIcon={<ArrowForward />}
                      >
                        Learn more
                      </Button>
                    </MotionCard>
                  </Box>
                ))}
              </Slider>
            )}
          </MotionBox>
        </Container>
      </Box>

      {/* Demo CTA Section */}
      <Box
        sx={{
          textAlign: "center",
          py: { xs: 6, md: 10 },
          bgcolor: "#f0f4f8",
          px: 1,
        }}
      >
        <Container>
          <MotionTypography
            variant={isSmDown ? "h5" : "h4"}
            fontWeight="bold"
            gutterBottom
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            See Oppexl in Action
          </MotionTypography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Discover how Oppexl can help transform your Human Capital.
          </Typography>
          <Button
            variant="contained"
            size={isSmDown ? "medium" : "large"}
            color="primary"
            onClick={handleOpen}
          >
            Book a Free Demo
          </Button>
        </Container>
      </Box>

      
      <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
        <DialogContent>
          <Box component="form" onSubmit={handleWeb3Submit}>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              name="user_name"
              type="text"
              fullWidth
              variant="outlined"
              sx={{ mb: 2 }}
              required
            />
            <TextField
              margin="dense"
              label="Email"
              name="user_email"
              type="email"
              fullWidth
              variant="outlined"
              sx={{ mb: 2 }}
              required
            />
            <TextField
              margin="dense"
              label="Contact Number"
              name="user_phone"
              type="text"
              fullWidth
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              margin="dense"
              label="Company Name"
              name="company"
              type="text"
              fullWidth
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              margin="dense"
              label="Your Message"
              name="message"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
            />

            <DialogActions sx={{ px: 0 }}>
              <Button onClick={handleClose} disabled={sending}>
                Cancel
              </Button>
              <Button variant="contained" type="submit" disabled={sending}>
                {sending ? "Submitting..." : "Submit"}
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Toast */}
      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={() => setSnackOpen(false)}
      >
        <Alert
          onClose={() => setSnackOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Submitted
        </Alert>
      </Snackbar>

      {/* Insights Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#f8fbff" }}>
        <Container>
          <MotionTypography
            variant={isSmDown ? "h5" : "h4"}
            gutterBottom
            textAlign="center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            Latest from our Oppexl Insights
          </MotionTypography>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
            sx={{ mt: 2 }}
          >
            {insights.map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <MotionCard
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4 }}
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <CardActionArea
                    component={Link}
                    to={item.link}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={item.image}
                      alt={item.title}
                    />
                    <CardContent
                      sx={{ bgcolor: "#eaf3fb", flexGrow: 1, width: "100%" }}
                    >
                      <Typography variant="body1" fontWeight={600}>
                        {item.title}
                      </Typography>
                    </CardContent>
                    <Box sx={{ px: 2, pb: 2, alignSelf: "flex-start" }}>
                      <ArrowForward />
                    </Box>
                  </CardActionArea>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
          <Box mt={5} textAlign="center">
            <Button
              variant="contained"
              sx={{ bgcolor: "#002b54", borderRadius: 2 }}
              component={Link}
              to="/insights"
              endIcon={<ArrowForward />}
            >
              View all from Oppexl Insights
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Trusted by Growing Teams */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#f4f7fe" }}>
        <Container>
          <MotionTypography
            variant={isSmDown ? "h5" : "h4"}
            fontWeight="bold"
            textAlign="center"
            sx={{ mb: 6 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            Trusted by Growing Teams
          </MotionTypography>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                number: "+50",
                label: "Successful Hires",
                icon: <CheckCircle sx={{ fontSize: 40, color: "#22c55e" }} />,
              },
              {
                number: "+200",
                label: "Audits Completed",
                icon: <TrendingUp sx={{ fontSize: 40, color: "#3b82f6" }} />,
              },
              {
                number: "+15",
                label: "Pilot Companies",
                icon: <EmojiEmotions sx={{ fontSize: 40, color: "#f59e0b" }} />,
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <MotionBox
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  sx={{
                    bgcolor: "white",
                    p: 4,
                    borderRadius: 3,
                    textAlign: "center",
                    boxShadow: 3,
                  }}
                >
                  <Box sx={{ mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h4" fontWeight="bold" color="primary">
                    {item.number}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ mt: 1, color: "#475569" }}
                  >
                    {item.label}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Home;
