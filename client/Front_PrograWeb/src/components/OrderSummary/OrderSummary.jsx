import React from 'react';
import styles from '../../components/OrderSummary/OrderSummary.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { usePaymentForm } from '../../hooks/usePaymentForm.jsx';
import { useUserContext } from '../../contexts/userContext.jsx';
import {postOrden} from '../../services/cartService.js'
import { useCartContext } from '../../contexts/CartContext.jsx';
import { useOrdenContext } from '../../hooks/OrdenContext.jsx';

export const OrderSummary = ({ items }) => {

  const {shippingOption, paymentMethod, address} = usePaymentForm();
  const {clearCart} = useCartContext();
  const {currentUser} = useUserContext();
  const { getOrdersData } = useOrdenContext();
  const navigate = useNavigate();
  const userId = currentUser.id

  const subtotal = items.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  const deliveryFee = shippingOption === 'delivery' ? 15 : 0;
  const total = subtotal + deliveryFee;

  const handleConfirm = async () => {
    // Validaciones mínimas
    if (!userId || !paymentMethod || items.length === 0) {
      alert('Por favor completa todos los datos del pago.');
      return;
    }

    if (shippingOption === 'delivery' && (!address || address.trim() === '')) {
      alert('Por favor ingresa una dirección válida para el envío.');
      return;
    }

    try {
      await postOrden({
        userId,
        totalAmount: total,
        status: 'pendiente',
        shipping: shippingOption === 'delivery' ? address : 'Local',
        payment: paymentMethod,
        items
      });
      await getOrdersData(); // <-- recarga las órdenes globales
      clearCart();
      navigate('/greeting');
    } catch (err) {
      console.error('Error al enviar la orden:', err);
      alert('Ocurrió un error al procesar tu orden.');
    }
  };

   return (
    <div className={styles.orderSummary}>
      <h2>Resumen del pedido</h2>
      <ul className={styles.itemList}>
        {items.map((item) => (
          <li key={item.id}>
            {item.nombre} x {item.quantity} - S/. {item.precio * item.quantity}
          </li>
        ))}
      </ul>
      <div className={styles.totals}>
        <p>Subtotal: S/. {subtotal.toFixed(2)}</p>
        <p>Delivery: S/. {deliveryFee.toFixed(2)}</p>
        <p className={styles.total}>Total: S/. {total.toFixed(2)}</p>
      </div>
      <button onClick={handleConfirm} className={styles.payButton}>
        Confirmar Compra
      </button>
    </div>
  );
}

export default OrderSummary;