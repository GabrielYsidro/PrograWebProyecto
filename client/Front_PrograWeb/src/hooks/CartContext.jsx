import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([
    // Ejemplo:
    // { id: 1, name: 'Producto A', price: 100, quantity: 2 }
  ]);

  const addItem = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addItem, removeItem, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}
