import React from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.brand}>Etac</div>
      <div style={styles.links}>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} style={styles.link}>
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#1f2937',
    color: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  },
  brand: {
    fontSize: '1.5rem',
    fontWeight: '700',
    letterSpacing: '0.05em',
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'opacity 0.2s ease',
  },
};

export default Navbar;
