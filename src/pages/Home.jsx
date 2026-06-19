import React from 'react'
import '../styles/Home.css'
import bgvideo from '../assets/bgvideo.mp4';
import welcomeImg from '../assets/welcome.jpeg';
import scienceImg from '../assets/science.jpg';
import managementImg from '../assets/management.jpg';
import hmImg from '../assets/HM.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
<<<<<<< HEAD
<<<<<<< HEAD
import { faAlarmClock, faBookOpen, faChalkboardUser,faGraduationCap,faQuoteLeft, faStar, faUserGroup } from '@fortawesome/free-solid-svg-icons';
=======
import { faAlarmClock, faBookOpen, faChalkboardUser, faGraduationCap, faQuoteLeft, faQuoteRight, faStar, faUserGroup } from '@fortawesome/free-solid-svg-icons';
>>>>>>> 4d256a67b157a3f54204c8bd7b518c85e731ac25
=======
import { faAlarmClock, faBookOpen, faChalkboardUser,faGraduationCap,faQuoteLeft, faQuoteRight, faStar, faUserGroup } from '@fortawesome/free-solid-svg-icons';
>>>>>>> parent of f7efc22 (update-1)
import { useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import Testimonials from './home/Testimonials';
import TrainingBootcamp from './home/TrainingBootcamp';
import LatestNotice from './home/Notice';
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

<<<<<<< HEAD
<<<<<<< HEAD
    return () => observer.disconnect();
}, []);
    
// TESTIMONIALS

=======
    return () => observer.disconnect();
}, []);
    
>>>>>>> parent of f7efc22 (update-1)
  return (
    <div >
        <div className="hero">
            <video autoPlay loop muted playsInline className='bg-video' >
            <source src={bgvideo} type='video/mp4' />
            </video>
<<<<<<< HEAD
=======
        // Observe all sections that should animate
        const sections = document.querySelectorAll('.welcome-message, .programs, .program-card, .training, .testimonials, .cta');
        sections.forEach(section => observer.observe(section));
>>>>>>> 4d256a67b157a3f54204c8bd7b518c85e731ac25
=======
>>>>>>> parent of f7efc22 (update-1)

            <div className="overlay">
                <div className="hero-content">
                    <h2>
                        <span> <FontAwesomeIcon icon={faQuoteLeft} />
                        </span>
                        A Global <br/> Atmosphere <br/>
                        <span>at a Reduced Scale </span>
                    </h2>
                    <p>Empowering the next generation with world-class education, modern facilities, and a vibrant campus community — right in the heart of Jhapa.</p>

                    <button className='explore-btn'><NavLink to='/about'>Explore</NavLink></button>
                    <button className='enquiry-btn'> <NavLink to='/enquiry'>Apply Now</NavLink></button>
                </div>
                <div className="hero-cards">
                    <div className="card">
                        <FontAwesomeIcon icon={faChalkboardUser} className='icon'/>
                        <h2>20+</h2>
                        <p>Teachers</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faGraduationCap} className='icon'/>
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
<<<<<<< HEAD
<<<<<<< HEAD
        </div>
    {/* home page- Discover */}
    <section className="lc-discover">
        <div className="lc-discover__message">
          <span className="lc-discover__label">
            DISCOVER 
          </span>
          <h3>
            Welcome to <span className="lc-accent">Liberty SS/College</span>
          </h3>
          <p>
            Welcome to Liberty SS/College, a place where education goes beyond textbooks and classrooms to build knowledge, character, and future success. We are delighted to welcome students, parents, and visitors into our academic community, where learning is meaningful, practical, and focused on overall development.
            At Liberty SS/College, we believe that every student holds unique potential. Our mission is to provide a supportive and inspiring environment where students can discover their abilities, develop their skills, and achieve their academic and personal goals. We are committed to delivering quality education that combines strong theoretical foundations with practical learning experiences, preparing students to face real-world challenges with confidence.
          </p>
          <p>
            Our mission combines strong theoretical foundations with practical
            learning experiences — preparing students to face real-world
            challenges with confidence.
          </p>
        </div>

        <div className="lc-discover__img-wrap">
          <img src={welcomeImg} alt="Liberty College campus" />
          <div className="lc-since-badge">
            <h2>Since 2007</h2>
            <p>Birtamode-5, Jhapa</p>
          </div>
        </div>
      </section>

        {/* Our programs */}
        <div class="programs-modern">
        <div class="container">
        <div class="section-header fade-up-scroll">
          <span className="lc-discover__label">
            ACADEMICS
          </span>
            <h2>Our +2 <span className='lc-accent'>Programs</span></h2>
            <p>Tailored curriculum for future innovators, business leaders, and hospitality experts</p>
        </div>
        <div class="program-grid">
            {/* science */}
            <div class="program-card-modern fade-up-scroll">
                <div class="program-img">
                    <img src={scienceImg} alt="Science"/>
                </div>
                <div class="program-info">
                    <h3>+2 SCIENCE</h3>
                    <div class="program-meta">
                        <span><FontAwesomeIcon icon={faAlarmClock}/>2 Years</span>
                        <span><FontAwesomeIcon icon={faUserGroup}/> 120 Credits</span>
                    </div>
                    <p>Physics, Chemistry, Biology & Mathematics. Advanced labs, research-driven faculty & stellar exam results.</p>
                    <NavLink className="program-link" to='/science'>Explore <FontAwesomeIcon icon={faArrowRight}/> </NavLink>
                </div>
            </div>
            {/* MANAGMENT */}
            <div class="program-card-modern fade-up-scroll">
                <div class="program-img">
                    <img src={managementImg} alt="Management"/>
                </div> 
                <div class="program-info">
                    <h3>+2 MANAGEMENT</h3>
                    <div class="program-meta">
                        <span><FontAwesomeIcon icon={faAlarmClock}/>2 Years</span>
                        <span><FontAwesomeIcon icon={faUserGroup}/> 120 Credits</span>
                    </div>
                    <p>Accountancy, Business Studies, Economics. Real-world case studies, business simulations & internships.</p>
                    <NavLink className="program-link" to='/management'>Explore <FontAwesomeIcon icon={faArrowRight}/> </NavLink>
                </div>
            </div>
            {/* HM */}
            <div class="program-card-modern fade-up-scroll">
                <div class="program-img">
                    <img src={hmImg} alt="HM"/>
                </div> 
                <div class="program-info">
                    <h3>+2 HOTEL MANAGEMENT</h3>
                    <div class="program-meta">
                        <span><FontAwesomeIcon icon={faAlarmClock}/>2 Years</span>
                        <span><FontAwesomeIcon icon={faUserGroup}/> 120 Credits</span>
                    </div>
                    <p>Hospitality, Food Production & Housekeeping. Industry-oriented curriculum with global internships.</p>
                    <NavLink className="program-link" to='/hm'>Explore <FontAwesomeIcon icon={faArrowRight}/> </NavLink>
                </div>
            </div>
            
        </div>
    </div>
    </div>
        {/* training bootcamp */}
        <TrainingBootcamp/>
        {/* Notice */}
        <LatestNotice/>
        {/* TESTIMONIALS */}
        <Testimonials/>
        
  
    </div>
  )
=======

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
>>>>>>> 4d256a67b157a3f54204c8bd7b518c85e731ac25
=======
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
                <div class="program-img"><img src={scienceImg} alt="Science"/></div>
                <div class="program-info">
                    <h3>SCIENCE</h3>
                    <div class="program-meta"><span><i class="fas fa-clock"></i> 2 Years</span><span><i class="fas fa-users"></i> 120 Credits</span></div>
                    <p>Physics, Chemistry, Biology & Mathematics. Advanced labs, research-driven faculty & stellar exam results.</p>
                    <a href="#" class="program-link">Explore Program <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
            <div class="program-card-modern fade-up-scroll">
                <div class="program-img">
                    <img src={managementImg} alt="Management"/></div>
                <div class="program-info">
                    <h3>MANAGEMENT</h3>
                    <div class="program-meta"><span><i class="fas fa-clock"></i> 2 Years</span><span><i class="fas fa-users"></i> 120 Credits</span></div>
                    <p>Accountancy, Business Studies, Economics. Real-world case studies, business simulations & internships.</p>
                    <a href="#" class="program-link">Explore Program <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
            <div class="program-card-modern fade-up-scroll">
                <div class="program-img"><img src={hmImg} alt="Hotel Management"/></div>
                <div class="program-info">
                    <h3>HOTEL MANAGEMENT</h3>
                    <div class="program-meta"><span><i class="fas fa-clock"></i> 2 Years</span><span><i class="fas fa-users"></i> 120 Credits</span></div>
                    <p>Hospitality, Food Production & Housekeeping. Industry-oriented curriculum with global internships.</p>
                    <a href="#" class="program-link">Explore Program <i class="fas fa-arrow-right"></i></a>
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
>>>>>>> parent of f7efc22 (update-1)
}

export default Home