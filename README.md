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
   Rutas configuradas en `routes.jsx` entre Inicio (`/`), Catálogo (`/catalogo`), Crear Producto (`/crear-producto`) y Login (`/login`) sin recarga de página.
2. **Formularios Controlados**:
   Formularios en `CrearProducto.jsx` y `Login.jsx` con binding bidireccional en el estado local de React (`useState`).
3. **Estado Global con Context API**:
   - `ProductoContext`: Permite crear nuevos productos desde el formulario y reflejarlos inmediatamente en la vista del catálogo (Simulación Nivel 3).
   - `ThemeContext`: Conmutador de Tema Claro / Tema Oscuro persistente en `localStorage`.
4. **Layouts de Arquitectura**:
   - `MainLayout`: Estructura principal con `Navbar` y `Footer`.
   - `AuthLayout`: Estructura limpia para pantallas de acceso.
