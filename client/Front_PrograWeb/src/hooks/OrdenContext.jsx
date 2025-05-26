import React, { createContext, useContext, useState } from 'react';
import { mockData } from '../constants/Consts.jsx';

const OrdenContext = createContext();

export const useOrdenContext = () => useContext(OrdenContext);

export function OrdenProvider({ children }) {
  const [ordenItems, setOrdenItems] = useState(mockData);

  const addItem = (item) => {
    setOrdenItems((prev) => [...prev, item]);
  };

  const removeItem = (id) => {
    setOrdenItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <OrdenContext.Provider value={{ ordenItems, addItem, removeItem}}>
      {children}
    </OrdenContext.Provider>
  );
}

export default OrdenProvider;