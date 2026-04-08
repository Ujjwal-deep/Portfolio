import React from 'react';

const About = ({ about, resumeLink }) => {
  return (
    <section className="section" id="about">
      <div className="section-header reveal from-left">
        <span className="section-number">05 /</span>
        <h2 className="section-title">ABOUT</h2>
        <div className="section-line"></div>
      </div>
      <div className="about-grid">
        <div className="about-stats stagger-parent">
          {about.stats.map((stat, idx) => (
            <div className="stat-block stagger-child" key={idx}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="reveal from-right">
          <h3 className="about-heading" dangerouslySetInnerHTML={{ __html: about.heading }}></h3>
          {about.paragraphs.map((para, idx) => (
            <p className="about-para" key={idx}>{para}</p>
          ))}

          <div style={{ marginTop: '40px' }}>
            <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              DOWNLOAD RESUME ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
