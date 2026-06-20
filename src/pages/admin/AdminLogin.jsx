// src/pages/admin/AdminLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faLock, faKey, faSpinner } from '@fortawesome/free-solid-svg-icons';
import './AdminLogin.css';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // For Vite: Use import.meta.env instead of process.env
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;
    
    console.log('Admin password from env:', adminPassword ? 'Set' : 'Not set'); // Debug log
    
    setTimeout(() => {
      if (password === adminPassword) {
        // Store admin session
        localStorage.setItem('adminAuth', 'true');
        localStorage.setItem('adminLoginTime', new Date().toISOString());
        
        // Navigate to admin notices
        navigate('/admin/notices');
        // Force reload to ensure state is fresh
        setTimeout(() => {
          window.location.reload();
        }, 100);
      } else {
        setError('Invalid password. Please try again.');
        setPassword('');
        setLoading(false);
      }
    }, 500);
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-container">
        <div className="login-header">
          <div className="login-icon-wrapper">
            <FontAwesomeIcon icon={faUserShield} className="login-icon" />
          </div>
          <h1>Admin Access</h1>
          <p>Enter your admin password to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>
              <FontAwesomeIcon icon={faKey} />
              Password
            </label>
            <div className="password-input-wrapper">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password..."
                required
                autoFocus
                className="password-input"
              />
              <FontAwesomeIcon icon={faLock} className="input-icon" />
            </div>
            {error && <div className="error-message">{error}</div>}
          </div>

          <button 
            type="submit" 
            className="login-btn"
            disabled={loading}
          >
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              <>
                <FontAwesomeIcon icon={faKey} />
                Access Admin Panel
              </>
            )}
          </button>
        </form>

        <div className="login-footer">
          <p>🔒 Secure Admin Access</p>
          <small>For authorized personnel only</small>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;