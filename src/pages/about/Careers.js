import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import { WorkOutline, EmojiEmotions, TrendingUp } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const highlights = [
  {
    icon: <WorkOutline fontSize="large" color="primary" />,
    title: 'Meaningful Work',
    text: 'Contribute to high-impact projects that shape the future of HR and workforce technology.',
  },
  {
    icon: <EmojiEmotions fontSize="large" color="secondary" />,
    title: 'Supportive Culture',
    text: 'Thrive in an inclusive, people-first environment that values every voice and well-being.',
  },
  {
    icon: <TrendingUp fontSize="large" color="success" />,
    title: 'Career Growth',
    text: 'Grow with personalized learning paths, mentorship, and leadership opportunities.',
  },
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.08 },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

function Careers() {
  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          pt: { xs: 14, md: 18 },
          pb: 10,
          bgcolor: '#f8f9fa',
          backgroundImage:
            'radial-gradient(1000px 400px at 10% -10%, rgba(0,123,255,0.08), transparent), radial-gradient(800px 300px at 90% 0%, rgba(34,197,94,0.08), transparent)',
        }}
      >
        <Container maxWidth="lg">
          <MotionBox initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 1 }}>
              Careers at Oppexl
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: '1.1rem', color: 'text.secondary', maxWidth: 900 }}
            >
              Join a team building the future of work. Oppexl values innovation, continuous learning, and inclusivity,
              creating an environment where everyone can thrive and make meaningful impact.
            </Typography>
          </MotionBox>

          {/* Highlights */}
          <Typography variant="h5" fontWeight="bold" gutterBottom textAlign="center" sx={{ mt: 8 }}>
            Why Join Oppexl?
          </Typography>

          <MotionBox
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Grid container spacing={4} sx={{ mt: 1 }}>
              {highlights.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.title}>
                  <MotionCard
                    variants={cardVariants}
                    whileHover={{ y: -6 }}
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                      overflow: 'hidden',
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center' }}>
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            borderRadius: 2,
                            bgcolor: 'background.default',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Typography variant="h6" fontWeight={700}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {item.text}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </MotionCard>
                </Grid>
              ))}
            </Grid>
          </MotionBox>

          {/* Culture blurb */}
          <MotionBox
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            sx={{ mt: 10 }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: '1.05rem', textAlign: 'justify', color: 'text.primary' }}
            >
              At Oppexl, product excellence starts with people excellence. Expect transparent communication, flexible ways
              of working, and recognition programs designed to celebrate wins and fuel growth.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Open roles section (optional placeholder for future integration) */}
      <Box sx={{ py: 8, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mb: 1 }}>
              Open Roles
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
              No active listings right now. Check back soon or reach out at careers@oppexl.com.
            </Typography>
          </MotionBox>
        </Container>
      </Box>
    </>
  );
}

export default Careers;
