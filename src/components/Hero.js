import { useEffect, useState } from 'react';
import './Hero.css';

const roles = ['Full Stack Developer', 'React Specialist', 'Laravel Engineer', 'API Architect'];

function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIdx];
    let i = typing ? 0 : role.length;

    const interval = setInterval(() => {
      if (typing) {
        i++;
        setDisplayed(role.slice(0, i));
        if (i === role.length) {
          clearInterval(interval);
          setTimeout(() => setTyping(false), 1800);
        }
      } else {
        i--;
        setDisplayed(role.slice(0, i));
        if (i === 0) {
          clearInterval(interval);
          setTyping(true);
          setRoleIdx(prev => (prev + 1) % roles.length);
        }
      }
    }, typing ? 65 : 35);

    return () => clearInterval(interval);
  }, [roleIdx, typing]);

  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <p className="hero-greeting fade-up delay-1">
          <span className="mono-tag">&gt;_</span> Hello, World! I'm
        </p>
        <h1 className="hero-name fade-up delay-2">
          Dev<span className="name-accent"> Nitin Majumdar</span>
        </h1>
        <p className="hero-role fade-up delay-3">
          <span className="role-text">{displayed}</span>
          <span className="cursor">|</span>
        </p>
        <p className="hero-desc fade-up delay-4">
          I craft performant web applications with clean architecture, scalable APIs,
          and pixel-perfect interfaces. Turning complex problems into elegant digital solutions.
        </p>
        <div className="hero-actions fade-up delay-5">
          <a href="#projects" className="btn btn-primary">View Projects →</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
        <div className="hero-stats fade-up delay-5">
          {[['3+', 'Years Exp.'], ['20+', 'Projects'], ['10+', 'Clients'], ['5★', 'Rating']].map(([n, l]) => (
            <div key={l} className="stat">
              <span className="stat-num">{n}</span>
              <span className="stat-label">{l}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="scroll-indicator">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

export default Hero;