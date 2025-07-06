import { useState } from 'react';
import { useUserContext } from '../../contexts/userContext';
import styles from "./CambiarContra.module.css";

function CambiarContra() {
    const { users,
      setUsers,
      currentUser,
      addUser,
      login,
      logout,
      activarUsuario,
      desactivarUsuario,
      fetchUsers,
      changePassword } = useUserContext();
    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const currentPassword = event.target.currentPassword.value;
        const newPassword = event.target.newPassword.value;

        if (!currentUser) {
            setError("No hay usuario autenticado.");
            setMensaje("");
            return;
        }

        if (currentPassword !== currentUser.password) {
            setError("La contraseña actual es incorrecta.");
            setMensaje("");
            return;
        }

        if (newPassword.length < 4) {
            setError("La nueva contraseña debe tener al menos 4 caracteres.");
            setMensaje("");
            return;
        }

        changePassword(currentUser.id, newPassword)
            .then(() => {
                setMensaje("¡Contraseña cambiada exitosamente!");
                setError("");
            }
            )
            .catch((err) => {
                console.error("Error al cambiar la contraseña:", err);
                setError("Error al cambiar la contraseña. Inténtalo de nuevo.");
                setMensaje("");
            }
        );  

    };


    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Cambiar Contraseña</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="currentPassword" className={styles.label}>Contraseña Actual</label>
                    <input type="password" className={styles.input} id="currentPassword" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="newPassword" className={styles.label}>Nueva Contraseña</label>
                    <input type="password" className={styles.input} id="newPassword" required />
                </div>
                <button type="submit" className={styles.boton}>Cambiar Contraseña</button>
            </form>
            {error && <p className={styles.error}>{error}</p>}
            {mensaje && <p className={styles.success}>{mensaje}</p>}
        </div>
    );
}

export default CambiarContra;