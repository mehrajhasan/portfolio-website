// components/AboutMe.js
import React from 'react';

const AboutMe = () => {
  // Experience data
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Pulp Technology',
      duration: 'Jul 2023 - Aug 2023',
      description: 'Worked on a real-time comment system used in production. Designed frontend user flows with React for threaded replies and toggled views. Handled backend integration by building routes/controllers to match frontend needs. Collaborated tightly with a peer on fast iteration and feature rollout.'
    },
    {
      title: 'Software Engineer Intern',
      company: 'Metro Restoration',
      duration: 'Jun 2022 - Aug 2022',
      description: 'Independently designed and developed a responsive company website using HTML, CSS, and JavaScript. Delivered a clean, user-friendly UI with full cross-browser and mobile support. Ensured the site reflected brand consistency and performance best practices. Completed the project end-to-end with minimal guidance.'
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