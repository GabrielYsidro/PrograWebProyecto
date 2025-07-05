import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCategorias, postCategoria, deleteCategoria } from '../services/categoriaService';

const CategoriaContext = createContext();

export const useCategoriaContext = () => useContext(CategoriaContext);

export function CategoriaProvider({ children }) {
  const [categoriasItems, setCategoriasItems] = useState([]);

  useEffect(() => {
    async function fetchCategorias() {
      try {
        const data = await getCategorias();
        //Chekeo para ver que el objeto data tenga la propiedad categorias y sea un array
        setCategoriasItems(Array.isArray(data.categorias) ? data.categorias : []);
      } catch (err) {
        setCategoriasItems([]);
      }
    }
    fetchCategorias();
  }, []);

  const addItem = (item) => {
    postCategoria(item)
      .then((response) => {
        setCategoriasItems((prev) => [...prev, response]);
        console.log('Categoria añadida:', response);
      })
      .catch((error) => {
        console.error('Error al añadir categoria:', error);
      });
  };

  const removeItem = (id) => {
    deleteCategoria(id)
      .then((response) => {
        // Usa el id retornado por el backend si está disponible, de lo contrario usa el id original
        const deletedId = response?.id || id;
        setCategoriasItems((prev) => prev.filter((item) => item.id !== deletedId));
        console.log('Categoria eliminada:', response);
      })
      .catch((error) => {
        console.error('Error al eliminar categoria:', error);
      });
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