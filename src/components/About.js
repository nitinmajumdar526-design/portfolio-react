import './About.css';

function About() {
  return (
    <section className="section" id="about">
      <p className="section-label">01. about</p>
      <h2 className="section-title">Who I Am</h2>
      <div className="divider" />

      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a <strong>Full Stack Developer</strong> with a passion for building robust,
            scalable web applications. I specialize in crafting seamless user experiences
            with <span className="highlight">React.js</span> on the frontend and rock-solid APIs
            with <span className="highlight">Laravel</span> on the backend.
          </p>
          <p>
            My approach blends clean code principles with performance-first thinking. Whether
            it's architecting a RESTful API, building dynamic UIs, or optimizing database
            queries — I care deeply about the craft.
          </p>
          <p>
            When I'm not coding, you'll find me contributing to open source, reading about
            system design, or exploring the latest in web technology.
          </p>
          <div className="about-tech">
            <p className="tech-label">Technologies I work with:</p>
            <ul className="tech-list">
              {['React.js', 'Laravel', 'TypeScript', 'MySQL', 'Redis', 'Docker', 'REST APIs', 'Git'].map(t => (
                <li key={t}><span className="tech-arrow">▹</span>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about-card-wrap">
          <div className="about-avatar-card card">
            <div className="avatar-ring">
              <div className="avatar-inner">
                <span className="avatar-icon">👨‍💻</span>
              </div>
            </div>
            <div className="about-badges">
              {[
                { icon: '⚡', text: 'Fast Delivery' },
                { icon: '🎯', text: 'Clean Code' },
                { icon: '🔒', text: 'Secure APIs' },
                { icon: '📱', text: 'Responsive' },
              ].map(b => (
                <span key={b.text} className="badge">{b.icon} {b.text}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;