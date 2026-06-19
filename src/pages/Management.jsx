import React from 'react'
import PageHeader from '../components/PageHeader'
import managementImg from '../assets/science/management.jpg'
import '../styles/Program.css';

const Management = () => {
    return (
        <div className="program-details">


            <div className="program-container">
                <h1>+2 Management Program</h1>

                <div className="program-content-grid">
                    <div className="info-card">
                        <p className="intro-text">
                            The +2 Management program at Liberty SS/College is designed to foster future business leaders and entrepreneurs. Our curriculum provides a solid foundation in organizational management, financial accounting, and economic principles, preparing students for professional courses like CA, BBA, BBM, and BIT with a focus on both theoretical excellence and practical application.
                        </p>

                        <div className="requirements-section">
                            <h2>Program Overview</h2>
                            <table className="requirements-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Duration</td>
                                        <td>2 Years (Grade 11 & 12)</td>
                                    </tr>
                                    <tr>
                                        <td>Affiliation</td>
                                        <td>National Examination Board (NEB), Nepal</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        <div className="curriculum-section">
                            <h2>Academic Curriculum</h2>
                            <div className="curriculum-grid">
                                <div className="grade-box">
                                    <h3>Subjects</h3>
                                    <ul className="subject-list">
                                        <li>Compulsory English</li>
                                        <li>Compulsory Nepali</li>
                                        <li>Basic Mathematics / Social Studies</li>
                                        <li>Accountancy </li>
                                        <li>Economics</li>
                                        <li>Computer Science / Business Studies / Business Mathematics </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="sidebar-sticky">
                        <div className="career-box">
                            <h3>Career Paths</h3>
                            <div className="career-item">
                                <h4>Professional Accounting</h4>
                                <p>Pathway to CA (ICAN/ACCA) for careers in audit, finance, and taxation.</p>
                            </div>
                            <div className="career-item">
                                <h4>Business Management</h4>
                                <p>Foundation for BBA, BBM, and BHM in national and international universities.</p>
                            </div>
                            <div className="career-item">
                                <h4>Information Management</h4>
                                <p>Bridge to BIM and BCA for careers in business technology and IT management.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Management
