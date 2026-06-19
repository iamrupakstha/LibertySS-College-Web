import React from 'react'
import '../styles/Home.css'
import bgvideo from '../assets/bgvideo.mp4';
import welcomeImg from '../assets/welcome.jpeg';
import scienceImg from '../assets/science.jpg';
import managementImg from '../assets/management.jpg';
import hmImg from '../assets/HM.jpg';
import devieducation from '../assets/devi education.jpg';
import miles from '../assets/miles.jpg';
import sportscenter from '../assets/Liberty Sports Club.png'
import regency from '../assets/regency.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faAlarmClock, faBookOpen, faChalkboardUser, faGraduationCap, faQuoteLeft, faQuoteRight, faStar, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

import { NavLink } from 'react-router-dom';
const Home = () => {

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all sections that should animate
        const sections = document.querySelectorAll('.welcome-message, .programs, .program-card, .training, .testimonials, .cta');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div >
            <div className="hero">
                <video autoPlay loop muted playsInline className='bg-video' >
                    <source src={bgvideo} type='video/mp4' />
                </video>

                <div className="overlay">
                    <div className="hero-content">
                        <h2>
                            <span> <FontAwesomeIcon icon={faQuoteLeft} />
                            </span>
                            A Global <br /> Atmosphere <br />
                            <span>at a Reduced Scale </span>
                        </h2>
                        <p>Empowering the next generation with world-class education, modern facilities, and a vibrant campus community — right in the heart of Jhapa.</p>

                        <button className='explore-btn'><NavLink to='/about'>Explore</NavLink></button>
                    </div>
                    <div className="hero-cards">
                        <div className="card">
                            <FontAwesomeIcon icon={faChalkboardUser} className='icon' />
                            <h2>20+</h2>
                            <p>Teachers</p>
                        </div>
                        <div className="card">
                            <FontAwesomeIcon icon={faGraduationCap} className='icon' />
                            <h2>500+</h2>
                            <p>Students</p>
                        </div>
                        <div className="card">
                            <FontAwesomeIcon icon={faBookOpen} className='icon' />
                            <h2>3</h2>
                            <p>Programs</p>
                        </div>
                        <div className="card">
                            <FontAwesomeIcon icon={faStar} className='icon' />
                            <h2>10+</h2>
                            <p>Years</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="discover">
                <div className="message">
                    <h4>DISCOVER</h4>
                    <h3>Liberty SS/College</h3>
                    <p>Welcome to Liberty SS/College, a place where education goes beyond textbooks and classrooms to build knowledge, character, and future success. We are delighted to welcome students, parents, and visitors into our academic community, where learning is meaningful, practical, and focused on overall development.
                        At Liberty SS/College, we believe that every student holds unique potential. Our mission is to provide a supportive and inspiring environment where students can discover their abilities, develop their skills, and achieve their academic and personal goals. We are committed to delivering quality education that combines strong theoretical foundations with practical learning experiences, preparing students to face real-world challenges with confidence.
                    </p>
                </div>
                <div className="img">
                    <img src={welcomeImg} alt="Welcome image" />

                    <div className="since">
                        <div className="text">
                            <h2>Since 2007</h2>
                            <p>Birtamode-5, Jhapa</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our programs */}
            <div class="programs-modern">
                <div class="container">
                    <div class="section-header fade-up-scroll">
                        <h2>Our Flagship Programs</h2>
                        <p>Tailored curriculum for future innovators, business leaders, and hospitality experts</p>
                    </div>
                    <div class="program-grid">
                        <div class="program-card-modern fade-up-scroll">
                            <div class="program-img"><img src={scienceImg} alt="Science" /></div>
                            <div class="program-info">
                                <h3>SCIENCE</h3>
                                <NavLink to="/science" className="program-link">Explore Program <i className="fas fa-arrow-right"></i></NavLink>
                            </div>
                        </div>
                        <div className="program-card-modern fade-up-scroll">
                            <div className="program-img">
                                <img src={managementImg} alt="Management" /></div>
                            <div className="program-info">
                                <h3>MANAGEMENT</h3>

                                <NavLink to="/management" className="program-link">Explore Program <i className="fas fa-arrow-right"></i></NavLink>
                            </div>
                        </div>
                        <div className="program-card-modern fade-up-scroll">
                            <div className="program-img"><img src={hmImg} alt="Hotel Management" /></div>
                            <div className="program-info">
                                <h3>HOTEL MANAGEMENT</h3>
                                <NavLink to="/hm" className="program-link">Explore Program <i className="fas fa-arrow-right"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* training bootcamp */}
            <div className="training">
                <h1>Training Bootcamp</h1>
                <p>This is our training bootcamp partners</p>
                <div className="bootcamp-logo">
                    <img className='logo' src={devieducation} alt="Devi Education Center" />
                    <img className='logo' src={sportscenter} alt="Birtamode Sports center" />
                    <img className='logo' src={regency} alt="The Regience" />
                    <img className='logo' src={miles} alt="Miles International Consoultancey" />

                </div>
            </div>

            {/* TESTIMONIALS */}
            <section className="testimonials">
                <h1>What Our Students Say</h1>

                <div className="testimonial-container">

                    <div className="testimonial-card">
                        <p>
                            "Liberty College helped me build confidence and practical skills.
                            The teachers are very supportive and friendly."
                        </p>
                        <div className="student-info">
                            <h4>Ramesh Sharma</h4>
                            <span>+2 Science</span>
                        </div>
                        <div className="stars">★★★★★</div>
                    </div>

                    <div className="testimonial-card">
                        <p>
                            "Best decision of my life. The environment is great and I learned
                            both theory and real-world applications."
                        </p>
                        <div className="student-info">
                            <h4>Sita Rai</h4>
                            <span>+2 Management</span>
                        </div>
                        <div className="stars">★★★★★</div>
                    </div>

                    <div className="testimonial-card">
                        <p>
                            "Hotel Management program gave me hands-on experience and
                            internship opportunities."
                        </p>
                        <div className="student-info">
                            <h4>Dipesh Karki</h4>
                            <span>Hotel Management</span>
                        </div>
                        <div className="stars">★★★★★</div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Home