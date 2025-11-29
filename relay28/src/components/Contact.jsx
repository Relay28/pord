import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiEnvelope, HiPaperAirplane } from 'react-icons/hi2';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { contactInfo } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
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
      facebook: FaFacebook,
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div 
        className="section-container"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          ref={ref}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">{contactInfo.title}</h2>
          <p className="section-subtitle">{contactInfo.subtitle}</p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Details - Compact Version */}
          <motion.div
            className="contact-details-compact"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Social Links */}
            <div className="social-section-compact">
              <p className="social-label">Connect with me:</p>
              <div className="social-links-compact">
                {contactInfo.socialLinks
                  .filter(social => ['github', 'linkedin', 'facebook'].includes(social.icon))
                  .map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-compact"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.3 + index * 0.08, duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                  >
                    {getSocialIcon(social.icon)}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Message Form Card */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
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
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="portfolio-footer"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p>&copy; {new Date().getFullYear()} All rights reserved. Built with React & Framer Motion</p>
      </motion.footer>
    </section>
  );
};

export default Contact;
