import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiTrophy, HiAcademicCap, HiStar, HiCheckBadge, HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { achievements } from '../data/portfolioData';
import './Achievements.css';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const getIcon = (iconType) => {
    const icons = {
      trophy: HiTrophy,
      certificate: HiAcademicCap,
      star: HiStar,
      award: HiCheckBadge,
    };
    const IconComponent = icons[iconType] || HiCheckBadge;
    return <IconComponent />;
  };

  return (
    <section id="achievements" className="achievements-section">
      <motion.div 
        className="section-container"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="section-header"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          ref={ref}
        >
          <span className="section-label">Recognition</span>
          <h2 className="section-title">Achievements & Awards</h2>
          <p className="section-subtitle">
            Milestones and recognitions I've earned throughout my journey
          </p>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
              getIcon={getIcon}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const AchievementCard = ({ achievement, index, getIcon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      className="achievement-card"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] 
      }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className={`achievement-icon icon-${achievement.icon}`}
        initial={{ scale: 0, rotate: -180 }}
        animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      >
        {getIcon(achievement.icon)}
      </motion.div>

      <div className="achievement-content">
        <div className="achievement-date">{achievement.date}</div>
        <h3 className="achievement-title">{achievement.title}</h3>
        <div className="achievement-organization">{achievement.organization}</div>
        <p className="achievement-description">{achievement.description}</p>

        {achievement.link && (
          <motion.a
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="achievement-link"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            View Certificate
            <HiArrowTopRightOnSquare />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default Achievements;
