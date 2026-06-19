import React from 'react'
import PageHeader from '../components/PageHeader';
import hmImg from '../assets/science/HM.jpg'
import '../styles/Program.css';

const HM = () => {
    return (
        <div className="program-details">

            <div className="program-container">
                <h1>+2 Hotel Management</h1>

                <div className="program-content-grid">
                    <div className="info-card">
                        <p className="intro-text">
                            The +2 Hotel Management program at Liberty SS/College is a specialized course designed to equip students with practical skills and theoretical knowledge required for the global hospitality industry. We combine academic excellence with hands-on training in food production, front office operations, and housekeeping to prepare students for the fast-growing world of tourism and hospitality.
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
                                        <td>Specialization</td>
                                        <td>Hospitality & Tourism Management</td>
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
                                        <li>Basic Mathematics /Social Studies</li>
                                        <li>Hotel Management</li>
                                        <li>Tourism & Mountaineering</li>
                                        <li>Accountancy </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sidebar-sticky">
                        <div className="career-box">
                            <h3>Industry Verticals</h3>
                            <div className="career-item">
                                <h4>Hospitality Operations</h4>
                                <p>Careers in 5-star hotels, resorts, and international hotel chains as managers and executives.</p>
                            </div>
                            <div className="career-item">
                                <h4>Culinary Arts</h4>
                                <p>Opportunities in professional kitchens, food production, and bakery operations globally.</p>
                            </div>
                            <div className="career-item">
                                <h4>Tourism & Airlines</h4>
                                <p>Pathway to careers in travel agencies, airline ground handling, and cruise ships.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default HM