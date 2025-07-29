export const Header = () => {
  const stats = [
    { number: '100+', label: 'Projects Deployed' },
    { number: '5+', label: 'Years Experience' },
    { number: '50M+', label: 'API Requests Handled' },
    { number: '99.9%', label: 'Uptime Achieved' }
  ];

  return (
    <>
      <section id="hero" className="hero">
        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-btn btn-close"></div>
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
                <span className="highlight">Mehraj Hasan</span> - Senior Full-Stack Engineer
              </span>
            </div>
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command">cat skills.txt</span>
            </div>
            <div className="terminal-line">
              <span className="output">React • Node.js • Python • TypeScript • AWS • Docker</span>
            </div>
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command">echo $EXPERIENCE</span>
            </div>
            <div className="terminal-line">
              <span className="output">
                <span className="highlight">5+ years</span> building scalable applications at{' '}
                <span className="highlight">enterprise scale</span>
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

export default Header;