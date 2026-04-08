import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section className="section reveal" id="skills">
      <div className="section-header reveal from-left">
        <span className="section-number">01 /</span>
        <h2 className="section-title">SKILLS & TOOLS</h2>
        <div className="section-line"></div>
      </div>
      <div className="skills-grid stagger-parent">
        {skills.map((skillGroup, idx) => (
          <div className="skill-cell stagger-child" key={idx}>
            <div className="skill-category">{skillGroup.category}</div>
            <ul className="skill-list">
              {skillGroup.items.map((item, itemIdx) => (
                <li key={itemIdx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
