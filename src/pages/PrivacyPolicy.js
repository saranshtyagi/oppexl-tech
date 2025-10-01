import React from 'react';
import { Box, Container, Typography, Link as MLink } from '@mui/material';

function Section({ children, pt = { xs: 6, md: 8 } }) {
  return (
    <Box sx={{ pt, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="md">
        {children}
      </Container>
    </Box>
  );
}

const P = ({ children }) => (
  <Typography variant="body1" sx={{ fontSize: '1.05rem', mb: 2, lineHeight: 1.7 }}>
    {children}
  </Typography>
);

const H1 = ({ children }) => (
  <Typography variant="h3" fontWeight={700} gutterBottom sx={{ mb: 2 }}>
    {children}
  </Typography>
);

const H2 = ({ children }) => (
  <Typography variant="h5" fontWeight={700} gutterBottom sx={{ mt: 4, mb: 1 }}>
    {children}
  </Typography>
);

const UL = ({ children }) => (
  <Box component="ul" sx={{ pl: 3, mb: 2 }}>
    {children}
  </Box>
);

const LI = ({ children }) => (
  <Box component="li" sx={{ mb: 1.0 }}>
    <Typography variant="body1" component="span" sx={{ fontSize: '1.05rem' }}>
      {children}
    </Typography>
  </Box>
);

export default function PrivacyPolicy() {
  return (
    <Section pt={{ xs: 14, md: 18 }}>
      <H1>Privacy Policy</H1>
      <P><strong>Effective Date:</strong> October 1, 2025</P>
      <P>
        Oppexl (“we,” “our,” or “us”) values your privacy and is committed to protecting your personal information.
        This Privacy Policy explains how we collect, use, store, and protect information when you visit and use our
        website <em>[oppexl.com]</em> (the “Site”) or services offered by Oppexl. By using our Site, you agree to the
        terms outlined in this policy.
      </P>

      <H2>1. Information We Collect</H2>
      <P>We may collect the following types of information:</P>
      <P><strong>a) Personal Information:</strong></P>
      <UL>
        <LI>Name, email address, phone number</LI>
        <LI>Resume, educational qualifications, work experience</LI>
        <LI>Account login credentials</LI>
      </UL>
      <P><strong>b) Non-Personal Information:</strong></P>
      <UL>
        <LI>IP address, browser type, device type</LI>
        <LI>Pages visited, time spent on Site, and other usage data</LI>
        <LI>Cookies and analytics information</LI>
      </UL>

      <H2>2. How We Use Your Information</H2>
      <P>We use your information to:</P>
      <UL>
        <LI>Provide, operate, and improve our services</LI>
        <LI>Facilitate communication between recruiters and candidates</LI>
        <LI>Personalize your experience on the Site</LI>
        <LI>Send important updates, notifications, and promotional messages (you may opt-out)</LI>
        <LI>Comply with legal requirements and prevent fraud</LI>
      </UL>

      <H2>3. Sharing Your Information</H2>
      <P>
        We do not sell or rent your personal information to third parties. We may share information:
      </P>
      <UL>
        <LI>With recruiters and employers for job-matching purposes</LI>
        <LI>With service providers and partners assisting in site operations</LI>
        <LI>When required by law or to protect our legal rights</LI>
      </UL>

      <H2>4. Cookies and Tracking Technologies</H2>
      <P>Our Site may use cookies and similar technologies to:</P>
      <UL>
        <LI>Remember your preferences and settings</LI>
        <LI>Understand user behavior and improve the Site</LI>
        <LI>Deliver targeted content and advertisements</LI>
      </UL>
      <P>You can manage cookie preferences through your browser settings.</P>

      <H2>5. Data Security</H2>
      <P>
        We implement reasonable technical and administrative measures to protect your information from unauthorized
        access, disclosure, alteration, or destruction. However, no method of transmission over the internet or
        electronic storage is completely secure.
      </P>

      <H2>6. Your Rights</H2>
      <P>You have the right to:</P>
      <UL>
        <LI>Access and update your personal information</LI>
        <LI>Request deletion of your account or personal data</LI>
        <LI>Opt-out of marketing communications</LI>
      </UL>
      <P>
        To exercise these rights, please contact us at{' '}
        <MLink href="mailto:support@oppexl.com">support@oppexl.com</MLink>.
      </P>

      <H2>7. Third-Party Links</H2>
      <P>
        Our Site may contain links to third-party websites. We are not responsible for their privacy practices,
        and encourage reviewing their privacy policies.
      </P>

      <H2>8. Children’s Privacy</H2>
      <P>
        Oppexl does not knowingly collect personal information from individuals under 18 years of age. If information
        from a child is believed to have been collected, please contact us to remove it.
      </P>

      <H2>9. Changes to This Privacy Policy</H2>
      <P>
        We may update this Privacy Policy periodically. Any changes will be posted on this page with the revised
        “Effective Date.” Regular review of this policy is encouraged.
      </P>

      <H2>10. Contact Us</H2>
      <P>If you have questions, concerns, or requests regarding this Privacy Policy, contact us at:</P>
      <P>Oppexl</P>
      <P>
        Email: <MLink href="mailto:support@oppexl.com">support@oppexl.com</MLink>
      </P>
      <P>
        Website: <MLink href="https://www.oppexl.com" target="_blank" rel="noopener noreferrer">www.oppexl.com</MLink>
      </P>
    </Section>
  );
}
