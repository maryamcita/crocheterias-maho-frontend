import React, { useState, useContext } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ProductoContext } from '../context/ProductoContext';
import usePageTitle from '../hooks/usePageTitle';

// Formulario controlado para EDITAR un producto (la "U" del CRUD)
const EditarProducto = () => {
  usePageTitle('Editar Producto');

  const { id } = useParams();
  const navigate = useNavigate();
  const { productos, editarProducto } = useContext(ProductoContext);

  // Buscar el producto en el estado global por su id (viene en la URL)
  const producto = productos.find((p) => String(p.id) === id);

  // El formulario arranca con los datos actuales del producto
  const [formData, setFormData] = useState(
    producto
      ? {
          nombre: producto.nombre,
          categoria: producto.categoria,
          precio: producto.precio,
          imagenUrl: producto.imagenUrl || '',
          descripcion: producto.descripcion || ''
        }
      : null
  );
  const [mensaje, setMensaje] = useState('');

  if (!producto || !formData) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <h1 className="page-title">Producto no encontrado</h1>
        <Link to="/catalogo" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          ← Volver al catálogo
        </Link>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!String(formData.nombre).trim() || !formData.precio) {
      setMensaje('❌ Por favor completa los campos obligatorios.');
      return;
    }

    // Actualizar el producto en el estado global (Simulación Nivel 3)
    editarProducto(producto.id, formData);
    setMensaje('✅ ¡Producto actualizado! Redirigiendo al catálogo...');

    setTimeout(() => {
      navigate('/catalogo');
    }, 1200);
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Editar Producto</h1>
        <p className="page-subtitle">Modifica los datos y se actualizarán en el estado global (Context API)</p>
      </div>

      <div className="form-card">
        {mensaje && (
          <div
            style={{
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              marginBottom: '1.5rem',
              backgroundColor: mensaje.startsWith('✅') ? '#d1fae5' : '#fee2e2',
              color: mensaje.startsWith('✅') ? '#065f46' : '#991b1b',
              fontWeight: '600',
              textAlign: 'center'
            }}
          >
            {mensaje}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="nombre">Nombre del Producto *</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="form-input"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="categoria">Categoría *</label>
            <select
              id="categoria"
              name="categoria"
              className="form-select"
              value={formData.categoria}
              onChange={handleChange}
            >
              <option value="Amigurumi">Amigurumi</option>
              <option value="Prendas">Prendas</option>
              <option value="Hogar">Hogar</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="precio">Precio (COP) *</label>
            <input
              type="number"
              id="precio"
              name="precio"
              className="form-input"
              value={formData.precio}
              onChange={handleChange}
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="imagenUrl">URL de la Imagen (Opcional)</label>
            <input
              type="text"
              id="imagenUrl"
              name="imagenUrl"
              className="form-input"
              value={formData.imagenUrl}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="descripcion">Descripción del Producto</label>
            <textarea
              id="descripcion"
              name="descripcion"
              rows="3"
              className="form-textarea"
              value={formData.descripcion}
              onChange={handleChange}
            ></textarea>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <Link to="/catalogo" className="btn btn-secondary" style={{ flex: 1, textAlign: 'center' }}>
              Cancelar
            </Link>
            <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
              Guardar Cambios ✏️
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditarProducto;
