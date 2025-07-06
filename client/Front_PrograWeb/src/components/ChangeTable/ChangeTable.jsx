import React, { useState } from "react";
import { useUserContext } from "../../contexts/userContext";
import { recoverPassword } from "../../services/userService";
import styles from "./ChangeTable.module.css";

export function ChangeTable({ mode = "change", onBack }) {
  const { currentUser, changePassword } = useUserContext();
  const [values, setValues] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setMensaje("");

    // Validaciones básicas
    if (!values.newPassword || values.newPassword.length < 4) {
      setError("La nueva contraseña debe tener al menos 4 caracteres.");
      return;
    }

    if (values.newPassword !== values.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    // Modo cambio de contraseña (usuario autenticado)
    if (mode === "change") {
      if (!currentUser) {
        setError("No hay usuario autenticado.");
        return;
      }

      if (values.currentPassword !== currentUser.password) {
        setError("La contraseña actual es incorrecta.");
        return;
      }

      try {
        await changePassword(currentUser.id, values.newPassword);
        setMensaje("¡Contraseña cambiada exitosamente!");
        setValues({
          email: "",
          currentPassword: "",
          newPassword: "",
          confirmPassword: ""
        });
      } catch (err) {
        console.error("Error al cambiar la contraseña:", err);
        setError("Error al cambiar la contraseña. Inténtalo de nuevo.");
      }
    }
    // Modo recuperación de contraseña (usuario no autenticado)
    else if (mode === "recovery") {
      if (!values.email) {
        setError("Debe ingresar un correo electrónico.");
        return;
      }

      try {
        await recoverPassword(values.email, values.newPassword);
        setMensaje("¡Contraseña recuperada exitosamente! Ya puedes iniciar sesión con tu nueva contraseña.");
        setValues({
          email: "",
          currentPassword: "",
          newPassword: "",
          confirmPassword: ""
        });
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } catch (err) {
        console.error("Error al recuperar la contraseña:", err);
        if (err.message.includes('404')) {
          setError("No existe un usuario con este correo electrónico.");
        } else {
          setError("Error al recuperar la contraseña. Inténtalo de nuevo.");
        }
      }
    }
  };

  return (
    <div className={styles.changeContainer}>
      <div className={styles.changeForm}>
        <h2>{mode === "change" ? "Cambiar Contraseña" : "Recuperar Contraseña"}</h2>
        <form onSubmit={handleSubmit}>
          {mode === "recovery" && (
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
          )}
          
          {mode === "change" && (
            <div className={styles.inputGroup}>
              <label htmlFor="currentPassword">Contraseña actual</label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={values.currentPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}

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
          {mensaje && <p className={styles.success}>{mensaje}</p>}
          
          <button type="submit" className={styles.submitButton}>
            {mode === "change" ? "Cambiar contraseña" : "Recuperar contraseña"}
          </button>
          
          {onBack && (
            <button
              type="button"
              className={styles.submitButton}
              onClick={onBack}
              style={{ marginTop: "0.5rem" }}
            >
              Regresar al login
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default ChangeTable;
