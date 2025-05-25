import React from 'react';
import styles from '../../components/OrderSummary/OrderSummary.module.css';
import { Link } from 'react-router-dom';

export const OrderSummary = ({ items }) => {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = 15; // fijo
  const total = subtotal + deliveryFee;

  return (
    <div className={styles.orderSummary}>
      <h2>Resumen del pedido</h2>
      <ul className={styles.itemList}>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} - S/. {item.price * item.quantity}
          </li>
        ))}
      </ul>
      <div className={styles.totals}>
        <p>Subtotal: S/. {subtotal.toFixed(2)}</p>
        <p>Delivery: S/. {deliveryFee.toFixed(2)}</p>
        <p className={styles.total}>Total: S/. {total.toFixed(2)}</p>
      </div>
      <Link to="/greeting" className={styles.payButton}>
                    ¡Vamo' a Pagar!
        </Link>
    </div>
  );
}

export default OrderSummary;