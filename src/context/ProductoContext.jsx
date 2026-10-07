import React, { createContext, useState } from 'react';

// 1. Crear el Contexto Global de Productos
export const ProductoContext = createContext();

// Productos iniciales del catálogo de Crocheterias Maho
const productosIniciales = [
  {
    id: 1,
    nombre: 'Pulpo Amigurumi Reversible',
    categoria: 'Amigurumi',
    precio: 35000,
    imagenUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
    descripcion: 'Tejido suave hecho a mano con hilo de algodón 100% hipoalergénico.'
  },
  {
    id: 2,
    nombre: 'Gorro Beanie Invierno',
    categoria: 'Prendas',
    precio: 45000,
    imagenUrl: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=600&q=80',
    descripcion: 'Gorro cálido y tejido con lana de oveja artesanal.'
  },
  {
    id: 3,
    nombre: 'Cojín Decorativo Boho',
    categoria: 'Hogar',
    precio: 65000,
    imagenUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80',
    descripcion: 'Cojín tejido en técnica crochet con motivos étnicos.'
  },
  {
    id: 4,
    nombre: 'Oso Amigurumi Clásico',
    categoria: 'Amigurumi',
    precio: 50000,
    imagenUrl: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=600&q=80',
    descripcion: 'Añade ternura a cualquier espacio con este oso tejido a mano.'
  }
];

// 2. Proveedor del Estado Global de Productos (Simulación Nivel 3 Temporal)
export const ProductoProvider = ({ children }) => {
  const [productos, setProductos] = useState(productosIniciales);

  // Función para agregar un nuevo producto desde el formulario
  const agregarProducto = (nuevoProducto) => {
    const productoConId = {
      ...nuevoProducto,
      id: Date.now(),
      precio: Number(nuevoProducto.precio)
    };
    setProductos((prev) => [productoConId, ...prev]);
  };

  // Función para eliminar un producto del catálogo
  const eliminarProducto = (id) => {
    setProductos((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ProductoContext.Provider value={{ productos, agregarProducto, eliminarProducto }}>
      {children}
    </ProductoContext.Provider>
  );
};
