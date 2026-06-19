import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Team.css';
import teamImage from '../assets/team/team.jpg'
import PageHeader from '../components/PageHeader';
const Team = () => {
  return (
    <div>
      <PageHeader title="Our Team" />
      <section className='team'>
        <h1>Meet Our Team</h1>

        <div className="team-card">
          <div className="team-member">
            <img src={teamImage} alt="" />
            <h3>Mr. Roshan Subedi</h3>
            <span>Master Degree's from Patan Multiple Campus</span>
            <p>Science Head of Department</p>
          </div>

          <div className="team-member">
            <img src={teamImage} alt="" />
            <h3>Mr. Bikram Thapa</h3>
            <span>Master Degree's from Shanker Dev Campus</span>
            <p>Science Head of Department</p>
          </div>

          <div className="team-member">
            <img src={teamImage} alt="" />
            <h3>Mr. Rohit Ojha</h3>
            <span>Founder, Director & CEO of The Regency Hospitality, Birtamode </span>
            <p>HM Head of Department</p>
          </div>

          <div className="team-member">
            <img src={teamImage} alt="" />
            <h3>Er. Govinda Kadel</h3>
            <span>M. tech- Structural Engineering</span>
            <p>Science Head of Department</p>
          </div>

          <div className="team-member">
            <img src={teamImage} alt="" />
            <h3>Dr. Saurav Subedi</h3>
            <span>MBBS</span>
            <p>Medical Counseling</p>
          </div>


          
        </div>
      </section>
    </div>
  )
}

export default Team