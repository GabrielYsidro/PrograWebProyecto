import { createContext, useContext, useState } from 'react';
import { mockData } from '../constants/Consts.jsx';

const OrdenContext = createContext();

export const useOrdenContext = () => useContext(OrdenContext);

export function OrdenProvider({ children }) {
  const [ordenes, setOrdenes] = useState(mockData);

  const addItem = (item) => {
    setOrdenes((prev) => [...prev, item]);
  };

  const removeItem = (id) => {
    setOrdenes((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <OrdenContext.Provider value={{ ordenes, addItem, removeItem}}>
      {children}
    </OrdenContext.Provider>
  );
}