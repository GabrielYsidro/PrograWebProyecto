import React, { createContext, useContext, useState } from 'react';
import { getCategorias } from '../services/categoriaService';

const CategoriaContext = createContext();

export const useCategoriaContext = () => useContext(CategoriaContext);

export function CategoriaProvider({ children }) {

  const [categoriasItems, setCategoriasItems] = useState([]);

  React.useEffect(() => {
    async function fetchCategorias() {
      const data = await getCategorias();
      setCategoriasItems(data);
    }
    fetchCategorias();
  }, []);

  React.useEffect(() => {
    getCategorias().then((data) => {
      setCategoriasItems(data);
    });
  }, []);

  const addItem = (item) => {
    setCategoriasItems((prev) => [...prev, item]);
  };

  const removeItem = (id) => {
    setCategoriasItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCategoria = () => setCategoriasItems([]);

  return (
    <CategoriaContext.Provider value={{ categoriasItems, addItem, removeItem, clearCategoria }}>
      {children}
    </CategoriaContext.Provider>
  );
}