import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductoContext } from '../context/ProductoContext';

const CrearProducto = () => {
  const { agregarProducto } = useContext(ProductoContext);
  const navigate = useNavigate();

  // Estado controlado del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    categoria: 'Amigurumi',
    precio: '',
    imagenUrl: '',
    descripcion: ''
  });

  const [mensaje, setMensaje] = useState('');

  // Manejador genérico para inputs controlados
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Manejador del envío de formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre.trim() || !formData.precio) {
      setMensaje('❌ Por favor completa los campos obligatorios.');
      return;
    }

    // Agregar producto al estado global de Context API (Simulación Nivel 3)
    agregarProducto(formData);

    setMensaje('✅ ¡Producto creado exitosamente! Redirigiendo al catálogo...');

    // Redirigir al catálogo para ver el nuevo producto agregado en el estado global
    setTimeout(() => {
      navigate('/catalogo');
    }, 1200);
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Crear Nuevo Producto</h1>
        <p className="page-subtitle">Formulario controlado con actualización en tiempo real en Context API</p>
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
            <label className="form-label" htmlFor="nombre">
              Nombre del Producto *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="form-input"
              placeholder="Ej. Pulpo Amigurumi Reversible"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="categoria">
              Categoría *
            </label>
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
            <label className="form-label" htmlFor="precio">
              Precio (COP) *
            </label>
            <input
              type="number"
              id="precio"
              name="precio"
              className="form-input"
              placeholder="Ej. 35000"
              value={formData.precio}
              onChange={handleChange}
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="imagenUrl">
              URL de la Imagen (Opcional)
            </label>
            <input
              type="url"
              id="imagenUrl"
              name="imagenUrl"
              className="form-input"
              placeholder="https://ejemplo.com/imagen.jpg"
              value={formData.imagenUrl}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="descripcion">
              Descripción del Producto
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              rows="3"
              className="form-textarea"
              placeholder="Describe los detalles de confección, lana o tamaño..."
              value={formData.descripcion}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            Guardar y Publicar Producto 🧶
          </button>
        </form>
      </div>
    </div>
  );
};

export default CrearProducto;
