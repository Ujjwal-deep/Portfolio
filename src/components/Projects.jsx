import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section className="section" id="projects">
      <div className="section-header reveal from-left">
        <span className="section-number">02 /</span>
        <h2 className="section-title">PROJECTS</h2>
        <div className="section-line"></div>
      </div>
      <div className="projects-list stagger-parent">
        {projects.map((project, idx) => (
          <div className="project-row stagger-child" key={idx}>
            <div className="project-number">{project.number}</div>
            <div className="project-info">
              <div className="project-name">{project.name}</div>
              <div className="project-desc">{project.description}</div>
              <div className="tags">
                {project.tags.map((tag, tagIdx) => (
                  <span className="tag" key={tagIdx}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-meta">
              <div className="project-type">{project.type}</div>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">CODE ↗</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
