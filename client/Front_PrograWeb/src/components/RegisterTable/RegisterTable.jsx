import React from "react";
import styles from "./RegisterTable.module.css";

function RegisterTable({ values, handleChange, handleSubmit, error }) {
  return (
    <form className={styles.registerForm} onSubmit={handleSubmit}>
      <h2>Registro</h2>
      <div className={styles.inputGroup}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
          aria-label="Nombre"
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
          aria-label="Correo electrónico"
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          required
          aria-label="Contraseña"
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="confirmPassword">Confirmar contraseña</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          required
          aria-label="Confirmar contraseña"
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="address">Dirección</label>
        <input
          type="text"
          id="address"
          name="address"
          value={values.address}
          onChange={handleChange}
          required
          aria-label="Dirección"
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="phone_number">Teléfono</label>
        <input
          type="tel"
          id="phone_number"
          name="phone_number"
          value={values.phone_number}
          onChange={handleChange}
          required
          aria-label="Teléfono"
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit" className={styles.submitButton}>
        Registrarse
      </button>
    </form>
  );
}

export default RegisterTable;