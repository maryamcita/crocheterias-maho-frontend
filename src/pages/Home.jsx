import React from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

const Home = () => {
  usePageTitle('Inicio');

  return (
    <div>
      {/* Banner Principal con la marca de Maryam */}
      <section className="hero-banner">
        <span className="hero-tag">✨ By: Maryam — Hecho a Mano</span>
        <h1 className="hero-title">
          Tejidos artesanales llenos de <span>amor & color</span>
        </h1>
        <p className="page-subtitle" style={{ maxWidth: '680px', margin: '0 auto 2.2rem' }}>
          Amigurumis personalizados, llaveros únicos, accesorios y prendas tejidas punto a punto con hilos hipoalergénicos de alta calidad.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/catalogo" className="btn btn-primary">
            Explorar Catálogo 🧶
          </Link>
          <Link to="/crear-producto" className="btn btn-secondary">
            + Registrar Producto
          </Link>
        </div>
      </section>

      {/* Sección Comunidad & Estilo de Vida */}
      <div className="page-header">
        <h2 className="page-title">El Universo de Crocheterias Maho</h2>
        <p className="page-subtitle">Mucho más que tejidos: comunidad, creatividad y café</p>
      </div>

      <div className="product-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', marginBottom: '3rem' }}>
        <div className="product-card" style={{ padding: '1.8rem' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🐶</div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>
            Amigurumis Personalizados
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Recreamos a tu mascota en amigurumi tejida (como nuestro icónico perrito Randy) cuidando cada pequeño detalle.
          </p>
        </div>

        <div className="product-card" style={{ padding: '1.8rem' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>☕</div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>
            Taller de Escritura & Café
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Compartimos espacios donde el valor de nuestro conocimiento se multiplica al compartirlo con amigos y tejido.
          </p>
        </div>

        <div className="product-card" style={{ padding: '1.8rem' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎬</div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>
            Series para ver mientras tejes
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Creamos contenido pensado para tejedores y amantes de las manualidades con tutoriales y recomendaciones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
