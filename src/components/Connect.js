// components/Connect.js
import React from 'react';

const Connect = () => {
  return (
    <section id="contact" className="contact-section reveal">
      <div className="section-header">
        <h2>Get In Touch</h2>
        <div className="section-line"></div>
      </div>
      <div className="contact-content">
        <div className="contact-info">
            <a href="mailto:mehrajhasancs@gmail.com" className="contact-item">
            <div className="contact-icon">📧</div>
            <div className="contact-details">
              <h3>Email</h3>
              <p>mehrajhasancs@gmail.com</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/mehrajhasan" className="contact-item">
            <div className="contact-icon">💼</div>
            <div className="contact-details">
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/mehrajhasan</p>
            </div>
          </a>
          <a href="https://www.github.com/mehrajhasan" className="contact-item" >
            <div className="contact-icon">🐙</div>
            <div className="contact-details">
              <h3>GitHub</h3>
              <p>github.com/mehrajhasan</p>
            </div>
          </a>
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div className="contact-details">
              <h3>Location</h3>
              <p>New York, NY</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <div className="btn-glow"></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Connect;