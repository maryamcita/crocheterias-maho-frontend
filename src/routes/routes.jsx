import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importación de Layouts
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';

// Importación de Pantallas
import Home from '../pages/Home';
import Catalogo from '../pages/Catalogo';
import CrearProducto from '../pages/CrearProducto';
import Login from '../pages/Login';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas principales con MainLayout (Navbar + Footer) */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="catalogo" element={<Catalogo />} />
          <Route path="crear-producto" element={<CrearProducto />} />
        </Route>

        {/* Rutas de autenticación con AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
