import { createContext, useContext, useState , useEffect} from 'react';
import { getOrders, cancelOrder, getUserOrders } from '../services/orderService.js';

const OrdenContext = createContext();

export const useOrdenContext = () => useContext(OrdenContext);

export function OrdenProvider({ children }) {
  const [ordenItems, setOrdenes] = useState([]);

  const getOrdersData = async () => {
      try {
        const OrderArray = await getOrders();
        setOrdenes(OrderArray);
      } catch (err) {
        console.error('Error al obtener productos:', err);
        setOrdenes([]);
      } 
  };

  const getOrdersByUserId = async (userId) => {
    try {
      const userOrders = await getUserOrders(userId);
      return userOrders;
    } catch (err) {
      console.error('Error al obtener órdenes del usuario:', err);
      return [];
    }
  };
  
  useEffect(() => {
    getOrdersData();
  }, []);

  const addItem = (item) => {
    setOrdenes((prev) => [...prev, item]);
  };

  const removeItem = async (id) => {
    try {
      const res = await cancelOrder(id);
      if (!res) {
        console.error('Error al cancelar la orden');
        return;
      }
      setOrdenes((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status: 'cancelado' } : item
        )
      );
    } catch (err) {
      console.error('Error al cancelar la orden:', err);
    }
  };

  return (
    <OrdenContext.Provider value={{
      ordenes: ordenItems,
      addItem,
      removeItem,
      getOrdersByUserId,
      getOrdersData
    }}>
      {children}
    </OrdenContext.Provider>
  );
}
