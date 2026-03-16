import './Projects.css';

const projects = [
  {
    num: '01', title: 'E-Commerce Platform',
    desc: 'A full-featured multi-vendor e-commerce solution with real-time inventory, Stripe payments, and an admin dashboard.',
    tech: ['Laravel', 'React', 'MySQL', 'Redis', 'Stripe'],
    github: 'https://github.com/yourname/ecommerce', live: '#',
  },
  {
    num: '02', title: 'Project Management SaaS',
    desc: 'Trello-inspired kanban board with team collaboration, real-time updates via WebSockets, and role-based access.',
    tech: ['Laravel', 'Vue.js', 'Pusher', 'PostgreSQL'],
    github: 'https://github.com/yourname/pm-saas', live: '#',
  },
  {
    num: '03', title: 'REST API Boilerplate',
    desc: 'Production-ready Laravel API starter with JWT auth, rate limiting, logging, and full Swagger documentation.',
    tech: ['Laravel', 'JWT', 'Swagger', 'Docker'],
    github: 'https://github.com/yourname/api-boilerplate', live: '#',
  },
  {
    num: '04', title: 'Real-time Chat App',
    desc: 'WhatsApp-style messaging platform with end-to-end encryption, group chats, and file sharing capabilities.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/yourname/chat-app', live: '#',
  },
];

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.004 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
  </svg>
);

function Projects() {
  return (
    <section className="section" id="projects">
      <p className="section-label">03. projects</p>
      <h2 className="section-title">Featured Work</h2>
      <div className="divider" />
      <div className="projects-grid">
        {projects.map(p => (
          <article key={p.num} className="card project-card">
            <div className="project-top">
              <span className="project-num">{p.num}</span>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="proj-link">
                  <GitHubIcon />
                </a>
                <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live Demo" className="proj-link">
                  <ExternalIcon />
                </a>
              </div>
            </div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tech">
              {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;