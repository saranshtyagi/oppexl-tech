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
  ListItemText
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function JobPortal() {
  return (
    <>
      <Box sx={{ height: 64 }} />
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>Job Portal</Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              Oppexl's smart job portal automates recruitment with job listings, candidate tracking, resume parsing,
              and interview scheduling — all with intelligent filtering and analytics. Streamline hiring and connect with top talent effortlessly.
            </Typography>

            <Typography variant="body1" paragraph>
              Features include applicant tracking, automated follow-ups, integrated video interviews, role-based dashboards,
              recruiter analytics, and employer branding.
            </Typography>

            <List dense>
              {[
                "AI-based Resume Matching",
                "Custom Job Workflows",
                "Candidate Pipeline Visualization",
                "Email & SMS Notifications",
                "GDPR-Compliant Data Handling",
                "Team Collaboration Tools"
              ].map((feature, i) => (
                <ListItem key={i}>
                  <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                  <ListItemText primary={feature} />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="iframe"
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Z1BCujX3pw8"
              title="Job Portal Demo"
              frameBorder="0"
              allowFullScreen
            />
          </Grid>
        </Grid>

        <Typography variant="h5" sx={{ mt: 6, mb: 2 }}>
          Subscription Plans
        </Typography>

        <Grid container spacing={3}>
          {[
            {
              name: 'Basic',
              desc: 'Up to 10 job listings, manual resume screening, basic support'
            },
            {
              name: 'Professional',
              desc: 'Up to 50 listings, smart screening, email alerts, recruiter dashboards'
            },
            {
              name: 'Enterprise',
              desc: 'Unlimited listings, AI matching, white-label branding, team collaboration, premium support'
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
      </Container>
    </>
  );
}

export default JobPortal;
