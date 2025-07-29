// components/Projects.js
import React from 'react';

const Projects = () => {
  // Projects data
  const projects = [
    {
      title: 'PlanAway',
      description: 'Building a collaborative travel planner with real-time itinerary editing, shared reservations, and multi-user expense tracking. Engineered offline-ready guest mode with localStorage sync, cutting onboarding friction by 80%. Deploying on GCP using Cloud Run.',
      tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'GCP']
    },
    {
      title: 'NutriLift',
      description: 'Developing an iOS fitness app using Swift and SwiftUI for frontend with Node.js and PostgreSQL backend. Implemented JWT auth flow, cutting login-related data sync issues by 75%. Built secure user data APIs with token validation.',
      tech: ['Swift', 'SwiftUI', 'Node.js', 'PostgreSQL', 'JWT']
    },
    {
      title: 'CUNYBot',
      description: 'Developed an automated bot to monitor and enroll in CUNY courses using web scraping and HTTP automation, improving enrollment efficiency by 80%. Engineered multi-user concurrency and integrated Discord webhooks for real-time notifications.',
      tech: ['Node.js', 'Got', 'Cheerio', 'Discord API', 'Web Scraping']
    },
    {
      title: 'Watch It Now',
      description: 'Developed a web application to monitor and retrieve movie/TV show availability across platforms. Integrated Watchmode API using Axios, cutting redundant fetches by 60%. Built user-friendly React.js frontend for displaying content data.',
      tech: ['React.js', 'Node.js', 'Express.js', 'Axios', 'Watchmode API']
    }
  ];

  return (
    <section id="projects" className="projects-section reveal">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <div className="section-line"></div>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <div className="project-links">
                <a href="#" className="project-link">
                  <span>GitHub</span>
                </a>
                <a href="#" className="project-link">
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;