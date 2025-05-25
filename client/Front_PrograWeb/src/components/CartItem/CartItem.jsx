import { useState } from 'react';
import styles from '../../components/CartItem/CartItem.module.css';

export const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const total = quantity * item.precio;

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
          value={quantity}
          onChange={e => setQuantity(parseInt(e.target.value))}
        />
      </label>
      <p>Total: S/. {total}</p>
    </div>
  );
}

export default CartItem;


