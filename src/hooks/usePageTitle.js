import { useEffect } from 'react';

// Hook personalizado: cambia el nombre de la página (título de la pestaña del navegador)
// Uso: usePageTitle('Catálogo')  →  "Catálogo | Crocheterias Maho"
const usePageTitle = (titulo) => {
  useEffect(() => {
    document.title = `${titulo} | Crocheterias Maho`;
  }, [titulo]);
};

export default usePageTitle;
