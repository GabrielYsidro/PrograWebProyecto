import { useUserContext } from '../../contexts/userContext';
import styles from "./CambiarContra.module.css";

function CambiarContra() {
    const { currentUser } = useUserContext();

    const handleSubmit = (event) => {
        event.preventDefault();
        // lógica para cambiar contraseña aquí
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
        </div>
    );
}

export default CambiarContra;