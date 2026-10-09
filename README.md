# 🧶 Crocheterias Maho — Frontend React SPA (Momento 2 / Web 2)

**Asignatura:** Desarrollo Web 2 — CESDE  
**Proyecto:** Single Page Application (SPA) en React con Vite, React Router DOM y Context API  

---

## 📌 Descripción del Proyecto

Aplicación Web SPA para **Crocheterias Maho** que permite la navegación fluida entre vistas sin recarga de página, la gestión global de estado CRUD para productos simulando la conexión al backend (Nivel 3), soporte para **Tema Claro / Tema Oscuro** mediante `Context API`, y formularios controlados.

---

## 👥 Reparto de Componentes del Proyecto (Un componente por integrante)

| Integrante | Rol / Asignación | Componentes / Archivos a Cargo |
|---|---|---|
| **Integrante 1 (Líder)** | Layout Principal y Enrutamiento | `MainLayout.jsx`, `routes.jsx` y `Favicon` |
| **Integrante 2** | Proveedores de Contexto Global | `ThemeContext.jsx` y `ProductoContext.jsx` |
| **Integrante 3** | Formulario Controlado de Productos | `CrearProducto.jsx` y `Catalogo.jsx` |
| **Integrante 4** | Autenticación y Componentes Globales | `Navbar.jsx`, `Footer.jsx`, `AuthLayout.jsx` y `Login.jsx` |

---

## 🚀 Guía de Instalación y Ejecución

Sigue estos pasos en tu terminal para ejecutar el proyecto en modo desarrollo:

### 1. Clonar el repositorio y entrar a la carpeta
```bash
git clone https://github.com/maryamcita/crocheterias-maho-frontend.git
cd crocheterias-maho-frontend
```

### 2. Instalar las dependencias del proyecto
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abre tu navegador en la URL indicada (usualmente `http://localhost:5173`).

---

## 🛠️ Estructura del Proyecto

```text
crocheterias-maho-frontend/
│
├── public/
│   └── favicon.svg               # Favicon personalizado con ovillo de lana
│
├── src/
│   ├── components/               # Componentes Reutilizables
│   │   ├── Navbar.jsx            # Navegación y selector de Tema Claro/Oscuro
│   │   └── Footer.jsx            # Pie de página del sitio
│   │
│   ├── hooks/                    # Hooks personalizados
│   │   └── usePageTitle.js       # Cambia el nombre de la página en cada componente
│   │
│   ├── context/                  # Estado Global (Context API)
│   │   ├── ThemeContext.jsx      # Proveedor de Tema (Claro / Oscuro)
│   │   └── ProductoContext.jsx   # Proveedor de Estado CRUD de Productos (Nivel 3)
│   │
│   ├── layouts/                  # Plantillas de Diseño
│   │   ├── MainLayout.jsx        # Plantilla principal (Navbar + Outlet + Footer)
│   │   └── AuthLayout.jsx        # Plantilla para inicio de sesión
│   │
│   ├── pages/                    # Pantallas de la SPA
│   │   ├── Home.jsx              # Pantalla de bienvenida
│   │   ├── Catalogo.jsx          # Listado y filtrado de productos
│   │   ├── CrearProducto.jsx     # Formulario controlado de registro
│   │   ├── EditarProducto.jsx    # Formulario controlado de edición (Update del CRUD)
│   │   ├── NotFound.jsx          # Página 404 para rutas inexistentes
│   │   └── Login.jsx             # Formulario controlado de autenticación
│   │
│   ├── routes/                   # Enrutamiento de la aplicación
│   │   └── routes.jsx            # Configuración de rutas con React Router DOM
│   │
│   ├── index.css                 # Estilos globales y variables de color de tema
│   ├── App.jsx                   # Envoltorio principal de Proveedores
│   └── main.jsx                  # Punto de entrada de React
│
├── index.html                    # Documento HTML base
├── package.json                  # Dependencias y scripts
└── vite.config.js                # Configuración de Vite
```

---

## ⭐ Funcionalidades Clave Implementadas

1. **Navegación SPA (`react-router-dom`)**:
   Rutas configuradas en `routes.jsx` entre Inicio (`/`), Catálogo (`/catalogo`), Crear Producto (`/crear-producto`), Editar Producto (`/editar-producto/:id`), Login (`/login`) y página 404 (`*`) sin recarga de página.
2. **Formularios Controlados**:
   Formularios en `CrearProducto.jsx`, `EditarProducto.jsx` y `Login.jsx` con binding bidireccional en el estado local de React (`useState`).
3. **Estado Global con Context API**:
   - `ProductoContext`: CRUD completo simulado — **crear** (`agregarProducto`), **listar** (`productos`), **editar** (`editarProducto`) y **eliminar** (`eliminarProducto`). Los cambios se reflejan inmediatamente en el catálogo (Simulación Nivel 3).
   - `ThemeContext`: Conmutador de Tema Claro / Tema Oscuro persistente en `localStorage`.
4. **Layouts de Arquitectura**:
   - `MainLayout`: Estructura principal con `Navbar` y `Footer`.
   - `AuthLayout`: Estructura limpia para pantallas de acceso.
5. **Nombre de la página en cada componente**:
   Cada pantalla usa el hook `usePageTitle` para mostrar su nombre en la pestaña del navegador (ej. *Catálogo | Crocheterias Maho*).

---

## 🗺️ Listado Total de Componentes del Proyecto (proyectado)

| Componente | Tipo | Descripción | Estado |
|---|---|---|---|
| `MainLayout` | Layout | Navbar + contenido + Footer | ✅ Hecho |
| `AuthLayout` | Layout | Plantilla para Login / Registro | ✅ Hecho |
| `Navbar` | Componente | Navegación y botón de tema | ✅ Hecho |
| `Footer` | Componente | Pie de página | ✅ Hecho |
| `ThemeContext` | Context | Tema claro / oscuro | ✅ Hecho |
| `ProductoContext` | Context | Estado global del CRUD de productos | ✅ Hecho |
| `Home` | Página | Pantalla de bienvenida | ✅ Hecho |
| `Catalogo` | Página | Listado y filtro de productos | ✅ Hecho |
| `CrearProducto` | Página | Formulario de creación | ✅ Hecho |
| `EditarProducto` | Página | Formulario de edición | ✅ Hecho |
| `Login` | Página | Inicio de sesión | ✅ Hecho |
| `NotFound` | Página | Error 404 | ✅ Hecho |
| `ProductCard` | Componente | Tarjeta reutilizable de producto | 🔜 Proyectado |
| `DetalleProducto` | Página | Vista con toda la información de un producto | 🔜 Proyectado |
| `Registro` | Página | Formulario de registro de usuarios | 🔜 Proyectado |
| `AuthContext` | Context | Usuario autenticado y cierre de sesión | 🔜 Proyectado |
| `Carrito` | Página | Productos seleccionados para comprar | 🔜 Proyectado |
| `CarritoContext` | Context | Estado global del carrito | 🔜 Proyectado |
| `RutaProtegida` | Componente | Restringe Crear/Editar a usuarios autenticados | 🔜 Proyectado |
| `Contacto` | Página | Formulario de contacto / pedidos personalizados | 🔜 Proyectado |
