// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">&copy; 2025 Mehraj Hasan. Built with React & CSS.</p>
        <div className="footer-links">
          <a href="https://github.com/mehrajhasan" className="footer-link">GitHub</a>
          <a href="https://linkedin.com/in/mehraj-hasan" className="footer-link">LinkedIn</a>
          <a href="mailto:mehrajhasancs@gmail.com" className="footer-link">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;