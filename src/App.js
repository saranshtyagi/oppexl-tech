import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SuccessStories from './pages/SuccessStories';

import Insights from './pages/Insights'; // 👈 Add this with your other imports

import ScrollToTop from './components/ScrollToTop';


// Pages
import Home from './pages/Home';
import LMS from './pages/LMS';
import HRMS from './pages/HRMS';
import JobPortal from './pages/JobPortal';
import Blogs from './pages/Blogs';
import PrivacyPolicy from './pages/PrivacyPolicy';

// About Us Pages
import Mission from './pages/about/Mission';
import Leadership from './pages/about/Leadership';
import Careers from './pages/about/Careers';

// Layout Components
import AboutUs from './pages/about/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

// Contact Pages
import ContactUs from './pages/contact/ContactUs';
import EmailUs from './pages/contact/EmailUs';
import CallUs from './pages/contact/CallUs';
import VisitOffice from './pages/contact/VisitOffice';

// Services Pages
import MergerAcquisitions from './pages/services/MergerAcquisitions';
import Audits from './pages/services/Audits';
import TalentManagement from './pages/services/TalentManagement';
import CompensationBenefits from './pages/services/CompensationBenefits';
import Recruitment from './pages/services/Recruitment';
import Payroll from './pages/services/Payroll';
import GovernmentAdvisory from './pages/services/GovernmentAdvisory';

function App() {
  return (
    <>
      <Header />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Product Pages */}
        <Route path="/products/lms" element={<LMS />} />
        <Route path="/products/hrms" element={<HRMS />} />
        <Route path="/products/job-portal" element={<JobPortal />} />

        {/* Blog */}
        <Route path="/blogs" element={<Blogs />} />

        {/* About Us Pages */}
        <Route path='/about' element={<AboutUs />} />
        <Route path="/about/mission" element={<Mission />} />
        <Route path="/about/leadership" element={<Leadership />} />
        <Route path="/about/careers" element={<Careers />} />

        {/* Contact Pages */}
        <Route path='/contact' element={<ContactUs />} />
        <Route path="/contact/email" element={<EmailUs />} />
        <Route path="/contact/call" element={<CallUs />} />
        <Route path="/contact/office" element={<VisitOffice />} />

        {/* Services Pages */}
        <Route path="/services/merger-acquisitions" element={<MergerAcquisitions />} />
        <Route path="/services/audits" element={<Audits />} />
        <Route path="/services/talent-management" element={<TalentManagement />} />
        <Route path="/services/compensation-benefits" element={<CompensationBenefits />} />
        <Route path="/services/recruitment" element={<Recruitment />} />
        <Route path="/services/payroll" element={<Payroll />} />
        <Route path="/services/government-advisory" element={<GovernmentAdvisory />} />

        {/* Success Stories */}
        <Route path="/success-stories" element={<SuccessStories />} />

        <Route path='/privacy-policy' element={<PrivacyPolicy />} />

       
      <Route path="/insights" element={<Insights />} />
      </Routes>
      <Footer />
      <ChatAssistant />
    </>
  );
}

export default App;
