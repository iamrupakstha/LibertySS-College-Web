import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.css';

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/Anarmani+Liberty+School+Birtamod';

const Contact = () => {
    const socialLinks = [
        { icon: faFacebookF, url: 'https://facebook.com/libertysscollege', name: 'Facebook', color: '#1877F2' },
        { icon: faInstagram, url: 'https://instagram.com/liberty_ss_college_btm', name: 'Instagram', color: '#E4405F' },
        { icon: faTiktok, url: 'https://tiktok.com/@libertysscollege', name: 'TikTok', color: '#010101' },
        { icon: faYoutube, url: 'https://youtube.com/@libertysscollegebirtamod', name: 'YouTube', color: '#FF0000' },
        { icon: faLinkedinIn, url: 'https://linkedin.com/company/liberty-ss-college-birtamode', name: 'LinkedIn', color: '#0A66C2' }
    ];

    const contactCards = [
        {
            icon: faPhone,
            title: 'Call Us',
            lines: ['9805073555', '9842774390'],
            href: 'tel:9805073555',
        },
        {
            icon: faEnvelope,
            title: 'Email Us',
            lines: ['info.libertysscollege@gmail.com'],
            href: 'https://mail.google.com/mail/?view=cm&fs=1&to=info.libertysscollege@gmail.com',
            external: true,
        },
        {
            icon: faLocationDot,
            title: 'Visit Us',
            lines: ['Old Bhadrapur Road', 'Birtamode-5, Jhapa, Nepal'],
            href: GOOGLE_MAPS_URL,
            external: true,
        },
    ];

    return (
        <div className="contact-page">
            {/* Hero Banner */}
            <div className="contact-hero">
                <h1>Get In Touch</h1>
                <p>We'd love to hear from you — reach out on any platform</p>
            </div>

            <section className="contact-section">
                <div className="contact-container">

                    {/* SOCIAL MEDIA — top */}
                    <div className="social-media-container">
                        <div className="section-label">Follow Us</div>
                        <h2>Connect With Us</h2>
                        <p>Stay updated with our latest news, events and announcements.</p>
                        <div className="social-grid">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-card"
                                    style={{ '--accent-color': social.color }}
                                >
                                    <div className="social-icon">
                                        <FontAwesomeIcon icon={social.icon} />
                                    </div>
                                    <span>{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* CONTACT INFO — bottom */}
                    <div className="contact-info-section">
                        <div className="section-label">Reach Out</div>
                        <h2>Contact Information</h2>
                        <div className="contact-info-grid">
                            {contactCards.map((card, i) => (
                                <a
                                    key={i}
                                    href={card.href}
                                    target={card.external ? '_blank' : undefined}
                                    rel={card.external ? 'noopener noreferrer' : undefined}
                                    className="info-card-modern"
                                >
                                    <div className="icon-wrapper">
                                        <FontAwesomeIcon icon={card.icon} />
                                    </div>
                                    <h3>{card.title}</h3>
                                    {card.lines.map((line, j) => (
                                        <p key={j}>{line}</p>
                                    ))}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contact;
