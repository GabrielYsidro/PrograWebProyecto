import React, { createContext, useContext, useState } from 'react';
import { categorias } from '../constants/Consts.jsx'; // Asegúrate de tener esto

const CategoriaContext = createContext();

export const useCategoriaContext = () => useContext(CategoriaContext);

export function CategoriaProvider({ children }) {
  const [categoriasItems, setCategoriasItems] = useState(categorias); // Usa tus categorías iniciales

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