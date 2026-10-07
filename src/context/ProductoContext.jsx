import React, { createContext, useState } from 'react';

// 1. Crear el Contexto Global de Productos
export const ProductoContext = createContext();

// Catálogo real de productos inspirado en el Instagram oficial @_crocheteriasmaho
const productosIniciales = [
  {
    id: 1,
    nombre: 'Perrito Amigurumi Personalizado',
    categoria: 'Amigurumi',
    precio: 55000,
    imagenUrl: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=600&q=80',
    descripcion: 'Perrito tejido a mano personalizado con pañuelo tejido. Hecho con hilo de algodón hipoalergénico.'
  },
  {
    id: 2,
    nombre: 'Llavero Moño para Hidratante',
    categoria: 'Prendas',
    precio: 25000,
    imagenUrl: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80',
    descripcion: 'Llavero con moño tejido a crochet diseñado especialmente para guardar tu bálsamo o hidratante de labios.'
  },
  {
    id: 3,
    nombre: 'Flor para el Cabello Tejida',
    categoria: 'Prendas',
    precio: 18000,
    imagenUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
    descripcion: 'Hermoso accesorio de flor rosa tejido a mano para lucir en peinados casuales y elegantes.'
  },
  {
    id: 4,
    nombre: 'Carterita Mini Tejida de Colores',
    categoria: 'Prendas',
    precio: 38000,
    imagenUrl: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80',
    descripcion: 'Monedero / carterita con cierre metálico tejido en combinación de hilos matizados multicolor.'
  },
  {
    id: 5,
    nombre: 'Pulpo Reversible Amigurumi',
    categoria: 'Amigurumi',
    precio: 35000,
    imagenUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
    descripcion: 'Pulpo de emociones tejido a mano en hilo súper suave al tacto.'
  },
  {
    id: 6,
    nombre: 'Cojín Decorativo Boho Tejido',
    categoria: 'Hogar',
    precio: 68000,
    imagenUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80',
    descripcion: 'Funda de cojín artesanal tejida con textura y flecos para espacios acogedores.'
  }
];

// 2. Proveedor del Estado Global de Productos (Simulación Nivel 3 Temporal)
export const ProductoProvider = ({ children }) => {
  const [productos, setProductos] = useState(productosIniciales);

  // Agregar nuevo producto al estado global de Context API
  const agregarProducto = (nuevoProducto) => {
    const productoConId = {
      ...nuevoProducto,
      id: Date.now(),
      precio: Number(nuevoProducto.precio)
    };
    setProductos((prev) => [productoConId, ...prev]);
  };

  // Eliminar producto del estado global
  const eliminarProducto = (id) => {
    setProductos((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ProductoContext.Provider value={{ productos, agregarProducto, eliminarProducto }}>
      {children}
    </ProductoContext.Provider>
  );
};
