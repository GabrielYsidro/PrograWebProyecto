import { useState } from 'react';
import styles from '../../components/CartItem/CartItem.module.css';

export const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const total = quantity * item.price;

  return (
    <div className={styles.cartItem}>
      <strong>{item.name}</strong>
      <p>Precio: S/. {item.price}</p>
      <label>
        Cantidad:
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={e => setQuantity(parseInt(e.target.value))}
        />
      </label>
      <p>Total: S/. {total}</p>
    </div>
  );
}

export default CartItem;


