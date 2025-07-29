import React from 'react';

const Main = () => {
  const stats = [
    { number: '10+', label: 'Projects Built' },
    { number: '3+', label: 'Years Experience' },
    { number: '80%', label: 'Efficiency Improved' },
    { number: '100%', label: 'Passion for Code' }
  ];

  return (
    <>
      <section id="hero" className="hero">
        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-btn btn-close1"></div>
            <div className="terminal-btn btn-minimize"></div>
            <div className="terminal-btn btn-maximize"></div>
            <div className="terminal-title">mehraj@portfolio:~</div>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command">whoami</span>
            </div>
            <div className="terminal-line">
              <span className="output">
                <span className="highlight">Mehraj Hasan</span> - Software Engineer
              </span>
            </div>
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command">cat skills.txt</span>
            </div>
            <div className="terminal-line">
              <span className="output">Java • Spring Boot • C++ • JavaScript (Node.js, React) • PostgreSQL • GCP</span>
            </div>
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command">echo $EXPERIENCE</span>
            </div>
            <div className="terminal-line">
              <span className="output">
                3+ years building and shipping full-stack applications used in production
              </span>
            </div>
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command">echo $EDUCATION</span>
            </div>
            <div className="terminal-line">
              <span className="output">
                <span className="highlight">CUNY Hunter College</span> - Computer Science & Mathematics (2025){' '}
              </span>
            </div>
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="cursor-blink">█</span>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div style={{ fontSize: '20px' }}>↓</div>
        </div>
      </section>

      <section className="stats-section reveal">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Main;