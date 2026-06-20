import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserTie,
  faGraduationCap,
  faBriefcase,
  faFlask,
  faLaptopCode,
  faBuilding,
  faHospital,
} from '@fortawesome/free-solid-svg-icons';
import './Team.css';
import teamImage from '../../assets/team/team.jpg';
import PageHeader from '../../components/PageHeader';

const Team = () => {
  // Department data with members
  const departments = [
    {
      id: 'science',
      name: 'Science Department',
      icon: faFlask,
      description: 'Excellence in scientific education and research',
      members: [
        {
          id: 1,
          name: 'Mr. Roshan Subedi',
          qualification: "Master Degree's from Patan Multiple Campus",
          role: 'Science Head of Department',
          image: teamImage,
        },
        {
          id: 2,
          name: 'Mr. Bikram Thapa',
          qualification: "Master Degree's from Shanker Dev Campus",
          role: 'Science Faculty Member',
          image: teamImage,
        },
        {
          id: 4,
          name: 'Er. Govinda Kadel',
          qualification: 'M. tech- Structural Engineering',
          role: 'Science Faculty Member',
          image: teamImage,
        },
      ],
    },
    {
      id: 'management',
      name: 'Management Department',
      icon: faBuilding,
      description: 'Developing future business leaders and entrepreneurs',
      members: [
        {
          id: 6,
          name: 'Mr. Suresh Adhikari',
          qualification: 'MBA from Tribhuvan University',
          role: 'Management Head of Department',
          image: teamImage,
        },
        {
          id: 7,
          name: 'Ms. Sunita Sharma',
          qualification: 'MBS from Kathmandu University',
          role: 'Management Faculty Member',
          image: teamImage,
        },
        {
          id: 8,
          name: 'Mr. Rajesh Ghimire',
          qualification: 'MBA in Finance',
          role: 'Management Faculty Member',
          image: teamImage,
        },
      ],
    },
    {
      id: 'hm',
      name: 'Hotel Management (HM)',
      icon: faBriefcase,
      description: 'Hospitality excellence and industry-ready professionals',
      members: [
        {
          id: 3,
          name: 'Mr. Rohit Ojha',
          qualification: 'Founder, Director & CEO of The Regency Hospitality, Birtamode',
          role: 'HM Head of Department',
          image: teamImage,
        },
        {
          id: 9,
          name: 'Mr. Prakash Rana',
          qualification: 'Master in Hotel Management',
          role: 'HM Faculty Member',
          image: teamImage,
        },
        {
          id: 10,
          name: 'Ms. Asha Thapa',
          qualification: 'Degree in Culinary Arts',
          role: 'HM Practical Instructor',
          image: teamImage,
        },
      ],
    },
    {
      id: 'engineering',
      name: 'Engineering Department',
      icon: faGraduationCap,
      description: 'Building the future with technical expertise',
      members: [
        {
          id: 11,
          name: 'Er. Ram Pandey',
          qualification: 'M.Sc. in Civil Engineering',
          role: 'Engineering Head of Department',
          image: teamImage,
        },
        {
          id: 12,
          name: 'Er. Sita Thapa',
          qualification: 'M.Sc. in Mechanical Engineering',
          role: 'Engineering Faculty Member',
          image: teamImage,
        },
        {
          id: 13,
          name: 'Er. Krishna Adhikari',
          qualification: 'M.Sc. in Electrical Engineering',
          role: 'Engineering Faculty Member',
          image: teamImage,
        },
      ],
    },
    {
      id: 'it',
      name: 'IT & Computer Department',
      icon: faLaptopCode,
      description: 'Driving innovation through technology and coding',
      members: [
        {
          id: 14,
          name: 'Mr. Anil Sharma',
          qualification: 'M.Sc. in Computer Science',
          role: 'IT Head of Department',
          image: teamImage,
        },
        {
          id: 15,
          name: 'Ms. Priya Karki',
          qualification: 'M.Sc. in Software Engineering',
          role: 'IT Faculty Member',
          image: teamImage,
        },
        {
          id: 16,
          name: 'Mr. Deepak Rai',
          qualification: 'B.E. in Computer Engineering',
          role: 'IT Faculty Member',
          image: teamImage,
        },
      ],
    },
    {
      id: 'counselling',
      name: 'Medical Counselling',
      icon: faHospital,
      description: 'Expert guidance for medical and healthcare careers',
      members: [
        {
          id: 5,
          name: 'Dr. Saurav Subedi',
          qualification: 'MBBS',
          role: 'Medical Counseling Lead',
          image: teamImage,
        },
        {
          id: 17,
          name: 'Dr. Nisha Gurung',
          qualification: 'MD in General Medicine',
          role: 'Medical Counselor',
          image: teamImage,
        },
        {
          id: 18,
          name: 'Dr. Manish Thapa',
          qualification: 'MBBS, Public Health',
          role: 'Medical Career Advisor',
          image: teamImage,
        },
      ],
    },
  ];

  return (
    <div>
      <PageHeader title="Our Team" />
      <section className="team">
        <div className="team-header">
          <h1>Meet Our Team</h1>
          <p className="team-subtitle">
            Dedicated professionals committed to excellence in education across all departments
          </p>
        </div>

        <div className="team-departments">
          {departments.map((department) => (
            <div key={department.id} className="department-section">
              <div className="department-header">
                <div className="department-icon-wrapper">
                  <FontAwesomeIcon icon={department.icon} className="department-icon" />
                </div>
                <div className="department-info">
                  <h2>{department.name}</h2>
                  <p>{department.description}</p>
                </div>
              </div>

              <div className="team-grid">
                {department.members.map((member) => (
                  <div key={member.id} className="team-member">
                    <div className="member-image-wrapper">
                      <img src={member.image} alt={member.name} />
                      <div className="member-overlay">
                        <FontAwesomeIcon icon={faUserTie} className="overlay-icon" />
                      </div>
                    </div>
                    <div className="member-info">
                      <h3>{member.name}</h3>
                      <p className="member-qualification">{member.qualification}</p>
                      <span className="member-role">{member.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;