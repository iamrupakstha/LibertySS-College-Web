import React from 'react'
import scienceImg from '../../assets/science.jpg';
import managementImg from '../../assets/management.jpg';
import hmImg from '../../assets/HM.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faAlarmClock, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import PageHeader from '../../components/PageHeader';
import { NavLink } from 'react-router-dom';
const Academics = () => {
  return (
    <div>
      <section className='academics'>

      <PageHeader title="Academics" />

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
        
      </section>
    </div>
  )
}

export default Academics