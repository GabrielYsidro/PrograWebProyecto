import React from 'react';
import styles from '../../components/PaymentSection/PaymentSection.module.css';
import { usePaymentForm } from '../../hooks/usePaymentForm.jsx';
import FormularioTarjeta from '../../components/FormularioTarjeta/FormularioTarjeta.jsx';
import {useState} from 'react'
export const PaymentSection = () => {
  const {
    paymentMethod,
    setPaymentMethod,
    shippingOption,
    setShippingOption,
    address,
    setAddress,
    isValid
  } = usePaymentForm();

  const [formData, setFormData] = useState({
    nombre: '',
    numero: '',
    expiracion: '',
    cvc: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={styles.paymentSection}>
      <h2>Método de pago</h2>
      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${paymentMethod === 'card' ? styles.active : ''}`}
          onClick={() => setPaymentMethod('card')}
        >
          Tarjeta
        </button>
        <button
          className={`${styles.tabButton} ${paymentMethod === 'qr' ? styles.active : ''}`}
          onClick={() => setPaymentMethod('qr')}
        >
          QR
        </button>
      </div>

      {paymentMethod === 'card' ? (
        <div className={styles.formGroup}>
          <FormularioTarjeta formData={formData} onChange={handleInputChange}/>
        </div>
      ) : (
        <div className={styles.formGroup}>
          <p>Escanea este código QR para pagar</p>
          <img className={styles.yape} src='/src/assets/QR.png'></img>
        </div>
      )}

      <h2>Método de envío</h2>
      <div className={styles.shippingOptions}>
        <label>
          <input
            type="radio"
            name="shipping"
            value="pickup"
            checked={shippingOption === 'pickup'}
            onChange={() => setShippingOption('pickup')}
          />
          Recojo en tienda
        </label>
        <label>
          <input
            type="radio"
            name="shipping"
            value="delivery"
            checked={shippingOption === 'delivery'}
            onChange={() => setShippingOption('delivery')}
          />
          Delivery a domicilio
        </label>
      </div>

      {shippingOption === 'delivery' && (
        <input
          type="text"
          placeholder="Dirección"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className={styles.addressInput}
        />
      )}
    </div>
  );
} 

export default PaymentSection;