import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Phone } from '@mui/icons-material';
import { Email } from '@mui/icons-material';
import { LocationOn } from '@mui/icons-material';

function ContactUs() {
    return (
    <>
        <Box sx={{ pt: { xs: 14, md: 18 }, bgcolor: '#f8f9fa' }}>
            <Container maxWidth="md">
                <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 6 }}>
                    Call Us
                </Typography>
    
                <Box display="flex" alignItems="center" gap={2} mb={3}>
                    <Phone fontSize="large" color="secondary" />
                    <Typography variant="h6" fontWeight={500}>
                      +91 8168358488
                    </Typography>
                </Box>
     
                <Typography variant="body1" sx={{ fontSize: '1.1rem', textAlign: 'justify' }}>
                    Our support and sales team is available from Monday to Friday, 9 AM to 6 PM IST. Call us for real-time assistance,
                    queries about features, or to speak with a solution specialist.
                </Typography>
            </Container>
        </Box>
        <Box sx={{ pt: { xs: 4, md: 8 }, bgcolor: '#f8f9fa' }}>
            <Container maxWidth="md">
               
                <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 6 }}>
                    Email Us
                </Typography>

                <Box display="flex" alignItems="center" gap={2} mb={3}>
                    <Email fontSize="large" color="primary" />
                    <Typography variant="h6" fontWeight={500}>
                      hr@oppexl.com
                    </Typography>
                </Box>
        
                <Typography variant="body1" sx={{ fontSize: '1.1rem', textAlign: 'justify' }}>
                    Reach out to us anytime, and our team will get back to you as soon as possible. For product demos, support, or
                    partnership inquiries, drop us a message and we’ll be happy to assist.
                </Typography>
            </Container>
        </Box>
        <Box sx={{ pt: { xs: 4, md: 8 }, pb: 10, bgcolor: '#f8f9fa' }}>
            <Container maxWidth="md">
        
                <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 6 }}>
                    Visit Our Office
                </Typography>
        
                <Box display="flex" alignItems="center" gap={2} mb={3}>
                    <LocationOn fontSize="large" color="success" />
                    <Typography variant="h6" fontWeight={500}>
                      2nd Floor, Welldone Tech Park, Sohna Road, Sector 48, Gurugram, Haryana 122018
                    </Typography>
                </Box>
        
                <Typography variant="body1" sx={{ fontSize: '1.1rem', textAlign: 'justify' }}>
                    We welcome visits from partners, clients, and job applicants. Please contact us in advance to schedule an
                    appointment so we can ensure a smooth experience for you.
                </Typography>
            </Container>
        </Box>
    </>
    )
}

export default ContactUs;