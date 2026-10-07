import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="auth-container">
      <div style={{ width: '100%', maxWidth: '450px' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: '700' }}>
            <img src="/favicon.svg" alt="Logo" width="40" height="40" />
            <span>Crocheterias Maho</span>
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
