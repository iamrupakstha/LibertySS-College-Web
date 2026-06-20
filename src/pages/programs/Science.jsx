import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
  faClock,
  faCreditCard,
  faAward,
  faBriefcase,
  faMicroscope,
  faLaptopCode,
  faChartLine,
  faPalette,
  faGraduationCap,
  faUserMd,
  faCogs,
  faAtom
} from '@fortawesome/free-solid-svg-icons';
import PageHeader from '../../components/PageHeader';
import scienceImg from '../../assets/science/science1.png';
import './Science.css';

const Science = () => {
  // Program data
  const programData = {
    title: '+2 Science',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio adipisci officia odit ipsa consectetur a tenetur eligendi voluptatum corporis magnam reiciendis animi hic, unde nam repellat quam architecto molestiae. Doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore placeat modi mollitia, enim quae, exercitationem perferendis nisi animi quas eligendi alias, ea omnis nemo suscipit dolores deleniti quasi doloremque architecto!',
    duration: '2 Years',
    creditHours: '120',
    board: 'NEB',
  };

  // Subject data for both classes
  const classData = {
    xi: {
      title: 'Class XI',
      subjects: [
        'Com. Nepali',
        'Com. English',
        'Basic Mathematics OR Social Studies',
        'Physics',
        'Chemistry',
        'Biology or Computer Science',
      ],
    },
    xii: {
      title: 'Class XII',
      subjects: [
        'Com. Nepali',
        'Com. English',
        'Basic Mathematics OR Social Studies',
        'Physics',
        'Chemistry',
        'Biology or Computer Science',
      ],
    },
  };

  // Career paths
  const careers = [
    {
      id: 1,
      title: 'Engineering',
      icon: faCogs,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque molestias id expedita. Dicta numquam aliquam, praesentium earum repudiandae mollitia velit, dolore rem ratione ullam a quo unde? Dolore, asperiores!',
      color: '#7d2926',
    },
    {
      id: 2,
      title: 'Medical Sectors',
      icon: faUserMd,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque molestias id expedita. Dicta numquam aliquam, praesentium earum repudiandae mollitia velit, dolore rem ratione ullam a quo unde? Dolore, asperiores!',
      color: '#9a423f',
    },
    {
      id: 3,
      title: 'IT Courses',
      icon: faLaptopCode,
      description: 'BIT/BCS/BSc. CSIT - Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque molestias id expedita. Dicta numquam aliquam, praesentium earum repudiandae mollitia velit, dolore rem ratione ullam a quo unde? Dolore, asperiores!',
      color: '#5f1e1c',
    },
    {
      id: 4,
      title: 'Business/Management',
      icon: faChartLine,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque molestias id expedita. Dicta numquam aliquam, praesentium earum repudiandae mollitia velit, dolore rem ratione ullam a quo unde? Dolore, asperiores!',
      color: '#7d2926',
    },
    {
      id: 5,
      title: 'Arts',
      icon: faPalette,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque molestias id expedita. Dicta numquam aliquam, praesentium earum repudiandae mollitia velit, dolore rem ratione ullam a quo unde? Dolore, asperiores!',
      color: '#9a423f',
    },
    {
      id: 6,
      title: 'Education',
      icon: faGraduationCap,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque molestias id expedita. Dicta numquam aliquam, praesentium earum repudiandae mollitia velit, dolore rem ratione ullam a quo unde? Dolore, asperiores!',
      color: '#5f1e1c',
    },
  ];

  return (
    <div>
      <PageHeader title="Science" />
      <section className="program-section">
        <div className="program-container">
          {/* Hero Section */}
          <div className="program-hero">
            <div className="hero-icon-wrapper">
              <FontAwesomeIcon icon={faAtom} className="hero-icon" />
            </div>
            <h1>{programData.title}</h1>
            <p className="hero-subtitle">
              Empowering future scientists and innovators through quality education
            </p>
          </div>

          {/* Introduction & Overview */}
          <div className="program-overview">
            <div className="overview-content">
              <div className="overview-text">
                <h2>Program Overview</h2>
                <p>{programData.description}</p>
                <div className="overview-stats">
                  <div className="stat-item">
                    <FontAwesomeIcon icon={faClock} className="stat-icon" />
                    <div>
                      <span className="stat-label">Duration</span>
                      <span className="stat-value">{programData.duration}</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <FontAwesomeIcon icon={faCreditCard} className="stat-icon" />
                    <div>
                      <span className="stat-label">Credit Hours</span>
                      <span className="stat-value">{programData.creditHours}</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <FontAwesomeIcon icon={faAward} className="stat-icon" />
                    <div>
                      <span className="stat-label">Board</span>
                      <span className="stat-value">{programData.board}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overview-image">
                <img src={scienceImg} alt="Science Program" />
                <div className="image-overlay">
                  <span className="image-badge">NEB Affiliated</span>
                </div>
              </div>
            </div>
          </div>

          {/* Course Modules */}
          <div className="course-modules">
            <div className="modules-header">
              <h2>
                <FontAwesomeIcon icon={faBookOpen} className="section-icon" />
                Course Modules
              </h2>
              <p>Comprehensive curriculum designed for academic excellence</p>
            </div>

            <div className="modules-grid">
              {[classData.xi, classData.xii].map((classItem, index) => (
                <div key={index} className="module-card">
                  <div className="module-header">
                    <div className="module-number">{index + 1}</div>
                    <h3>{classItem.title}</h3>
                  </div>
                  <ul className="subject-list">
                    {classItem.subjects.map((subject, idx) => (
                      <li key={idx}>
                        <FontAwesomeIcon icon={faMicroscope} className="subject-icon" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Career Paths */}
          <div className="career-section">
            <div className="career-header">
              <h2>
                <FontAwesomeIcon icon={faBriefcase} className="section-icon" />
                Career Opportunities
              </h2>
              <p>Explore the diverse career paths after completing +2 Science</p>
            </div>

            <div className="career-grid">
              {careers.map((career) => (
                <div key={career.id} className="career-card">
                  <div className="career-icon-wrapper" style={{ background: `${career.color}15` }}>
                    <FontAwesomeIcon icon={career.icon} className="career-icon" style={{ color: career.color }} />
                  </div>
                  <h3>{career.title}</h3>
                  <p>{career.description}</p>
                  <div className="career-indicator" style={{ background: career.color }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Science;