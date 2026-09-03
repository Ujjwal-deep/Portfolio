import React from 'react';

const renderIcon = (type) => {
  switch (type) {
    case 'fabric':
    case 'microsoft':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="cert-svg-icon">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    case 'tableau':
    case 'viz':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="cert-svg-icon">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <path d="M3 18l5-5 4 4 9-9" />
        </svg>
      );
    case 'python':
    case 'code':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="cert-svg-icon">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      );
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="cert-svg-icon">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      );
  }
};

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
          <div className={`cert-cell ${cert.highlight ? 'cert-highlight' : ''} stagger-child`} key={idx}>
            {cert.highlight && (
              <div className="cert-featured-tag">
                <span className="cert-featured-dot"></span>
                {cert.badge || "MICROSOFT CERTIFIED"}
              </div>
            )}
            {renderIcon(cert.iconType || cert.icon)}
            <div className="cert-name">{cert.name}</div>
            <div className="cert-desc" style={{ marginBottom: '20px' }}>{cert.description}</div>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="project-link cert-link">
              VIEW CERTIFICATE ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
