import { useState } from 'react';
import './Navbar.css';

const links = ['About', 'Skills', 'Projects', 'Contact'];

function Navbar({ scrollY }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`navbar ${scrollY > 60 ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          Nitin Majumdar
          <span className="logo-bracket"> /&gt;</span>
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l, i) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>
                <span className="nav-num">0{i + 1}.</span> {l}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              className="btn btn-outline nav-resume"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          className={`hamburger ${open ? 'active' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;