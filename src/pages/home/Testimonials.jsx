import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import reviewImage from '../../assets/students/rupak.jpg';
import Nichal from '../../assets/students/nischal.jpeg';
import Girl from '../../assets/students/1.jpeg';
import Girl1 from '../../assets/students/2.jpeg';

const testimonials = [
  {
    id: 1,
    initials: "RS",
    name: "Nischal",
    program: "+2 Science",
    batch: "Batch 2026",
    text: "Liberty College helped me build confidence and practical skills I never thought I'd develop in just two years. The teachers are incredibly supportive and go above and beyond to ensure every student succeeds.",
    image: Nichal,
  },
  {
    id: 2,
    initials: "SR",
    name: "Sita Rai",
    program: "+2 Management",
    batch: "Batch 2026",
    text: "Joining Liberty was the best decision of my life. The environment is truly motivating and I learned both strong theoretical knowledge and real-world business applications side by side. The case studies were amazing.",
    image: Girl,
  },
  {
    id: 3,
    initials: "DK",
    name: "Dipesh Karki",
    program: "+2 HM",
    batch: "Batch 2026",
    text: "The Hotel Management program gave me hands-on experience I could never have imagined. The internship opportunities were outstanding — I got placed in a 5-star property before even completing my course.",
    image: reviewImage,
  },
  {
    id: 4,
    initials: "PM",
    name: "Priya Magar",
    program: "+2 Science",
    batch: "Batch 2024",
    text: "The labs and practical classes at Liberty are top-notch. Our faculty pushed us beyond just exam preparation — we actually understood concepts deeply. I cleared my entrance exam with top marks because of this foundation.",
    image: Girl1,
  },
];

const AUTO_DELAY = 5000;

// Component for student image with fallback
const StudentImage = ({ src, alt, initials, name }) => {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="ts-avatar-fallback">{initials}</div>;
  }

  return (
    <img
      src={src}
      alt={alt || name}
      className="ts-student-image"
      onError={() => setImageError(true)}
      loading="lazy"
    />
  );
};

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const autoRef = useRef(null);
  const progressRef = useRef(null);
  const total = testimonials.length;

  const goTo = useCallback((idx) => {
    setCurrent(idx);
  }, []);

  const resetAuto = () => {
    clearTimeout(autoRef.current);
    if (progressRef.current) {
      progressRef.current.style.transition = "none";
      progressRef.current.style.width = "0%";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (progressRef.current) {
            progressRef.current.style.transition = `width ${AUTO_DELAY}ms linear`;
            progressRef.current.style.width = "100%";
          }
        });
      });
    }
    autoRef.current = setTimeout(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % total;
        resetAuto(next);
        return next;
      });
    }, AUTO_DELAY);
  };

  useEffect(() => {
    resetAuto(0);
    return () => clearTimeout(autoRef.current);
  }, []);

  const prev = () => { if (current > 0) goTo(current - 1); };
  const next = () => { if (current < total - 1) goTo(current + 1); };

  return (
    <section className="ts-section">
      <div className="section-header fade-up-scroll">
        <span className="lc-discover__label">TESTIMONIALS</span>
        <h2>What our <span className="lc-accent">students say</span> </h2>
        <p>Real stories from our academic community</p>
      </div>

      <div className="ts-viewport">
        <div
          className="ts-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div className="ts-card" key={t.id || i} aria-hidden={i !== current}>
              <div className="ts-card-left">
                <StudentImage 
                  src={t.image} 
                  initials={t.initials} 
                  name={t.name} 
                  alt={`${t.name}'s profile photo`}
                />
                <div className="ts-stars">★★★★★</div>
                <div className="ts-program-badge">{t.program}</div>
              </div>
              <div className="ts-card-right">
                <div className="ts-quote-mark">"</div>
                <p className="ts-text">{t.text}</p>
                <div className="ts-divider" />
                <div>
                  <div className="ts-name">{t.name}</div>
                  <div className="ts-year">{t.program} · {t.batch}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ts-auto-bar">
        <div className="ts-auto-progress" ref={progressRef} />
      </div>

      <div className="ts-controls">
        <div className="ts-counter">
          <span>{current + 1}</span> / {total}
        </div>

        <div className="ts-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`ts-dot${i === current ? " active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

        <div className="ts-arrows">
          <button
            className="ts-btn"
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous review"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            className="ts-btn"
            onClick={next}
            disabled={current === total - 1}
            aria-label="Next review"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </section>
  );
}