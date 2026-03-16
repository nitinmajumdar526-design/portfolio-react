import './Skills.css';

const skillGroups = [
  {
    category: 'Frontend', icon: '🎨',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'TypeScript', level: 85 },
      { name: 'CSS / Tailwind', level: 90 },
      { name: 'Next.js', level: 78 },
    ],
  },
  {
    category: 'Backend', icon: '⚙️',
    skills: [
      { name: 'Laravel', level: 95 },
      { name: 'PHP', level: 90 },
      { name: 'Node.js', level: 75 },
      { name: 'REST APIs', level: 93 },
    ],
  },
  {
    category: 'Database & DevOps', icon: '🗄️',
    skills: [
      { name: 'MySQL / PostgreSQL', level: 88 },
      { name: 'Redis', level: 72 },
      { name: 'Docker', level: 70 },
      { name: 'Git / GitHub', level: 92 },
    ],
  },
];

function Skills() {
  return (
    <section className="section" id="skills">
      <p className="section-label">02. skills</p>
      <h2 className="section-title">Tech Stack</h2>
      <div className="divider" />
      <div className="skills-grid">
        {skillGroups.map(group => (
          <div key={group.category} className="card skill-card">
            <div className="skill-card-header">
              <span className="skill-icon">{group.icon}</span>
              <h3 className="skill-category">{group.category}</h3>
            </div>
            <div className="skill-list">
              {group.skills.map(skill => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-meta">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-pct">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ '--width': `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;