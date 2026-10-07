import React from 'react';
import AppRoutes from './routes/routes';
import { ThemeProvider } from './context/ThemeContext';
import { ProductoProvider } from './context/ProductoContext';

function App() {
  return (
    <ThemeProvider>
      <ProductoProvider>
        <AppRoutes />
      </ProductoProvider>
    </ThemeProvider>
  );
}

export default App;
