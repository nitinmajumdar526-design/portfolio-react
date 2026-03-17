import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">
          Designed & Built by <a href="#hero" className="footer-link">Nitin Majumdar</a>
        </p>
        <p className="footer-mono">
          <span className="logo-bracket">&lt;/</span>portfolio<span className="logo-bracket">&gt;</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;