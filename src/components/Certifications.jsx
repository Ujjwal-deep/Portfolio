import React from 'react';

const Certifications = ({ certifications }) => {
  return (
    <section className="section" id="certifications">
      <div className="section-header reveal from-left">
        <span className="section-number">04 /</span>
        <h2 className="section-title">CERTIFICATIONS</h2>
        <div className="section-line"></div>
      </div>
      <div className="cert-grid stagger-parent">
        {certifications.map((cert, idx) => (
          <div className="cert-cell stagger-child" key={idx}>
            <div className="cert-name">{cert.name}</div>
            <div className="cert-desc" style={{ marginBottom: '16px' }}>{cert.description}</div>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="project-link">
              VIEW CERTIFICATE ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
