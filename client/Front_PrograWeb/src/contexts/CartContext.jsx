import React, { createContext, useContext, useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

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

//Obtener carrito de la sesion
useEffect(() => {
  fetch(`${API_URL}/cart`, {
    credentials: 'include',
  })
    .then(res => res.json())
    .then(data => {
      if (data.cart) {
        setCartItems(data.cart);
      }
      setIsFetched(true);
    });
}, []);

//Guardar Carrito al cambiar
useEffect(() => {
  if (isFetched) {
    fetch(`${API_URL}/cart/sync`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cart: cartItems }),
    });
  }
}, [cartItems, isFetched]);

  const clearCart = () => setCartItems([]);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, updateCartItemQuantity, addItem, removeItem, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}
