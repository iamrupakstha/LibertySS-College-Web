import React from 'react'
import PageHeader from '../components/PageHeader';
import scienceImg from '../assets/science/science1.png';
import '../styles/Program.css';

const Science = () => {
    return (
        <div className="program-details">


            <div className="program-container">
                <h1>+2 Science Program</h1>

                <div className="program-content-grid">
                    <div className="info-card">
                        <p className="intro-text">
                            The +2 Science program at Liberty SS/College is a premier two-year intensive course designed for students who aspire to pursue careers in Medicine, Engineering, Information Technology, and Pure Sciences. Our curriculum focuses on developing analytical skills, scientific temper, and a deep understanding of natural phenomena through both theoretical knowledge and rigorous laboratory work.
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
                                        <li>Basic Mathematics/Social Studies </li>
                                        <li>Physics</li>
                                        <li>Chemistry</li>
                                        <li>Computer Science/ Biology</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="sidebar-sticky">
                        <div className="career-box">
                            <h3>Future Clusters</h3>
                            <div className="career-item">
                                <h4>Medical Cluster</h4>
                                <p>Prepares students for MBBS, BDS, Nursing, B.Pharm, and other paramedical courses.</p>
                            </div>
                            <div className="career-item">
                                <h4>Engineering Cluster</h4>
                                <p>Focuses on Mathematics and Physics for BE, B.Arch, and CSIT entrance preparations.</p>
                            </div>
                            <div className="career-item">
                                <h4>Research & Pure Sciences</h4>
                                <p>Opportunities in B.Sc. Research in Physics, Chemistry, and Biological Sciences.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Science