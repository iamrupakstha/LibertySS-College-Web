import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import libertyImage from '../../assets/liberty.avif';
import './About.css';
import { Timeline } from 'primereact/timeline';
import PageHeader from '../../components/PageHeader';
const About = () => {

  // timeline
  const milestones = [
    {year: '2008', title: 'Foundation', description: 'Began primery level school', icon: '🎓'},
    {year: '2010', title: 'Foundation', description: 'Began Secondary Level school', icon: '📚'},
    {year: '2015', title: 'Foundation', description: 'Mordern facilities and well-equiped classrooms', icon: '💻'},
    {year: '2020', title: 'Foundation', description: 'Began primery level school', icon: '🏆'},
    {year: '2026', title: '+2', description: 'Began +2 Science, Management and Hotel Management programs', icon: '🚀'}
  ];

  return (
    <div>
      <PageHeader title="About Us"/>
      <section className='about'>
        <div className="about-content">
          <h2>About <span className='span-text'>Us</span></h2>
          <div className="about-card">
            <div className="about-text">
              <p>Liberty Secondary School and College, established in 2013, is a premier educational institution in Birtamode, Jhapa. We are committed to providing quality education and fostering holistic development in our students. With a dedicated team of experienced educators, we offer a comprehensive curriculum that prepares students for academic excellence and future success. Our state-of-the-art facilities, including modern classrooms, science labs, and sports amenities, create an ideal learning environment. We prioritize character building, critical thinking, and creativity, ensuring our students are well-equipped to face the challenges of the modern world. At Liberty SS/College, we strive to nurture responsible citizens who contribute positively to society.</p>
            </div>

            <div className="about-img">
              <img src={libertyImage} alt="Liberty Secondary School and College" />
            </div>

          </div>
        </div>

        <div className="timeline-container">
          <h1>Our Journey</h1>
          <div className="horizontal-timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-icon">{milestone.icon}</div>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
                {index < milestones.length - 1 && <div className='timeline-line'> </div>}

              </div>
            ))}
          </div>
          </div>

          <div className="our-values">
            <h1>Our values</h1>
            <div className="cards">

              <div className="cards-content">
                <div className="mission-icon">🚀</div>
                <h3>Mission</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laudantium dolor iure, facere et vero? Doloremque libero, facilis fugiat quae totam molestiae distinctio odit porro, assumenda impedit ipsa eos corporis.</p>
              </div>

              <div className="cards-content">
                <div className="mission-icon">🏆</div>
                <h3>Vision</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laudantium dolor iure, facere et vero? Doloremque libero, facilis fugiat quae totam molestiae distinctio odit porro, assumenda impedit ipsa eos corporis.</p>
              </div>

              <div className="cards-content">
                <div className="mission-icon">📚</div>
                <h3>Core Values</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laudantium dolor iure, facere et vero? Doloremque libero, facilis fugiat quae totam molestiae distinctio odit porro, assumenda impedit ipsa eos corporis.</p>
              </div>
            </div>
          </div>

          </section>
        </div>
     
   

  )
}

export default About