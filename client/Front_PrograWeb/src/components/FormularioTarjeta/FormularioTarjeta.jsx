import React from 'react';
import styles from './FormularioTarjeta.module.css';

function FormularioTarjeta({ formData, onChange }) {
  return (
    <div className={styles.formulario}>
      <label>
        Nombre en la tarjeta
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={onChange}
          required
        />
      </label>

      <label>
        Número de tarjeta
        <input
          type="text"
          name="numero"
          value={formData.numero}
          onChange={onChange}
          maxLength="16"
          required
        />
      </label>

      <div className={styles.fila}>
        <label>
          Expiración
          <input
            type="text"
            name="expiracion"
            placeholder="MM/AA"
            value={formData.expiracion}
            onChange={onChange}
            required
          />
        </label>

        <label>
          CVC
          <input
            type="text"
            name="cvc"
            value={formData.cvc}
            maxLength="4"
            onChange={onChange}
            required
          />
        </label>
      </div>
    </div>
  );
}

export default FormularioTarjeta;
