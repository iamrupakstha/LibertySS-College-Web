import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Team.css';
import teamImage from '../assets/team/team.jpg'
import PageHeader from '../components/PageHeader';
const Team = () => {
    const departments = [
        {
            name: "Leadership",
            members: [
                { name: "Founder Name", qualification: "Founder & Director", role: "Leadership" },
                { name: "Principal Name", qualification: "Principal", role: "Leadership" },
            ]
        },
        {
            name: "Department of Mathematics",
            members: [
                { name: "Teacher Name", qualification: "M.Sc. Mathematics", role: "Faculty" },
                { name: "Teacher Name", qualification: "M.Sc. Mathematics", role: "Faculty" },
                { name: "Teacher Name", qualification: "M.Sc. Mathematics", role: "Faculty" },
            ]
        },
        {
            name: "Department of Physics",
            members: [
                { name: "Teacher Name", qualification: "M.Sc. Physics", role: "Faculty" },
                { name: "Teacher Name", qualification: "M.Sc. Physics", role: "Faculty" },
                { name: "Teacher Name", qualification: "M.Sc. Physics", role: "Faculty" },
            ]
        },
        {
            name: "Department of Chemistry",
            members: [
                { name: "Teacher Name", qualification: "M.Sc. Chemistry", role: "Faculty" },
                { name: "Teacher Name", qualification: "M.Sc. Chemistry", role: "Faculty" },
                { name: "Teacher Name", qualification: "M.Sc. Chemistry", role: "Faculty" },
            ]
        },
        {
            name: "Department of Computer Science",
            members: [
                { name: "Teacher Name", qualification: "M.Sc. CSIT / MCA", role: "Faculty" },
                { name: "Teacher Name", qualification: "M.Sc. CSIT / MCA", role: "Faculty" },
                { name: "Teacher Name", qualification: "M.Sc. CSIT / MCA", role: "Faculty" },
            ]
        },
        {
            name: "Department of Biology",
            members: [
                { name: "Teacher Name", qualification: "M.Sc. Biology", role: "Faculty" },
                { name: "Teacher Name", qualification: "M.Sc. Biology", role: "Faculty" },
                { name: "Teacher Name", qualification: "M.Sc. Biology", role: "Faculty" },
            ]
        },
        {
            name: "Department of Accountancy",
            members: [
                { name: "Teacher Name", qualification: "MBS / MBA / CA", role: "Faculty" },
                { name: "Teacher Name", qualification: "MBS / MBA / CA", role: "Faculty" },
                { name: "Teacher Name", qualification: "MBS / MBA / CA", role: "Faculty" },
            ]
        },
        {
            name: "Department of Economics",
            members: [
                { name: "Teacher Name", qualification: "MA Economics", role: "Faculty" },
                { name: "Teacher Name", qualification: "MA Economics", role: "Faculty" },
                { name: "Teacher Name", qualification: "MA Economics", role: "Faculty" },
            ]
        },
        {
            name: "Department of Business Studies",
            members: [
                { name: "Teacher Name", qualification: "MBS / MBA", role: "Faculty" },
                { name: "Teacher Name", qualification: "MBS / MBA", role: "Faculty" },
                { name: "Teacher Name", qualification: "MBS / MBA", role: "Faculty" },
            ]
        },
        {
            name: "Department of Hotel Management",
            members: [
                { name: "Teacher Name", qualification: "BHM / MHM", role: "Faculty" },
                { name: "Teacher Name", qualification: "BHM / MHM", role: "Faculty" },
                { name: "Teacher Name", qualification: "BHM / MHM", role: "Faculty" },
            ]
        },
        {
            name: "Department of English",
            members: [
                { name: "Teacher Name", qualification: "MA English", role: "Faculty" },
                { name: "Teacher Name", qualification: "MA English", role: "Faculty" },
                { name: "Teacher Name", qualification: "MA English", role: "Faculty" },
            ]
        },
        {
            name: "Department of Nepali",
            members: [
                { name: "Teacher Name", qualification: "MA Nepali", role: "Faculty" },
                { name: "Teacher Name", qualification: "MA Nepali", role: "Faculty" },
                { name: "Teacher Name", qualification: "MA Nepali", role: "Faculty" },
            ]
        }
    ];

    return (
        <div className="team-page">
            <PageHeader title="Our Team" />
            <section className='team-section'>
                <div className="container">
                    <div className="section-title">
                        <h1>Meet Our Faculty & Leadership</h1>
                        <p>Dedicated professionals committed to academic excellence and student success</p>
                    </div>

                    {departments.map((dept, index) => (
                        <div key={index} className="dept-group">
                            <h2 className="dept-name">{dept.name}</h2>
                            <div className="team-grid">
                                {dept.members.map((member, mIndex) => (
                                    <div key={mIndex} className="member-card">
                                        <div className="member-img">
                                            <img src={teamImage} alt={member.name} />
                                        </div>
                                        <div className="member-info">
                                            <h3>{member.name}</h3>
                                            <span className="qualification">{member.qualification}</span>
                                            <p className="role">{member.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Team