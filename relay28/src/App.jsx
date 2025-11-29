import { ThemeProvider } from './context/ThemeContext';
import { useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  const isScrollingRef = useRef(false);
  const lastScrollTime = useRef(0);

  useEffect(() => {
    let scrollTimeout;
    
    const handleScroll = () => {
      const now = Date.now();
      
      // Prevent multiple rapid triggers
      if (now - lastScrollTime.current < 100) {
        return;
      }

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollBottom = scrollTop + windowHeight;

      // Check if we're at the bottom (with small threshold)
      const isAtBottom = scrollBottom >= documentHeight - 10;

      if (isAtBottom && !isScrollingRef.current) {
        clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(() => {
          isScrollingRef.current = true;
          lastScrollTime.current = Date.now();

          // Smooth scroll to top
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });

          // Reset flag after animation completes
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 1000);
        }, 200); // Delay before triggering loop
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main className="main-content">
          <Hero />
          <Projects />
          {/* <Experience /> */}
          <Achievements />
          <About />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
