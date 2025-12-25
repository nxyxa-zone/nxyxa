
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Programs from './pages/Programs';
import AdmissionInfo from './pages/AdmissionInfo';
import Gallery from './pages/Gallery';
import Registration from './pages/Registration';

const ScrollToTopOnMount = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTopOnMount />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/program" element={<Programs />} />
            <Route path="/ppdb" element={<AdmissionInfo />} />
            <Route path="/galeri" element={<Gallery />} />
            <Route path="/daftar" element={<Registration />} />
          </Routes>
        </main>

        <Footer />
        <ChatBot />
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
