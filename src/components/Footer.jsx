import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">Crocheterias Maho — By: Maryam</div>
        <p style={{ fontSize: '0.95rem' }}>Tejidos hechos a mano con amor ❤️ · Instagram: <strong>@_crocheteriasmaho</strong></p>
        <p style={{ fontSize: '0.85rem', opacity: '0.8' }}>
          © {new Date().getFullYear()} CESDE - Proyecto Integrador / Desarrollo Web 2.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
