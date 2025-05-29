import { createContext, useContext, useState } from 'react';
import { productos as productosMock } from '../constants/Consts.jsx';

const ProductosContext = createContext();


export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([...productosMock]);

  const agregarProducto = (data) => {
    const lastId = productos.length > 0 ? productos[productos.length - 1].id : 0;
    const nuevoProducto = { ...data, id: lastId + 1 };
    setProductos(prev => [...prev, nuevoProducto]);
    alert('Producto agregado con éxito!');
  };

  return (
    <ProductosContext.Provider value={{ productos, agregarProducto }}>
      {children}
    </ProductosContext.Provider>
  );
};

export const useProductos = () => useContext(ProductosContext);
