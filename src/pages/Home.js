import React, { useState } from 'react';
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
  Fab,
  Paper,
  TextField,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import { ArrowForward, CheckCircle, MonetizationOn, People, Chat, Send, TrendingUp, EmojiEmotions } from '@mui/icons-material';
import { Link } from 'react-router-dom';


function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatLog, setChatLog] = useState([
    { from: 'bot', text: 'Hi! How can we help you today?' }
  ]);

  const handleChatToggle = () => {
    setChatOpen(prev => !prev);
  };

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setChatLog([...chatLog, { from: 'user', text: chatMessage }]);
      setChatMessage('');
    }
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const features = [
    {
      icon: <MonetizationOn fontSize="large" sx={{ color: '#0ba5e9' }} />,
      title: 'Job Portal',
      description: 'Seamless hiring process with resume parsing and smart scheduling.',
      path: '/products/job-portal'
    },
    {
      icon: <People fontSize="large" sx={{ color: '#10b981' }} />,
      title: 'LMS',
      description: 'Upskill employees through interactive and gamified training modules.',
      path: '/products/lms'
    },
    {
      icon: <CheckCircle fontSize="large" sx={{ color: '#ec4899' }} />,
      title: 'HRMS',
      description: 'Automate HR operations, payroll, and compliance effortlessly.',
      path: '/products/hrms'
    }
  ];

  const blogPosts = [
    {
      title: 'How to Choose the Right HRMS for Your Business',
      snippet: 'Explore the key features to look for when selecting an HRMS for your organization.',
    },
    {
      title: '5 Benefits of Implementing an LMS',
      snippet: 'Learn how a learning management system can boost employee performance and retention.',
    },
    {
      title: 'Streamline Your Hiring Process with Automation',
      snippet: 'Discover how automation can save time and improve hiring quality.',
    }
  ];

  const insights = [
    {
      id: 'hr-trends-2025',
      title: 'Top 10 HR Tech Trends Report 2025',
      image: '/hr-trends.png',
      snippet: 'Explore the latest HR technology trends that will define 2025.',
      link: '/insights/hr-trends-2025',
    },
    {
      id: 'performance-management',
      title: 'Future-Focused Performance Management',
      image: '/performance-management.png',
      snippet: 'Discover how to align performance systems with evolving business goals.',
      link: '/insights/performance-management',
    },
    {
      id: 'magic-quadrant',
      title: "2024 Magic Quadrant Report",
      image: '/magic-quadrant.png',
      snippet: 'A look at the top players in the HCM software space, and why they matter.',
      link: '/insights/magic-quadrant',
    }
  ];

  return (
    <>
      <Toolbar />

      {/* Hero Section */}
      <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1
          }}
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <Box sx={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center' }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="h2" gutterBottom sx={{ color: 'black', fontWeight: 900 }}>
                Empowering Your Workforce with Technology
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: 'black' }}>
                Oppexl Technologies is your one stop solution for all human capital needs - HR Tech, Transformation, Audits and many more...
              </Typography>



            </Box>
          </Container>
        </Box>
      </Box>

      {/* Feature Cards Section */}
      <Box sx={{ py: 10, bgcolor: 'white' }}>
        <Container>
          <Typography variant="h4" gutterBottom textAlign="center">
            Everything you need to create a high performance culture
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {features.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ p: 3, boxShadow: 3, height: '100%' }}>
                  <Box sx={{ mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h6" gutterBottom>{item.title}</Typography>
                  <Typography variant="body2" paragraph>{item.description}</Typography>
                  <Button size="small" href={item.path}>Learn more →</Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Demo CTA Section */}
      <Box sx={{ textAlign: 'center', py: 10, bgcolor: '#f0f4f8' }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            See Oppexl in Action
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Discover how our platform can help streamline your HR and recruitment processes.
          </Typography>
          <Button variant="contained" size="large" color="primary" onClick={handleOpen}>
            Book a Free Demo
          </Button>
        </Container>
      </Box>

      {/* Demo Form Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Book a Free Demo</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" label="Name" type="text" fullWidth variant="outlined" sx={{ mb: 2 }} />
          <TextField margin="dense" label="Email" type="email" fullWidth variant="outlined" sx={{ mb: 2 }} />
          <TextField margin="dense" label="Company Name" type="text" fullWidth variant="outlined" sx={{ mb: 2 }} />
          <TextField margin="dense" label="Your Message" multiline rows={4} fullWidth variant="outlined" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>

      {/* Insights Section */}
      <Box sx={{ py: 10, bgcolor: '#f8fbff' }}>
        <Container>
          <Typography variant="h4" gutterBottom textAlign="center">
            Latest from our Oppexl Insights
          </Typography>
          <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{ mt: 2 }}>
            {insights.map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <CardActionArea href={item.link} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <CardMedia component="img" height="180" image={item.image} alt={item.title} />
                    <CardContent sx={{ bgcolor: '#eaf3fb', flexGrow: 1, width: '100%' }}>
                      <Typography variant="body1" fontWeight={600}>{item.title}</Typography>
                    </CardContent>
                    <Box sx={{ px: 2, pb: 2, alignSelf: 'flex-start' }}>
                      <ArrowForward />
                    </Box>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box mt={5} textAlign="center">
            <Button variant="contained" sx={{ bgcolor: '#002b54', borderRadius: 2 }} href="/insights" endIcon={<ArrowForward />}>
              View all from Oppexl Insights
            </Button>
          </Box>
        </Container>
      </Box>
 

{/* Trusted by Growing Teams */}
<Box sx={{ py: 10, bgcolor: '#f4f7fe' }}>
  <Container>
    <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 6 }}>
      Trusted by Growing Teams
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {[
        {
          number: '+50',
          label: 'Successful Hires',
          icon: <CheckCircle sx={{ fontSize: 40, color: '#22c55e' }} />,
        },
        {
          number: '+200',
          label: 'Audits Completed',
          icon: <TrendingUp sx={{ fontSize: 40, color: '#3b82f6' }} />,
        },
        {
          number: '+15',
          label: 'Pilot Companies',
          icon: <EmojiEmotions sx={{ fontSize: 40, color: '#f59e0b' }} />,
        }
      ].map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Box
            sx={{
              bgcolor: 'white',
              p: 4,
              borderRadius: 3,
              textAlign: 'center',
              boxShadow: 3,
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.05)' }
            }}
          >
            <Box sx={{ mb: 2 }}>{item.icon}</Box>
            <Typography variant="h4" fontWeight="bold" color="primary">
              {item.number}
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1, color: '#475569' }}>
              {item.label}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>



      {/* Chat Button and Chat Box */}
      <Box sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999, display: 'flex', alignItems: 'center' }}>
        <Typography variant="body1" sx={{ mr: 1 }}>Chat with Us</Typography>
        <Fab color="primary" onClick={handleChatToggle}><Chat /></Fab>
      </Box>

      {chatOpen && (
        <Box sx={{ position: 'fixed', bottom: 90, right: 24, zIndex: 9999, width: 300, height: 400, bgcolor: 'white', borderRadius: 2, boxShadow: 4, p: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" gutterBottom>Chat Assistant</Typography>
          <Box sx={{ flexGrow: 1, overflowY: 'auto', mb: 1 }}>
            {chatLog.map((msg, index) => (
              <Typography key={index} variant="body2" sx={{ mb: 0.5 }}>
                <strong>{msg.from === 'bot' ? 'Bot:' : 'You:'}</strong> {msg.text}
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: 'flex' }}>
            <TextField fullWidth size="small" value={chatMessage} onChange={(e) => setChatMessage(e.target.value)} placeholder="Type a message..." />
            <IconButton color="primary" onClick={handleSendMessage}><Send /></IconButton>
          </Box>
        </Box>
      )}
    </>
  );
}

export default Home;
