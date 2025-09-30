import React from 'react';
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import OppexlLogo from '../OppexlLogo.png';
import { Email, Phone, LocationOn, LinkedIn, Twitter, Facebook } from '@mui/icons-material';

function Footer() {
  return (
    <Box sx={{ bgcolor: '#002b54', color: 'white', px: 4, py: 6 }}>
      <Grid container spacing={4}>
        {/* Logo & About */}
        <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
            <img
              src={OppexlLogo}
              alt="Oppexl Logo"
              style={{ height: 130, marginBottom: 8 }}
            />
            <Typography variant="body2" sx={{ mt: 1 }}>
              Oppexl Technologies LLP
            </Typography>
          </Box>

          {/* Contact Info */}
          <Box sx={{ mt: 2 }}>
            <Box display="flex" alignItems="center" mb={1}>
              <LocationOn fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">2nd Floor, Welldone Tech Park, Sohna Road, Sector 48, Gurugram, Haryana 122018</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Email fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">
                <Link href="mailto:hr@oppexl.com" color="inherit" underline="hover">
                  hr@oppexl.com
                </Link>
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Phone fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">
                <Link href="tel:+918168358488" color="inherit" underline="hover">
                  +91 8168358488
                </Link>
              </Typography>
            </Box>
          </Box>

          {/* Social Links */}
          <Box sx={{ mt: 2 }}>
            <IconButton href="https://www.linkedin.com/company/oppexl" color="inherit">
              <LinkedIn />
            </IconButton>
            <IconButton href="https://twitter.com/oppexl" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton href="https://facebook.com/oppexl" color="inherit">
              <Facebook />
            </IconButton>
          </Box>
        </Grid>

        {/* Products */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" gutterBottom>Products</Typography>
          {['HRMS', 'LMS', 'Job Portal'].map((item) => (
            <Typography key={item} variant="body2">
              <Link href="#" underline="hover" color="inherit">{item}</Link>
            </Typography>
          ))}
        </Grid>

        {/* Services */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" gutterBottom>Services</Typography>
          {['Merger & Acquisitions', 'Audits', 'Talent Management', 'Compensation, Benefits & Rewards', 'Recruitment', 'Payroll', 'Government Advisory'].map((item) => (
            <Typography key={item} variant="body2">
              <Link href="#" underline="hover" color="inherit">{item}</Link>
            </Typography>
          ))}
        </Grid>

        {/* Resources */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" gutterBottom>Resources</Typography>
          {['Blog', 'Case Studies', 'Events', 'Webinars'].map((item) => (
            <Typography key={item} variant="body2">
              <Link href="#" underline="hover" color="inherit">{item}</Link>
            </Typography>
          ))}
        </Grid>

        {/* Company */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" gutterBottom>Company</Typography>
          {['About Us', 'Careers', 'Contact', 'Privacy Policy'].map((item) => (
            <Typography key={item} variant="body2">
              <Link href="#" underline="hover" color="inherit">{item}</Link>
            </Typography>
          ))}
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Typography variant="body2">
          © 2025 <strong>Oppexl</strong>. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
