import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCategorias, postCategoria, deleteCategoria } from '../services/categoriaService';

const CategoriaContext = createContext();

export const useCategoriaContext = () => useContext(CategoriaContext);

export function CategoriaProvider({ children }) {
  const [categoriasItems, setCategoriasItems] = useState([]);

  const fetchCategorias = async () => {
    try {
      const data = await getCategorias();
      setCategoriasItems(Array.isArray(data.categorias) ? data.categorias : []);
    } catch (err) {
      setCategoriasItems([]);
    }
  };

  useEffect(() => {
    fetchCategorias();
  }, []);

  const addItem = async (item) => {
    try {
      await postCategoria(item);
      await fetchCategorias();
    } catch (error) {
      console.error('Error al añadir categoria:', error);
    }
  };

  const removeItem = async (id) => {
    try {
      await deleteCategoria(id);
      await fetchCategorias(); // <-- recarga la lista desde el backend
    } catch (error) {
      console.error('Error al eliminar categoria:', error);
    }
  };

  return (
    <CategoriaContext.Provider value={{
      categoriasItems,
      addItem,
      removeItem,
    }}>
      {children}
    </CategoriaContext.Provider>
  );
}