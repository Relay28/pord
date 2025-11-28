import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, education } from '../data/portfolioData';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
            animate={inView ? { opacity: 1, x: 0 } : {}}
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

            <div className="profile-info">
              <h3>{personalInfo.name}</h3>
              <p className="profile-title">{personalInfo.title}</p>
              <p className="profile-location">{personalInfo.location}</p>
            </div>
          </motion.div>

          {/* Description and Skills */}
          <motion.div
            className="about-details"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-description">
              <p>{personalInfo.aboutMe.description}</p>
            </div>

            {/* Skills */}
            <div className="skills-section">
              <h3 className="skills-title">Technical Skills</h3>
              <div className="skills-grid">
                {personalInfo.aboutMe.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={index}
                    inView={inView}
                  />
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="interests-section">
              <h3 className="interests-title">Interests & Learning</h3>
              <div className="interests-tags">
                {personalInfo.aboutMe.interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    className="interest-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
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
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="education-title">Education</h3>
          <div className="education-cards">
            {education.map((edu) => (
              <EducationCard key={edu.id} education={edu} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillBar = ({ skill, index, inView }) => {
  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-level">{skill.level}%</span>
      </div>
      <div className="skill-bar-container">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: index * 0.15, 
            ease: [0.22, 1, 0.36, 1]
          }}
        />
      </div>
    </div>
  );
};

const EducationCard = ({ education: edu, inView }) => {
  return (
    <motion.div
      className="education-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
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
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05 }}
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
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
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
