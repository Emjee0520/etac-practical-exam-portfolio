import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#1f2937',
        color: '#f9fafb',
        textAlign: 'center',
        padding: '1rem 1.5rem',
        marginTop: '2rem',
        fontSize: '0.95rem',
      }}
    >
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} ETAC Practical Exam Portfolio</p>
    </footer>
  );
};

export default Footer;
