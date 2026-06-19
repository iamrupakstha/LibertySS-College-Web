import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './TrainingBootcamp.css';

// Import your images
import devieducation from '../../assets/logo/devi education.jpg';
import miles from '../../assets/logo/miles.jpg';
import sportscenter from '../../assets/logo/Liberty Sports Club.png';
import regency from '../../assets/logo/regency.jpg';

const TrainingBootcamp = () => {
  const partners = [
    { 
      id: 1, 
      name: "Devi Education Center", 
      logo: devieducation,
      alt: "Devi Education Center"
    },
    { 
      id: 2, 
      name: "Birtamode Sports Center", 
      logo: sportscenter,
      alt: "Birtamode Sports center"
    },
    { 
      id: 3, 
      name: "The Regience", 
      logo: regency,
      alt: "The Regience"
    },
    { 
      id: 4, 
      name: "Miles International Consultancy", 
      logo: miles,
      alt: "Miles International Consultancy"
    },
  ];

  return (
    <section className="training-bootcamp">
      <div className="bootcamp-container">
        {/* Animated background decoration */}
        <div className="bootcamp-decoration">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>

        <div className="bootcamp-header">
          <div class="section-header fade-up-scroll">
          <span className="lc-discover__label">
            BOOTCAMP
          </span>
            <h2>Training <span className='lc-accent'>Bootcamp</span></h2>
            <p>Empowering the next generation through world-class training and industry partnerships.</p>
        </div>
        </div>

        {/* Partner Logos */}
        <div className="bootcamp-partners">
          <div className="partners-header">
            <span className="partners-label">Our Trusted Partners</span>
          </div>
          
          <div className="bootcamp-logo-grid">
            {partners.map((partner) => (
              <div key={partner.id} className="partner-card">
                <div className="partner-logo-wrapper">
                  <img 
                    className="partner-logo" 
                    src={partner.logo} 
                    alt={partner.alt} 
                    loading="lazy"
                  />
                </div>
                <p className="partner-name">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrainingBootcamp;