import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

const Login = () => {
  usePageTitle('Iniciar Sesión');

  const navigate = useNavigate();

  // Estado controlado del formulario de Login
  const [credentials, setCredentials] = useState({
    correo: '',
    password: ''
  });

  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!credentials.correo || !credentials.password) {
      setFeedback('❌ Por favor ingresa tu correo y contraseña.');
      return;
    }

    setFeedback('✅ ¡Inicio de sesión exitoso! Ingresando...');

    setTimeout(() => {
      navigate('/catalogo');
    }, 1000);
  };

  return (
    <div className="auth-card">
      <h2 className="card-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
        Iniciar Sesión
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
        Accede al panel de administración de Crocheterias Maho
      </p>

      {feedback && (
        <div
          style={{
            padding: '0.75rem',
            borderRadius: '8px',
            marginBottom: '1.25rem',
            backgroundColor: feedback.startsWith('✅') ? '#d1fae5' : '#fee2e2',
            color: feedback.startsWith('✅') ? '#065f46' : '#991b1b',
            fontSize: '0.9rem',
            fontWeight: '600'
          }}
        >
          {feedback}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ textAlign: 'left' }}>
          <label className="form-label" htmlFor="correo">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            className="form-input"
            placeholder="ejemplo@cesde.edu.co"
            value={credentials.correo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group" style={{ textAlign: 'left' }}>
          <label className="form-label" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            placeholder="••••••••"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
          Ingresar
        </button>
      </form>

      <div style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
        <Link to="/" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: '600' }}>
          ← Volver a la página principal
        </Link>
      </div>
    </div>
  );
};

export default Login;
