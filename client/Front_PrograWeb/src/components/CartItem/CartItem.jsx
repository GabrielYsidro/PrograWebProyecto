import { useState } from 'react';
import styles from '../../components/CartItem/CartItem.module.css';
import  {useCartContext} from '../../contexts/CartContext.jsx'

export const CartItem = ({ item }) => {
  const { updateCartItemQuantity, removeItem } = useCartContext();

  const handleChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      updateCartItemQuantity(item.id, newQuantity);
    }
  };

  const handleRemove = () => {
    removeItem(item.id);
  };

  const total = (item.quantity || 1)  * item.precio;

   return (
    <div className={styles.cartItem}>
      <div className={styles.header}>
        <strong>{item.nombre}</strong>
        <button onClick={handleRemove} className={styles.removeButton}>
          ❌
        </button>
      </div>

      <p>Precio: S/. {item.precio}</p>
      <img src={item.imagen} alt={item.nombre} />

      <label>
        Cantidad:
        <input
          type="number"
          min={1}
          value={item.quantity || 1}
          onChange={handleChange}
        />
      </label>

      <p>Total: S/. {total}</p>
    </div>
  );
}

export default CartItem;


