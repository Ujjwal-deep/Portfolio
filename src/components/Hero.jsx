import React from 'react';

const Hero = ({ data, whoami }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="hero-eyebrow">
          <div className="eyebrow-line"></div>
          <span className="eyebrow-text">{data.tagline}</span>
        </div>
        <h1 className="hero-name">
          <span className="line1">{data.name.first}</span><br />
          <span className="line2">{data.name.last}</span>
        </h1>
        <p className="hero-desc">
          <span className="cmd-prefix">$</span>
          {data.description.replace('$ ', '')} 
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">VIEW WORK</a>
          <a href="#contact" className="btn-secondary">GET IN TOUCH</a>
        </div>
      </div>

      <div className="hero-terminal">
        <div className="terminal-bar">
          <div className="dot r"></div>
          <div className="dot y"></div>
          <div className="dot g"></div>
          <span className="terminal-title">~ whoami.json</span>
        </div>
        <div className="terminal-body">
          <span className="t-muted">// developer profile</span><br />
          <span className="t-cmd">&#123;</span><br />
          &nbsp;&nbsp;<span className="t-key">"name"</span>: <span className="t-string">"{whoami.name}"</span>,<br />
          &nbsp;&nbsp;<span className="t-key">"role"</span>: <span className="t-string">"{whoami.role}"</span>,<br />
          &nbsp;&nbsp;<span className="t-key">"location"</span>: <span className="t-string">"{whoami.location}"</span>,<br />
          &nbsp;&nbsp;<span className="t-key">"education"</span>: <span className="t-string">"{whoami.education}"</span>,<br />
          &nbsp;&nbsp;<span className="t-key">"stack"</span>: [<br />
          {Array.from({ length: Math.ceil(whoami.stack.length / 2) }, (_, i) => {
            const item1 = whoami.stack[i * 2];
            const item2 = whoami.stack[i * 2 + 1];
            return (
              <React.Fragment key={i}>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="t-string">"{item1}"</span>
                {item2 ? <>, <span className="t-string">"{item2}"</span></> : ''}
                {i < Math.ceil(whoami.stack.length / 2) - 1 ? ',' : ''}
                <br />
              </React.Fragment>
            );
          })}
          &nbsp;&nbsp;],<br />
          &nbsp;&nbsp;<span className="t-key">"speciality"</span>: <span className="t-string">"{whoami.speciality}"</span>,<br />
          &nbsp;&nbsp;<span className="t-key">"openToWork"</span>: <span className="t-num">{whoami.openToWork.toString()}</span><br />
          <span className="t-cmd">&#125;</span><br />
          <br />
          <span className="t-muted">$</span> <span className="t-cursor"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
