import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-brand">
          <img src="/favicon.svg" alt="Crocheterias Maho Logo" width="38" height="38" />
          <div>
            <div className="nav-brand-title">Crocheterias Maho</div>
            <div className="nav-brand-subtitle">By: Maryam</div>
          </div>
        </NavLink>

        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalogo" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Catálogo
            </NavLink>
          </li>
          <li>
            <NavLink to="/crear-producto" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              + Crear Producto
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Iniciar Sesión
            </NavLink>
          </li>
          <li>
            <button className="btn-theme" onClick={toggleTheme} title="Cambiar Tema Claro / Oscuro">
              {theme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
