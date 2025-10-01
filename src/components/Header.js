// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   Paper
// } from '@mui/material';
// import { Link } from 'react-router-dom';
// import OppexlLogo from '../OppexlLogo.png';

// function Header() {
//   const [hoveredKey, setHoveredKey] = useState(null);

//   const navMenus = [
//     {
//       key: 'about',
//       label: 'About Us',
//       path: '/about',
//       items: [
//         { label: 'Mission & Vision', path: '/about/mission' },
//         { label: 'Leadership', path: '/about/leadership' },
//       ],
//     },
//     {
//       key: 'services',
//       label: 'Our Services',
//       path: '/services',
//       items: [
//         { label: 'Merger & Acquisitions', path: '/services/merger-acquisitions' },
//         { label: 'Audits', path: '/services/audits' },
//         { label: 'Talent Management', path: '/services/talent-management' },
//         { label: 'Compensation, Benefits & Rewards', path: '/services/compensation-benefits' },
//         { label: 'Recruitment', path: '/services/recruitment' },
//         { label: 'Payroll', path: '/services/payroll' },
//         { label: 'Government Advisory', path: '/services/government-advisory' },
//       ],
//     },
//     {
//       key: 'products',
//       label: 'Our Products',
//       path: '/products',
//       items: [
//         { label: 'HRMS', path: '/products/hrms' },
//         { label: 'LMS', path: '/products/lms' },
//         { label: 'Job Portal', path: '/products/job-portal' },
//       ],
//     },
//     {
//       key: 'careers',
//       label: 'Careers',
//       path: '/about/careers',
//     },
//     {
//       key: 'contact',
//       label: 'Contact Us',
//       path: '/contact',
//       items: [
//         { label: 'Email Us', path: '/contact/email' },
//         { label: 'Call Us', path: '/contact/call' },
//         { label: 'Visit Office', path: '/contact/office' },
//       ],
//     },
// ];


//   const navItemStyle = {
//     textTransform: 'none',
//     fontWeight: 600,
//     fontSize: '1.2rem',
//     color: 'white',
//     '&:hover': {
//       transform: 'scale(1.1)',
//       transition: 'transform 0.2s ease',
//     },
//   };

//   const dropdownStyle = {
//     position: 'absolute',
//     top: '100%',
//     left: 0,
//     backgroundColor: '#002b54',
//     zIndex: 10,
//     padding: '0.5rem 0',
//     borderTop: '2px solid #1f6aa5',
//     width: '200px',
//   };

//   return (
//     <AppBar position="fixed" sx={{ bgcolor: '#002b54', width: '100vw' }}>
//       <Toolbar
//         sx={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           maxWidth: '1400px',
//           mx: 'auto',
//           width: '100%',
//           height: '100px',
//         }}
//         onMouseLeave={() => setHoveredKey(null)}
//       >
//         {/* Logo and Brand */}
//         <Box display="flex" alignItems="center">
//           <Box 
//             component={Link} 
//             to="/" 
//             sx={{ 
//               textDecoration: 'none',
//               cursor: 'pointer',
//               '&:hover': {
//                 opacity: 0.8,
//                 transition: 'opacity 0.2s ease',
//               },
//             }}
//           >
//             <img src={OppexlLogo} alt="Oppexl Logo" style={{ height: 60 }} />
//           </Box>
//           <Typography 
//             variant="h6" 
//             sx={{ 
//               fontWeight: 'bold', 
//               fontSize: '1.8rem', 
//               color: 'white', 
//               ml: 1  
//             }}
//           >
//             Oppexl
//           </Typography>
//         </Box>

        
//         {/* Navigation */}
//         <Box display="flex" alignItems="center" gap={3} position="relative">

//           {navMenus.map(({ key, label, path, items }) => (
//             <Box
//               key={key}
//               onMouseEnter={() => setHoveredKey(key)}
//               onMouseLeave={() => setHoveredKey(null)}
//               sx={{ position: 'relative' }}
//             >
//               <Button
//                 component={Link}
//                 to={path}
//                 sx={navItemStyle}
//                 onClick={() => setHoveredKey(null)}
//               >
//                 {label}
//               </Button>

//               {hoveredKey === key && items && (
//                 <Paper sx={dropdownStyle} elevation={4}>
//                   {items.map(({ label, path }) => (
//                     <Box
//                       key={label}
//                       component={Link}
//                       to={path}
//                       onClick={() => setHoveredKey(null)}
//                       sx={{
//                         display: 'block',
//                         padding: '0.7rem 1rem',
//                         color: 'white',
//                         textDecoration: 'none',
//                         fontSize: '1rem',
//                         '&:hover': {
//                           backgroundColor: '#01427a',
//                         },
//                       }}
//                     >
//                       {label}
//                     </Box>
//                   ))}
//                 </Paper>
//               )}
//             </Box>
//           ))}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Header;

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Paper,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import OppexlLogo from '../OppexlLogo.png';

function Header() {
  const [hoveredKey, setHoveredKey] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openKeys, setOpenKeys] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navMenus = [
    {
      key: 'about',
      label: 'About Us',
      path: '/about',
      items: [
        { label: 'Mission & Vision', path: '/about/mission' },
        { label: 'Leadership', path: '/about/leadership' },
      ],
    },
    {
      key: 'services',
      label: 'Our Services',
      path: '/services',
      items: [
        { label: 'Merger & Acquisitions', path: '/services/merger-acquisitions' },
        { label: 'Audits', path: '/services/audits' },
        { label: 'Talent Management', path: '/services/talent-management' },
        { label: 'Compensation, Benefits & Rewards', path: '/services/compensation-benefits' },
        { label: 'Recruitment', path: '/services/recruitment' },
        { label: 'Payroll', path: '/services/payroll' },
        { label: 'Government Advisory', path: '/services/government-advisory' },
      ],
    },
    {
      key: 'products',
      label: 'Our Products',
      path: '/products',
      items: [
        { label: 'HRMS', path: '/products/hrms' },
        { label: 'LMS', path: '/products/lms' },
        { label: 'Job Portal', path: '/products/job-portal' },
      ],
    },
    {
      key: 'careers',
      label: 'Careers',
      path: '/about/careers',
    },
    {
      key: 'contact',
      label: 'Contact Us',
      path: '/contact',
      items: [
        { label: 'Email Us', path: '/contact/email' },
        { label: 'Call Us', path: '/contact/call' },
        { label: 'Visit Office', path: '/contact/office' },
      ],
    },
  ];

  const navItemStyle = {
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '1.05rem',
    color: 'white',
    '&:hover': {
      transform: 'scale(1.05)',
      transition: 'transform 0.2s ease',
    },
  };

  const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#002b54',
    zIndex: 10,
    padding: '0.5rem 0',
    borderTop: '2px solid #1f6aa5',
    width: '240px',
  };

  const toggleMobile = () => setMobileOpen((v) => !v);

  const handleSectionToggle = (key) => {
    setOpenKeys((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: '#002b54', width: '100vw' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '1400px',
          mx: 'auto',
          width: '100%',
          height: { xs: 72, md: 100 },
          px: 2,
        }}
        onMouseLeave={() => setHoveredKey(null)}
      >
        {/* Logo + Brand */}
        <Box display="flex" alignItems="center" component={Link} to="/" sx={{ textDecoration: 'none' }}>
          <img src={OppexlLogo} alt="Oppexl Logo" style={{ height: 48 }} />
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', fontSize: { xs: '1.4rem', md: '1.8rem' }, color: 'white', ml: 1 }}
          >
            Oppexl
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box display="flex" alignItems="center" gap={2.5} position="relative">
            {navMenus.map(({ key, label, path, items }) => (
              <Box
                key={key}
                onMouseEnter={() => setHoveredKey(key)}
                onMouseLeave={() => setHoveredKey(null)}
                sx={{ position: 'relative' }}
              >
                <Button component={Link} to={path} sx={navItemStyle} onClick={() => setHoveredKey(null)}>
                  {label}
                </Button>

                {hoveredKey === key && items && (
                  <Paper sx={dropdownStyle} elevation={6} onMouseLeave={() => setHoveredKey(null)}>
                    {items.map(({ label: subLabel, path: subPath }) => (
                      <Box
                        key={subLabel}
                        component={Link}
                        to={subPath}
                        onClick={() => setHoveredKey(null)}
                        sx={{
                          display: 'block',
                          padding: '0.75rem 1rem',
                          color: 'white',
                          textDecoration: 'none',
                          fontSize: '0.95rem',
                          '&:hover': { backgroundColor: '#01427a' },
                        }}
                      >
                        {subLabel}
                      </Box>
                    ))}
                  </Paper>
                )}
              </Box>
            ))}
          </Box>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <IconButton color="inherit" edge="end" onClick={toggleMobile} aria-label="menu">
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleMobile}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': { width: 300, bgcolor: '#002b54', color: 'white' },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <img src={OppexlLogo} alt="Oppexl Logo" style={{ height: 40 }} />
            <Typography variant="h6" sx={{ ml: 1, fontWeight: 700 }}>
              Oppexl
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)' }} />

        <List sx={{ px: 1 }}>
          {navMenus.map(({ key, label, path, items }) => {
            const hasChildren = Array.isArray(items) && items.length > 0;
            const open = !!openKeys[key];

            if (!hasChildren) {
              return (
                <ListItemButton
                  key={key}
                  component={Link}
                  to={path}
                  onClick={toggleMobile}
                  sx={{
                    color: 'white',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.06)' },
                    borderRadius: 1,
                    mx: 1,
                  }}
                >
                  <ListItemText primary={label} />
                </ListItemButton>
              );
            }

            return (
              <Box key={key}>
                <ListItemButton
                  onClick={() => handleSectionToggle(key)}
                  sx={{
                    color: 'white',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.06)' },
                    borderRadius: 1,
                    mx: 1,
                  }}
                >
                  <ListItemText primary={label} />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {items.map(({ label: subLabel, path: subPath }) => (
                      <ListItemButton
                        key={subLabel}
                        component={Link}
                        to={subPath}
                        onClick={toggleMobile}
                        sx={{
                          pl: 4,
                          color: 'white',
                          '&:hover': { bgcolor: 'rgba(255,255,255,0.06)' },
                          borderRadius: 1,
                          mx: 1,
                        }}
                      >
                        <ListItemText primary={subLabel} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </Box>
            );
          })}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Header;
