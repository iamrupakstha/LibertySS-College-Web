import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Logo from '../assets/logo/Logo.png'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
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

                </div>
            </div>
      <div className="footer"> 
        <div className="f-left">
          <img src={Logo} alt="Footer logo" />
          <p className='logo-subtitle'>Join a community dedicated to academic excellence and real-world impact. Your transformative journey starts at Liberty SS/College.</p>
        
        <div className="social-links">
    <a href="https://facebook.com/libertysscollege" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} />
    </a>
    <a href="https://instagram.com/liberty_ss_college_btm" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a href="https://tiktok.com/@libertysscollege" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTiktok} />
    </a>
    <a href="https://youtube.com/@libertysscollegebirtamod" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} />
    </a>
    <a href="https://linkedin.com/company/liberty-ss-college-birtamode" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} />
    </a>
</div>
</div>

        <div className="quick-links">
             <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <NavLink to="/">
                                Home
                                </NavLink>
                            </li>
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
                                <NavLink to="/contact">
                                Contact
                                </NavLink>
                            </li>
                        </ul>
        </div>

        <div className="contact">
            <h4>Get in Touch </h4>

            <p><FontAwesomeIcon className='icon' icon={faLocationDot} /> <span>Old Bhadrapur Road <br /> Britamode-5, Jhapa</span></p>

            <p><FontAwesomeIcon className='icon' icon={faPhone} /><span>9805073555<br /> 9842774390</span></p>
            <p><FontAwesomeIcon className='icon' icon={faEnvelope} /><span>info.libertysscollege@gmail.com</span></p> 
        </div>

        </div>
        <hr />
        <div className="footer-bottom">
            <p>&#169; Copyright {new Date().getFullYear()}. Liberty SS/COllege. All right reserved. Powered by❤️<a href="www.rupak63.com.np" target='_blank' rel="noopener noreferrer">Rupak Shrestha</a> </p>
        </div>

      </div>  
  )
}
export default Footer