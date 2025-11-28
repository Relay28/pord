import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main className="main-content">
          <Hero />
          <Projects />
          <Experience />
          <Achievements />
          <About />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
