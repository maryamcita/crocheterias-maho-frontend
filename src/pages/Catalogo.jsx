import React, { useContext, useState } from 'react';
import { ProductoContext } from '../context/ProductoContext';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

const Catalogo = () => {
  usePageTitle('Catálogo');

  const { productos, eliminarProducto } = useContext(ProductoContext);
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todos');

  const categorias = ['Todos', 'Amigurumi', 'Prendas', 'Hogar'];

  const productosFiltrados = categoriaFiltro === 'Todos'
    ? productos
    : productos.filter((p) => p.categoria.toLowerCase() === categoriaFiltro.toLowerCase());

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Catálogo de Productos</h1>
        <p className="page-subtitle">Explora nuestras piezas artesanales disponibles (Estado Global CRUD)</p>
      </div>

      {/* Filtros por Categoría */}
      <div className="filter-container">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`filter-pill ${categoriaFiltro === cat ? 'active' : ''}`}
            onClick={() => setCategoriaFiltro(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de Productos */}
      {productosFiltrados.length === 0 ? (
        <div style={{ padding: '3rem', textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>No hay productos registrados en esta categoría.</p>
          <Link to="/crear-producto" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            + Crear Primer Producto
          </Link>
        </div>
      ) : (
        <div className="product-grid">
          {productosFiltrados.map((prod) => (
            <article key={prod.id} className="product-card">
              <div className="card-img-container">
                <img
                  src={prod.imagenUrl || 'https://unsplash.com'}
                  alt={prod.nombre}
                  className="card-img"
                  onError={(e) => {
                    e.target.src = 'https://unsplash.com';
                  }}
                />
              </div>
              <div className="card-body">
                <span className="card-badge">{prod.categoria}</span>
                <h3 className="card-title">{prod.nombre}</h3>
                <p className="card-desc">{prod.descripcion || 'Sin descripción disponible.'}</p>
                <div className="card-footer">
                  <span className="card-price">\${Number(prod.precio).toLocaleString('es-CO')} COP</span>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <Link
                    to={`/editar-producto/${prod.id}`}
                    className="btn btn-secondary"
                    title="Editar producto del estado global"
                  >
                    ✏️ Editar
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => eliminarProducto(prod.id)}
                    title="Eliminar producto del estado global"
                  >
                    🗑️ Eliminar
                  </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalogo;
