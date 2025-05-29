import React from "react";
import styles from "./LoginTable.module.css";

export function LoginTable({
  values,
  handleChange,
  handleLogin,
  onRegister,
  onForgotPassword,
  error,
  clearError,
}) {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <h2>Iniciar Sesión</h2>

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
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="button"
          className={styles.centerButton}
          onClick={handleLogin}
        >
          Iniciar Sesión
        </button>

        <div className={styles.actions}>
          <button className={styles.registerButton} onClick={onRegister}>
            Registrarse
          </button>
          <button className={styles.forgotButton} onClick={onForgotPassword}>
            Olvidé mi contraseña
          </button>
        </div>
      </div>

      {error && (
        <div className={styles.errorPopup}>
          <div className={styles.errorPopupContent}>
            <p>{error}</p>
            <button onClick={clearError}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginTable;