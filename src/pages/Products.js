import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

function Products() {
  const products = [
    {
      title: "Learning Management System (LMS)",
      description:
        "A powerful platform for training, upskilling, and tracking employee development, enabling organizations to foster continuous learning and growth.",
    },
    {
      title: "Human Resource Management System (HRMS)",
      description:
        "An integrated solution to streamline HR operations, from attendance and payroll to performance management, ensuring efficiency and compliance.",
    },
    {
      title: "Dynamic Job Portal",
      description:
        "A next-generation platform connecting recruiters with the right talent quickly and effectively, with advanced search, filtering, and candidate management tools.",
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
            Our Products
          </Typography>

          <Box sx={{ mb: 8 }}>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontSize: "1.1rem", textAlign: "justify", lineHeight: 1.8 }}
            >
              Oppexl offers a suite of advanced HR technology solutions designed to simplify and enhance the employee lifecycle.
            </Typography>
          </Box>

          {/* Products Grid */}
          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    transition: "0.3s ease",
                    transform: "translateY(0)",
                    "&:hover": {
                      boxShadow: "0 6px 24px rgba(0,0,0,0.12)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      gutterBottom
                      color="primary"
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", lineHeight: 1.6 }}
                    >
                      {product.description}
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
              paragraph
              sx={{ fontSize: "1.1rem", textAlign: "justify", lineHeight: 1.8 }}
            >
              Our products are built with innovation, scalability, and user experience in mind, empowering organizations to optimize workforce management, improve engagement, and achieve sustainable growth.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Products;
