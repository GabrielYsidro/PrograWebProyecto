import React from "react";
import styles from "./ChangeTable.module.css";

export function ChangeTable({ values, handleChange, handleSubmit, error, onBack }) {
  return (
    <div className={styles.changeContainer}>
      <div className={styles.changeForm}>
        <h2>Recuperar Contraseña</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="newPassword">Nueva contraseña</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={values.newPassword}
              onChange={handleChange}
              required
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
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.submitButton}>
            Cambiar contraseña
          </button>
          <button
            type="button"
            className={styles.submitButton}
            onClick={onBack}
            style={{ marginTop: "0.5rem" }}
          >
            Regresar al login
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangeTable;
