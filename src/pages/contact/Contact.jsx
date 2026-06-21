// src/pages/contact/Contact.jsx
import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faClock,
  faMapLocationDot,
  faPaperPlane,
  faCheckCircle,
  faTimesCircle,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF,
  faInstagram,
  faTiktok,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import PageHeader from '../../components/PageHeader';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  // Contact information
  const contactInfo = {
    address: {
      street: 'Old Bhadrapur Road',
      area: 'Birtamode-5, Jhapa',
      country: 'Nepal',
      mapLink: 'https://www.google.com/maps/search/Anarmani+Liberty+School+Birtamod'
    },
    phones: [
      { number: '9805073555', label: 'Main' },
      { number: '9842774390', label: 'Alternative' }
    ],
    emails: [
      { address: 'info.libertysscollege@gmail.com', label: 'General Inquiry' },
      { address: 'admission.libertysscollege@gmail.com', label: 'Admission' }
    ],
    workingHours: {
      weekdays: '7:00 AM - 5:00 PM',
      saturday: '8:00 AM - 1:00 PM',
      sunday: 'Closed'
    },
    socialLinks: {
      facebook: 'https://facebook.com/libertysscollege',
      instagram: 'https://instagram.com/libertysscollege',
      tiktok: 'https://tiktok.com/@libertysscollege',
      youtube: 'https://youtube.com/@libertysscollege',
      twitter: 'https://twitter.com/libertysscollege'
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS credentials - Replace with your actual values
      // Fetch environment variables
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY ;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: 'info.libertysscollege@gmail.com',
        reply_to: formData.email
      };

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setStatusMessage('Your message has been sent successfully! We\'ll get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setStatusMessage('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <>
      <PageHeader title="Contact Us" />
      <div className="contact-page">
        <div className="contact-container">
          {/* Hero Section */}
          <div className="contact-hero">
            <h2>Get In Touch</h2>
            <p>Have questions? We'd love to hear from you. Reach out to us anytime.</p>
          </div>

          <div className="contact-grid">
            {/* Left Column - Contact Information */}
            <div className="contact-info-section">
              <h3>Contact Information</h3>
              
              {/* Address */}
              <div className="info-card">
                <div className="info-icon" style={{ background: '#7d2926' }}>
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="info-content">
                  <h4>Our Location</h4>
                  <p>{contactInfo.address.street}</p>
                  <p>{contactInfo.address.area}</p>
                  <p>{contactInfo.address.country}</p>
                  <a 
                    href={contactInfo.address.mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                    <FontAwesomeIcon icon={faMapLocationDot} />
                    View on Google Maps
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="info-card">
                <div className="info-icon" style={{ background: '#2563eb' }}>
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="info-content">
                  <h4>Phone Numbers</h4>
                  {contactInfo.phones.map((phone, index) => (
                    <a 
                      key={index}
                      href={`tel:${phone.number}`}
                      className="phone-link"
                    >
                      {phone.number}
                      <span className="phone-label">{phone.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="info-card">
                <div className="info-icon" style={{ background: '#16a34a' }}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="info-content">
                  <h4>Email Addresses</h4>
                  {contactInfo.emails.map((email, index) => (
                    <a 
                      key={index}
                      href={`mailto:${email.address}`}
                      className="email-link"
                    >
                      {email.address}
                      <span className="email-label">{email.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div className="info-card">
                <div className="info-icon" style={{ background: '#d97706' }}>
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="info-content">
                  <h4>Working Hours</h4>
                  <div className="hours-list">
                    <div className="hour-item">
                      <span className="day">Monday - Friday</span>
                      <span className="time">{contactInfo.workingHours.weekdays}</span>
                    </div>
                    <div className="hour-item">
                      <span className="day">Saturday-Sunday</span>
                      <span className="time" style={{ color: '#dc2626' }}>
                        {contactInfo.workingHours.sunday}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links - Fixed Section */}
              <div className="social-section">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a 
                    href={contactInfo.socialLinks.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link facebook"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a 
                    href={contactInfo.socialLinks.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a 
                    href={contactInfo.socialLinks.tiktok} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link tiktok"
                  >
                    <FontAwesomeIcon icon={faTiktok} />
                  </a>
                  <a 
                    href={contactInfo.socialLinks.youtube} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link youtube"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h3>Send Us a Message</h3>
                <p>We'll get back to you within 24 hours</p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="98XXXXXXXX"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject of your message"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} spin />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="status-message success">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    {statusMessage}
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="status-message error">
                    <FontAwesomeIcon icon={faTimesCircle} />
                    {statusMessage}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-section">
            <h3>Find Us Here</h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.7077120870827!2d87.99016217543004!3d26.639328476811226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5ba8acf264e55%3A0xf8ca2a0ad74e0084!2sAnarmani%20Liberty%20School!5e1!3m2!1sen!2snp!4v1782026060205!5m2!1sen!2snp"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Liberty SS/College Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;