import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChalkboardTeacher,
  faUserGraduate,
  faHospital,
  faMicroscope,
  faLaptop,
  faHome,
  faBus,
  faFutbol,
  faUsers,
  faFlask,
  faUtensils,
  faBook,
  faBuilding,
  faAward,
} from '@fortawesome/free-solid-svg-icons';
import './Facilities.css';

// Import facility images (you'll need to add these images to your assets folder)
import classroomImg from '../../assets/facilities/classroom.jpg';
import facultyImg from '../../assets/facilities/faculty.jpg';
import medicalImg from '../../assets/facilities/medical.jpg';
import engineeringImg from '../../assets/facilities/engineering.jpg';
import hostelImg from '../../assets/facilities/hostel.jpg';
import transportImg from '../../assets/facilities/transport.jpg';
import ecaImg from '../../assets/facilities/eca.jpg';
import welcomeImg from '../../assets/facilities/welcome.jpg';
import hallImg from '../../assets/facilities/hall.jpg';
import scienceLabImg from '../../assets/facilities/science-lab.jpg';
import hmLabImg from '../../assets/facilities/hm-lab.jpg';
import computerLabImg from '../../assets/facilities/computer-lab.jpg';
import libraryImg from '../../assets/facilities/library.jpg';
import scholarshipImg from '../../assets/facilities/scholarship.jpg';
import sportsImg from '../../assets/facilities/sports.jpg';

import PageHeader from '../../components/PageHeader';

const Facilities = () => {
  // Facility data with images and icons
  const facilities = [
    { 
      title: 'AC Classrooms', 
      icon: faChalkboardTeacher, 
      color: '#0ea5e9',
      image: classroomImg,
      description: 'Modern, air-conditioned classrooms for comfortable learning'
    },
    { 
      title: 'Experienced & Qualified Faculty', 
      icon: faUserGraduate, 
      color: '#7d2926',
      image: facultyImg,
      description: 'Dedicated teachers with years of experience'
    },
    { 
      title: 'Hostel for Boys & Girls', 
      icon: faHome, 
      color: '#0891b2',
      image: hostelImg,
      description: 'Safe and comfortable hostel facilities'
    },
    { 
      title: 'Transportation', 
      icon: faBus, 
      color: '#b45309',
      image: transportImg,
      description: 'Reliable transportation for students'
    },
    
    { 
      title: 'Extra-Curricular Activities', 
      icon: faFutbol, 
      color: '#dc2626',
      image: ecaImg,
      description: 'Diverse activities for holistic development'
    },
    { 
      title: 'Grand Welcome & Farewell Programs', 
      icon: faUsers, 
      color: '#be185d',
      image: welcomeImg,
      description: 'Celebrating student milestones with grandeur'
    },
    { 
      title: 'Covered Hall with Stage', 
      icon: faBuilding, 
      color: '#4f46e5',
      image: hallImg,
      description: 'Spacious hall for events and performances'
    },
    { 
      title: 'Science Laboratories', 
      icon: faFlask, 
      color: '#059669',
      image: scienceLabImg,
      description: 'Well-equipped labs for practical learning'
    },
    { 
      title: 'Hotel Management Practical Block', 
      icon: faUtensils, 
      color: '#2563eb',
      image: hmLabImg,
      description: 'High-class practical training facility'
    },
    { 
      title: 'Advanced Computer Lab', 
      icon: faLaptop, 
      color: '#5d687f',
      image: computerLabImg,
      description: 'Modern computer labs with latest technology'
    },
    { 
      title: 'Library & Reading Room', 
      icon: faBook, 
      color: '#92400e',
      image: libraryImg,
      description: 'Extensive collection of books and journals'
    },
    { 
      title: 'Sports Tournaments', 
      icon: faFutbol, 
      color: '#15803d',
      image: sportsImg,
      description: 'Football, Cricket, Volleyball competitions'
    },
    { 
      title: 'Scholarship Opportunities', 
      icon: faAward, 
      color: '#7d2926',
      image: scholarshipImg,
      description: 'Merit-based scholarships for deserving students'
    },
    { 
      title: 'Pre-Medical Preparation', 
      icon: faHospital, 
      color: '#16a34a',
      image: medicalImg,
      description: 'Specialized coaching for medical entrance exams'
    },
    { 
      title: 'Pre-Engineering Preparation', 
      icon: faMicroscope, 
      color: '#d97706',
      image: engineeringImg,
      description: 'Focused preparation for engineering entrance'
    },
  ];

  return (
    <>
    <PageHeader title='Facilities'/>
    
    <div className="facilities-page">
      {/* Tagline Banner */}
      

      {/* Facilities Grid */}
      <section className="fac-section">
        <div className="fac-section-header">
          <h2>Explore Our Facilities</h2>
          <p>Everything you need to succeed, all in one place</p>
        </div>
        <div className="fac-grid">
          {facilities.map((fac, i) => (
            <div
              className="fac-card"
              key={i}
              style={{ 
                '--accent': fac.color,
                animationDelay: `${i * 0.04}s` 
              }}
            >
              <div className="fac-card-image">
                <img src={fac.image} alt={fac.title} loading="lazy" />
                <div className="fac-card-overlay">
                  <div className="fac-card-icon" style={{ background: `${fac.color}20`, color: fac.color }}>
                    <FontAwesomeIcon icon={fac.icon} />
                  </div>
                </div>
              </div>
              <div className="fac-card-content">
                <h3>{fac.title}</h3>
                <p>{fac.description}</p>
                <div className="fac-card-indicator" style={{ background: fac.color }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    
    <div className="fac-tagline">
        <div className="tagline-content">
          <span className="fac-quote">"</span>
         A campus built to support every student — academically, physically, and personally.
          <span className="fac-quote">"</span>
        </div>
        <div className="fac-hero-stats">
            <div className="hero-stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">World-Class Facilities</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">99%</span>
              <span className="stat-label">Student Satisfaction</span>
            </div>
          </div>
      </div>
    </div>
    </>
  );
};

export default Facilities;