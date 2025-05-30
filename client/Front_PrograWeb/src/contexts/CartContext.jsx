import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([
  ]);

  const addItem = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateCartItemQuantity = (id, newQuantity) => {
  setCartItems(prev =>
    prev.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    )
  );
};

  const clearCart = () => setCartItems([]);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, updateCartItemQuantity, addItem, removeItem, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}
