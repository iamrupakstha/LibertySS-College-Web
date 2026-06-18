import { faAngleDown, faBars, faEnvelope, faLocationDot, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'
import Logo from '../assets/logo/Logo.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
    const dropdownRefs = useRef({});

    const toggleDropdown = (dropdownName) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    }

    const loginAlert = () => {
        alert("We are coming soon!!");
    }
    // close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (openDropdown && dropdownRefs.current[openDropdown] && 
                !dropdownRefs.current[openDropdown].contains(event.target)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [openDropdown]);

    // close menu when window resizes to desktop view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && menuOpen) {
                setMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [menuOpen]);
    
  return (
    <div>
        {/* Top Nav */}
        <div className="topNav">
            <div className="container">
                <div className="contact-left">
                    <p><FontAwesomeIcon className='icon' icon={faPhone} /> <span>9805073555/
                    9842774390</span> </p>
                    <p><FontAwesomeIcon className='icon' icon={faEnvelope} /> <span>info.libertysscollege@gmail.com</span> </p>
                    <p><FontAwesomeIcon className='icon' icon={faLocationDot} /> <span>Old Bhadrapur Road, Birtamode-5, Jhapa</span></p>
                </div>
                <div className="Btn">
                    <NavLink to="./enquiry" className="enquiryBtn">Enquiry</NavLink>
                    <NavLink to="" className="loginBtn" onClick={loginAlert} >Login</NavLink>
                </div>
            </div>
        </div>

        {/* NavItems */}
        <div className="navItems">
            {/* logo */}
            <div className="navLogo">
                <NavLink to='/'>
                    <img src={Logo} alt="Liberty SS/College Logo" />
                </NavLink>
            </div>
            {/* menu icon */}
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className='icon'/>
            </div>
            {/* navlinks */}
             <div className={`navLinks ${menuOpen ? "active" : ""}`}>
                    <ul>
                        <li onClick={() => setMenuOpen(false)}>
                            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                                Home
                            </NavLink>
                        </li>
                        
                        <li 
                            className='dropdown' 
                            ref={el => dropdownRefs.current['overview'] = el}>
                                
                            <span onClick={() => toggleDropdown('overview')}>
                                Overview 
                                <FontAwesomeIcon 
                                    icon={faAngleDown} 
                                    className={`dropdown-icon ${openDropdown === 'overview' ? 'rotate' : ''}`}
                                />
                            </span>
                            <ul className={`dropdownMenu ${openDropdown === 'overview' ? 'active' : ''}`}>
                                <li onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>
                                    <NavLink to='/about' className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink>
                                </li>
                                <li onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>
                                    <NavLink to='/academics' className={({ isActive }) => isActive ? "active" : ""}>Academics</NavLink>
                                </li>
                                <li onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>
                                    <NavLink to='/message' className={({ isActive }) => isActive ? "active" : ""}>Message</NavLink>
                                </li>
                                <li onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>
                                    <NavLink to='/team' className={({ isActive }) => isActive ? "active" : ""}>Our Team</NavLink>
                                </li>
                            </ul>
                        </li>
                        
                        <li 
                            className='dropdown' 
                            ref={el => dropdownRefs.current['programs'] = el}
                        >
                            <span onClick={() => toggleDropdown('programs')}>
                                Programs 
                                <FontAwesomeIcon 
                                    icon={faAngleDown} 
                                    className={`dropdown-icon ${openDropdown === 'programs' ? 'rotate' : ''}`}
                                />
                            </span>
                            <ul className={`dropdownMenu ${openDropdown === 'programs' ? 'active' : ''}`}>
                                <li onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>
                                    <NavLink to='/science' className={({ isActive }) => isActive ? "active" : ""}>Science</NavLink>
                                </li>
                                <li onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>
                                    <NavLink to='/management' className={({ isActive }) => isActive ? "active" : ""}>Management</NavLink>
                                </li>
                                <li onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>
                                    <NavLink to='/hm' className={({ isActive }) => isActive ? "active" : ""}>Hotel Management</NavLink>
                                </li>
                            </ul>
                        </li>
                        
                        <li onClick={() => setMenuOpen(false)}>
                            <NavLink to="/facilities" className={({ isActive }) => isActive ? "active" : ""}>
                                Facilities
                            </NavLink>
                        </li>
                        <li onClick={() => setMenuOpen(false)}>
                            <NavLink to="/notice" className={({ isActive }) => isActive ? "active" : ""}>
                                Notice
                            </NavLink>
                        </li>
                        <li onClick={() => setMenuOpen(false)}>
                            <NavLink to="/resources" className={({ isActive }) => isActive ? "active" : ""}>
                                Resources
                            </NavLink>
                        </li>
                        <li onClick={() => setMenuOpen(false)}>
                            <NavLink to="/gallery" className={({ isActive }) => isActive ? "active" : ""}>
                                Gallery
                            </NavLink>
                        </li>
                        <li onClick={() => setMenuOpen(false)}>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                
        </div>
    </div>
  )
}

export default Navbar