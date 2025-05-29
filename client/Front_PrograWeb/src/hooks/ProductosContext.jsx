import { act, createContext, useContext, useState } from 'react';
import { productos as productosMock } from '../constants/Consts.jsx';

const ProductosContext = createContext();

export const useProductos = () => useContext(ProductosContext);

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([...productosMock]);

  const agregarProducto = (data) => {
    const lastId = productos.length > 0 ? productos[productos.length - 1].id : 0;
    const nuevoProducto = {
      ...data,
      id: lastId + 1,
      activo: true, // <-- ¡Siempre activo al agregar!
      quantity: 1   // <-- Asegura que quantity esté presente
    };
    setProductos(prev => [...prev, nuevoProducto]);
    alert('Producto agregado con éxito!');
  };

  const updateProduct = (id, updatedData) => {
    setProductos(prev =>
        prev.map(p => p.id === id ? { ...p, ...updatedData } : p)
    );
};

  return (
    <ProductosContext.Provider value={{ productos, agregarProducto, updateProduct }}>
      {children}
    </ProductosContext.Provider>
  );
};

