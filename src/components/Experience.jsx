import React from 'react';

const Experience = ({ experience }) => {
  return (
    <section className="section" id="experience">
      <div className="section-header reveal from-left">
        <span className="section-number">03 /</span>
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="section-line"></div>
      </div>
      <div className="exp-list stagger-parent">
        {experience.map((exp, idx) => (
          <div className="exp-row stagger-child" key={idx}>
            <div className="exp-meta">
              <div className="exp-period">{exp.period}</div>
              <div className="exp-company" dangerouslySetInnerHTML={{ __html: exp.company }}></div>
              <div className="exp-location">{exp.location}</div>
            </div>
            <div className="exp-body">
              <div className="exp-role">{exp.role}</div>
              <ul className="exp-bullets">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} dangerouslySetInnerHTML={{ __html: bullet }}></li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
