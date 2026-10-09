import React, { createContext, useState } from 'react';

// 1. Crear el Contexto Global de Productos
export const ProductoContext = createContext();

// Catálogo de productos extraído directamente de las publicaciones reales de @_crocheteriasmaho
const productosIniciales = [
  {
    id: 1,
    nombre: 'Perrito Amigurumi Personalizado',
    categoria: 'Amigurumi',
    precio: 55000,
    imagenUrl: '/images/perrito-randy.jpg',
    descripcion: 'Perrito tejidito a mano personalizado con pañuelo turquesa. Hecho con hilo de algodón 100% hipoalergénico.'
  },
  {
    id: 2,
    nombre: 'Llavero Moño para Hidratante de Labios',
    categoria: 'Prendas',
    precio: 25000,
    imagenUrl: '/images/llavero-mono.jpg',
    descripcion: 'Llavero con moño tejido diseñado para guardar y llevar siempre contigo tu bálsamo o hidratante de labios.'
  },
  {
    id: 3,
    nombre: 'Flor para el Cabello Tejida',
    categoria: 'Prendas',
    precio: 18000,
    imagenUrl: '/images/flor-cabello.jpg',
    descripcion: 'Hermosa flor rosa tejida a mano para lucir como accesorio único en tu cabello.'
  },
  {
    id: 4,
    nombre: 'Carterita Mini Tejida de Colores',
    categoria: 'Prendas',
    precio: 38000,
    imagenUrl: '/images/carterita-mini.jpg',
    descripcion: 'Carterita / monedero tejido con zíper en combinación de hermosos hilos matizados de colores.'
  },
  {
    id: 5,
    nombre: 'Perrito Pinscher Amigurumi',
    categoria: 'Amigurumi',
    precio: 52000,
    imagenUrl: '/images/perrito-pinscher.jpg',
    descripcion: 'Amigurumi de perrito tipo pinscher tejido con saquito rojo y azul a medida.'
  },
  {
    id: 6,
    nombre: 'Pulpo Reversible Pastel',
    categoria: 'Amigurumi',
    precio: 35000,
    imagenUrl: '/images/pulpo-reversible.jpg',
    descripcion: 'Pulpo tejido con hilos en tonos pastel súper suaves al tacto.'
  },
  {
    id: 7,
    nombre: 'Charm Tejido de Corazón para Celular',
    categoria: 'Prendas',
    precio: 15000,
    imagenUrl: '/images/charm-corazon.jpg',
    descripcion: 'Lindo colgante tejido en forma de corazón para decorar tu funda de celular.'
  },
  {
    id: 8,
    nombre: 'Llavero Cabeza de Llamita',
    categoria: 'Amigurumi',
    precio: 22000,
    imagenUrl: '/images/llavero-llama.jpg',
    descripcion: 'Tierna llamita tejida en hilo beige ideal para tus llaves o maleta.'
  },
  {
    id: 9,
    nombre: 'Bolso Lila & Morado Tejido',
    categoria: 'Prendas',
    precio: 75000,
    imagenUrl: '/images/bolso-lila.jpg',
    descripcion: 'Bolso estilo tote bag tejido a crochet con volante en hermosos tonos lila y lavanda.'
  },
  {
    id: 10,
    nombre: 'Elefante Amigurumi',
    categoria: 'Amigurumi',
    precio: 48000,
    imagenUrl: '/images/elefante-amigurumi.jpg',
    descripcion: 'Elefantito tejido en hilo gris, el compañero perfecto para tejer o regalar.'
  },
  {
    id: 11,
    nombre: 'Prendedor Mazorca Tejida',
    categoria: 'Prendas',
    precio: 16000,
    imagenUrl: '/images/mazorca-tejida.jpg',
    descripcion: 'Accesorio / prendedor original con forma de maíz / mazorca tejida en hilo verde y amarillo.'
  },
  {
    id: 12,
    nombre: 'Aretes Tejidos de Flores & Cuadritos',
    categoria: 'Prendas',
    precio: 20000,
    imagenUrl: '/images/aretes-tejidos.jpg',
    descripcion: 'Aretes artesanales livianos tejidos en combinaciones alegres de color.'
  }
];

// 2. Proveedor del Estado Global de Productos (Simulación Nivel 3 Temporal)
export const ProductoProvider = ({ children }) => {
  const [productos, setProductos] = useState(productosIniciales);

  const agregarProducto = (nuevoProducto) => {
    const productoConId = {
      ...nuevoProducto,
      id: Date.now(),
      precio: Number(nuevoProducto.precio)
    };
    setProductos((prev) => [productoConId, ...prev]);
  };

  const editarProducto = (id, datosActualizados) => {
    setProductos((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, ...datosActualizados, id, precio: Number(datosActualizados.precio) }
          : p
      )
    );
  };

  const eliminarProducto = (id) => {
    setProductos((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ProductoContext.Provider value={{ productos, agregarProducto, editarProducto, eliminarProducto }}>
      {children}
    </ProductoContext.Provider>
  );
};
