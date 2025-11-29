import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, education } from '../data/portfolioData';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="about" className="about-section">
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
          <span className="section-label">Get to Know Me</span>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="about-content">
          {/* Profile Section */}
          <motion.div
            className="about-profile"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="profile-image-container"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="profile-image">
                <img src={personalInfo.aboutMe.image} alt={personalInfo.name} />
              </div>
              <div className="profile-decoration" />
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="about-details"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-description">
              <p>{personalInfo.aboutMe.description}</p>
            </div>

            {/* Interests */}
            <div className="interests-section">
              <h4 className="interests-title">Interests & Learning</h4>
              <div className="interests-tags">
                {personalInfo.aboutMe.interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    className="interest-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          className="education-section"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="education-title">Education</h3>
          <div className="education-cards">
            {education.map((edu) => (
              <EducationCard key={edu.id} education={edu} inView={inView} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const EducationCard = ({ education: edu, inView }) => {
  return (
    <motion.div
      className="education-card"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
    >
      <div className="education-header">
        <div>
          <h4 className="education-degree">{edu.degree}</h4>
          <p className="education-institution">{edu.institution}</p>
        </div>
        {edu.gpa && <span className="education-gpa">GPA: {edu.gpa}</span>}
      </div>

      <div className="education-meta">
        <span className="education-duration">{edu.duration}</span>
        <span className="education-location">{edu.location}</span>
      </div>

      {edu.relevantCourses && edu.relevantCourses.length > 0 && (
        <div className="education-courses">
          <h5>Relevant Courses:</h5>
          <div className="courses-list">
            {edu.relevantCourses.map((course, index) => (
              <motion.span
                key={course}
                className="course-tag"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.02, duration: 0.3 }}
              >
                {course}
              </motion.span>
            ))}
          </div>
        </div>
      )}

      {edu.achievements && edu.achievements.length > 0 && (
        <div className="education-achievements">
          <h5>Achievements:</h5>
          <ul>
            {edu.achievements.map((achievement, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                {achievement}
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default About;
