import { useUserContext } from '../../contexts/UserContext';
import styles from './TopBarUser.module.css'; // Asegúrate de tener este CSS o reemplázalo con estilos inline

const TopBarUser = ({ handleSearch, busqueda, setBusqueda }) => {
  const { logout, usuario } = useUserContext();

  return (
    <header className={styles.topbar}>
      <div className={styles.barra}>
        <form onSubmit={handleSearch} className={styles.form}>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.botonBuscar}>
            Buscar
          </button>
        </form>

        <div className={styles.usuarioInfo}>
          <span>Hola, {usuario?.nombre || 'Usuario'}</span>
          <button onClick={logout} className={styles.logoutButton}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBarUser;
