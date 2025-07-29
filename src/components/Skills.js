// components/Skills.js
import React from 'react';

const Skills = () => {
  // Clean, simple skills organized by category
  const skillCategories = [
    {
      category: "Languages",
      skills: ['Java', 'JavaScript', 'Swift', 'Python', 'C++', 'HTML', 'CSS']
    },
    {
      category: "Frameworks", 
      skills: ['Spring Boot', 'React.js', 'Node.js', 'SwiftUI', 'Express.js']
    },
    {
      category: "Developer Tools",
      skills: ['PostgreSQL', 'Maven', 'Git', 'Google Cloud Platform']
    },
    {
      category: "APIs & Libraries",
      skills: ['JWT', 'Axios', 'Cheerio', 'Discord API', 'Watchmode API']
    }
  ];

  return (
    <section id="skills" className="skills-section reveal">
      <div className="section-header">
        <h2>Technical Skills</h2>
        <div className="section-line"></div>
      </div>
      <div className="skills-grid">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category-card">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-tags">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;