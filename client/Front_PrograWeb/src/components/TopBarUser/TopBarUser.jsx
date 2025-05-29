import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/userContext';
import styles from '../TopBar/TopBar.module.css'; // Usa el CSS de la topbar original

const TopBarUser = ({ handleSearch, busqueda, setBusqueda }) => {
  const { logout, currentUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className={styles.topbar}>
      <div className={styles.linksContainer}>
        <Link to="/" className={styles.link}>
          <img
            src="https://play.pokemonshowdown.com/sprites/ani/pikachu.gif"
            alt="Inicio"
            className={styles.linkGif}
          />
          Inicio
        </Link>
        <Link to="/carrito" className={styles.link}>
          <span role="img" aria-label="Carrito" style={{ fontSize: 22, marginRight: 6 }}>🛒</span>
          Carrito
        </Link>
        <span className={styles.link} style={{ marginLeft: '1.5rem', fontWeight: 'bold' }}>
          {currentUser?.nombre ? `Hola, ${currentUser.nombre}` : 'Usuario'}
        </span>
        <button
          onClick={handleLogout}
          className={styles.searchButton}
          style={{ marginLeft: '1.5rem', background: '#e74c3c', color: '#fff', border: 'none' }}
        >
          Cerrar sesión
        </button>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
};

export default TopBarUser;
