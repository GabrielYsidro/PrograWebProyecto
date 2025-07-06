import { createContext, useContext, useState } from 'react';
import { mockData } from '../constants/Consts.jsx';
import { getOrders } from '../services/orderService.js';

const OrdenContext = createContext();

export const useOrdenContext = () => useContext(OrdenContext);

export function OrdenProvider({ children }) {
  const [ordenItems, setOrdenes] = useState([]);

  const getOrdersData = async () => {
      try {
        const OrderArray = await getOrders();
        setProductos(OrderArray);
      } catch (err) {
        console.error('Error al obtener productos:', err);
        setProductos([]);
      } 
  };
  
    useEffect(() => {
      getOrdersData();
    }, []);

  const addItem = (item) => {
    setOrdenes((prev) => [...prev, item]);
  };

  const removeItem = (id) => {
    setOrdenes((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <OrdenContext.Provider value={{ ordenItems, addItem, removeItem}}>
      {children}
    </OrdenContext.Provider>
  );
}
