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
  School,          // LMS
  ManageHistory,   // HRMS
  Work,            // Job Portal
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

function Products() {
  const products = [
    {
      title: "Learning Management System (LMS)",
      description:
        "A powerful platform for training, upskilling, and tracking employee development, enabling organizations to foster continuous learning and growth.",
      path: "/products/lms",
      icon: School,
      color: "success",
    },
    {
      title: "Human Resource Management System (HRMS)",
      description:
        "An integrated solution to streamline HR operations, from attendance and payroll to performance management, ensuring efficiency and compliance.",
      path: "/products/hrms",
      icon: ManageHistory,
      color: "primary",
    },
    {
      title: "Dynamic Job Portal",
      description:
        "A next-generation platform connecting recruiters with the right talent quickly and effectively, with advanced search, filtering, and candidate management tools.",
      path: "/products/job-portal",
      icon: Work,
      color: "info",
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
              Our Products
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{ fontSize: "1.1rem", color: "text.secondary" }}
            >
              Oppexl offers a suite of advanced HR technology solutions designed to simplify and enhance the employee lifecycle.
            </Typography>
          </MotionBox>

          {/* Products Grid */}
          <Grid container spacing={4}>
            {products.map(({ title, description, path, icon: Icon, color }, index) => (
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
              paragraph
              sx={{ fontSize: "1.1rem", textAlign: "justify", lineHeight: 1.8 }}
            >
              Our products are built with innovation, scalability, and user experience in mind, empowering organizations to optimize workforce management, improve engagement, and achieve sustainable growth.
            </Typography>
          </MotionBox>
        </Container>
      </Box>
    </>
  );
}

export default Products;
