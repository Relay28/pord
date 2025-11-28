import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiTrophy, HiAcademicCap, HiStar, HiCheckBadge, HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { achievements } from '../data/portfolioData';
import './Achievements.css';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="achievements" className="achievements-section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <span className="section-label">Recognition</span>
          <h2 className="section-title">Achievements & Awards</h2>
          <p className="section-subtitle">
            Milestones and recognitions I've earned throughout my journey
          </p>
        </motion.div>

        <motion.div
          className="achievements-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              variants={itemVariants}
              getIcon={getIcon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const AchievementCard = ({ achievement, variants, getIcon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="achievement-card"
      variants={variants}
      ref={ref}
      whileHover={{ y: -12, scale: 1.03 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className={`achievement-icon icon-${achievement.icon}`}
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
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
