import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="projects" className="projects-section">
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
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      className="project-card"
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-links">
            {project.demoLink && (
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiArrowTopRightOnSquare />
                <span>Live Demo</span>
              </motion.a>
            )}
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
                <span>Code</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tags">
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tagIndex}
              className="project-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: tagIndex * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
