import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiEnvelope, HiPaperAirplane } from 'react-icons/hi2';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { contactInfo } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getSocialIcon = (iconName) => {
    const icons = {
      github: FaGithub,
      linkedin: FaLinkedin,
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">{contactInfo.title}</h2>
          <p className="section-subtitle">{contactInfo.subtitle}</p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Information Card */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-header">
              <div className="card-icon">
                <HiEnvelope />
              </div>
              <div>
                <h3>Contact Details</h3>
                <p>Get in touch via email</p>
              </div>
            </div>

            <div className="card-content">
              <motion.a
                href={`mailto:${contactInfo.email}`}
                className="email-link"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {contactInfo.email}
              </motion.a>

              {/* Availability Status */}
              {contactInfo.availability && (
                <div className="availability-section">
                  <div className="availability-header">
                    <span className="status-dot"></span>
                    <span className="status-label">{contactInfo.availability.status}</span>
                  </div>
                  <div className="availability-info">
                    <div className="info-item">
                      <span className="info-label">Looking for</span>
                      <span className="info-value">{contactInfo.availability.types.join(', ')}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Available from</span>
                      <span className="info-value">{contactInfo.availability.startDate}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Social Links */}
              <div className="social-section">
                <h4>Connect</h4>
                <div className="social-grid">
                  {contactInfo.socialLinks
                    .filter(social => social.icon === 'github' || social.icon === 'linkedin')
                    .map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-button"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {getSocialIcon(social.icon)}
                      <span>{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Message Form Card */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card-header">
              <div className="card-icon">
                <HiPaperAirplane />
              </div>
              <div>
                <h3>Send a Message</h3>
                <p>I'll respond within 24 hours</p>
              </div>
            </div>

            <div className="card-content">

                <motion.form
                  className="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Your Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Job Opportunity / Project Collaboration"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell me about the opportunity or project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="submit-button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <HiPaperAirplane />
                    Send Message
                  </motion.button>
                </motion.form>

                <div className="form-note">
                  <p>This will open your default email client</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        className="portfolio-footer"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p>&copy; {new Date().getFullYear()} All rights reserved. Built with React & Framer Motion</p>
      </motion.footer>
    </section>
  );
};

export default Contact;
