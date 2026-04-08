import React from 'react';

const Contact = ({ contact }) => {
  return (
    <div className="layout" style={{margin: '0', padding: '0', width: '100%', maxWidth: 'none'}}>
      {/* We reset layout constraints slightly inside this component because 
          the original HTML wraps the contact section in its own layout div */}
      <section className="contact-section reveal scale-in" id="contact">
        <div className="contact-inner">
          <div className="contact-left">
            <h2 className="contact-heading">LET'S<br /><span>CONNECT</span></h2>
            <p className="contact-sub">{contact.message}</p>
          </div>
          <div className="contact-right">
            {contact.links.map((linkItem, idx) => (
              <a key={idx} href={linkItem.url} target={linkItem.url.startsWith('http') ? "_blank" : "_self"} rel={linkItem.url.startsWith('http') ? "noopener noreferrer" : ""} className="contact-link">
                <div>
                  <span className="contact-link-label">{linkItem.label}</span>
                  <span className="contact-link-value">{linkItem.value}</span>
                </div>
                <span className="contact-link-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
