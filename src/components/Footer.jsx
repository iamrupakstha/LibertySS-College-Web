import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
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

                <div className="enquiry">
                    <button>Apply Now</button>
                    <button>Contact Now</button>
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
            <h3>Resources</h3>
            <ul>
            <li>
                <NavLink to="/courses" className='link'>
                    Courses
                </NavLink>
            </li>
            <li>
                <NavLink to="/gallery" >
                    Gallery
                </NavLink>
            </li>
            <li>
                <NavLink to="/resources" >
                    Downloads
                </NavLink>
            </li>
            </ul>
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