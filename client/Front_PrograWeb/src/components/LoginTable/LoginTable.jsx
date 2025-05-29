import React from "react";
import styles from "./LoginTable.module.css";

export function LoginTable({
  values,
  handleChange,
  handleLogin,
  onRegister,
  onForgotPassword,
  error,
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

        {error && <p className={styles.error}>{error}</p>}

        <button
          type="button"
          className={styles.centerButton}
          onClick={handleLogin}
        >
          Iniciar<br />sesión
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
    </div>
  );
}

export default LoginTable;
