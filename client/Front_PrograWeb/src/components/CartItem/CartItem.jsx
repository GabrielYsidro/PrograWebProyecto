import { useState } from 'react';
import styles from '../../components/CartItem/CartItem.module.css';
import  {useCartContext} from '../../contexts/CartContext.jsx'

export const CartItem = ({ item }) => {
  const { updateCartItemQuantity } = useCartContext();

  const handleChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      updateCartItemQuantity(item.id, newQuantity);
    }
  };

  const total = item.quantity * item.precio;

  return (
    <div className={styles.cartItem}>
      <strong>{item.nombre}</strong>
      <p>Precio: S/. {item.precio}</p>
      <img src={item.imagen}></img>
      <label>
        Cantidad:
        <input
          type="number"
          min={1}
          value={item.quantity}
          onChange={handleChange}
        />
      </label>
      <p>Total: S/. {total}</p>
    </div>
  );
}

export default CartItem;


