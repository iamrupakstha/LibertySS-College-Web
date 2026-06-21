import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Logo from '../assets/logo/Logo.png'
import { faEnvelope, faLocationDot, faPhone, faLock} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  const [clickCount, setClickCount] = useState(0);
  const [clickTimer, setClickTimer] = useState(null);
  const navigate = useNavigate();

  // Secret admin access - click on logo 5 times
  const handleLogoClick = () => {
    setClickCount(prev => prev + 1);
    
    // Clear timer if exists
    if (clickTimer) {
      clearTimeout(clickTimer);
    }
    
    // Reset click count after 3 seconds
    const timer = setTimeout(() => {
      setClickCount(0);
    }, 3000);
    setClickTimer(timer);
    
    // If clicked 5 times, redirect to admin
    if (clickCount >= 4) {
      setClickCount(0);
      clearTimeout(timer);
      navigate('/admin/login');
    }
  };

  return (
    <div>
        <div className="apply">
            <div className="apply-content">
                
                <div className="text">
                    <span>APPLY FOR { new Date().getFullYear()}</span>
                    <div className="text-h">
                        <p>READY TO DEFINE YOUR FUTUTE?</p>
                    </div>
                    <p>Join a community dedicated to academic excellence and real-world impact. Your transformative journey starts at Liberty SS/College.</p>
                    <div className="line"></div>
                </div>

                <div className="enquiry">
                    
                    <NavLink to="/contact" >
                        <button>Apply Now</button>
                    </NavLink>

                    <NavLink to="/contact">
                        <button>Contact Now</button>
                    </NavLink>
                    
                </div>
            </div>
        </div>
      <div className="footer"> 
        <div className="f-left">
          <img 
            src={Logo} 
            alt="Footer logo" 
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }}
            title={`Click ${5 - clickCount} more times for admin access`}
          />
          {clickCount > 0 && (
            <div className="click-hint" style={{ 
              fontSize: '0.7rem', 
              color: 'var(--primary-color)',
              marginTop: '0.3rem',
              opacity: 0.001
            }}>
              🔑 {clickCount}/5
            </div>
          )}
          <p className='logo-subtitle'>Join a community dedicated to academic excellence and real-world impact. Your transformative journey starts at Liberty SS/College.</p>
        
        <div className="social-links">
    <a href="https://facebook.com/libertysscollege" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} />
    </a>
    <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a href="https://tiktok.com/@yourpage" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTiktok} />
    </a>
    <a href="https://youtube.com/c/yourchannel" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} />
    </a>
</div>
</div>
        <div className="resources">
            <h3>Programs</h3>
            <ul>
            <li>
                <NavLink to="/science" className='link'>
                    Science
                </NavLink>
            </li>
            <li>
                <NavLink to="/management" >
                    Management
                </NavLink>
            </li>
            <li>
                <NavLink to="/hm" >
                    Hotel Management
                </NavLink>
            </li>
            </ul>
        </div>

        <div className="quick-links">
             <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <NavLink to="/about">
                                About
                                </NavLink>
                            </li>
                            
                            
                            <li>
                                <NavLink to="/facilities" >
                                Facilities
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/notice">
                                Notice
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/gallery">
                                Gallery
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">
                                Contact
                                </NavLink>
                            </li>
                            {/* Admin Access Link - Hidden but accessible */}
                        </ul>
        </div>

        <div className="contact">
            <h4>Get in Touch </h4>

            <a href="https://www.google.com/maps/search/Anarmani+Liberty+School+Birtamod" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faLocationDot} /> <span>Old Bhadrapur Road <br /> Britamode-5, Jhapa</span></a>

            <a href="tel:9805073555"><FontAwesomeIcon className='icon' icon={faPhone} /><span>9805073555<br /> 9842774390</span></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info.libertysscollege@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faEnvelope} /><span>info.libertysscollege@gmail.com</span></a>
        </div>

        </div>
        <hr />
        <div className="footer-bottom">
            <p>&#169; Copyright {new Date().getFullYear()}. Liberty SS/College. All right reserved. Powered by❤️<a href="www.rupak63.com.np" target='_blank' rel="noopener noreferrer">Rupak Shrestha</a> </p>
        </div>

      </div>  
  )
}
export default Footer