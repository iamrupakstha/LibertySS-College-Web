// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem('adminAuth') === 'true';
  const loginTime = localStorage.getItem('adminLoginTime');
  
  // Check if session expired (24 hours)
  if (loginTime) {
    const now = new Date().getTime();
    const login = new Date(loginTime).getTime();
    const hoursDiff = (now - login) / (1000 * 60 * 60);
    if (hoursDiff > 24) {
      localStorage.removeItem('adminAuth');
      localStorage.removeItem('adminLoginTime');
      return <Navigate to="/admin/login" />;
    }
  }
  
  if (!isAdmin) {
    return <Navigate to="/admin/login" />;
  }
  
  return children;
};

export default ProtectedRoute;