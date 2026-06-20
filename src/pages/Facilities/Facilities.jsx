import React from 'react';
import '../../styles/Facilities.css';

const facilities = [
    { title: 'AC Classrooms', color: '#0ea5e9' },
    { title: 'Experienced & Qualified Faculty', color: '#7d2926' },
    { title: 'Pre-Medical Preparation', color: '#16a34a' },
    { title: 'Pre-Engineering Preparation', color: '#d97706' },
    { title: 'Free Tuition Classes (Physical & Online)', color: '#7c3aed' },
    { title: 'Hostel for Boys & Girls', color: '#0891b2' },
    { title: 'Transportation ', color: '#b45309' },
    { title: 'Extra-Curricular Activities (ECA)', color: '#dc2626' },
    { title: 'Frequent Field Visits', color: '#15803d' },
    { title: 'Grand Welcome & Farewell Programs', color: '#be185d' },
    { title: 'Covered Hall with stage', color: '#4f46e5' },
    { title: 'In-House Table Tennis Court', color: '#0f766e' },
    { title: 'In-House Badminton Court', color: '#b45309' },
    { title: 'Padded table for Arm Wrestling ', color: '#7d2926' },
    { title: 'Social Media Exposure', color: '#1d4ed8' },
    { title: 'Science Laboratories', color: '#059669' },
    { title: 'High-class Hotel Management Practical block', color: '#2563eb' },
    { title: 'Advanced Computer Lab', color: '#5d687fff' },
    { title: 'Library & Reading Room', color: '#92400e' },
    { title: 'Football,Cricket, Volleyball tournaments', color: '#15803d' },
    { title: 'Creative Arts & Cultural Programs', color: '#9333ea' },
    { title: 'Counseling & Career Guidance', color: '#0f766e' },

];

const Facilities = () => (
    <div className="facilities-page">

        {/* Hero */}
        <div className="fac-hero">
            <div className="fac-hero-inner">
                <p className="fac-eyebrow">Liberty SS/College · Birtamode</p>
                <h1>Our Facilities</h1>
                <p className="fac-hero-sub">
                    A campus built to support every student — academically, physically, and personally.
                </p>
            </div>
        </div>

        {/* Tagline banner */}
        <div className="fac-tagline">
            <span className="fac-quote">"</span>
            Hair doesn't study — students do. No restrictions on hair at Liberty SS/College.
            <span className="fac-quote">"</span>
        </div>

        {/* Cards */}
        <section className="fac-section">
            <div className="fac-grid">
                {facilities.map((fac, i) => (
                    <div
                        className="fac-card"
                        key={i}
                        style={{ '--accent': fac.color, animationDelay: `${i * 0.04}s` }}
                    >
                        <h3>{fac.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    </div>
);

export default Facilities;
