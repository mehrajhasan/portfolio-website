import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'PlanAway',
      description: 'Developed PlanAway, a collaborative travel planner used by 50+ users, featuring real-time itinerary editing, shared reservations, and multi-user expense tracking. Implemented RESTful APIs with Spring Boot and PostgreSQL, with transactional logic via Spring Data JPA for reliable trip and expense workflows. Deployed on Google Cloud Run using Docker containerization, delivering scalable, low-latency performance in production.',
      tech: ['Java', 'Spring Boot', 'React.js', 'PostgreSQL', 'GCP'],
      link: 'https://www.planaway.xyz'
    },
    {
      title: 'NutriLift',
      description: 'Developing an iOS fitness app using Swift and SwiftUI for frontend with Node.js and PostgreSQL backend. Implemented JWT auth flow, cutting login-related data sync issues by 75%. Built secure user data APIs with token validation.',
      tech: ['Swift', 'SwiftUI', 'Node.js', 'PostgreSQL', 'JWT'],
      link: 'https://github.com/mehrajhasan/NutriLift',
      github: 'https://github.com/mehrajhasan/cunybot'
    },
    {
      title: 'CUNYBot',
      description: 'Developed an automated bot to monitor and enroll in CUNY courses using web scraping and HTTP automation, improving enrollment efficiency by 80%. Engineered multi-user concurrency and integrated Discord webhooks for real-time notifications.',
      tech: ['Node.js', 'Got', 'Cheerio', 'Discord API', 'Web Scraping'],
      link: 'https://github.com/mehrajhasan/cunybot',
      github: 'https://github.com/mehrajhasan/cunybot'
    },
    {
      title: 'Matching Engine',
      description: 'Java-based terminal application simulating a basic trading system with real-time limit order matching',
      tech: ['Java'],
      link: 'https://github.com/mehrajhasan/cli-matching-engine',
      github: 'https://github.com/mehrajhasan/todo-app'
    },
    {
      title: 'Java To Do App',
      description: 'Simple CRUD web app demonstrating layered Spring Boot architecture',
      tech: ['Java', 'Spring Boot', 'JPA', 'REST APIs'],
      link: 'https://github.com/mehrajhasan/todo-app',
      github: 'https://github.com/mehrajhasan/todo-app'
    },
    {
      title: 'Watch It Now',
      description: 'Developed a web application to monitor and retrieve movie/TV show availability across platforms. Integrated Watchmode API using Axios, cutting redundant fetches by 60%. Built user-friendly React.js frontend for displaying content data.',
      tech: ['React.js', 'Node.js', 'Express.js', 'Axios', 'Watchmode API'],
      link: 'https://watchitnowbymehraj.netlify.app/',
      github: 'https://github.com/mehrajhasan/watchitnow'
    },
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
                <a href={project.link} className="project-link">
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