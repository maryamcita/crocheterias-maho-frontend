import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p><strong>Crocheterias Maho</strong> — Tejidos artesanales hechos con amor ❤️</p>
        <p>© {new Date().getFullYear()} CESDE - Desarrollo Web 2 / Momento 2 SPA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
