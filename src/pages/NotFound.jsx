import React from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

// Pantalla 404: se muestra cuando la ruta no existe
const NotFound = () => {
  usePageTitle('Página no encontrada');

  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <div style={{ fontSize: '4rem' }}>🧶</div>
      <h1 className="page-title">404 — Página no encontrada</h1>
      <p className="page-subtitle" style={{ marginBottom: '2rem' }}>
        Parece que este ovillo se desenredó. La página que buscas no existe.
      </p>
      <Link to="/" className="btn btn-primary">
        ← Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
