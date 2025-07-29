import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [activeNav, setActiveNav] = useState('hero');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationId;
    
    const updateFollower = () => {
      setFollowerPos(prev => ({
        x: prev.x + (mousePos.x - prev.x) * 0.1,
        y: prev.y + (mousePos.y - prev.y) * 0.1
      }));
      animationId = requestAnimationFrame(updateFollower);
    };

    animationId = requestAnimationFrame(updateFollower);
    return () => cancelAnimationFrame(animationId);
  }, [mousePos]);

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveNav(sectionId);
    }
  };

  return (
    <div className="App">
      <div className="bg-canvas"></div>
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div 
        className="cursor" 
        style={{ 
          left: mousePos.x, 
          top: mousePos.y 
        }}
      ></div>
      <div 
        className="cursor-follower" 
        style={{ 
          left: followerPos.x, 
          top: followerPos.y 
        }}
      ></div>

      <nav>
        <ul className="nav-links">
          <li>
            <a 
              onClick={() => scrollToSection('hero')}
              className={activeNav === 'hero' ? 'active' : ''}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              onClick={() => scrollToSection('experience')}
              className={activeNav === 'experience' ? 'active' : ''}
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              onClick={() => scrollToSection('projects')}
              className={activeNav === 'projects' ? 'active' : ''}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              onClick={() => scrollToSection('skills')}
              className={activeNav === 'skills' ? 'active' : ''}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              onClick={() => scrollToSection('contact')}
              className={activeNav === 'contact' ? 'active' : ''}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <Main/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Connect/>
      <Footer/>
    </div>
  );
}

export default App;