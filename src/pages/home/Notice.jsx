// LatestNotice.jsx
import React, { useState, useEffect } from "react";
import "./LatestNotice.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBullhorn, 
  faCalendarAlt, 
  faClock, 
  faChevronRight,
  faXmark
} from "@fortawesome/free-solid-svg-icons";

const notices = [
  {
    id: 1,
    title: "Admission Open 2026",
    description: "Applications are now open for +2 Science, Management, and Hotel Management programs. Limited seats available.",
    date: "June 19, 2026",
    time: "10:00 AM",
    type: "important",
    link: "/admissions"
  },
  {
    id: 2,
    title: "Exam Schedule Released",
    description: "Final examination schedule for Batch 2024 has been published. Check your respective departments.",
    date: "June 17, 2026",
    time: "2:30 PM",
    type: "update",
    link: "/exams"
  },
  {
    id: 3,
    title: "Sports Week 2026",
    description: "Annual sports week starting from June 25. Register your teams by June 22.",
    date: "June 15, 2026",
    time: "9:00 AM",
    type: "event",
    link: "/sports"
  }
];

export default function LatestNotice() {
  const [currentNotice, setCurrentNotice] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (notices.length > 1) {
      const timer = setInterval(() => {
        setCurrentNotice((prev) => (prev + 1) % notices.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, []);

  if (!isVisible || notices.length === 0) return null;

  const notice = notices[currentNotice];

  const getTypeIcon = (type) => {
    switch(type) {
      case 'important': return '📢';
      case 'event': return '🎯';
      case 'update': return '📋';
      default: return '📌';
    }
  };

  const getTypeClass = (type) => {
    switch(type) {
      case 'important': return 'notice-important';
      case 'event': return 'notice-event';
      case 'update': return 'notice-update';
      default: return '';
    }
  };

  return (
    <div className="notice-section">
      <div className="notice-container">
        {/* Header */}
        <div className="notice-header">
          <div className="notice-header-left">
            <div className="notice-icon-wrapper">
              <FontAwesomeIcon icon={faBullhorn} className="notice-icon" />
            </div>
            <div>
              <h3 className="notice-title">Latest Announcements</h3>
              <p className="notice-subtitle">Stay updated with college news</p>
            </div>
          </div>
          <button 
            className="notice-close"
            onClick={() => setIsVisible(false)}
            aria-label="Close notices"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* Notice Content */}
        <div className={`notice-content ${getTypeClass(notice.type)}`}>
          <div className="notice-type-badge">
            {getTypeIcon(notice.type)} {notice.type.charAt(0).toUpperCase() + notice.type.slice(1)}
          </div>
          
          <div className="notice-body">
            <h4 className="notice-heading">{notice.title}</h4>
            <p className="notice-description">{notice.description}</p>
            
            <div className="notice-meta">
              <div className="notice-meta-item">
                <FontAwesomeIcon icon={faCalendarAlt} />
                <span>{notice.date}</span>
              </div>
              <div className="notice-meta-item">
                <FontAwesomeIcon icon={faClock} />
                <span>{notice.time}</span>
              </div>
            </div>

            <a href={notice.link} className="notice-link">
              Read More
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </div>
        </div>

        {/* Navigation Dots */}
        {notices.length > 1 && (
          <div className="notice-dots">
            {notices.map((_, index) => (
              <button
                key={index}
                className={`notice-dot ${index === currentNotice ? 'active' : ''}`}
                onClick={() => setCurrentNotice(index)}
                aria-label={`Go to notice ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}