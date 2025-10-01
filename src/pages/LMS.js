import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function LMS() {
  return (
    <>
      <Box sx={{ height: 64 }} />
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" gutterBottom>Learning Management System (LMS)</Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              Oppexl LMS is a smart platform designed to upskill and engage your workforce with interactive,
              gamified, and data-driven learning modules.
            </Typography>
            <Typography variant="body1" paragraph>
              Easily assign courses, track progress, conduct quizzes, and generate learning analytics—all from a central dashboard.
            </Typography>

            <List dense>
              {[
                "Custom Course Builder",
                "Interactive Quizzes & Certificates",
                "Gamification & Badges",
                "Mobile Learning Support",
                "Progress Tracking & Reports",
                "Integration with HRMS & Job Portals"
              ].map((feature, i) => (
                <ListItem key={i}>
                  <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                  <ListItemText primary={feature} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        <Typography variant="h5" sx={{ mt: 6, mb: 2 }}>
          Subscription Plans
        </Typography>

        <Grid container spacing={3}>
          {[
            {
              name: 'Starter',
              desc: 'Up to 100 users, manual course creation, basic insights'
            },
            {
              name: 'Growth',
              desc: '500+ users, analytics dashboard, quizzes & certificates, mobile access'
            },
            {
              name: 'Enterprise',
              desc: 'Unlimited users, integrations, SCORM/xAPI support, 24/7 support'
            }
          ].map((plan, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{ bgcolor: '#f5f5f5', height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>{plan.name}</Typography>
                  <Typography variant="body2">{plan.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" mt={6}>
          <Button variant="contained" color="primary" size="large">
            Try Oppexl LMS Now
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default LMS;
