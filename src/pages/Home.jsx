import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="hero-banner">
        <h1 className="hero-title">
          Arte en Crochet hecho a <span>Mano</span>
        </h1>
        <p className="page-subtitle" style={{ maxWidth: '650px', margin: '0 auto 2rem' }}>
          Descubre nuestra colección exclusiva de Amigurumis, prendas de vestir y accesorios para el hogar tejidos con pasión y calidad artesanal.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/catalogo" className="btn btn-primary">
            Explorar Catálogo 🧶
          </Link>
          <Link to="/crear-producto" className="btn btn-secondary">
            + Nuevo Producto
          </Link>
        </div>
      </section>

      <div className="page-header">
        <h2 className="page-title">¿Por qué elegir Crocheterias Maho?</h2>
        <p className="page-subtitle">Cada tejido cuenta una historia única</p>
      </div>

      <div className="product-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        <div className="product-card" style={{ padding: '1.5rem', textIndent: '0' }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>🧸 100% Hipoalergénico</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Utilizamos hilos y lanas seleccionadas de la más alta calidad para cuidar la piel de tus seres queridos.</p>
        </div>
        <div className="product-card" style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>🎨 Personalización</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Tejemos diseños a la medida y en los colores que más te gusten con atención al detalle.</p>
        </div>
        <div className="product-card" style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>📦 Envíos Nacionales</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Llevamos nuestras hermosas creaciones artesanales a cualquier rincón del país.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
