// src/App.jsx
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

// pages
import Home from './pages/home/Home'
import MainLayout from './Layout/MainLayout';
import Spinner from './components/Spinner';

// overview
import About from './pages/overview/About'
import Academics from './pages/overview/Academics';
import Team from './pages/overview/Team';
import Message from './pages/overview/Message';

// programs
import Science from './pages/programs/Science';
import { Management } from './pages/programs/Management';
import HM from './pages/programs/HM';

import Facilities from './pages/Facilities/Facilities';
import Gallery from './pages/gallery/Gallery';
import Notices from './pages/notice/Notice';

// Admin Components
import AdminLogin from './pages/admin/AdminLogin';
import AdminNotices from './components/AdminNotices';
import ProtectedRoute from './components/ProtectedRoute';
import Contact from './pages/contact/Contact';

function App() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };
    
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  function scrolltoTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <>
      <Router basename="/LibertySS-College-Web">
        <Routes>
          {/* Main Layout Routes (with header and footer) */}
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />} />

            {/* Overview */}
            <Route path='/about' element={<About />} />
            <Route path='/academics' element={<Academics />} />
            <Route path='/message' element={<Message />} />
            <Route path='/team' element={<Team />} />

            {/* Programs */}
            <Route path='/science' element={<Science />} />
            <Route path='/management' element={<Management />} />
            <Route path='/hm' element={<HM />} />

            {/* Facilities */}
            <Route path='/facilities' element={<Facilities />} />

            {/* Notice */}
            <Route path='/notice' element={<Notices />} />

            {/* Gallery */}
            <Route path='/gallery' element={<Gallery />} />
            {/* Contact */}
            <Route path='/contact' element={<Contact />} />
          </Route>

          {/* Admin Routes - No Layout (Full page, no header/footer) */}
          <Route path="/admin/00100" element={<AdminLogin />} />
          <Route 
            path="/admin/notices" 
            element={
              <ProtectedRoute>
                <AdminNotices />
              </ProtectedRoute>
            } 
          />
          
          {/* Redirect /admin to /admin/login */}
          <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
          <Route path="/admin/" element={<Navigate to="/admin/login" replace />} />
          
          {/* Redirect any other admin/* to /admin/login */}
          <Route path="/admin/*" element={<Navigate to="/admin/login" replace />} />
        </Routes>
      </Router>

      {/* Scroll to Top Button */}
      <button 
        className='scroll-btn' 
        style={{
          visibility: visible ? "visible" : "hidden",
          opacity: visible ? 1 : 0
        }} 
        onClick={scrolltoTop}
      >
        Scroll Up <FontAwesomeIcon style={{ marginLeft: '5px' }} icon={faArrowUp} />
      </button>
    </>
  );
}

export default App;