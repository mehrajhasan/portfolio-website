// components/AboutMe.js
import React from 'react';

const AboutMe = () => {
  // Experience data
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Pulp Technology',
      duration: 'Jul 2023 - Aug 2023',
      description: 'Built an interactive, threaded comments feature using React.js and Spring Boot to enhance user engagement. Designed scalable backend APIs and data models with JPA for efficient storage and retrieval. Also contributed to robust unit and integration testing, helping ensure over 90% test coverage and strong backend reliability. Collaborated tightly with a peer on fast iteration and feature rollout.'
    },
    {
      title: 'Software Engineer Intern',
      company: 'Metro Restoration',
      duration: 'Jun 2022 - Aug 2022',
      description: 'Redesigned site architecture using React.js and Node.js to support responsive, server-rendered pages. Developed reusable, cross-browser compatible UI components with modern JavaScript and CSS for a consistent and scalable user experience.'
    }
  ];

  return (
    <section id="experience" className="experience-section reveal">
      <div className="section-header">
        <h2>Experience</h2>
        <div className="section-line"></div>
      </div>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-timeline">
              <div className="timeline-dot"></div>
              <div className="timeline-line"></div>
            </div>
            <div className="experience-content">
              <div className="experience-header">
                <h3>{exp.title}</h3>
                <span className="company">{exp.company}</span>
                <span className="duration">{exp.duration}</span>
              </div>
              <p className="experience-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;