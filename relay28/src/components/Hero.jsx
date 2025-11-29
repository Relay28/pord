import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi2';
import { FaDownload } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const handleScrollToSection = (e, sectionId) => {
    if (e) e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      const headerHeight = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({ 
        top: offsetPosition, 
        behavior: 'smooth' 
      });
    }
  };

  const handleDownloadCV = (e) => {
    e.preventDefault();
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your resume in the public folder
    link.download = 'Resume.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-greeting"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, I'm
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.button
              className="cta-button primary"
              onClick={(e) => handleScrollToSection(e, '#projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <HiArrowDown className="button-icon" />
            </motion.button>

            <motion.button
              className="cta-button secondary"
              onClick={(e) => handleScrollToSection(e, '#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div
            className="hero-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <button
              className="text-link"
              onClick={handleDownloadCV}
            >
              Download CV
            </button>
          </motion.div>
        </motion.div>

        {/* Animated background elements */}
        <div className="hero-background">
          <motion.div
            className="floating-shape shape-1"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="floating-shape shape-2"
            animate={{
              y: [0, 30, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="floating-shape shape-3"
            animate={{
              y: [0, -25, 0],
              x: [0, 25, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={(e) => handleScrollToSection(e, '#projects')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <HiArrowDown />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
