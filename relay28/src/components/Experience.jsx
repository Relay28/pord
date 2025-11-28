import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiBuildingOffice2, HiCalendar, HiMapPin } from 'react-icons/hi2';
import { experience } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <span className="section-label">Career Path</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey and contributions to various organizations
          </p>
        </motion.div>

        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience: exp, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="experience-card"
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <div className="experience-timeline-marker">
        <motion.div
          className="timeline-dot"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
        />
      </div>

      <motion.div
        className="experience-content"
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="experience-header">
          <div>
            <h3 className="experience-position">{exp.position}</h3>
            <div className="experience-company">
              <HiBuildingOffice2 />
              <span>{exp.company}</span>
            </div>
          </div>
          <span className={`experience-type ${exp.type.toLowerCase()}`}>
            {exp.type}
          </span>
        </div>

        <div className="experience-meta">
          <div className="experience-duration">
            <HiCalendar />
            <span>{exp.duration}</span>
          </div>
          <div className="experience-location">
            <HiMapPin />
            <span>{exp.location}</span>
          </div>
        </div>

        <ul className="experience-description">
          {exp.description.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 + i * 0.1 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>

        <div className="experience-technologies">
          {exp.technologies.map((tech, i) => (
            <motion.span
              key={i}
              className="tech-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 + i * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
